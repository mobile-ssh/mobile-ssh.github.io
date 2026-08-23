import type { Dict } from "../types";

export const pt: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Idioma",
    languageSwitcher: "Mudar idioma"
  },
  nav: {
    blog: "Blog",
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
      { title: "Alertas de agente e resposta com um toque", text: "Saiba no exato momento em que o Claude Code, o Codex ou outro agente precisa de você: o painel fica âmbar, um selo na barra de ferramentas conta quantos estão esperando e a lista de Agentes responde ao prompt com um toque — sem digitar nada no terminal." },
      { title: "Teclas de terminal sobre o teclado", text: "Uma linha de treze teclas — ESC, TAB, CTRL, setas, Home, End, PgUp, PgDn — que quebra para uma segunda linha em vez de rolar, de modo que nada fica escondido fora da tela. Acrescente F1–F12, combinações com Ctrl ou suas próprias sequências de escape a partir de uma paleta de predefinições." },
      { title: "Encaminhamento de portas sem comandos", text: "Os túneis ficam vinculados ao perfil do servidor e sobem automaticamente ao conectar." },
      { title: "Sobrevive a bloqueio e mudança de rede", text: "Dê a um servidor salvo vários endereços — um IP na LAN de casa e um IP na VPN — e o Mobile SSH disca o que responder, tentando primeiro o último que funcionou, e reconecta assim que a rede muda. No Android, um serviço em primeiro plano e wake locks mantêm as shells vivas com a tela apagada; no iOS, a reconexão automática mais o auto-attach do tmux devolvem você exatamente onde parou." },
      { title: "Eternal Terminal", text: "Um transporte ET opcional mantém a shell remota viva mesmo com quedas de rede, suspensão e mudanças de IP. Sem etserver no host? O Mobile SSH pode instalá-lo por SSH para você." },
      { title: "Estenda com plugins", text: "Navegue por um catálogo público e instale plugins sob demanda para adicionar novos fluxos. Cada plugin é baixado e verificado por SHA-256 no armazenamento privado do app." }
    ],
    sectionAHead: "Feito para trabalho SSH móvel",
    sectionAIntro:
      "O Mobile SSH encurta o caminho comum de administração: salve um servidor, conecte, mantenha as sessões vivas, mova arquivos quando precisar e volte rápido aos terminais ativos.",
    features: [
      { title: "Terminal SSH", text: "Terminal xterm-256color com cores reais de 24 bits, itálicos, pesquisa dentro do terminal, integração de shell via OSC 133 e ajuste de tamanho do texto por pinça — além de fonte e esquema de cores configuráveis e glifos powerline/de ícones da Nerd Font no Android e no iOS." },
      { title: "Grade multi-sessão", text: "Até oito sessões SSH em uma grade redimensionável — toque em um painel para focar, toque duplo para tela cheia, faça pinça para redimensionar o texto." },
      { title: "Links clicáveis", text: "URLs na saída do terminal ficam sublinhados e abrem no navegador com um toque — sem precisar copiar ou trocar de app." },
      { title: "Pastas e nomes de servidores", text: "Organize servidores salvos em grupos recolhíveis e dê a um servidor um nome que aparece no lugar do endereço. O endereço volta sempre que um nome ficaria ambíguo, para que as linhas nunca se confundam." },
      { title: "Alertas de agente", text: "Os agentes se reportam pelo terminal, então o app sabe qual deles está bloqueado e em quê. Responda pela lista de Agentes com um toque; os alertas se substituem em vez de se acumular, e tocar em um abre o painel que chamou." },
      { title: "Chaves privadas", text: "Autenticação por senha ou chave privada. Gere chaves Ed25519 ou ECDSA no dispositivo (RSA também no Android); importe ou cole chaves existentes." },
      { title: "Transferência SFTP", text: "Navegador de arquivos de painel duplo vinculado a uma sessão SSH ativa. Enfileire envios e downloads, renomeie, exclua e inspecione permissões remotas." },
      { title: "Redirecionamento de portas", text: "Salve especificações de túnel local com um perfil de servidor e eles abrem automaticamente ao conectar — inclusive depois de uma reconexão em uma nova rede, sem que você precise reconstruí-los à mão." },
      { title: "Fluxo de reconexão", text: "Troque de rede e as sessões rediscam na hora, em vez de esperar uma rota morta expirar, e uma sessão em backoff acorda assim que surge uma rede utilizável. No iOS, um servidor que parou de responder em silêncio é detectado e reconectado." },
      { title: "Backup e restauração", text: "Exporte servidores e credenciais salvos para um arquivo de backup criptografado; importe com mescla ou substituição para migrar entre dispositivos — os backups são interoperáveis entre Android e iOS." },
      { title: "Eternal Terminal", text: "Conecte por Eternal Terminal (ET) para sessões que sobrevivem a quedas de rede, suspensão e mudanças de IP — com configuração automática opcional do etserver por SSH." },
      { title: "Gerenciadores de multiplexadores", text: "Comande o tmux sem combinações de prefixo — anexe, renomeie, crie, divida, amplie ou encerre. Ambas as plataformas oferecem o mesmo para herdr e Zellij, e o ícone na barra de ferramentas só aparece depois que esse programa é encontrado no servidor." },
      { title: "Plugins", text: "Navegue, instale e execute plugins para estender o Mobile SSH. Os plugins são baixados sob demanda de um catálogo público e verificados por SHA-256 no armazenamento privado do app." }
    ],
    multiHead: "Uma tela, várias shells ativas",
    multiP1:
      "A vista do terminal pode conter várias sessões SSH ativas em uma grade. Selecione um painel para digitar, use a linha extra de teclas para controles, faça pinça para ajustar o tamanho do texto e dê toque duplo para tela cheia.",
    multiP2:
      "A tela inicial responde à pergunta \"ao que eu posso voltar?\" — as conexões ativas neste momento e as sessões tmux que aguardam nos seus servidores salvos, reconstruídas a partir de um instantâneo armazenado, de modo que aparecem mesmo sem rede alguma.",
    multiAlt:
      "Mobile SSH em um celular mostrando duas sessões SSH ativas em uma visualização dividida lado a lado.",
    sftpHead: "SFTP quando o terminal não basta",
    sftpBody:
      "Abra a transferência de arquivos a partir de uma sessão conectada para navegar pelo armazenamento do celular e por diretórios remotos. Enfileire envios e downloads, ordene arquivos, volte rapidamente a caminhos remotos recentes e inspecione ou altere permissões remotas ao decidir o que mover.",
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
    videoIntro: "Demonstrações rápidas nas duas plataformas. Android: a tela inicial mostrando ao que você pode voltar, uma barra de ferramentas de sessão que exibe apenas o que aquele servidor oferece, o envio de um arquivo direto para o prompt e os gerenciadores de tmux, herdr e Zellij. iOS: abrir o app direto em um terminal ao vivo e a tela inicial para onde você volta.",
    videoAlt: "Demo no Android da tela inicial listando sessões do tmux para retomar, da barra de ferramentas da sessão, do envio de um arquivo para o prompt e dos gerenciadores de sessões do tmux, do herdr e do Zellij",
    videoIosAlt: "Demo no iOS abrindo o Mobile SSH direto em uma sessão de terminal SSH ao vivo e voltando para a tela inicial, com Recentes e as demais telas do app",
    muxHead: "Um vídeo por gestor de sessões",
    muxIntro:
      "Nas demos acima, tmux, herdr e Zellij dividem uns trinta segundos — o suficiente para mostrar que a barra desenha um ícone para cada um, insuficiente para mostrar o que qualquer um deles faz. Estas são as versões longas, filmadas nas duas plataformas contra um servidor real.",
    muxItems: [
        {
          text: "Sessões, janelas e painéis alcançados a partir do ecrã inicial, com uma sessão sinalizada por uma campainha porque algo nela pede atenção. Anexe uma janela e o terminal ao vivo segue-a; crie uma janela e dê-lhe nome — sem teclar um único atalho de prefixo.",
          androidAlt: "Demo em Android do gestor de tmux: a lista de sessões em cache do ecrã inicial, depois sessões, janelas e painéis, anexando uma janela para que o terminal a siga, e criando uma janela com nome.",
          iosAlt: "Demo em iOS do gestor de tmux: sessões de tmux com a sua idade e uma campainha na que aguarda entrada, depois janelas e painéis, cada linha com Abrir, Renomear e Terminar."
        },
        {
          text: "Espaços de trabalho, separadores e painéis com estado real de agente — um agente a trabalhar, outro bloqueado à espera de uma pessoa. Pré-visualize o bloqueado, responda-lhe pelo telemóvel e veja o herdr reclassificá-lo como a trabalhar e depois como concluído.",
          androidAlt: "Demo em Android do gestor de herdr: sessões e espaços de trabalho rotulados com o estado do agente, um agente marcado como «needs you», a resposta enviada pelo telemóvel, e um novo espaço de trabalho criado e renomeado.",
          iosAlt: "Demo em iOS do gestor de herdr: espaços de trabalho com estado de agente e uma folha de resposta que envia texto escrito a um agente bloqueado, seguido de Enter."
        },
        {
          text: "Sessões com a sua idade, depois separadores e painéis. Pré-visualize a saída de um painel, adicione um separador com nome, foque o que interessa e anexe-se — sem escrever nada na linha de comandos.",
          androidAlt: "Demo em Android do gestor de Zellij: sessões com a sua idade, separadores e painéis, pré-visualizando a saída de um painel, criando um separador com nome e anexando uma sessão.",
          iosAlt: "Demo em iOS do gestor de Zellij: uma sessão com anexar, renomear, terminar e eliminar, os seus separadores, e um painel com pré-visualização e ambas as direções de divisão."
        }
    ],
    graphicsHead: "Um gráfico animado, dentro do terminal",
    graphicsBody:
      "Um GIF de 36 fotogramas transmitido pelo protocolo gráfico do Kitty e descodificado pela aplicação ao ritmo do próprio ficheiro — não avançado a partir de fora. Depois, as sequências de escape pelas quais um terminal é julgado: OSC 8 torna números de compilação e nomes de painéis em algo que se toca, OSC 52 deixa a máquina remota escrever na área de transferência do telemóvel, e OSC 777 lança uma notificação Android verdadeira.",
    graphicsAlt:
      "Demo em Android de um gráfico de latência animado transmitido para o terminal pelo protocolo gráfico do Kitty, seguido de ligações OSC 8, uma escrita na área de transferência por OSC 52 e uma notificação OSC 777.",
    lightboxClose: "Fechar",
    lightboxPrev: "Anterior",
    lightboxNext: "Próximo",
    betaJoin: "Participar da beta",
    betaOr: "ou envie um e-mail para",
    betaRequest: "para solicitar acesso à beta privada",
    galleryAlts: [
      "Tela inicial do Mobile SSH em um celular Android listando as sessões do tmux que aguardam em um servidor salvo, acima dos botões Servidores, Credenciais, Configurações, Sobre e Plugins.",
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
      "Gerenciador do Zellij em um celular Android listando sessões, abas e painéis com botões para anexar, renomear, encerrar e focar.",
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
      "Tela inicial do Mobile SSH em um iPhone com uma lista de Recentes para reconectar com um toque, acima dos botões Servidores, Credenciais, Logs, Configurações, Sobre e Plugins."
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
          "Android 8.0 ou mais recente — no momento é um teste fechado no Google Play: abra o link de adesão em um navegador do celular e depois instale pelo Play",
          "iOS 16 ou mais recente no iPhone e iPad — participe da beta pública no TestFlight",
          "Backups criptografados são interoperáveis: exporte em uma plataforma e importe na outra"
        ]
      },
      {
        title: "Conexões",
        items: [
          "Autenticação por senha e por chave privada",
          "Chaves privadas Ed25519, ECDSA (P-256/384/521) e RSA no Android; Ed25519 e ECDSA no iOS. As duas plataformas abrem chaves criptografadas com frase-senha",
          "Perfis de servidor salvos com host, porta, usuário, credencial, chave privada e especificações de túnel opcionais — clone um perfil para duplicar suas configurações em um novo servidor",
          "Dê um nome ao servidor e a lista passa a mostrar esse nome no lugar do endereço — o endereço volta sempre que duas linhas ficariam parecidas demais",
          "Pesquise servidores salvos por nome, host, porta, credencial ou qualquer um dos seus endereços alternativos",
          "Conecte-se duas vezes à mesma máquina por duas linhas salvas e o app percebe — ele compara a impressão digital da chave do host e propõe mesclá-las em um único servidor com vários endereços",
          "Fluxo de Adicionar sessão com pesquisa: selecione um servidor salvo em uma página de pesquisa dedicada e conecte com um toque",
          "Vários endereços por servidor salvo para roaming entre LAN e VPN — discados em ordem, com o último endereço que funcionou testado primeiro, e a reconexão entra em ação em mudanças de rede",
          "Registros de credenciais reutilizáveis selecionáveis no setup do servidor",
          "Uma tela inicial pensada para retomar o trabalho: as conexões ativas neste momento e as sessões tmux que aguardam nos seus servidores — vindas de um instantâneo armazenado, então elas são listadas sem rede alguma e cada linha traz a idade do registro. O iOS ainda mantém uma lista de Recentes",
          "IPv6 de ponta a ponta: literais entre colchetes com porta opcional nos campos de endereço e destinos IPv6 entre colchetes nas regras de redirecionamento de portas",
          "Log de tentativas de login bem-sucedidas e falhas, registrando o endereço exato discado e, em caso de falha, o motivo",
          "Transporte de proxy Teleport (experimental, Android): faça login com usuário, senha e OTP ou importe um arquivo de configuração ou de identidade do Teleport, navegue pelos nós do cluster e execute terminais, SFTP, tmux e plugins pelo túnel do proxy"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Comportamento de terminal estilo VT100/xterm-256color com cores reais de 24 bits e itálicos — a shell recebe TERM=xterm-256color e COLORTERM=truecolor",
          "Buffer de scrollback definido em 1.000, 5.000, 10.000 ou 50.000 linhas no Android e no iOS (5.000 por padrão)",
          "Pesquisar no terminal — busque no scrollback e na tela visível e pule entre as correspondências (Android e iOS)",
          "Integração de shell (OSC 133): avance de um prompt a outro, selecione a saída inteira de um comando — o erro de compilação de 300 linhas atrás, não só o do último — e receba um alerta quando um comando de longa duração termina (Android e iOS)",
          "Imagens em linha no terminal via o protocolo gráfico Kitty, que sobrevivem ao zoom por pinça e à reorganização das linhas em vez de sumir (Android e iOS)",
          "Glifos de mosaico de blocos, braille e sextantes desenhados pelo próprio app, para que chafa, timg e arte ANSI se encaixem com exatidão em vez de mostrar quadrados vazios (Android)",
          "Em uma TUI com rastreamento de mouse, um toque é um clique — htop, vim e a seleção de painéis funcionam pelo toque (Android)",
          "O cabeçalho do painel mostra o diretório de trabalho real daquele painel, obtido do tmux ou informado pela shell via OSC 7 (Android)",
          "Linha extra com treze teclas — ESC, TAB, CTRL, setas, Home, End, PgUp, PgDn e alternar teclado — que quebra para uma segunda linha em vez de rolar, recolhendo o que sobrar em um menu de excedentes para que nenhuma tecla fique fora da tela",
          "Personalize a linha no Android e no iOS: acrescente teclas de uma paleta com cerca de 45 predefinições, incluindo F1–F12, combinações com Ctrl e símbolos; remova, reordene, oculte, defina suas próprias teclas de sequência de escape e redefina para os padrões, com pré-visualização ao vivo",
          "Toque para focar, opção de mostrar teclado ao toque, ações de copiar e copiar tudo",
          "Pinça para zoom de texto com redimensionamento do terminal remoto",
          "Modo tela cheia de painel por toque duplo",
          "Seleção de texto do terminal com Copiar, Compartilhar e Selecionar tudo — pressionar e segurar seleciona a palavra, e Copiar mantém a seleção para compartilhar ou copiar de novo",
          "Área de transferência via OSC 52 — copie texto de uma sessão remota de tmux ou vim direto para a área de transferência do celular (Android e iOS)",
          "Entrada de teclado nativa e direta (pass-through) — sem autocorreção brigando com a shell; o ditado por voz do teclado virtual continua funcionando",
          "Suporte a teclados externos e Bluetooth no Android e no iOS, incluindo setas, teclas de função e combinações Ctrl/Alt",
          "Colagem entre colchetes (bracketed paste) para que conteúdo de várias linhas da área de transferência não seja executado automaticamente",
          "A Nerd Font incluída renderiza glifos de ícones powerline, starship, devicon e Material Design no Android e no iOS que a fonte do sistema mostraria como quadrados vazios",
          "Caracteres CJK largos, emojis e caracteres combinantes são medidos e desenhados corretamente no Android e no iOS, incluindo clusters de grafemas e juntores de largura zero (zero-width joiners)",
          "Fonte de terminal configurável (monoespaçada do sistema, JetBrains Mono ou Source Code Pro) e esquema de cores ANSI (Solarized, Gruvbox, Dracula, Nord) no Android e no iOS, aplicados ao vivo aos painéis abertos",
          "Um controle deslizante de tamanho do texto do terminal nas Configurações, ao lado do zoom por pinça, e um tema do app definido como Sistema, Claro ou Escuro"
        ]
      },
      {
        title: "Sessões",
        items: [
          "Até oito sessões SSH simultâneas",
          "Layout em grade para sessões ativas",
          "Resiliência em segundo plano e com tela bloqueada: no Android, um serviço em primeiro plano mantém shells e agentes em execução depois que você fecha o app na lista de recentes; no iOS, o auto-attach do tmux reanexa sua shell",
          "Keepalives e tentativas de reconexão com backoff exponencial — até dez tentativas, e as falhas contra uma rede que você já deixou não contam para esse limite",
          "Trocar de Wi-Fi, rede celular ou VPN faz rediscar na hora, em vez de esperar a rota morta expirar, e uma sessão que já está em backoff tenta de novo assim que surge uma rede utilizável",
          "Um servidor que parou de responder em silêncio — uma VM suspensa, um jump host travado — é percebido por sondas keepalive sem resposta e reconectado, em vez de engolir suas teclas caladamente (iOS)",
          "Entrada Sessões ativas a partir da tela inicial; notificação contínua lista as sessões — toque para abrir",
          "Acompanhamento de comandos tmux e sugestões de reattach para trabalho interrompido, com uma escolha por servidor do que anexar ao conectar: detectar automaticamente, nada, tmux, herdr ou Zellij (Android)",
          "Os agentes se reportam pelo terminal, então o app sabe qual é o agente, a ferramenta que ele está executando e se ele está bloqueado esperando por você — o painel fica âmbar, o cabeçalho dele mostra \"claude · needs you\" e um selo na barra de ferramentas conta quantos estão esperando",
          "Responda à pergunta de um agente com um toque a partir da lista de Agentes; a resposta segue por um canal separado, então ela nunca é digitada no que está na tela",
          "Instale o hook de agente em um servidor de dentro do próprio app — um pequeno script de shell que qualquer agente pode chamar, e não uma integração presa a um fornecedor",
          "Transporte Eternal Terminal (ET) para sessões que sobrevivem a quedas de rede, suspensão e mudanças de IP, com configuração automática opcional do etserver por SSH",
          "Gerenciador de tmux: liste e alterne sessões, janelas e painéis — anexe, renomeie, crie, divida, amplie ou encerre, com ordenação por nome/data e um 🔔 para agentes aguardando entrada",
          "Gerenciadores de herdr e Zellij no Android e no iOS, cada um com o mesmo alcance sobre suas próprias sessões, abas e painéis — a barra de ferramentas só mostra o ícone depois que esse programa é encontrado no servidor"
        ]
      },
      {
        title: "Arquivos e túneis",
        items: [
          "Navegador SFTP de painel duplo para arquivos locais e remotos, com um log de transferências que mostra todas elas e pode ser rolado",
          "Operações de envio e download em fila; no Android, compartilhe qualquer arquivo de outro app para a sessão em execução e o caminho remoto dele é digitado no prompt",
          "Envio e download recursivo de pastas entre o celular e o host remoto",
          "Renomear, apagar, criar, editar, compactar em .tar.gz, permissões (chmod/chown) e detalhes remotos",
          "Abra um arquivo baixado em outro app nas duas plataformas — no iOS, os downloads também aparecem no app Arquivos em \"No meu iPhone\"",
          "No Android, a Transferência de arquivos reabre onde aquela sessão tmux parou, com o nome da sessão no cabeçalho do painel, e recorre aos diretórios que você mais usa naquele host quando não há nada a lembrar",
          "Ordenar por nome ou data com persistência por host, e voltar rapidamente a caminhos remotos recentes",
          "Tamanhos de arquivo em unidades binárias, iguais ao que o ls -h mostra no terminal a uma aba de distância",
          "Redirecionamento local de portas salvo com perfis de servidor e ativado automaticamente ao conectar",
          "Segue o tema claro ou escuro do sistema em todo o app e no navegador de arquivos — escolha Sistema, Claro ou Escuro no Android e no iOS"
        ]
      },
      {
        title: "Localização",
        items: [
          "Traduções da interface do app: árabe, bengali, chinês (simplificado e tradicional), inglês, francês, alemão, hindi, indonésio, japonês, marata, português, russo, espanhol, tâmil, telugu, turco e urdu — vinte idiomas no Android, que acrescenta o pidgin nigeriano e o árabe egípcio, e dezoito no iOS",
          "Segue o idioma do sistema por padrão, e as Configurações têm um seletor de idioma caso você queira o app em um idioma diferente do celular"
        ]
      },
      {
        title: "Chaves e backup",
        items: [
          "Gere novas chaves Ed25519 ou ECDSA no dispositivo (RSA também no Android), com uma frase-senha opcional",
          "Copie, compartilhe ou salve uma chave pública gerada para adicioná-la ao authorized_keys do servidor",
          "Exporte servidores e credenciais salvos para um arquivo de backup — todos eles, ou marque apenas as linhas que quiser, sendo que tocar no cabeçalho de uma pasta leva a pasta inteira",
          "Uma frase-senha opcional criptografa o backup; importe com mesclar ou substituir",
          "Um backup sem criptografia guarda senhas e chaves em texto puro — proteja ou exclua o arquivo"
        ]
      },
      {
        title: "Segurança",
        items: [
          "Tela segura: no Android, bloqueia capturas e gravação de tela e oculta o app da miniatura de recentes; no iOS, deixa em branco a pré-visualização do alternador de apps e bloqueia a gravação e o espelhamento de tela (uma captura de tela manual não pode ser bloqueada no iOS) — uma opção que você ativa para quando senhas, chaves ou tokens estão na tela",
          "Servidores, credenciais e chaves salvos permanecem no dispositivo — os segredos ficam no Android Keystore e no iOS Keychain, sem conta na nuvem nem sincronização",
          "Apenas análises de uso anônimas — nunca seus servidores, credenciais, comandos ou conteúdo de arquivos. O Android tem uma opção para desativá-las nas Configurações; o iOS ainda não tem"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Navegue, instale e execute plugins para estender o Mobile SSH",
          "Os plugins são baixados sob demanda de um catálogo público e verificados por SHA-256 no armazenamento privado do app",
          "Um plugin declara do que precisa — comandos SSH, um túnel, armazenamento — e o app recusa tudo o que ele não pediu",
          "Quando um plugin vai configurar algo no seu servidor, você vê os comandos exatos e os aprova antes que sejam executados",
          "Configure uma fonte de catálogo personalizada ou privada, ou instale a partir de uma pasta no seu próprio servidor"
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
        mobileSsh: "Linha extra de teclas embutida, sessões em grade, painéis em tela cheia, zoom por pinça, seleção com copiar/compartilhar e rolagem compatível com tmux — com digitação nativa direta (pass-through) e suporte a teclado externo nas duas plataformas.",
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
      { category: "Conexão",            feature: "Funciona no Android e no iOS",                       mobile: "yes",     termux: "Apenas Android", termius: "yes" },
      { category: "Conexão",            feature: "Perfis de servidor salvos",                         mobile: "yes",     termux: "via ssh config", termius: "yes" },
      { category: "Conexão",            feature: "Pesquisar servidores salvos",                        mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexão",            feature: "Pastas / grupos de servidores",                      mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexão",            feature: "Seletor de Adicionar sessão com pesquisa",           mobile: "Android", termux: "no",           termius: "no" },
      { category: "Conexão",            feature: "Múltiplos endereços por servidor (roaming LAN/VPN)", mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Conexão",            feature: "Registros de credenciais reutilizáveis",             mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexão",            feature: "A tela inicial lista o que retomar",                 mobile: "yes",     termux: "no",           termius: "parcial" },
      { category: "Conexão",            feature: "Lista de sessões tmux offline (sem precisar conectar)", mobile: "yes",  termux: "no",           termius: "no" },
      { category: "Conexão",            feature: "Servidores com nome exibido no lugar do endereço",   mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexão",            feature: "Log de logins",                                      mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Conexão",            feature: "Transporte de proxy Teleport (experimental)",        mobile: "Android", termux: "no",           termius: "no" },
      { category: "Conexão",            feature: "Hosts IPv6 e destinos de redirecionamento",          mobile: "yes",     termux: "yes",          termius: "parcial" },
      { category: "Terminal",           feature: "Terminal SSH",                                        mobile: "yes",     termux: "via OpenSSH",  termius: "yes" },
      { category: "Terminal",           feature: "Emulação xterm-256color",                            mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Scrollback configurável (1 mil–50 mil linhas)",      mobile: "yes",     termux: "configurável", termius: "parcial" },
      { category: "Terminal",           feature: "Pesquisa no terminal (scrollback)",                  mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",           feature: "Linha extra de teclas (ESC/TAB/CTRL/…)",             mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Zoom por pinça",                                     mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Toque duplo para tela cheia",                        mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",           feature: "URLs tocáveis na saída do terminal",                 mobile: "yes",     termux: "parcial",      termius: "yes" },
      { category: "Terminal",           feature: "Seleção de texto: copiar / compartilhar / selecionar tudo", mobile: "yes", termux: "yes",   termius: "yes" },
      { category: "Terminal",           feature: "Suporte a teclado físico / Bluetooth",               mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Integração de shell (OSC 133)",                      mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",           feature: "Imagens em linha (gráficos Kitty)",                  mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",           feature: "Glifos de mosaico desenhados pelo app (chafa, arte ANSI)", mobile: "Android", termux: "depende da fonte", termius: "no" },
      { category: "Terminal",           feature: "O toque age como clique em TUIs com modo de mouse",  mobile: "Android", termux: "yes",          termius: "no" },
      { category: "Terminal",           feature: "Renderização de glifos Nerd Font / powerline",       mobile: "yes",     termux: "configurável", termius: "parcial" },
      { category: "Sessões",            feature: "Múltiplas sessões SSH simultâneas",                  mobile: "até 8", termux: "até 8",        termius: "yes" },
      { category: "Sessões",            feature: "Layout de painéis em grade",                         mobile: "yes",     termux: "via tmux",     termius: "abas" },
      { category: "Sessões",            feature: "Rolagem compatível com tmux",                        mobile: "yes",     termux: "yes",          termius: "no" },
      { category: "Sessões",            feature: "Dicas de reattach do tmux na reconexão",             mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sessões",            feature: "Alertas de agente (Claude Code / Codex)",            mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sessões",            feature: "Notificação contínua com lista de sessões",          mobile: "Android", termux: "parcial",      termius: "no" },
      { category: "Sessões",            feature: "Serviço em primeiro plano e wake lock",              mobile: "Android", termux: "yes",          termius: "parcial" },
      { category: "Sessões",            feature: "Reconexão automática com backoff",                   mobile: "yes",     termux: "via autossh",  termius: "yes" },
      { category: "Arquivos",           feature: "Interface de transferência SFTP embutida",           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Navegador local + remoto de painel duplo",           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Fila de envio e download",                           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Renomear / excluir / criar remotamente",             mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Visualização de permissões de arquivos remotos",     mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Arquivos",           feature: "Ordenar por nome ou data por host",                  mobile: "yes",     termux: "no",           termius: "parcial" },
      { category: "Túneis",             feature: "Redirecionamento local de portas",                   mobile: "yes",     termux: "via CLI",      termius: "yes" },
      { category: "Túneis",             feature: "Túneis salvos com perfil de servidor",               mobile: "yes",     termux: "via ssh config", termius: "yes" },
      { category: "Túneis",             feature: "Adicionar / remover túneis em tempo real",           mobile: "no",      termux: "no",           termius: "yes" },
      { category: "Chaves",             feature: "Autenticação por senha",                             mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Chaves",             feature: "Autenticação por chave privada",                     mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Chaves",             feature: "Geração de chaves no dispositivo",                   mobile: "yes",     termux: "via ssh-keygen", termius: "yes" },
      { category: "Chaves",             feature: "Compartilhar / salvar chave pública gerada",         mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Backup",             feature: "Exportar / importar backup de servidores",           mobile: "yes",     termux: "via termux-backup", termius: "cofre na nuvem Pro" },
      { category: "Backup",             feature: "Arquivo de backup local criptografado",              mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Backup",             feature: "Sem conta obrigatória",                              mobile: "yes",     termux: "yes",          termius: "parcial" },
      { category: "Privacidade e custo", feature: "Sem paywall Pro",                                   mobile: "yes",     termux: "yes",          termius: "parcial" },
      { category: "Privacidade e custo", feature: "Sem anúncios",                                      mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Privacidade e custo", feature: "Opção de desativar analytics",                      mobile: "Android", termux: "sem analytics", termius: "no" },
      { category: "Privacidade e custo", feature: "Dados apenas locais (sem sincronização em nuvem)",  mobile: "yes",     termux: "yes",          termius: "parcial" },
      { category: "Privacidade e custo", feature: "Tela segura (bloquear captura de tela)",            mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sessões",            feature: "Eternal Terminal (sessões resilientes)",             mobile: "yes",     termux: "via CLI",      termius: "no" },
      { category: "Sessões",            feature: "Instalação automática do etserver via SSH",          mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sessões",            feature: "Gerenciador de sessões tmux",                        mobile: "yes",     termux: "via CLI",      termius: "no" },
      { category: "Sessões",            feature: "Gerenciadores de sessões herdr e Zellij",            mobile: "yes"    , termux: "via CLI",      termius: "no" },
      { category: "Sessões",            feature: "Respostas com um toque a um agente bloqueado",       mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Plugins",            feature: "Suporte a plugins",                               mobile: "yes",     termux: "via pacotes",  termius: "no" },
      { category: "Plugins",            feature: "Catálogo de plugins com instalação sob demanda",     mobile: "yes",     termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH vs apps de agentes de programação de IA",
    agentAppsIntro:
      "Existe uma categoria em rápido crescimento de apps criada apenas para conduzir agentes de programação — Claude Code, Codex e afins — a partir do seu celular. Alguns são apps SSH ou de retransmissão de terceiros (Onepilot, Happy, Omnara); a OpenAI e a Anthropic agora também oferecem isso de forma nativa, com o Codex dentro do app ChatGPT e o Claude Code dentro do app Claude, ambos executando na nuvem do próprio fornecedor. O Mobile SSH se sobrepõe a todos eles — você pode executar esses agentes por SSH e receber alertas quando precisarem de você —, mas aborda a tarefa pelo outro lado: é primeiro um cliente SSH direto e de uso geral, e um complemento para agentes em segundo lugar.",
    agentAppsRows: [
      { feature: "Executa agentes de programação a partir do seu celular",         mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "yes",     chatgpt: "yes",             claude: "yes" },
      { feature: "Funciona com qualquer agente de programação (não só um fornecedor)", mobile: "yes", onepilot: "yes",     happy: "Claude Code", omnara: "yes",     chatgpt: "Apenas Codex",    claude: "Apenas Claude Code" },
      { feature: "Executa na sua própria máquina (não na nuvem de um fornecedor)",  mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "yes",     chatgpt: "no",              claude: "parcial" },
      { feature: "SSH direto — sem retransmissão na nuvem",                         mobile: "yes", onepilot: "yes",        happy: "no",          omnara: "no",      chatgpt: "no",              claude: "no" },
      { feature: "Terminal SSH de uso geral (executa qualquer comando)",           mobile: "yes", onepilot: "yes",        happy: "no",          omnara: "parcial", chatgpt: "no",              claude: "no" },
      { feature: "Transferência de arquivos SFTP",                                 mobile: "yes", onepilot: "parcial",    happy: "no",          omnara: "no",      chatgpt: "no",              claude: "no" },
      { feature: "Redirecionamento local de portas",                               mobile: "yes", onepilot: "yes",        happy: "no",          omnara: "no",      chatgpt: "no",              claude: "no" },
      { feature: "Gerenciador de sessões tmux",                                    mobile: "yes", onepilot: "parcial",    happy: "no",          omnara: "no",      chatgpt: "no",              claude: "no" },
      { feature: "Funciona com um agente que você mesmo instalou",                 mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "yes",     chatgpt: "no",              claude: "no" },
      { feature: "Alertas de agente (push quando o agente precisa de entrada)",    mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "yes",     chatgpt: "yes",             claude: "yes" },
      { feature: "Aprovar/negar prompts do agente com um toque",                   mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "yes",     chatgpt: "yes",             claude: "yes" },
      { feature: "Zero configuração de servidor ou SSH",                           mobile: "no",  onepilot: "no",         happy: "parcial",     omnara: "parcial", chatgpt: "yes",             claude: "yes" },
      { feature: "Android e iOS",                                                  mobile: "yes", onepilot: "Apenas iOS", happy: "yes",         omnara: "yes",     chatgpt: "yes",             claude: "yes" },
      { feature: "Sem conta obrigatória",                                          mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "no",      chatgpt: "no",              claude: "no" },
      { feature: "Sem paywall Pro (todos os recursos gratuitos)",                  mobile: "yes", onepilot: "no",         happy: "no",          omnara: "no",      chatgpt: "nível gratuito",  claude: "no" },
      { feature: "Código aberto",                                                  mobile: "Apache 2.0",  onepilot: "no",         happy: "MIT",         omnara: "Apache",  chatgpt: "no",              claude: "no" }
    ],
    agentAppsNote:
      "Os apps nativos do ChatGPT e do Claude são a forma mais tranquila de executar o agente de um único fornecedor com zero configuração — sem servidor, apenas uma conta — e adicionam uma tela refinada de aprovar/negar com um toque. O problema: eles executam apenas o próprio modelo na própria nuvem, sem terminal de uso geral, sem SFTP nem túneis, e sem usar a sua própria máquina, além de serem pagos ou restritos a conta. Onepilot, Happy e Omnara mantêm o agente em hardware que você controla (o Onepilot via SSH direto; o Happy e o Omnara via retransmissão na nuvem, e o Omnara exige uma conta). O Mobile SSH conecta-se direto ao seu próprio servidor sem conta nem retransmissão de fornecedor, executa qualquer agente junto com um terminal completo, SFTP e redirecionamento de portas, e todos os recursos são gratuitos. Agora ele também responde aos prompts do agente do mesmo jeito que eles — uma lista de Agentes que mostra todos os agentes de todas as conexões, com um botão para cada opção —, com a diferença de que o agente roda na sua máquina e a resposta trafega pela sua própria conexão SSH. A contrapartida é a mesma de sempre: você fornece o servidor e o hook do agente precisa ser instalado nele uma vez.",
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
        body: "Se você optar por salvar dados no app, o Mobile SSH os armazena localmente no dispositivo. No iOS, os segredos ficam no Keychain do sistema; no Android, eles são criptografados com uma chave guardada no Android Keystore que não pode ser exportada para fora do dispositivo, e o app se exclui do backup em nuvem do Android. Isso pode incluir perfis de servidor salvos, nomes de usuário, portas, senhas, chaves privadas, frases de senha, regras de redirecionamento de portas, sessões recentes, histórico de tentativas de login, caminhos de transferência, preferências de ordenação, instantâneos de sessões tmux e dicas de reattach, configurações do app e logs de depuração quando a gravação de depuração está ativa."
      },
      {
        heading: "Informações enviadas pela rede",
        body: "O Mobile SSH envia dados de autenticação SSH apenas aos servidores que você configura e aos quais se conecta. Entrada/saída do terminal, conteúdo de arquivos SFTP e tráfego de portas locais redirecionadas são trocados com os servidores e endpoints remotos escolhidos por você. O Mobile SSH não envia esses dados a um serviço de analytics, anúncios, telemetria ou sincronização em nuvem do Mobile SSH."
      },
      {
        heading: "Transferência de arquivos e acesso ao armazenamento",
        body: "A função de transferência de arquivos navega pelo armazenamento local do celular e por diretórios SFTP remotos para que você envie e baixe arquivos. O Mobile SSH não pede ao Android permissão ampla de armazenamento: você escolhe uma pasta com o seletor de pastas do sistema e o app só consegue ler e gravar dentro dela. No iOS, arquivos e fotos locais são acessados pelos seletores de documentos e de fotos do sistema."
      },
      {
        heading: "Logs e solução de problemas",
        body: "O histórico de logins e os logs opcionais de depuração ficam locais para diagnóstico, e ambos estão desligados ou vazios até que você os ative. O gravador de depuração do Android captura eventos de terminal, tamanhos de dados SSH, diagnósticos de toque, eventos de redimensionamento e eventos de ciclo de vida de túneis — ele avisa antes de começar que isso inclui cada tecla que você digita, senhas inclusive, e grava um arquivo na sua pasta Downloads. O iOS registra um log diferente e mais restrito: os endereços discados e por que cada um falhou, reconexões e backoff, conexões perdidas, mudanças de rede e comandos tmux com seus erros. Revise qualquer log ou arquivo de depuração antes de compartilhá-lo com o suporte ou outra pessoa."
      },
      { heading: "Análises de uso anônimas", body: "Para entender como o app é usado e melhorá-lo, o Mobile SSH envia análises de uso anônimas para a Aptabase, um provedor de análises focado em privacidade que atua em nosso nome. Isso se limita a eventos anônimos (como aberturas do app e quais recursos são usados) junto com a versão do app, a versão do sistema operacional, o modelo do dispositivo e o idioma. Usa um identificador de sessão aleatório que é redefinido regularmente e não está vinculado a você nem ao seu dispositivo. Nunca inclui seus servidores SSH, nomes de host, usuários, senhas, chaves, comandos ou conteúdo de arquivos. Os dados são enviados por uma conexão criptografada (HTTPS). As análises estão ativadas por padrão. No Android, você pode desativá-las a qualquer momento nas Configurações e, quando desativadas, nada é enviado; o app iOS ainda não oferece essa opção, então no iOS esses eventos anônimos são enviados enquanto o app estiver instalado. Pretendemos acrescentar a opção no iOS — até lá, esta página descreve a situação como ela realmente é." }
    ],
    permissionsHeading: "Permissões",
    permissions: [
      { label: "Internet", body: "necessária para conectar a servidores SSH." },
      { label: "Wake lock e Wi-Fi lock", body: "usados no Android para manter as sessões SSH ativas enquanto o dispositivo dorme." },
      { label: "Serviço em primeiro plano e notificações", body: "usados no Android para gerenciar conexões ativas em segundo plano; no iOS, as notificações são usadas para os alertas de agente." },
      { label: "Acesso a arquivos", body: "concedido por pasta pelo seletor do sistema no Android e pelos seletores de documentos e de fotos do sistema no iOS. O Mobile SSH não solicita permissão irrestrita de armazenamento em nenhuma das plataformas." }
    ],
    securityHeading: "Responsabilidades de segurança",
    securityBody:
      "Proteja seu dispositivo com bloqueio de tela forte se salvar credenciais ou chaves privadas. Conecte-se apenas a servidores confiáveis. A implementação atual usa armazenamento local do app (e o Keychain no iOS) em vez de um cofre criptografado em nuvem. Uma opção de Tela segura adiciona proteção quando há segredos na tela: no Android, bloqueia capturas e gravação de tela e oculta o app da tela de recentes; no iOS, deixa em branco a pré-visualização do alternador de apps e bloqueia a gravação e o espelhamento de tela (uma captura de tela manual não pode ser bloqueada no iOS).",
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
      { slug: "port-forwarding",  title: "Redirecionamento de portas", text: "Escreva strings de túnel local, redirecione para destinos IPv6 e deixe que eles subam sozinhos ao conectar." },
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
    licenseValue: "Apache 2.0",
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
