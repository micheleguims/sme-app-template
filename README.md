# Manual de Aplicativos React — SME

Manual navegável e base inicial para aplicativos React com JavaScript da SME. Usa Next.js App Router, componentes reutilizáveis e a identidade visual do [Design System & UI Guidelines](https://design-guidelines-gsd.netlify.app/).

O manual é público dentro do ambiente em que for hospedado. Não contém login, API, banco nem dados reais. **Copiar este repositório não torna um novo aplicativo pronto para tratar dados pessoais**: autenticação, autorização, retenção, backups e implantação precisam ser definidos e testados para cada produto.

## Requisitos e execução

- Node.js 20.9 ou superior; recomenda-se uma versão LTS suportada.
- `npm install`
- `npm run dev` — abre em `http://localhost:3000`.
- `npm run dev -- --port 5174` — use outra porta se necessário.
- `npm run lint` — verifica React e Next.js.
- `npm run build` — gera a aplicação de produção.
- `npm run check` — executa lint e build.
- `npm run start` — serve o build em Node.js.

## Estrutura

```text
src/
├── app/                 # rotas, layout e metadados do App Router
├── assets/              # logo institucional reutilizado do projeto de referência
├── components/          # navegação, páginas e componentes de interface
├── content/manual.js    # capítulos e referências do manual
└── styles/globals.css   # tokens e estilos globais
```

Edite `src/content/manual.js` para atualizar o texto e as fontes do manual. Os exemplos interativos de componentes estão em `src/components/ComponentGallery.jsx`. As páginas do manual são geradas por `src/app/[slug]/page.jsx`.

## Ao iniciar um aplicativo

1. Copie o repositório e substitua o conteúdo do manual pelas rotas e funcionalidades do produto.
2. Defina finalidade dos dados, perfis, permissões por recurso e responsáveis.
3. Configure o registro Microsoft Entra ID próprio do aplicativo, quando houver login. Não reutilize identificadores, URLs de retorno ou credenciais de outro app.
4. Crie uma camada de acesso à API executada no servidor para dados e segredos protegidos. A API deve validar tokens e autorizar cada operação.
5. Revise a política de cache para dados específicos de usuários, testes de permissão, acessibilidade e operação antes da publicação.

O manual descreve alternativas como API interna, Supabase e Firebase. Nenhuma está configurada neste repositório; a escolha depende do produto e das decisões de segurança da SME.

## Hospedagem interna

Next.js suporta execução como servidor Node.js ou contêiner. Este projeto usa `output: "standalone"` para facilitar a implantação. Em produção, coloque um proxy reverso com HTTPS na frente do processo Node, configure domínio e monitore o serviço. Consulte a [documentação de self-hosting do Next.js](https://nextjs.org/docs/app/guides/self-hosting).

## Referências principais

- [React](https://react.dev/learn) e [Next.js](https://nextjs.org/docs/app)
- [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity-platform/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [ANPD — tratamento de dados pelo Poder Público](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_tratamento_de_dados_pessoais_pelo_poder_publico)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
