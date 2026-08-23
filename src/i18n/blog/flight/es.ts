import type { FlightPost } from "./types";

// Spanish translation of "Eleven hours over the Atlantic".
//
// The split-flap board keeps its English tiles in every locale, so
// masthead.headlineTranslated carries the Spanish headline that readers
// actually see under the board. Figures are the fact-checked ones from the
// English source: only the thousands separator is localised (35,786 → 35 786),
// because a comma reads as a decimal point in Spanish.

export const es: FlightPost = {
  meta: {
    title: "Once horas sobre el Atlántico | Mobile SSH",
    description:
      "A 35 786 km, solo la luz cuesta 477 ms de ida y vuelta. Qué se rompe de verdad cuando trabajas desde un avión, por qué no es lo que crees y cómo pasar un vuelo transoceánico entregando trabajo en vez de repetir película. De Mobile SSH — el cliente de SSH, SFTP y terminal para Android, iPhone y iPad."
  },

  backLabel: "Blog",

  masthead: {
    eyebrow: "Informe de campo",
    boardTitle: "Salidas",
    legend: {
      time: "Hora",
      flight: "Vuelo",
      destination: "Destino",
      remarks: "Observaciones"
    },
    headline: "Once horas sobre el Atlántico",
    headlineTranslated: "Once horas sobre el Atlántico",
    deck: `El asiento 24B ve una película que ya ha visto tres veces. El asiento 24C revisa
      <span class="hl">cuatro servidores</span> con el mismo Wi-Fi. La diferencia no está en la conexión —
      está en lo que cada uno ha puesto al otro extremo.`,
    byline: [
      { key: "autor:", value: "La redacción de Mobile SSH" },
      { key: "fecha:", value: "10 de agosto de 2026" },
      { key: "lectura:", value: "8 min" },
      { key: "enlace:", value: "703 ms, GEO" }
    ]
  },

  sections: {
    twoSeats: {
      heading: "Dos asientos, un satélite",
      intro: [
        `Once horas, de Nueva York a algún punto al este. Las luces de la cabina se vuelven ámbar. El
          asiento 24B abre la pantalla del respaldo, recorre un catálogo de cuatrocientos títulos y elige
          una película que ya ha visto tres veces. Esto no es una crítica. Es lo más razonable que se
          puede hacer con once horas dentro de un tubo de aluminio presurizado, y casi todos lo hemos
          hecho.`,
        `El asiento 24C saca un teléfono.`
      ],
      outro: [
        `Los dos asientos están en el mismo Wi-Fi. Los dos están a la misma distancia del suelo. Cuando
          las ruedas toquen pista, uno habrá visto una película que ya se sabía de memoria y el otro habrá
          fusionado tres ramas, dejado en verde una batería de tests que fallaba y reiniciado un proceso
          atascado en una máquina a seis mil kilómetros.`,
        `Lo interesante no es que esto sea posible. Es <em>por qué</em> es posible — y por qué el método
          obvio, ese que casi todo el mundo prueba una vez y abandona en algún punto sobre Groenlandia, no
          funciona en absoluto.`
      ]
    },

    aboveYou: {
      heading: "Qué hay en realidad ahí arriba",
      intro: [
        `Hay dos cosas radicalmente distintas que una aerolínea puede querer decir con «Wi-Fi», y de cuál
          de las dos lleve atornillada tu fuselaje depende todo lo que viene después.`,
        `El montaje antiguo es un satélite geoestacionario, aparcado a <strong>35 786 km</strong>. Esa
          altitud no es una decisión de diseño que alguien tomara pensando en ti; es la distancia exacta a
          la que una órbita dura veinticuatro horas, de modo que el satélite parece quedarse quieto. La
          consecuencia es una aritmética con la que ningún presupuesto de ingeniería puede discutir: subir
          y bajar, dos veces, son <strong>477 ms de ida y vuelta solo para la luz</strong>, antes de que
          intervenga un solo router.`,
        `El montaje nuevo es una constelación en órbita terrestre baja a unos <strong>550 km</strong> —
          unas sesenta y cinco veces más cerca, y <strong>7.3 ms</strong> de propagación de ida y vuelta.`
      ],
      afterDiagram: [
        `Las mediciones desde el aire coinciden con la física. El análisis de los tests de velocidad en
          vuelo de Ookla del primer trimestre de 2025 encontró una <strong>mediana de ida y vuelta de
          44 ms en Starlink frente a 703–757 ms en Hughes, Intelsat y Viasat</strong> — una brecha de unas
          dieciséis veces. Otro equipo, instrumentando dispositivos reales en <strong>25 vuelos de 7
          aerolíneas</strong> para el ACM IMC 2025, midió esa misma forma de manera independiente: por
          debajo de 40 ms en LEO, por encima de 550 ms en GEO.`
      ],
      afterChart: [
        `Para un cruce oceánico de largo radio, la cifra honesta es algo peor que el titular. La misma
          investigación midió una <strong>mediana de 62 ms sobre el Pacífico, con un rango de
          19–86 ms</strong>. Esa es la cifra que conviene llevar en la cabeza. Sigue siendo excelente.
          Pero no es 44.`
      ]
    },

    rollout: {
      heading: "El jarro de agua fría",
      intro: [
        `Aquí es donde se supone que un artículo en la web de un producto te cuenta que el futuro ya ha
          llegado.`,
        `No ha llegado de forma uniforme, y el avión al que ha llegado el último es el <em>tuyo</em>.`,
        `Los aviones de pasillo único se reforman primero — son muchos, rotan rápido y vuelan trayectos
          domésticos cortos en los que nadie intenta hacer once horas de nada. Los de doble pasillo, los
          que cruzan océanos de verdad, son los últimos de la cola. A mediados de 2026, United tenía
          <strong>más de 400 aviones con Starlink</strong> y esperaba acercarse al millar a final de año
          — pero solo unos <strong>sesenta eran de doble pasillo</strong>, su primer vuelo transatlántico
          con Starlink en un avión de doble pasillo (Newark–Heathrow) no operó hasta
          <strong>junio de 2026</strong> y la flota completa de doble pasillo no está prevista hasta el
          <strong>verano de 2027</strong>. Virgin Atlantic había terminado sus <strong>doce A350</strong>
          — alrededor del <strong>28&nbsp;% de su flota de doble pasillo</strong> — con los 787
          programados a lo largo del segundo semestre de 2026 y los A330neo ya entrado 2027.`
      ],
      afterFigure: [
        `Así que, si estás leyendo esto en un vuelo intercontinental en 2026, las probabilidades siguen en
          tu contra. Lo más seguro es que vayas en el enlace de 700 ms, no en el de 62.`,
        `Lo cual hace que el resto de este artículo sea más útil, no menos.`
      ]
    },

    filmVsShell: {
      heading: "Por qué la película funciona y el terminal no",
      cmdComment: "una sesión entera para mover un carácter",
      prose: [
        `Una película y una shell fallan en direcciones opuestas, y el Wi-Fi de a bordo es justo la red
          equivocada para una de las dos.`,
        `Una película es un problema de <em>ancho de banda</em> al que la latencia le da igual. Va al
          búfer. Si el primer fotograma llega 700 ms tarde, nadie lo nota, porque nada de la experiencia
          depende de que la película te responda a ti. Le das al play, esperas, miras. El viaje de ida y
          vuelta ocurre una sola vez.`,
        `Una shell interactiva es la imagen especular. Casi no necesita ancho de banda — una sesión de
          terminal se mide en kilobits, no en megabits — pero paga el viaje de ida y vuelta <strong>en
          cada pulsación de tecla cuyo eco esperas ver</strong>. A 700 ms, eso no es una conexión lenta.
          Eso es una conversación con dos tercios de segundo de pausa después de cada carácter.`,
        `Esto es lo que la gente entiende mal. Ven «50 Mbps» en el portal de a bordo, concluyen que la
          conexión está bien, abren un terminal y descubren que «bien» no tiene nada que ver con el
          asunto. Aquí la moneda no es el ancho de banda. <strong>Son los viajes de ida y vuelta.</strong>`
      ]
    },

    whatBreaks: {
      heading: "Qué se rompe de verdad (no es escribir)",
      intro: [
        `El fallo es más concreto que «va lento», y la investigación es inusualmente clara sobre dónde
          duele.`,
        `En un estudio controlado con 31 participantes que comparaba 20 ms frente a 200 ms de latencia de
          entrada de extremo a extremo, <strong>escribir texto seguido apenas se movió</strong>: 290.9 ms
          por carácter frente a 302.7, una diferencia que los autores no pudieron calificar de
          significativa. Las tasas de error fueron idénticas.`
      ],
      afterTable: [
        `Pero la tarea de <em>corrección</em> — recolocar el cursor con las flechas y arreglar el texto, lo
          que de verdad haces en un editor — pasó de <strong>38.9 segundos a 46.5 segundos, en torno a un
          20&nbsp;% más lenta, con un tamaño del efecto muy grande</strong> (p &lt; 0.001, d = 1.673). Los
          autores explican el mecanismo sin rodeos: al navegar tienes que esperar a la pantalla una y otra
          vez, porque dónde ha aterrizado el cursor determina lo que haces a continuación.`,
        `La carga subjetiva empeoró incluso allí donde no lo hizo la velocidad. En la tarea de escritura,
          donde el rendimiento no cambió estadísticamente, la <strong>frustración declarada subió
          igualmente de 20.9 a 31.3</strong>.`,
        `Traslada eso a un terminal y tienes el nombre exacto de lo que se desmorona a diez mil metros: no
          es teclear un comando. Es moverse por <code>vim</code>, el autocompletado con el tabulador,
          desplazarse por <code>less</code> y el ritmo de tanteo de un REPL. Cada una de esas cosas es un
          bucle en el que lo siguiente que haces depende de lo que acaba de volver.`
      ]
    },

    moveTheWork: {
      heading: "Mueve el trabajo, no las pulsaciones",
      intro: [
        `Una vez aceptas que el recurso escaso son los viajes de ida y vuelta, la solución deja de ser
          «consigue un avión más rápido» y pasa a ser una cuestión de arquitectura: <strong>haz menos
          viajes y que cada uno lleve más carga.</strong>`,
        `Hay una herramienta muy conocida que ataca esto de frente. Mosh predice lo que van a hacer tus
          pulsaciones y las muestra en local antes de que el servidor lo confirme. El efecto medido es
          espectacular: en un enlace con alrededor de medio segundo de ida y vuelta, la mediana de
          respuesta por pulsación bajó de <strong>503 ms a menos de 5 ms</strong>. En una ruta
          transoceánica del MIT a Singapur, de <strong>273 ms a menos de 5 ms</strong>.`,
        `Pero lee la letra pequeña, porque en ella está todo el asunto. Mosh predice alrededor del
          <strong>70&nbsp;% de las pulsaciones</strong>. Ese 30&nbsp;% restante que no consigue predecir
          es, en palabras de los propios autores, <em>principalmente navegación</em> — y para esas su
          perfil de latencia vuelve a parecerse al de SSH a secas. Es decir: la única interacción que la
          latencia alta castiga con más dureza es precisamente la que el eco local no puede rescatar.`
      ],
      chartHeading: "predicho frente a no predicho",
      afterChart: [
        `Así que la predicción ayuda, pero no te salva. Lo que de verdad te salva es negarte a estar en el
          bucle tan a menudo.`,
        `<strong>Deja de teclear dentro de la latencia. Pon el trabajo largo al otro extremo y ve
          asomándote a ver cómo va.</strong> Una compilación, una batería de tests, una migración, un
          agente de programación — ninguno necesita que estés presente para el viaje de ida y vuelta. Te
          necesitan al principio y en la decisión. Todo lo que hay en medio es problema de la máquina, y
          la máquina está en tierra con buena conexión.`,
        `Por eso también el <em>paralelismo</em> le gana a la <em>interactividad</em> en altura. No puedes
          escribir rápido a través de 700 ms. Pero puedes perfectamente supervisar cuatro servidores a la
          vez, porque la supervisión no está limitada por la latencia — está limitada por la atención, y
          tienes once horas de atención y nada más en lo que gastarla.`
      ]
    },

    seat24c: {
      heading: "Qué está haciendo en realidad el asiento 24C",
      lead: `En concreto, en un teléfono, con un enlace malo:`,
      outro: [
        `Nada de esto se inventó para los aviones. Es sencillamente el aspecto que ha tenido siempre el
          trabajo remoto sobre un enlace hostil, y un avión no es más que un enlace hostil inusualmente
          honesto.`
      ]
    },

    caveat: {
      heading: "Una advertencia honesta",
      prose: [
        `Dos cosas que no hemos podido verificar y que no vamos a fingir que sabemos:`,
        `<strong>Si la red de tu aerolínea dejará salir SSH siquiera.</strong> No encontramos pruebas
          públicas fiables sobre bloqueo de puertos, políticas de VPN o tiempos de espera por inactividad
          entre los proveedores de Wi-Fi de las aerolíneas — y sí un montón de afirmaciones rotundas de
          foro que no sobreviven a una comprobación. Varía según la compañía, el proveedor y el avión.
          Pruébalo en un vuelo corto antes de planificar uno largo contando con ello.`,
        `<strong>En qué gasta el pasaje su tiempo realmente.</strong> Las estadísticas de entretenimiento
          a bordo más citadas acaban remitiendo a tarifarios publicitarios sin metodología alguna, así que
          las descartamos. La mejor evidencia de encuesta que encontramos — Inmarsat/Censuswide, 11 231
          pasajeros de diez países, aunque realizada allá por 2022 y preguntando por la intención en lugar
          de medir el tiempo — sitúa el entretenimiento muy por delante del trabajo: <strong>el 41&nbsp;%
          quería ver películas descargadas y el 35&nbsp;% verlas en streaming, frente a un 26&nbsp;% que
          quería trabajar.</strong>`,
        `Así que trata al asiento 24B como un personaje, no como una estadística. La cuestión nunca fue
          que ver una película esté mal. Es que la alternativa ha dejado de estar fuera de tu alcance.`
      ]
    },

    descent: {
      heading: "Descenso",
      prose: [
        `La película termina donde terminó las tres veces anteriores. Empieza el descenso. El asiento 24B
          ha tenido un vuelo perfectamente bueno y aterrizará descansado, que también vale algo.`,
        `El asiento 24C aterriza con el trabajo hecho — porque el trabajo nunca estuvo en el asiento.
          Estuvo todo el rato en una máquina en tierra, y el teléfono no fue más que una ventana hacia
          ella.`,
        `Once horas son mucho tiempo para pasarlo a 700 ms. Son muy poco tiempo para pasarlo supervisando
          cuatro servidores a los que el satélite les da exactamente igual.`
      ]
    }
  },

  seat24b: {
    tag: "asiento 24b",
    lines: [
      { time: "19:04", verb: "play", text: "— película, 118 min" },
      { time: "21:02", verb: "play", text: "— la película, otra vez" },
      { time: "23:10", verb: "inactivo", text: "— cabina a oscuras" },
      { time: "05:41", verb: "despierta", text: "— descenso" }
    ]
  },

  seat24c: {
    tag: "asiento 24c",
    lines: [
      { time: "19:04", verb: "attach", text: "— 4 sesiones, 1 cuadrícula" },
      { time: "21:02", verb: "merge", text: "— tres ramas" },
      { time: "23:10", verb: "verde", text: "— batería de tests arreglada" },
      { time: "05:41", verb: "reinicia", text: "— proceso atascado en marcha" }
    ]
  },

  quotes: [
    `Mismo avión, misma antena, mismo Wi-Fi malo. La diferencia está
        por completo en lo que has puesto al otro extremo.`,
    `El avión en el que vuelas será el último que actualicen.
        Planifica para 700 ms y que 62 te dé una alegría.`,
    `La latencia no grava lo que escribes. Grava cada decisión que
        espera a la pantalla.`
  ],

  orbit: {
    alt: "Diagrama: un satélite geoestacionario a 35 786 km cuesta 477 ms de ida y vuelta solo para la luz; un satélite en órbita terrestre baja a 550 km cuesta 7.3 ms.",
    geoLabel: "GEO 35 786 km",
    geoValue: "477 ms de luz",
    leoLabel: "LEO 550 km",
    leoValue: "7.3 ms de luz",
    aircraft: "asiento 24C, 11 000 m",
    caption: "Sin escala — nada que incluya 35 786 km la tiene nunca."
  },

  latencyChart: {
    rows: [
      { label: "GEO — Hughes / Intelsat / Viasat, mediana", value: "703 ms" },
      { label: "LEO sobre el Pacífico — mediana de largo radio", value: "62 ms" },
      { label: "LEO — Starlink en vuelo, mediana global", value: "44 ms" }
    ],
    note: "Barras a una escala lineal común. Fuente 1."
  },

  rolloutFigure: {
    items: [
      {
        name: "United",
        value: "≈60",
        text: `aviones de doble pasillo volando con Starlink, de más de 400 equipados. El resto de
            la flota de doble pasillo no está previsto hasta el verano de 2027.`
      },
      {
        name: "Virgin Atlantic",
        value: "12 de ~43",
        text: `aviones de doble pasillo listos — alrededor del 28 por ciento. Los 787 a lo largo
            del segundo semestre de 2026 y los A330neo ya entrado 2027.`
      }
    ],
    note: `Fuentes 5 y 6. Los aviones de doble pasillo que le quedan a United, previstos para el
          verano de 2027; los 787 de Virgin a lo largo del segundo semestre de 2026 y los A330neo en 2027.`
  },

  latencyTable: {
    caption: "Schmid et al., MUM '23 — n = 31, 20 ms frente a 200 ms de latencia de entrada",
    head: ["tarea", "20 ms", "200 ms", "veredicto"],
    rows: [
      { task: "escritura / carácter", low: "290.9", high: "302.7", verdict: "n.s." },
      { task: "tarea de corrección", low: "38.9 s", high: "46.5 s", verdict: "+20 %" },
      { task: "frustración", low: "20.9", high: "31.3", verdict: "p=0.004" }
    ]
  },

  moshChart: {
    rows: [
      { label: "pulsaciones cuyo eco mosh muestra al instante", value: "≈70 %" },
      { label: "no predichas — «principalmente navegación»", value: "≈30 %" }
    ],
    note: "Fuente 4."
  },

  windows: [
    {
      title: "sesiones-que-sobreviven-a-la-conexión",
      body: `El avión cambia de haz, el portal vuelve a pedir autenticación, la conexión se cae.
            <code>tmux</code> mantiene la shell viva en el servidor pase lo que pase; la sesión es una cosa
            que está al otro extremo, no una cosa que llevas en la mano. Eternal Terminal lleva la misma
            idea más lejos y deja que la sesión sobreviva a la propia conexión TCP, guardando en búfer y
            reproduciendo lo que te perdiste. <span style="color:var(--dim)">(Aviso honesto para una red
            filtrada: ET necesita su propio puerto — el 2022 por defecto — <em>además</em> del 22 de
            SSH.)</span>`
    },
    {
      title: "más-de-un-problema-a-la-vez",
      body: `Varias sesiones en una cuadrícula, varios servidores guardados, cada uno ejecutando algo que
            no necesita supervisión entre decisiones.`
    },
    {
      title: "agentes-que-teclean-por-ti",
      body: `Los agentes de programación corren en <em>tus</em> servidores, con latencia de tierra, donde
            está el código. Ellos no pagan el peaje del satélite; tú solo lo pagas cuando les contestas.`
    },
    {
      title: "aviso-cuando-de-verdad-importa",
      bellLabel: " (campana)",
      body: `Las Alertas de agente saltan cuando algo necesita de verdad a un humano — así el vuelo se
            dedica a revisar y decidir, no a mirar fijamente un prompt esperando un eco.`
    }
  ],

  cta: {
    cmdComment: "gratis · código abierto · Apache-2.0",
    heading: "Tu próximo vuelo largo son once horas de tiempo de servidor.",
    prose: [
      `Mobile SSH es un cliente nativo de SSH, SFTP y terminal para Android, iPhone y iPad. Varias
          sesiones, un gestor de tmux integrado, Eternal Terminal y alertas push cuando un agente te
          necesita. Gratis, sin cuenta, sin anuncios y de código abierto.`
    ],
    tags: ["Sin anuncios", "Sin cuenta", "Datos en el dispositivo", "Apache-2.0"],
    playButton: "Apuntarse en Google Play",
    iosButton: "Unirse a la beta de iOS",
    note: `Android está en pruebas cerradas — apúntate con la cuenta de Google con la que vayas a
      probar y abre el enlace en el navegador del móvil; puede que la prueba cerrada no se vea dentro de
      la app de Google Play.`
  },

  sources: {
    heading: "Fuentes",
    items: [
      `Datos en vuelo de Ookla del primer trimestre de 2025, analizados en <em>A First Look at Starlink In-Flight Performance</em> — arXiv:2508.09839, revisado por pares en IEEE Xplore doc 11353148. (44 ms frente a 703–757 ms; mediana de 62 ms en el Pacífico, rango de 19–86 ms.)`,
      `<em>From GEO to LEO: First Look Into Starlink In-Flight Connectivity</em>, ACM IMC 2025 — Jang, Varvello, Raman, Zaki. 25 vuelos, 7 aerolíneas. (&lt;40 ms en LEO frente a más de 550 ms en GEO.)`,
      `Schmid et al., MUM '23, <em>Effects of Text Input Latency</em> — n=31, 20 ms frente a 200 ms. (290.9 frente a 302.7 ms/carácter, n.s.; corrección 38.9 s → 46.5 s, p&lt;0.001, d=1.673; frustración 20.9 → 31.3, p=0.004.)`,
      `Winstein &amp; Balakrishnan, <em>Mosh: An Interactive Remote Shell for Mobile Clients</em>, USENIX ATC 2012. (503 ms → &lt;5 ms; 273 ms → &lt;5 ms; ~70 % de las pulsaciones predichas; el resto no predicho, «principalmente navegación».)`,
      `Sala de prensa de United Airlines, 22 de junio de 2026, <em>United Accelerates Starlink Wi-Fi Rollout with First Widebody Transatlantic Flight</em>. (Más de 400 aviones; ~60 de doble pasillo; flota completa de doble pasillo en el verano de 2027.)`,
      `Nota de prensa de Virgin Atlantic, 12 de abril de 2026. (A350 completados; 787 en el segundo semestre de 2026; A330neo en 2027.)`,
      `Documentación de Eternal Terminal — eternalterminal.dev/howitworks, github.com/MisterTea/EternalTerminal. (Búfer y reproducción; puerto 2022 por defecto además del de SSH.)`,
      `Encuesta Inmarsat/Censuswide Passenger Experience 2022, n=11 231 en 10 países. (Películas descargadas 41 %, streaming 35 %, trabajo 26 % — intención declarada, respuesta múltiple, realizada en 2022.)`
    ],
    quitHint: "— pulsa q para salir"
  },

  colophon: [
    "Mobile SSH — SSH / SFTP / terminal gratis y de código abierto para Android, iPhone y iPad.",
    "Apache-2.0. Sin anuncios, sin cuenta, sin nivel Pro."
  ]
};
