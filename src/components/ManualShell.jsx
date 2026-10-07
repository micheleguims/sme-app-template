"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Atom, Blocks, BookOpen, ChevronRight, Layers3, LifeBuoy,
  Menu, Palette, PlugZap, Rocket, Search, ShieldCheck, X,
} from "lucide-react";
import { chapters } from "@/content/manual";
import logoPrefeitura from "@/assets/logoPrefeitura.png";

const icons = {
  book: BookOpen,
  palette: Palette,
  blocks: Blocks,
  layers: Layers3,
  atom: Atom,
  plug: PlugZap,
  shield: ShieldCheck,
  life: LifeBuoy,
  rocket: Rocket,
};

export default function ManualShell({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const menuButtonRef = useRef(null);
  const filterRef = useRef(null);
  const visibleChapters = chapters.filter((chapter) =>
    `${chapter.label} ${chapter.title}`.toLocaleLowerCase("pt-BR").includes(filter.toLocaleLowerCase("pt-BR"))
  );
  const current = chapters.find((chapter) => pathname === `/${chapter.slug}`);

  useEffect(() => {
    if (menuOpen) filterRef.current?.focus();
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      {menuOpen && <button className="sidebar-overlay" type="button" aria-label="Fechar menu" onClick={closeMenu} />}
      <aside className={`sidebar ${menuOpen ? "sidebar--open" : ""}`} aria-label="Menu do manual" onKeyDown={(event) => { if (event.key === "Escape") closeMenu(); }}>
        <div className="sidebar__top">
          <div className="sidebar__brand">
            <span className="sidebar__brand-mark"><BookOpen size={23} strokeWidth={2.3} aria-hidden="true" /></span>
            <div><strong>Manual de aplicativos</strong><small>React · SME</small></div>
          </div>
          <button className="sidebar__close" type="button" aria-label="Fechar menu" onClick={closeMenu}><X size={21} /></button>
        </div>

        <div className="sidebar__search">
          <Search size={16} aria-hidden="true" />
          <label className="sr-only" htmlFor="manual-filter">Filtrar capítulos</label>
          <input id="manual-filter" ref={filterRef} value={filter} onChange={(event) => setFilter(event.target.value)} placeholder="Filtrar capítulos" />
        </div>

        <nav className="sidebar__nav" aria-label="Capítulos">
          <p className="sidebar__eyebrow">GUIA DE DESENVOLVIMENTO</p>
          <Link className={`sidebar__link ${pathname === "/" ? "sidebar__link--active" : ""}`} href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={closeMenu}>
            <BookOpen size={18} aria-hidden="true" /><span>Visão geral</span><ChevronRight className="sidebar__chevron" size={15} aria-hidden="true" />
          </Link>
          {visibleChapters.map((chapter) => {
            const Icon = icons[chapter.icon];
            const active = pathname === `/${chapter.slug}`;
            return (
              <Link key={chapter.slug} className={`sidebar__link ${active ? "sidebar__link--active" : ""}`} href={`/${chapter.slug}`} aria-current={active ? "page" : undefined} onClick={closeMenu}>
                <Icon size={18} aria-hidden="true" /><span>{chapter.label}</span><ChevronRight className="sidebar__chevron" size={15} aria-hidden="true" />
              </Link>
            );
          })}
          {visibleChapters.length === 0 && <p className="sidebar__empty">Nenhum capítulo encontrado.</p>}
        </nav>

        <div className="sidebar__footer">
          <Image src={logoPrefeitura} alt="Prefeitura do Rio · Educação" priority sizes="(max-width: 960px) 180px, 210px" />
          <p>Padrões para os próximos aplicativos da rede.</p>
        </div>
      </aside>

      <div className="workspace" inert={menuOpen}>
        <header className="topbar">
          <button className="topbar__menu" ref={menuButtonRef} type="button" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={22} /></button>
          <div className="topbar__path"><span>SME</span><ChevronRight size={14} aria-hidden="true" /><span>Manual de aplicativos</span>{current && <><ChevronRight size={14} aria-hidden="true" /><strong>{current.label}</strong></>}</div>
          <span className="topbar__edition">EDIÇÃO 2026</span>
        </header>
        <main id="conteudo" className="workspace__main" tabIndex={-1}>{children}</main>
        <footer className="workspace__footer"><span>Manual de Aplicativos React · SME</span><span>Exemplos sem dados reais</span></footer>
      </div>
    </div>
  );
}
