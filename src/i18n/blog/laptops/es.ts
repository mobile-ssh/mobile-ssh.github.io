import type { LaptopsPost } from "./types";

// Spanish translation of /blog/laptops-are-dead/.
// Register: the obituary conceit of the English original, carried over to the
// Spanish funeral-notice idiom (esquela): "falleció apaciblemente", "le
// sobreviven", "en lugar de flores", "el velatorio". Product, protocol and
// proper names stay untranslated; the inline markup and entities are the ones
// the English source shipped with.

export const es: LaptopsPost = {
  metaTitle: "El portátil ha muerto, pero SSH y TCP/IP sobrevivieron | Mobile SSH",
  metaDescription:
    "Elegía cariñosa por el portátil (1981–2026). TCP/IP se diseñó en 1974 y SSH se escribió en 1995; ambos sobrevivieron al hardware y siguieron su camino hasta el dispositivo que ya llevas en la mano. Los argumentos a favor de Mobile SSH: el cliente de SSH, SFTP y terminal para Android, iPhone y iPad. Gratis, nativo y de código abierto.",

  back: "Blog",
  eyebrow: "Opinión",
  titleLead: "El portátil ha muerto.",
  titleSoft: "Larga vida a tu bolsillo.",
  standfirst: `<b>Pero SSH y TCP/IP sobrevivieron.</b> Elegía cariñosa por un amigo pesado y de barriga tibia —
y los argumentos a favor del terminal que se mudó sin hacer ruido al dispositivo que ya llevas en la mano.`,
  author: "La redacción de Mobile SSH",
  date: "27 de julio de 2026",
  readingTime: "7 min de lectura",

  leadFigure: {
    terminal: {
      title: "ssh · prod-01 · tmux",
      prompt: "you@prod-01",
      path: "~/app",
      command: `claude "arregla el test que falla"`,
      reading: "leyendo src/api/auth.ts",
      patching: "parcheando la renovación del token …",
      result: "3 archivos cambiados, tests en verde",
      needsInput: "el agente necesita tu respuesta",
      push: "git push origin main"
    },
    toast: {
      title: "Alertas de agente",
      host: "prod-01",
      body: "Claude Code está esperando tu revisión"
    },
    caption:
      "Prueba A: una sesión SSH real, un agente de programación y una alerta de agente — funcionando en eso que llevas en el bolsillo, sin un cargador a la vista."
  },

  body: [
    {
      kind: "lead",
      html: `El Portátil — querido compañero de programadores, escritores y viajeros de todo el mundo — falleció
apaciblemente esta semana a los 45 años, en una cafetería, con un 6&nbsp;% de batería y ningún cargador a
la vista. Le rodeaban, como siempre, las pestañas que había prometido leer.`
    },
    {
      kind: "p",
      html: `No hubo dramatismo. Simplemente se atenuó, dejó escapar un último suspiro por el ventilador y preguntó
— por última vez, en el peor momento posible — si no sería buen momento para instalar una actualización.`
    },
    {
      kind: "pull",
      html: `«Exigía reiniciar el firmware justo en el instante en que por fin se te ocurría una idea. Siempre lo hacía.»`
    },
    { kind: "h2", html: `Una vida pesada, cargada con devoción` },
    {
      kind: "p",
      html: `Nacido en 1981 del Osborne&nbsp;1 — once kilos de ambición transportable, sin batería, con una pantalla
de cinco pulgadas —, el Portátil pasó cuarenta y cinco años adelgazando sin llegar nunca a ser ligero.
Murió con kilo y medio, algo que su progenitor habría considerado brujería. Recordamos el teclado. La
barriga tibia. Los ventiladores que anunciaban con su zumbido cada acto de pensamiento. La mochila
siempre un poco demasiado llena, el ladrillo del cargador del tamaño de una novela corta y la búsqueda
— eterna, esperanzada — de un enchufe libre junto a la ventana.`
    },
    {
      kind: "p",
      html: `Nos pedía mucho y aun así lo cargamos, del escritorio a la puerta de embarque y al asiento 24B, porque
durante mucho tiempo fue lo único capaz de albergar un terminal de verdad. Eso ya no es cierto.`
    },
    { kind: "h2", html: `Le sobreviven sus mayores` },
    {
      kind: "p",
      html: `El Portátil no deja descendencia. Los sucesores que le prometieron — la tableta, el Chromebook, ese
chisme con teclado desmontable — llegaron, se sentaron al fondo y resultaron ser portátiles con menos
puertos. Le sobreviven, en cambio, dos parientes que ya estaban trabajando cuando él nació y que
seguían trabajando esta mañana.`
    },
    {
      kind: "p",
      html: `<strong>TCP/IP</strong> es el mayor. Vint Cerf, Bob Kahn y un largo reparto de colaboradores publicaron
el diseño en mayo de 1974; el RFC&nbsp;675 lo detalló aquel diciembre y, de paso, acuñó la palabra
“internet”. ARPANET empezó a migrar a él el 1 de enero de 1983 y había terminado para junio de ese
mismo año — momento en el cual el Portátil era un crío con disquetera.`
    },
    {
      kind: "p",
      html: `<strong>SSH</strong> es el sobrino, treinta y un años y el más joven de los que portan el féretro. Tatu
Ylönen lo escribió en la Helsinki University of Technology en la primavera de 1995, después de que un
sniffer en la red de la universidad recopilara en silencio miles de contraseñas. Publicó
<code>ssh-1.0.0</code> aquel julio y eligió él mismo el puerto 22: el único número libre entre FTP en el
21 y telnet en el 23, con la teoría de que colocarse entre los dos protocolos que pretendía sustituir
“podía ser una de esas cosas pequeñas que dan cierta aura de credibilidad”. Se lo pidió a IANA el lunes.
Le dijeron que sí el martes. Lo publicó el miércoles.`
    },
    { kind: "ledger" },
    { kind: "h2", html: `Lo que los protocolos nunca dieron por supuesto` },
    {
      kind: "p",
      html: `Su longevidad no tiene misterio. Duraron porque no daban casi nada por supuesto. TCP asume paquetes, y
que algunos se perderán, se duplicarán o llegarán en el orden equivocado. SSH asume un flujo de bytes
fiable y un par de claves. Ausentes de ambas listas: el tamaño de la pantalla, la distribución del
teclado, la carcasa, la bisagra, el enchufe de la pared y un fabricante que siga en el negocio.`
    },
    {
      kind: "p",
      html: `SSH ni siquiera da por supuesto el tamaño de tu terminal. Lo pregunta — y aceptará una respuesta
distinta más adelante. Aquello fue una cortesía inventada para quien arrastraba la esquina de una
ventana de escritorio. Es también la razón por la que girar el teléfono no termina una sesión.`
    },
    {
      kind: "pull",
      html: `«El hardware es un cuerpo. Un protocolo es una costumbre. Solo uno de los dos se puede caer por el hueco de la escalera.»`
    },
    {
      kind: "p",
      html: `Todo lo que estaba atado a una carcasa se fue primero, y nada de ello murió de mala ingeniería. La
disquetera, la ranura PC Card, el conector de la base — cada uno estaba bien hecho para unas
condiciones, y las condiciones eran la parte mortal. Un protocolo ni siquiera está atado a su dueño.
Cuando la licencia de las versiones posteriores de Ylönen se endureció, el proyecto OpenBSD volvió a
<code>ssh 1.2.12</code>, la última versión lo bastante libre como para reutilizarla, y publicó OpenSSH
con OpenBSD&nbsp;2.6 el 1 de diciembre de 1999. El protocolo siguió adelante sin inmutarse. Nunca había
pertenecido a nadie en particular, que es precisamente la razón de que siga aquí.`
    },
    { kind: "h2", html: `La única suposición que hubo que parchear` },
    {
      kind: "p",
      html: `La honestidad obliga a una corrección. TCP sí hizo una suposición, y era falsa: dio por supuesto que la
máquina se queda quieta. Una conexión se identifica con cuatro números — dos direcciones, dos puertos
—, que era una manera perfectamente sensata de nombrar una cosa en 1981, cuando la cosa estaba
atornillada a una sala con suelo técnico. Sal de una cafetería con el teléfono en la mano y uno de esos
cuatro números pasa a ser, discretamente, una mentira.`
    },
    {
      kind: "p",
      html: `No hubo un segundo funeral. Se conservó el protocolo y se parcheó la suposición a su alrededor. El
trabajo se mudó al otro extremo, fuera del alcance de un cliente que cruza una puerta:
<code>screen</code>, luego <code>tmux</code>, manteniendo la shell abierta mientras el terminal va y
viene. Eternal Terminal fue más lejos y le puso nombre a la sesión en vez de a la dirección, de modo que
la sesión sobrevive a que la dirección cambie por debajo.`
    },
    {
      kind: "pull",
      html: `«Tus servidores nunca fueron leales al portátil. Eran leales al puerto.»`
    },
    {
      kind: "p",
      html: `Nada de eso se inventó para los teléfonos. Ellos lo heredaron. Un cliente que lleva un transporte de
Eternal Terminal, un gestor de tmux, keepalives con reconexión de retroceso exponencial y varias
direcciones por servidor guardado puede salir de un edificio a mitad de comando y retomar el hilo en la
acera. Al otro extremo se le dice la cadena de versión de tu cliente y el tamaño de tu terminal. Nunca
se le dice si hay una bisagra.`
    },
    { kind: "h2", html: `El trabajo se mudó, sin hacer ruido, a un bolsillo` },
    {
      kind: "p",
      html: `En sus últimos años, al Portátil le entró angustia por su relevancia. Motivos tenía. El trabajo que un
día reclamó como suyo — un terminal de verdad, transferencia de archivos de verdad, claves de verdad,
túneles de verdad — se había deslizado sin hacer ruido hasta el dispositivo que ya llevas en la mano.`
    },
    {
      kind: "p",
      html: `Ese dispositivo ejecuta <strong>Mobile SSH</strong>: un cliente nativo de SSH, SFTP y terminal para
Android, iPhone y iPad. No una shell de juguete. No un escritorio remoto disfrazado de terminal. Un
terminal <span class="nowrap">xterm-256color</span> completo — el de verdad — que cabe en el hueco que
antes ocupaba el cargador del Portátil.`
    },
    {
      kind: "pull",
      html: `«El trabajo que un día llamó suyo se mudó a un bolsillo — y ni una sola vez pidió un enchufe.»`
    },
    { kind: "h2", html: `Le sobreviven: tu teléfono — y Mobile SSH` },
    {
      kind: "p",
      html: `El legado, detallado. En lugar de flores, la familia solo pide que leas la elegía de aquí abajo y tomes
nota de que cada una de sus líneas es software real que puedes instalar hoy mismo.`
    },
    { kind: "estate" },
    {
      kind: "pull",
      html: `«“El portátil ha muerto” es una elegía, no un informe forense. Los portátiles siguen siendo bienvenidos en el velatorio.»`
    },
    {
      kind: "p",
      html: `Lo decimos con cariño. El Portátil sirvió con honor y es bienvenido en el velatorio — abierto sobre una
mesita auxiliar, con el ventilador girando suavemente, enchufado por fin. Pero el trabajo del día ha
hecho la maleta más ligera y se ha ido del edificio. Ahora cabe en un bolsillo. Y contesta al primer
timbre.`
    },
    {
      kind: "p",
      html: `SSH y TCP/IP no mandaron flores. Estaban trabajando.`
    }
  ],

  ledger: {
    entries: [
      {
        year: "1974",
        event: "Cerf, Kahn y sus colegas publican el diseño que se convertirá en TCP/IP",
        status: "sigue funcionando",
        on: true
      },
      {
        year: "1978",
        event: "DEC lanza el VT100, su primer terminal compatible con ANSI",
        status: "sus secuencias siguen en uso",
        on: true
      },
      {
        year: "1981",
        event: "El Osborne&nbsp;1 sale a la venta: 11&nbsp;kg, 1795&nbsp;$, solo con corriente de red",
        status: "descatalogado en 1983",
        on: false
      },
      {
        year: "1983",
        event: "ARPANET termina de pasar de NCP a TCP/IP",
        status: "sigue funcionando",
        on: true
      },
      {
        year: "1995",
        event: "SSH se escribe en Helsinki; IANA concede el puerto 22 el 11 de julio",
        status: "sigue funcionando",
        on: true
      },
      {
        year: "2026",
        event: "El Portátil, a los 45, en una cafetería, al 6&nbsp;% y sin cargador",
        status: "le sobreviven los anteriores",
        on: false
      }
    ],
    caption: "Orden de precedencia, tal como se leyó en el funeral. El doliente de más edad tiene cincuenta y dos años."
  },

  estate: [
    {
      heading: "Un terminal de verdad, en tu bolsillo",
      body: "Emulación completa de <code>xterm-256color</code>, hasta ocho sesiones simultáneas en una cuadrícula redimensionable, un gestor de sesiones de tmux integrado y Eternal Terminal para conexiones que sobreviven a los cortes de red, al modo de suspensión y a los cambios de IP."
    },
    {
      heading: "Archivos y túneles, de serie",
      body: "Un explorador SFTP de doble panel para mover archivos entre el teléfono y el servidor, con reenvíos de puertos locales y túneles guardados junto a cada host — levantados automáticamente al conectar."
    },
    {
      heading: "Claves generadas en el dispositivo",
      body: "Generación de claves SSH en el propio dispositivo — Ed25519 y ECDSA — con autenticación por contraseña o por clave privada. Nada sale del teléfono."
    },
    {
      heading: "Agentes de programación, con Alertas de agente",
      body: "Ejecuta Claude Code, Codex y otros agentes en tus <em>propios</em> servidores, directamente desde el teléfono. Las Alertas de agente disparan una notificación push — con sonido y vibración — en cuanto un agente necesita tu respuesta, así que puedes alejarte sin perder el hilo."
    },
    {
      heading: "Vestido para la ocasión",
      body: "Fuentes y esquemas de color configurables, glifos powerline y de iconos de Nerd Font, y un sistema de complementos para ampliarlo aún más — ajusta el terminal hasta que lo sientas tuyo."
    },
    {
      heading: "Gratis de verdad, sin letra pequeña",
      body: "Sin anuncios. Sin muro de pago Pro. Sin cuenta. Tus datos se quedan en el dispositivo y todo el proyecto es de código abierto bajo la licencia Apache-2.0."
    }
  ],

  cta: {
    ariaLabel: "Consigue Mobile SSH",
    heading: "En lugar de flores, cierra unas cuantas pestañas.",
    body: "Instala Mobile SSH, dale a tu portátil el descanso que se ha ganado y lleva un terminal de verdad en el bolsillo — gratis, nativo y de código abierto.",
    tags: ["Sin anuncios", "Sin cuenta", "Datos en el dispositivo", "Apache-2.0"],
    playButton: "Apuntarse en Google Play",
    iosButton: "Unirse a la beta de iOS",
    note: `Android está en pruebas cerradas: apúntate con la cuenta de Google con la que vayas a probar y abre
el enlace de inscripción en el navegador del móvil — puede que la prueba cerrada no se vea dentro de la
app de Google Play. ¿Ya te has apuntado? Ve directo a la <a href="{playUrl}" rel="noopener">ficha de Play</a>.`
  }
};
