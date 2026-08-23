import type { Dict } from "../types";

export const es: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Idioma",
    languageSwitcher: "Cambiar idioma"
  },
  nav: {
    blog: "Blog",
    home: "Inicio",
    features: "Funciones",
    docs: "Documentación",
    compare: "Comparar",
    about: "Acerca de",
    privacy: "Privacidad"
  },
  footer: {
    tagline: "Flujos enfocados de SSH, SFTP y terminal para dispositivos Android e iOS.",
    documentation: "Documentación",
    comparison: "Comparación",
    privacy: "Privacidad",
    contact: "Contacto",
    feedback: "Comentarios"
  },
  home: {
    metaTitle: "Mobile SSH — Cliente SSH para Android e iOS",
    metaDescription:
      "Mobile SSH es un cliente SSH enfocado para Android e iOS con terminales multi-sesión, sesiones resilientes de Eternal Terminal, un gestor de tmux, transferencia SFTP, claves privadas, reenvío de puertos y complementos.",
    eyebrow: "Cliente SSH para Android e iOS",
    h1: "Mobile SSH",
    intro:
      "Un cliente SSH enfocado para Android e iOS con terminales multi-sesión, sesiones de Eternal Terminal que sobreviven a cortes de red, un gestor de tmux integrado, transferencia de archivos SFTP, reenvío local de puertos y complementos — diseñado para teléfonos y tabletas.",
    versionLine: "Disponible en {count} idiomas · Android {version} · iOS {iosVersion} beta",
    ctaDocs: "Leer la documentación",
    ctaPlay: "Disponible en Google Play",
    ctaIos: "Consigue la beta de iOS en TestFlight",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone y iPad",
    advantagesHead: "Por qué Mobile SSH",
    advantagesIntro: "Hecho para resolver los problemas habituales de los clientes SSH móviles.",
    advantages: [
      { title: "Sin nivel Pro, sin anuncios", text: "Todas las funciones en la misma app. No hay muro de pago dividiendo flujos esenciales tras un Pro, ni banners en el terminal." },
      { title: "Tus datos se quedan en el teléfono", text: "Servidores, credenciales y claves guardados localmente. Sin cuenta en la nube; nada que pueda cerrarse." },
      { title: "Hosts guardados, un toque para conectar", text: "Añade un host una vez y reconéctate con un toque, incluyendo clave, puerto y túneles configurados." },
      { title: "Alertas de agente, y una respuesta con un toque", text: "Entérate en el momento en que Claude Code, Codex u otro agente te necesita: el panel se tiñe de ámbar, un distintivo en la barra de herramientas cuenta cuántos están esperando y la lista de agentes responde a la pregunta con un solo toque — sin escribir nada en el terminal." },
      { title: "Teclas de terminal sobre el teclado", text: "Una fila de trece teclas — ESC, TAB, CTRL, flechas, Home, End, PgUp, PgDn — que salta a una segunda fila en lugar de desplazarse, así que nada queda fuera de la pantalla. Añade F1–F12, combinaciones con Ctrl o tus propias secuencias de escape desde una paleta de valores predefinidos." },
      { title: "Reenvío de puertos sin comandos", text: "Los túneles se asocian al perfil del servidor y se levantan al conectar." },
      { title: "Sobrevive al bloqueo y al roaming", text: "Asigna varias direcciones a un servidor guardado — una IP de LAN doméstica y una IP de VPN — y Mobile SSH marca la que responda, probando primero la última que funcionó, y se reconecta en cuanto cambia la red. En Android, un servicio en primer plano y wake locks mantienen las shells vivas con la pantalla apagada; en iOS, la reconexión automática más el auto-attach de tmux te devuelven donde lo dejaste." },
      { title: "Eternal Terminal", text: "Un transporte ET opcional mantiene la shell remota activa a través de cortes de red, modo de suspensión y cambios de IP. ¿Sin etserver en el host? Mobile SSH puede instalarlo por SSH por ti." },
      { title: "Amplíalo con complementos", text: "Explora un catálogo público e instala complementos bajo demanda para añadir nuevos flujos de trabajo. Cada complemento se descarga y se verifica con SHA-256 en el almacenamiento privado de la app." }
    ],
    sectionAHead: "Diseñado para el trabajo SSH móvil",
    sectionAIntro:
      "Mobile SSH acorta el camino habitual de administración: guarda un servidor, conéctate, mantén las sesiones activas, mueve archivos cuando lo necesites y vuelve rápido a tus terminales en uso.",
    features: [
      { title: "Terminal SSH", text: "Terminal xterm-256color con color verdadero de 24 bits, cursivas, búsqueda dentro del terminal, integración con el shell (OSC 133) y ajuste de texto con pellizco — además de una fuente y un esquema de colores configurables y glifos powerline/de iconos de Nerd Font en Android e iOS." },
      { title: "Cuadrícula multi-sesión", text: "Hasta ocho sesiones SSH en una cuadrícula redimensionable — toca un panel para enfocarlo, doble toque para pantalla completa, pellizca para ajustar el texto." },
      { title: "Enlaces tappables", text: "Las URL en el terminal aparecen subrayadas y se abren en el navegador con un toque — sin copiar ni cambiar de app." },
      { title: "Carpetas y nombres de servidores", text: "Organiza los servidores guardados en grupos contraíbles y ponle a un servidor un nombre que se muestre en lugar de su dirección. La dirección reaparece siempre que un nombre resulte ambiguo, para que las filas nunca se confundan entre sí." },
      { title: "Alertas de agente", text: "Los agentes informan a través del terminal, así que la app sabe cuál está bloqueado y por qué. Responde desde la lista de agentes con un toque; las alertas se sustituyen en lugar de acumularse, y al tocar una se abre el panel que avisó." },
      { title: "Claves privadas", text: "Autenticación por contraseña o clave privada. Genera claves Ed25519 o ECDSA en el dispositivo (RSA también en Android); importa o pega claves existentes." },
      { title: "Transferencia SFTP", text: "Explorador de archivos de doble panel vinculado a una sesión SSH activa. Encola subidas y descargas, renombra, elimina e inspecciona permisos remotos." },
      { title: "Reenvío de puertos", text: "Guarda especificaciones de túnel locales con un perfil de servidor y se abren automáticamente al conectar — también tras una reconexión en una red nueva, sin tener que rehacerlas a mano." },
      { title: "Flujo de reconexión", text: "Cambia de red y las sesiones vuelven a marcar de inmediato en lugar de esperar a que expire una ruta muerta, y una sesión en retroceso despierta en cuanto aparece una red utilizable. En iOS se detecta y se reconecta un servidor que ha dejado de responder en silencio." },
      { title: "Copia de seguridad y restauración", text: "Exporta servidores y credenciales guardados a un archivo de copia de seguridad cifrado; importa con fusión o reemplazo para cambiar de dispositivo — las copias son interoperables entre Android e iOS." },
      { title: "Eternal Terminal", text: "Conéctate mediante Eternal Terminal (ET) para sesiones que sobreviven a cortes de red, modo de suspensión y cambios de IP — con instalación automática opcional de etserver por SSH." },
      { title: "Gestores de multiplexores", text: "Maneja tmux sin combinaciones de prefijo — adjunta, renombra, crea, divide, amplía o cierra. Ambas plataformas ofrecen lo mismo para herdr y Zellij, y el icono de la barra de herramientas solo aparece cuando ese programa se encuentra en el servidor." },
      { title: "Complementos", text: "Explora, instala y ejecuta complementos para ampliar Mobile SSH. Los complementos se descargan bajo demanda desde un catálogo público y se verifican con SHA-256 en el almacenamiento privado de la app." }
    ],
    multiHead: "Una pantalla, varias shells activas",
    multiP1:
      "La vista de terminal puede contener varias sesiones SSH activas en una cuadrícula. Selecciona un panel para escribir, usa la fila de teclas extra para los controles de terminal, pellizca para ajustar el tamaño del texto y haz doble toque sobre un panel cuando necesites foco a pantalla completa.",
    multiP2:
      "La pantalla de inicio responde a «¿a qué puedo volver?» — las conexiones activas en este momento y las sesiones de tmux que te esperan en tus servidores guardados, reconstruidas a partir de una instantánea guardada para que aparezcan incluso sin red.",
    multiAlt:
      "Mobile SSH en un teléfono mostrando dos sesiones SSH activas en una vista dividida en paralelo.",
    sftpHead: "SFTP cuando el terminal no basta",
    sftpBody:
      "Abre la transferencia de archivos desde una sesión conectada para explorar el almacenamiento del teléfono y los directorios remotos. Encola subidas y descargas, ordena los archivos, vuelve de un salto a rutas remotas recientes e inspecciona o cambia los permisos remotos antes de decidir qué mover.",
    sftpCtaGuide: "Guía de transferencia de archivos",
    sftpCtaAll: "Todas las funciones",
    sftpAlt: "Pantalla de transferencia de archivos de Mobile SSH en un teléfono con paneles local y remoto.",
    galleryHead: "Vélo en un dispositivo real",
    galleryIntro:
      "Capturas tomadas en teléfonos Android y iPhones — las mismas pantallas que usarás para añadir servidores, trabajar en terminales, ejecutar varias sesiones y mover archivos por SFTP.",
    carouselPrev: "Captura anterior",
    carouselNext: "Captura siguiente",
    carouselDot: "Ir a la posición {n}",
    videoHead: "Véalo en acción",
    videoIntro: "Demostraciones breves en ambas plataformas. Android: la pantalla de inicio que responde a qué puedes volver, una barra de herramientas de sesión que solo muestra lo que ese servidor tiene, el envío de un archivo directamente al prompt y los gestores de tmux, herdr y Zellij. iOS: la apertura directa en un terminal en vivo y la pantalla de inicio a la que vuelves.",
    videoAlt: "Demo en Android de la pantalla de inicio con las sesiones de tmux que puedes reanudar, la barra de herramientas de sesión, cómo adjuntar un archivo al prompt y los gestores de sesiones de tmux, herdr y Zellij",
    videoIosAlt: "Demo en iOS que abre Mobile SSH directamente en una sesión de terminal SSH en vivo y vuelve a la pantalla de inicio, con la lista de Recientes y las demás pantallas de la app",
    muxHead: "Un vídeo por gestor de sesiones",
    muxIntro:
      "En las demos de arriba, tmux, herdr y Zellij se reparten unos treinta segundos: suficiente para ver que la barra dibuja un icono para cada uno, insuficiente para ver qué hace ninguno. Estas son las versiones largas, filmadas en ambas plataformas contra un servidor real.",
    muxItems: [
        {
          text: "Sesiones, ventanas y paneles alcanzados desde la pantalla de inicio, con una sesión marcada por una campana porque algo en ella reclama atención. Adjunta una ventana y el terminal en vivo la sigue; crea una ventana y ponle nombre, sin teclear ni un solo atajo de prefijo.",
          androidAlt: "Demo en Android del gestor de tmux: la lista de sesiones en caché de la pantalla de inicio, luego sesiones, ventanas y paneles, adjuntando una ventana para que el terminal la siga, y creando una ventana con nombre.",
          iosAlt: "Demo en iOS del gestor de tmux: sesiones de tmux con su antigüedad y una campana en la que espera entrada, luego ventanas y paneles, cada fila con Abrir, Renombrar y Matar."
        },
        {
          text: "Espacios de trabajo, pestañas y paneles que llevan estado real de agente: uno trabajando, otro bloqueado esperando a una persona. Previsualiza el bloqueado, respóndele desde el teléfono y observa cómo herdr lo reclasifica como trabajando y luego como terminado.",
          androidAlt: "Demo en Android del gestor de herdr: sesiones y espacios de trabajo etiquetados con el estado del agente, uno marcado como «needs you», respondiéndole desde el teléfono, y un nuevo espacio de trabajo creado y renombrado.",
          iosAlt: "Demo en iOS del gestor de herdr: espacios de trabajo con estado de agente y una hoja de respuesta que envía texto escrito a un agente bloqueado, seguido de Enter."
        },
        {
          text: "Sesiones con su antigüedad, luego pestañas y paneles. Previsualiza la salida de un panel, añade una pestaña con nombre, enfoca la que importa y adjúntate, sin escribir nada en el prompt.",
          androidAlt: "Demo en Android del gestor de Zellij: sesiones con su antigüedad, pestañas y paneles, previsualizando la salida de un panel, creando una pestaña con nombre y adjuntando una sesión.",
          iosAlt: "Demo en iOS del gestor de Zellij: una sesión con acciones de adjuntar, renombrar, matar y eliminar, sus pestañas, y un panel con previsualización y ambas direcciones de división."
        }
    ],
    graphicsHead: "Un gráfico animado, dentro del terminal",
    graphicsBody:
      "Un GIF de 36 fotogramas transmitido por el protocolo gráfico de Kitty y decodificado por la app al ritmo del propio archivo, no avanzado desde fuera. Después, las secuencias de escape por las que se juzga a un terminal: OSC 8 convierte números de compilación y nombres de paneles en algo que puedes tocar, OSC 52 deja que el remoto escriba en el portapapeles de tu teléfono, y OSC 777 lanza una notificación real de Android.",
    graphicsAlt:
      "Demo en Android de un gráfico de latencia animado transmitido al terminal por el protocolo gráfico de Kitty, seguido de enlaces OSC 8, una escritura en el portapapeles con OSC 52 y una notificación OSC 777.",
    lightboxClose: "Cerrar",
    lightboxPrev: "Anterior",
    lightboxNext: "Siguiente",
    betaJoin: "Unirse a la beta",
    betaOr: "o escríbenos a",
    betaRequest: "para solicitar acceso a la beta privada",
    galleryAlts: [
      "Pantalla de inicio de Mobile SSH en un teléfono Android con la lista de sesiones de tmux que esperan en un servidor guardado, encima de los botones Servidores, Credenciales, Ajustes, Acerca de y Complementos.",
      "Diálogo Añadir servidor en un teléfono mostrando los campos host, puerto, credenciales, clave privada y reenvío de puertos.",
      "Terminal SSH de una sola sesión en un teléfono con la fila de teclas extra en la parte inferior.",
      "Dos sesiones SSH en una vista dividida en paralelo en un teléfono.",
      "Dos sesiones SSH apiladas verticalmente en un teléfono con el panel activo resaltado.",
      "Pantalla de transferencia de archivos SFTP en un teléfono con paneles Mi teléfono y Servidor remoto.",
      "Diálogo Acerca de en un teléfono mostrando los campos versión, autor, licencia y sitio web.",
      "Diálogo Generar clave SSH en un teléfono con campos de etiqueta, usuario, tipo de clave y frase de contraseña.",
      "Diálogo Clave pública en un teléfono que muestra la clave generada con opciones para copiar, compartir y guardar.",
      "Pantalla de Servidores guardados que muestra servidores organizados en grupos contraíbles de Trabajo y Personal.",
      "Terminal SSH en un teléfono con URL https:// subrayadas como enlaces tappables.",
      "Gestor de Zellij en un teléfono Android listando sesiones, pestañas y paneles con botones para adjuntar, renombrar, cerrar y enfocar.",
      "Gestor de tmux en un teléfono listando sesiones, ventanas y paneles de tmux con botones para adjuntar, renombrar y cambiar.",
      "Pantalla de complementos en un teléfono mostrando un catálogo de complementos instalables con Tailscale, WireGuard y VS Code.",
      "Complemento AI Chat en un teléfono transmitiendo una respuesta de un modelo local llama3.2 que se ejecuta en el servidor remoto por SSH.",
      "Diálogo Añadir servidor en un teléfono con el transporte configurado como Eternal Terminal para que las sesiones sobrevivan a los cortes de red."
    ],
    galleryIosAlts: [
      "Formulario de conexión de Mobile SSH en un iPhone con campos de servidor, autenticación, carpeta y transporte.",
      "Servidores guardados en un iPhone organizados en los grupos Production y Staging, con búsqueda de servidores.",
      "Terminal SSH en vivo en un iPhone con la barra de estado de tmux y la fila de teclas extra en la parte inferior.",
      "Dos sesiones SSH en paralelo en una cuadrícula en un iPhone con paneles que se enfocan al tocar.",
      "Transferencia de archivos en un iPhone con los paneles Mi teléfono y Host remoto y un registro de transferencia completada.",
      "Autenticación por clave en un iPhone con una clave Ed25519 generada en el dispositivo y una clave pública copiable.",
      "Gestor de tmux en un iPhone listando sesiones y ventanas con acciones de adjuntar, renombrar y cerrar — una campana señala un agente que espera intervención.",
      "Terminal SSH en un iPhone adjunto a una ventana de tmux que muestra código en un editor remoto.",
      "Catálogo de complementos en un iPhone con Tailscale, WireGuard, VS Code, AI Chat y Open WebUI disponibles para instalar.",
      "Formulario de conexión en un iPhone con el transporte configurado como Eternal Terminal para que las sesiones sobrevivan a los cortes de red.",
      "Ajustes de alertas de agente en un iPhone con interruptores de vibración, sonido y solo auriculares.",
      "Pantalla de inicio de Mobile SSH en un iPhone con una lista de Recientes para reconectar con un toque, encima de los botones Servidores, Credenciales, Registros, Ajustes, Acerca de y Complementos."
    ],
    compareHead: "Su lugar junto a Termux y Termius",
    compareIntro:
      "Mobile SSH es intencionadamente reducido: no es un entorno Linux completo ni una bóveda en la nube para equipos. Es una herramienta SSH/SFTP local para Android e iOS con acceso rápido a los controles de sesión que más usan los usuarios móviles.",
    compareGuideTitle: "Guía de comparación",
    compareGuideText: "Mira cuándo elegir Mobile SSH, Termux o Termius en tu teléfono o tableta.",
    privacyTitle: "Política de privacidad",
    privacyText: "Revisa qué datos de conexión se guardan localmente y qué se envía a tus servidores."
  },
  features: {
    metaTitle: "Funciones | Mobile SSH",
    metaDescription:
      "Funciones clave de Mobile SSH para SSH en Android e iOS: terminal, Eternal Terminal, gestor de tmux, SFTP, claves privadas, reenvío de puertos y complementos.",
    eyebrow: "Lista de funciones",
    h1: "Funciones de Mobile SSH",
    intro:
      "Mobile SSH está pensado para un uso directo de SSH desde dispositivos Android e iOS: abrir terminales, mantenerlos activos, mover archivos, guardar servidores y recuperarse rápido de interrupciones móviles.",
    groups: [
      {
        title: "Plataformas",
        items: [
          "Android 8.0 o posterior — actualmente es una prueba cerrada de Google Play: abre el enlace de inscripción en un navegador móvil y luego instálala desde Play",
          "iOS 16 o posterior en iPhone y iPad — únete a la beta pública en TestFlight",
          "Las copias de seguridad cifradas son interoperables: exporta en una plataforma e importa en la otra"
        ]
      },
      {
        title: "Conexiones",
        items: [
          "Autenticación por contraseña y por clave privada",
          "Claves privadas Ed25519, ECDSA (P-256/384/521) y RSA en Android; Ed25519 y ECDSA en iOS. Ambas plataformas abren claves cifradas con frase de contraseña",
          "Perfiles de servidor guardados con host, puerto, usuario, credencial, clave privada y especificaciones de túnel opcionales — clona un perfil para duplicar sus ajustes en un nuevo servidor",
          "Ponle un nombre a un servidor y la lista lo mostrará en lugar de su dirección — la dirección reaparece siempre que dos filas fueran a parecerse entre sí",
          "Busca entre los servidores guardados por nombre, host, puerto, credencial o cualquiera de sus direcciones alternativas",
          "Conéctate dos veces a la misma máquina desde dos filas guardadas distintas y la app se dará cuenta: identifica la huella de la clave del host y ofrece fusionarlas en un único servidor con varias direcciones",
          "Flujo Añadir sesión con búsqueda primero: elige un servidor guardado en una página de búsqueda dedicada y conéctate con un toque",
          "Varias direcciones por servidor guardado para el roaming entre LAN y VPN — se marcan en orden probando primero la última dirección que funcionó, y la reconexión se activa al cambiar de red",
          "Registros de credenciales reutilizables que pueden seleccionarse al configurar un servidor",
          "Una pantalla de inicio pensada para retomar el trabajo: las conexiones activas en este momento y las sesiones de tmux que te esperan en tus servidores — tomadas de una instantánea guardada, de modo que se listan sin red y cada fila indica su antigüedad. iOS mantiene además una lista de Recientes",
          "IPv6 de principio a fin: literales entre corchetes con un puerto opcional en los campos de dirección, y destinos IPv6 entre corchetes en las reglas de reenvío de puertos",
          "Registro de intentos de inicio de sesión, correctos y fallidos, que anota la dirección exacta marcada y, en caso de fallo, el motivo",
          "Transporte por proxy de Teleport (experimental, Android): inicia sesión con usuario, contraseña y OTP o importa un archivo de configuración o de identidad de Teleport, explora los nodos del clúster y luego ejecuta terminales, SFTP, tmux y complementos a través del túnel del proxy"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Comportamiento de terminal estilo VT100/xterm-256color con color verdadero de 24 bits y cursivas — al shell se le anuncia TERM=xterm-256color y COLORTERM=truecolor",
          "Búfer de scrollback ajustable a 1000, 5000, 10 000 o 50 000 líneas en Android e iOS (5000 de forma predeterminada)",
          "Búsqueda dentro del terminal — busca en el scrollback y en la pantalla visible y salta entre coincidencias (Android e iOS)",
          "Integración con el shell (OSC 133): recorre los prompts uno a uno, selecciona la salida completa de un comando — el error de compilación de 300 líneas atrás, no solo el último — y recibe un aviso cuando termina un comando de larga duración (Android e iOS)",
          "Imágenes en línea en el terminal mediante el protocolo de gráficos Kitty, que sobreviven al zoom con pellizco y al reajuste de líneas en lugar de desaparecer (Android e iOS)",
          "Glifos de mosaico de bloques, braille y sextantes dibujados por la propia app, para que chafa, timg y el arte ANSI encajen exactamente en lugar de mostrar cuadros vacíos (Android)",
          "En una TUI con seguimiento del ratón, un toque equivale a un clic — htop, vim y la selección de paneles funcionan al tacto (Android)",
          "El encabezado del panel indica el directorio de trabajo real del panel, consultado a tmux o comunicado por el shell mediante OSC 7 (Android)",
          "Fila de teclas extra de trece teclas — ESC, TAB, CTRL, flechas, Home, End, PgUp, PgDn y alternar teclado — que salta a una segunda fila en lugar de desplazarse y recoge el resto en un menú desbordado, para que ninguna tecla quede fuera de la pantalla",
          "Personaliza la fila en Android e iOS: añade desde una paleta de unos 45 predefinidos que incluye F1–F12, combinaciones con Ctrl y símbolos; quita, reordena, oculta, define tus propias teclas de secuencia de escape y restablece los valores predeterminados, con vista previa en vivo",
          "Toque para enfocar, ajuste opcional «toque para mostrar el teclado», acciones de copiar y copiar todo",
          "Ajuste del tamaño de texto con pellizco y redimensionado del terminal remoto",
          "Modo pantalla completa con doble toque",
          "Selección de texto del terminal con acciones Copiar, Compartir y Seleccionar todo — una pulsación larga selecciona la palabra, y Copiar mantiene la selección para compartirla o volver a copiarla",
          "Portapapeles OSC 52 — copia texto de una sesión remota de tmux o vim directamente al portapapeles del teléfono (Android e iOS)",
          "Entrada de teclado nativa de paso directo — sin autocorrección peleando con el shell; el dictado por voz del teclado en pantalla sigue funcionando",
          "Compatibilidad con teclados externos y Bluetooth en Android e iOS, incluyendo flechas, teclas de función y combinaciones Ctrl/Alt",
          "Pegado entre corchetes (bracketed paste) para que el contenido multilínea del portapapeles no se ejecute automáticamente",
          "La Nerd Font incluida muestra glifos powerline, starship, devicon e iconos de Material Design en Android e iOS que la fuente del sistema mostraría como cuadros vacíos",
          "Los caracteres CJK anchos, los emoji y los caracteres combinantes se miden y dibujan correctamente en Android e iOS, incluyendo clústeres de grafemas y uniones de ancho cero (zero-width joiners)",
          "Fuente de terminal configurable (monoespaciada del sistema, JetBrains Mono o Source Code Pro) y esquema de colores ANSI (Solarized, Gruvbox, Dracula, Nord) en Android e iOS, aplicados en vivo a los paneles abiertos",
          "Un control deslizante del tamaño del texto del terminal en Ajustes, junto al zoom con pellizco, y un tema de la app configurable en Sistema, Claro u Oscuro"
        ]
      },
      {
        title: "Sesiones",
        items: [
          "Hasta ocho sesiones SSH simultáneas",
          "Disposición en cuadrícula para las sesiones activas",
          "Resiliencia en segundo plano y con la pantalla bloqueada: en Android, un servicio en primer plano mantiene en marcha shells y agentes aunque descartes la app de recientes; en iOS, el auto-attach de tmux vuelve a adjuntar tu shell",
          "Keepalives e intentos de reconexión con retroceso exponencial — hasta diez intentos, y los fallos frente a una red que ya has abandonado no cuentan para ese límite",
          "Cambiar de Wi-Fi, datos móviles o VPN vuelve a marcar de inmediato en lugar de esperar a que expire la ruta muerta, y una sesión que ya está en retroceso lo reintenta en cuanto aparece una red utilizable",
          "Un servidor que ha dejado de responder en silencio — una máquina virtual suspendida, un host de salto atascado — se detecta por los sondeos keepalive sin respuesta y se reconecta, en lugar de tragarse tus pulsaciones sin decir nada (iOS)",
          "Acceso a Sesiones activas desde la pantalla inicial; la notificación permanente lista las sesiones — toca para abrir",
          "Seguimiento de comandos de tmux y sugerencias de reattach para trabajos interrumpidos, con una opción por servidor de qué adjuntar al conectar: detección automática, nada, tmux, herdr o Zellij (Android)",
          "Los agentes se identifican a través del terminal, así que la app sabe qué agente es, qué herramienta está ejecutando y si está bloqueado esperándote — el panel se tiñe de ámbar, su encabezado indica «claude · te necesita» y un distintivo de la barra de herramientas cuenta cuántos esperan",
          "Responde a la pregunta de un agente con un toque desde la lista de agentes; la respuesta viaja por un canal aparte, así que nunca se escribe sobre lo que hay en pantalla",
          "Instala el hook de agente en un servidor desde la propia app — un pequeño script de shell que cualquier agente puede invocar, no la integración de un proveedor concreto",
          "Transporte Eternal Terminal (ET) para sesiones que sobreviven a cortes de red, modo de suspensión y cambios de IP, con instalación automática opcional de etserver por SSH",
          "Gestor de tmux: lista y cambia entre sesiones, ventanas y paneles — adjunta, renombra, crea, divide, amplía o cierra, con ordenación por nombre/fecha y un 🔔 para los agentes que esperan intervención",
          "Gestores de herdr y Zellij en Android e iOS, cada uno con el mismo alcance sobre sus propias sesiones, pestañas y paneles — la barra de herramientas muestra un icono solo cuando ese programa se encuentra en el servidor"
        ]
      },
      {
        title: "Archivos y túneles",
        items: [
          "Explorador SFTP de doble panel para archivos locales y remotos, con un registro que muestra todas las transferencias y se puede desplazar",
          "Operaciones de subida y descarga en cola; en Android, comparte cualquier archivo desde otra app hacia la sesión en curso y su ruta remota se escribe en el prompt",
          "Subida y descarga recursiva de carpetas entre el teléfono y el host remoto",
          "Acciones remotas de renombrar, borrar, crear, editar, comprimir a .tar.gz, permisos (chmod/chown) y ver detalles",
          "Abre un archivo descargado en otra app en ambas plataformas — en iOS las descargas aparecen además en la app Archivos, dentro de «En mi iPhone»",
          "En Android, la transferencia de archivos se reabre donde lo dejó esa sesión de tmux, con el nombre de la sesión en el encabezado del panel, y recurre a los directorios que más usas en ese host cuando no hay nada que recordar",
          "Ordenar por nombre o fecha con persistencia por host, y volver de un salto a rutas remotas recientes",
          "Tamaños de archivo en unidades binarias, iguales a los que muestra ls -h en el terminal de la pestaña de al lado",
          "Reenvío local de puertos guardado con el perfil del servidor y levantado automáticamente al conectar",
          "Sigue el tema claro u oscuro del sistema en toda la app y el explorador de archivos — elige Sistema, Claro u Oscuro en Android e iOS"
        ]
      },
      {
        title: "Localización",
        items: [
          "Traducciones de la interfaz: árabe, bengalí, chino (simplificado y tradicional), inglés, francés, alemán, hindi, indonesio, japonés, marathi, portugués, ruso, español, tamil, telugu, turco y urdu — veinte idiomas en Android, que añade además pidgin nigeriano y árabe egipcio, y dieciocho en iOS",
          "Sigue el idioma del sistema de forma predeterminada, y Ajustes incluye un selector de idioma si quieres la app en un idioma distinto al del teléfono"
        ]
      },
      {
        title: "Claves y copia de seguridad",
        items: [
          "Genera nuevas claves Ed25519 o ECDSA en el dispositivo (RSA también en Android), con una frase de contraseña opcional",
          "Copia, comparte o guarda una clave pública generada para añadirla al authorized_keys del servidor",
          "Exporta servidores y credenciales guardados a un archivo de copia de seguridad — todos, o marca solo las filas que quieras; tocar la cabecera de una carpeta selecciona la carpeta entera",
          "Una frase de contraseña opcional cifra la copia; importa con fusión o reemplazo",
          "Una copia sin cifrar guarda contraseñas y claves en texto plano: protege o elimina el archivo"
        ]
      },
      {
        title: "Seguridad",
        items: [
          "Pantalla segura: en Android, bloquea las capturas de pantalla y la grabación de pantalla y oculta la app de la miniatura de recientes; en iOS, oculta la vista previa del selector de apps y bloquea la grabación de pantalla y la duplicación de pantalla (en iOS no se puede bloquear una captura de pantalla manual) — un ajuste opcional para cuando hay contraseñas, claves o tokens en pantalla",
          "Los servidores, las credenciales y las claves guardados permanecen en el dispositivo — los secretos residen en el Keystore de Android y en el Keychain de iOS, sin cuenta ni sincronización en la nube",
          "Solo analíticas de uso anónimas — nunca tus servidores, credenciales, comandos ni el contenido de tus archivos. Android tiene un interruptor en Ajustes para desactivarlas; iOS todavía no lo tiene"
        ]
      },
      {
        title: "Complementos",
        items: [
          "Explora, instala y ejecuta complementos para ampliar Mobile SSH",
          "Los complementos se descargan bajo demanda desde un catálogo público y se verifican con SHA-256 en el almacenamiento privado de la app",
          "Un complemento declara lo que necesita — comandos SSH, un túnel, almacenamiento — y la app le niega todo lo que no haya pedido",
          "Cuando un complemento configura algo en tu servidor, ves antes los comandos exactos y los apruebas antes de que se ejecuten",
          "Configura una fuente de catálogo personalizada o privada, o instala desde una carpeta en tu propio servidor"
        ]
      }
    ],
    security:
      "Nota de seguridad: la app actual guarda los perfiles de servidor y las credenciales localmente en el dispositivo (en iOS los secretos se guardan en el Keychain del sistema). No ofrece sincronización en la nube. Protege el dispositivo con un bloqueo de pantalla fuerte y evita guardar credenciales en dispositivos compartidos."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius en el móvil",
    metaDescription:
      "Comparación equilibrada de Mobile SSH, Termux y Termius para flujos SSH en Android e iOS.",
    eyebrow: "Opciones SSH móviles",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Estas herramientas coinciden en torno a SSH, pero están pensadas para trabajos distintos. Mobile SSH es un cliente SSH/SFTP enfocado para Android e iOS, Termux es un entorno Linux solo para Android y Termius es un cliente SSH multiplataforma con funciones de productividad basadas en cuenta.",
    columns: {
      need: "Necesidad",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Propósito principal",
        mobileSsh: "Cliente dedicado de SSH, SFTP, túnel local y terminal para Android e iOS.",
        termux: "Emulador de terminal y entorno Linux para Android con paquetes APT.",
        termius: "Cliente SSH moderno para Android, iOS, escritorio y flujos de trabajo en equipo orientados a la web."
      },
      {
        need: "Estilo de configuración",
        mobileSsh: "Introduce un host o guarda un perfil de servidor y conéctate directamente.",
        termux: "Instala paquetes como OpenSSH, configura herramientas de shell y trabaja desde una línea de comandos al estilo Linux.",
        termius: "Crea o sincroniza hosts, claves, snippets y bóveda a través de la app y la cuenta de Termius."
      },
      {
        need: "Controles de terminal móviles",
        mobileSsh: "Fila de teclas extra integrada, sesiones en cuadrícula, paneles a pantalla completa, zoom con pellizco, selección de texto con copiar/compartir y desplazamiento compatible con tmux — con escritura nativa de paso directo y compatibilidad con teclados externos en ambas plataformas.",
        termux: "Entorno de terminal potente; el comportamiento depende de las herramientas y la configuración instaladas.",
        termius: "Complemento de teclado móvil, gestos, pestañas, autocompletado, snippets y una UX de terminal pulida."
      },
      {
        need: "Transferencia de archivos",
        mobileSsh: "Transferencia SFTP de doble panel integrada vinculada a la sesión SSH activa.",
        termux: "Utiliza herramientas de línea de comandos como scp, sftp, rsync o utilidades de archivos instaladas.",
        termius: "Funciones integradas de SFTP y gestión de hosts/claves."
      },
      {
        need: "Trabajo multi-sesión",
        mobileSsh: "Hasta ocho sesiones SSH simultáneas en una cuadrícula.",
        termux: "Utiliza multiplexores como tmux dentro de Termux o en shells remotas.",
        termius: "Pestañas y vista dividida según la plataforma y el plan."
      },
      {
        need: "Modelo de datos",
        mobileSsh: "Servidores guardados, credenciales, historial, ajustes y registros solo locales.",
        termux: "Sistema de archivos al estilo Linux y paquetes dentro del entorno de la app Termux.",
        termius: "Bóvedas cifradas para hosts, claves, snippets, reglas de reenvío, known hosts y uso compartido en equipo."
      },
      {
        need: "Mejor caso de uso",
        mobileSsh: "Quieres una app sencilla en Android o iOS para conectarte a servidores, transferir archivos y mantener sesiones activas.",
        termux: "Quieres un entorno de línea de comandos completo en Android y te resulta cómodo instalar y configurar paquetes.",
        termius: "Quieres sincronización entre dispositivos, funciones de productividad pulidas, bóvedas y colaboración."
      }
    ],
    cards: [
      {
        title: "Elige Mobile SSH cuando",
        body: "Quieres acceso SSH directo desde tu teléfono o tableta — Android o iOS — sin montar un entorno Linux completo ni una cuenta sincronizada en la nube. Es especialmente apropiado para servidores guardados, SFTP, sesiones de tmux y flujos rápidos de túnel local."
      },
      {
        title: "Elige Termux cuando",
        body: "Necesitas gestor de paquetes, shells, compiladores, scripting, rsync, curl, Git, Python, Node.js u otras herramientas al estilo Linux directamente en el dispositivo Android."
      },
      {
        title: "Elige Termius cuando",
        body: "Quieres un espacio de trabajo SSH comercial y multiplataforma con bóveda cifrada sincronizada, uso compartido en equipo, gestión de llaveros, snippets y una app coherente en varios dispositivos."
      }
    ],
    featureHeading: "Función por función",
    featureRows: [
      { category: "Conexión",          feature: "Funciona en Android e iOS",                         mobile: "yes",     termux: "Solo Android", termius: "yes" },
      { category: "Conexión",          feature: "Perfiles de servidor guardados",                   mobile: "yes",     termux: "mediante ssh config", termius: "yes" },
      { category: "Conexión",          feature: "Búsqueda de servidores guardados",                  mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexión",          feature: "Carpetas / grupos de servidores",                   mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexión",          feature: "Selector Añadir sesión con búsqueda primero",       mobile: "Android", termux: "no",           termius: "no" },
      { category: "Conexión",          feature: "Múltiples direcciones por servidor (roaming LAN/VPN)", mobile: "yes", termux: "no",           termius: "no" },
      { category: "Conexión",          feature: "Registros de credenciales reutilizables",           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexión",          feature: "La pantalla de inicio lista a qué volver",          mobile: "yes",     termux: "no",           termius: "parcial" },
      { category: "Conexión",          feature: "Lista de sesiones de tmux sin conexión (no hace falta conectarse)", mobile: "yes", termux: "no", termius: "no" },
      { category: "Conexión",          feature: "Nombres de servidor mostrados en lugar de la dirección", mobile: "yes", termux: "no",        termius: "yes" },
      { category: "Conexión",          feature: "Registro de inicios de sesión",                     mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Conexión",          feature: "Transporte por proxy de Teleport (experimental)",   mobile: "Android", termux: "no",           termius: "no" },
      { category: "Conexión",          feature: "Hosts IPv6 y destinos de reenvío",                  mobile: "yes",     termux: "yes",          termius: "parcial" },
      { category: "Terminal",          feature: "Terminal SSH",                                       mobile: "yes",     termux: "mediante OpenSSH",  termius: "yes" },
      { category: "Terminal",          feature: "Emulación xterm-256color",                          mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Scrollback configurable (1000–50 000 líneas)",      mobile: "yes",     termux: "configurable", termius: "parcial" },
      { category: "Terminal",          feature: "Búsqueda en el terminal (scrollback)",              mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",          feature: "Fila de teclas extra (ESC/TAB/CTRL/…)",             mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Ajuste de texto con pellizco",                      mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Doble toque para pantalla completa",                mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",          feature: "URL tappables en la salida del terminal",           mobile: "yes",     termux: "parcial",      termius: "yes" },
      { category: "Terminal",          feature: "Selección de texto: copiar / compartir / todo",     mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Compatibilidad con teclado por hardware / Bluetooth", mobile: "yes",   termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Integración con el shell (OSC 133)",                mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",          feature: "Imágenes en línea (gráficos Kitty)",                mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",          feature: "Glifos de mosaico dibujados por la app (chafa, arte ANSI)", mobile: "Android", termux: "depende de la fuente", termius: "no" },
      { category: "Terminal",          feature: "El toque actúa como clic en las TUI con modo de ratón", mobile: "Android", termux: "yes",      termius: "no" },
      { category: "Terminal",          feature: "Representación de glifos Nerd Font / powerline",     mobile: "yes",     termux: "configurable", termius: "parcial" },
      { category: "Sesiones",          feature: "Varias sesiones SSH simultáneas",                   mobile: "hasta 8", termux: "hasta 8",      termius: "yes" },
      { category: "Sesiones",          feature: "Disposición en cuadrícula",                         mobile: "yes",     termux: "mediante tmux", termius: "pestañas" },
      { category: "Sesiones",          feature: "Desplazamiento compatible con tmux",                mobile: "yes",     termux: "yes",          termius: "no" },
      { category: "Sesiones",          feature: "Sugerencias de reattach de tmux al reconectar",     mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sesiones",          feature: "Alertas de agente (Claude Code / Codex)",           mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sesiones",          feature: "Notificación permanente con lista de sesiones",      mobile: "Android", termux: "parcial",      termius: "no" },
      { category: "Sesiones",          feature: "Servicio en primer plano y wake lock",              mobile: "Android", termux: "yes",          termius: "parcial" },
      { category: "Sesiones",          feature: "Reconexión automática con retroceso",               mobile: "yes",     termux: "mediante autossh", termius: "yes" },
      { category: "Archivos",          feature: "Interfaz de transferencia SFTP integrada",          mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Archivos",          feature: "Explorador local + remoto de doble panel",          mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Archivos",          feature: "Cola de subida / descarga",                         mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Archivos",          feature: "Renombrar / borrar / crear en remoto",              mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Archivos",          feature: "Vista de permisos de archivos remotos",             mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Archivos",          feature: "Ordenar por nombre o fecha por host",               mobile: "yes",     termux: "no",           termius: "parcial" },
      { category: "Túneles",           feature: "Reenvío local de puertos",                          mobile: "yes",     termux: "mediante CLI",      termius: "yes" },
      { category: "Túneles",           feature: "Túneles guardados con el perfil del servidor",      mobile: "yes",     termux: "mediante ssh config", termius: "yes" },
      { category: "Túneles",           feature: "Añadir / quitar túneles en tiempo de ejecución",   mobile: "no",      termux: "no",           termius: "yes" },
      { category: "Claves",            feature: "Autenticación por contraseña",                      mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Claves",            feature: "Autenticación por clave privada",                   mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Claves",            feature: "Generación de claves en el dispositivo",            mobile: "yes",     termux: "mediante ssh-keygen", termius: "yes" },
      { category: "Claves",            feature: "Compartir / guardar clave pública generada",        mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Copia de seguridad", feature: "Exportar / importar copia de seguridad",          mobile: "yes",     termux: "mediante termux-backup", termius: "bóveda en la nube Pro" },
      { category: "Copia de seguridad", feature: "Copia de seguridad local cifrada",                mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Copia de seguridad", feature: "Sin cuenta requerida",                            mobile: "yes",     termux: "yes",          termius: "parcial" },
      { category: "Privacidad y coste", feature: "Sin muro de pago Pro",                            mobile: "yes",     termux: "yes",          termius: "parcial" },
      { category: "Privacidad y coste", feature: "Sin anuncios",                                    mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Privacidad y coste", feature: "Desactivar analíticas",                           mobile: "Android", termux: "sin analíticas", termius: "no" },
      { category: "Privacidad y coste", feature: "Datos solo locales (sin sincronización en la nube)", mobile: "yes", termux: "yes",          termius: "parcial" },
      { category: "Privacidad y coste", feature: "Pantalla segura (bloquear la captura de pantalla)", mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sesiones",          feature: "Eternal Terminal (sesiones resilientes)",             mobile: "yes",     termux: "mediante CLI",      termius: "no" },
      { category: "Sesiones",          feature: "Instalación automática de etserver por SSH",          mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sesiones",          feature: "Gestor de sesiones de tmux",                          mobile: "yes",     termux: "mediante CLI",      termius: "no" },
      { category: "Sesiones",          feature: "Gestores de sesiones de herdr y Zellij",              mobile: "yes"    , termux: "mediante CLI",      termius: "no" },
      { category: "Sesiones",          feature: "Respuestas con un toque a un agente bloqueado",       mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Complementos",      feature: "Compatibilidad con complementos",                     mobile: "yes",     termux: "mediante paquetes", termius: "no" },
      { category: "Complementos",      feature: "Catálogo de complementos bajo demanda",               mobile: "yes",     termux: "no",           termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH vs apps de agentes de programación de IA",
    agentAppsIntro:
      "Existe una categoría de apps en rápido crecimiento creadas solo para manejar agentes de programación — Claude Code, Codex y similares — desde tu teléfono. Algunas son apps de terceros de SSH o de relé (Onepilot, Happy, Omnara); OpenAI y Anthropic ahora también lo ofrecen de forma nativa, con Codex dentro de la app ChatGPT y Claude Code dentro de la app Claude, ambos ejecutándose en la propia nube del proveedor. Mobile SSH se solapa con todas ellas — puedes ejecutar esos agentes por SSH y recibir alertas cuando te necesitan — pero aborda la tarea desde el otro lado: es ante todo un cliente SSH general y directo, y en segundo lugar un compañero para agentes.",
    agentAppsRows: [
      { feature: "Ejecuta agentes de programación desde tu teléfono",              mobile: "yes", onepilot: "yes",       happy: "yes",        omnara: "yes",       chatgpt: "yes",              claude: "yes" },
      { feature: "Funciona con cualquier agente de programación (no de un solo proveedor)", mobile: "yes", onepilot: "yes", happy: "Claude Code", omnara: "yes",     chatgpt: "Solo Codex",       claude: "Solo Claude Code" },
      { feature: "Se ejecuta en tu propia máquina (no en la nube de un proveedor)", mobile: "yes", onepilot: "yes",       happy: "yes",        omnara: "yes",       chatgpt: "no",               claude: "parcial" },
      { feature: "SSH directo — sin relé en la nube",                             mobile: "yes", onepilot: "yes",       happy: "no",         omnara: "no",        chatgpt: "no",               claude: "no" },
      { feature: "Terminal SSH general (ejecuta cualquier comando)",              mobile: "yes", onepilot: "yes",       happy: "no",         omnara: "parcial",   chatgpt: "no",               claude: "no" },
      { feature: "Transferencia de archivos SFTP",                                mobile: "yes", onepilot: "parcial",   happy: "no",         omnara: "no",        chatgpt: "no",               claude: "no" },
      { feature: "Reenvío local de puertos",                                      mobile: "yes", onepilot: "yes",       happy: "no",         omnara: "no",        chatgpt: "no",               claude: "no" },
      { feature: "Gestor de sesiones de tmux",                                    mobile: "yes", onepilot: "parcial",   happy: "no",         omnara: "no",        chatgpt: "no",               claude: "no" },
      { feature: "Funciona con un agente que hayas instalado tú",                 mobile: "yes", onepilot: "yes",       happy: "yes",        omnara: "yes",       chatgpt: "no",               claude: "no" },
      { feature: "Alertas de agente (aviso push cuando el agente necesita entrada)", mobile: "yes", onepilot: "yes",   happy: "yes",        omnara: "yes",       chatgpt: "yes",              claude: "yes" },
      { feature: "Aprobar/denegar las solicitudes del agente con un toque",       mobile: "yes", onepilot: "yes",       happy: "yes",        omnara: "yes",       chatgpt: "yes",              claude: "yes" },
      { feature: "Cero configuración de servidor o SSH",                          mobile: "no",  onepilot: "no",        happy: "parcial",    omnara: "parcial",   chatgpt: "yes",              claude: "yes" },
      { feature: "Android e iOS",                                                 mobile: "yes", onepilot: "Solo iOS",  happy: "yes",        omnara: "yes",       chatgpt: "yes",              claude: "yes" },
      { feature: "Sin cuenta requerida",                                          mobile: "yes", onepilot: "yes",       happy: "yes",        omnara: "no",        chatgpt: "no",               claude: "no" },
      { feature: "Sin muro de pago Pro (todas las funciones gratis)",             mobile: "yes", onepilot: "no",        happy: "no",         omnara: "no",        chatgpt: "plan gratuito",    claude: "no" },
      { feature: "Código abierto",                                                mobile: "Apache 2.0",  onepilot: "no",        happy: "MIT",        omnara: "Apache",    chatgpt: "no",               claude: "no" }
    ],
    agentAppsNote:
      "Las apps nativas de ChatGPT y Claude son la forma más fluida de ejecutar el agente de un solo proveedor sin ninguna configuración — sin servidor, solo una cuenta — y añaden una pulida pantalla de aprobar/denegar con un toque. La pega: ejecutan únicamente su propio modelo en su propia nube, sin terminal general, sin SFTP ni túneles, y sin la opción de usar tu propia máquina, y son de pago o requieren cuenta. Onepilot, Happy y Omnara mantienen el agente en hardware que tú controlas (Onepilot mediante SSH directo; Happy y Omnara mediante un relé en la nube, y Omnara necesita una cuenta). Mobile SSH se conecta directamente a tu propio servidor sin cuenta ni relé del proveedor, ejecuta cualquier agente junto a un terminal completo, SFTP y reenvío de puertos, y todas las funciones son gratis. Ahora responde a las solicitudes del agente igual que ellas — una lista de agentes que muestra todos los agentes de todas las conexiones, con un botón por opción — con la diferencia de que el agente se ejecuta en tu máquina y la respuesta viaja por tu propia conexión SSH. La contrapartida es la de siempre: tú pones el servidor, y hay que instalar en él el hook del agente una vez.",
  },
  privacy: {
    metaTitle: "Política de privacidad | Mobile SSH",
    metaDescription:
      "Política de privacidad de Mobile SSH, incluyendo almacenamiento local, transmisión de datos SSH, transferencia de archivos, registros y permisos de la app en Android e iOS.",
    eyebrow: "Privacidad",
    h1: "Política de privacidad",
    intro:
      "Mobile SSH está diseñado como un cliente SSH local para Android e iOS. No requiere una cuenta de Mobile SSH ni ofrece un servicio de sincronización en la nube.",
    sections: [
      {
        heading: "Información almacenada en tu dispositivo",
        body: "Si decides guardar datos en la app, Mobile SSH los almacena localmente en el dispositivo. En iOS los secretos se guardan en el Keychain del sistema; en Android se cifran con una clave alojada en el Keystore de Android que no se puede exportar fuera del dispositivo, y la app se excluye de la copia de seguridad en la nube de Android. Esto puede incluir perfiles de servidor guardados, nombres de usuario, puertos, contraseñas, claves privadas, frases de paso, reglas de reenvío de puertos, sesiones recientes, historial de intentos de inicio de sesión, rutas de transferencia, preferencias de orden de archivos, instantáneas de sesiones de tmux y sugerencias de reattach, ajustes de la app y registros de depuración cuando la grabación de depuración está activa."
      },
      {
        heading: "Información enviada a través de la red",
        body: "Mobile SSH envía datos de autenticación SSH solo a los servidores que tú configuras y a los que te conectas. La entrada/salida del terminal, el contenido de los archivos SFTP y el tráfico reenviado por puertos locales se intercambian con los servidores y puntos finales remotos que tú eliges. Mobile SSH no envía esos datos a ningún servicio de analíticas, publicidad, telemetría o sincronización en la nube de Mobile SSH."
      },
      {
        heading: "Transferencia de archivos y acceso al almacenamiento",
        body: "La función de transferencia de archivos navega por el almacenamiento local del teléfono y los directorios remotos por SFTP para que puedas subir y bajar archivos. Mobile SSH no pide a Android un permiso de almacenamiento amplio: eliges una única carpeta con el selector de carpetas del sistema y la app solo puede leer y escribir dentro de ella. En iOS, se accede a los archivos locales y a las fotos a través de los selectores de documentos y fotos del sistema."
      },
      {
        heading: "Registros y solución de problemas",
        body: "El historial de inicios de sesión y los registros opcionales de depuración se guardan localmente para diagnóstico, y ambos están desactivados o vacíos hasta que tú los actives. El grabador de depuración de Android captura eventos del terminal, tamaños de datos SSH, diagnósticos de entrada táctil, eventos de redimensionamiento y eventos de ciclo de vida de túneles — antes de empezar te advierte de que eso incluye todas las teclas que pulses, contraseñas incluidas, y guarda un archivo comprimido en tu carpeta de Descargas. iOS registra un log distinto y más acotado: las direcciones que marcó y por qué falló cada una, las reconexiones y su retroceso, las conexiones caídas, los cambios de red y los comandos de tmux con sus errores. Revisa cualquier registro o archivo de depuración antes de compartirlo con soporte u otra persona."
      },
      { heading: "Analíticas de uso anónimas", body: "Para entender cómo se usa la app y mejorarla, Mobile SSH envía analíticas de uso anónimas a Aptabase, un proveedor de analíticas centrado en la privacidad que actúa en nuestro nombre. Se limita a eventos anónimos (como aperturas de la app y qué funciones se usan) junto con la versión de la app, la versión del sistema operativo, el modelo del dispositivo y el idioma. Usa un identificador de sesión aleatorio que se restablece con regularidad y no está vinculado a ti ni a tu dispositivo. Nunca incluye tus servidores SSH, nombres de host, usuarios, contraseñas, claves, comandos ni el contenido de archivos. Los datos se envían por una conexión cifrada (HTTPS). Las analíticas están activadas de forma predeterminada. En Android puedes desactivarlas en cualquier momento en Ajustes y, cuando están desactivadas, no se envía nada; la app de iOS todavía no ofrece ese interruptor, así que en iOS estos eventos anónimos se envían mientras la app siga instalada. Tenemos previsto añadir el interruptor en iOS — hasta entonces, esta página describe la situación tal y como es." }
    ],
    permissionsHeading: "Permisos",
    permissions: [
      { label: "Internet", body: "necesario para conectarse a servidores SSH." },
      { label: "Wake lock y Wi-Fi lock", body: "se usan en Android para mantener activas las sesiones SSH mientras el dispositivo duerme." },
      { label: "Servicio en primer plano y notificaciones", body: "se usan en Android para gestionar conexiones activas en segundo plano; en iOS, las notificaciones se usan para las alertas de agente." },
      { label: "Acceso a archivos", body: "se concede por carpeta mediante el selector del sistema en Android, y a través de los selectores de documentos y fotos del sistema en iOS. Mobile SSH no solicita un permiso de almacenamiento general en ninguna de las dos plataformas." }
    ],
    securityHeading: "Responsabilidades de seguridad",
    securityBody:
      "Protege tu dispositivo con un bloqueo de pantalla fuerte si guardas credenciales o claves privadas. Conéctate solo a servidores en los que confíes. La implementación actual usa almacenamiento local de la app (y el Keychain de iOS), no una bóveda cifrada en la nube. Un ajuste opcional de Pantalla segura añade protección cuando hay secretos en pantalla: en Android bloquea las capturas de pantalla y la grabación de pantalla y oculta la app de la vista de recientes; en iOS oculta la vista previa del selector de apps y bloquea la grabación de pantalla y la duplicación de pantalla (en iOS no se puede bloquear una captura de pantalla manual).",
    contactHeading: "Contacto",
    contactBody: "Contacto de soporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentación | Mobile SSH",
    metaDescription: "Documentación de usuario de Mobile SSH para Android e iOS.",
    eyebrow: "Guía de usuario",
    h1: "Documentación de Mobile SSH",
    intro:
      "Usa estas páginas como guía pública para instalar, conectar, gestionar sesiones, transferir archivos, reenviar puertos y solucionar problemas de Mobile SSH.",
    cards: [
      { slug: "getting-started",  title: "Primeros pasos",            text: "Instala, abre la app, conéctate a tu primer servidor y guarda hosts habituales." },
      { slug: "terminal",         title: "Terminal",                  text: "Usa paneles, la fila de teclas extra, el desplazamiento, las acciones de copia, el comportamiento de tmux y los ajustes de teclado." },
      { slug: "file-transfer",    title: "Transferencia de archivos", text: "Explora archivos del teléfono y del servidor, sube, descarga, ordena e inspecciona detalles remotos." },
      { slug: "port-forwarding",  title: "Reenvío de puertos",        text: "Escribe cadenas de túnel locales, reenvía a destinos IPv6 y haz que se levanten al conectar." },
      { slug: "troubleshooting",  title: "Solución de problemas",     text: "Soluciona problemas de conexión, autenticación, teclado, almacenamiento y reconexión." }
    ]
  },
  docsNav: {
    home: "Inicio de docs",
    gettingStarted: "Primeros pasos",
    terminal: "Terminal",
    fileTransfer: "Transferencia de archivos",
    portForwarding: "Reenvío de puertos",
    troubleshooting: "Solución de problemas"
  },
  about: {
    metaTitle: "Acerca de | Mobile SSH",
    metaDescription: "Acerca de Mobile SSH: versión, autor, licencia y avisos de código abierto del cliente SSH para Android e iOS.",
    eyebrow: "Acerca de",
    h1: "Acerca de Mobile SSH",
    intro: "Cliente SSH multi-sesión con tmux, reenvío de puertos y SFTP.",
    appHeading: "Acerca de la app",
    versionLabel: "Versión",
    authorLabel: "Autor",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "Licencia",
    licenseValue: "Apache 2.0",
    websiteLabel: "Sitio web",
    privacyLabel: "Política de privacidad",
    privacyLinkText: "Política de privacidad",
    noticesHeading: "Avisos de código abierto",
    noticesIntro: "Mobile SSH está construido sobre las siguientes bibliotecas de código abierto. Cada una se usa bajo su licencia correspondiente.",
    notices: [
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto" }
    ],
    contactHeading: "Contacto",
    contactBody: "Contacto de soporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
