"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";
import { Badge, Button, Card, Notice, TextField } from "@/components/ui";

export default function ComponentGallery() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="gallery-grid">
      <Card title="Ações" description="Uma hierarquia clara para a tarefa principal e ações de apoio.">
        <div className="gallery-row">
          <Button onClick={() => setSubmitted(true)}>Confirmar exemplo <ArrowRight size={16} aria-hidden="true" /></Button>
          <Button variant="secondary" onClick={() => setSubmitted(false)}>Secundário</Button>
          <Button variant="subtle" onClick={() => setSubmitted(false)}>Ação discreta</Button>
          <Button disabled>Indisponível</Button>
        </div>
        {submitted && <div className="gallery-feedback"><CheckCircle2 size={17} aria-hidden="true" /> Ação de demonstração concluída.</div>}
      </Card>

      <Card title="Status e prioridades" description="Rótulo e cor trabalham juntos para indicar significado.">
        <div className="gallery-row">
          <Badge>Aberto</Badge>
          <Badge tone="info">Em atendimento</Badge>
          <Badge tone="warning">Em análise</Badge>
          <Badge tone="success">Concluído</Badge>
          <Badge tone="danger">Crítico</Badge>
        </div>
      </Card>

      <Card title="Entrada e retorno" description="Rótulo, ajuda e erro ficam associados ao campo.">
        <div className="gallery-field">
          <TextField id="gallery-search" label="Busca geral" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Digite um termo" hint="Exemplo local, sem consulta a dados reais." />
          <span className="gallery-search-icon"><Search size={18} aria-hidden="true" /></span>
        </div>
        <p className="gallery-query">{query ? `Você digitou: ${query}` : "Digite para ver o estado preenchido."}</p>
      </Card>

      <Card title="Avisos" description="Mensagens mostram o que aconteceu e o próximo passo.">
        <div className="gallery-notices">
          <Notice title="Informação">Exemplo de orientação para a pessoa usuária.</Notice>
          <Notice tone="warning" title="Atenção">Revise os dados antes de prosseguir.</Notice>
        </div>
      </Card>
    </div>
  );
}
