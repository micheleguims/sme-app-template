<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Regras de segurança para qualquer app criado a partir deste projeto

Estas regras valem para todo código, mesmo que o pedido não fale em segurança. O detalhamento está em `src/content/manual.js`, nos capítulos `seguranca`, `integracoes` e `arquitetura`.

- **Segredos:** nunca escreva senhas, chaves ou tokens no código, em `public/` ou em variáveis `NEXT_PUBLIC_`. Eles ficam em variáveis de ambiente do servidor, fora do repositório.
- **Permissões:** esconder um botão, menu ou página não protege nada. Verifique no servidor ou na API quem pode acessar cada registro e ação, inclusive anexos, e negue por padrão.
- **Dados enviados à tela:** mande ao navegador só os campos que a tela usa. Tudo o que chega ao navegador pode ser visto pela pessoa usuária.
- **Armazenamento no navegador:** não guarde tokens, sessões ou dados escolares em `localStorage`.
- **Entradas:** trate tudo o que vem de fora como não confiável e valide no servidor, mesmo que o formulário já valide. Isso inclui arquivos enviados.
- **Dados reais:** use apenas dados fictícios em exemplos, testes e demonstrações. Não registre em logs ou mensagens de erro dados pessoais, tokens ou detalhes internos.
- **Dados de crianças e adolescentes:** colete só o necessário. Se o app for tratar dados reais, avise que ele precisa de revisão de segurança e de análise com a área responsável antes de ser publicado.
- **Limite:** seguir estas regras não garante que o app esteja seguro. Não afirme que ele está seguro; diga o que foi verificado e o que falta verificar.

## Apps em PHP

Este template é em React, mas as regras acima valem também para PHP, adaptando o que for específico de Next.js. Em PHP, siga também estas:

- **Banco de dados:** nunca monte consultas juntando texto digitado pela pessoa. Use consultas preparadas.
- **Senhas e configurações:** mantenha arquivos como `.env` fora da pasta pública.
- **Senhas de usuários:** guarde sempre com `password_hash`, nunca como texto puro, e confira com `password_verify`.
- **Conteúdo na tela:** trate o que a pessoa digitou com `htmlspecialchars` antes de exibir em HTML.
- **Arquivos enviados:** guarde fora da pasta pública, para que não possam ser executados.
- **Mensagens de erro:** desligue `display_errors` no site publicado e registre os erros em log.
- **Atualizações:** mantenha o PHP e seus pacotes em versões que ainda recebem correções de segurança.
