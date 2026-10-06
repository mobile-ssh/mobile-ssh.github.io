import { defineYourServer } from "./define";

export const es = defineYourServer({
  "metaTitle": "Tu agente. Tu servidor. Tus reglas. | Mobile SSH",
  "metaDescription": "Elige dónde se ejecuta tu agente de programación: un entorno gestionado, tu propia cuenta en la nube o un equipo de tu propiedad. Conserva el control del acceso, las copias y la salida.",
  "back": "Blog",
  "eyebrow": "Propiedad",
  "title": "Tu agente. Tu servidor. Tus reglas.",
  "standfirst": "Un entorno de agente listo para usar ahorra tiempo de preparación. Antes de darle tu repositorio, decide quién debe tener la máquina, las credenciales y el control de la salida. Mobile SSH te permite traer tu propio servidor, desde el equipo bajo tu escritorio hasta una máquina virtual en tu cuenta de la nube.",
  "author": "El consejo editorial de Mobile SSH",
  "date": "5 de octubre de 2026",
  "readingTime": "7 min de lectura",
  "figure": {
    "heading": "Elige el servidor. Comprueba la ruta al modelo.",
    "phone": "Tu teléfono · Mobile SSH",
    "connection": "SSH al servidor que elijas",
    "hosts": [
      {
        "id": "owned",
        "title": "Tu equipo físico",
        "detail": "En casa, en la oficina o en tu propia sala de servidores"
      },
      {
        "id": "cloud",
        "title": "Una máquina virtual en tu cuenta de la nube",
        "detail": "Tú administras el sistema invitado; el proveedor opera el hardware"
      }
    ],
    "workspace": "Los archivos, las herramientas y el proceso del agente están en el servidor elegido",
    "modelConnection": "Si usas un modelo en la nube, las instrucciones y el contexto seleccionado salen del servidor",
    "model": "El servicio de modelos que elijas",
    "caption": "Tres decisiones distintas: cómo te conectas, dónde se ejecuta el código y dónde lo procesa el modelo. Controlar las dos primeras no hace que la tercera sea local."
  },
  "body": [
    "La propuesta resulta atractiva: abrir un entorno y encontrar Codex, Claude Code o Gemini CLI ya preparados. Sin máquinas que configurar ni paquetes que instalar. Conecta un repositorio, describe la tarea y deja que una máquina virtual en la nube haga el trabajo. Para un experimento o un proyecto desechable, esa comodidad puede ser justo lo que buscas.",
    "Después, el experimento se convierte en tu entorno diario. Llega el código privado. También los datos de prueba, la documentación interna y las credenciales que proporciones. Antes de que esa entrega se vuelva rutinaria, haz una pregunta más duradera: ¿quién controla el lugar donde vive este trabajo?",
    "Un entorno listo para usar tiene un operador",
    "En un entorno de agente gestionado por un proveedor, otra persona opera el servidor de ejecución. Tu repositorio puede clonarse allí, pueden subirse datos y concederse permisos para acceder a otros sistemas. El aislamiento, el acceso administrativo, la retención y las opciones de exportación dependen del servicio. Las herramientas preinstaladas indican lo rápido que puedes empezar; dicen poco sobre esas condiciones.",
    "Puedes tomar esa decisión de forma consciente. Los entornos gestionados pueden reducir el mantenimiento y ofrecer un aislamiento útil. Lee qué ocurre con los discos del entorno, las transcripciones, las instantáneas y las credenciales, incluso después de terminar una sesión o cerrar una cuenta. No hace falta suponer malas intenciones para querer respuestas claras sobre tu trabajo privado.",
    "Conserva las claves. Conserva una copia. Conserva la posibilidad de irte.",
    "Tres lugares para ejecutar el mismo agente",
    "Una máquina virtual en tu propia cuenta de la nube ofrece otra distribución de responsabilidades. Eliges el sistema operativo invitado, instalas las herramientas, concedes acceso y gestionas el ciclo de vida de la instancia. La empresa de la nube sigue operando la infraestructura física. Llamarlo tu servidor describe el control administrativo, no la propiedad del hardware subyacente. <a href=\"#source-cloud\">[1]</a>",
    "Un equipo físico de tu propiedad va más allá: eliges el hardware y decides dónde estará. Un ordenador que ya tengas, un pequeño servidor doméstico o un equipo de oficina pueden alojar el entorno. También asumes las tareas prácticas: electricidad, conectividad, reparaciones, actualizaciones y recuperación. La propiedad te da decisiones que tomar; no las toma por ti.",
    "Lleva tu servidor al teléfono",
    "Mobile SSH funciona con cualquiera de las dos opciones que administras tú. Conéctate a un servidor SSH accesible en tu red local, mediante una ruta de red que configures o en tu cuenta de la nube. Las sesiones SSH normales no requieren un relé de sesiones operado por Mobile SSH ni una cuenta de Mobile SSH. Tú eliges el destino y proporcionas sus credenciales.",
    "Instala el agente que quieras en ese servidor. Abre su directorio de trabajo, ejecuta Codex, Claude Code o Gemini CLI y usa el terminal que ya conoces. Puedes mantener una sesión bajo tmux, herdr o Zellij y volver a ella desde el teléfono mientras el servidor y el proceso sigan funcionando. El trabajo pertenece a ese entorno; cambiar de teléfono no exige mover el repositorio.",
    "Así conservas decisiones útiles. Mantén los datos de prueba sensibles en una máquina local. Usa una máquina virtual en la nube cuando sus recursos encajen con la tarea. Cambia de agente sin rehacer el flujo de trabajo móvil. Mobile SSH ofrece acceso al terminal, SFTP y túneles; no te exige alquilar un entorno de agente concreto.",
    "Tu servidor y tu modelo son decisiones distintas",
    "Esta distinción importa especialmente al hablar de datos privados. Ejecutar un agente en hardware propio no implica ejecutar allí su modelo. Un agente respaldado por la nube puede enviar instrucciones, contexto seleccionado del repositorio y resultados de herramientas al servicio del modelo. El proceso del agente y el árbol de trabajo pueden permanecer en tu servidor mientras la inferencia ocurre en otro lugar. <a href=\"#source-claude\">[2]</a> <a href=\"#source-gemini\">[3]</a>",
    "SSH cifra la conexión entre tu teléfono y su destino. No impide que el software del servidor lea archivos permitidos ni haga sus propias solicitudes de red. Decide qué servicio de modelos usa el agente, qué puede leer y qué herramientas o integraciones pueden enviar datos fuera. Comprueba las políticas de tu cuenta y configuración concretas.",
    "Si el trabajo requiere inferencia local, elige una combinación compatible de agente y modelo y verifica su comportamiento de red. No deduzcas esa garantía de la palabra local en un instalador. Las funciones opcionales de analítica y descarga de plugins de Mobile SSH también tienen sus propios flujos de datos; los ajustes y la política de privacidad de la app los explican.",
    "Haz que el control sea algo que puedas ejercer",
    "Una contraseña de root es solo el principio. El control práctico significa poder restringir el acceso, recuperarte de un error, inspeccionar los cambios y mover el entorno sin pedir a una plataforma de agentes que lo conserve por ti. Dedica a esas capacidades la misma atención que a elegir el modelo.",
    "Nada de esto convierte automáticamente un servidor doméstico en algo más seguro que un servicio gestionado. Un equipo descuidado con credenciales demasiado amplias puede ser un mal lugar para datos privados. Elige un nivel de responsabilidad que puedas mantener. La ventaja es poder tomar esa decisión, examinarla y cambiarla cuando cambien tus necesidades.",
    "Sé dueño de la máquina cuando puedas. Conserva el control del entorno dondequiera que se ejecute.",
    "La próxima vez que un entorno de agente listo para usar te pida el repositorio, detente un momento antes de conectarlo. Decide dónde deben vivir los archivos, quién debe administrar ese servidor y cómo te llevarás el trabajo. Después, coge el teléfono. Mobile SSH puede encontrarte en el servidor que elegiste."
  ],
  "comparison": {
    "heading": "¿Quién controla qué?",
    "dimension": "Decisión",
    "models": [
      {
        "id": "managed",
        "title": "Entorno de agente gestionado"
      },
      {
        "id": "cloud",
        "title": "Máquina virtual en tu cuenta de la nube"
      },
      {
        "id": "owned",
        "title": "Hardware de tu propiedad"
      }
    ],
    "rows": [
      {
        "id": "hardware",
        "label": "Hardware físico",
        "managed": "Proveedor del servicio o de infraestructura",
        "cloud": "Proveedor de la nube",
        "owned": "Tú eres dueño de la máquina"
      },
      {
        "id": "admin",
        "label": "Control administrativo",
        "managed": "Lo define el servicio",
        "cloud": "Tú administras el sistema operativo invitado",
        "owned": "Tú administras el servidor"
      },
      {
        "id": "storage",
        "label": "Entorno y almacenamiento",
        "managed": "Discos y retención gestionados por el servicio",
        "cloud": "Volúmenes y ciclo de vida que configuras",
        "owned": "Almacenamiento que eliges y mantienes"
      },
      {
        "id": "access",
        "label": "Credenciales y política de red",
        "managed": "Controles del servicio y permisos que concedes",
        "cloud": "Tu configuración del sistema, las identidades y la red",
        "owned": "Tu configuración del sistema, las identidades y la red"
      },
      {
        "id": "portability",
        "label": "Copias y salida",
        "managed": "Comprueba las opciones de exportación y borrado",
        "cloud": "Gestiona copias fuera de la instancia",
        "owned": "Gestiona copias fuera de la máquina"
      },
      {
        "id": "maintenance",
        "label": "Trabajo operativo",
        "managed": "El proveedor opera el entorno; tú configuras su uso",
        "cloud": "Mantienes el sistema invitado; el proveedor, la infraestructura",
        "owned": "Mantienes el hardware, el sistema y la conectividad"
      }
    ],
    "note": "Son configuraciones habituales, no garantías sobre todos los servicios. En todas las columnas, los flujos de datos hacia el proveedor del modelo dependen del agente y la configuración que elijas."
  },
  "checklist": {
    "heading": "Seis formas de conservar el control",
    "steps": [
      {
        "heading": "Da a las credenciales una tarea pequeña",
        "body": "Usa credenciales separadas y revocables para el entorno. Concede solo los permisos de repositorios y servicios que necesite la tarea."
      },
      {
        "heading": "Limita el entorno",
        "body": "Cuando sea viable, ejecuta el agente con un usuario dedicado y sin privilegios. Mantén fuera de su alcance archivos privados ajenos a la tarea y secretos de producción."
      },
      {
        "heading": "Verifica el destino SSH",
        "body": "Comprueba huellas de servidores desconocidas por un canal fiable. Investiga las claves cambiadas antes de sustituir una identidad guardada."
      },
      {
        "heading": "Conserva una copia independiente",
        "body": "Guarda copias cifradas en cuentas que controles, separadas del servidor de trabajo. Prueba una restauración, incluido el trabajo sin confirmar que necesites conservar."
      },
      {
        "heading": "Revisa qué sale del servidor",
        "body": "Comprueba los destinos del modelo, los plugins, las herramientas externas y los ajustes de telemetría. Comparte el mínimo contexto necesario y revisa los cambios resultantes."
      },
      {
        "heading": "Practica la mudanza",
        "body": "Restaura el entorno en otro servidor, vuelve a conectarte y ejecuta sus pruebas. La posibilidad de irte debe ser algo que hayas probado."
      }
    ]
  },
  "sources": {
    "heading": "Fuentes y límites",
    "aws": "AWS: responsabilidad compartida sobre la infraestructura de la nube y los sistemas invitados",
    "anthropic": "Claude Code: ejecución local, conexiones a la nube y uso de datos",
    "google": "Gemini CLI: servicios de modelos y avisos de privacidad aplicables",
    "checked": "Documentación de las fuentes revisada el 5 de octubre de 2026. Las condiciones de las cuentas y las capacidades de los servicios pueden cambiar."
  },
  "cta": {
    "heading": "Conéctate al servidor que elegiste.",
    "body": "Usa Mobile SSH en Android o iOS para acceder a tus máquinas, ejecutar tus herramientas y mantener tu entorno al alcance.",
    "playButton": "Consíguelo en Google Play",
    "iosButton": "Únete a la beta de iOS",
    "docsLink": "Configura tu primera conexión",
    "privacyLink": "Lee la política de privacidad"
  }
});
