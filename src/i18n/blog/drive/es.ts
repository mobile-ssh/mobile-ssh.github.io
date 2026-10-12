import { defineDrive } from "./define";

export const es = defineDrive({
  "metaTitle": "La entrada que empezó de camino a casa | Mobile SSH",
  "metaDescription": "Una sesión de escritura por voz imaginada compara T3 Code, Moshi, Mobile SSH y paseo.sh: redactar, editar archivos, escribir código, preparar cambios y trabajar con ruido.",
  "back": "Blog",
  "eyebrow": "Flujos de trabajo por voz",
  "title": "La entrada que empezó de camino a casa",
  "standfirst": "Una idea llega antes de que termine el viaje. ¿Puedes convertirla en un borrador, un cambio en el código y un diff preparado con cuidado sin vivir pegado a una pantalla táctil? Cuatro productos ofrecen partes distintas de esa conversación.",
  "author": "El consejo editorial de Mobile SSH",
  "date": "11 de octubre de 2026",
  "readingTime": "7 min de lectura",
  "evidence": "Un viaje imaginado, no una prueba al volante. Las funciones se contrastaron con documentación oficial y código actual el 11 de octubre de 2026. No se realizó ninguna prueba comparativa de micrófonos ni de ruido de carretera. Configúralo con el coche aparcado; conducir tiene prioridad, y la revisión en pantalla o las aprobaciones deben esperar a una parada segura.",
  "body": [
    "La entrada empieza en un coche aparcado. Tienes un repositorio en un ordenador accesible, un agente de programación listo y una idea que probablemente desaparecerá si prometes recordarla después de cenar. Antes de salir, eliges el proyecto y estableces la conexión. La primera petición se hace hablando con naturalidad.",
    "Redacta una entrada sobre nuestra nueva función de búsqueda. Empieza por el problema del lector. Guarda un borrador en el directorio del blog y déjalo sin commit.",
    "El viaje pone el escenario, pero la pregunta útil es qué ocurre después de que el micrófono te escuche. ¿La voz solo rellena un cuadro de texto? ¿Todavía hay que pulsar Enviar? ¿Puedes oír una respuesta y continuar la conversación? T3 Code, Moshi, Mobile SSH y paseo.sh no responden lo mismo.",
    "Una petición, cuatro conversaciones distintas",
    "T3 Code reúne el agente de programación y su trabajo con el repositorio en una interfaz móvil. Su entrada de voz integrada, según la documentación, transcribe localmente en los iPhone compatibles con iOS 26 o posterior. El detalle decisivo es que la transcripción modifica el borrador del editor; no envía el turno al agente. Esto sirve para dictar unas instrucciones de redacción detalladas con el coche aparcado, revisarlas y enviarlas. No demuestra una conversación continua con respuestas habladas. El trabajo puede continuar en el equipo remoto después del envío, pero el dictado por sí solo no completa el ciclo sin manos. <a href=\"#source-t3-voice\">[1]</a>",
    "Moshi sigue la vía del terminal. Su documentación de voz describe cómo el habla se convierte en entrada del terminal, con envío opcional mediante Intro, o en texto en un editor modificable. Su propia comparación con Paseo lo llama dictado unidireccional, no una conversación con respuestas habladas. Un agente de programación que ya se esté ejecutando en ese terminal puede recibir las instrucciones. Lo que falta en nuestro viaje imaginado es escuchar y ajustar el resultado mediante un modo de voz bidireccional documentado. Un botón de micrófono y el Intro automático son útiles, pero ninguno demuestra respuestas habladas ni aprobaciones por voz. <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-moshi-conversation\">[4]</a>",
    "paseo.sh documenta tanto el dictado como las conversaciones por voz: el reconocimiento de voz lleva tu petición a un agente y la síntesis de voz proporciona las respuestas. Su flujo de voz permite iniciar y controlar agentes de programación, por lo que es un candidato directo para el intercambio imaginado. Eso describe una interacción documentada, no un resultado de este viaje. También hay límites de funcionamiento: la implementación de Android revisada pausa el audio al pasar a segundo plano. No des por hecho que la voz conversacional implica una sesión ininterrumpida con el teléfono bloqueado. <a href=\"#source-paseo-voice\">[5]</a> <a href=\"#source-paseo-background\">[7]</a>",
    "El asistente experimental de Mobile SSH para Android añade otro atractivo: la voz puede trabajar con las sesiones SSH que ya usas. Su modo Live permite la interacción hablada; sus controles pueden descubrir equipos y recursos de multiplexores, leer la salida del terminal seleccionado y, tras una autorización independiente, enviar entrada al terminal o ejecutar los comandos admitidos. Para quien alterna entre un editor, un agente de programación y un panel de pruebas, poder nombrar el destino existente resulta útil. Esa es la ventaja respaldada que conviene destacar: voz integrada con el trabajo SSH general y permisos de control explícitos. No demuestra un reconocimiento de voz mejor que el de los otros tres. <a href=\"#source-mobile-voice\">[8]</a>",
    "La precisión sobre la plataforma importa. La nueva implementación de voz de Mobile SSH para iOS ofrece dictado en primer plano, revisión y envío explícito, con respuestas habladas y acceso de solo lectura al terminal seleccionado. Sus notas de versión describen una compilación de prueba privada. No ofrece el control de escritura en el terminal del asistente de Android ni escucha continua. Tampoco el adaptador de desarrollo de Android Auto es una integración para el coche ya publicada. La historia debe ajustarse a la compilación que realmente tengas. <a href=\"#source-mobile-ios\">[11]</a> <a href=\"#source-mobile-car\">[12]</a>",
    "El borrador se convierte en un archivo y luego en un cambio de código",
    "Imagina que el esquema está listo cuando llegas a la siguiente parada segura. Ahora la tarea se vuelve más precisa. Quieres acortar la introducción, corregir un ejemplo y hacer un pequeño cambio en el código del sitio. Puedes seguir expresando esos cambios por voz; no hace falta dictar cada llave y cada punto y coma.",
    "Acorta la introducción del borrador. Después añade una etiqueta con el tiempo de lectura al componente del artículo, siguiendo las convenciones del proyecto. Ejecuta las pruebas pertinentes y dime qué archivos han cambiado.",
    "Aquí quien escribe es el agente de programación. La interfaz de voz transmite la instrucción; el acceso al repositorio, las herramientas disponibles y los permisos determinan si puede editar los archivos e implementar el componente. Aplicar esas capacidades a este blog concreto es un flujo de trabajo propuesto, no una demostración verificada de que los cuatro productos lo completaron. T3 Code ofrece edición mediante agentes y acciones de Git; Moshi proporciona un terminal real; Paseo documenta flujos de desarrollo con agentes; Mobile SSH en Android puede dirigirse a un terminal o destino de comandos autorizado. El agente elegido todavía tiene que entender la tarea.",
    "Mobile SSH sigue siendo útil cuando termina la sesión de voz: la misma aplicación tiene un terminal SSH, edición de texto por SFTP y acceso a lazygit remoto. Eso te da un lugar práctico para inspeccionar los archivos reales y el diff con el coche aparcado. Son herramientas de revisión interactivas, no una prueba de que todos sus botones puedan manejarse por voz. <a href=\"#source-mobile-voice\">[8]</a>",
    "Preparar los cambios merece una frase propia",
    "Añade al área de preparación solo el borrador del blog y el componente del artículo que acabamos de revisar. Deja intacto cualquier otro cambio. No hagas commit ni push.",
    "Añadir al área de preparación selecciona el contenido del próximo commit de Git; es distinto de guardar, hacer commit y publicar. El flujo móvil de commit de T3 Code selecciona archivos y los prepara como parte del commit. Eso no equivale a documentar una acción hablada independiente para prepararlos. En Moshi, Paseo o una sesión de Mobile SSH para Android con escritura habilitada, pedir a un agente capaz que prepare archivos concretos es un uso razonable de sus herramientas de shell, sujeto a los permisos. Nada de eso demuestra una aprobación fiable de cualquier diff solo por voz. Comprueba el diff preparado durante la parada segura. <a href=\"#source-t3-git\">[2]</a> <a href=\"#source-paseo-work\">[6]</a>",
    "Entonces la carretera se vuelve más ruidosa",
    "En nuestro viaje imaginado empieza a llover, el ventilador se acelera y un pasajero empieza a hablar. Aquí una demostración cuidada deja de responder a la pregunta importante. No encontramos resultados controlados y comparables sobre ruido de carretera para estos cuatro productos. No hay pruebas aquí que permitan elegir un ganador en reconocimiento, fijar una distancia fiable al micrófono o prometer que una conversación de fondo nunca se convertirá en un comando.",
    "La transcripción en el dispositivo de T3 Code describe dónde se reconoce la voz, no su precisión en un habitáculo ruidoso. Moshi ofrece varios motores de reconocimiento en iOS y sugiere transcripción alojada cuando el reconocimiento local tiene dificultades con el ruido; esa sugerencia no es una prueba comparativa. Paseo ofrece servicios de voz locales y alternativas en la nube configurables, pero elegir un proveedor no demuestra por sí solo el rendimiento en tu coche. El ruido de carretera, otras voces, la posición del micrófono y el modelo de reconocimiento elegido deben evaluarse en la configuración real. <a href=\"#source-t3-voice\">[1]</a> <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-paseo-voice\">[5]</a>",
    "Mobile SSH ofrece controles útiles que evaluar en Android: el audio del teléfono activa la supresión de ruido y la cancelación de eco de la plataforma cuando están disponibles, y el servidor de voz tiene filtrado RNNoise opcional y un filtro de hablante registrado. Son decisiones de implementación verificadas, no una superioridad verificada. La protección de entrada está desactivada por defecto, requiere configuración y puede rechazar al hablante previsto o aceptar voces no deseadas. Su documentación dice expresamente que las comprobaciones sintéticas registradas no miden la precisión con personas que usan auriculares ni con ruido de coche. <a href=\"#source-mobile-noise\">[10]</a>",
    "En la vía de reconocimiento en servidor de Mobile SSH para Android, los controles de auriculares documentados permiten iniciar o reanudar una conversación configurada y controlar una sesión activa en segundo plano, sujetos al enrutamiento de Android y a la prioridad de otras aplicaciones. Esto importa para reducir la interacción con la pantalla. Aun así, hay que probarlo con tu teléfono y tus auriculares con el coche aparcado; no es una garantía sobre botones del volante, palabras de activación ni todos los coches. Si la conversación exige correcciones o atención, ponla en pausa. <a href=\"#source-mobile-headset\">[9]</a>",
    "Llegar con algo que merezca una revisión",
    "El final útil es un borrador y un cambio pequeño que puedas inspeccionar, esperando al terminar el viaje. T3 Code y Moshi ofrecen formas distintas de dictar instrucciones dentro de un flujo de programación existente. Paseo ofrece una alternativa conversacional documentada. Mobile SSH merece especialmente una evaluación por parte de usuarios de Android que quieran voz junto a sus terminales SSH y sesiones de multiplexores, y después herramientas completas de terminal y archivos para revisar. Ese juicio se basa en las capacidades, no en una competición frente al ruido que no hemos realizado.",
    "Los cuatro merecen figurar en la comparación. Elige la interacción que encaje con tu dispositivo y tu trabajo, formula peticiones concretas y presta atención a la carretera. El borrador puede esperar. El diff final merece tu atención."
  ],
  "comparison": {
    "heading": "Qué puede pedir razonablemente este viaje imaginado a cada producto",
    "productHeading": "Producto",
    "voiceHeading": "Función de voz verificada",
    "fitHeading": "Utilidad y límites",
    "rows": [
      {
        "id": "t3",
        "voice": "Dispositivos iOS compatibles: dictado en un borrador; el envío es independiente.",
        "fit": "Edición mediante agentes y acciones móviles de Git; no se ha establecido un diálogo hablado continuo."
      },
      {
        "id": "moshi",
        "voice": "Dictado en el terminal o el editor de mensajes; Intro opcional.",
        "fit": "Usa un agente existente en el terminal; la voz documentada es unidireccional."
      },
      {
        "id": "mobile",
        "voice": "Conversación Live experimental en Android y control del terminal con autorización expresa.",
        "fit": "Destinos SSH y de multiplexores existentes; el nuevo asistente de iOS es de solo lectura y requiere pulsar Enviar."
      },
      {
        "id": "paseo",
        "voice": "Dictado más reconocimiento de voz y respuestas habladas en el modo de voz.",
        "fit": "Control conversacional de agentes; el audio en segundo plano depende de la plataforma y la compilación."
      }
    ],
    "note": "La documentación y el código establecen mecanismos, no la ejecución satisfactoria de este escenario. No hay resultados comparativos establecidos frente al ruido de carretera para ninguno de los cuatro."
  },
  "sources": {
    "heading": "Fuentes de esta comparación",
    "t3Voice": "T3 Code: entrada de voz y límite del envío desde el borrador",
    "t3Ios": "T3 Code: disponibilidad de voz en iOS",
    "t3Git": "T3 Code: selección de archivos para commits desde el móvil",
    "t3Stage": "T3 Code: preparación de archivos seleccionados en el servidor",
    "moshiVoice": "Moshi: motores de voz, entrada del terminal y comportamiento del editor de mensajes",
    "moshiConversation": "Moshi: su descripción del dictado frente a la conversación",
    "paseoVoice": "paseo.sh: dictado y conversaciones por voz",
    "paseoWork": "paseo.sh: flujos de desarrollo en repositorios",
    "paseoBackground": "Paseo: ciclo de vida del audio en Android en v0.11.2",
    "mobileVoice": "Mobile SSH: controles de voz de Android y flujos habituales de terminal y archivos",
    "mobileHeadset": "Mobile SSH: controles de auriculares y sus límites",
    "mobileNoise": "Mobile SSH: protección opcional de entrada e implementación de audio",
    "mobileAudio": "Mobile SSH: procesamiento de audio de la plataforma",
    "mobileIos": "Mobile SSH: implementación de voz de iOS y límites de la compilación privada",
    "mobileCar": "Mobile SSH: adaptador de Android Auto exclusivo para desarrollo",
    "mobileAudit": "Las referencias de Mobile SSH recogen nuestra revisión de los repositorios privados de Android e iOS en las revisiones indicadas. Son hallazgos del código fuente, no confirmaciones de versiones públicas ni resultados de pruebas en un coche."
  },
  "cta": {
    "heading": "Mantén la conversación cerca del trabajo.",
    "body": "Explora los flujos documentados de Mobile SSH y comprueba las capacidades de tu plataforma y compilación antes de configurar una sesión de voz.",
    "docsLink": "Leer la documentación",
    "featuresLink": "Consultar las funciones por plataforma"
  }
});
