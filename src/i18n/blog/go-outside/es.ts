import { defineGoOutside } from "./define";

export const es = defineGoOutside({
  metaTitle: "Sal a la calle. El agente sigue trabajando. | Mobile SSH",
  metaDescription:
    "Tu agente de programación se ejecuta en tu servidor, no en tu teléfono. Arráncalo bajo tmux, sal a la calle y deja que las alertas te encuentren cuando de verdad necesite a una persona.",
  back: "Blog",
  eyebrow: "Nota de campo",
  title: "Sal a la calle. El agente sigue trabajando.",
  standfirst:
    "El teléfono nunca fue lo que mantenía vivo a tu agente. Es el servidor. Cuando asumes eso, una tarde al aire libre no te cuesta nada: te vas, el trabajo continúa y lo único que te interrumpe es una pregunta que de verdad necesita respuesta.",
  author: "El consejo editorial de Mobile SSH",
  date: "7 de septiembre de 2026",
  readingTime: "7 min de lectura",

  board: {
    ariaLabel:
      "Un panel de condiciones que lee cuatro sesiones en marcha como si fueran rompientes de surf: tres avanzan sin problemas y una, llamada claude, espera a una persona.",
    heading: "CONDICIONES",
    timeLabel: "06:14 HST",
    breakHeading: "Rompiente",
    swellHeading: "Oleaje",
    stateHeading: "Estado",
    rows: [
      { name: "api-prod", swell: "2-3 ft", state: "subiendo", needsYou: false },
      { name: "nightly-tests", swell: "6-8 ft", state: "aguantando", needsYou: false },
      { name: "claude", swell: "10+ ft", state: "te necesita", needsYou: true },
      { name: "web-api", swell: "1-2 ft", state: "aguantando", needsYou: false },
    ],
    statusLine: "4 sesiones · 1 esperando · última comprobación 06:14",
    caption:
      "Cuatro sesiones en una máquina que es tuya. A tres de ellas les da igual dónde estés. La cuarta es la única razón para sacar el teléfono del bolsillo.",
  },

  body: [
    `El trabajo termina haya terminado o no la compilación. <em>Pau hana</em> —el final de la jornada laboral— llega según su propio horario, y la respuesta habitual es ignorarlo: dejar el portátil abierto sobre la mesa, vigilar a medias una barra de progreso y entregar la tarde a un proceso que no te necesita para nada.`,
    `Ese intercambio solo tiene sentido si el trabajo ocurre en la máquina que llevas encima. Casi nunca es así. El agente es un proceso en un servidor: edita archivos en el disco de ese servidor y ejecuta las pruebas de ese servidor. Tu teléfono es una ventana hacia él. Cierra la ventana y la habitación sigue ahí.`,
    `El servidor es la capa duradera`,
    `Arranca Claude Code o Codex dentro de <code>tmux</code>, <code>herdr</code> o Zellij y la sesión pertenece al servidor, no a tu conexión. Baja a una raya de cobertura, métete en un tubo de lava, guarda el teléfono dos horas: el agente sigue leyendo, editando y ejecutando pruebas, porque nunca estuvo atado a ti.`,
    `Este es todo el truco, y conviene ser preciso al contarlo, porque es fácil atribuírselo al componente equivocado. La app no es lo que mantiene el proceso en pie. Lo hace el multiplexor del otro extremo. El trabajo de Mobile SSH consiste en marcharse y volver sin romper nada.`,
    `No eres la fuente de alimentación. Deja de comportarte como si lo fueras.`,
    `Asómate, no hagas de niñera`,
    `Un agente que trabaja una hora necesita a una persona unos noventa segundos. El problema nunca ha sido la espera; es no saber <em>cuándo</em> llegan esos noventa segundos, que es lo que mantiene a la gente mirando una pantalla que no tiene nada que decir.`,
    `Para eso están las Agent Alerts. La detección es deliberadamente tonta y justo por eso es fiable: una campana del terminal, una notificación <code>OSC 9</code> u <code>OSC 777</code> y el hook de agente que instalas una vez en el servidor. No lee tu salida para adivinar intenciones, y no hay ningún control de sensibilidad que ajustar: informa de lo que el programa del otro extremo ha anunciado realmente.`,
    `Así que el teléfono se queda en el bolsillo hasta que existe una pregunta real. Entonces vibra, lees el aviso, tocas una respuesta y lo guardas. Esa es toda la interacción, y funciona desde una playa, el inicio de una ruta o la cola del granizado.`,
    `Lo que la isla no puede arreglar`,
    `Dos límites honestos, porque un artículo que solo enumera virtudes es un anuncio.`,
    `La diferencia entre plataformas es real y conviene tenerla en cuenta. En Android, un servicio en primer plano mantiene la conexión mientras la app está en segundo plano: la notificación permanente <em>es</em> la sesión. iOS no tiene ejecución en segundo plano en absoluto; se reconecta y vuelve a engancharse a tu multiplexor cuando regresas. En ambos casos, el agente del servidor nunca se detuvo, que es justo de lo que se trata. Solo se cerró la ventana.`,
    `Aloha no es excusa para ser descuidado`,
    `Marcharse bien es una pequeña disciplina. Nada que no dejarías corriendo sin supervisión durante dos horas debería arrancarse justo al salir por la puerta: a un agente a mitad de una migración no lo mejora la distancia. Dale una tarea con un punto de parada natural, pídele que inspeccione antes de editar y deja que el diff sea lo que revises al volver.`,
    `Y trata la notificación con el mismo cuidado que un busca. Si todo avisa, no avisa nada. El hook se dispara en los estados por los que merece la pena interrumpir a una persona; déjalo así y la vibración seguirá significando algo.`,
    `La compilación no necesita público. Sal a estar en otra parte.`,
  ],

  checklist: {
    heading: "Antes de salir por la puerta",
    steps: [
      {
        heading: "Arráncalo bajo un multiplexor",
        body: "Ejecuta el agente dentro de <code>tmux</code>, <code>herdr</code> o Zellij para que la sesión sobreviva a tu conexión en lugar de depender de ella.",
      },
      {
        heading: "Instala el hook de agente",
        body: "Una vez por servidor, desde la propia app. Es un pequeño script de shell que cualquier agente puede llamar: no es una integración de proveedor ni está atado a una sola CLI.",
      },
      {
        heading: "Comprueba que llega una alerta",
        body: "Provoca un aviso y confirma que el teléfono vibra antes de confiar en ello. Una alerta que nunca has visto funcionar no es un plan.",
      },
      {
        heading: "Dale un punto de parada",
        body: "Una tarea que termina en un punto sensato vale más que otra abierta, porque estás decidiendo no vigilarla.",
      },
    ],
    promptLabel: "Una tarea que puedes dejar sola",
    prompt:
      "Lee AGENTS.md y después arregla las pruebas del handler que fallan. Inspecciona el diff antes de editar, ejecuta las pruebas específicas y párate cuando pasen: no hagas commit.",
  },

  truth: {
    heading: "Qué sobrevive cuando te marchas",
    itemHeading: "Cuando el teléfono vuelve al bolsillo",
    resultHeading: "¿Sigue en marcha?",
    yes: "Sí",
    no: "No",
    rows: [
      { item: "El proceso del agente en el servidor", value: "Lo sostiene tmux, herdr o Zellij", survives: true },
      { item: "Archivos, diffs y salida de las pruebas", value: "En el disco del servidor", survives: true },
      { item: "Tu sitio en la sesión", value: "Se recupera al volver", survives: true },
      { item: "La conexión, en Android", value: "La mantiene un servicio en primer plano", survives: true },
      { item: "La conexión, en iOS", value: "Sin ejecución en segundo plano: se reconecta", survives: false },
      { item: "Una alerta sin cobertura para entregarla", value: "Llega cuando el teléfono vuelve a ser accesible", survives: false },
    ],
    note: "El agente sigue funcionando en todas las filas. Lo único que varía es si tu teléfono seguía manteniendo la ventana abierta.",
  },

  cta: {
    ariaLabel: "Obtener Mobile SSH",
    heading: "Deja el portátil. Llévate el terminal.",
    body: "Conéctate directamente a tu propia máquina, ejecuta el agente que prefieras dentro de tmux, herdr o Zellij y deja que las Agent Alerts te avisen cuando necesite a una persona, con SFTP, túneles y un terminal de verdad en la misma app.",
    tags: ["Cualquier agente", "SSH directo", "Agent Alerts", "Apache-2.0"],
    playButton: "Disponible en Google Play",
    iosButton: "Únete a la beta de iOS",
    note: `Android está en prueba cerrada: participa con la cuenta de Google con la que vayas a probar y abre después el
enlace de participación en el navegador de tu móvil. ¿Ya participas? Ve directamente a la <a href="{playUrl}" rel="noopener">ficha de Play</a>.`,
  },
});
