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
    discordCommunity: "Comunidade do Mobile SSH no Discord",
    beta: "Teste beta",
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
      "Mobile SSH para Android e iOS: terminais SSH, hosts intermediários, tmux, herdr, Zellij, SFTP, desktops VNC e backups. No Android, também inclui clientes VPN e chaves de segurança.",
    eyebrow: "Cliente SSH para Android e iOS",
    h1: "Mobile SSH",
    intro:
      "Terminais SSH, gerenciadores de tmux, herdr e Zellij, SFTP, desktops VNC, hosts intermediários e túneis locais — feitos para celulares e tablets. Eternal Terminal mantém os shells remotos ativos durante interrupções. O Android também inclui clientes VPN e autenticação com chaves de segurança USB/NFC.",
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
      { title: "Sobrevive a bloqueio e mudança de rede", text: "Dê a um servidor salvo vários endereços — um IP na LAN de casa e um IP na VPN — e o Mobile SSH disca o que responder, tentando primeiro o último que funcionou, e reconecta assim que a rede muda. No Android, um serviço em primeiro plano e wake locks mantêm os shells vivos com a tela apagada; no iOS, a reconexão automática mais o auto-attach do tmux devolvem você exatamente onde parou." },
      { title: "Eternal Terminal", text: "Um transporte ET opcional mantém o shell remoto vivo mesmo com quedas de rede, suspensão e mudanças de IP. Sem etserver no host? O Mobile SSH pode instalá-lo por SSH para você." },
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
      { title: "Chaves privadas", text: "Use senhas ou chaves privadas e gere chaves Ed25519 ou ECDSA no dispositivo (também RSA no Android). O Android ainda oferece chaves de segurança FIDO2 por USB/NFC e encaminhamento de agente SSH por servidor." },
      { title: "Transferência SFTP", text: "Navegador de arquivos de painel duplo vinculado a uma sessão SSH ativa. Enfileire uploads e downloads, renomeie, exclua e inspecione permissões remotas." },
      { title: "Encaminhamento de portas", text: "Salve especificações de túnel local com um perfil de servidor e eles abrem automaticamente ao conectar — inclusive depois de uma reconexão em uma nova rede, sem que você precise reconstruí-los à mão." },
      { title: "Fluxo de reconexão", text: "Troque de rede e as sessões rediscam na hora, em vez de esperar uma rota morta expirar, e uma sessão em backoff acorda assim que surge uma rede utilizável. No iOS, um servidor que parou de responder em silêncio é detectado e reconectado." },
      { title: "Backup e restauração", text: "Faça backup de servidores, credenciais e configurações, com criptografia opcional por frase secreta e prévia de Mesclar/Substituir. O Android inclui perfis VPN; os backups atuais de Android e iOS compartilham um formato, preservando configurações específicas onde são suportadas." },
      { title: "Eternal Terminal", text: "Conecte por Eternal Terminal (ET) para sessões que sobrevivem a quedas de rede, suspensão e mudanças de IP — com configuração automática opcional do etserver por SSH." },
      { title: "Gerenciadores de multiplexadores", text: "Conecte, renomeie, crie, divida, amplie ou encerre sessões pelos gerenciadores de tmux, herdr e Zellij nas duas plataformas. Um botão compartilhado de multiplexador abre os gerenciadores disponíveis; cada servidor salvo define o que anexar ao conectar." },
      { title: "Plugins", text: "Navegue, pesquise e filtre plugins por categoria e instale os fluxos de que precisa. Os downloads são verificados por SHA-256 e armazenados no espaço privado do aplicativo." },
      {
        "title": "Identidade e hosts intermediários",
        "text": "Acesse servidores por bastiões salvos nas duas plataformas. As chaves de host são verificadas antes da autenticação, e chaves alteradas são bloqueadas. O Android pode fixar novas chaves automaticamente ou perguntar antes; o iOS pede confirmação de chaves desconhecidas."
      },
      {
        "title": "Desktops remotos",
        "text": "Abra um desktop VNC por SSH no Android e iOS, com controles por toque, teclado, área de transferência e ajuste da resolução remota quando o servidor permitir."
      },
      {
        "title": "Clientes VPN no Android",
        "text": "Gerencie SSH VPN, proxy SOCKS5 local, WireGuard, Shadowsocks e OpenVPN pela tela inicial. Escolha um perfil, inicie o roteamento e use o bloco Mobile SSH VPN nas configurações rápidas para parar ou retomar."
      }
    ],
    multiHead: "Uma tela, vários shells ativos",
    multiP1:
      "A vista do terminal pode conter várias sessões SSH ativas em uma grade. Selecione um painel para digitar, use a linha de teclas extras para controles, faça pinça para ajustar o tamanho do texto e dê toque duplo para tela cheia.",
    multiP2:
      "A tela inicial responde à pergunta \"ao que eu posso voltar?\" — as conexões ativas neste momento e as sessões tmux que aguardam nos seus servidores salvos, reconstruídas a partir de um instantâneo armazenado, de modo que aparecem mesmo sem rede alguma.",
    multiAlt:
      "Mobile SSH em um celular mostrando duas sessões SSH ativas em uma visualização dividida lado a lado.",
    sftpHead: "SFTP quando o terminal não basta",
    sftpBody:
      "Navegue por pastas locais e remotas, enfileire transferências, lembre o diretório remoto de cada sessão tmux e abra arquivos remotos em outros aplicativos. As duas plataformas recebem arquivos compartilhados em sessões de terminal; o iOS pode lembrar uma pasta escolhida no app Arquivos.",
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
    videoIosAlt: "Demo no iOS abrindo o Mobile SSH direto em uma sessão de terminal SSH ao vivo e voltando para a tela inicial, com o gerenciador de tmux, as Configurações e as demais telas do app",
    muxHead: "Um vídeo por gerenciador de sessões",
    muxIntro:
      "Os vídeos gerais apresentam tmux, herdr e Zellij. Estas gravações mais longas mostram os controles de sessões, janelas, abas e painéis nas duas plataformas, usando um servidor ativo.",
    muxItems: [
        {
          text: "Sessões, janelas e painéis alcançados a partir da tela inicial, com uma sessão sinalizada por uma campainha porque algo nela pede atenção. Anexe uma janela e o terminal ao vivo a acompanha; crie uma janela e dê um nome a ela — sem digitar nenhuma combinação de prefixo.",
          androidAlt: "Demo no Android do gerenciador de tmux: a lista de sessões em cache da tela inicial, depois sessões, janelas e painéis, anexando uma janela para que o terminal a acompanhe, e criando uma janela com nome.",
          iosAlt: "Demo no iOS do gerenciador de tmux: sessões do tmux com a idade de cada uma e uma campainha naquela que está aguardando entrada, depois janelas e painéis, cada linha com Abrir, Renomear e Encerrar."
        },
        {
          text: "Workspaces, abas e painéis com o status real do agente — um agente trabalhando, outro bloqueado esperando por uma pessoa. Pré-visualize o bloqueado, responda a ele pelo celular e veja o herdr reclassificá-lo como trabalhando e depois como concluído.",
          androidAlt: "Demo no Android do gerenciador de herdr: sessões e workspaces rotulados com o status do agente, um agente marcado como \"needs you\", a resposta enviada pelo celular, e um novo workspace criado e renomeado.",
          iosAlt: "Demo no iOS do gerenciador de herdr: workspaces com o status do agente e uma folha de resposta que envia o texto digitado a um agente bloqueado, seguido de Enter."
        },
        {
          text: "Sessões com a idade de cada uma, depois abas e painéis. Pré-visualize a saída de um painel, adicione uma aba com nome, foque a que interessa e anexe — sem digitar nada no prompt.",
          androidAlt: "Demo no Android do gerenciador de Zellij: sessões com a idade de cada uma, abas e painéis, pré-visualizando a saída de um painel, criando uma aba com nome e anexando uma sessão.",
          iosAlt: "Demo no iOS do gerenciador de Zellij: uma sessão com anexar, renomear, encerrar e excluir, suas abas, e um painel com pré-visualização e ambas as direções de divisão."
        }
    ],
    demoHead: "Mais três, filmadas no Android",
    demoIntro:
      "Ainda não existe uma versão iOS destas. O mesmo servidor ao vivo das demos acima: uma sessão que sobrevive a você sair do app, uma chave criada no celular em vez de digitada nele, e servidores agrupados do jeito que você pensa neles.",
    demoItems: [
      {
        title: "A sessão sobrevive ao app",
        text: "O Android mantém a conexão em um serviço em primeiro plano; a notificação permanente identifica o servidor e oferece Desconectar tudo. Saia enquanto um log é transmitido e volte à sessão ainda ativa. O iOS permite apenas um breve período em segundo plano, depois reconecta e retoma o multiplexador.",
        androidAlt:
          "Demo no Android de uma sessão que continua rodando em segundo plano: um log HTTP ao vivo transmitido no terminal, o pedido de permissão de notificações, a notificação contínua nomeando o servidor conectado com Desconectar tudo, depois a saída para a tela inicial e a volta ao mesmo fluxo, que continua chegando."
      },
      {
        title: "As chaves são criadas aqui, não digitadas",
        text: "Gere uma chave Ed25519 no celular: um rótulo, um usuário, uma frase-senha opcional. A caixa de diálogo seguinte mostra a metade pública para adicionar ao authorized_keys de um servidor, e pode compartilhar ou salvar qualquer uma das duas metades.",
        androidAlt:
          "Demo no Android da geração de chaves: a caixa de diálogo Gerar chave SSH com um rótulo, um usuário, o tipo de chave Ed25519 e uma frase-senha, depois a caixa de diálogo Chave pública oferecendo compartilhar ou salvar a chave."
      },
      {
        title: "Os servidores ficam em pastas que você nomeia",
        text: "Agrupe servidores salvos em pastas e recolha as que você não está usando. A mesma gravação termina no terminal, onde um URL impresso por um comando fica sublinhado e tocável, em vez de ser algo para selecionar à mão.",
        androidAlt:
          "Demo no Android das pastas de servidores: servidores salvos agrupados em pastas com nome que expandem e recolhem, depois um terminal onde os URLs na saída dos comandos ficam sublinhados e podem ser tocados."
      }
    ],
    graphicsHead: "Um gráfico animado, dentro do terminal",
    graphicsBody:
      "Um GIF de 36 quadros transmitido pelo protocolo gráfico do Kitty e decodificado pelo app no ritmo do próprio arquivo — não avançado de fora. Depois, as sequências de escape pelas quais um terminal é julgado: OSC 8 transforma números de compilação e nomes de dashboards em algo que se toca, OSC 52 deixa a máquina remota escrever na área de transferência do celular, e OSC 777 dispara uma notificação Android de verdade.",
    graphicsAlt:
      "Demo no Android de um gráfico de latência animado transmitido para o terminal pelo protocolo gráfico do Kitty, seguido de links OSC 8, uma escrita na área de transferência por OSC 52 e uma notificação OSC 777.",
    lightboxClose: "Fechar",
    lightboxPrev: "Anterior",
    lightboxNext: "Próximo",
    galleryAlts: [
      "Tela inicial do Mobile SSH em um celular Android com um aviso de Sessões ativas e uma lista Continuar de servidores salvos para retomar, acima dos botões Servidores, Credenciais, Configurações, Sobre e Plugins.",
      "Caixa de diálogo Adicionar servidor em um celular com campos de nome do servidor, host e porta, endereços adicionais, credenciais, chave privada e encaminhamento de portas.",
      "Terminal SSH de sessão única em um celular mostrando o patch de um agente de programação e uma bateria de testes aprovada, sob a barra da sessão.",
      "Duas sessões SSH em visualização dividida lado a lado em um celular.",
      "Quatro sessões SSH em uma grade em um celular, cada uma em um servidor diferente, com o painel ativo destacado.",
      "Tela de transferência SFTP em um celular com os painéis Meu telefone e Host remoto.",
      "Caixa de diálogo Sobre em um celular mostrando versão, autor, licença e site.",
      "Caixa de diálogo Gerar chave SSH em um celular com campos de rótulo, usuário, tipo de chave e frase-senha.",
      "Caixa de diálogo Chave pública em um celular mostrando a chave gerada com opções de copiar, compartilhar e salvar.",
      "Tela de Servidores salvos mostrando servidores organizados em grupos de pastas Trabalho e Pessoal recolhíveis.",
      "Terminal SSH em um celular com URLs https:// sublinhados como links clicáveis tocáveis.",
      "Gerenciador de Zellij em um celular Android listando sessões, abas e painéis com botões para anexar, renomear, encerrar e focar.",
      "Gerenciador de tmux em um celular listando sessões, janelas e painéis do tmux com botões para anexar, renomear e alternar.",
      "Tela de Plugins em um celular mostrando um catálogo de plugins instaláveis com Tailscale, WireGuard e Claude Code CLI.",
      "Plugin AI Chat em um celular transmitindo uma resposta de um modelo llama3.2 local rodando no servidor remoto via SSH.",
      "Caixa de diálogo Adicionar servidor em um celular com o transporte definido como Eternal Terminal para que as sessões sobrevivam a quedas de rede."
    ],
    galleryIosAlts: [
      "Formulário de conexão do Mobile SSH em um iPhone com campos de servidor, autenticação, pasta e transporte.",
      "Servidores salvos em um iPhone organizados nos grupos Production e Staging com pesquisa de servidores.",
      "Terminal SSH ao vivo em um iPhone com a barra de status do tmux e a linha de teclas extras embaixo.",
      "Duas sessões SSH empilhadas em uma grade em um iPhone com painéis que focam ao toque.",
      "Transferência de arquivos em um iPhone com os painéis Meu telefone e Host remoto e um log de transferência concluída.",
      "Autenticação por chave em um iPhone com uma chave Ed25519 gerada no dispositivo e uma chave pública copiável.",
      "Gerenciador de tmux em um iPhone listando sessões e janelas com ações de abrir, renomear e encerrar — uma campainha sinaliza um agente aguardando entrada.",
      "Terminal SSH em um iPhone anexado a uma janela do tmux mostrando código em um editor remoto.",
      "Catálogo de plugins em um iPhone com Tailscale, WireGuard, Claude Code CLI, VS Code e AI Chat disponíveis para instalar.",
      "Formulário de conexão em um iPhone com o transporte definido como Eternal Terminal para que as sessões sobrevivam a quedas de rede.",
      "Configurações de alertas de agente em um iPhone com opções de vibração, som e somente fones de ouvido.",
      "Tela inicial do Mobile SSH em um iPhone com um aviso de Sessões ativas e uma linha Continuar para voltar a uma sessão em andamento, acima dos botões Servidores, Credenciais, Logs, Configurações, Sobre e Plugins."
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
      "Conheça terminais, hosts intermediários, verificação de servidores, SFTP, VNC, backups e gerenciadores de multiplexadores do Mobile SSH para Android e iOS, além de VPN e chaves de segurança no Android.",
    eyebrow: "Lista de recursos",
    h1: "Recursos do Mobile SSH",
    intro:
      "Acesse seus servidores no Android e iOS com terminais SSH, identidades verificadas, hosts intermediários, SFTP, VNC e gerenciadores de sessões. O Android acrescenta roteamento VPN integrado e chaves de segurança físicas; os recursos específicos de cada plataforma estão indicados abaixo.",
    groups: [
      {
        title: "Plataformas",
        items: [
          "Android 8.0 ou mais recente — no momento é um teste fechado no Google Play: abra o link de adesão em um navegador do celular e depois instale pelo Play",
          "iOS 16 ou mais recente no iPhone e iPad — participe da beta pública no TestFlight",
          "As versões atuais de Android e iOS compartilham o formato de backup 2 para inventário e configurações; importar um backup não disponibiliza recursos que a plataforma não suporta"
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
          "Uma tela inicial pensada para retomar o trabalho: as conexões ativas neste momento e as sessões tmux que aguardam nos seus servidores — vindas de um instantâneo armazenado, então elas são listadas sem rede alguma e cada linha traz a idade do registro. No iOS, a lista de Recentes passou para a tela Nova conexão, onde um toque preenche o formulário",
          "IPv6 de ponta a ponta: literais entre colchetes com porta opcional nos campos de endereço e destinos IPv6 entre colchetes nas regras de encaminhamento de portas",
          "Log de tentativas de login bem-sucedidas e falhas, registrando o endereço exato discado e, em caso de falha, o motivo",
          "Transporte de proxy Teleport (experimental, Android): faça login com usuário, senha e OTP ou importe um arquivo de configuração ou de identidade do Teleport, navegue pelos nós do cluster e execute terminais, SFTP, tmux e plugins pelo túnel do proxy",
          "Hosts intermediários SSH salvos nas duas plataformas, incluindo cadeias ordenadas de até oito saltos expandidos; cada salto usa credenciais e verificações de identidade próprias",
          "Encaminhamento de agente SSH no Android: habilite por servidor para programas remotos solicitarem assinaturas das chaves salvas, com aprovação opcional antes do uso; as chaves privadas ficam no celular",
          "Chaves de segurança FIDO2 no Android por USB ou NFC: registre ou importe credenciais de chave de segurança OpenSSH e responda às solicitações de toque e PIN"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Comportamento de terminal estilo VT100/xterm-256color com cores reais de 24 bits e itálicos — o shell recebe TERM=xterm-256color e COLORTERM=truecolor",
          "Buffer de scrollback definido em 1.000, 5.000, 10.000 ou 50.000 linhas no Android e no iOS (5.000 por padrão)",
          "Pesquisar no terminal — busque no scrollback e na tela visível e pule entre as correspondências (Android e iOS)",
          "Integração de shell (OSC 133): avance de um prompt a outro, selecione a saída inteira de um comando — o erro de compilação de 300 linhas atrás, não só o do último — e receba um alerta quando um comando de longa duração termina (Android e iOS)",
          "Imagens em linha no terminal via o protocolo gráfico Kitty, que sobrevivem ao zoom por pinça e à reorganização das linhas em vez de sumir (Android e iOS)",
          "O aplicativo desenha os símbolos de blocos, braille e sextantes, para que chafa, timg e arte ANSI preencham a grade corretamente no Android e iOS",
          "Toques enviam cliques a programas de terminal com rastreamento de mouse nas duas plataformas, com arraste opcional; o iOS também oferece uma configuração para posicionar o cursor em vez de clicar",
          "O cabeçalho do painel mostra o diretório de trabalho real daquele painel, obtido do tmux ou informado pelo shell via OSC 7 (Android)",
          "Linha de teclas extras com treze teclas — ESC, TAB, CTRL, setas, Home, End, PgUp, PgDn e alternar teclado — que quebra para uma segunda linha em vez de rolar, recolhendo o que sobrar em um menu de excedentes para que nenhuma tecla fique fora da tela",
          "Personalize a linha no Android e no iOS: acrescente teclas de uma paleta com cerca de 45 predefinições, incluindo F1–F12, combinações com Ctrl e símbolos; remova, reordene, oculte, defina suas próprias teclas de sequência de escape e redefina para os padrões, com pré-visualização ao vivo",
          "Toque para focar, opção de mostrar teclado ao toque, ações de copiar e copiar tudo",
          "Pinça para zoom de texto com redimensionamento do terminal remoto",
          "Modo tela cheia de painel por toque duplo",
          "Seleção de texto do terminal com Copiar, Compartilhar e Selecionar tudo — pressionar e segurar seleciona a palavra, e Copiar mantém a seleção para compartilhar ou copiar de novo",
          "Área de transferência via OSC 52 — copie texto de uma sessão remota de tmux ou vim direto para a área de transferência do celular (Android e iOS)",
          "Teclados físicos e ditado por voz nas duas plataformas; o iOS ativa Ditado e sugestões por padrão, incluindo autocorreção. Desative para entrada direta no terminal",
          "Suporte a teclados externos e Bluetooth no Android e no iOS, incluindo setas, teclas de função e combinações Ctrl/Alt",
          "Colagem entre colchetes (bracketed paste) para que conteúdo de várias linhas da área de transferência não seja executado automaticamente",
          "A Nerd Font incluída renderiza glifos de ícones powerline, starship, devicon e Material Design no Android e no iOS que a fonte do sistema mostraria como quadrados vazios",
          "Caracteres CJK largos, emojis e caracteres combinantes são medidos e desenhados corretamente no Android e no iOS, incluindo clusters de grafemas e juntores de largura zero (zero-width joiners)",
          "Fonte de terminal configurável (monoespaçada do sistema, JetBrains Mono ou Source Code Pro) e esquema de cores ANSI (Solarized, Gruvbox, Dracula, Nord) no Android e no iOS, aplicados ao vivo aos painéis abertos",
          "Um controle deslizante de tamanho do texto do terminal nas Configurações, ao lado do zoom por pinça, e um tema do app definido como Sistema, Claro ou Escuro",
          "Indicadores de velocidade e conexão sem resposta ajudam a distinguir um comando remoto ocupado de uma conexão travada; escurecimento e vibração são opcionais",
          "As configurações controlam notificações remotas, alertas de fim de comando e leitura remota da área de transferência; essas permissões vêm desativadas"
        ]
      },
      {
        title: "Sessões",
        items: [
          "Até oito sessões SSH simultâneas",
          "Layout em grade para sessões ativas",
          "Resiliência em segundo plano e com tela bloqueada: no Android, um serviço em primeiro plano mantém shells e agentes em execução depois que você fecha o app na lista de recentes; no iOS, o auto-attach do tmux reanexa seu shell",
          "Keepalives e tentativas de reconexão com backoff exponencial — até dez tentativas, e as falhas contra uma rede que você já deixou não contam para esse limite",
          "Trocar de Wi-Fi, rede celular ou VPN faz rediscar na hora, em vez de esperar a rota morta expirar, e uma sessão que já está em backoff tenta de novo assim que surge uma rede utilizável",
          "Sondas keepalive sem resposta detectam servidores que pararam de responder e iniciam a reconexão no Android e iOS",
          "Entrada Sessões ativas a partir da tela inicial; notificação contínua lista as sessões — toque para abrir",
          "Rastreamento de comandos tmux e dicas para retomar sessões, com opções Automático, Nada, tmux, herdr ou Zellij por servidor no Android e iOS; a identidade da sessão é preservada ao trocar sockets tmux",
          "Os agentes se reportam pelo terminal, então o app sabe qual é o agente, a ferramenta que ele está executando e se ele está bloqueado esperando por você — o painel fica âmbar, o cabeçalho dele mostra \"claude · needs you\" e um selo na barra de ferramentas conta quantos estão esperando",
          "Responda à pergunta de um agente com um toque a partir da lista de Agentes; a resposta segue por um canal separado, então ela nunca é digitada no que está na tela",
          "Instale o hook de agente em um servidor de dentro do próprio app — um pequeno script de shell que qualquer agente pode chamar, e não uma integração presa a um fornecedor",
          "Transporte Eternal Terminal (ET) para sessões que sobrevivem a quedas de rede, suspensão e mudanças de IP, com configuração automática opcional do etserver por SSH",
          "Gerenciador de tmux: liste e alterne sessões, janelas e painéis — anexe, renomeie, crie, divida, amplie ou encerre, com ordenação por nome/data e um 🔔 para agentes aguardando entrada",
          "Um único botão de multiplexador abre os gerenciadores de tmux, herdr e Zellij; Herdr oferece prévias, foco e respostas por painel, e Zellij gerencia sessões ativas e encerradas"
        ]
      },
      {
        title: "Arquivos e túneis",
        items: [
          "Navegador SFTP de painel duplo para arquivos locais e remotos, com um log de transferências que mostra todas elas e pode ser rolado",
          "Uploads e downloads em fila; compartilhe arquivos com o Mobile SSH no Android ou pela extensão de compartilhamento do iOS, envie-os a uma sessão conectada e insira os caminhos remotos",
          "Upload e download recursivos de pastas entre o celular e o host remoto",
          "Renomear, apagar, criar, editar, compactar em .tar.gz, permissões (chmod/chown) e detalhes remotos",
          "Abra um arquivo baixado em outro app nas duas plataformas — no iOS, os downloads também aparecem no app Arquivos em \"No meu iPhone\"",
          "A transferência de arquivos lembra diretórios remotos por host e sessão tmux nas duas plataformas; o iOS também lembra uma pasta local externa escolhida pelo app Arquivos",
          "Ordenar por nome ou data com persistência por host, e voltar rapidamente a caminhos remotos recentes",
          "Tamanhos de arquivo em unidades binárias, iguais ao que o ls -h mostra no terminal a uma aba de distância",
          "Encaminhamento local de portas salvo com perfis de servidor e ativado automaticamente ao conectar",
          "Segue o tema claro ou escuro do sistema em todo o app e no navegador de arquivos — escolha Sistema, Claro ou Escuro no Android e no iOS"
        ]
      },
      {
        title: "Localização",
        items: [
          "Vinte idiomas do aplicativo nas duas plataformas: árabe, árabe egípcio, bengali, chinês (simplificado e tradicional), inglês, francês, alemão, hindi, indonésio, japonês, marata, pidgin nigeriano, português, russo, espanhol, tâmil, telugu, turco e urdu",
          "Segue o idioma do sistema por padrão, e as Configurações têm um seletor de idioma caso você queira o app em um idioma diferente do celular"
        ]
      },
      {
        title: "Chaves e backup",
        items: [
          "Gere novas chaves Ed25519 ou ECDSA no dispositivo (RSA também no Android), com uma frase-senha opcional",
          "Copie, compartilhe ou salve uma chave pública gerada para adicioná-la ao authorized_keys do servidor",
          "Backups completos incluem servidores, credenciais, configurações, idioma e ordenação de multiplexadores; o Android também inclui perfis SSH VPN, SOCKS5, WireGuard, Shadowsocks e OpenVPN",
          "Use exportações selecionadas ou apenas de inventário para reduzir o escopo; confira a prévia do backup completo e escolha Mesclar ou Substituir, com criptografia opcional por frase secreta",
          "Backups sem criptografia contêm senhas e chaves privadas. Confiança em hosts SSH, sessões ativas, permissões do sistema e acesso a pastas locais não são portáteis; credenciais de chaves de segurança ainda exigem a chave física"
        ]
      },
      {
        title: "Segurança",
        items: [
          "Tela segura: no Android, bloqueia capturas e gravação de tela e oculta o app da miniatura de recentes; no iOS, deixa em branco a pré-visualização do alternador de apps e bloqueia a gravação e o espelhamento de tela (uma captura de tela manual não pode ser bloqueada no iOS) — uma opção que você ativa para quando senhas, chaves ou tokens estão na tela",
          "Servidores, credenciais e chaves salvos ficam no dispositivo, sem exigir conta na nuvem nem sincronização; consulte a página de privacidade para conhecer as proteções do armazenamento e seus limites",
          "A análise anônima de uso vem ativada, mas pode ser desativada nas configurações do Android e iOS; os eventos não incluem servidores, credenciais, comandos ou conteúdo de arquivos",
          "Identidades SSH são verificadas antes da autenticação. O Android fixa novas chaves brutas automaticamente por padrão, com opção de exigir aprovação; o iOS pergunta antes de confiar em uma chave desconhecida. Ambos rejeitam chaves alteradas",
          "As duas plataformas importam revogações de chaves de host OpenSSH com escopo definido. O iOS aceita chaves Ed25519/ECDSA com @revoked; o Android também suporta autoridades certificadoras de hosts. O iOS não suporta certificados de host nem importação de CAs. A confiança SSH permanece em cada dispositivo e não entra nos backups"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Navegue por categorias, pesquise, instale e execute plugins; os catálogos são atualizados quando você troca as fontes",
          "Os plugins são baixados sob demanda de um catálogo público e verificados por SHA-256 no armazenamento privado do app",
          "Um plugin declara do que precisa — comandos SSH, um túnel, armazenamento — e o app recusa tudo o que ele não pediu",
          "Quando um plugin vai configurar algo no seu servidor, você vê os comandos exatos e os aprova antes que sejam executados",
          "Configure uma fonte de catálogo personalizada ou privada, ou instale a partir de uma pasta no seu próprio servidor"
        ]
      },
      {
        "title": "Desktops remotos",
        "items": [
          "Desktops VNC por túnel SSH no Android e iOS, sem expor uma porta VNC à internet pública",
          "Controle do ponteiro por toque, teclados físico e virtual, troca da área de transferência e suporte ao sinal sonoro do desktop",
          "Escolha um tamanho predefinido ou dimensões personalizadas se o servidor VNC permitir; solicitações de redimensionamento não suportadas são informadas"
        ]
      },
      {
        "title": "Clientes VPN (Android)",
        "items": [
          "Abra VPN na tela inicial para gerenciar perfis SSH VPN, proxy SOCKS5, WireGuard, Shadowsocks e OpenVPN",
          "SSH VPN encaminha TCP e DNS por um servidor SSH salvo para todos ou determinados aplicativos e domínios; outros pacotes UDP destinados a SSH são bloqueados",
          "O proxy SOCKS5 local autenticado funciona junto a outro VPN; os aplicativos participantes precisam usar o proxy e DNS remoto",
          "Importe arquivos WireGuard .conf, links Shadowsocks ss:// suportados ou perfis OpenVPN .ovpn autossuficientes com verificação de certificados do servidor",
          "Inicie um perfil para trocar de VPN e use o bloco Mobile SSH VPN nas configurações rápidas para parar ou iniciar o perfil lembrado; o bloco não inclui proxies SOCKS",
          "O Android permite um VPN do dispositivo por vez. Tailscale usa seu aplicativo separado; IKEv2/IPsec é gerenciado nas configurações Android. Mobile SSH não promete VPN sempre ativo nem bloqueio de conexões fora do VPN"
        ]
      }
    ],
    security:
      "Aviso de segurança: o app atual armazena perfis de servidor e credenciais localmente no dispositivo (no iOS, os segredos ficam no Keychain do sistema). Não há sincronização em nuvem. Proteja o dispositivo com bloqueio de tela forte e evite salvar credenciais em aparelhos compartilhados."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius no celular",
    metaDescription:
      "Comparação equilibrada entre Mobile SSH, Termux e Termius para fluxos SSH no Android e no iOS.",
    eyebrow: "Opções de SSH no celular",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Mobile SSH reúne SSH, SFTP, VNC e gerenciadores de multiplexadores no Android e iOS, com clientes VPN integrados e autenticação por chave de segurança no Android. Termux é um ambiente Linux para Android, e Termius é um cliente SSH multiplataforma com recursos de produtividade vinculados a uma conta.",
    columns: {
      need: "Necessidade",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Propósito principal",
        mobileSsh: "SSH, SFTP, VNC, hosts intermediários e gerenciadores de multiplexadores nas duas plataformas; clientes VPN e chaves de segurança FIDO2 no Android.",
        termux: "Emulador de terminal Android e ambiente Linux com pacotes APT.",
        termius: "Cliente SSH moderno para Android, iOS, desktop e fluxos de trabalho em equipe voltados à web."
      },
      {
        need: "Estilo de configuração",
        mobileSsh: "Salve um servidor e suas credenciais, escolha hosts intermediários se necessário e conecte com verificação da identidade dos servidores antes da autenticação.",
        termux: "Instale pacotes como OpenSSH, configure ferramentas de shell e trabalhe a partir de uma linha de comando estilo Linux.",
        termius: "Crie ou sincronize hosts, chaves, snippets e cofres pelo modelo de app/conta Termius."
      },
      {
        need: "Controles de terminal no celular",
        mobileSsh: "Teclas extras, sessões em grade, painéis em tela cheia, zoom por gesto, copiar/compartilhar, mouse e teclados externos. No iOS, Ditado e sugestões pode ser desativado para entrada direta no terminal.",
        termux: "Ambiente de terminal poderoso; o comportamento depende das ferramentas e configuração instaladas.",
        termius: "Complemento de teclado móvel, gestos, abas, autocompletar, snippets e UX de terminal polida."
      },
      {
        need: "Transferência de arquivos",
        mobileSsh: "SFTP com dois painéis, histórico de pastas por tmux, compartilhamento de arquivos remotos e recebimento de arquivos nas duas plataformas; o iOS lembra uma pasta externa do app Arquivos.",
        termux: "Use ferramentas de linha de comando como scp, sftp, rsync ou utilitários instalados.",
        termius: "SFTP e gerenciamento de hosts e chaves embutidos."
      },
      {
        need: "Trabalho multi-sessão",
        mobileSsh: "Até oito sessões SSH simultâneas em uma grade.",
        termux: "Use multiplexadores como tmux dentro do Termux ou em shells remotos.",
        termius: "Abas e visualização dividida, dependendo da plataforma e do plano."
      },
      {
        need: "Modelo de dados",
        mobileSsh: "Perfis, credenciais, confiança em hosts e configurações no dispositivo; backups portáteis opcionais de inventário e configurações. Backups Android também incluem perfis VPN; a confiança SSH permanece em cada dispositivo.",
        termux: "Sistema de arquivos estilo Linux e pacotes dentro do ambiente do app Termux.",
        termius: "Cofres criptografados para hosts, chaves, snippets, regras de encaminhamento, known hosts e compartilhamento em equipe."
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
        body: "Você quer um espaço de trabalho SSH comercial e multiplataforma com cofre criptografado sincronizado, compartilhamento em equipe, gerenciamento de chaveiros, snippets e um app consistente em vários dispositivos."
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
      { category: "Conexão",            feature: "Hosts IPv6 e destinos de encaminhamento",            mobile: "yes",     termux: "yes",          termius: "parcial" },
      { category: "Terminal",           feature: "Terminal SSH",                                        mobile: "yes",     termux: "via OpenSSH",  termius: "yes" },
      { category: "Terminal",           feature: "Emulação xterm-256color",                            mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Scrollback configurável (1 mil–50 mil linhas)",      mobile: "yes",     termux: "configurável", termius: "parcial" },
      { category: "Terminal",           feature: "Pesquisa no terminal (scrollback)",                  mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",           feature: "Linha de teclas extras (ESC/TAB/CTRL/…)",            mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Zoom por pinça",                                     mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Toque duplo para tela cheia",                        mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",           feature: "URLs tocáveis na saída do terminal",                 mobile: "yes",     termux: "parcial",      termius: "yes" },
      { category: "Terminal",           feature: "Seleção de texto: copiar / compartilhar / selecionar tudo", mobile: "yes", termux: "yes",   termius: "yes" },
      { category: "Terminal",           feature: "Suporte a teclado físico / Bluetooth",               mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",           feature: "Integração de shell (OSC 133)",                      mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",           feature: "Imagens em linha (gráficos Kitty)",                  mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",           feature: "Glifos de mosaico desenhados pelo app (chafa, arte ANSI)", mobile: "yes", termux: "depende da fonte", termius: "no" },
      { category: "Terminal",           feature: "O toque age como clique em TUIs com modo de mouse",  mobile: "yes", termux: "yes",          termius: "no" },
      { category: "Terminal",           feature: "Renderização de glifos Nerd Font / powerline",       mobile: "yes",     termux: "configurável", termius: "parcial" },
      { category: "Sessões",            feature: "Múltiplas sessões SSH simultâneas",                  mobile: "até 8", termux: "até 8",        termius: "yes" },
      { category: "Sessões",            feature: "Layout de painéis em grade",                         mobile: "yes",     termux: "via tmux",     termius: "abas" },
      { category: "Sessões",            feature: "Rolagem compatível com tmux",                        mobile: "yes",     termux: "yes",          termius: "no" },
      { category: "Sessões",            feature: "Dicas de reanexação do tmux na reconexão",           mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sessões",            feature: "Alertas de agente (Claude Code / Codex)",            mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sessões",            feature: "Notificação contínua com lista de sessões",          mobile: "Android", termux: "parcial",      termius: "no" },
      { category: "Sessões",            feature: "Serviço em primeiro plano e wake lock",              mobile: "Android", termux: "yes",          termius: "parcial" },
      { category: "Sessões",            feature: "Reconexão automática com backoff",                   mobile: "yes",     termux: "via autossh",  termius: "yes" },
      { category: "Arquivos",           feature: "Interface de transferência SFTP embutida",           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Navegador local + remoto de painel duplo",           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Fila de upload e download",                          mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Renomear / excluir / criar remotamente",             mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Arquivos",           feature: "Visualização de permissões de arquivos remotos",     mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Arquivos",           feature: "Ordenar por nome ou data por host",                  mobile: "yes",     termux: "no",           termius: "parcial" },
      { category: "Túneis",             feature: "Encaminhamento local de portas",                     mobile: "yes",     termux: "via CLI",      termius: "yes" },
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
      { category: "Privacidade e custo", feature: "Opção de desativar analytics",                      mobile: "yes", termux: "sem analytics", termius: "no" },
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
      { feature: "Encaminhamento local de portas",                                 mobile: "yes", onepilot: "yes",        happy: "no",          omnara: "no",      chatgpt: "no",              claude: "no" },
      { feature: "Gerenciador de sessões tmux",                                    mobile: "yes", onepilot: "parcial",    happy: "no",          omnara: "no",      chatgpt: "no",              claude: "no" },
      { feature: "Funciona com um agente que você mesmo instalou",                 mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "yes",     chatgpt: "no",              claude: "no" },
      { feature: "Alertas do agente (quando um agente conectado precisa de uma resposta)",    mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "yes",     chatgpt: "yes",             claude: "yes" },
      { feature: "Aprovar/negar prompts do agente com um toque",                   mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "yes",     chatgpt: "yes",             claude: "yes" },
      { feature: "Zero configuração de servidor ou SSH",                           mobile: "no",  onepilot: "no",         happy: "parcial",     omnara: "parcial", chatgpt: "yes",             claude: "yes" },
      { feature: "Android e iOS",                                                  mobile: "yes", onepilot: "Apenas iOS", happy: "yes",         omnara: "yes",     chatgpt: "yes",             claude: "yes" },
      { feature: "Sem conta obrigatória",                                          mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "no",      chatgpt: "no",              claude: "no" },
      { feature: "Sem paywall Pro (todos os recursos gratuitos)",                  mobile: "yes", onepilot: "no",         happy: "no",          omnara: "no",      chatgpt: "nível gratuito",  claude: "no" },
      { feature: "Código aberto",                                                  mobile: "Apache 2.0",  onepilot: "no",         happy: "MIT",         omnara: "Apache",  chatgpt: "no",              claude: "no" }
    ],
    agentAppsNote:
      "Os apps nativos do ChatGPT e do Claude são a forma mais tranquila de executar o agente de um único fornecedor com zero configuração — sem servidor, apenas uma conta — e adicionam uma tela refinada de aprovar/negar com um toque. O problema: eles executam apenas o próprio modelo na própria nuvem, sem terminal de uso geral, sem SFTP nem túneis, e sem usar a sua própria máquina, além de serem pagos ou restritos a conta. Onepilot, Happy e Omnara mantêm o agente em hardware que você controla (o Onepilot via SSH direto; o Happy e o Omnara via retransmissão na nuvem, e o Omnara exige uma conta). O Mobile SSH conecta-se direto ao seu próprio servidor sem conta nem retransmissão de fornecedor, executa qualquer agente junto com um terminal completo, SFTP e encaminhamento de portas, e todos os recursos são gratuitos. Agora ele também responde aos prompts do agente do mesmo jeito que eles — uma lista de Agentes que mostra todos os agentes de todas as conexões, com um botão para cada opção —, com a diferença de que o agente roda na sua máquina e a resposta trafega pela sua própria conexão SSH. A contrapartida é a mesma de sempre: você fornece o servidor e o hook do agente precisa ser instalado nele uma vez.",
  },
  privacy: {
    metaTitle: "Política de Privacidade | Mobile SSH",
    metaDescription:
      "Como o Mobile SSH trata dados salvos, identidades de servidores, backups, tráfego SSH e VPN, arquivos, análises e permissões no Android e iOS.",
    eyebrow: "Privacidade",
    h1: "Política de Privacidade",
    intro:
      "O Mobile SSH guarda sua configuração no dispositivo e conecta aos servidores e serviços que você escolhe. Não exige conta Mobile SSH nem sincronização em nuvem. Os clientes VPN opcionais do Android também encaminham tráfego selecionado do dispositivo pelos servidores configurados.",
    sections: [
      {
        heading: "Informações armazenadas no seu dispositivo",
        body: "Os dados salvos incluem perfis de servidores, credenciais, chaves privadas, identidades de hosts, hosts intermediários, regras de túneis, snapshots de sessões, histórico de login, caminhos, permissões de pastas e configurações. O Android também armazena configurações VPN/proxy e seus segredos. Os segredos do iOS usam o Keychain. O Android criptografa o inventário com uma chave protegida pelo Keystore, mas pode salvá-lo em texto simples se a criptografia estiver indisponível; o armazenamento de perfis WireGuard, Shadowsocks e OpenVPN exige criptografia. O backup em nuvem do Android está desativado. Logs de depuração opcionais ficam armazenados localmente."
      },
      {
        heading: "Informações enviadas pela rede",
        body: "A autenticação SSH vai aos servidores e hosts intermediários configurados após a verificação de suas identidades. O tráfego de terminal, SFTP, VNC e encaminhamento vai aos destinos escolhidos. Catálogos e downloads de plugins acessam suas fontes configuradas. Perfis VPN/proxy no Android podem enviar tráfego de outros aplicativos e DNS pelos seus servidores SSH, WireGuard, Shadowsocks ou OpenVPN, conforme as rotas escolhidas. Esse tráfego não é enviado à análise ou ao armazenamento em nuvem do Mobile SSH."
      },
      {
        heading: "Transferência de arquivos e acesso ao armazenamento",
        body: "A transferência usa pastas e arquivos selecionados, sem permissão ampla de armazenamento. O Android mantém acesso à pasta autorizada. O iOS pode usar a pasta do aplicativo ou lembrar uma pasta escolhida em Arquivos, e importa documentos, fotos e arquivos compartilhados pelas interfaces do sistema. O provedor de arquivos escolhido pode guardar dados em sua própria nuvem. Abrir ou compartilhar um arquivo o envia ao aplicativo ou destino que você escolher."
      },
      {
        heading: "Logs e solução de problemas",
        body: "As tentativas de login são registradas localmente durante as conexões. A gravação de depuração é opcional: o gravador Android avisa que os diagnósticos incluem todas as teclas digitadas, inclusive senhas, e exporta um arquivo compactado. Os logs iOS registram endereços, falhas, reconexões, mudanças de rede e diagnósticos tmux. Revise-os antes de compartilhar: podem revelar detalhes dos servidores e, no Android, segredos digitados."
      },
      { heading: "Análises de uso anônimas", body: "O Mobile SSH envia eventos anônimos de uso do aplicativo e de recursos ao Aptabase via HTTPS, com versões do aplicativo e sistema, modelo do dispositivo e idioma. Usa um identificador aleatório de sessão que muda periodicamente; os eventos nunca incluem endereços de servidores, nomes de usuário, credenciais, comandos ou conteúdo de arquivos. A análise vem ativada. Android e iOS oferecem um controle nas configurações que interrompe a coleta de novos eventos; eventos já enfileirados ainda podem ser enviados no iOS." },
      {
        "heading": "Backups que você exporta",
        "body": "Backups completos incluem inventário e configurações, além de perfis VPN/proxy no Android. Uma frase secreta criptografa o arquivo; sem ela, senhas e chaves privadas ficam em texto simples. Você escolhe onde salvá-lo ou compartilhá-lo. Confiança em hosts SSH, sessões ativas e acesso a pastas concedido pelo sistema são excluídos. A prévia de importação mostra quais seções e preferências de segurança serão aplicadas."
      },
      {
        "heading": "Roteamento VPN no Android",
        "body": "O roteamento VPN requer consentimento do Android e continua até ser parado ou encerrado pelo sistema. Só um VPN do dispositivo funciona por vez; um proxy SOCKS local pode coexistir com outro VPN. O roteamento SSH transporta TCP e DNS, bloqueando outros pacotes UDP atribuídos a SSH. Parar, trocar ou encerrar o aplicativo termina a proteção do VPN anterior; o Mobile SSH não garante VPN sempre ativo nem bloqueio de conexões fora do VPN."
      }
    ],
    permissionsHeading: "Permissões",
    permissions: [
      { label: "Internet", body: "usada para conexões SSH, transferência de arquivos, desktops, VPN e plugins, além da análise quando ativada." },
      { label: "Wake lock e Wi-Fi lock", body: "usados no Android para manter as sessões SSH ativas enquanto o dispositivo dorme." },
      { label: "Serviço em primeiro plano e notificações", body: "usados no Android para gerenciar conexões ativas em segundo plano; no iOS, as notificações são usadas para os alertas de agente." },
      { label: "Acesso a arquivos", body: "concedido pelos seletores de pastas, documentos e fotos do sistema; o iOS pode lembrar uma pasta externa em Arquivos. Nenhuma plataforma pede acesso irrestrito ao armazenamento." },
      {
        "label": "Consentimento VPN (Android)",
        "body": "necessário antes de um cliente VPN integrado encaminhar tráfego do dispositivo. Um proxy apenas SOCKS não ocupa a conexão VPN do dispositivo."
      },
      {
        "label": "USB e NFC (Android)",
        "body": "usados para comunicação com uma chave de segurança FIDO2 física para registro ou assinatura SSH, com autorização USB e confirmação por toque/PIN quando necessárias."
      }
    ],
    securityHeading: "Responsabilidades de segurança",
    securityBody:
      "Proteja o dispositivo e os backups exportados. Compare fingerprints SSH desconhecidas por um canal confiável: desative a aceitação automática de novas identidades no Android se quiser aprovar o primeiro uso; o iOS pergunta por padrão. Investigue mudanças de chave antes de substituir uma identidade salva. Tela segura bloqueia capturas e gravação no Android; no iOS, oculta a prévia no seletor de apps e gravação/espelhamento, mas não bloqueia capturas manuais.",
    contactHeading: "Contato",
    contactBody: "Contato de suporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentação | Mobile SSH",
    metaDescription: "Documentação para usuários finais do Mobile SSH no Android e no iOS.",
    eyebrow: "Guia do usuário",
    h1: "Documentação do Mobile SSH",
    intro:
      "Guias para identidades SSH e hosts intermediários, terminais e VNC, gerenciadores de multiplexadores, SFTP, backups, túneis locais e clientes VPN Android, com as diferenças entre plataformas explicadas.",
    cards: [
      { slug: "getting-started",  title: "Primeiros passos",           text: "Instale, verifique identidades de servidores, configure hosts intermediários e chaves e faça backup da sua configuração." },
      { slug: "terminal",         title: "Terminal",                   text: "Use controles de terminal, tmux, herdr, Zellij, alertas de agentes e desktops VNC." },
      { slug: "file-transfer",    title: "Transferência de arquivos",  text: "Transfira arquivos, lembre pastas e compartilhe arquivos com sessões ou outros aplicativos." },
      { slug: "port-forwarding",  title: "Encaminhamento de portas",   text: "Configure túneis locais e SSH VPN, SOCKS5, WireGuard, Shadowsocks e OpenVPN no Android." },
      { slug: "troubleshooting",  title: "Solução de problemas",       text: "Diagnostique problemas de identidade, hosts intermediários, terminal, transferência, backup e VPN." }
    ]
  },
  docsNav: {
    home: "Início dos docs",
    gettingStarted: "Primeiros passos",
    terminal: "Terminal",
    fileTransfer: "Transferência de arquivos",
    portForwarding: "Encaminhamento de portas",
    troubleshooting: "Solução de problemas"
  },
  about: {
    metaTitle: "Sobre | Mobile SSH",
    metaDescription: "Sobre o Mobile SSH: versão, autor, licença e avisos de código aberto do cliente SSH para Android e iOS.",
    eyebrow: "Sobre",
    h1: "Sobre o Mobile SSH",
    intro: "SSH, SFTP, VNC e gerenciadores de multiplexadores para Android e iOS, com backups locais, identidades verificadas e hosts intermediários. O Android também inclui clientes VPN e suporte a chaves de segurança físicas.",
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
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh", licenseUrl: "https://github.com/apple/swift-nio-ssh/blob/main/LICENSE.txt" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto", licenseUrl: "https://github.com/apple/swift-crypto/blob/main/LICENSE.txt" },
      { name: "WireGuard Android — Android", license: "Apache-2.0", url: "https://github.com/WireGuard/wireguard-android", licenseUrl: "/licenses/wireguard-android-APACHE-2.0.txt" },
      { name: "wireguard-go — Android", license: "MIT", url: "https://github.com/WireGuard/wireguard-go", licenseUrl: "/licenses/wireguard-go-MIT.txt" },
      { name: "Go / golang.org/x/crypto / golang.org/x/net / golang.org/x/sys — Android", license: "BSD-3-Clause", licenseUrl: "/licenses/wireguard-third-party-notices.txt" },
      { name: "hev-socks5-tunnel / hev-socks5-core / hev-task-system — Android", license: "MIT", url: "https://github.com/heiher/hev-socks5-tunnel", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "lwIP — Android", license: "BSD-3-Clause", url: "https://savannah.nongnu.org/projects/lwip/", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "shadowsocks-rust — Android", license: "MIT / Apache-2.0 / BSD / ISC / Unicode-3.0", url: "https://github.com/shadowsocks/shadowsocks-rust", licenseUrl: "/licenses/shadowsocks-NOTICES.txt" },
      { name: "OpenVPN 3 Core — Android", license: "MPL-2.0", url: "https://github.com/OpenVPN/openvpn3", licenseUrl: "/licenses/openvpn3-MPL-2.0.txt" },
      { name: "mbed TLS — Android", license: "Apache-2.0", url: "https://github.com/Mbed-TLS/mbedtls", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "Asio — Android", license: "BSL-1.0", url: "https://github.com/chriskohlhoff/asio", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "LZ4 / xxHash — Android", license: "BSD-2-Clause", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
    ],
    openvpnSourceHeading: "Código-fonte do OpenVPN",
    openvpnSourceBody: "O OpenVPN 3 Core é usado sob MPL 2.0. Baixe o código-fonte coberto e as versões exatas das dependências, os textos das licenças e as informações de compilação nativa.",
    openvpnSourceLabel: "Baixar arquivo de código-fonte",
    certificatesHeading: "Certificados",
    apkCertificateLabel: "Certificado de assinatura do APK de instalação direta (PEM)",
    apkCertificateBody: "Este certificado público identifica quem assina o APK de instalação direta do Mobile SSH. O Google Play pode assinar os downloads com outro certificado.",
    serverCertificateBody: "Os certificados dos servidores SSH e VPN devem vir do administrador do servidor ou provedor de VPN. Verifique suas impressões digitais por um canal confiável; este certificado de assinatura não é uma CA de VPN.",
    signingHelpLabel: "Documentação de assinatura do Android",
    contactHeading: "Contato",
    contactBody: "Contato de suporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
