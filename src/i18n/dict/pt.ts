import type { Dict } from "../types";

export const pt: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Idioma",
    languageSwitcher: "Mudar idioma"
  },
  nav: {
    home: "Início",
    features: "Recursos",
    docs: "Documentação",
    compare: "Comparar",
    about: "Sobre",
    privacy: "Privacidade"
  },
  footer: {
    tagline: "Fluxos focados de SSH, SFTP e terminal para dispositivos Android.",
    documentation: "Documentação",
    comparison: "Comparação",
    privacy: "Privacidade",
    contact: "Contato"
  },
  home: {
    metaTitle: "Mobile SSH — Cliente SSH para Android",
    metaDescription:
      "O Mobile SSH é um cliente SSH focado para Android com terminais multi-sessão, transferência SFTP, chaves privadas, redirecionamento de portas e fluxos compatíveis com tmux.",
    eyebrow: "Cliente SSH para Android",
    h1: "Mobile SSH",
    intro:
      "Um cliente SSH focado para Android com terminais multi-sessão, autenticação por chave privada, transferência de arquivos SFTP, redirecionamento local de portas e controles compatíveis com tmux pensados para celular e tablet.",
    versionLine: "Disponível em 19 idiomas · versão 1.5",
    ctaDocs: "Ler a documentação",
    ctaPlay: "Em breve no Google Play",
    sectionAHead: "Feito para trabalho SSH no Android",
    sectionAIntro:
      "O Mobile SSH encurta o caminho comum de administração: salve um servidor, conecte, mantenha as sessões vivas, mova arquivos quando precisar e volte rápido aos terminais ativos.",
    features: [
      { title: "Terminal SSH", text: "Emulação VT100/xterm-256color com cores, teclas de cursor, scrollback, cópia e suporte ao teclado do Android." },
      { title: "Grade multi-sessão", text: "Execute até oito sessões ao mesmo tempo, mude tocando em um painel e dê toque duplo para foco em tela cheia." },
      { title: "Chaves privadas", text: "Use senhas ou chaves privadas importadas/coladas, incluindo Ed25519, RSA, ECDSA e DSA suportadas pela aplicação." },
      { title: "Transferência SFTP", text: "Mova arquivos entre o armazenamento do celular e um servidor remoto com painéis de navegação local e remota." },
      { title: "Redirecionamento de portas", text: "Salve especificações de túnel local junto com o perfil do servidor ou adicione túneis durante a conexão." },
      { title: "Reconexão resiliente", text: "Serviço em primeiro plano, wake locks, keepalives e tentativas de reconexão ajudam as sessões a sobreviver a mudanças de rede móvel." },
      { title: "Seleção no terminal", text: "Selecione texto do terminal para copiar, compartilhar ou selecionar todo o buffer visível; as cópias vão para a área de transferência do Android." },
      { title: "Amigável ao teclado", text: "Sugestões do Gboard e entrada por voz funcionam ao lado da linha extra de teclas; o texto em composição é armazenado em buffer até o limite da palavra." }
    ],
    multiHead: "Uma tela, várias shells ativas",
    multiP1:
      "A vista do terminal pode conter várias sessões SSH ativas em uma grade. Selecione um painel para digitar, use a linha extra de teclas para controles, faça pinça para ajustar o tamanho do texto e dê toque duplo para tela cheia.",
    multiP2:
      "O histórico de sessões e a recuperação de sessões ativas ajudam você a voltar ao trabalho atual depois de trocar de app, bloquear a tela ou recriar atividades no Android.",
    multiAlt:
      "Mobile SSH em um tablet Android de 10 polegadas mostrando quatro painéis de terminal SSH ativos lado a lado.",
    sftpHead: "SFTP quando o terminal não basta",
    sftpBody:
      "Abra a transferência de arquivos a partir de uma sessão conectada para navegar pelo armazenamento do celular e por diretórios remotos. Enfileire envios e downloads, ordene arquivos, lembre caminhos recentes por host e inspecione permissões remotas ao decidir o que mover.",
    sftpCtaGuide: "Guia de transferência de arquivos",
    sftpCtaAll: "Todos os recursos",
    sftpAlt: "Tela de transferência de arquivos do Mobile SSH em um celular com painéis local e remoto.",
    galleryHead: "Veja em um aparelho real",
    galleryIntro:
      "Capturas de celulares Android — as mesmas telas que você vai usar para adicionar servidores, trabalhar em terminais, rodar várias sessões e mover arquivos por SFTP.",
    galleryAlts: [
      "Tela inicial do Mobile SSH em um celular com os botões Servidores, Credenciais, Logs, Configurações, Depuração e Sobre.",
      "Diálogo Adicionar servidor em um celular mostrando os campos host, porta, credenciais, chave privada e encaminhamento de portas.",
      "Terminal SSH de sessão única em um celular com a linha extra de teclas embaixo.",
      "Duas sessões SSH empilhadas em um celular com o painel ativo destacado.",
      "Tela de transferência SFTP em um celular com os painéis Meu telefone e Host remoto.",
      "Diálogo Sobre em um celular mostrando versão, autor, licença e site."
    ],
    compareHead: "Seu lugar ao lado de Termux e Termius",
    compareIntro:
      "O Mobile SSH é intencionalmente enxuto: não é um ambiente Linux completo nem um cofre em nuvem para equipes. É uma ferramenta SSH/SFTP local para Android com acesso rápido aos controles de sessão que os usuários móveis mais usam.",
    compareGuideTitle: "Guia de comparação",
    compareGuideText: "Quando escolher Mobile SSH, Termux ou Termius em dispositivos Android.",
    privacyTitle: "Política de privacidade",
    privacyText: "Quais dados de conexão ficam locais e o que é enviado aos seus servidores."
  },
  features: {
    metaTitle: "Recursos | Mobile SSH",
    metaDescription:
      "Principais recursos do Mobile SSH para fluxos de SSH, terminal, SFTP, chave privada, tmux e redirecionamento de portas no Android.",
    eyebrow: "Lista de recursos",
    h1: "Recursos do Mobile SSH",
    intro:
      "O Mobile SSH é feito para uso direto de SSH no Android: abrir terminais, mantê-los vivos, mover arquivos, salvar servidores e se recuperar rápido de interrupções móveis.",
    groups: [
      {
        title: "Conexões",
        items: [
          "Autenticação por senha e por chave privada",
          "Chaves privadas Ed25519, RSA, ECDSA e DSA suportadas pela implementação atual",
          "Perfis de servidor salvos com host, porta, usuário, credencial, chave privada e túneis opcionais",
          "Registros de credenciais reutilizáveis selecionáveis no setup do servidor",
          "Histórico de sessões recentes para reconectar a conjuntos comuns de servidores",
          "Log de tentativas de login bem-sucedidas e falhas"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Comportamento de terminal estilo VT100/xterm-256color",
          "Buffer de scrollback de 5000 linhas",
          "Linha extra de teclas para ESC, TAB, CTRL, Shift, setas, Home, End, PgUp, PgDn e alternar teclado",
          "Toque para focar, opção de mostrar teclado ao toque, ações de copiar e copiar tudo",
          "Pinça para zoom de texto com redimensionamento do terminal remoto",
          "Modo tela cheia de painel por toque duplo",
          "Seleção de texto do terminal com Copiar, Compartilhar e Selecionar tudo",
          "Sugestões/autocorreção do Gboard e entrada por voz suportadas, com buffer de texto em composição"
        ]
      },
      {
        title: "Sessões",
        items: [
          "Até oito sessões SSH simultâneas",
          "Layout em grade para sessões ativas",
          "Serviço em primeiro plano para sobreviver ao fundo e ao bloqueio de tela",
          "Keepalives e tentativas de reconexão com backoff exponencial",
          "Entrada Sessões ativas a partir da tela inicial",
          "Acompanhamento de comandos tmux e sugestões de reattach para trabalho interrompido"
        ]
      },
      {
        title: "Arquivos e túneis",
        items: [
          "Navegador SFTP de painel duplo para arquivos locais e remotos",
          "Operações de envio e download em fila",
          "Renomear, apagar, criar, editar e detalhes remotos",
          "Ordenar por nome ou data com persistência por host",
          "Redirecionamento local de portas salvo com perfis de servidor",
          "Visualização de túneis em tempo de execução para sessões conectadas"
        ]
      },
      {
        title: "Localização",
        items: [
          "Traduções da interface: árabe, bengali, chinês (simplificado e tradicional), inglês, francês, alemão, hindi, indonésio, japonês, marata, pidgin nigeriano, português, russo, espanhol, tâmil, telugu, turco e urdu",
          "Segue o idioma do sistema Android; sem seletor próprio na app"
        ]
      }
    ],
    security:
      "Aviso de segurança: a aplicação atual armazena perfis de servidor e credenciais localmente no dispositivo Android. Não há sincronização em nuvem. Proteja o dispositivo com bloqueio de tela forte e evite salvar credenciais em aparelhos compartilhados."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius no Android",
    metaDescription:
      "Comparação equilibrada entre Mobile SSH, Termux e Termius para fluxos SSH no Android.",
    eyebrow: "Opções SSH no Android",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Estas ferramentas se sobrepõem em torno de SSH, mas têm propósitos diferentes. O Mobile SSH é um cliente SSH/SFTP focado para Android, o Termux é um ambiente Linux e o Termius é um cliente SSH multiplataforma com recursos de produtividade baseados em conta.",
    columns: {
      need: "Necessidade",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Propósito principal",
        mobileSsh: "Cliente dedicado de SSH, SFTP, túnel local e terminal para Android.",
        termux: "Emulador de terminal Android e ambiente Linux com pacotes APT.",
        termius: "Cliente SSH moderno para Android, iOS, desktop e fluxos de trabalho em equipe voltados à web."
      },
      {
        need: "Estilo de configuração",
        mobileSsh: "Digite um host ou salve um perfil de servidor e conecte direto.",
        termux: "Instale pacotes como OpenSSH, configure ferramentas de shell e trabalhe a partir de uma linha de comando estilo Linux.",
        termius: "Crie ou sincronize hosts, chaves, snippets e cofres pelo modelo de app/conta Termius."
      },
      {
        need: "Controles de terminal Android",
        mobileSsh: "Linha extra de teclas embutida, sessões em grade, painéis em tela cheia, zoom por pinça, seleção com copiar/compartilhar, sugestões Gboard, voz e rolagem compatível com tmux.",
        termux: "Ambiente de terminal poderoso; o comportamento depende das ferramentas e configuração instaladas.",
        termius: "Complemento de teclado móvel, gestos, abas, autocompletar, snippets e UX de terminal polida."
      },
      {
        need: "Transferência de arquivos",
        mobileSsh: "Transferência SFTP de duplo painel embutida, ligada à sessão SSH ativa.",
        termux: "Use ferramentas de linha de comando como scp, sftp, rsync ou utilitários instalados.",
        termius: "SFTP e gestão de hosts/chaves embutidas."
      },
      {
        need: "Trabalho multi-sessão",
        mobileSsh: "Até oito sessões SSH simultâneas em uma grade Android.",
        termux: "Use multiplexadores como tmux dentro do Termux ou em shells remotas.",
        termius: "Abas e visualização dividida, dependendo da plataforma e do plano."
      },
      {
        need: "Modelo de dados",
        mobileSsh: "Servidores, credenciais, histórico, ajustes e logs apenas locais.",
        termux: "Sistema de arquivos estilo Linux e pacotes dentro do ambiente do app Termux.",
        termius: "Cofres criptografados para hosts, chaves, snippets, regras de redirecionamento, known hosts e compartilhamento em equipe."
      },
      {
        need: "Melhor caso de uso",
        mobileSsh: "Você quer um app simples no Android para conectar a servidores, transferir arquivos e manter sessões vivas.",
        termux: "Você quer um ambiente de linha de comando completo no Android e está confortável instalando e configurando pacotes.",
        termius: "Você quer sincronização entre dispositivos, recursos polidos de produtividade, cofres e colaboração."
      }
    ],
    cards: [
      {
        title: "Escolha o Mobile SSH quando",
        body: "Você quer acesso SSH direto a partir do Android sem montar um ambiente Linux completo ou um modelo de conta sincronizada na nuvem. Especialmente adequado para servidores salvos, SFTP, sessões tmux e fluxos rápidos de túnel local."
      },
      {
        title: "Escolha o Termux quando",
        body: "Você precisa de gerenciamento de pacotes, shells, compiladores, scripting, rsync, curl, Git, Python, Node.js ou outras ferramentas Linux diretamente no dispositivo Android."
      },
      {
        title: "Escolha o Termius quando",
        body: "Você quer um espaço de trabalho SSH comercial e multiplataforma com cofre criptografado sincronizado, compartilhamento em equipe, gestão de chaveiros, snippets e um app consistente em vários dispositivos."
      }
    ],
    sources:
      "Fontes: o Termux se descreve como um emulador de terminal Android e ambiente Linux com pacotes APT e suporte a OpenSSH em [termux.dev](https://termux.dev/en/). O Termius descreve SSH, SFTP, Mosh, Telnet, Serial, complementos de teclado, SFTP, cofres criptografados e gestão de chaves em sua [página Android](https://www.termius.com/free-ssh-client-for-android) e na [documentação de cofres](https://termius.com/documentation/set-up-vaults)."
  },
  privacy: {
    metaTitle: "Política de Privacidade | Mobile SSH",
    metaDescription:
      "Política de privacidade do Mobile SSH, incluindo armazenamento local, transmissão de dados SSH, transferência de arquivos, logs e permissões Android.",
    eyebrow: "Privacidade",
    h1: "Política de Privacidade",
    intro:
      "O Mobile SSH é projetado como um cliente SSH local para Android. Não requer uma conta Mobile SSH e não oferece um serviço de sincronização em nuvem.",
    sections: [
      {
        heading: "Informações armazenadas no seu dispositivo",
        body: "Se você optar por salvar dados no app, o Mobile SSH os armazena localmente no dispositivo Android. Isso pode incluir perfis de servidor salvos, nomes de usuário, portas, senhas, chaves privadas, frases de senha, regras de redirecionamento de portas, sessões recentes, histórico de tentativas de login, caminhos de transferência, preferências de ordenação, dicas de reattach tmux, configurações do app e logs de depuração quando a gravação de depuração está ativa."
      },
      {
        heading: "Informações enviadas pela rede",
        body: "O Mobile SSH envia dados de autenticação SSH apenas aos servidores que você configura e aos quais se conecta. Entrada/saída do terminal, conteúdo de arquivos SFTP e tráfego de portas locais redirecionadas são trocados com os servidores e endpoints remotos escolhidos por você. O Mobile SSH não envia esses dados a um serviço de analytics, anúncios, telemetria ou sincronização em nuvem do Mobile SSH."
      },
      {
        heading: "Transferência de arquivos e acesso ao armazenamento",
        body: "A função de transferência de arquivos navega pelo armazenamento local do celular e por diretórios SFTP remotos para que você envie e baixe arquivos. Em versões do Android que exigem isso, o app pode pedir acesso ao armazenamento para que o navegador local leia e escreva os arquivos selecionados."
      },
      {
        heading: "Logs e solução de problemas",
        body: "O histórico de logins e logs opcionais de depuração ficam locais para diagnóstico. Logs de depuração podem incluir eventos de terminal, tamanhos de dados SSH, diagnósticos de toque, eventos de redimensionamento e eventos de ciclo de vida de túneis. Revise qualquer arquivo de depuração antes de compartilhar com o suporte ou outra pessoa."
      }
    ],
    permissionsHeading: "Permissões",
    permissions: [
      { label: "Internet", body: "necessária para conectar a servidores SSH." },
      { label: "Wake lock e Wi-Fi lock", body: "usados para manter as sessões SSH ativas enquanto o dispositivo dorme." },
      { label: "Serviço em primeiro plano e notificações", body: "usados para gerenciar conexões ativas em segundo plano." },
      { label: "Acesso ao armazenamento", body: "usado pela transferência de arquivos e pela importação de chaves." }
    ],
    securityHeading: "Responsabilidades de segurança",
    securityBody:
      "Proteja seu dispositivo Android com bloqueio de tela forte se salvar credenciais ou chaves privadas. Conecte-se apenas a servidores confiáveis. A implementação atual usa armazenamento local do app em vez de um cofre criptografado em nuvem.",
    contactHeading: "Contato",
    contactBody: "Contato de suporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentação | Mobile SSH",
    metaDescription: "Documentação para usuários finais do Mobile SSH no Android.",
    eyebrow: "Guia do usuário",
    h1: "Documentação do Mobile SSH",
    intro:
      "Use estas páginas como guia público para instalar, conectar, gerenciar sessões, transferir arquivos, redirecionar portas e solucionar problemas do Mobile SSH.",
    cards: [
      { slug: "getting-started",  title: "Primeiros passos",          text: "Instale, abra o app, conecte ao primeiro servidor e salve hosts comuns." },
      { slug: "terminal",         title: "Terminal",                  text: "Use painéis, linha extra de teclas, rolagem, ações de cópia, comportamento tmux e ajustes de teclado." },
      { slug: "file-transfer",    title: "Transferência de arquivos", text: "Navegue por arquivos do celular e do servidor, envie, baixe, ordene e inspecione detalhes remotos." },
      { slug: "port-forwarding",  title: "Redirecionamento de portas", text: "Configure strings de túnel local e gerencie redirecionamentos ativos durante a conexão." },
      { slug: "troubleshooting",  title: "Solução de problemas",      text: "Resolva problemas de conexão, autenticação, teclado, armazenamento e reconexão." }
    ]
  },
  docsNav: {
    home: "Início dos docs",
    gettingStarted: "Primeiros passos",
    terminal: "Terminal",
    fileTransfer: "Transferência de arquivos",
    portForwarding: "Redirecionamento de portas",
    troubleshooting: "Solução de problemas"
  },
  about: {
    metaTitle: "Sobre | Mobile SSH",
    metaDescription: "Sobre o Mobile SSH: versão, autor, licença e avisos de código aberto do cliente SSH para Android.",
    eyebrow: "Sobre",
    h1: "Sobre o Mobile SSH",
    intro: "Cliente SSH multi-sessão com tmux, redirecionamento de portas e SFTP.",
    appHeading: "Sobre o app",
    versionLabel: "Versão",
    versionValue: "1.5 (10)",
    authorLabel: "Autor",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "Licença",
    licenseValue: "MIT",
    websiteLabel: "Site",
    privacyLabel: "Política de Privacidade",
    privacyLinkText: "Política de Privacidade",
    noticesHeading: "Avisos de código aberto",
    noticesIntro: "O Mobile SSH é construído sobre as bibliotecas de código aberto a seguir. Cada uma é usada sob a respectiva licença.",
    notices: [
      { name: "JSch (mwiede fork)",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch)",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch)", license: "ISC" },
      { name: "Ed25519 / Ed448 Java",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" }
    ],
    contactHeading: "Contato",
    contactBody: "Contato de suporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
