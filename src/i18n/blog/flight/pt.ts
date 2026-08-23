import type { FlightPost } from "./types";

// Portuguese translation of "Eleven hours over the Atlantic".
//
// Mirrors ./en.ts key for key and array element for array element. Inline
// markup and HTML entities (<strong>, <em>, <code>, <span>, &lt;, &amp;) are
// kept verbatim; only the words around them are translated. Latency figures
// are unchanged in value — thousands and decimal separators follow Portuguese
// convention (35.786 km, 7,3 ms) so the numbers read correctly here.

export const pt: FlightPost = {
  meta: {
    title: "Onze horas sobre o Atlântico | Mobile SSH",
    description:
      "A 35.786 km, só a luz já custa 477 ms de ida e volta. O que realmente quebra quando você trabalha de dentro de um avião, por que não é o que você imagina e como passar um voo de longo curso entregando trabalho em vez de rever filme. Do Mobile SSH — o cliente de SSH, SFTP e terminal para Android, iPhone e iPad."
  },

  backLabel: "Blog",

  masthead: {
    eyebrow: "Relato de campo",
    boardTitle: "Partidas",
    legend: {
      time: "Hora",
      flight: "Voo",
      destination: "Destino",
      remarks: "Observações"
    },
    headline: "Onze horas sobre o Atlântico",
    headlineTranslated: "Onze horas sobre o Atlântico",
    deck: `A poltrona 24B está assistindo a um filme que já viu três vezes. A poltrona 24C está revisando
      <span class="hl">quatro servidores</span> no mesmo Wi-Fi. A diferença não está na conexão —
      está no que cada uma delas colocou do outro lado dela.`,
    byline: [
      { key: "autor:", value: "O Conselho Editorial do Mobile SSH" },
      { key: "data:", value: "10 de agosto de 2026" },
      { key: "leitura:", value: "8 min" },
      { key: "link:", value: "703 ms, GEO" }
    ]
  },

  sections: {
    twoSeats: {
      heading: "Duas poltronas, um satélite",
      intro: [
        `Onze horas, de Nova York para algum lugar a leste. As luzes da cabine ficam âmbar. A poltrona
          24B liga a tela do encosto da frente, percorre um catálogo de quatrocentos títulos e escolhe
          um filme que já viu três vezes. Isso não é uma crítica. É a coisa mais sensata que se pode
          fazer com onze horas dentro de um tubo de alumínio pressurizado, e quase todos nós já fizemos.`,
        `A poltrona 24C tira o celular do bolso.`
      ],
      outro: [
        `As duas poltronas estão no mesmo Wi-Fi. As duas estão à mesma distância do chão. Quando as
          rodas tocarem a pista, uma terá assistido a um filme cujas falas já sabe de cor, e a outra
          terá mesclado três branches, resolvido uma suíte de testes que falhava e reiniciado um job
          travado numa máquina a seis mil quilômetros dali.`,
        `O interessante não é que isso seja possível. É <em>por que</em> é possível — e por que a
          abordagem óbvia, aquela que quase todo mundo tenta uma vez e abandona em algum ponto sobre a
          Groenlândia, simplesmente não funciona.`
      ]
    },

    aboveYou: {
      heading: "O que existe de fato acima de você",
      intro: [
        `Há duas coisas radicalmente diferentes que uma companhia aérea pode querer dizer com "Wi-Fi",
          e qual delas está parafusada à sua fuselagem em particular decide tudo o que vem depois.`,
        `O arranjo antigo é um satélite geoestacionário, estacionado a <strong>35.786 km</strong>.
          Essa altitude não é uma escolha de projeto que alguém tenha feito pensando em você; é a
          distância exata em que uma órbita leva vinte e quatro horas, de modo que o satélite parece
          pendurado, imóvel. A consequência é uma aritmética contra a qual nenhum orçamento de
          engenharia consegue argumentar: subir e descer, duas vezes, dá <strong>477 ms de ida e volta
          só para a luz</strong>, antes que um único roteador entre na história.`,
        `O arranjo novo é uma constelação em órbita terrestre baixa a cerca de <strong>550 km</strong>
          — umas sessenta e cinco vezes mais perto, e <strong>7,3 ms</strong> de propagação na ida e volta.`
      ],
      afterDiagram: [
        `As medições feitas no ar batem com a física. A análise dos testes de velocidade em voo da
          Ookla no 1º trimestre de 2025 encontrou uma <strong>mediana de ida e volta de 44 ms na
          Starlink contra 703–757 ms na Hughes, na Intelsat e na Viasat</strong> — uma diferença de
          cerca de dezesseis vezes. Outra equipe, que instrumentou aparelhos reais em
          <strong>25 voos de 7 companhias aéreas</strong> para o ACM IMC 2025, mediu o mesmo formato de
          forma independente: abaixo de 40 ms em LEO, acima de 550 ms em GEO.`
      ],
      afterChart: [
        `Para uma travessia oceânica de longo curso, o número honesto é um pouco pior que a manchete. A
          mesma pesquisa mediu uma <strong>mediana de 62 ms sobre o Pacífico, variando entre 19 e 86 ms</strong>.
          É esse o número para guardar na cabeça. Continua excelente. Mas não é 44.`
      ]
    },

    rollout: {
      heading: "A parte que desanima",
      intro: [
        `É aqui que um texto no blog de um produto deveria dizer que o futuro chegou.`,
        `Ele não chegou por igual, e a aeronave em que chegou por último é <em>a sua</em>.`,
        `Os aviões de corredor único são reequipados primeiro — são muitos, giram rápido em solo e
          voam trechos domésticos curtos, em que ninguém está tentando fazer onze horas de coisa
          alguma. Os de fuselagem larga, que de fato cruzam oceanos, são os últimos da fila. Em meados
          de 2026, a United tinha <strong>mais de 400 aeronaves com Starlink</strong> e esperava chegar
          perto de mil até o fim do ano — mas apenas cerca de
          <strong>sessenta delas eram de fuselagem larga</strong>, seu primeiro voo transatlântico de
          fuselagem larga com Starlink (Newark–Heathrow) só aconteceu em <strong>junho de 2026</strong>,
          e a frota completa de fuselagem larga só tem prazo para <strong>meados de 2027</strong>. A
          Virgin Atlantic já havia concluído seus <strong>doze A350</strong> — cerca de
          <strong>28% da frota de fuselagem larga</strong> —, com os 787 programados ao longo do
          segundo semestre de 2026 e os A330neo entrando em 2027.`
      ],
      afterFigure: [
        `Ou seja: se você está lendo isto num voo intercontinental em 2026, as probabilidades ainda
          estão contra você. É provável que esteja no link de 700 ms, não no de 62 ms.`,
        `O que torna o resto deste texto mais útil, e não menos.`
      ]
    },

    filmVsShell: {
      heading: "Por que o filme funciona e o terminal não",
      cmdComment: "uma sessão inteira para andar um caractere",
      prose: [
        `Um filme e uma shell falham em direções opostas, e o Wi-Fi de bordo é exatamente a rede
          errada para um dos dois.`,
        `Um filme é um problema de <em>banda</em> que não liga para latência. Ele armazena em buffer.
          Se o primeiro quadro chegar 700 ms atrasado, ninguém percebe, porque nada na experiência
          depende de o filme reagir a você. Dê play, espere, assista. A ida e volta acontece uma vez só.`,
        `Uma shell interativa é a imagem espelhada. Quase não precisa de banda — uma sessão de terminal
          se mede em kilobits, não em megabits —, mas paga a ida e volta <strong>a cada tecla que você
          espera ver ecoada de volta</strong>. A 700 ms, isso não é uma conexão lenta. É uma conversa
          com dois terços de segundo de pausa depois de cada caractere.`,
        `É aqui que as pessoas erram. Elas veem "50 Mbps" no portal de bordo, concluem que a conexão
          está boa, abrem um terminal e descobrem que "boa" não tem nada a ver com o caso. A moeda
          aqui não é a banda. <strong>São as idas e voltas.</strong>`
      ]
    },

    whatBreaks: {
      heading: "O que realmente quebra (não é a digitação)",
      intro: [
        `A falha é mais específica do que "parece lento", e a pesquisa é excepcionalmente clara sobre
          onde a dor recai.`,
        `Num estudo controlado com 31 participantes comparando 20 ms com 200 ms de latência de entrada
          de ponta a ponta, <strong>a digitação corrida quase não mudou</strong>: 290,9 ms por
          caractere contra 302,7, uma diferença que os autores não puderam chamar de significativa. As
          taxas de erro foram idênticas.`
      ],
      afterTable: [
        `Mas a tarefa de <em>correção</em> — reposicionar o cursor com as setas e consertar o texto,
          aquilo que você de fato faz num editor — foi de <strong>38,9 segundos para 46,5 segundos,
          cerca de 20% mais lenta, com um tamanho de efeito muito grande</strong> (p &lt; 0,001,
          d = 1,673). Os autores explicam o mecanismo sem rodeios: durante a navegação, você precisa
          ficar esperando a tela, porque onde o cursor parou determina o que você faz em seguida.`,
        `A carga subjetiva piorou mesmo onde a velocidade não piorou. Na tarefa de digitação, em que o
          desempenho ficou estatisticamente igual, a <strong>frustração relatada ainda assim subiu de
          20,9 para 31,3</strong>.`,
        `Traduza isso para um terminal e você tem o nome exato do que desmorona lá em cima: não é
          digitar um comando. É navegar no <code>vim</code>, é o autocompletar com Tab, é rolar a saída
          no <code>less</code> e é o ritmo de cutucar-e-olhar de um REPL. Cada um deles é um laço em que
          a próxima coisa que você faz depende do que acabou de voltar.`
      ]
    },

    moveTheWork: {
      heading: "Mova o trabalho, não as teclas",
      intro: [
        `Assim que você aceita que as idas e voltas são o recurso escasso, a solução deixa de ser
          "arrumar um avião mais rápido" e vira uma questão de arquitetura: <strong>faça menos idas e
          voltas, e faça cada uma carregar mais.</strong>`,
        `Existe uma ferramenta conhecida que ataca isso de frente. O Mosh prevê o que as suas teclas
          vão fazer e as ecoa localmente antes de o servidor confirmar. O efeito medido é dramático:
          num link com cerca de meio segundo de ida e volta, a resposta mediana por tecla caiu de
          <strong>503 ms para menos de 5 ms</strong>. Num trajeto transoceânico do MIT até Singapura,
          de <strong>273 ms para menos de 5 ms</strong>.`,
        `Mas leia as letras miúdas, porque é nelas que está tudo. O Mosh prevê cerca de
          <strong>70% das teclas</strong>. Os aproximadamente 30% que ele não consegue prever são, nas
          palavras dos próprios autores, <em>principalmente navegação</em> — e, para essas, o perfil de
          latência volta a ser o do SSH puro. Ou seja: a interação que a latência alta castiga com mais
          força é exatamente aquela que o eco local não consegue salvar.`
      ],
      chartHeading: "previstas × não previstas",
      afterChart: [
        `Então a previsão ajuda, mas não salva. O que salva de verdade é se recusar a estar dentro do
          laço com essa frequência.`,
        `<strong>Pare de digitar dentro da latência. Coloque o trabalho demorado na outra ponta e vá
          conferir de tempos em tempos.</strong> Um build, uma suíte de testes, uma migração, um agente
          de programação — nada disso precisa de você presente na ida e volta. Precisa de você no começo
          e na hora da decisão. Tudo o que fica entre uma coisa e outra é problema da máquina, e a
          máquina está em terra, com uma boa conexão.`,
        `É também por isso que o <em>paralelismo</em> ganha da <em>interatividade</em> lá em cima. Não
          dá para digitar rápido através de 700 ms. Mas dá, e muito bem, para supervisionar quatro
          servidores ao mesmo tempo, porque supervisão não é limitada pela latência — é limitada pela
          atenção, e você tem onze horas de atenção e mais nada em que gastá-la.`
      ]
    },

    seat24c: {
      heading: "O que a poltrona 24C está de fato fazendo",
      lead: `Na prática, num celular, num link ruim:`,
      outro: [
        `Nada disso foi inventado para aviões. É simplesmente a cara que o trabalho remoto sobre um
          link hostil sempre teve, e um avião é apenas um link hostil incomumente honesto.`
      ]
    },

    caveat: {
      heading: "Uma ressalva honesta",
      prose: [
        `Duas coisas que não conseguimos verificar e não vamos fingir que verificamos:`,
        `<strong>Se a rede da sua companhia aérea vai deixar o SSH sair.</strong> Não encontramos
          nenhuma evidência pública confiável sobre bloqueio de portas, política de VPN ou tempos limite
          de inatividade entre os provedores de Wi-Fi de bordo — e encontramos muita afirmação
          confiante de fórum que não sobrevive a uma checagem. Varia por companhia, por provedor e por
          aeronave. Teste num voo curto antes de planejar um voo longo em cima disso.`,
        `<strong>Como a cabine realmente gasta o tempo dela.</strong> As estatísticas de entretenimento
          de bordo mais citadas acabam remontando a tabelas de preços de publicidade sem nenhuma
          metodologia, e nós as descartamos. A melhor evidência de pesquisa que encontramos —
          Inmarsat/Censuswide, 11.231 passageiros em dez países, ainda que aplicada lá em 2022 e
          perguntando sobre intenção em vez de medir tempo — coloca o entretenimento bem à frente do
          trabalho: <strong>41% queriam assistir a filmes baixados e 35% queriam streaming, contra 26%
          que queriam trabalhar.</strong>`,
        `Então trate a poltrona 24B como um personagem, não como uma estatística. A questão nunca foi
          que assistir a um filme seja errado. É que a alternativa deixou de ser indisponível.`
      ]
    },

    descent: {
      heading: "Descida",
      prose: [
        `O filme termina onde terminou nas três vezes anteriores. Começa a descida. A poltrona 24B teve
          um voo perfeitamente bom e vai pousar descansada, o que já vale alguma coisa.`,
        `A poltrona 24C pousa com o trabalho feito — porque o trabalho nunca esteve na poltrona. Esteve
          o tempo todo numa máquina em terra, e o celular nunca passou de uma janela para ela.`,
        `Onze horas é muito tempo para se passar a 700 ms. E é pouquíssimo tempo para se passar
          supervisionando quatro servidores que não estão nem aí para o satélite.`
      ]
    }
  },

  seat24b: {
    tag: "poltrona 24b",
    lines: [
      { time: "19:04", verb: "play", text: "— filme, 118 min" },
      { time: "21:02", verb: "play", text: "— filme, de novo" },
      { time: "23:10", verb: "ocioso", text: "— cabine escura" },
      { time: "05:41", verb: "acorda", text: "— descida" }
    ]
  },

  seat24c: {
    tag: "poltrona 24c",
    lines: [
      { time: "19:04", verb: "attach", text: "— 4 sessões, 1 grade" },
      { time: "21:02", verb: "merge", text: "— três branches" },
      { time: "23:10", verb: "verde", text: "— suíte que falhava resolvida" },
      { time: "05:41", verb: "reinicia", text: "— job travado retomado" }
    ]
  },

  quotes: [
    `Mesmo avião, mesma antena, mesmo Wi-Fi ruim. A diferença está
        inteiramente no que você coloca do outro lado dele.`,
    `O avião em que você está é o último que eles vão atualizar. Planeje
        para 700 ms e se encante com 62.`,
    `A latência não cobra imposto da sua digitação. Ela cobra de toda
        decisão que fica esperando a tela.`
  ],

  orbit: {
    alt: "Diagrama: um satélite geoestacionário a 35.786 km custa 477 ms de ida e volta só no tempo da luz; um satélite em órbita terrestre baixa a 550 km custa 7,3 ms.",
    geoLabel: "GEO 35.786 km",
    geoValue: "477 ms de luz",
    leoLabel: "LEO 550 km",
    leoValue: "7,3 ms de luz",
    aircraft: "poltrona 24C, 11.000 m",
    caption: "Fora de escala — nada que inclua 35.786 km jamais está em escala."
  },

  latencyChart: {
    rows: [
      { label: "GEO — Hughes / Intelsat / Viasat, mediana", value: "703 ms" },
      { label: "LEO sobre o Pacífico — mediana de longo curso", value: "62 ms" },
      { label: "LEO — Starlink em voo, mediana geral", value: "44 ms" }
    ],
    note: "Barras em uma escala linear comum. Fonte 1."
  },

  rolloutFigure: {
    items: [
      {
        name: "United",
        value: "≈60",
        text: `aeronaves de fuselagem larga voando com Starlink, de mais de 400 aparelhos
            equipados. O resto da frota de fuselagem larga só tem prazo para meados de 2027.`
      },
      {
        name: "Virgin Atlantic",
        value: "12 de ~43",
        text: `de fuselagem larga concluídas — cerca de 28 por cento. Os 787 seguem pelo
            2º semestre de 2026 e os A330neo entram em 2027.`
      }
    ],
    note: `Fontes 5 e 6. As demais aeronaves de fuselagem larga da United têm prazo até
          meados de 2027; os 787 da Virgin ao longo do 2º semestre de 2026 e os A330neo em 2027.`
  },

  latencyTable: {
    caption: "Schmid et al., MUM '23 — n = 31, latência de entrada de 20 ms vs 200 ms",
    head: ["tarefa", "20 ms", "200 ms", "veredito"],
    rows: [
      { task: "digitação / caractere", low: "290,9", high: "302,7", verdict: "n.s." },
      { task: "tarefa de correção", low: "38,9 s", high: "46,5 s", verdict: "+20%" },
      { task: "frustração", low: "20,9", high: "31,3", verdict: "p=0,004" }
    ]
  },

  moshChart: {
    rows: [
      { label: "teclas que o mosh ecoa na hora", value: "≈70%" },
      { label: "não previstas — “principalmente navegação”", value: "≈30%" }
    ],
    note: "Fonte 4."
  },

  windows: [
    {
      title: "sessões-que-sobrevivem-à-conexão",
      body: `A aeronave troca de satélite, o portal reautentica, a conexão cai. O <code>tmux</code>
            mantém a shell rodando no servidor mesmo assim; a sessão é uma coisa na outra ponta, não uma
            coisa na sua mão. O Eternal Terminal leva a mesma ideia adiante e deixa a sessão sobreviver
            à própria conexão TCP, guardando em buffer e reexibindo o que você perdeu.
            <span style="color:var(--dim)">(Aviso honesto para redes filtradas: o ET precisa da porta
            dele — 2022 por padrão — <em>além</em> da 22 do SSH.)</span>`
    },
    {
      title: "mais-de-um-problema-por-vez",
      body: `Várias sessões numa grade, vários servidores salvos, cada um rodando algo que não precisa
            de supervisão entre uma decisão e outra.`
    },
    {
      title: "agentes-que-digitam-por-você",
      body: `Os agentes de programação rodam nos <em>seus</em> servidores, na latência de terra, onde o
            código está. Eles não pagam o imposto do satélite; você só paga quando responde a eles.`
    },
    {
      title: "push-quando-importa",
      bellLabel: " (sino)",
      body: `Os Alertas de agente disparam quando algo realmente precisa de um humano — assim o voo é
            gasto revisando e decidindo, não encarando um prompt à espera de um eco.`
    }
  ],

  cta: {
    cmdComment: "gratuito · código aberto · Apache-2.0",
    heading: "Seu próximo voo de longo curso são onze horas de tempo de servidor.",
    prose: [
      `O Mobile SSH é um cliente nativo de SSH, SFTP e terminal para Android, iPhone e iPad. Várias
          sessões, gerenciador de tmux embutido, Eternal Terminal e alertas push quando um agente
          precisa de você. Gratuito, sem conta, sem anúncios, código aberto.`
    ],
    tags: ["Sem anúncios", "Sem conta", "Dados no dispositivo", "Apache-2.0"],
    playButton: "Participar pelo Google Play",
    iosButton: "Entrar na beta do iOS",
    note: `O Android está em teste fechado — faça a adesão com a conta Google que você vai usar
      no teste e abra o link no navegador do celular; o teste fechado pode não aparecer dentro do app
      do Google Play.`
  },

  sources: {
    heading: "Fontes",
    items: [
      `Dados de voo da Ookla do 1º trimestre de 2025, analisados em <em>A First Look at Starlink In-Flight Performance</em> — arXiv:2508.09839, revisado por pares no IEEE Xplore doc 11353148. (44 ms vs 703–757 ms; mediana de 62 ms no Pacífico, faixa de 19–86 ms.)`,
      `<em>From GEO to LEO: First Look Into Starlink In-Flight Connectivity</em>, ACM IMC 2025 — Jang, Varvello, Raman, Zaki. 25 voos, 7 companhias aéreas. (&lt;40 ms em LEO vs 550 ms+ em GEO.)`,
      `Schmid et al., MUM '23, <em>Effects of Text Input Latency</em> — n=31, 20 ms vs 200 ms. (290,9 vs 302,7 ms/caractere, n.s.; correção 38,9 s → 46,5 s, p&lt;0,001, d=1,673; frustração 20,9 → 31,3, p=0,004.)`,
      `Winstein &amp; Balakrishnan, <em>Mosh: An Interactive Remote Shell for Mobile Clients</em>, USENIX ATC 2012. (503 ms → &lt;5 ms; 273 ms → &lt;5 ms; ~70% das teclas previstas; o restante não previsto é "principalmente navegação".)`,
      `Sala de imprensa da United Airlines, 22 de junho de 2026, <em>United Accelerates Starlink Wi-Fi Rollout with First Widebody Transatlantic Flight</em>. (Mais de 400 aeronaves; ~60 de fuselagem larga; frota completa de fuselagem larga em meados de 2027.)`,
      `Comunicado à imprensa da Virgin Atlantic, 12 de abril de 2026. (A350 concluídos; 787 no 2º semestre de 2026; A330neo em 2027.)`,
      `Documentação do Eternal Terminal — eternalterminal.dev/howitworks, github.com/MisterTea/EternalTerminal. (Buffer e reexibição; porta padrão 2022 além da do SSH.)`,
      `Inmarsat/Censuswide Passenger Experience Survey 2022, n=11.231 em 10 países. (Filmes baixados 41%, streaming 35%, trabalho 26% — intenção declarada, múltipla escolha, aplicada em 2022.)`
    ],
    quitHint: "— pressione q para sair"
  },

  colophon: [
    "Mobile SSH — SSH / SFTP / terminal gratuito e de código aberto para Android, iPhone e iPad.",
    "Apache-2.0. Sem anúncios, sem conta, sem nível Pro."
  ]
};
