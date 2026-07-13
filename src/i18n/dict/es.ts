import type { Dict } from "../types";

export const es: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Idioma",
    languageSwitcher: "Cambiar idioma"
  },
  nav: {
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
      { title: "Alertas de agente", text: "Recibe una notificación — con sonido y vibración — en el momento en que Claude Code, Codex u otro agente remoto necesite tu intervención. Se reproduce por los auriculares incluso durante el vídeo." },
      { title: "Teclas de terminal sobre el teclado", text: "Fila dedicada con ESC, TAB, CTRL, ALT, FN, flechas, Home, End, PgUp/PgDn en Android e iOS — teclas de terminal sin pelear con la autocorrección." },
      { title: "Reenvío de puertos sin comandos", text: "Los túneles se asocian al perfil del servidor y se levantan al conectar." },
      { title: "Sobrevive al bloqueo y al roaming", text: "Asigna varias direcciones a un servidor guardado — una IP de LAN doméstica y una IP de VPN — y Mobile SSH marca la que responda, probando primero la última que funcionó, y se reconecta en cuanto cambia la red. En Android, un servicio en primer plano y wake locks mantienen las shells vivas con la pantalla apagada; en iOS, la reconexión automática más el auto-attach de tmux te devuelven donde lo dejaste." },
      { title: "Eternal Terminal", text: "Un transporte ET opcional mantiene la shell remota activa a través de cortes de red, modo de suspensión y cambios de IP. ¿Sin etserver en el host? Mobile SSH puede instalarlo por SSH por ti." },
      { title: "Amplíalo con complementos", text: "Explora un catálogo público e instala complementos bajo demanda para añadir nuevos flujos de trabajo. Cada complemento se descarga y se verifica con SHA-256 en el almacenamiento privado de la app." }
    ],
    sectionAHead: "Diseñado para el trabajo SSH móvil",
    sectionAIntro:
      "Mobile SSH acorta el camino habitual de administración: guarda un servidor, conéctate, mantén las sesiones activas, mueve archivos cuando lo necesites y vuelve rápido a tus terminales en uso.",
    features: [
      { title: "Terminal SSH", text: "Emulación de terminal xterm-256color con scrollback de 5000 líneas, color, teclas de cursor, copiar/compartir y ajuste de texto con pellizco." },
      { title: "Cuadrícula multi-sesión", text: "Hasta ocho sesiones SSH en una cuadrícula redimensionable — toca un panel para enfocarlo, doble toque para pantalla completa, pellizca para ajustar el texto." },
      { title: "Enlaces tappables", text: "Las URL en el terminal aparecen subrayadas y se abren en el navegador con un toque — sin copiar ni cambiar de app." },
      { title: "Carpetas de servidores", text: "Organiza los servidores guardados en grupos contraíbles. Toca la cabecera de un grupo para contraerlo; la estructura de carpetas se mantiene en el selector de conexión rápida." },
      { title: "Alertas de agente", text: "Notificación con sonido y vibración cuando un agente remoto (Claude Code, Codex, etc.) necesita tu intervención. Se reproduce por los auriculares incluso durante las videollamadas." },
      { title: "Claves privadas", text: "Autenticación por contraseña o clave privada. Genera claves Ed25519 o ECDSA en el dispositivo (RSA también en Android); importa o pega claves existentes." },
      { title: "Transferencia SFTP", text: "Explorador de archivos de doble panel vinculado a una sesión SSH activa. Encola subidas y descargas, renombra, elimina e inspecciona permisos remotos." },
      { title: "Reenvío de puertos", text: "Guarda especificaciones de túnel locales con un perfil de servidor — los túneles se abren automáticamente al conectar, o añade/elimina mientras estás conectado." },
      { title: "Flujo de reconexión", text: "Keepalives y reconexión con retroceso exponencial mantienen las sesiones vivas con la pantalla apagada y en roaming — con el respaldo de un servicio en primer plano en Android y del auto-attach de tmux en iOS." },
      { title: "Copia de seguridad y restauración", text: "Exporta servidores y credenciales guardados a un archivo de copia de seguridad cifrado; importa con fusión o reemplazo para cambiar de dispositivo — las copias son interoperables entre Android e iOS." },
      { title: "Eternal Terminal", text: "Conéctate mediante Eternal Terminal (ET) para sesiones que sobreviven a cortes de red, modo de suspensión y cambios de IP — con instalación automática opcional de etserver por SSH." },
      { title: "Gestor de tmux", text: "Lista y cambia entre sesiones, ventanas y paneles de tmux — adjunta, renombra, crea, divide, amplía o cierra. Ordena por nombre o fecha; un 🔔 señala los agentes que esperan intervención." },
      { title: "Complementos", text: "Explora, instala y ejecuta complementos para ampliar Mobile SSH. Los complementos se descargan bajo demanda desde un catálogo público y se verifican con SHA-256 en el almacenamiento privado de la app." }
    ],
    multiHead: "Una pantalla, varias shells activas",
    multiP1:
      "La vista de terminal puede contener varias sesiones SSH activas en una cuadrícula. Selecciona un panel para escribir, usa la fila de teclas extra para los controles de terminal, pellizca para ajustar el tamaño del texto y haz doble toque sobre un panel cuando necesites foco a pantalla completa.",
    multiP2:
      "El historial de sesiones y la recuperación de sesiones activas te ayudan a volver al trabajo en curso después de cambiar de app, bloquear la pantalla o que el sistema recupere los recursos de la app.",
    multiAlt:
      "Mobile SSH en un teléfono mostrando dos sesiones SSH activas en una vista dividida en paralelo.",
    sftpHead: "SFTP cuando el terminal no basta",
    sftpBody:
      "Abre la transferencia de archivos desde una sesión conectada para explorar el almacenamiento del teléfono y los directorios remotos. Encola subidas y descargas, ordena los archivos, recuerda rutas recientes por servidor e inspecciona los permisos remotos antes de mover algo.",
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
    videoIntro: "Demostraciones breves en ambas plataformas. Android: un cambio de ventana en tmux, una transferencia de archivos por SFTP, la instalación del complemento AI Chat y una conversación con él, Eternal Terminal y Sesiones recientes con un toque. iOS: servidores guardados en grupos, opciones de conexión con auto-attach de tmux, una sesión de terminal en vivo y el gestor de tmux.",
    videoAlt: "Demo en Android de un cambio de ventana en tmux, una descarga de archivo por SFTP, la instalación y el uso del complemento AI Chat, el transporte Eternal Terminal y las Sesiones recientes",
    videoIosAlt: "Demo en iOS de servidores guardados en grupos, opciones de conexión con auto-attach de tmux y reenvío de puertos, una sesión de terminal SSH en vivo y el gestor de tmux cambiando de ventana",
    lightboxClose: "Cerrar",
    lightboxPrev: "Anterior",
    lightboxNext: "Siguiente",
    betaJoin: "Unirse a la beta",
    betaOr: "o escríbenos a",
    betaRequest: "para solicitar acceso a la beta privada",
    galleryAlts: [
      "Pantalla de inicio de Mobile SSH en un teléfono con los botones Servidores, Credenciales, Registros, Ajustes, Depuración y Acerca de.",
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
      "Pantalla de inicio de Mobile SSH en un teléfono mostrando una lista de Recent Sessions para reanudar una conexión SSH con un toque.",
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
      "Pantalla de conexión de Mobile SSH en un iPhone con una sección de Recientes para reconectar con un toque."
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
          "Android 8.0 o posterior — instálala desde Google Play",
          "iOS 16 o posterior en iPhone y iPad — únete a la beta pública en TestFlight",
          "Las copias de seguridad cifradas son interoperables: exporta en una plataforma e importa en la otra"
        ]
      },
      {
        title: "Conexiones",
        items: [
          "Autenticación por contraseña y por clave privada",
          "Claves privadas Ed25519, RSA, ECDSA y DSA en Android; Ed25519 y ECDSA (P-256/384/521) en iOS",
          "Perfiles de servidor guardados con host, puerto, usuario, credencial, clave privada y especificaciones de túnel opcionales",
          "Búsqueda de servidores guardados por nombre o host",
          "Flujo Añadir sesión con búsqueda primero: elige un servidor guardado en una página de búsqueda dedicada y conéctate con un toque",
          "Varias direcciones por servidor guardado para el roaming entre LAN y VPN — se marcan en orden probando primero la última dirección que funcionó, y la reconexión se activa al cambiar de red",
          "Registros de credenciales reutilizables que pueden seleccionarse al configurar un servidor",
          "Historial de sesiones recientes para reconectar a conjuntos habituales de servidores",
          "Registro de intentos de inicio de sesión, correctos y fallidos, que anota la dirección exacta marcada"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Comportamiento de terminal estilo VT100/xterm-256color",
          "Buffer de scrollback de 5000 líneas",
          "Fila de teclas extra para ESC, TAB, CTRL, Mayús, flechas, Home, End, PgUp, PgDn y cambio de teclado",
          "Toque para enfocar, ajuste opcional «toque para mostrar el teclado», acciones de copiar y copiar todo",
          "Ajuste del tamaño de texto con pellizco y redimensionado del terminal remoto",
          "Modo pantalla completa con doble toque",
          "Selección de texto del terminal con acciones Copiar, Compartir y Seleccionar todo",
          "Entrada de teclado nativa de paso directo — sin autocorrección peleando con el shell; el dictado por voz del teclado en pantalla sigue funcionando",
          "Compatibilidad con teclados externos y Bluetooth en Android e iOS, incluyendo flechas, teclas de función y combinaciones Ctrl/Alt",
          "Pegado entre corchetes (bracketed paste) para que el contenido multilínea del portapapeles no se ejecute automáticamente"
        ]
      },
      {
        title: "Sesiones",
        items: [
          "Hasta ocho sesiones SSH simultáneas",
          "Disposición en cuadrícula para las sesiones activas",
          "Resiliencia en segundo plano y con la pantalla bloqueada: un servicio en primer plano en Android; el auto-attach de tmux vuelve a adjuntar tu shell en iOS",
          "Keepalives e intentos de reconexión con retroceso exponencial",
          "Acceso a Sesiones activas desde la pantalla inicial; la notificación permanente lista las sesiones — toca para abrir",
          "Seguimiento de comandos de tmux y sugerencias de reattach para trabajos interrumpidos",
          "Alertas de agente: notificación con sonido y vibración opcionales cuando un agente remoto (Claude Code, Codex, etc.) necesita intervención; se reproduce por los auriculares durante el vídeo",
          "Transporte Eternal Terminal (ET) para sesiones que sobreviven a cortes de red, modo de suspensión y cambios de IP, con instalación automática opcional de etserver por SSH",
          "Gestor de tmux: lista y cambia entre sesiones, ventanas y paneles — adjunta, renombra, crea, divide, amplía o cierra, con ordenación por nombre/fecha y un 🔔 para los agentes que esperan intervención"
        ]
      },
      {
        title: "Archivos y túneles",
        items: [
          "Explorador SFTP de doble panel para archivos locales y remotos",
          "Operaciones de subida y descarga en cola",
          "Subida y descarga recursiva de carpetas entre el teléfono y el host remoto",
          "Acciones remotas de renombrar, borrar, crear, editar y ver detalles",
          "Ordenar por nombre o fecha con persistencia por host",
          "Reenvío local de puertos guardado con el perfil del servidor",
          "Vista de añadir/quitar túneles en tiempo de ejecución para sesiones conectadas",
          "La transferencia de archivos sigue el tema claro u oscuro del sistema"
        ]
      },
      {
        title: "Localización",
        items: [
          "Traducciones de la interfaz: árabe, bengalí, chino (simplificado y tradicional), inglés, francés, alemán, hindi, indonesio, japonés, marathi, pidgin nigeriano, portugués, ruso, español, tamil, telugu, turco y urdu",
          "Sigue el idioma del sistema en Android e iOS; no requiere un selector dentro de la app"
        ]
      },
      {
        title: "Claves y copia de seguridad",
        items: [
          "Genera nuevas claves Ed25519 o ECDSA en el dispositivo (RSA también en Android), con una frase de contraseña opcional",
          "Copia, comparte o guarda una clave pública generada para añadirla al authorized_keys del servidor",
          "Exporta servidores y credenciales guardados a un archivo de copia de seguridad",
          "Una frase de contraseña opcional cifra la copia; importa con fusión o reemplazo",
          "Una copia sin cifrar guarda contraseñas y claves en texto plano: protege o elimina el archivo"
        ]
      },
      {
        title: "Complementos",
        items: [
          "Explora, instala y ejecuta complementos para ampliar Mobile SSH",
          "Los complementos se descargan bajo demanda desde un catálogo público y se verifican con SHA-256 en el almacenamiento privado de la app",
          "Configura una fuente de catálogo personalizada o privada cuando lo necesites"
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
      { category: "Conexión",          feature: "Perfiles de servidor guardados",                   mobile: "yes",     termux: "mediante ssh config", termius: "yes" },
      { category: "Conexión",          feature: "Búsqueda de servidores guardados",                  mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexión",          feature: "Carpetas / grupos de servidores",                   mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexión",          feature: "Selector Añadir sesión con búsqueda primero",       mobile: "Android", termux: "no",           termius: "no" },
      { category: "Conexión",          feature: "Registros de credenciales reutilizables",           mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexión",          feature: "Historial de sesiones recientes",                   mobile: "yes",     termux: "no",           termius: "yes" },
      { category: "Conexión",          feature: "Registro de inicios de sesión",                     mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",          feature: "Terminal SSH",                                       mobile: "yes",     termux: "mediante OpenSSH",  termius: "yes" },
      { category: "Terminal",          feature: "Emulación xterm-256color",                          mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Buffer de scrollback de 5 000 líneas",              mobile: "yes",     termux: "configurable", termius: "yes" },
      { category: "Terminal",          feature: "Fila de teclas extra (ESC/TAB/CTRL/…)",             mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Ajuste de texto con pellizco",                      mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Doble toque para pantalla completa",                mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",          feature: "URL tappables en la salida del terminal",           mobile: "yes",     termux: "parcial",      termius: "yes" },
      { category: "Terminal",          feature: "Selección de texto: copiar / compartir / todo",     mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Compatibilidad con teclado por hardware / Bluetooth", mobile: "yes",   termux: "yes",          termius: "yes" },
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
      { category: "Túneles",           feature: "Añadir / quitar túneles en tiempo de ejecución",   mobile: "Android", termux: "no",           termius: "yes" },
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
      { category: "Sesiones",          feature: "Eternal Terminal (sesiones resilientes)",             mobile: "yes",     termux: "mediante CLI",      termius: "no" },
      { category: "Sesiones",          feature: "Instalación automática de etserver por SSH",          mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Sesiones",          feature: "Gestor de sesiones de tmux",                          mobile: "yes",     termux: "mediante CLI",      termius: "no" },
      { category: "Complementos",      feature: "Compatibilidad con complementos",                     mobile: "yes",     termux: "mediante paquetes", termius: "no" },
      { category: "Complementos",      feature: "Catálogo de complementos bajo demanda",               mobile: "yes",     termux: "no",           termius: "no" }
    ]
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
        body: "Si decides guardar datos en la app, Mobile SSH los almacena localmente en el dispositivo — en iOS, los secretos se guardan en el Keychain del sistema. Esto puede incluir perfiles de servidor guardados, nombres de usuario, puertos, contraseñas, claves privadas, frases de paso, reglas de reenvío de puertos, sesiones recientes, historial de intentos de inicio de sesión, rutas de transferencia, preferencias de orden de archivos, sugerencias de reattach de tmux, ajustes de la app y registros de depuración cuando la grabación de depuración está activa."
      },
      {
        heading: "Información enviada a través de la red",
        body: "Mobile SSH envía datos de autenticación SSH solo a los servidores que tú configuras y a los que te conectas. La entrada/salida del terminal, el contenido de los archivos SFTP y el tráfico reenviado por puertos locales se intercambian con los servidores y puntos finales remotos que tú eliges. Mobile SSH no envía esos datos a ningún servicio de analíticas, publicidad, telemetría o sincronización en la nube de Mobile SSH."
      },
      {
        heading: "Transferencia de archivos y acceso al almacenamiento",
        body: "La función de transferencia de archivos navega por el almacenamiento local del teléfono y los directorios remotos por SFTP para que puedas subir y bajar archivos. En las versiones de Android que lo requieran, la app puede solicitar acceso al almacenamiento para que el explorador local pueda leer y escribir los archivos seleccionados. En iOS, se accede a los archivos locales y a las fotos a través de los selectores de documentos y fotos del sistema."
      },
      {
        heading: "Registros y solución de problemas",
        body: "El historial de inicios de sesión y los registros opcionales de depuración se guardan localmente para diagnóstico. Los registros de depuración pueden incluir eventos del terminal, tamaños de datos SSH, diagnósticos de entrada táctil, eventos de redimensionamiento y eventos de ciclo de vida de túneles. Revisa cualquier archivo de depuración antes de compartirlo con soporte u otra persona."
      },
      { heading: "Analíticas de uso anónimas", body: "Para entender cómo se usa la app y mejorarla, Mobile SSH envía analíticas de uso anónimas a Aptabase, un proveedor de analíticas centrado en la privacidad que actúa en nuestro nombre. Se limita a eventos anónimos (como aperturas de la app y qué funciones se usan) junto con la versión de la app, la versión del sistema operativo, el modelo del dispositivo y el idioma. Usa un identificador de sesión aleatorio que se restablece con regularidad y no está vinculado a ti ni a tu dispositivo. Nunca incluye tus servidores SSH, nombres de host, usuarios, contraseñas, claves, comandos ni el contenido de archivos. Los datos se envían por una conexión cifrada (HTTPS). Las analíticas están activadas de forma predeterminada y se pueden desactivar en cualquier momento en Ajustes; cuando están desactivadas, no se envía nada." }
    ],
    permissionsHeading: "Permisos",
    permissions: [
      { label: "Internet", body: "necesario para conectarse a servidores SSH." },
      { label: "Wake lock y Wi-Fi lock", body: "se usan en Android para mantener activas las sesiones SSH mientras el dispositivo duerme." },
      { label: "Servicio en primer plano y notificaciones", body: "se usan en Android para gestionar conexiones activas en segundo plano; en iOS, las notificaciones se usan para las alertas de agente." },
      { label: "Acceso al almacenamiento", body: "lo usan la transferencia de archivos y la importación de claves; en iOS esto se realiza a través de los selectores de documentos y fotos del sistema." }
    ],
    securityHeading: "Responsabilidades de seguridad",
    securityBody:
      "Protege tu dispositivo con un bloqueo de pantalla fuerte si guardas credenciales o claves privadas. Conéctate solo a servidores en los que confíes. La implementación actual usa almacenamiento local de la app (y el Keychain de iOS), no una bóveda cifrada en la nube.",
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
      { slug: "port-forwarding",  title: "Reenvío de puertos",        text: "Configura cadenas de túnel locales y gestiona reenvíos activos durante la conexión." },
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
    licenseValue: "MIT",
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
