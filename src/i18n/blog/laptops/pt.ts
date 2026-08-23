import type { LaptopsPost } from "./types";

// Portuguese translation of /blog/laptops-are-dead/.
// Mirrors the English object in ./en.ts key for key and block for block.
// Inline markup (<strong>, <em>, <code>, <a>, &nbsp;, curly quotes) is kept
// verbatim; only the words between the tags are translated.

export const pt: LaptopsPost = {
  metaTitle: "Os laptops morreram, mas o SSH e o TCP/IP sobreviveram | Mobile SSH",
  metaDescription:
    "Um elogio fúnebre afetuoso ao laptop (1981–2026). O TCP/IP foi projetado em 1974 e o SSH escrito em 1995; ambos sobreviveram ao hardware e seguiram no aparelho que já está na sua mão. Por que usar o Mobile SSH — o cliente de SSH, SFTP e terminal para Android, iPhone e iPad. Gratuito, nativo e de código aberto.",

  back: "Blog",
  eyebrow: "Opinião",
  titleLead: "Os laptops morreram.",
  titleSoft: "Viva o seu bolso.",
  standfirst: `<b>Mas o SSH e o TCP/IP sobreviveram.</b> Um elogio fúnebre afetuoso a um amigo pesado e de barriga
morna — e a defesa do terminal que se mudou, sem alarde, para o aparelho que já está na sua mão.`,
  author: "O Conselho Editorial do Mobile SSH",
  date: "27 de julho de 2026",
  readingTime: "7 min de leitura",

  leadFigure: {
    terminal: {
      title: "ssh · prod-01 · tmux",
      prompt: "you@prod-01",
      path: "~/app",
      command: `claude "conserte o teste que está falhando"`,
      reading: "lendo src/api/auth.ts",
      patching: "corrigindo a renovação do token …",
      result: "3 arquivos alterados, testes no verde",
      needsInput: "o agente precisa de você",
      push: "git push origin main"
    },
    toast: {
      title: "Alertas de agente",
      host: "prod-01",
      body: "O Claude Code está esperando a sua revisão"
    },
    caption:
      "Prova A: uma sessão SSH de verdade, um agente de programação e um Alerta de agente — rodando naquilo que está no seu bolso, sem nenhum carregador à vista."
  },

  body: [
    {
      kind: "lead",
      html: `O Laptop — companheiro querido de desenvolvedores, escritores e viajantes do mundo inteiro — faleceu
em paz nesta semana, aos 45 anos, num café, com 6% de bateria e nenhum carregador à vista. Estava
cercado, como sempre, pelas abas que prometera ler.`
    },
    {
      kind: "p",
      html: `Não houve drama. Ele apenas escureceu a tela, deu um último suspiro pela ventoinha e perguntou —
pela última vez, no pior momento possível — se aquela não seria uma boa hora para instalar uma
atualização.`
    },
    {
      kind: "pull",
      html: `“Ele exigia reiniciar para atualizar o firmware exatamente no instante em que você finalmente tinha uma ideia. Sempre exigiu.”`
    },
    { kind: "h2", html: `Uma vida pesada, carregada com fidelidade` },
    {
      kind: "p",
      html: `Nascido em 1981 do Osborne&nbsp;1 — onze quilos de ambição transportável, sem bateria, tela de cinco
polegadas —, o Laptop passou quarenta e cinco anos emagrecendo sem nunca chegar a ser leve. Morreu com
cerca de um quilo e meio, o que seu progenitor teria considerado bruxaria. Lembramos do teclado. Da
barriga morna. Das ventoinhas que anunciavam cada ato de pensamento. Da mochila sempre um pouco cheia
demais, da fonte do tamanho de um romance de bolso e da busca — eterna, esperançosa — por uma tomada
livre perto da janela.`
    },
    {
      kind: "p",
      html: `Ele exigia muito de nós, e ainda assim o carregamos, da mesa ao portão de embarque, até a poltrona 24B,
porque por muito tempo foi a única coisa capaz de abrigar um terminal de verdade. Isso já não é verdade.`
    },
    { kind: "h2", html: `Sobrevivem a ele os mais velhos` },
    {
      kind: "p",
      html: `O Laptop não deixa filhos. Os sucessores que lhe prometeram — o tablet, o Chromebook, aquela coisa de
teclado destacável — chegaram, sentaram-se no fundo da sala e acabaram se revelando laptops com menos
portas. Sobrevivem a ele, em vez disso,
dois parentes que já trabalhavam quando ele nasceu e que estavam trabalhando nesta manhã.`
    },
    {
      kind: "p",
      html: `O <strong>TCP/IP</strong> é o mais velho. Vint Cerf, Bob Kahn e um longo elenco de colaboradores
publicaram o projeto em maio de 1974; a RFC&nbsp;675 o detalhou em dezembro daquele ano e, de quebra,
cunhou a palavra “internet”. A ARPANET começou a migrar para ele em 1º de janeiro de 1983 e concluiu a
travessia em junho — quando o Laptop ainda era um bebê engatinhando com unidade de disquete.`
    },
    {
      kind: "p",
      html: `O <strong>SSH</strong> é o sobrinho, trinta e um anos, o mais novo entre os que carregam o caixão. Tatu
Ylönen o escreveu na Helsinki University of Technology na primavera de 1995, depois que um sniffer na
rede da universidade coletou em silêncio milhares de senhas. Ele lançou o <code>ssh-1.0.0</code> em
julho e escolheu pessoalmente a porta 22: o único número livre entre o FTP na 21 e o telnet na 23, na
teoria de que ficar entre os dois protocolos que ele pretendia substituir “podia ser uma daquelas
coisinhas capazes de dar certa aura de credibilidade”. Ele pediu à IANA na segunda-feira. Disseram sim
na terça. Ele publicou na quarta.`
    },
    { kind: "ledger" },
    { kind: "h2", html: `O que os protocolos nunca pressupuseram` },
    {
      kind: "p",
      html: `A longevidade deles não tem mistério. Duraram porque pressupunham quase nada. O TCP pressupõe pacotes,
alguns dos quais vão se perder, chegar duplicados ou fora de ordem. O SSH pressupõe um fluxo de bytes
confiável e um par de chaves. Ausentes das duas listas: tamanho de tela, layout de teclado, chassi,
dobradiça, tomada e um fabricante que ainda exista.`
    },
    {
      kind: "p",
      html: `O SSH nem sequer pressupõe o tamanho do seu terminal. Ele pergunta — e aceita uma resposta diferente
mais tarde. Foi uma gentileza inventada para quem arrastava o canto de uma janela no desktop. É também
o motivo pelo qual girar o celular não encerra uma sessão.`
    },
    {
      kind: "pull",
      html: `“Hardware é um corpo. Protocolo é um hábito. Só um dos dois pode cair escada abaixo.”`
    },
    {
      kind: "p",
      html: `Tudo o que estava preso a um chassi partiu primeiro, e nada disso morreu de má engenharia. A unidade de
disquete, o slot PC Card, o conector de dock — cada um era bem-feito para um conjunto de condições, e as
condições é que eram a parte mortal. Um protocolo não está preso nem ao próprio dono. Quando a licença
das versões seguintes de Ylönen ficou mais restritiva, o projeto OpenBSD voltou ao
<code>ssh 1.2.12</code>, a última versão livre o bastante para reaproveitar, e lançou o OpenSSH com o
OpenBSD&nbsp;2.6 em 1º de dezembro de 1999. O protocolo seguiu adiante do mesmo jeito. Ele nunca havia
pertencido a ninguém em particular, e é exatamente por isso que continua aqui.`
    },
    { kind: "h2", html: `O único pressuposto que precisou de remendo` },
    {
      kind: "p",
      html: `A honestidade exige uma correção. O TCP fez, sim, um pressuposto, e ele estava errado: presumiu que a
máquina fica parada. Uma conexão é identificada por quatro números — dois endereços, duas portas —, o
que era uma forma perfeitamente sensata de nomear uma coisa em 1981, quando a coisa estava parafusada a
uma sala de piso elevado. Saia de um café com o celular na mão e um desses quatro números vira,
discretamente, uma mentira.`
    },
    {
      kind: "p",
      html: `Não houve um segundo velório. O protocolo foi mantido e o pressuposto foi contornado por remendos ao
redor dele. O trabalho migrou para a outra ponta, fora do alcance de um cliente que atravessa uma porta:
<code>screen</code>, depois <code>tmux</code>, mantendo a shell aberta enquanto o terminal vai e volta. O
Eternal Terminal foi além e passou a nomear a sessão em vez do endereço, de modo que a sessão sobrevive
à troca do endereço debaixo dela.`
    },
    {
      kind: "pull",
      html: `“Seus servidores nunca foram leais ao laptop. Eles eram leais à porta.”`
    },
    {
      kind: "p",
      html: `Nada disso foi inventado para celulares. Foi herdado por eles. Um cliente que carrega um transporte
Eternal Terminal, um gerenciador de tmux, keepalives com reconexão em backoff exponencial e vários
endereços por servidor salvo pode sair de um prédio no meio de um comando e retomar o fio da meada na
calçada. À outra ponta se informa a versão do seu cliente e o tamanho do seu terminal. Nunca se informa
se existe uma dobradiça.`
    },
    { kind: "h2", html: `O trabalho se mudou, sem alarde, para um bolso` },
    {
      kind: "p",
      html: `Nos últimos anos, o Laptop andava ansioso quanto à própria relevância. E tinha seus motivos. O trabalho
que um dia reivindicou como seu — um terminal de verdade, transferência de arquivos de verdade, chaves
de verdade, túneis de verdade — havia escorregado silenciosamente para o aparelho que já está na sua mão.`
    },
    {
      kind: "p",
      html: `Esse aparelho roda o <strong>Mobile SSH</strong>: um cliente nativo de SSH, SFTP e terminal para Android,
iPhone e iPad. Nada de shell de brinquedo. Nada de acesso remoto à área de trabalho fingindo ser um
terminal. Um terminal <span class="nowrap">xterm-256color</span> completo — o de verdade — que cabe no
espaço que o carregador do Laptop ocupava.`
    },
    {
      kind: "pull",
      html: `“O trabalho que ele um dia chamou de seu mudou-se para um bolso — e nunca pediu uma tomada.”`
    },
    { kind: "h2", html: `Sobrevivem a ele: o seu celular — e o Mobile SSH` },
    {
      kind: "p",
      html: `O espólio, item por item. Em vez de coroas de flores, a família pede apenas que você leia o elogio abaixo
e repare que cada linha dele é software de verdade, que dá para instalar hoje.`
    },
    { kind: "estate" },
    {
      kind: "pull",
      html: `“‘Os laptops morreram’ é um elogio fúnebre, não um laudo do legista. Laptops seguem bem-vindos ao velório.”`
    },
    {
      kind: "p",
      html: `Dizemos isso com carinho. O Laptop serviu com honra e é bem-vindo ao velório — aberto sobre a mesinha de
canto, ventoinha girando mansa, finalmente ligado na tomada. Mas o trabalho do dia fez uma mala mais leve
e saiu do prédio. Agora ele cabe num bolso. E atende no primeiro toque.`
    },
    {
      kind: "p",
      html: `O SSH e o TCP/IP não mandaram flores. Estavam trabalhando.`
    }
  ],

  ledger: {
    entries: [
      {
        year: "1974",
        event: "Cerf, Kahn e colegas publicam o projeto que vira o TCP/IP",
        status: "ainda em operação",
        on: true
      },
      {
        year: "1978",
        event: "A DEC lança o VT100, seu primeiro terminal compatível com ANSI",
        status: "sequências ainda em uso",
        on: true
      },
      {
        year: "1981",
        event: "O Osborne&nbsp;1 chega às lojas: 11&nbsp;kg, US$&nbsp;1.795, só na tomada",
        status: "descontinuado em 1983",
        on: false
      },
      {
        year: "1983",
        event: "A ARPANET conclui a travessia do NCP para o TCP/IP",
        status: "ainda em operação",
        on: true
      },
      {
        year: "1995",
        event: "O SSH é escrito em Helsinque; a IANA concede a porta 22 em 11 de julho",
        status: "ainda em operação",
        on: true
      },
      {
        year: "2026",
        event: "O Laptop, aos 45 anos, num café, com 6% e sem carregador",
        status: "sobrevivem a ele os de cima",
        on: false
      }
    ],
    caption: "Ordem de precedência, conforme lida na cerimônia. O mais velho dos enlutados tem cinquenta e dois anos."
  },

  estate: [
    {
      heading: "Um terminal de verdade, no seu bolso",
      body: "Emulação <code>xterm-256color</code> completa, até oito sessões simultâneas em uma grade redimensionável, um gerenciador de sessões tmux embutido e o Eternal Terminal para conexões que sobrevivem a quedas de rede, suspensão e mudanças de IP."
    },
    {
      heading: "Arquivos e túneis, já inclusos",
      body: "Um navegador SFTP de painel duplo para mover arquivos entre o celular e o servidor, com redirecionamentos locais de porta e túneis salvos junto de cada host — no ar automaticamente assim que você conecta."
    },
    {
      heading: "Chaves geradas no próprio aparelho",
      body: "Geração de chaves SSH no dispositivo — Ed25519 e ECDSA — com autenticação por senha ou por chave privada. Nada sai do celular."
    },
    {
      heading: "Agentes de programação, com Alertas de agente",
      body: "Rode o Claude Code, o Codex e outros agentes nos <em>seus próprios</em> servidores, direto do celular. Os Alertas de agente disparam uma notificação push — com som e vibração — no instante em que um agente precisa de você, para que você possa se afastar sem perder o fio."
    },
    {
      heading: "Vestido para a ocasião",
      body: "Fontes e esquemas de cores configuráveis, glifos powerline e de ícones da Nerd Font e um sistema de plugins para ir ainda mais longe — ajuste o terminal até que ele pareça seu."
    },
    {
      heading: "Gratuito de verdade, sem letras miúdas",
      body: "Sem anúncios. Sem paywall Pro. Sem exigir conta. Seus dados ficam no aparelho, e tudo é de código aberto sob a licença Apache-2.0."
    }
  ],

  cta: {
    ariaLabel: "Baixar o Mobile SSH",
    heading: "Em vez de flores, feche algumas abas.",
    body: "Instale o Mobile SSH, dê ao seu laptop o descanso que ele merece e leve um terminal de verdade no bolso — gratuito, nativo e de código aberto.",
    tags: ["Sem anúncios", "Sem conta", "Dados no dispositivo", "Apache-2.0"],
    playButton: "Participar pelo Google Play",
    iosButton: "Entrar na beta do iOS",
    note: `O Android está em teste fechado: faça a adesão com a conta Google que você vai usar no teste e abra
o link de adesão no navegador do celular — o teste fechado pode não aparecer dentro do app do
Google Play. Já aderiu? Vá direto para a <a href="{playUrl}" rel="noopener">página no Play</a>.`
  }
};
