import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Component, ShieldCheck } from "lucide-react";
import { chapters } from "@/content/manual";

const highlights = [
  { icon: Component, title: "Interface consistente", text: "Tokens, componentes e estados para as telas da SME.", href: "/interface" },
  { icon: Code2, title: "Código organizado", text: "Responsabilidades claras em React e Next.js.", href: "/arquitetura" },
  { icon: ShieldCheck, title: "Segurança desde o início", text: "Acesso, dados escolares e revisão antes de publicar.", href: "/seguranca" },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="kicker"><BookOpen size={15} aria-hidden="true" /> BASE DE DESENVOLVIMENTO · SME</p>
          <h1>Um ponto de partida para os próximos aplicativos da rede.</h1>
          <p>Um manual de interface, React, arquitetura e segurança. Consulte os padrões, explore os componentes e use a estrutura deste repositório para começar um novo produto.</p>
          <div className="home-hero__actions"><Link className="hero-button" href="/fundamentos">Começar a leitura <ArrowRight size={18} aria-hidden="true" /></Link><Link className="hero-link" href="/componentes">Explorar componentes</Link></div>
        </div>
        <div className="home-hero__visual" aria-hidden="true">
          <div className="visual-window"><div className="visual-window__bar"><i /><i /><i /></div><div className="visual-window__body"><div className="visual-window__nav"><b /><span /><span /><span /></div><div className="visual-window__content"><div className="visual-window__heading" /><div className="visual-window__subheading" /><div className="visual-window__cards"><span /><span /><span /></div><div className="visual-window__table"><b /><i /><i /><i /></div></div></div></div>
          <span className="visual-caption">PADRÕES PRONTOS PARA EVOLUIR</span>
        </div>
      </section>

      <section className="overview-section" aria-labelledby="principios-title">
        <div className="section-heading"><p className="kicker">O QUE VOCÊ ENCONTRA AQUI</p><h2 id="principios-title">Padrões que se transformam em código</h2><p>O guia visual orienta a interface. A arquitetura e as verificações de segurança orientam a implementação de cada app.</p></div>
        <div className="highlight-grid">{highlights.map(({ icon: Icon, title, text, href }) => <Link className="highlight-card" href={href} key={title}><span className="highlight-card__icon"><Icon size={23} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p><span className="highlight-card__link">Ler capítulo <ArrowRight size={15} aria-hidden="true" /></span></Link>)}</div>
      </section>

      <section className="overview-section" aria-labelledby="capitulos-title">
        <div className="section-heading section-heading--row"><div><p className="kicker">ÍNDICE DO MANUAL</p><h2 id="capitulos-title">Siga a sequência ou consulte por tema</h2></div><span>{chapters.length} capítulos</span></div>
        <div className="chapter-grid">{chapters.map((chapter, index) => <Link href={`/${chapter.slug}`} className="chapter-card" key={chapter.slug}><span className="chapter-card__number">{String(index + 1).padStart(2, "0")}</span><div><h3>{chapter.label}</h3><p>{chapter.description}</p></div><ArrowRight size={18} aria-hidden="true" /></Link>)}</div>
      </section>

      <section className="home-callout"><div><p className="kicker">NOVO PROJETO</p><h2>Vai criar um aplicativo?</h2><p>Comece pelos dados, pessoas e permissões. Depois use os componentes e a estrutura inicial deste repositório.</p></div><Link className="hero-button hero-button--light" href="/novo-app">Ver roteiro de criação <ArrowRight size={17} aria-hidden="true" /></Link></section>
    </div>
  );
}
