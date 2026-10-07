import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <div className="not-found"><p className="kicker">PÁGINA NÃO ENCONTRADA</p><h1>Este capítulo não existe.</h1><p>Volte ao índice para encontrar o conteúdo do manual.</p><Link className="hero-button" href="/"><ArrowLeft size={17} aria-hidden="true" /> Voltar ao início</Link></div>;
}
