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
    discordCommunity: "Comunidad de Mobile SSH en Discord",
    beta: "Prueba beta",
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
      "Mobile SSH para Android e iOS: terminales SSH, bastiones, tmux, herdr, Zellij, SFTP, escritorios VNC y copias de seguridad. Android añade clientes VPN y claves de seguridad.",
    eyebrow: "Cliente SSH para Android e iOS",
    h1: "Mobile SSH",
    intro:
      "Terminales SSH, gestores tmux, herdr y Zellij, SFTP, escritorios VNC, bastiones y túneles locales para teléfonos y tabletas. Eternal Terminal mantiene los shells remotos durante las interrupciones. Android también incluye VPN y autenticación con claves de seguridad USB/NFC.",
    versionLine: "Disponible en {count} idiomas · Android {version} · iOS {iosVersion} beta",
    ctaDocs: "Leer la documentación",
    ctaPlay: "Disponible en Google Play",
    ctaIos: "Consigue la beta de iOS en TestFlight",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone y iPad",
    advantagesHead: "Por qué Mobile SSH",
    advantagesIntro: "Hecho para resolver los problemas habituales de los clientes SSH móviles.",
    advantages: [
      { title: "Sin nivel Pro, sin anuncios", text: "Todas las funciones en la misma app. No hay muro de pago dividiendo flujos esenciales tras un Pro, ni banners en la terminal." },
      { title: "Tus datos se quedan en el teléfono", text: "Servidores, credenciales y claves guardados localmente. Sin cuenta en la nube; nada que pueda cerrarse." },
      { title: "Hosts guardados, un toque para conectar", text: "Añade un host una vez y reconéctate con un toque, incluyendo clave, puerto y túneles configurados." },
      { title: "Alertas de agente, y una respuesta con un toque", text: "Entérate en el momento en que Claude Code, Codex u otro agente te necesita: el panel se tiñe de ámbar, un distintivo en la barra de herramientas cuenta cuántos están esperando y la lista de agentes responde a la pregunta con un solo toque — sin escribir nada en la terminal." },
      { title: "Teclas de terminal sobre el teclado", text: "Una fila de trece teclas — ESC, TAB, CTRL, flechas, Home, End, PgUp, PgDn — que salta a una segunda fila en lugar de desplazarse, así que nada queda fuera de la pantalla. Añade F1–F12, combinaciones con Ctrl o tus propias secuencias de escape desde una paleta de valores predefinidos." },
      { title: "Reenvío de puertos sin comandos", text: "Los túneles se asocian al perfil del servidor y se levantan al conectar." },
      { title: "Sobrevive al bloqueo y al roaming", text: "Asigna varias direcciones a un servidor guardado — una IP de LAN doméstica y una IP de VPN — y Mobile SSH marca la que responda, probando primero la última que funcionó, y se reconecta en cuanto cambia la red. En Android, un servicio en primer plano y wake locks mantienen los shells vivos con la pantalla apagada; en iOS, la reconexión automática y el volver a adjuntarse a tmux te devuelven donde lo dejaste." },
      { title: "Eternal Terminal", text: "Un transporte ET opcional mantiene el shell remoto activo a través de cortes de red, modo de suspensión y cambios de IP. ¿Sin etserver en el host? Mobile SSH puede instalarlo por SSH por ti." },
      { title: "Amplíalo con complementos", text: "Explora un catálogo público e instala complementos bajo demanda para añadir nuevos flujos de trabajo. Cada complemento se descarga y se verifica con SHA-256 en el almacenamiento privado de la app." }
    ],
    sectionAHead: "Diseñado para el trabajo SSH móvil",
    sectionAIntro:
      "Mobile SSH acorta el camino habitual de administración: guarda un servidor, conéctate, mantén las sesiones activas, mueve archivos cuando lo necesites y vuelve rápido a tus terminales en uso.",
    features: [
      { title: "Terminal SSH", text: "Terminal xterm-256color con color verdadero de 24 bits, cursivas, búsqueda dentro de la terminal, integración con el shell (OSC 133) y ajuste de texto con pellizco — además de una fuente y un esquema de colores configurables y glifos powerline/de iconos de Nerd Font en Android e iOS." },
      { title: "Cuadrícula multi-sesión", text: "Hasta ocho sesiones SSH en una cuadrícula redimensionable — toca un panel para enfocarlo, doble toque para pantalla completa, pellizca para ajustar el texto." },
      { title: "Enlaces que se pueden tocar", text: "Las URL en la terminal aparecen subrayadas y se abren en el navegador con un toque — sin copiar ni cambiar de app." },
      { title: "Carpetas y nombres de servidores", text: "Organiza los servidores guardados en grupos contraíbles y ponle a un servidor un nombre que se muestre en lugar de su dirección. La dirección reaparece siempre que un nombre resulte ambiguo, para que las filas nunca se confundan entre sí." },
      { title: "Alertas de agente", text: "Los agentes informan a través de la terminal, así que la app sabe cuál está bloqueado y por qué. Responde desde la lista de agentes con un toque; las alertas se sustituyen en lugar de acumularse, y al tocar una se abre el panel que avisó." },
      { title: "Claves privadas", text: "Usa contraseñas o claves privadas y genera Ed25519 o ECDSA en el dispositivo, también RSA en Android. Android admite FIDO2 por USB/NFC y reenvío del agente SSH por servidor." },
      { title: "Transferencia SFTP", text: "Explorador de archivos de doble panel vinculado a una sesión SSH activa. Encola subidas y descargas, renombra, elimina e inspecciona permisos remotos." },
      { title: "Reenvío de puertos", text: "Guarda especificaciones de túnel locales con un perfil de servidor y se abren automáticamente al conectar — también tras una reconexión en una red nueva, sin tener que rehacerlas a mano." },
      { title: "Flujo de reconexión", text: "Cambia de red y las sesiones vuelven a marcar de inmediato en lugar de esperar a que expire una ruta muerta, y una sesión en retroceso despierta en cuanto aparece una red utilizable. En iOS se detecta y se reconecta un servidor que ha dejado de responder en silencio." },
      { title: "Copia de seguridad y restauración", text: "Guarda servidores, credenciales y ajustes con cifrado opcional mediante frase de contraseña y vistas previas de Combinar/Reemplazar. Android incluye perfiles VPN; las copias actuales de ambas plataformas comparten formato y conservan los ajustes específicos compatibles." },
      { title: "Eternal Terminal", text: "Conéctate mediante Eternal Terminal (ET) para sesiones que sobreviven a cortes de red, modo de suspensión y cambios de IP — con instalación automática opcional de etserver por SSH." },
      { title: "Gestores de multiplexores", text: "Adjunta, renombra, crea, divide, amplía o termina sesiones con los gestores tmux, herdr y Zellij de ambas plataformas. Un botón común abre los gestores disponibles; cada servidor elige qué adjuntar al conectar." },
      { title: "Complementos", text: "Explora, busca y filtra plugins por categoría e instala los flujos que necesites. Las descargas se verifican mediante SHA-256 y se guardan en el almacenamiento privado de la app." },
      {
        "title": "Identidad y servidores de salto",
        "text": "Accede mediante bastiones guardados en ambas plataformas. La verificación previa a autenticar bloquea claves cambiadas. Android puede guardar claves nuevas automáticamente o preguntar; iOS exige confirmar las desconocidas."
      },
      {
        "title": "Escritorios remotos",
        "text": "Abre VNC por SSH en Android/iOS con controles táctiles, teclado, portapapeles y ajuste de pantalla cuando el servidor lo admite."
      },
      {
        "title": "Clientes VPN en Android",
        "text": "Gestiona SSH VPN, proxy SOCKS5 local, WireGuard, Shadowsocks y OpenVPN desde el inicio. Elige un perfil e inicia el tráfico; el mosaico Mobile SSH VPN permite detenerlo o reanudarlo."
      }
    ],
    multiHead: "Una pantalla, varios shells activos",
    multiP1:
      "La vista de terminal puede contener varias sesiones SSH activas en una cuadrícula. Selecciona un panel para escribir, usa la fila de teclas extra para los controles de terminal, pellizca para ajustar el tamaño del texto y haz doble toque sobre un panel cuando necesites foco a pantalla completa.",
    multiP2:
      "La pantalla de inicio responde a «¿a qué puedo volver?» — las conexiones activas en este momento y las sesiones de tmux que te esperan en tus servidores guardados, reconstruidas a partir de una instantánea guardada para que aparezcan incluso sin red.",
    multiAlt:
      "Mobile SSH en un teléfono mostrando dos sesiones SSH activas en una vista dividida en paralelo.",
    sftpHead: "SFTP cuando la terminal no basta",
    sftpBody:
      "Explora carpetas locales y remotas, pon transferencias en cola, recuerda el directorio de cada sesión tmux y abre archivos remotos en otras apps. Ambas plataformas aceptan archivos compartidos al terminal; iOS recuerda una carpeta elegida en Archivos.",
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
    videoIntro: "Demostraciones breves en ambas plataformas. Android: la pantalla de inicio que responde a qué puedes volver, una barra de herramientas de sesión que solo muestra lo que ese servidor tiene, el envío de un archivo directamente al prompt y los gestores de tmux, herdr y Zellij. iOS: la apertura directa en una terminal en vivo y la pantalla de inicio a la que vuelves.",
    videoAlt: "Demo en Android de la pantalla de inicio con las sesiones de tmux que puedes reanudar, la barra de herramientas de sesión, cómo adjuntar un archivo al prompt y los gestores de sesiones de tmux, herdr y Zellij",
    videoIosAlt: "Demo en iOS que abre Mobile SSH directamente en una sesión de terminal SSH en vivo y vuelve a la pantalla de inicio, con el gestor de tmux, Ajustes y las demás pantallas de la app",
    muxHead: "Un vídeo por gestor de sesiones",
    muxIntro:
      "Los vídeos generales presentan tmux, herdr y Zellij. Estas grabaciones largas muestran sus controles de sesiones, ventanas, pestañas y paneles en ambas plataformas con un servidor activo.",
    muxItems: [
        {
          text: "Sesiones, ventanas y paneles alcanzados desde la pantalla de inicio, con una sesión marcada por una campana porque algo en ella reclama atención. Adjunta una ventana y la terminal en vivo la sigue; crea una ventana y ponle nombre, sin teclear ni un solo atajo de prefijo.",
          androidAlt: "Demo en Android del gestor de tmux: la lista de sesiones en caché de la pantalla de inicio, luego sesiones, ventanas y paneles, adjuntando una ventana para que la terminal la siga, y creando una ventana con nombre.",
          iosAlt: "Demo en iOS del gestor de tmux: sesiones de tmux con su antigüedad y una campana en la que espera entrada, luego ventanas y paneles, cada fila con Abrir, Renombrar y Cerrar."
        },
        {
          text: "Espacios de trabajo, pestañas y paneles que llevan estado real de agente: uno trabajando, otro bloqueado esperando a una persona. Previsualiza el bloqueado, respóndele desde el teléfono y observa cómo herdr lo reclasifica como trabajando y luego como terminado.",
          androidAlt: "Demo en Android del gestor de herdr: sesiones y espacios de trabajo etiquetados con el estado del agente, uno marcado como «needs you», respondiéndole desde el teléfono, y un nuevo espacio de trabajo creado y renombrado.",
          iosAlt: "Demo en iOS del gestor de herdr: espacios de trabajo con estado de agente y una hoja de respuesta que envía texto escrito a un agente bloqueado, seguido de Enter."
        },
        {
          text: "Sesiones con su antigüedad, luego pestañas y paneles. Previsualiza la salida de un panel, añade una pestaña con nombre, enfoca la que importa y adjúntate, sin escribir nada en el prompt.",
          androidAlt: "Demo en Android del gestor de Zellij: sesiones con su antigüedad, pestañas y paneles, previsualizando la salida de un panel, creando una pestaña con nombre y adjuntando una sesión.",
          iosAlt: "Demo en iOS del gestor de Zellij: una sesión con acciones de adjuntar, renombrar, cerrar y eliminar, sus pestañas, y un panel con previsualización y ambas direcciones de división."
        }
    ],
    demoHead: "Tres más, filmadas en Android",
    demoIntro:
      "Todavía no hay una toma en iOS de estas. El mismo servidor real que en las demos de arriba: una sesión que sobrevive a que salgas de la app, una clave creada en el teléfono en lugar de tecleada en él, y servidores agrupados tal y como tú los piensas.",
    demoItems: [
      {
        title: "La sesión sobrevive a la app",
        text: "Android mantiene la conexión mediante un servicio en primer plano; la notificación indica el servidor y ofrece Desconectar todo. Sal mientras fluye un registro y vuelve a la sesión activa. iOS solo permite un breve tiempo en segundo plano y después reconecta y se adjunta al multiplexor.",
        androidAlt:
          "Demo en Android de una sesión que sigue ejecutándose en segundo plano: un registro HTTP en vivo transmitiéndose en la terminal, el aviso de permiso de notificaciones, la notificación permanente que nombra el servidor conectado con Desconectar todo, y luego la salida a la pantalla de inicio del teléfono y la vuelta al mismo flujo, que sigue llegando."
      },
      {
        title: "Las claves se crean aquí, no se teclean",
        text: "Genera una clave Ed25519 en el teléfono: una etiqueta, un usuario y una frase de contraseña opcional. La hoja que aparece después muestra la mitad pública para añadirla al authorized_keys de un servidor, y puede compartir o guardar cualquiera de las dos mitades.",
        androidAlt:
          "Demo en Android de la generación de claves: el diálogo Generar clave SSH con una etiqueta, un usuario, el tipo de clave Ed25519 y una frase de contraseña, y después la hoja de la clave pública que ofrece compartir o guardar la clave."
      },
      {
        title: "Los servidores viven en carpetas que tú nombras",
        text: "Agrupa los servidores guardados en carpetas y contrae las que no estés usando. La misma toma termina en la terminal, donde una URL impresa por un comando aparece subrayada y se puede tocar, en lugar de ser algo que tengas que seleccionar a mano.",
        androidAlt:
          "Demo en Android de las carpetas de servidores: servidores guardados agrupados en carpetas con nombre que se despliegan y se contraen, y luego una terminal donde las URL de la salida de un comando aparecen subrayadas y se pueden tocar."
      }
    ],
    graphicsHead: "Un gráfico animado, dentro de la terminal",
    graphicsBody:
      "Un GIF de 36 fotogramas transmitido por el protocolo gráfico de Kitty y decodificado por la app al ritmo del propio archivo, no avanzado desde fuera. Después, las secuencias de escape por las que se juzga a una terminal: OSC 8 convierte números de compilación y nombres de paneles en algo que puedes tocar, OSC 52 deja que el remoto escriba en el portapapeles de tu teléfono, y OSC 777 lanza una notificación real de Android.",
    graphicsAlt:
      "Demo en Android de un gráfico de latencia animado transmitido al terminal por el protocolo gráfico de Kitty, seguido de enlaces OSC 8, una escritura en el portapapeles con OSC 52 y una notificación OSC 777.",
    lightboxClose: "Cerrar",
    lightboxPrev: "Anterior",
    lightboxNext: "Siguiente",
    galleryAlts: [
      "Pantalla de inicio de Mobile SSH en un teléfono Android con un aviso de Sesiones activas y una lista Continuar de servidores guardados que retomar, encima de los botones Servidores, Credenciales, Ajustes, Acerca de y Complementos.",
      "Diálogo Añadir servidor en un teléfono con campos de nombre del servidor, host y puerto, direcciones adicionales, credenciales, clave privada y reenvío de puertos.",
      "Terminal SSH de una sola sesión en un teléfono mostrando el parche de un agente de programación y una tanda de pruebas superada, bajo la barra de la sesión.",
      "Dos sesiones SSH en una vista dividida en paralelo en un teléfono.",
      "Cuatro sesiones SSH en una cuadrícula en un teléfono, cada una en un servidor distinto, con el panel activo resaltado.",
      "Pantalla de transferencia de archivos SFTP en un teléfono con paneles Mi teléfono y Servidor remoto.",
      "Diálogo Acerca de en un teléfono mostrando los campos versión, autor, licencia y sitio web.",
      "Diálogo Generar clave SSH en un teléfono con campos de etiqueta, usuario, tipo de clave y frase de contraseña.",
      "Diálogo Clave pública en un teléfono que muestra la clave generada con opciones para copiar, compartir y guardar.",
      "Pantalla de Servidores guardados que muestra servidores organizados en grupos contraíbles de Trabajo y Personal.",
      "Terminal SSH en un teléfono con URL https:// subrayadas como enlaces que se pueden tocar.",
      "Gestor de Zellij en un teléfono Android listando sesiones, pestañas y paneles con botones para adjuntar, renombrar, cerrar y enfocar.",
      "Gestor de tmux en un teléfono listando sesiones, ventanas y paneles de tmux con botones para adjuntar, renombrar y cambiar.",
      "Pantalla de complementos en un teléfono mostrando un catálogo de complementos instalables con Tailscale, WireGuard y Claude Code CLI.",
      "Complemento AI Chat en un teléfono transmitiendo una respuesta de un modelo local llama3.2 que se ejecuta en el servidor remoto por SSH.",
      "Diálogo Añadir servidor en un teléfono con el transporte configurado como Eternal Terminal para que las sesiones sobrevivan a los cortes de red."
    ],
    galleryIosAlts: [
      "Formulario de conexión de Mobile SSH en un iPhone con campos de servidor, autenticación, carpeta y transporte.",
      "Servidores guardados en un iPhone organizados en los grupos Production y Staging, con búsqueda de servidores.",
      "Terminal SSH en vivo en un iPhone con la barra de estado de tmux y la fila de teclas extra en la parte inferior.",
      "Dos sesiones SSH apiladas en una cuadrícula en un iPhone con paneles que se enfocan al tocar.",
      "Transferencia de archivos en un iPhone con los paneles Mi teléfono y Host remoto y un registro de transferencia completada.",
      "Autenticación por clave en un iPhone con una clave Ed25519 generada en el dispositivo y una clave pública copiable.",
      "Gestor de tmux en un iPhone listando sesiones y ventanas con acciones de abrir, renombrar y cerrar — una campana señala un agente que espera intervención.",
      "Terminal SSH en un iPhone adjunto a una ventana de tmux que muestra código en un editor remoto.",
      "Catálogo de complementos en un iPhone con Tailscale, WireGuard, Claude Code CLI, VS Code y AI Chat disponibles para instalar.",
      "Formulario de conexión en un iPhone con el transporte configurado como Eternal Terminal para que las sesiones sobrevivan a los cortes de red.",
      "Ajustes de alertas de agente en un iPhone con interruptores de vibración, sonido y solo auriculares.",
      "Pantalla de inicio de Mobile SSH en un iPhone con un aviso de Sesiones activas y una fila Continuar para volver a una sesión en curso, encima de los botones Servidores, Credenciales, Registros, Ajustes, Acerca de y Complementos."
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
      "Descubre terminales Mobile SSH, bastiones, verificación, SFTP, VNC, copias y multiplexores en Android/iOS, además de VPN y claves de seguridad en Android.",
    eyebrow: "Lista de funciones",
    h1: "Funciones de Mobile SSH",
    intro:
      "Conecta a tus servidores desde Android e iOS con terminales SSH, identidades verificadas, bastiones, SFTP, VNC y gestores de sesiones. Android añade VPN integradas y claves físicas; abajo se indican las diferencias entre plataformas.",
    groups: [
      {
        title: "Plataformas",
        items: [
          "Android 8.0 o posterior — actualmente es una prueba cerrada de Google Play: abre el enlace de inscripción en un navegador móvil y luego instálala desde Play",
          "iOS 16 o posterior en iPhone y iPad — únete a la beta pública en TestFlight",
          "Las versiones actuales Android/iOS comparten el formato de copia 2 para inventario y ajustes; importar no activa funciones incompatibles de otra plataforma"
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
          "Una pantalla de inicio pensada para retomar el trabajo: las conexiones activas en este momento y las sesiones de tmux que te esperan en tus servidores — tomadas de una instantánea guardada, de modo que se listan sin red y cada fila indica su antigüedad. En iOS la lista de Recientes pasó a la pantalla Nueva conexión, donde un toque rellena el formulario",
          "IPv6 de principio a fin: literales entre corchetes con un puerto opcional en los campos de dirección, y destinos IPv6 entre corchetes en las reglas de reenvío de puertos",
          "Registro de intentos de inicio de sesión, correctos y fallidos, que anota la dirección exacta marcada y, en caso de fallo, el motivo",
          "Transporte por proxy de Teleport (experimental, Android): inicia sesión con usuario, contraseña y OTP o importa un archivo de configuración o de identidad de Teleport, explora los nodos del clúster y luego ejecuta terminales, SFTP, tmux y complementos a través del túnel del proxy",
          "Bastiones SSH guardados en ambas plataformas, con cadenas ordenadas de hasta ocho saltos expandidos; cada salto tiene sus credenciales y verificación de identidad",
          "Reenvío del agente SSH en Android: actívalo por servidor para solicitudes de firma con claves guardadas, con aprobación opcional; las claves privadas permanecen en el teléfono",
          "FIDO2 Android por USB/NFC: registra o importa credenciales OpenSSH y responde a solicitudes de toque y PIN"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Comportamiento de terminal estilo VT100/xterm-256color con color verdadero de 24 bits y cursivas — al shell se le anuncia TERM=xterm-256color y COLORTERM=truecolor",
          "Búfer de desplazamiento ajustable a 1000, 5000, 10 000 o 50 000 líneas en Android e iOS (5000 de forma predeterminada)",
          "Búsqueda dentro de la terminal — busca en el búfer de desplazamiento y en la pantalla visible y salta entre coincidencias (Android e iOS)",
          "Integración con el shell (OSC 133): recorre los prompts uno a uno, selecciona la salida completa de un comando — el error de compilación de 300 líneas atrás, no solo el último — y recibe un aviso cuando termina un comando de larga duración (Android e iOS)",
          "Imágenes en línea en la terminal mediante el protocolo de gráficos Kitty, que sobreviven al zoom con pellizco y al reajuste de líneas en lugar de desaparecer (Android e iOS)",
          "La app dibuja bloques, braille y mosaicos de sextantes para que chafa, timg y arte ANSI encajen correctamente en Android e iOS",
          "El tacto envía clics a los programas de terminal con seguimiento de ratón en ambas plataformas, con arrastre opcional; iOS también ofrece un ajuste para colocar el cursor en su lugar",
          "El encabezado del panel indica el directorio de trabajo real del panel, consultado a tmux o comunicado por el shell mediante OSC 7 (Android)",
          "Fila de teclas extra de trece teclas — ESC, TAB, CTRL, flechas, Home, End, PgUp, PgDn y alternar teclado — que salta a una segunda fila en lugar de desplazarse y recoge el resto en un menú desbordado, para que ninguna tecla quede fuera de la pantalla",
          "Personaliza la fila en Android e iOS: añade desde una paleta de unos 45 predefinidos que incluye F1–F12, combinaciones con Ctrl y símbolos; quita, reordena, oculta, define tus propias teclas de secuencia de escape y restablece los valores predeterminados, con vista previa en vivo",
          "Toque para enfocar, ajuste opcional «toque para mostrar el teclado», acciones de copiar y copiar todo",
          "Ajuste del tamaño de texto con pellizco y redimensionado de la terminal remota",
          "Modo pantalla completa con doble toque",
          "Selección de texto de la terminal con acciones Copiar, Compartir y Seleccionar todo — una pulsación larga selecciona la palabra, y Copiar mantiene la selección para compartirla o volver a copiarla",
          "Portapapeles OSC 52 — copia texto de una sesión remota de tmux o vim directamente al portapapeles del teléfono (Android e iOS)",
          "Teclados físicos y dictado en ambas plataformas; iOS activa Dictado y sugerencias con autocorrección por defecto. Desactívalo para entrada directa",
          "Compatibilidad con teclados externos y Bluetooth en Android e iOS, incluyendo flechas, teclas de función y combinaciones Ctrl/Alt",
          "Pegado entre corchetes (bracketed paste) para que el contenido multilínea del portapapeles no se ejecute automáticamente",
          "La Nerd Font incluida muestra glifos powerline, starship, devicon e iconos de Material Design en Android e iOS que la fuente del sistema mostraría como cuadros vacíos",
          "Los caracteres CJK anchos, los emoji y los caracteres combinantes se miden y dibujan correctamente en Android e iOS, incluyendo clústeres de grafemas y uniones de ancho cero (zero-width joiners)",
          "Fuente de terminal configurable (monoespaciada del sistema, JetBrains Mono o Source Code Pro) y esquema de colores ANSI (Solarized, Gruvbox, Dracula, Nord) en Android e iOS, aplicados en vivo a los paneles abiertos",
          "Un control deslizante del tamaño del texto de la terminal en Ajustes, junto al zoom con pellizco, y un tema de la app configurable en Sistema, Claro u Oscuro",
          "El caudal y los indicadores de conexión detenida distinguen un comando ocupado de una conexión sin respuesta; atenuación y vibración opcionales",
          "Ajustes controla notificaciones remotas, avisos de comando terminado y lecturas remotas del portapapeles; los permisos vienen desactivados"
        ]
      },
      {
        title: "Sesiones",
        items: [
          "Hasta ocho sesiones SSH simultáneas",
          "Disposición en cuadrícula para las sesiones activas",
          "Resiliencia en segundo plano y con la pantalla bloqueada: en Android, un servicio en primer plano mantiene en marcha shells y agentes aunque descartes la app de recientes; en iOS, al reconectar la app vuelve a adjuntar tu shell a tmux",
          "Keepalives e intentos de reconexión con retroceso exponencial — hasta diez intentos, y los fallos frente a una red que ya has abandonado no cuentan para ese límite",
          "Cambiar de Wi-Fi, datos móviles o VPN vuelve a marcar de inmediato en lugar de esperar a que expire la ruta muerta, y una sesión que ya está en retroceso lo reintenta en cuanto aparece una red utilizable",
          "Las sondas keepalive sin respuesta detectan servidores que dejaron de responder y activan la reconexión en Android e iOS",
          "Acceso a Sesiones activas desde la pantalla inicial; la notificación permanente lista las sesiones — toca para abrir",
          "Seguimiento de comandos tmux y reanudación con Auto, Nada, tmux, herdr o Zellij por servidor en ambas plataformas; se conserva la identidad al cambiar de socket tmux",
          "Los agentes se identifican a través de la terminal, así que la app sabe qué agente es, qué herramienta está ejecutando y si está bloqueado esperándote — el panel se tiñe de ámbar, su encabezado indica «claude · te necesita» y un distintivo de la barra de herramientas cuenta cuántos esperan",
          "Responde a la pregunta de un agente con un toque desde la lista de agentes; la respuesta viaja por un canal aparte, así que nunca se escribe sobre lo que hay en pantalla",
          "Instala el hook de agente en un servidor desde la propia app — un pequeño script de shell que cualquier agente puede invocar, no la integración de un proveedor concreto",
          "Transporte Eternal Terminal (ET) para sesiones que sobreviven a cortes de red, modo de suspensión y cambios de IP, con instalación automática opcional de etserver por SSH",
          "Gestor de tmux: lista y cambia entre sesiones, ventanas y paneles — adjunta, renombra, crea, divide, amplía o cierra, con ordenación por nombre/fecha y un 🔔 para los agentes que esperan intervención",
          "Un botón de multiplexores abre tmux, herdr y Zellij; Herdr permite previsualización, enfoque y respuestas por panel, y Zellij sesiones activas o terminadas"
        ]
      },
      {
        title: "Archivos y túneles",
        items: [
          "Explorador SFTP de doble panel para archivos locales y remotos, con un registro que muestra todas las transferencias y se puede desplazar",
          "Subidas y descargas en cola; comparte archivos con Mobile SSH en Android o la extensión de iOS, súbelos a una sesión conectada e inserta sus rutas remotas",
          "Subida y descarga recursiva de carpetas entre el teléfono y el host remoto",
          "Acciones remotas de renombrar, borrar, crear, editar, comprimir a .tar.gz, permisos (chmod/chown) y ver detalles",
          "Abre un archivo descargado en otra app en ambas plataformas — en iOS las descargas aparecen además en la app Archivos, dentro de «En mi iPhone»",
          "Transferencia de archivos recuerda directorios por host y sesión tmux en ambas plataformas; iOS recuerda además una carpeta externa elegida en Archivos",
          "Ordenar por nombre o fecha con persistencia por host, y volver de un salto a rutas remotas recientes",
          "Tamaños de archivo en unidades binarias, iguales a los que muestra ls -h en la terminal de la pestaña de al lado",
          "Reenvío local de puertos guardado con el perfil del servidor y levantado automáticamente al conectar",
          "Sigue el tema claro u oscuro del sistema en toda la app y el explorador de archivos — elige Sistema, Claro u Oscuro en Android e iOS"
        ]
      },
      {
        title: "Localización",
        items: [
          "Veinte idiomas en ambas plataformas: árabe, árabe egipcio, bengalí, chino simplificado y tradicional, inglés, francés, alemán, hindi, indonesio, japonés, maratí, pidgin nigeriano, portugués, ruso, español, tamil, telugu, turco y urdu",
          "Sigue el idioma del sistema de forma predeterminada, y Ajustes incluye un selector de idioma si quieres la app en un idioma distinto al del teléfono"
        ]
      },
      {
        title: "Claves y copia de seguridad",
        items: [
          "Genera nuevas claves Ed25519 o ECDSA en el dispositivo (RSA también en Android), con una frase de contraseña opcional",
          "Copia, comparte o guarda una clave pública generada para añadirla al authorized_keys del servidor",
          "Las copias completas incluyen servidores, credenciales, ajustes, idioma y orden de multiplexores; Android añade perfiles SSH VPN, SOCKS5, WireGuard, Shadowsocks y OpenVPN",
          "Exporta una selección o solo el inventario para reducir el alcance; previsualiza la copia completa y elige Combinar o Reemplazar, con cifrado opcional",
          "Las copias sin cifrar contienen contraseñas y claves privadas. La confianza SSH, sesiones activas, permisos del sistema y carpetas no son portables; las credenciales físicas siguen necesitando su clave"
        ]
      },
      {
        title: "Seguridad",
        items: [
          "Pantalla segura: en Android, bloquea las capturas de pantalla y la grabación de pantalla y oculta la app de la miniatura de recientes; en iOS, oculta la vista previa del selector de apps y bloquea la grabación de pantalla y la duplicación de pantalla (en iOS no se puede bloquear una captura de pantalla manual) — un ajuste opcional para cuando hay contraseñas, claves o tokens en pantalla",
          "Los servidores, las credenciales y las claves guardados se almacenan en el dispositivo, sin exigir cuenta ni sincronización en la nube; consulta la página de privacidad para conocer las protecciones del almacenamiento y sus límites",
          "Las estadísticas anónimas están activadas por defecto y pueden desactivarse en Ajustes de Android e iOS; no incluyen servidores, credenciales, comandos ni contenidos de archivos",
          "La identidad SSH se verifica antes de autenticar. Android fija automáticamente nuevas claves sin certificado por defecto, con opción de aprobación; iOS pregunta antes de confiar. Ambos rechazan claves cambiadas",
          "Ambas plataformas importan revocaciones de claves de host OpenSSH con ámbitos definidos. iOS acepta claves Ed25519/ECDSA con @revoked; Android también admite autoridades de certificados de host. iOS no admite certificados de host ni importación de CA. La confianza SSH permanece en cada dispositivo y se excluye de las copias de seguridad"
        ]
      },
      {
        title: "Complementos",
        items: [
          "Explora plugins por categoría, búscalos, instálalos y ejecútalos; el catálogo se actualiza al cambiar de fuente",
          "Los complementos se descargan bajo demanda desde un catálogo público y se verifican con SHA-256 en el almacenamiento privado de la app",
          "Un complemento declara lo que necesita — comandos SSH, un túnel, almacenamiento — y la app le niega todo lo que no haya pedido",
          "Cuando un complemento configura algo en tu servidor, ves antes los comandos exactos y los apruebas antes de que se ejecuten",
          "Configura una fuente de catálogo personalizada o privada, o instala desde una carpeta en tu propio servidor"
        ]
      },
      {
        "title": "Escritorios remotos",
        "items": [
          "Escritorios VNC por túnel SSH en Android/iOS sin exponer el puerto VNC a internet",
          "Puntero táctil, teclados físico y virtual, intercambio del portapapeles y campana del escritorio",
          "Tamaños de pantalla predefinidos o personalizados si el servidor VNC permite redimensionar; se notifican solicitudes incompatibles"
        ]
      },
      {
        "title": "Clientes VPN (Android)",
        "items": [
          "Abre VPN desde el inicio para perfiles SSH VPN, SOCKS5, WireGuard, Shadowsocks y OpenVPN",
          "SSH VPN lleva TCP y DNS por un servidor guardado para todas o algunas apps/dominios; bloquea el resto de UDP asignado a SSH",
          "El proxy SOCKS5 local autenticado funciona junto a otra VPN; las apps deben configurar el proxy y DNS remoto",
          "Importa WireGuard .conf, enlaces Shadowsocks ss:// compatibles u OpenVPN .ovpn autocontenido con certificados verificados",
          "Inicia un perfil para cambiar de VPN; el mosaico Mobile SSH VPN detiene/inicia el perfil recordado y excluye proxies SOCKS",
          "Android admite una VPN de dispositivo. Tailscale usa su app; IKEv2/IPsec se gestiona en Ajustes Android. No se garantiza VPN permanente ni bloqueo"
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
      "Mobile SSH combina SSH, SFTP, VNC y gestores de multiplexores en Android e iOS, con VPN y autenticación mediante claves de seguridad en Android. Termux es un entorno Linux para Android; Termius es un cliente SSH multiplataforma con funciones de productividad basadas en cuentas.",
    columns: {
      need: "Necesidad",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Propósito principal",
        mobileSsh: "SSH, SFTP, VNC, bastiones y multiplexores en ambas plataformas; clientes VPN y FIDO2 en Android.",
        termux: "Emulador de terminal y entorno Linux para Android con paquetes APT.",
        termius: "Cliente SSH moderno para Android, iOS, escritorio y flujos de trabajo en equipo orientados a la web."
      },
      {
        need: "Estilo de configuración",
        mobileSsh: "Guarda servidor y credenciales, elige bastiones si los necesitas y conecta con verificación de identidad previa a la autenticación.",
        termux: "Instala paquetes como OpenSSH, configura herramientas de shell y trabaja desde una línea de comandos al estilo Linux.",
        termius: "Crea o sincroniza hosts, claves, snippets y bóveda a través de la app y la cuenta de Termius."
      },
      {
        need: "Controles de terminal móviles",
        mobileSsh: "Teclas adicionales, cuadrícula, paneles a pantalla completa, zoom táctil, copiar/compartir, ratón y teclados externos. Puedes desactivar Dictado y sugerencias de iOS para entrada directa.",
        termux: "Entorno de terminal potente; el comportamiento depende de las herramientas y la configuración instaladas.",
        termius: "Complemento de teclado móvil, gestos, pestañas, autocompletado, snippets y una UX de terminal pulida."
      },
      {
        need: "Transferencia de archivos",
        mobileSsh: "SFTP de doble panel, historial de carpetas tmux y archivos compartidos entrantes y remotos en ambas plataformas; iOS recuerda carpetas externas de Archivos.",
        termux: "Utiliza herramientas de línea de comandos como scp, sftp, rsync o utilidades de archivos instaladas.",
        termius: "Funciones integradas de SFTP y gestión de hosts/claves."
      },
      {
        need: "Trabajo multi-sesión",
        mobileSsh: "Hasta ocho sesiones SSH simultáneas en una cuadrícula.",
        termux: "Utiliza multiplexores como tmux dentro de Termux o en shells remotos.",
        termius: "Pestañas y vista dividida según la plataforma y el plan."
      },
      {
        need: "Modelo de datos",
        mobileSsh: "Perfiles, credenciales, confianza y ajustes en el dispositivo; copias portables opcionales del inventario y ajustes. Android incluye VPN; la confianza SSH permanece en cada dispositivo.",
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
      { category: "Terminal",          feature: "Búfer de desplazamiento configurable (1000–50 000 líneas)",      mobile: "yes",     termux: "configurable", termius: "parcial" },
      { category: "Terminal",          feature: "Búsqueda en la terminal (búfer de desplazamiento)", mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",          feature: "Fila de teclas extra (ESC/TAB/CTRL/…)",             mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Ajuste de texto con pellizco",                      mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Doble toque para pantalla completa",                mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",          feature: "URL que se pueden tocar en la salida de la terminal", mobile: "yes",     termux: "parcial",      termius: "yes" },
      { category: "Terminal",          feature: "Selección de texto: copiar / compartir / todo",     mobile: "yes",     termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Compatibilidad con teclado por hardware / Bluetooth", mobile: "yes",   termux: "yes",          termius: "yes" },
      { category: "Terminal",          feature: "Integración con el shell (OSC 133)",                mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",          feature: "Imágenes en línea (gráficos Kitty)",                mobile: "yes",     termux: "no",           termius: "no" },
      { category: "Terminal",          feature: "Glifos de mosaico dibujados por la app (chafa, arte ANSI)", mobile: "yes", termux: "depende de la fuente", termius: "no" },
      { category: "Terminal",          feature: "El toque actúa como clic en las TUI con modo de ratón", mobile: "yes", termux: "yes",      termius: "no" },
      { category: "Terminal",          feature: "Representación de glifos Nerd Font / powerline",     mobile: "yes",     termux: "configurable", termius: "parcial" },
      { category: "Sesiones",          feature: "Varias sesiones SSH simultáneas",                   mobile: "hasta 8", termux: "hasta 8",      termius: "yes" },
      { category: "Sesiones",          feature: "Disposición en cuadrícula",                         mobile: "yes",     termux: "mediante tmux", termius: "pestañas" },
      { category: "Sesiones",          feature: "Desplazamiento compatible con tmux",                mobile: "yes",     termux: "yes",          termius: "no" },
      { category: "Sesiones",          feature: "Sugerencias para volver a adjuntarse a tmux al reconectar", mobile: "yes",     termux: "no",           termius: "no" },
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
      { category: "Privacidad y coste", feature: "Desactivar analíticas",                           mobile: "yes", termux: "sin analíticas", termius: "no" },
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
      { feature: "Avisos del agente (cuando un agente conectado necesita tu respuesta)", mobile: "yes", onepilot: "yes",   happy: "yes",        omnara: "yes",       chatgpt: "yes",              claude: "yes" },
      { feature: "Aprobar/denegar las solicitudes del agente con un toque",       mobile: "yes", onepilot: "yes",       happy: "yes",        omnara: "yes",       chatgpt: "yes",              claude: "yes" },
      { feature: "Cero configuración de servidor o SSH",                          mobile: "no",  onepilot: "no",        happy: "parcial",    omnara: "parcial",   chatgpt: "yes",              claude: "yes" },
      { feature: "Android e iOS",                                                 mobile: "yes", onepilot: "Solo iOS",  happy: "yes",        omnara: "yes",       chatgpt: "yes",              claude: "yes" },
      { feature: "Sin cuenta requerida",                                          mobile: "yes", onepilot: "yes",       happy: "yes",        omnara: "no",        chatgpt: "no",               claude: "no" },
      { feature: "Sin muro de pago Pro (todas las funciones gratis)",             mobile: "yes", onepilot: "no",        happy: "no",         omnara: "no",        chatgpt: "plan gratuito",    claude: "no" },
      { feature: "Código abierto",                                                mobile: "Apache 2.0",  onepilot: "no",        happy: "MIT",        omnara: "Apache",    chatgpt: "no",               claude: "no" }
    ],
    agentAppsNote:
      "Las apps nativas de ChatGPT y Claude son la forma más fluida de ejecutar el agente de un solo proveedor sin ninguna configuración — sin servidor, solo una cuenta — y añaden una pulida pantalla de aprobar/denegar con un toque. La pega: ejecutan únicamente su propio modelo en su propia nube, sin terminal general, sin SFTP ni túneles, y sin la opción de usar tu propia máquina, y son de pago o requieren cuenta. Onepilot, Happy y Omnara mantienen el agente en hardware que tú controlas (Onepilot mediante SSH directo; Happy y Omnara mediante un relé en la nube, y Omnara necesita una cuenta). Mobile SSH se conecta directamente a tu propio servidor sin cuenta ni relé del proveedor, ejecuta cualquier agente junto a una terminal completa, SFTP y reenvío de puertos, y todas las funciones son gratis. Ahora responde a las solicitudes del agente igual que ellas — una lista de agentes que muestra todos los agentes de todas las conexiones, con un botón por opción — con la diferencia de que el agente se ejecuta en tu máquina y la respuesta viaja por tu propia conexión SSH. La contrapartida es la de siempre: tú pones el servidor, y hay que instalar en él el hook del agente una vez.",
  },
  privacy: {
    metaTitle: "Política de privacidad | Mobile SSH",
    metaDescription:
      "Cómo trata Mobile SSH los datos, identidades, copias, tráfico SSH/VPN, archivos, estadísticas y permisos en Android e iOS.",
    eyebrow: "Privacidad",
    h1: "Política de privacidad",
    intro:
      "Mobile SSH guarda su configuración en tu dispositivo y conecta a los servidores y servicios que eliges. No necesita cuenta Mobile SSH ni sincronización en la nube. Los clientes VPN opcionales de Android también llevan tráfico seleccionado del dispositivo por tus servidores.",
    sections: [
      {
        heading: "Información almacenada en tu dispositivo",
        body: "Los datos guardados incluyen perfiles de servidores, credenciales, claves privadas, identidades de host, bastiones, reglas de túnel, instantáneas de sesiones, historial de acceso, rutas de archivos, permisos de carpetas y ajustes de la app. Android también almacena configuraciones VPN/proxy y sus secretos. Los secretos de iOS usan el Llavero. Android cifra el inventario con una clave respaldada por Keystore, pero puede guardarlo en texto sin cifrar si el cifrado no está disponible; el almacenamiento de perfiles WireGuard, Shadowsocks y OpenVPN exige cifrado. La copia de Android en la nube está desactivada. Los registros de depuración opcionales se almacenan localmente."
      },
      {
        heading: "Información enviada a través de la red",
        body: "La autenticación SSH va a los servidores y bastiones configurados después de verificar sus identidades. Terminal, SFTP, VNC y reenvíos llegan a los destinos elegidos. Los catálogos y descargas de plugins contactan con sus fuentes. Los perfiles VPN/proxy de Android pueden enviar tráfico de otras apps y DNS por SSH, WireGuard, Shadowsocks u OpenVPN según las rutas. Este tráfico no se envía a estadísticas ni almacenamiento en la nube de Mobile SSH."
      },
      {
        heading: "Transferencia de archivos y acceso al almacenamiento",
        body: "Las transferencias usan los archivos y carpetas elegidos sin permiso general de almacenamiento. Android conserva la autorización de la carpeta. iOS usa la carpeta de la app o recuerda una de Archivos e importa documentos, fotos y archivos compartidos mediante interfaces del sistema. El proveedor elegido puede guardar datos en su nube. Abrir o compartir envía el archivo a la app o destino que eliges."
      },
      {
        heading: "Registros y solución de problemas",
        body: "Los intentos de inicio se registran localmente al conectar. La depuración es opcional: Android advierte que incluye cada tecla, contraseñas también, y exporta un archivo. iOS registra direcciones, fallos, reconexiones, cambios de red y diagnósticos tmux. Revisa antes de compartir: pueden revelar detalles de servidores y, en Android, secretos escritos."
      },
      { heading: "Analítica de uso", body: "Cuando la analítica está activada, Mobile SSH envía a Aptabase interacciones con las funciones (incluidos el uso de VPN/proxy y el tipo de multiplexor de terminal), diagnósticos de conexión, versiones de la aplicación y del sistema operativo, modelo del dispositivo, idioma y un identificador temporal de sesión a través de HTTPS para mejorar la aplicación. Aptabase procesa la dirección IP y el User-Agent de la solicitud para determinar el país o la región y un identificador seudónimo diario; no almacena la dirección IP original ni el User-Agent con los datos de analítica. Los eventos no incluyen tráfico de navegación, consultas DNS, direcciones de servidores, nombres de usuario, credenciales, comandos ni contenido de archivos. Las versiones de Android con el aviso de consentimiento para analítica requieren una aceptación explícita; las versiones anteriores de Android e iOS activan la analítica de forma predeterminada. Todas las funciones están disponibles sin analítica. La recopilación puede detenerse en Ajustes; en iOS todavía pueden enviarse eventos que ya estaban en cola. El consentimiento en Android es local al dispositivo y no se restaura desde copias de seguridad. Consulta el [acuerdo de tratamiento de datos de Aptabase](https://aptabase.com/legal/dpa)." },
      {
        "heading": "Copias que exportas",
        "body": "Las copias completas incluyen inventario y ajustes, además de VPN/proxy en Android. Una frase de contraseña cifra el archivo; sin ella contiene contraseñas y claves privadas en texto plano. Eliges dónde guardarlo o compartirlo. Se excluyen confianza SSH, sesiones activas y permisos de carpetas. La vista previa muestra secciones y ajustes de seguridad que se aplicarán."
      },
      {
        "heading": "Enrutamiento VPN en Android",
        "body": "La VPN requiere autorización de Android y continúa hasta detenerla o que el sistema la termine. Solo funciona una VPN de dispositivo; un proxy SOCKS local puede acompañar otra. SSH transporta TCP/DNS y bloquea otro UDP asignado. Detener, cambiar o terminar la app acaba la protección anterior; Mobile SSH no garantiza VPN permanente ni bloqueo."
      }
    ],
    permissionsHeading: "Permisos",
    permissions: [
      { label: "Internet", body: "se usa para conexiones SSH, archivos, escritorio, VPN y plugins, y estadísticas activadas." },
      { label: "Wake lock y Wi-Fi lock", body: "se usan en Android para mantener activas las sesiones SSH mientras el dispositivo duerme." },
      { label: "Servicio en primer plano y notificaciones", body: "se usan en Android para gestionar conexiones activas en segundo plano; en iOS, las notificaciones se usan para las alertas de agente." },
      { label: "Acceso a archivos", body: "se concede mediante selectores del sistema de carpetas, documentos y fotos; iOS puede recordar una carpeta externa de Archivos. Ninguna plataforma pide acceso general al almacenamiento." },
      {
        "label": "Autorización VPN (Android)",
        "body": "necesaria antes de que un cliente integrado dirija tráfico del dispositivo. Un proxy solo SOCKS no ocupa la conexión VPN del sistema."
      },
      {
        "label": "USB y NFC (Android)",
        "body": "se usan con claves FIDO2 físicas para registro o firma SSH, con permiso USB y confirmación de toque/PIN según corresponda."
      }
    ],
    securityHeading: "Responsabilidades de seguridad",
    securityBody:
      "Protege el dispositivo y las copias exportadas. Compara huellas SSH desconocidas por un canal fiable: desactiva la aceptación automática de Android si quieres aprobar el primer uso; iOS pregunta por defecto. Investiga claves cambiadas antes de reemplazarlas. Pantalla segura bloquea capturas y grabaciones en Android; iOS oculta la vista previa del selector y la grabación/duplicación, pero no puede bloquear capturas manuales.",
    contactHeading: "Contacto",
    contactBody: "Contacto de soporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentación | Mobile SSH",
    metaDescription: "Documentación de usuario de Mobile SSH para Android e iOS.",
    eyebrow: "Guía de usuario",
    h1: "Documentación de Mobile SSH",
    intro:
      "Guías de identidad SSH, bastiones, terminales/VNC, multiplexores, SFTP, copias, túneles locales y clientes VPN de Android, con sus diferencias entre plataformas.",
    cards: [
      { slug: "getting-started",  title: "Primeros pasos",            text: "Instala, verifica identidades, configura bastiones y claves y guarda tu configuración." },
      { slug: "terminal",         title: "Terminal",                  text: "Usa controles del terminal, tmux, herdr, Zellij, alertas de agentes y escritorios VNC." },
      { slug: "file-transfer",    title: "Transferencia de archivos", text: "Transfiere archivos, recuerda carpetas y comparte con sesiones u otras apps." },
      { slug: "port-forwarding",  title: "Reenvío de puertos",        text: "Configura túneles locales y SSH VPN, SOCKS5, WireGuard, Shadowsocks y OpenVPN en Android." },
      { slug: "troubleshooting",  title: "Solución de problemas",     text: "Diagnostica problemas de identidad, bastiones, terminal, transferencias, copias y VPN." }
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
    intro: "SSH, SFTP, VNC y multiplexores para Android e iOS, con copias locales, identidades verificadas y bastiones. Android también incluye VPN y claves de seguridad físicas.",
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
    openvpnSourceHeading: "Código fuente de OpenVPN",
    openvpnSourceBody: "OpenVPN 3 Core se utiliza bajo MPL 2.0. Descarga el código fuente cubierto y las versiones exactas de sus dependencias, los textos de las licencias y la información de compilación nativa.",
    openvpnSourceLabel: "Descargar archivo de código fuente",
    certificatesHeading: "Certificados",
    apkCertificateLabel: "Certificado de firma del APK de instalación directa (PEM)",
    apkCertificateBody: "Este certificado público identifica al firmante del APK de instalación directa de Mobile SSH. Google Play puede firmar las descargas con otro certificado.",
    serverCertificateBody: "Los certificados de servidores SSH y VPN deben proceder de tu administrador del servidor o proveedor de VPN. Verifica sus huellas digitales por un canal de confianza; este certificado de firma no es una CA de VPN.",
    signingHelpLabel: "Documentación de firma de Android",
    contactHeading: "Contacto",
    contactBody: "Contacto de soporte: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
