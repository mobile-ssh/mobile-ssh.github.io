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
    tagline: "Flujos enfocados de SSH, SFTP y terminal para dispositivos Android.",
    documentation: "Documentación",
    comparison: "Comparación",
    privacy: "Privacidad",
    contact: "Contacto"
  },
  home: {
    metaTitle: "Mobile SSH — Cliente SSH para Android",
    metaDescription:
      "Mobile SSH es un cliente SSH enfocado para Android con terminales multi-sesión, transferencia SFTP, claves privadas, reenvío de puertos y flujos compatibles con tmux.",
    eyebrow: "Cliente SSH para Android",
    h1: "Mobile SSH",
    intro:
      "Un cliente SSH enfocado para Android con terminales multi-sesión, autenticación por clave privada, transferencia de archivos SFTP, reenvío local de puertos y controles compatibles con tmux pensados para teléfonos y tabletas.",
    versionLine: "Disponible en 19 idiomas · versión 1.5",
    ctaDocs: "Leer la documentación",
    ctaPlay: "Próximamente en Google Play",
    sectionAHead: "Diseñado para el trabajo SSH en Android",
    sectionAIntro:
      "Mobile SSH acorta el camino habitual de administración: guarda un servidor, conéctate, mantén las sesiones activas, mueve archivos cuando lo necesites y vuelve rápido a tus terminales en uso.",
    features: [
      { title: "Terminal SSH", text: "Emulación de terminal VT100/xterm-256color con color, teclas de cursor, scrollback, copia y compatibilidad con el teclado de Android." },
      { title: "Cuadrícula multi-sesión", text: "Ejecuta hasta ocho sesiones a la vez, cambia tocando un panel y haz doble toque sobre un panel para verlo a pantalla completa." },
      { title: "Claves privadas", text: "Usa contraseñas o claves privadas importadas o pegadas, incluidas las claves Ed25519, RSA, ECDSA y DSA que admite la app." },
      { title: "Transferencia SFTP", text: "Mueve archivos entre el almacenamiento del teléfono y un servidor remoto con paneles de exploración local y remota." },
      { title: "Reenvío de puertos", text: "Guarda especificaciones de túnel locales junto a un perfil de servidor o añade túneles durante la conexión." },
      { title: "Reconexión inteligente", text: "Servicio en primer plano, wake locks, keepalives e intentos de reconexión ayudan a que las sesiones sobrevivan a los cambios de red móvil." },
      { title: "Selección en el terminal", text: "Selecciona texto del terminal para copiarlo, compartirlo o seleccionar todo el contenido visible; las copias van al portapapeles de Android." },
      { title: "Amigable con teclados móviles", text: "Las sugerencias de Gboard y la entrada por voz funcionan junto a la fila de teclas extra; el texto en composición se almacena en buffer hasta el siguiente límite de palabra." }
    ],
    multiHead: "Una pantalla, varias shells activas",
    multiP1:
      "La vista de terminal puede contener varias sesiones SSH activas en una cuadrícula. Selecciona un panel para escribir, usa la fila de teclas extra para los controles de terminal, pellizca para ajustar el tamaño del texto y haz doble toque sobre un panel cuando necesites foco a pantalla completa.",
    multiP2:
      "El historial de sesiones y la recuperación de sesiones activas te ayudan a volver al trabajo en curso después de cambiar de app, bloquear la pantalla o recrear actividades de Android.",
    multiAlt:
      "Mobile SSH en una tableta Android de 10 pulgadas mostrando cuatro paneles de terminal SSH activos uno al lado del otro.",
    sftpHead: "SFTP cuando el terminal no basta",
    sftpBody:
      "Abre la transferencia de archivos desde una sesión conectada para explorar el almacenamiento del teléfono y los directorios remotos. Encola subidas y descargas, ordena los archivos, recuerda rutas recientes por servidor e inspecciona los permisos remotos antes de mover algo.",
    sftpCtaGuide: "Guía de transferencia de archivos",
    sftpCtaAll: "Todas las funciones",
    sftpAlt: "Pantalla de transferencia de archivos de Mobile SSH en un teléfono con paneles local y remoto.",
    galleryHead: "Vélo en un dispositivo real",
    galleryIntro:
      "Capturas tomadas en teléfonos Android — las mismas pantallas que usarás para añadir servidores, trabajar en terminales, ejecutar varias sesiones y mover archivos por SFTP.",
    galleryAlts: [
      "Pantalla de inicio de Mobile SSH en un teléfono con los botones Servidores, Credenciales, Registros, Ajustes, Depuración y Acerca de.",
      "Diálogo Añadir servidor en un teléfono mostrando los campos host, puerto, credenciales, clave privada y reenvío de puertos.",
      "Terminal SSH de una sola sesión en un teléfono con la fila de teclas extra en la parte inferior.",
      "Dos sesiones SSH apiladas en un teléfono con el panel activo resaltado.",
      "Pantalla de transferencia de archivos SFTP en un teléfono con paneles Mi teléfono y Servidor remoto.",
      "Diálogo Acerca de en un teléfono mostrando los campos versión, autor, licencia y sitio web."
    ],
    compareHead: "Su lugar junto a Termux y Termius",
    compareIntro:
      "Mobile SSH es intencionadamente reducido: no es un entorno Linux completo ni una bóveda en la nube para equipos. Es una herramienta SSH/SFTP local para Android con acceso rápido a los controles de sesión que más usan los usuarios móviles.",
    compareGuideTitle: "Guía de comparación",
    compareGuideText: "Mira cuándo elegir Mobile SSH, Termux o Termius en dispositivos Android.",
    privacyTitle: "Política de privacidad",
    privacyText: "Revisa qué datos de conexión se guardan localmente y qué se envía a tus servidores."
  },
  features: {
    metaTitle: "Funciones | Mobile SSH",
    metaDescription:
      "Funciones clave de Mobile SSH para flujos de SSH, terminal, SFTP, clave privada, tmux y reenvío de puertos en Android.",
    eyebrow: "Lista de funciones",
    h1: "Funciones de Mobile SSH",
    intro:
      "Mobile SSH está pensado para un uso directo de SSH en Android: abrir terminales, mantenerlos activos, mover archivos, guardar servidores y recuperarse rápido de interrupciones móviles.",
    groups: [
      {
        title: "Conexiones",
        items: [
          "Autenticación por contraseña y por clave privada",
          "Claves privadas Ed25519, RSA, ECDSA y DSA admitidas por la implementación actual de la app",
          "Perfiles de servidor guardados con host, puerto, usuario, credencial, clave privada y especificaciones de túnel opcionales",
          "Registros de credenciales reutilizables que pueden seleccionarse al configurar un servidor",
          "Historial de sesiones recientes para reconectar a conjuntos habituales de servidores",
          "Registro de intentos de inicio de sesión, correctos y fallidos"
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
          "Compatibilidad con sugerencias/autocorrección de Gboard y entrada por voz, con buffering del texto en composición para terminales"
        ]
      },
      {
        title: "Sesiones",
        items: [
          "Hasta ocho sesiones SSH simultáneas",
          "Disposición en cuadrícula para las sesiones activas",
          "Servicio en primer plano para sobrevivir al fondo y al bloqueo de pantalla",
          "Keepalives e intentos de reconexión con retroceso exponencial",
          "Acceso a Sesiones activas desde la pantalla inicial",
          "Seguimiento de comandos de tmux y sugerencias de reattach para trabajos interrumpidos"
        ]
      },
      {
        title: "Archivos y túneles",
        items: [
          "Explorador SFTP de doble panel para archivos locales y remotos",
          "Operaciones de subida y descarga en cola",
          "Acciones remotas de renombrar, borrar, crear, editar y ver detalles",
          "Ordenar por nombre o fecha con persistencia por host",
          "Reenvío local de puertos guardado con el perfil del servidor",
          "Vista de añadir/quitar túneles en tiempo de ejecución para sesiones conectadas"
        ]
      },
      {
        title: "Localización",
        items: [
          "Traducciones de la interfaz: árabe, bengalí, chino (simplificado y tradicional), inglés, francés, alemán, hindi, indonesio, japonés, marathi, pidgin nigeriano, portugués, ruso, español, tamil, telugu, turco y urdu",
          "Sigue el idioma del sistema Android; no requiere un selector dentro de la app"
        ]
      }
    ],
    security:
      "Nota de seguridad: la app actual guarda los perfiles de servidor y las credenciales localmente en el dispositivo Android. No ofrece sincronización en la nube. Protege el dispositivo con un bloqueo de pantalla fuerte y evita guardar credenciales en dispositivos compartidos."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius en Android",
    metaDescription:
      "Comparación equilibrada de Mobile SSH, Termux y Termius para flujos SSH en Android.",
    eyebrow: "Opciones SSH en Android",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Estas herramientas coinciden en torno a SSH, pero están pensadas para trabajos distintos. Mobile SSH es un cliente SSH/SFTP enfocado para Android, Termux es un entorno Linux y Termius es un cliente SSH multiplataforma con funciones de productividad basadas en cuenta.",
    columns: {
      need: "Necesidad",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Propósito principal",
        mobileSsh: "Cliente dedicado de SSH, SFTP, túnel local y terminal para Android.",
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
        need: "Controles de terminal en Android",
        mobileSsh: "Fila de teclas extra integrada, sesiones en cuadrícula, paneles a pantalla completa, zoom con pellizco, selección de texto con copiar/compartir, sugerencias de Gboard, entrada por voz y desplazamiento compatible con tmux.",
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
        mobileSsh: "Hasta ocho sesiones SSH simultáneas en una cuadrícula Android.",
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
        mobileSsh: "Quieres una app sencilla en Android para conectarte a servidores, transferir archivos y mantener sesiones activas.",
        termux: "Quieres un entorno de línea de comandos completo en Android y te resulta cómodo instalar y configurar paquetes.",
        termius: "Quieres sincronización entre dispositivos, funciones de productividad pulidas, bóvedas y colaboración."
      }
    ],
    cards: [
      {
        title: "Elige Mobile SSH cuando",
        body: "Quieres acceso SSH directo desde Android sin montar un entorno Linux completo ni una cuenta sincronizada en la nube. Es especialmente apropiado para servidores guardados, SFTP, sesiones de tmux y flujos rápidos de túnel local."
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
    sources:
      "Fuentes: Termux se describe como un emulador de terminal y entorno Linux para Android con paquetes APT y compatibilidad con OpenSSH en [termux.dev](https://termux.dev/en/). Termius describe SSH, SFTP, Mosh, Telnet, Serial, complementos de teclado, SFTP, bóvedas cifradas y gestión de claves en su [página para Android](https://www.termius.com/free-ssh-client-for-android) y en su [documentación de bóvedas](https://termius.com/documentation/set-up-vaults)."
  },
  privacy: {
    metaTitle: "Política de privacidad | Mobile SSH",
    metaDescription:
      "Política de privacidad de Mobile SSH, incluyendo almacenamiento local, transmisión de datos SSH, transferencia de archivos, registros y permisos de Android.",
    eyebrow: "Privacidad",
    h1: "Política de privacidad",
    intro:
      "Mobile SSH está diseñado como un cliente SSH local para Android. No requiere una cuenta de Mobile SSH ni ofrece un servicio de sincronización en la nube.",
    sections: [
      {
        heading: "Información almacenada en tu dispositivo",
        body: "Si decides guardar datos en la app, Mobile SSH los almacena localmente en el dispositivo Android. Esto puede incluir perfiles de servidor guardados, nombres de usuario, puertos, contraseñas, claves privadas, frases de paso, reglas de reenvío de puertos, sesiones recientes, historial de intentos de inicio de sesión, rutas de transferencia, preferencias de orden de archivos, sugerencias de reattach de tmux, ajustes de la app y registros de depuración cuando la grabación de depuración está activa."
      },
      {
        heading: "Información enviada a través de la red",
        body: "Mobile SSH envía datos de autenticación SSH solo a los servidores que tú configuras y a los que te conectas. La entrada/salida del terminal, el contenido de los archivos SFTP y el tráfico reenviado por puertos locales se intercambian con los servidores y puntos finales remotos que tú eliges. Mobile SSH no envía esos datos a ningún servicio de analíticas, publicidad, telemetría o sincronización en la nube de Mobile SSH."
      },
      {
        heading: "Transferencia de archivos y acceso al almacenamiento",
        body: "La función de transferencia de archivos navega por el almacenamiento local del teléfono y los directorios remotos por SFTP para que puedas subir y bajar archivos. En las versiones de Android que lo requieran, la app puede solicitar acceso al almacenamiento para que el explorador local pueda leer y escribir los archivos seleccionados."
      },
      {
        heading: "Registros y solución de problemas",
        body: "El historial de inicios de sesión y los registros opcionales de depuración se guardan localmente para diagnóstico. Los registros de depuración pueden incluir eventos del terminal, tamaños de datos SSH, diagnósticos de entrada táctil, eventos de redimensionamiento y eventos de ciclo de vida de túneles. Revisa cualquier archivo de depuración antes de compartirlo con soporte u otra persona."
      }
    ],
    permissionsHeading: "Permisos",
    permissions: [
      { label: "Internet", body: "necesario para conectarse a servidores SSH." },
      { label: "Wake lock y Wi-Fi lock", body: "se usan para mantener activas las sesiones SSH mientras el dispositivo duerme." },
      { label: "Servicio en primer plano y notificaciones", body: "se usan para gestionar conexiones activas en segundo plano." },
      { label: "Acceso al almacenamiento", body: "lo usan la transferencia de archivos y la importación de claves." }
    ],
    securityHeading: "Responsabilidades de seguridad",
    securityBody:
      "Protege tu dispositivo Android con un bloqueo de pantalla fuerte si guardas credenciales o claves privadas. Conéctate solo a servidores en los que confíes. La implementación actual usa almacenamiento local de la app, no una bóveda cifrada en la nube.",
    contactHeading: "Contacto",
    contactBody: "Contacto de soporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentación | Mobile SSH",
    metaDescription: "Documentación de usuario de Mobile SSH para Android.",
    eyebrow: "Guía de usuario",
    h1: "Documentación de Mobile SSH",
    intro:
      "Usa estas páginas como guía pública para instalar, conectar, gestionar sesiones, transferir archivos, reenviar puertos y solucionar problemas de Mobile SSH.",
    cards: [
      { slug: "getting-started",  title: "Primeros pasos",         text: "Instala, abre la app, conéctate a tu primer servidor y guarda hosts habituales." },
      { slug: "terminal",         title: "Terminal",               text: "Usa paneles, la fila de teclas extra, el desplazamiento, las acciones de copia, el comportamiento de tmux y los ajustes de teclado." },
      { slug: "file-transfer",    title: "Transferencia de archivos", text: "Explora archivos del teléfono y del servidor, sube, descarga, ordena e inspecciona detalles remotos." },
      { slug: "port-forwarding",  title: "Reenvío de puertos",     text: "Configura cadenas de túnel locales y gestiona reenvíos activos durante la conexión." },
      { slug: "troubleshooting",  title: "Solución de problemas",  text: "Soluciona problemas de conexión, autenticación, teclado, almacenamiento y reconexión." }
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
    metaDescription: "Acerca de Mobile SSH: versión, autor, licencia y avisos de código abierto del cliente SSH para Android.",
    eyebrow: "Acerca de",
    h1: "Acerca de Mobile SSH",
    intro: "Cliente SSH multi-sesión con tmux, reenvío de puertos y SFTP.",
    appHeading: "Acerca de la app",
    versionLabel: "Versión",
    versionValue: "1.5 (10)",
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
      { name: "JSch (mwiede fork)",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch)",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch)", license: "ISC" },
      { name: "Ed25519 / Ed448 Java",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" }
    ],
    contactHeading: "Contacto",
    contactBody: "Contacto de soporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
