import { defineGoOutside } from "./define";

export const pt = defineGoOutside({
  metaTitle: "Saia de casa. O agente continua trabalhando. | Mobile SSH",
  metaDescription:
    "Seu agente de programação roda no seu servidor, não no seu telefone. Inicie-o sob o tmux, vá embora e deixe que os alertas encontrem você quando realmente for preciso uma pessoa.",
  back: "Blog",
  eyebrow: "Nota de campo",
  title: "Saia de casa. O agente continua trabalhando.",
  standfirst:
    "O telefone nunca foi o que mantinha seu agente vivo. O servidor é. Depois que você acredita nisso, uma tarde ao ar livre não custa nada — você sai, o trabalho segue e a única coisa que interrompe você é uma pergunta que realmente precisa de resposta.",
  author: "Conselho editorial do Mobile SSH",
  date: "7 de setembro de 2026",
  readingTime: "7 min de leitura",

  board: {
    ariaLabel:
      "Um quadro de condições que lê quatro sessões em execução como picos de surfe: três trabalhando com constância e uma, chamada claude, esperando por uma pessoa.",
    heading: "CONDIÇÕES",
    timeLabel: "06:14 HST",
    breakHeading: "Pico",
    swellHeading: "Ondulação",
    stateHeading: "Estado",
    rows: [
      { name: "api-prod", swell: "2-3 ft", state: "subindo", needsYou: false },
      { name: "nightly-tests", swell: "6-8 ft", state: "estável", needsYou: false },
      { name: "claude", swell: "10+ ft", state: "precisa de você", needsYou: true },
      { name: "web-api", swell: "1-2 ft", state: "estável", needsYou: false }
    ],
    statusLine: "4 sessões · 1 esperando · última verificação 06:14",
    caption:
      "Quatro sessões em uma máquina que é sua. Três delas não se importam com onde você está. A quarta é o único motivo para tirar o telefone do bolso."
  },

  body: [
    `O expediente acaba, tendo o build acabado ou não. <em>Pau hana</em> — o fim do dia de trabalho — chega no horário dele, e a resposta de costume é ignorá-lo: deixar o laptop aberto na mesa, acompanhar pela metade uma barra de progresso e entregar a noite a um processo que não precisa de você em momento algum.`,
    `Essa troca só faz sentido se o trabalho estiver acontecendo na máquina que você carrega. Quase nunca está. O agente é um processo em um servidor, editando arquivos no disco desse servidor, executando os testes desse servidor. Seu telefone é uma janela para tudo isso. Feche a janela e a sala continua lá.`,
    `O servidor é a camada durável`,
    `Inicie o Claude Code ou o Codex dentro do <code>tmux</code>, do <code>herdr</code> ou do Zellij e a sessão passa a pertencer ao servidor, não à sua conexão. Caia para uma barra de sinal, entre em um tubo de lava, guarde o telefone por duas horas — o agente continua lendo, editando e rodando testes, porque nada nele esteve preso a você.`,
    `Esse é o truque inteiro, e vale ser preciso a respeito dele, porque é fácil dar o crédito ao componente errado. Não é o app que sustenta o processo. É o multiplexador do outro lado. O papel do Mobile SSH é sair e voltar de forma limpa.`,
    `Você não é a fonte de alimentação. Pare de agir como se fosse.`,
    `Dê uma olhada, não fique de babá`,
    `Um agente que roda por uma hora precisa de uma pessoa por cerca de noventa segundos. O problema nunca foi a espera; é não saber <em>quando</em> esses noventa segundos chegam, e é isso que mantém as pessoas encarando uma tela que não tem nada a dizer.`,
    `Os Agent Alerts respondem a isso. A detecção é deliberadamente burra e, por isso, confiável: um bipe do terminal, uma notificação <code>OSC 9</code> ou <code>OSC 777</code> e o hook de agente que você instala no servidor uma única vez. Ela não lê a sua saída para adivinhar intenção, e não existe um botão de sensibilidade para ajustar — ela informa o que o programa do outro lado de fato anunciou.`,
    `Então o telefone fica no bolso até existir uma pergunta de verdade. Aí ele vibra, você lê o prompt, toca uma resposta e guarda o aparelho. É essa a interação inteira, e ela funciona da praia, do início de uma trilha ou da fila da raspadinha.`,
    `O que a ilha não resolve`,
    `Dois limites honestos, porque um texto que só lista virtudes é anúncio.`,
    `A diferença entre plataformas é real e vale planejar em torno dela. No Android, um serviço em primeiro plano mantém a conexão enquanto o app está em segundo plano — a notificação permanente <em>é</em> a sessão. O iOS não tem execução em segundo plano nenhuma; ele reconecta e volta a se anexar ao seu multiplexador quando você retorna. De um jeito ou de outro, o agente no servidor nunca parou, e esse é o ponto. Só a janela se fechou.`,
    `Aloha não é desculpa para descuido`,
    `Sair bem é uma pequena disciplina. Nada que você não deixaria rodando sozinho por duas horas deve ser iniciado na hora em que você cruza a porta — um agente no meio de uma migração não melhora com a distância. Dê a ele uma tarefa com um ponto de parada natural, peça que inspecione antes de editar e deixe que o diff seja o que você revisa na volta.`,
    `E trate a notificação com o mesmo cuidado que teria com um pager. Se tudo alerta, nada alerta. O hook dispara nos estados que valem interromper uma pessoa; deixe assim e a vibração continua significando alguma coisa.`,
    `O build não precisa de plateia. Vá e esteja em algum lugar.`
  ],

  checklist: {
    heading: "Antes de sair",
    steps: [
      {
        heading: "Inicie sob um multiplexador",
        body: "Rode o agente dentro do <code>tmux</code>, do <code>herdr</code> ou do Zellij, para que a sessão sobreviva à sua conexão em vez de depender dela."
      },
      {
        heading: "Instale o hook de agente",
        body: "Uma vez por servidor, de dentro do app. É um pequeno script de shell que qualquer agente pode chamar — não é integração de fornecedor nem está preso a uma CLI."
      },
      {
        heading: "Comprove que um alerta chega",
        body: "Dispare um prompt e confirme que o telefone vibra antes de depender disso. Um alerta que você nunca viu funcionar não é um plano."
      },
      {
        heading: "Dê um ponto de parada",
        body: "Uma tarefa que termina em algum lugar sensato vale mais que uma tarefa aberta, porque você está escolhendo não ficar olhando."
      }
    ],
    promptLabel: "Uma tarefa que dá para deixar sozinha",
    prompt:
      "Leia o AGENTS.md e conserte os testes do handler que estão falhando. Inspecione o diff antes de editar, execute os testes focados e pare quando eles passarem — não faça commit."
  },

  truth: {
    heading: "O que sobrevive quando você vai embora",
    itemHeading: "Quando o telefone volta para o bolso",
    resultHeading: "Continua?",
    yes: "Sim",
    no: "Não",
    rows: [
      { item: "O processo do agente no servidor", value: "Sob o tmux, o herdr ou o Zellij", survives: true },
      { item: "Arquivos, diffs e saída dos testes", value: "No disco do servidor", survives: true },
      { item: "Seu lugar na sessão", value: "Reanexado quando você volta", survives: true },
      { item: "A conexão, no Android", value: "Mantida por um serviço em primeiro plano", survives: true },
      { item: "A conexão, no iOS", value: "Sem execução em segundo plano — ele reconecta", survives: false },
      { item: "Um alerta sem sinal para entregá-lo", value: "Chega quando o telefone volta a ficar acessível", survives: false }
    ],
    note: "O agente continua rodando em todas as linhas. O que varia é apenas se o seu telefone ainda estava com a janela aberta."
  },

  cta: {
    ariaLabel: "Obter Mobile SSH",
    heading: "Deixe o laptop. Leve o terminal.",
    body: "Conecte-se direto à sua própria máquina, execute o agente que preferir dentro do tmux, do herdr ou do Zellij e deixe os Agent Alerts avisarem quando for preciso uma pessoa — com SFTP, túneis e um terminal de verdade no mesmo app.",
    tags: ["Qualquer agente", "SSH direto", "Agent Alerts", "Apache-2.0"],
    playButton: "Disponível no Google Play",
    iosButton: "Entrar no beta do iOS",
    note: `O Android está em teste fechado: participe com a conta Google que usará nos testes e abra o
link de participação no navegador móvel. Já participa? Vá direto para a <a href="{playUrl}" rel="noopener">página na Play</a>.`
  }
});
