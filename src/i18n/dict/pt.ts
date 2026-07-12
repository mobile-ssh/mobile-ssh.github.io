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
    tagline: "Fluxos focados de SSH, SFTP e terminal para dispositivos Android e iOS.",
    documentation: "Documentação",
    comparison: "Comparação",
    privacy: "Privacidade",
    contact: "Contato",
    feedback: "Feedback"
  },
  home: {
    metaTitle: "Mobile SSH — Cliente SSH para Android e iOS",
    metaDescription:
      "O Mobile SSH é um cliente SSH focado para Android e iOS com terminais multi-sessão, sessões resilientes com Eternal Terminal, um gerenciador de tmux, transferência SFTP, chaves privadas, redirecionamento de portas e plugins.",
    eyebrow: "Cliente SSH para Android e iOS",
    h1: "Mobile SSH",
    intro:
      "Um cliente SSH focado para Android e iOS com terminais multi-sessão, sessões com Eternal Terminal que sobrevivem a quedas de rede, um gerenciador de tmux embutido, transferência de arquivos SFTP, redirecionamento local de portas e plugins — feito para uso em celular e tablet.",
    versionLine: "Disponível em {count} idiomas · Android {version} · iOS {iosVersion} beta",
    ctaDocs: "Ler a documentação",
    ctaPlay: "Disponível no Google Play",
    ctaIos: "Baixe a beta para iOS no TestFlight",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone e iPad",
    advantagesHead: "Por que Mobile SSH",
    advantagesIntro: "Pensado a partir das falhas comuns dos clientes SSH para celular.",
    advantages: [
      { title: "Sem nível Pro, sem anúncios", text: "Todas as funções estão no mesmo app. Sem paywall escondendo fluxos essenciais atrás de um upgrade Pro, sem banners de anúncio no terminal." },
      { title: "Seus dados ficam locais", text: "Servidores, credenciais e chaves salvos no dispositivo. Sem conta na nuvem; nada que possa ser descontinuado." },
      { title: "Hosts salvos, conexão com um toque", text: "Adicione o host uma vez e reconecte com um toque — chave, porta e túneis configurados incluídos." },
      { title: "Alertas de agente", text: "Receba uma notificação — com som e vibração — no momento em que Claude Code, Codex ou outro agente remoto precisar da sua atenção. Toca no fone de ouvido mesmo durante vídeo." },
      { title: "Teclas de terminal sobre o teclado", text: "Linha dedicada com ESC, TAB, CTRL, ALT, FN, setas, Home, End, PgUp/PgDn no Android e no iOS — teclas de terminal sem brigar com a autocorreção." },
      { title: "Encaminhamento de portas sem comandos", text: "Os túneis ficam vinculados ao perfil do servidor e sobem automaticamente ao conectar." },
      { title: "Sobrevive a bloqueio e mudança de rede", text: "No Android, um serviço em primeiro plano, wake locks e reconexão automática mantêm as shells vivas com a tela apagada e em mudanças de rede; no iOS, a reconexão automática mais o auto-attach do tmux devolvem você exatamente onde parou." },
      { title: "Eternal Terminal", text: "Um transporte ET opcional mantém a shell remota viva mesmo com quedas de rede, suspensão e mudanças de IP. Sem etserver no host? O Mobile SSH pode instalá-lo por SSH para você." },
      { title: "Estenda com plugins", text: "Navegue por um catálogo público e instale plugins sob demanda para adicionar novos fluxos. Cada plugin é baixado e verificado por SHA-256 no armazenamento privado do app." }
    ],
    sectionAHead: "Feito para trabalho SSH móvel",
    sectionAIntro:
      "O Mobile SSH encurta o caminho comum de administração: salve um servidor, conecte, mantenha as sessões vivas, mova arquivos quando precisar e volte rápido aos terminais ativos.",
    features: [
      { title: "Terminal SSH", text: "Emulação de terminal xterm-256color com scrollback de 5000 linhas, cores, teclas de cursor, copiar/compartilhar e zoom por pinça." },
      { title: "Grade multi-sessão", text: "Até oito sessões SSH em uma grade redimensionável — toque em um painel para focar, toque duplo para tela cheia, faça pinça para redimensionar o texto." },
      { title: "Links clicáveis", text: "URLs na saída do terminal ficam sublinhados e abrem no navegador com um toque — sem precisar copiar ou trocar de app." },
      { title: "Pastas de servidores", text: "Organize servidores salvos em grupos recolhíveis. Toque no cabeçalho de um grupo para recolhê-lo; a estrutura de pastas aparece também no seletor de conexão rápida." },
      { title: "Alertas de agente", text: "Notificação com som e vibração quando um agente remoto (Claude Code, Codex, etc.) precisa da sua entrada. Toca no fone de ouvido mesmo durante chamadas de vídeo." },
      { title: "Chaves privadas", text: "Autenticação por senha ou chave privada. Gere chaves Ed25519 ou ECDSA no dispositivo (RSA também no Android); importe ou cole chaves existentes." },
      { title: "Transferência SFTP", text: "Navegador de arquivos de painel duplo vinculado a uma sessão SSH ativa. Enfileire envios e downloads, renomeie, exclua e inspecione permissões remotas." },
      { title: "Redirecionamento de portas", text: "Salve especificações de túnel local com um perfil de servidor — os túneis abrem automaticamente ao conectar, ou adicione/remova durante a conexão." },
      { title: "Fluxo de reconexão", text: "Keepalives e reconexão com backoff exponencial mantêm as sessões vivas com tela apagada e em roaming — com o apoio de um serviço em primeiro plano no Android e do auto-attach do tmux no iOS." },
      { title: "Backup e restauração", text: "Exporte servidores e credenciais salvos para um arquivo de backup criptografado; importe com mescla ou substituição para migrar entre dispositivos — os backups são interoperáveis entre Android e iOS." },
      { title: "Eternal Terminal", text: "Conecte por Eternal Terminal (ET) para sessões que sobrevivem a quedas de rede, suspensão e mudanças de IP — com configuração automática opcional do etserver por SSH." },
      { title: "Gerenciador de tmux", text: "Liste e alterne sessões, janelas e painéis do tmux — anexe, renomeie, crie, divida, amplie ou encerre. Ordene por nome ou data; um 🔔 sinaliza agentes aguardando entrada." },
      { title: "Plugins", text: "Navegue, instale e execute plugins para estender o Mobile SSH. Os plugins são baixados sob demanda de um catálogo público e verificados por SHA-256 no armazenamento privado do app." }
    ],
    multiHead: "Uma tela, várias shells ativas",
    multiP1:
      "A vista do terminal pode conter várias sessões SSH ativas em uma grade. Selecione um painel para digitar, use a linha extra de teclas para controles, faça pinça para ajustar o tamanho do texto e dê toque duplo para tela cheia.",
    multiP2:
      "O histórico de sessões e a recuperação de sessões ativas ajudam você a voltar ao trabalho atual depois de trocar de app, bloquear a tela ou o sistema encerrar o app em segundo plano.",
    multiAlt:
      "Mobile SSH em um celular mostrando duas sessões SSH ativas em uma visualização dividida lado a lado.",
    sftpHead: "SFTP quando o terminal não basta",
    sftpBody:
      "Abra a transferência de arquivos a partir de uma sessão conectada para navegar pelo armazenamento do celular e por diretórios remotos. Enfileire envios e downloads, ordene arquivos, lembre caminhos recentes por host e inspecione permissões remotas ao decidir o que mover.",
    sftpCtaGuide: "Guia de transferência de arquivos",
    sftpCtaAll: "Todos os recursos",
    sftpAlt:
      "Tela de transferência de arquivos do Mobile SSH em um celular com painéis local e remoto.",
    galleryHead: "Veja em um aparelho real",
    galleryIntro:
      "Capturas de celulares Android e iPhones — as mesmas telas que você vai usar para adicionar servidores, trabalhar em terminais, rodar várias sessões e mover arquivos por SFTP.",
    carouselPrev: "Captura anterior",
    carouselNext: "Próxima captura",
    carouselDot: "Ir para a posição {n}",
    videoHead: "Veja em ação",
    videoIntro: "Demonstrações rápidas nas duas plataformas. Android: uma troca de janela do tmux, uma transferência de arquivo por SFTP, instalar e conversar com o plugin AI Chat, Eternal Terminal e Sessões Recentes com um toque. iOS: servidores salvos em grupos, opções de conexão com auto-attach do tmux, uma sessão de terminal ao vivo e o gerenciador de tmux.",
    videoAlt: "Demo no Android de uma troca de janela do tmux, um download de arquivo por SFTP, instalar e usar o plugin AI Chat, o transporte Eternal Terminal e Sessões Recentes",
    videoIosAlt: "Demo no iOS de servidores salvos em grupos, opções de conexão com auto-attach do tmux e redirecionamento de portas, uma sessão de terminal SSH ao vivo e o gerenciador de tmux alternando janelas",
    lightboxClose: "Fechar",
    lightboxPrev: "Anterior",
    lightboxNext: "Próximo",
    betaJoin: "Participar da beta",
    betaOr: "ou envie um e-mail para",
    betaRequest: "para solicitar acesso à beta privada",
    galleryAlts: [
      "Tela inicial do Mobile SSH em um celular com os botões Servidores, Credenciais, Logs, Configurações, Depuração e Sobre.",
      "Diálogo Adicionar servidor em um celular mostrando os campos host, porta, credenciais, chave privada e encaminhamento de portas.",
      "Terminal SSH de sessão única em um celular com a linha extra de teclas embaixo.",
      "Duas sessões SSH em visualização dividida lado a lado em um celular.",
      "Duas sessões SSH empilhadas verticalmente em um celular com o painel ativo destacado.",
      "Tela de transferência SFTP em um celular com os painéis Meu telefone e Host remoto.",
      "Diálogo Sobre em um celular mostrando versão, autor, licença e site.",
      "Diálogo Gerar chave SSH em um celular com campos de rótulo, usuário, tipo de chave e frase secreta.",
      "Diálogo Chave pública em um celular mostrando a chave gerada com opções de copiar, compartilhar e salvar.",
      "Tela de Servidores salvos mostrando servidores organizados em grupos de pastas Trabalho e Pessoal recolhíveis.",
      "Terminal SSH em um celular com URLs https:// sublinhados como links clicáveis tocáveis.",
      "Tela inicial do Mobile SSH em um celular mostrando uma lista de Sessões Recentes para retomar uma conexão SSH com um toque.",
      "Gerenciador de tmux em um celular listando sessões, janelas e painéis do tmux com botões para anexar, renomear e alternar.",
      "Tela de Plugins em um celular mostrando um catálogo de plugins instaláveis com Tailscale, WireGuard e VS Code.",
      "Plugin AI Chat em um celular transmitindo uma resposta de um modelo llama3.2 local rodando no servidor remoto via SSH.",
      "Diálogo Adicionar servidor em um celular com o transporte definido como Eternal Terminal para que as sessões sobrevivam a quedas de rede."
    ],
    galleryIosAlts: [
      "Formulário de conexão do Mobile SSH em um iPhone com campos de servidor, autenticação, pasta e transporte.",
      "Servidores salvos em um iPhone organizados nos grupos Production e Staging com pesquisa de servidores.",
      "Terminal SSH ao vivo em um iPhone com a barra de status do tmux e a linha extra de teclas embaixo.",
      "Duas sessões SSH lado a lado em uma grade em um iPhone com painéis que focam ao toque.",
      "Transferência de arquivos em um iPhone com os painéis Meu telefone e Host remoto e um log de transferência concluída.",
      "Autenticação por chave em um iPhone com uma chave Ed25519 gerada no dispositivo e uma chave pública copiável.",
      "Gerenciador de tmux em um iPhone listando sessões e janelas com ações de anexar, renomear e encerrar — um sino sinaliza um agente aguardando entrada.",
      "Terminal SSH em um iPhone anexado a uma janela do tmux mostrando código em um editor remoto.",
      "Catálogo de plugins em um iPhone com Tailscale, WireGuard, VS Code, AI Chat e Open WebUI disponíveis para instalar.",
      "Formulário de conexão em um iPhone com o transporte definido como Eternal Terminal para que as sessões sobrevivam a quedas de rede.",
      "Configurações de alertas de agente em um iPhone com opções de vibração, som e somente fones de ouvido.",
      "Tela de conexão do Mobile SSH em um iPhone com uma seção Recentes para reconectar com um toque."
    ],
    compareHead: "Seu lugar ao lado de Termux e Termius",
    compareIntro:
      "O Mobile SSH é intencionalmente enxuto: não é um ambiente Linux completo nem um cofre em nuvem para equipes. É uma ferramenta SSH/SFTP local para Android e iOS com acesso rápido aos controles de sessão que os usuários móveis mais usam.",
    compareGuideTitle: "Guia de comparação",
    compareGuideText: "Quando escolher Mobile SSH, Termux ou Termius no seu celular ou tablet.",
    privacyTitle: "Política de privacidade",
    privacyText: "Quais dados de conexão ficam locais e o que é enviado aos seus servidores."
  },
  features: {
    metaTitle: "Recursos | Mobile SSH",
    metaDescription:
      "Principais recursos do Mobile SSH para SSH no Android e iOS: terminal, Eternal Terminal, gerenciador de tmux, SFTP, chaves privadas, redirecionamento de portas e plugins.",
    eyebrow: "Lista de recursos",
    h1: "Recursos do Mobile SSH",
    intro:
      "O Mobile SSH é feito para uso direto de SSH em dispositivos Android e iOS: abrir terminais, mantê-los vivos, mover arquivos, salvar servidores e se recuperar rápido de interrupções móveis.",
    groups: [
      {
        title: "Plataformas",
        items: [
          "Android 8.0 ou mais recente — instale pelo Google Play",
          "iOS 16 ou mais recente no iPhone e iPad — participe da beta pública no TestFlight",
          "Backups criptografados são interoperáveis: exporte em uma plataforma e importe na outra"
        ]
      },
      {
        title: "Conexões",
        items: [
          "Autenticação por senha e por chave privada",
          "Chaves privadas Ed25519, RSA, ECDSA e DSA no Android; Ed25519 e ECDSA (P-256/384/521) no iOS",
          "Perfis de servidor salvos com host, porta, usuário, credencial, chave privada e especificações de túnel opcionais",
          "Pesquisar servidores salvos por nome ou host",
          "Fluxo de Adicionar sessão com pesquisa: selecione um servidor salvo em uma página de pesquisa dedicada e conecte com um toque",
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
          "Sugestões/autocorreção do Gboard e entrada por voz no Android, com buffer de texto em composição para terminais"
        ]
      },
      {
        title: "Sessões",
        items: [
          "Até oito sessões SSH simultâneas",
          "Layout em grade para sessões ativas",
          "Resiliência em segundo plano e com tela bloqueada: um serviço em primeiro plano no Android; o auto-attach do tmux reanexa sua shell no iOS",
          "Keepalives e tentativas de reconexão com backoff exponencial",
          "Entrada Sessões ativas a partir da tela inicial; notificação contínua lista as sessões — toque para abrir",
          "Acompanhamento de comandos tmux e sugestões de reattach para trabalho interrompido",
          "Alertas de agente: notificação com som e vibração opcionais quando um agente remoto (Claude Code, Codex, etc.) precisa de entrada; toca no fone de ouvido durante vídeo",
          "Transporte Eternal Terminal (ET) para sessões que sobrevivem a quedas de rede, suspensão e mudanças de IP, com configuração automática opcional do etserver por SSH",
          "Gerenciador de tmux: liste e alterne sessões, janelas e painéis — anexe, renomeie, crie, divida, amplie ou encerre, com ordenação por nome/data e um 🔔 para agentes aguardando entrada"
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
          "Visualização de túneis em tempo de execução para sessões conectadas",
          "A transferência de arquivos segue o tema claro ou escuro do sistema"
        ]
      },
      {
        title: "Localização",
        items: [
          "Traduções da interface: árabe, bengali, chinês (simplificado e tradicional), inglês, francês, alemão, hindi, indonésio, japonês, marata, pidgin nigeriano, português, russo, espanhol, tâmil, telugu, turco e urdu",
          "Segue o idioma do sistema no Android e no iOS; sem seletor próprio no app"
        ]
      },
      {
        title: "Chaves e backup",
        items: [
          "Gere novas chaves Ed25519 ou ECDSA no dispositivo (RSA também no Android), com uma frase-senha opcional",
          "Copie, compartilhe ou salve uma chave pública gerada para adicioná-la ao authorized_keys do servidor",
          "Exporte servidores e credenciais salvos para um arquivo de backup",
          "Uma frase-senha opcional criptografa o backup; importe com mesclar ou substituir",
          "Um backup sem criptografia guarda senhas e chaves em texto puro — proteja ou exclua o arquivo"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Navegue, instale e execute plugins para estender o Mobile SSH",
          "Os plugins são baixados sob demanda de um catálogo público e verificados por SHA-256 no armazenamento privado do app",
          "Configure uma fonte de catálogo personalizada ou privada quando precisar"
        ]
      }
    ],
    security:
      "Aviso de segurança: a aplicação atual armazena perfis de servidor e credenciais localmente no dispositivo (no iOS, os segredos ficam no Keychain do sistema). Não há sincronização em nuvem. Proteja o dispositivo com bloqueio de tela forte e evite salvar credenciais em aparelhos compartilhados."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius no celular",
    metaDescription:
      "Comparação equilibrada entre Mobile SSH, Termux e Termius para fluxos SSH no Android e no iOS.",
    eyebrow: "Opções de SSH no celular",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Estas ferramentas se sobrepõem em torno de SSH, mas têm propósitos diferentes. O Mobile SSH é um cliente SSH/SFTP focado para Android e iOS, o Termux é um ambiente Linux apenas para Android e o Termius é um cliente SSH multiplataforma com recursos de produtividade baseados em conta.",
    columns: {
      need: "Necessidade",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Propósito principal",
        mobileSsh: "Cliente dedicado de SSH, SFTP, túnel local e terminal para Android e iOS.",
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
        need: "Controles de terminal no celular",
        mobileSsh: "Linha extra de teclas embutida, sessões em grade, painéis em tela cheia, zoom por pinça, seleção com copiar/compartilhar e rolagem compatível com tmux — além de sugestões do Gboard e entrada por voz no Android.",
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
        mobileSsh: "Até oito sessões SSH simultâneas em uma grade.",
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
        mobileSsh: "Você quer um app simples no Android ou no iOS para conectar a servidores, transferir arquivos e manter sessões vivas.",
        termux: "Você quer um ambiente de linha de comando completo no Android e está confortável instalando e configurando pacotes.",
        termius: "Você quer sincronização entre dispositivos, recursos polidos de produtividade, cofres e colaboração."
      }
    ],
    cards: [
      {
        title: "Escolha o Mobile SSH quando",
        body: "Você quer acesso SSH direto a partir do seu celular ou tablet — Android ou iOS — sem montar um ambiente Linux completo ou um modelo de conta sincronizada na nuvem. Especialmente adequado para servidores salvos, SFTP, sessões tmux e fluxos rápidos de túnel local."
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
    featureHeading: "Recurso por recurso",
    featureRows: [
      { category: "Conexão",            feature: "Perfis de servidor salvos",                         mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexão",            feature: "Pesquisar servidores salvos",                        mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexão",            feature: "Pastas / grupos de servidores",                      mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexão",            feature: "Seletor de Adicionar sessão com pesquisa",           mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Conexão",            feature: "Registros de credenciais reutilizáveis",             mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexão",            feature: "Histórico de sessões recentes",                      mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexão",            feature: "Log de logins",                                      mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",           feature: "Terminal SSH",                                        mobile: "yes",     termux: "via OpenSSH",  termius: "yes" },
      { category: "Terminal",           feature: "Emulação xterm-256color",                            mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Buffer de scrollback de 5 000 linhas",               mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Linha extra de teclas (ESC/TAB/CTRL/…)",             mobile: "yes",     termux: "parcial",      termius: "yes" },
      { category: "Terminal",           feature: "Zoom por pinça",                                     mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Toque duplo para tela cheia",                        mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",           feature: "URLs tocáveis na saída do terminal",                 mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Terminal",           feature: "Seleção de texto: copiar / compartilhar / selecionar tudo", mobile: "yes", termux: "yes",   termius: "yes" },
      { category: "Terminal",           feature: "Sugestões Gboard e entrada por voz",                 mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Sessões",            feature: "Múltiplas sessões SSH simultâneas",                  mobile: "até 8", termux: "via tmux",     termius: "yes" },
      { category: "Sessões",            feature: "Layout de painéis em grade",                         mobile: "yes",     termux: "no",           termius: "abas" },
      { category: "Sessões",            feature: "Rolagem compatível com tmux",                        mobile: "yes",     termux: "yes",          termius: "no" },
      { category: "Sessões",            feature: "Dicas de reattach do tmux na reconexão",             mobile: "yes",     termux: "yes",          termius: "no" },
      { category: "Sessões",            feature: "Alertas de agente (Claude Code / Codex)",            mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sessões",            feature: "Notificação contínua com lista de sessões",          mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sessões",            feature: "Serviço em primeiro plano e wake lock",              mobile: "yes",     termux: "parcial",      termius: "yes" },
      { category: "Sessões",            feature: "Reconexão automática com backoff",                   mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Interface de transferência SFTP embutida",           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Navegador local + remoto de painel duplo",           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Fila de envio e download",                           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Renomear / excluir / criar remotamente",             mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Visualização de permissões de arquivos remotos",     mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Arquivos",           feature: "Ordenar por nome ou data por host",                  mobile: "yes",     termux: "no",           termius: "parcial" },
      { category: "Túneis",             feature: "Redirecionamento local de portas",                   mobile: "yes",     termux: "via CLI",      termius: "yes" },
      { category: "Túneis",             feature: "Túneis salvos com perfil de servidor",               mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Túneis",             feature: "Adicionar / remover túneis em tempo real",           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Chaves",             feature: "Autenticação por senha",                             mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Chaves",             feature: "Autenticação por chave privada",                     mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Chaves",             feature: "Geração de chaves no dispositivo",                   mobile: "yes",     termux: "via ssh-keygen", termius: "yes" },
      { category: "Chaves",             feature: "Compartilhar / salvar chave pública gerada",         mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Backup",             feature: "Exportar / importar backup de servidores",           mobile: "yes",     termux: "no",           termius: "cofre na nuvem" },
      { category: "Backup",             feature: "Arquivo de backup local criptografado",              mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Backup",             feature: "Sem conta obrigatória",                              mobile: "yes",     termux: "yes",          termius: "no" },
      { category: "Privacidade e custo", feature: "Sem paywall Pro",                                   mobile: "yes",     termux: "yes",          termius: "parcial" },
      { category: "Privacidade e custo", feature: "Sem anúncios",                                      mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Privacidade e custo", feature: "Opção de desativar analytics",                      mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Privacidade e custo", feature: "Dados apenas locais (sem sincronização em nuvem)",  mobile: "yes",     termux: "yes",          termius: "no" },
      { category: "Sessões",            feature: "Eternal Terminal (sessões resilientes)",             mobile: "yes",     termux: "via CLI",      termius: "no" },
      { category: "Sessões",            feature: "Instalação automática do etserver via SSH",          mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sessões",            feature: "Gerenciador de sessões tmux",                        mobile: "yes",     termux: "via CLI",      termius: "no" },
      { category: "Plugins",            feature: "Suporte a plugins",                                  mobile: "yes",     termux: "via pacotes",  termius: "no" },
      { category: "Plugins",            feature: "Catálogo de plugins com instalação sob demanda",     mobile: "yes",     termux: "no",           termius: "no" }
    ]
  },
  privacy: {
    metaTitle: "Política de Privacidade | Mobile SSH",
    metaDescription:
      "Política de privacidade do Mobile SSH, incluindo armazenamento local, transmissão de dados SSH, transferência de arquivos, logs e permissões do app no Android e no iOS.",
    eyebrow: "Privacidade",
    h1: "Política de Privacidade",
    intro:
      "O Mobile SSH é projetado como um cliente SSH local para Android e iOS. Não requer uma conta Mobile SSH e não oferece um serviço de sincronização em nuvem.",
    sections: [
      {
        heading: "Informações armazenadas no seu dispositivo",
        body: "Se você optar por salvar dados no app, o Mobile SSH os armazena localmente no dispositivo — no iOS, os segredos ficam no Keychain do sistema. Isso pode incluir perfis de servidor salvos, nomes de usuário, portas, senhas, chaves privadas, frases de senha, regras de redirecionamento de portas, sessões recentes, histórico de tentativas de login, caminhos de transferência, preferências de ordenação, dicas de reattach tmux, configurações do app e logs de depuração quando a gravação de depuração está ativa."
      },
      {
        heading: "Informações enviadas pela rede",
        body: "O Mobile SSH envia dados de autenticação SSH apenas aos servidores que você configura e aos quais se conecta. Entrada/saída do terminal, conteúdo de arquivos SFTP e tráfego de portas locais redirecionadas são trocados com os servidores e endpoints remotos escolhidos por você. O Mobile SSH não envia esses dados a um serviço de analytics, anúncios, telemetria ou sincronização em nuvem do Mobile SSH."
      },
      {
        heading: "Transferência de arquivos e acesso ao armazenamento",
        body: "A função de transferência de arquivos navega pelo armazenamento local do celular e por diretórios SFTP remotos para que você envie e baixe arquivos. Em versões do Android que exigem isso, o app pode pedir acesso ao armazenamento para que o navegador local leia e escreva os arquivos selecionados. No iOS, arquivos e fotos locais são acessados pelos seletores de documentos e de fotos do sistema."
      },
      {
        heading: "Logs e solução de problemas",
        body: "O histórico de logins e logs opcionais de depuração ficam locais para diagnóstico. Logs de depuração podem incluir eventos de terminal, tamanhos de dados SSH, diagnósticos de toque, eventos de redimensionamento e eventos de ciclo de vida de túneis. Revise qualquer arquivo de depuração antes de compartilhar com o suporte ou outra pessoa."
      },
      { heading: "Análises de uso anônimas", body: "Para entender como o app é usado e melhorá-lo, o Mobile SSH envia análises de uso anônimas para a Aptabase, um provedor de análises focado em privacidade que atua em nosso nome. Isso se limita a eventos anônimos (como aberturas do app e quais recursos são usados) junto com a versão do app, a versão do sistema operacional, o modelo do dispositivo e o idioma. Usa um identificador de sessão aleatório que é redefinido regularmente e não está vinculado a você nem ao seu dispositivo. Nunca inclui seus servidores SSH, nomes de host, usuários, senhas, chaves, comandos ou conteúdo de arquivos. Os dados são enviados por uma conexão criptografada (HTTPS). As análises estão ativadas por padrão e podem ser desativadas a qualquer momento nas Configurações; quando desativadas, nada é enviado." }
    ],
    permissionsHeading: "Permissões",
    permissions: [
      { label: "Internet", body: "necessária para conectar a servidores SSH." },
      { label: "Wake lock e Wi-Fi lock", body: "usados no Android para manter as sessões SSH ativas enquanto o dispositivo dorme." },
      { label: "Serviço em primeiro plano e notificações", body: "usados no Android para gerenciar conexões ativas em segundo plano; no iOS, as notificações são usadas para os alertas de agente." },
      { label: "Acesso ao armazenamento", body: "usado pela transferência de arquivos e pela importação de chaves; no iOS, isso passa pelos seletores de documentos e de fotos do sistema." }
    ],
    securityHeading: "Responsabilidades de segurança",
    securityBody:
      "Proteja seu dispositivo com bloqueio de tela forte se salvar credenciais ou chaves privadas. Conecte-se apenas a servidores confiáveis. A implementação atual usa armazenamento local do app (e o Keychain no iOS) em vez de um cofre criptografado em nuvem.",
    contactHeading: "Contato",
    contactBody: "Contato de suporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentação | Mobile SSH",
    metaDescription: "Documentação para usuários finais do Mobile SSH no Android e no iOS.",
    eyebrow: "Guia do usuário",
    h1: "Documentação do Mobile SSH",
    intro:
      "Use estas páginas como guia público para instalar, conectar, gerenciar sessões, transferir arquivos, redirecionar portas e solucionar problemas do Mobile SSH.",
    cards: [
      { slug: "getting-started",  title: "Primeiros passos",           text: "Instale, abra o app, conecte ao primeiro servidor e salve hosts comuns." },
      { slug: "terminal",         title: "Terminal",                   text: "Use painéis, linha extra de teclas, rolagem, ações de cópia, comportamento tmux e ajustes de teclado." },
      { slug: "file-transfer",    title: "Transferência de arquivos",  text: "Navegue por arquivos do celular e do servidor, envie, baixe, ordene e inspecione detalhes remotos." },
      { slug: "port-forwarding",  title: "Redirecionamento de portas", text: "Configure strings de túnel local e gerencie redirecionamentos ativos durante a conexão." },
      { slug: "troubleshooting",  title: "Solução de problemas",       text: "Resolva problemas de conexão, autenticação, teclado, armazenamento e reconexão." }
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
    metaDescription: "Sobre o Mobile SSH: versão, autor, licença e avisos de código aberto do cliente SSH para Android e iOS.",
    eyebrow: "Sobre",
    h1: "Sobre o Mobile SSH",
    intro: "Cliente SSH multi-sessão com tmux, redirecionamento de portas e SFTP.",
    appHeading: "Sobre o app",
    versionLabel: "Versão",
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
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto" }
    ],
    contactHeading: "Contato",
    contactBody: "Contato de suporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
