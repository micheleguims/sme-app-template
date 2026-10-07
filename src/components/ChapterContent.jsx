import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { chapters } from "@/content/manual";
import { Notice } from "@/components/ui";
import ComponentGallery from "@/components/ComponentGallery";

export default function ChapterContent({ chapter }) {
  const index = chapters.findIndex((item) => item.slug === chapter.slug);
  const previous = chapters[index - 1];
  const next = chapters[index + 1];

  return (
    <article className="chapter-page">
      <div className="chapter-hero">
        <p className="kicker"><BookOpen size={15} aria-hidden="true" /> MANUAL / {String(index + 1).padStart(2, "0")}</p>
        <h1>{chapter.title}</h1>
        <p className="chapter-hero__description">{chapter.description}</p>
      </div>

      <div className="chapter-layout">
        <div className="chapter-body">
          {chapter.slug === "componentes" && <ComponentGallery />}
          {chapter.sections.map((section, sectionIndex) => (
            <section className="manual-section" id={`secao-${sectionIndex + 1}`} key={section.title}>
              <div className="manual-section__heading"><span>{String(sectionIndex + 1).padStart(2, "0")}</span><h2>{section.title}</h2></div>
              <p>{section.text}</p>
              {section.bullets && <ul className="manual-list">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              {section.code && <pre className="code-block"><code>{section.code}</code></pre>}
              {section.note && <Notice tone="warning" title="Atenção">{section.note}</Notice>}
              {section.sources && <div className="source-list"><span>REFERÊNCIAS</span>{section.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<ExternalLink size={13} aria-hidden="true" /></a>)}</div>}
            </section>
          ))}
        </div>

        <aside className="on-this-page" aria-label="Nesta página">
          <strong>NESTA PÁGINA</strong>
          {chapter.sections.map((section, sectionIndex) => <a href={`#secao-${sectionIndex + 1}`} key={section.title}>{section.title}</a>)}
        </aside>
      </div>

      <nav className="chapter-pagination" aria-label="Navegação entre capítulos">
        {previous ? <Link href={`/${previous.slug}`}><ArrowLeft size={17} aria-hidden="true" /><span><small>ANTERIOR</small>{previous.label}</span></Link> : <span />}
        {next && <Link href={`/${next.slug}`}><span><small>PRÓXIMO</small>{next.label}</span><ArrowRight size={17} aria-hidden="true" /></Link>}
      </nav>
    </article>
  );
}
