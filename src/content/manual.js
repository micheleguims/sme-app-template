// Conteúdo editorial do manual. Mantenha exemplos sem dados reais de pessoas ou escolas.
export const chapters = [
  {
    slug: "fundamentos",
    label: "Fundamentos",
    icon: "book",
    title: "Comece pelo problema, pelos dados e pelo acesso",
    description: "Decisões iniciais que tornam um aplicativo da SME previsível para quem usa e para quem mantém.",
    sections: [
      {
        title: "Antes da primeira tela",
        text: "Defina quem usará o aplicativo, quais tarefas ele resolve, quais dados manipula e quem pode consultar cada registro. O template oferece uma estrutura inicial; as regras de negócio e de acesso pertencem ao aplicativo criado a partir dele.",
        bullets: ["Registre finalidade, responsáveis e categorias de dados tratados.", "Desenhe os perfis, as ações e o alcance de cada perfil: unidade, CRE ou rede.", "Escolha onde o app, a API e o banco serão hospedados e como serão atualizados."],
        sources: [{ label: "ANPD · tratamento pelo Poder Público", url: "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_tratamento_de_dados_pessoais_pelo_poder_publico" }],
      },
      {
        title: "O que é padrão e o que é decisão do produto",
        text: "Layout, componentes acessíveis, organização de código, tratamento de erros e revisão de segurança são padrões comuns. Perfis, prazos, campos e fluxos de aprovação dependem de cada serviço.",
        note: "Não copie as regras de chamados ou permissões de um aplicativo para outro sem redesenhar o modelo de acesso.",
      },
      {
        title: "Escolha da arquitetura",
        text: "Este repositório usa Next.js com App Router e execução em Node.js. Ele permite manter código e segredos no servidor quando um novo app precisar disso. Supabase e Firebase são alternativas possíveis para produtos específicos, desde que suas regras de acesso sejam projetadas e testadas antes de usar dados pessoais.",
        bullets: ["API interna: autentique a chamada e autorize cada operação no servidor.", "Supabase: configure grants e políticas RLS para cada tabela exposta.", "Firebase: escreva e teste regras; consultas do Firestore precisam satisfazê-las."],
        sources: [{ label: "Next.js · estrutura", url: "https://nextjs.org/docs/app/getting-started/project-structure" }, { label: "Supabase · RLS", url: "https://supabase.com/docs/guides/database/postgres/row-level-security" }, { label: "Firebase · regras de consulta", url: "https://firebase.google.com/docs/firestore/security/rules-query" }],
      },
    ],
  },
  {
    slug: "interface",
    label: "Interface",
    icon: "palette",
    title: "Uma interface reconhecível em todos os aplicativos",
    description: "Cores, tipografia, navegação e estados com o mesmo significado em cada tela.",
    sections: [
      {
        title: "Fundamentos visuais",
        text: "Use os tokens de cor, tipografia, espaçamento e borda definidos no projeto. O guia de design da equipe é a referência para valores e estados.",
        bullets: ["Títulos em Manrope e texto de interface em Roboto Flex, com fontes alternativas locais.", "Azul institucional para navegação e ação principal; cores semânticas para sucesso, aviso e erro.", "Comece pela escala de espaçamento e pela grade responsiva antes de ajustar medidas pontuais."],
        sources: [{ label: "Design System & UI Guidelines", url: "https://design-guidelines-gsd.netlify.app/" }],
      },
      {
        title: "Componentes e estados",
        text: "A mesma ação deve ter o mesmo componente, rótulo e comportamento. Mostre estados de repouso, foco, hover, desabilitado, carregando, erro e sucesso quando fizerem sentido.",
        bullets: ["Use rótulos visíveis para campos e mensagens de erro próximas ao campo.", "Nunca comunique status apenas por cor; combine texto, ícone ou outra indicação.", "Reserve confirmação forte para ações irreversíveis e mostre retorno após ações relevantes."],
        sources: [{ label: "WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/" }],
      },
      {
        title: "Navegação e responsividade",
        text: "O menu lateral serve ao desktop. Em telas menores, a navegação se transforma em um painel que pode ser aberto e fechado por teclado. Páginas devem ter título, contexto, ação principal e estados vazios claros.",
        bullets: ["Organize itens por tarefa, não pelo nome da tabela ou tecnologia.", "Indique a página atual visualmente e com aria-current.", "Em tabelas densas, ofereça rolagem horizontal ou uma apresentação adequada ao espaço."],
      },
    ],
  },
  {
    slug: "componentes",
    label: "Componentes",
    icon: "blocks",
    title: "Kit de componentes de interface",
    description: "Blocos pequenos e configuráveis para manter a aparência e o comportamento consistentes.",
    sections: [
      {
        title: "Componha antes de duplicar",
        text: "Botões, badges, cards, campos e avisos vivem em src/components/ui. Eles recebem props para variantes e conteúdo. Componentes de uma funcionalidade específica devem ficar junto da funcionalidade.",
        code: "import { Button, Badge, Card } from '@/components/ui';\n\n<Card title=\"Solicitações\">\n  <Badge tone=\"warning\">Em análise</Badge>\n  <Button>Nova solicitação</Button>\n</Card>",
      },
      {
        title: "Critério de extração",
        text: "Extraia um componente quando ele representar uma parte clara da interface, aparecer em mais de um lugar ou tiver comportamento próprio. Evite criar uma abstração para cada linha de JSX.",
        sources: [{ label: "React · Thinking in React", url: "https://react.dev/learn/thinking-in-react" }],
      },
    ],
  },
  {
    slug: "arquitetura",
    label: "Arquitetura",
    icon: "layers",
    title: "Cada parte do sistema com uma responsabilidade",
    description: "Uma estrutura que ajuda outra pessoa a localizar, modificar e revisar o código.",
    sections: [
      {
        title: "Estrutura inicial",
        text: "O App Router define páginas e layouts. Componentes compartilhados ficam fora das rotas; acesso a dados e autenticação de apps futuros devem ficar em módulos próprios, executados no servidor quando lidarem com segredos.",
        code: "src/\n├── app/             # rotas, layouts e páginas\n├── components/      # interface compartilhada\n├── content/         # textos do manual\n└── styles/          # tokens e estilos globais\n\n# Ao criar um app com dados:\nsrc/lib/              # sessão e acesso à API no servidor\nsrc/features/         # componentes e lógica por funcionalidade",
        sources: [{ label: "Next.js · src folder", url: "https://nextjs.org/docs/app/api-reference/file-conventions/src-folder" }],
      },
      {
        title: "Separação de responsabilidades",
        text: "A página compõe a experiência; o componente apresenta uma parte da interface; a camada de dados busca e transforma registros; a API decide se a operação é permitida. Essa separação facilita revisão sem fragmentar o projeto em arquivos sem propósito.",
        bullets: ["Regras de autorização não pertencem exclusivamente ao componente ou ao menu.", "Evite buscar o mesmo dado em vários componentes quando ele pode ser compartilhado na mesma renderização.", "Retorne ao navegador apenas os campos que a tela necessita."],
        sources: [{ label: "Next.js · autenticação e DAL", url: "https://nextjs.org/docs/app/guides/authentication" }],
      },
      {
        title: "Padrões de código",
        text: "Dê nomes por tarefa e responsabilidade, trate erros no limite apropriado e mantenha funções pequenas o bastante para explicar seu resultado. Comentários devem registrar decisões e exceções, não repetir o código.",
        bullets: ["Use ESLint e execute o build antes de publicar.", "Teste regras de permissão com casos permitidos e negados.", "Versione mudanças de banco e documente como reverter uma implantação."],
      },
    ],
  },
  {
    slug: "react",
    label: "React e Next.js",
    icon: "atom",
    title: "React previsível, Next.js sem confusão de ambientes",
    description: "Props, estado, Hooks e fronteira entre navegador e servidor.",
    sections: [
      {
        title: "Componentes, props e estado",
        text: "Componentes descrevem a interface a partir de props e estado. Mantenha o estado mínimo: derive valores calculáveis em vez de armazená-los duas vezes. Não altere props ou estado diretamente.",
        sources: [{ label: "React · Thinking in React", url: "https://react.dev/learn/thinking-in-react" }, { label: "React · Rules", url: "https://react.dev/reference/rules" }],
      },
      {
        title: "Hooks e efeitos",
        text: "Chame Hooks no nível superior do componente ou de outro Hook. Efeitos servem para sincronizar com sistemas externos, não para toda transformação de dados. Extraia um Hook quando uma lógica de estado precisar ser reutilizada ou isolada.",
        bullets: ["Mantenha a renderização sem efeitos colaterais.", "Use eventos para ações iniciadas pela pessoa usuária.", "Ao buscar dados, trate carregamento, erro e cancelamento conforme o fluxo."],
        sources: [{ label: "React · Rules of Hooks", url: "https://react.dev/reference/rules/rules-of-hooks" }, { label: "React · pureza", url: "https://react.dev/reference/rules/components-and-hooks-must-be-pure" }],
      },
      {
        title: "Servidor e navegador",
        text: "No App Router, páginas e layouts são componentes de servidor por padrão. Use 'use client' só onde houver estado, eventos ou APIs do navegador. Código com segredos e acesso privilegiado deve permanecer no servidor.",
        note: "Uma página protegida visualmente não protege uma Server Action ou Route Handler. Cada entrada precisa da própria verificação de autorização.",
        sources: [{ label: "Next.js · Server and Client Components", url: "https://nextjs.org/docs/app/getting-started/server-and-client-components" }, { label: "Next.js · autenticação", url: "https://nextjs.org/docs/app/guides/authentication" }],
      },
    ],
  },
  {
    slug: "integracoes",
    label: "Integrações",
    icon: "plug",
    title: "Integre serviços sem misturar credenciais e interface",
    description: "API interna, Microsoft Entra e alternativas de dados exigem decisões explícitas.",
    sections: [
      {
        title: "API interna",
        text: "Centralize a URL, o tratamento de respostas e o acesso a dados em módulos de servidor. A API precisa validar o token destinado a ela e autorizar a operação sobre o recurso específico. Defina limites, timeouts e mensagens públicas que não revelem detalhes internos.",
        bullets: ["Diferencie falha de autenticação (401) de falta de permissão (403). Se a pessoa não pode saber que um registro existe, responda 404 em vez de 403.", "Valide formato, tamanho e valores recebidos na API, mesmo quando o formulário já valida.", "Para dados pessoais, revise a estratégia de cache e evite resposta reutilizável entre usuários."],
        sources: [{ label: "OWASP · REST Security", url: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" }, { label: "Next.js · fetch e cache", url: "https://nextjs.org/docs/app/api-reference/functions/fetch" }],
      },
      {
        title: "Microsoft Entra ID",
        text: "Cada aplicativo terá seu próprio registro. Documente tenant, URL de retorno, escopos, registro da API e quem administra as permissões. Se o novo app usar autenticação no servidor, configure a plataforma Web e um fluxo de sessão apropriado; não copie automaticamente a configuração MSAL de uma SPA.",
        bullets: ["Use uma biblioteca de autenticação consolidada e o fluxo de código de autorização adequado à plataforma.", "Mantenha credenciais apenas no servidor; nunca use NEXT_PUBLIC_ para segredos.", "A API valida assinatura, emissor, audiência e permissões do token recebido."],
        sources: [{ label: "Microsoft · web app e APIs", url: "https://learn.microsoft.com/en-us/entra/identity-platform/scenario-web-app-call-api-app-registration" }, { label: "Microsoft · access tokens", url: "https://learn.microsoft.com/en-us/entra/identity-platform/access-tokens" }],
      },
      {
        title: "Supabase, Firebase e outros serviços",
        text: "Use apenas quando a necessidade do produto justificar. Supabase exige grants e RLS nas tabelas expostas; Firestore exige Security Rules e consultas compatíveis. SDKs de servidor podem contornar regras do cliente e precisam de autorização própria. Registre permissões, retenção, contratos, localização dos dados e responsáveis antes de adotar um serviço para dados escolares.",
        sources: [{ label: "Supabase · RLS", url: "https://supabase.com/docs/guides/database/postgres/row-level-security" }, { label: "Firebase · regras", url: "https://firebase.google.com/docs/firestore/security/rules-query" }],
      },
    ],
  },
  {
    slug: "seguranca",
    label: "Segurança e LGPD",
    icon: "shield",
    title: "Proteja os dados em cada camada",
    description: "Identidade, autorização, entradas, arquivos e operação precisam funcionar em conjunto. Estas regras valem também para apps em PHP.",
    sections: [
      {
        title: "Dados de crianças e adolescentes",
        text: "Mapeie a finalidade e a base legal com a área responsável, colete apenas o necessário e avalie o melhor interesse de crianças e adolescentes em cada tratamento. O manual usa apenas dados fictícios; um app real precisa de análise de risco e governança próprias.",
        note: "Este manual orienta, mas não garante a segurança de um aplicativo nem cobre todos os riscos. Um app com dados reais precisa de revisão de segurança própria antes de ser publicado.",
        sources: [{ label: "ANPD · crianças e adolescentes", url: "https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-divulga-enunciado-sobre-o-tratamento-de-dados-pessoais-de-criancas-e-adolescentes" }, { label: "ANPD · Poder Público", url: "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_tratamento_de_dados_pessoais_pelo_poder_publico" }],
      },
      {
        title: "Autenticação não substitui autorização",
        text: "O login responde quem é a pessoa. A autorização decide quais registros e ações ela pode acessar. Negue por padrão e verifique a permissão para cada requisição e objeto, inclusive anexos e ações do servidor.",
        bullets: ["Teste o acesso cruzado entre escolas e CREs com contas de perfis diferentes.", "Filtre consultas pelo alcance do usuário no servidor ou no banco.", "Retorne somente os campos necessários para a tarefa."],
        sources: [{ label: "OWASP · Authorization", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" }, { label: "Next.js · Authentication", url: "https://nextjs.org/docs/app/guides/authentication" }],
      },
      {
        title: "Entrada, upload e armazenamento",
        text: "Considere toda entrada não confiável. Verifique tipo, tamanho, formato e autorização no servidor. Arquivos precisam de verificação de conteúdo, nome gerado pelo sistema e armazenamento protegido fora de uma pasta pública quando exigirem acesso controlado.",
        note: "Não coloque tokens, sessões ou dados escolares em localStorage. Não publique chaves, anexos privados nem respostas sensíveis em public/.",
        sources: [{ label: "OWASP · File Upload", url: "https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html" }, { label: "OWASP · HTML5 Security", url: "https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html" }],
      },
      {
        title: "Operação segura",
        text: "Use HTTPS, proxy reverso, segredos fora do repositório, usuário de banco com privilégios mínimos, backups testados e registros de eventos sem dados sensíveis. Revise dependências e teste permissões antes de cada publicação.",
        sources: [{ label: "Next.js · self-hosting", url: "https://nextjs.org/docs/app/guides/self-hosting" }, { label: "OWASP · Logging", url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html" }],
      },
      {
        title: "Apps em PHP",
        text: "Este manual e o template são em React, mas as regras de acesso e de dados desta página valem igualmente para PHP. Além delas, evite os erros mais graves e comuns nesse tipo de app:",
        bullets: [
          "Banco de dados: nunca monte consultas juntando texto digitado pela pessoa, pois isso permite invasão pelo banco (SQL injection). Use consultas preparadas.",
          "Senhas e configurações: mantenha arquivos como .env fora da pasta pública, pois um erro de configuração pode permitir que sejam baixados pelo navegador.",
          "Senhas de usuários: guarde sempre com password_hash, nunca como texto puro, e confira com password_verify.",
          "Conteúdo na tela: trate o que a pessoa digitou com htmlspecialchars antes de exibir em HTML, para que um código malicioso não rode na página.",
          "Arquivos enviados: guarde fora da pasta pública, para que um arquivo malicioso não possa ser executado.",
          "Mensagens de erro: desligue a exibição de erros no site publicado (display_errors), pois elas revelam detalhes internos. Registre os erros em log.",
          "Atualizações: mantenha o PHP e seus pacotes em versões que ainda recebem correções de segurança.",
        ],
        sources: [{ label: "OWASP · SQL Injection", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" }, { label: "OWASP · configuração do PHP", url: "https://cheatsheetseries.owasp.org/cheatsheets/PHP_Configuration_Cheat_Sheet.html" }, { label: "PHP · password_hash", url: "https://www.php.net/manual/pt_BR/function.password-hash.php" }, { label: "PHP · versões com suporte", url: "https://www.php.net/supported-versions.php" }],
      },
    ],
  },
  {
    slug: "problemas",
    label: "Problemas e soluções",
    icon: "life",
    title: "Transforme incidentes em decisões reutilizáveis",
    description: "Registre a causa, a correção e a regra que evita repetir o problema.",
    sections: [
      {
        title: "Modelo de registro",
        text: "Descreva o problema observado, seu impacto, a causa confirmada, a solução aplicada e como verificou o resultado. Termine com uma regra para os próximos projetos e uma referência técnica.",
        code: "Problema: o que aconteceu?\nImpacto: quais pessoas ou dados poderiam ser afetados?\nCausa: qual evidência explica a falha?\nSolução: o que mudou?\nVerificação: quais testes ou revisões passaram?\nRegra para novos apps: o que deve ser repetido?\nReferência: documentação oficial ou decisão interna.",
      },
      {
        title: "Exemplos de aprendizados",
        text: "Uma autorização apenas no menu vira verificação na API. Uma URL de anexo previsível vira consulta autenticada ao arquivo. Uma credencial em variável pública vira configuração exclusiva do servidor.",
        note: "Evite registrar tokens, nomes de alunos ou detalhes de incidentes sensíveis no manual público.",
      },
    ],
  },
  {
    slug: "novo-app",
    label: "Criar um app",
    icon: "rocket",
    title: "Do template à publicação",
    description: "Uma sequência curta para iniciar um produto sem esquecer dados, permissões e operação.",
    sections: [
      {
        title: "Preparar",
        text: "Copie o repositório, ajuste nome, domínio, responsáveis e documentação. Execute a aplicação localmente e retire do novo produto as páginas de manual que não façam parte dele.",
        code: "npm install\nnpm run dev -- --port 5174\nnpm run check\nnpm run start",
        note: "Next.js usa a porta 3000 por padrão. Ajuste a porta de desenvolvimento ou produção conforme o ambiente.",
      },
      {
        title: "Implementar",
        text: "Defina primeiro dados, perfis e decisões de acesso. Depois componha o layout e os componentes. Configure Entra e API para o aplicativo específico e valide entradas, arquivos e respostas de erro.",
        bullets: ["Crie o registro Microsoft e configure URLs de retorno para cada ambiente.", "Implemente autorização por ação e recurso no servidor ou na API.", "Use dados fictícios nos ambientes de demonstração e nos exemplos."],
      },
      {
        title: "Verificar e publicar",
        text: "Revise lint, build, fluxos, permissões negativas, navegação por teclado, responsividade e operação no Linux. Configure HTTPS e proxy reverso. Planeje atualização, reversão, backup e observabilidade.",
        sources: [{ label: "Next.js · deploy", url: "https://nextjs.org/docs/app/getting-started/deploying" }, { label: "WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/" }],
      },
    ],
  },
];

export function getChapter(slug) {
  return chapters.find((chapter) => chapter.slug === slug);
}
