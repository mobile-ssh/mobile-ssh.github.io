import type { CloudGuides } from "./types";

export const es: CloudGuides = {
  "title": "Crear una máquina virtual en {provider}",
  "description": "Creación paso a paso de una máquina virtual en {provider}: IPv4 pública, reglas de cortafuegos, acceso SSH desde Mobile SSH, credenciales API opcionales y eliminación de recursos.",
  "intro": "Crea un servidor Ubuntu con una IPv4 pública en tu propia cuenta de {provider}. Sigue los pasos de la consola, conéctate desde Mobile SSH e instala wg-easy como una tarea independiente.",
  "back": "Máquinas virtuales en la nube y wg-easy",
  "indexHeading": "Guías paso a paso por proveedor de nube",
  "indexIntro": "Elige tu proveedor para consultar sus pantallas de consola, configuración de IP pública, usuario SSH, credenciales API opcionales y eliminación de recursos. AWS Lightsail y EC2 tienen guías independientes.",
  "cardAction": "Crear una máquina virtual y conectar con Mobile SSH",
  "navLabel": "Elegir un proveedor de nube",
  "openConsole": "Abrir la consola del proveedor",
  "availability": "Estas instrucciones utilizan la consola del proveedor. Los complementos independientes para crear máquinas virtuales están previstos; la implementación combinada VPN Setup de Android es local y no está publicada. La sección de API prepara un acceso futuro y no es necesaria para este procedimiento manual.",
  "availabilityLink": "Consultar la disponibilidad de los complementos",
  "checked": "Documentación de las consolas revisada el 8 de noviembre de 2026.",
  "beforeHeading": "Antes de empezar",
  "before": [
    "Activa la facturación y comprueba las cuotas regionales de máquinas virtuales, discos e IP públicas. Revisa el precio indicado antes de crear recursos; no des por hecho que existe un nivel gratuito o que un plan concreto está disponible.",
    "Para esta configuración, utiliza Ubuntu 24.04 LTS con al menos 1 GB de RAM y 20 GB de almacenamiento, o el mínimo superior del proveedor. Haz coincidir la arquitectura de CPU con la imagen. Es la base elegida para esta guía, no un mínimo universal de wg-easy.",
    "Guarda una clave privada SSH en Mobile SSH y sube únicamente su clave pública. Ed25519 funciona con los clientes actuales de Android e iOS; los pasos de Lightsail explican la importación de RSA y la alternativa para iOS. Anota tu IPv4 pública actual seguida de <code>/32</code> como origen SSH, o utiliza tu CIDR de administración autorizado."
  ],
  "networkHeading": "Reglas de red para esta configuración",
  "networkRules": [
    "Permite la entrada de <code>TCP 22</code> desde el CIDR de administración. Elimina las reglas SSH más amplias si no son necesarias; añadir una regla restringida no anula automáticamente otra más amplia. Actualiza el origen cuando cambie la dirección pública del teléfono.",
    "Para el paso posterior de VPN, permite la entrada de <code>UDP 51820</code> desde las redes de los clientes VPN; los clientes que cambian de red pueden necesitar <code>0.0.0.0/0</code>. Si activas IPv6, configura sus reglas de forma deliberada.",
    "Mantén cerrado al público <code>TCP 51821</code>. La interfaz de administración de wg-easy escuchará en la dirección de bucle local del servidor y se accederá a ella mediante reenvío SSH.",
    "Permite el tráfico saliente necesario para DNS, descargas de paquetes y contenedores, y VPN. Revisa tanto los cortafuegos de la nube como los del sistema invitado; conserva las reglas de almacenamiento del proveedor y las reglas ICMP esenciales."
  ],
  "stepsHeading": "Crear el servidor y conectar",
  "sourceLink": "Instrucciones del proveedor",
  "connectHeading": "Guardar el servidor en Mobile SSH",
  "connectText": "Abre Servidores, añade un servidor e introduce estos valores. Selecciona la credencial que contiene la clave privada correspondiente. Utiliza el nombre de usuario que configuraste si difiere del ejemplo de la guía.",
  "hostLabel": "Host",
  "hostValue": "La IPv4 pública de la máquina virtual que muestra la consola del proveedor",
  "portLabel": "Puerto",
  "userLabel": "Nombre de usuario",
  "credentialLabel": "Autenticación",
  "credentialValue": "La credencial con la clave privada SSH correspondiente",
  "identityText": "Obtén la huella de la clave de host SSH mediante la consola de confianza del proveedor o los registros de arranque y compárala antes de confiar en la conexión. En Android, desactiva la aceptación automática de identidades nuevas si quieres revisar el primer uso. Investiga las advertencias de cambio de clave antes de sustituir una identidad guardada.",
  "connectionGuide": "Claves SSH y comprobaciones de identidad",
  "vpnHeading": "Instalar wg-easy en un paso independiente",
  "vpnText": "Primero confirma que el servidor guardado abre una terminal y que tu usuario tiene acceso root o sudo. Después sigue la guía común de instalación de wg-easy: Docker, un contenedor fijado a una versión, administración privada mediante SSH, creación de clientes y verificación de la VPN. El instalador necesita acceso SSH, no el secreto de tu API de nube.",
  "vpnLink": "Continuar con los pasos de instalación de wg-easy",
  "apiHeading": "Credenciales API opcionales para un complemento futuro",
  "apiIntro": "Omite esta sección si utilizas la consola. Crea credenciales solo cuando las necesite una herramienta de aprovisionamiento compatible. Las listas de permisos siguientes son orientativas para preparar el acceso, no políticas mínimas probadas para un complemento publicado.",
  "apiSecretNote": "Introduce las credenciales únicamente en un formulario protegido compatible. No incluyas secretos de nube en instrucciones de voz, comandos de terminal ni en la máquina virtual. Utiliza el alcance más restringido que se admita, anota la caducidad y revoca las credenciales que ya no necesites.",
  "cleanupHeading": "Eliminar los recursos que ya no necesitas",
  "cleanupWarning": "Detener la máquina virtual, cancelar una tarea de configuración o eliminar un perfil de Mobile SSH no elimina los recursos de nube ni garantiza que dejen de cobrarse. Conserva los identificadores de recursos hasta confirmar su eliminación y mantén los recursos ajenos a esta configuración.",
  "providers": {
    "aws-lightsail": {
      "consoleSteps": [
        "Inicia sesión en tu cuenta de AWS, abre Lightsail y selecciona <strong>Crear instancia</strong>. Elige la región más cercana a la ubicación prevista para tu VPN.",
        "Selecciona <strong>Linux/Unix → Solo sistema operativo → Ubuntu 24.04 LTS</strong>. Elige un plan de doble pila IPv4/IPv6 con al menos 1 GB de RAM y 20 GB de almacenamiento; revisa el precio indicado.",
        "Elige el par de claves SSH regional o sube tu clave pública RSA. Guarda su clave privada de forma segura, asigna un nombre a la instancia y selecciona <strong>Crear instancia</strong>. iOS necesita la configuración de clave adicional que se explica a continuación.",
        "Abre <strong>Redes → Crear IP estática</strong>. Selecciona la misma región, asocia la dirección a esta instancia, asígnale un nombre y créala. Anota la IPv4 estática.",
        "En la pestaña <strong>Redes</strong> de la instancia, restringe SSH a la IPv4 pública de tu teléfono y conserva <strong>Permitir SSH/RDP del navegador de Lightsail</strong>. Añade la regla común de UDP 51820; revisa por separado las reglas IPv6 y deja cerrado TCP 51821.",
        "Para iOS, selecciona <strong>Conectar → Conectar mediante SSH</strong>. Añade la clave pública Ed25519 de tu aplicación como una nueva línea en <code>/home/ubuntu/.ssh/authorized_keys</code>, conservando las claves existentes. El SSH del navegador utiliza una clave independiente del proveedor; tu IPv4 estática ya está lista."
      ],
      "apiSteps": [
        "Solo para una futura herramienta de aprovisionamiento, crea una identidad IAM dedicada con las acciones necesarias para instancias Lightsail, claves SSH, IP estáticas y cortafuegos, incluida la eliminación de recursos. Restringe la región y los recursos donde se permita; no es una política mínima probada.",
        "En <strong>IAM → Usuarios → Credenciales de seguridad</strong>, crea una clave de acceso solo cuando una automatización compatible la necesite. Introduce su identificador y secreto mediante el formulario nativo protegido; las credenciales temporales también necesitan su token de sesión. Nunca utilices claves de root."
      ],
      "cleanupSteps": [
        "Elimina la instancia cuando termines. Revisa por separado las instantáneas y los discos conservados; detener una instancia no acaba con todos los cargos.",
        "Libera por separado la IP estática después de desasociarla. Eliminar su instancia no elimina la dirección."
      ]
    },
    "aws-ec2": {
      "consoleSteps": [
        "Abre EC2 en tu región de AWS y selecciona <strong>Lanzar instancia</strong>. Asigna un nombre al servidor y elige una AMI oficial de Canonical <strong>Ubuntu Server 24.04 LTS</strong>, comprobando su editor y arquitectura.",
        "Selecciona un tipo de instancia con al menos 1 GB de RAM y una arquitectura compatible. En <strong>Configurar almacenamiento</strong>, elige al menos 20 GB para el volumen de arranque y revisa el coste estimado de los recursos.",
        "En <strong>Par de claves</strong>, selecciona una clave existente o crea/importa un par de claves Ed25519 para Linux. Ten disponible en la aplicación la clave privada correspondiente; AWS instala la clave pública en la instancia.",
        "En <strong>Configuración de red</strong>, elige una subred pública. Su VPC necesita una puerta de enlace de Internet asociada y una ruta <code>0.0.0.0/0</code> hacia ella. Activa una IPv4 pública; más abajo se configura la dirección estática.",
        "Crea o selecciona un grupo de seguridad con las reglas comunes de TCP 22 y UDP 51820. Restringe SSH a la IPv4 pública de tu teléfono, deja cerrado TCP 51821, selecciona <strong>Lanzar instancia</strong> y espera a que esté en ejecución.",
        "Abre <strong>Red y seguridad → IP elásticas → Asignar dirección IP elástica</strong>. Después selecciona <strong>Acciones → Asociar dirección IP elástica</strong> y elige esta instancia y su IP privada principal. Anota la IPv4 estática; las direcciones IPv4 públicas generan cargos."
      ],
      "apiSteps": [
        "Solo para una futura herramienta de aprovisionamiento, crea una identidad IAM dedicada que cubra la creación de instancias, recursos relacionados de AMI/red/disco/claves, etiquetas, IP elásticas y eliminación de recursos. Los permisos existentes de lectura/inicio/parada no bastan. Añade <code>iam:PassRole</code> solo si asocias un perfil de instancia.",
        "Crea u obtén las credenciales de esa identidad e introdúcelas únicamente mediante ajustes nativos protegidos compatibles. Prefiere credenciales temporales cuando se admitan, incluido su token de sesión; nunca uses claves de acceso root. Este procedimiento por consola no necesita una clave API en Mobile SSH."
      ],
      "cleanupSteps": [
        "Termina la instancia. Comprueba <strong>Eliminar al terminar</strong> y elimina por separado los volúmenes EBS o las instantáneas conservados que no necesites.",
        "Libera la IP elástica por separado. Terminar la instancia desasocia la dirección, pero no la libera ni detiene sus cargos."
      ]
    },
    "google-cloud": {
      "consoleSteps": [
        "Selecciona o crea un proyecto de Google Cloud, activa la facturación y habilita la <strong>API de Compute Engine</strong>. Abre <strong>Compute Engine → Instancias de VM → Crear instancia</strong>.",
        "Asigna un nombre a la máquina virtual y elige su región, zona y una máquina con al menos 1 GB de RAM. En <strong>Sistema operativo y almacenamiento → Cambiar</strong>, selecciona <strong>Ubuntu → Ubuntu 24.04 LTS</strong> y al menos 20 GB de almacenamiento.",
        "Reserva una IPv4 externa estática regional en la región de la máquina virtual. En los ajustes de <strong>Redes</strong> de la máquina, selecciona la VPC/subred prevista y elige esa dirección como IPv4 externa de la interfaz de red. La VPC debe tener una ruta predeterminada a Internet; crea una red y una subred adecuadas si tu proyecto no tiene ninguna.",
        "En los ajustes de claves SSH de la máquina virtual, añade la clave pública de tu aplicación con <code>mobileuser</code> como comentario de usuario: <code>ssh-ed25519 AAAA… mobileuser</code>. Si tu proyecto exige OS Login, utiliza ese procedimiento y el nombre de usuario POSIX que asigne; las claves de metadatos no lo anulan.",
        "Añade una etiqueta de red como <code>wg-vpn</code>. Crea reglas de cortafuegos de entrada dirigidas a esa etiqueta para el acceso común de TCP 22 y UDP 51820. Restringe SSH a la IPv4 pública de tu teléfono y deja cerrado TCP 51821.",
        "Termina de revisar la configuración de la máquina virtual y selecciona <strong>Crear</strong>. Espera a que la instancia esté en ejecución y anota su IPv4 externa y el usuario SSH elegido antes. No des por hecho que el usuario sea <code>ubuntu</code>."
      ],
      "apiSteps": [
        "Solo para una futura herramienta de aprovisionamiento, utiliza una cuenta de servicio dedicada con los roles de administrador de instancias de Compute (v1), administrador de redes de Compute y administrador de seguridad de Compute limitados al proyecto, o equivalentes más restringidos. El administrador de redes de Compute no puede crear cortafuegos. Si asocias una cuenta de servicio a la máquina virtual, concede también el rol de usuario de cuentas de servicio sobre ella.",
        "Si una automatización compatible necesita una clave JSON y la política de la organización lo permite, abre <strong>IAM y administración → Cuentas de servicio → Claves → Añadir clave → Crear clave nueva → JSON</strong>. Introduce el identificador del proyecto y el JSON mediante ajustes nativos protegidos; nunca eludas una restricción de claves."
      ],
      "cleanupSteps": [
        "Elimina la máquina virtual y revisa si sus discos de arranque y datos se eliminan o conservan; elimina los discos e instantáneas conservados que no necesites.",
        "Libera por separado la IPv4 externa reservada. Eliminar la máquina virtual no libera una dirección reservada."
      ]
    },
    "azure": {
      "consoleSteps": [
        "Abre el portal de Azure con una suscripción activa. Crea un grupo de recursos dedicado y abre <strong>Máquinas virtuales → Crear → Máquina virtual de Azure</strong>; selecciona esa suscripción y ese grupo.",
        "Introduce un nombre y una región. Elige <strong>Ubuntu Server 24.04 LTS – x64 Gen2</strong> y un tamaño compatible con al menos 1 GB de RAM. Mantén un disco del sistema operativo de al menos 20 GB y revisa el coste indicado.",
        "Elige la autenticación por <strong>Clave pública SSH</strong>, establece el nombre de administrador en <code>azureuser</code> y selecciona una clave pública existente. Pega la clave pública Ed25519 de tu aplicación; conserva la clave privada en la aplicación.",
        "En <strong>Redes</strong>, selecciona o crea una VNet y una subred. Crea o selecciona una IPv4 pública estática Standard en la región adecuada y asóciala a la configuración IP de la interfaz de red de esta máquina virtual.",
        "Configura el grupo de seguridad de red correspondiente con las reglas comunes de TCP 22 y UDP 51820. Restringe SSH a la IPv4 pública del teléfono y deja cerrado TCP 51821. Si tanto la subred como la interfaz tienen grupos de seguridad, ambos deben permitir el tráfico.",
        "Selecciona <strong>Revisar y crear → Crear</strong>. Espera al despliegue, abre <strong>Información general</strong> de la máquina virtual y anota su IPv4 pública. La máquina está lista con la cuenta <code>azureuser</code> y la clave SSH elegida."
      ],
      "apiSteps": [
        "Solo para una futura herramienta de aprovisionamiento, crea una aplicación dedicada de un único inquilino en <strong>Microsoft Entra ID → Registros de aplicaciones</strong>. Anota los identificadores del inquilino, cliente y suscripción. Si es necesario, crea un secreto de cliente en <strong>Certificados y secretos</strong> y copia su Valor, no el identificador del secreto.",
        "En <strong>Control de acceso (IAM)</strong> del grupo de recursos, asigna al principal permisos adecuados de proceso y red. Colaborador sobre este grupo dedicado es amplio pero viable; prefiere un rol probado más restringido. Crea el grupo previamente porque un permiso limitado al grupo no puede crearlo. Utiliza ajustes nativos protegidos para las credenciales."
      ],
      "cleanupSteps": [
        "Si el grupo de recursos contiene únicamente este despliegue, revisa su contenido y elimina el grupo cuando termines.",
        "Si conservas el grupo, elimina la máquina virtual y revisa sus opciones de eliminación de recursos asociados. Elimina por separado los discos, interfaces de red e IP públicas conservados que no necesites."
      ]
    },
    "digitalocean": {
      "consoleSteps": [
        "Abre <strong>Crear → Droplet</strong> en el panel de control. Elige una <strong>Región</strong> cercana con capacidad disponible. Utiliza un proyecto y un nombre de host que identifiquen este servidor; la región, la disponibilidad de planes y los precios pueden variar.",
        "En <strong>Elegir una imagen → Sistema operativo</strong>, selecciona <strong>Ubuntu 24.04 LTS</strong>. Si aparece un selector de tipo de configuración, elige <strong>Paquete</strong> y luego <strong>CPU compartida → Básico</strong>. Selecciona al menos <strong>1 GB de RAM</strong> y <strong>20 GB de disco</strong>, o el mínimo superior del proveedor.",
        "En <strong>Elegir método de autenticación → Clave SSH → Añadir clave SSH</strong>, pega tu clave pública, asígnale un nombre y selecciónala. Conserva la clave privada correspondiente en tu dispositivo; una clave de cuenta añadida después no se instala automáticamente en Droplets existentes.",
        "En <strong>Redes</strong>, mantén seleccionada <strong>Dirección IPv4 pública</strong>. Establece la cantidad en <strong>1</strong>, confirma el nombre de host y el proyecto, y pulsa <strong>Crear Droplet</strong>. Desmarcar ambas opciones de dirección pública crea un servidor únicamente privado.",
        "Abre <strong>Crear → Cortafuegos</strong> y asígnale un nombre. Sustituye el origen SSH predeterminado de cualquier lugar por tu CIDR de administración para <strong>TCP 22</strong>; opcionalmente añade la regla <strong>UDP 51820</strong> de la guía común. Conserva reglas de salida adecuadas, elige el servidor en <strong>Aplicar a Droplets</strong> y crea el cortafuegos.",
        "Para conservar una dirección al sustituir el servidor, abre <strong>Redes → IP reservadas → Añadir una IP reservada</strong>. Elige <strong>Dirección IPv4 → Asignar a Droplet</strong>, selecciona este Droplet y confirma. Anota la IPv4 pública asignada cuando termine el aprovisionamiento."
      ],
      "apiSteps": [
        "Solo para un futuro complemento compatible: abre <strong>Cuenta → API → Tokens → Generar token nuevo</strong>. Introduce un nombre descriptivo y una fecha de caducidad.",
        "Elige <strong>Ámbitos personalizados</strong> para las operaciones y dependencias de Droplets, claves SSH, cortafuegos e IP reservadas que necesite el procedimiento implementado. Evita elegir Acceso completo por defecto; guarda el token cuando se muestre."
      ],
      "cleanupSteps": [
        "Tras guardar los datos necesarios, abre <strong>Ajustes → Destruir</strong>, revisa los recursos asociados, introduce el nombre del Droplet y confirma. Los volúmenes e instantáneas no seleccionados permanecen; las copias automáticas conservan sus fechas de caducidad.",
        "Abre <strong>Redes → IP reservadas → … → Eliminar</strong> para cada dirección que no necesites y confirma <strong>Eliminar IP reservada</strong>. Las direcciones y otros recursos conservados pueden seguir generando cargos."
      ]
    },
    "hetzner": {
      "consoleSteps": [
        "Abre el proyecto previsto y luego <strong>Cortafuegos → Crear cortafuegos</strong>. Asigna un nombre al cortafuegos y permite la entrada de <strong>TCP 22</strong> desde tu CIDR de administración. Opcionalmente añade la regla <strong>UDP 51820</strong> de la guía común. Dejar vacías las reglas de salida permite el tráfico saliente.",
        "Abre <strong>Servidores → Añadir servidor</strong>. Elige una <strong>Ubicación</strong> cercana donde esté disponible el tipo de servidor elegido. Mantén el cortafuegos y el servidor en el mismo proyecto; la disponibilidad puede variar según la ubicación y la capacidad actual.",
        "Elige un <strong>Tipo</strong> disponible con al menos <strong>1 GB de RAM</strong> y <strong>20 GB de disco</strong>, o el mínimo superior del proveedor. En <strong>Imagen → Imágenes del sistema operativo</strong>, selecciona <strong>Ubuntu 24.04</strong> que coincida con la arquitectura del servidor elegido.",
        "En <strong>Redes</strong>, activa una <strong>IPv4</strong> pública. Selecciona una <strong>IPv4 principal</strong> sin asignar del mismo proyecto y ubicación, o deja que Hetzner cree una. Un servidor solo privado o solo IPv6 no cumple el requisito de IPv4 pública de esta guía.",
        "En <strong>Clave SSH</strong>, añade o selecciona tu clave pública. En <strong>Cortafuegos</strong>, selecciona el cortafuegos creado antes. Las claves de cuenta seleccionadas aquí se instalan al crear el servidor; añadir otra después no actualiza este servidor.",
        "Introduce un <strong>Nombre</strong> reconocible, revisa las copias de seguridad opcionales y el coste total, y pulsa <strong>Crear y comprar ahora</strong>. Espera a que el servidor esté listo y anota su IPv4 principal. Conserva ese recurso IP si necesitas reutilizar la dirección."
      ],
      "apiSteps": [
        "Solo para un futuro complemento compatible: abre <strong>Seguridad → Tokens API → Generar token API</strong> del proyecto previsto e introduce una descripción.",
        "Elige <strong>Lectura y escritura</strong> para el aprovisionamiento y copia el token antes de cerrar la ventana. Esto concede escritura en todo el proyecto, no un permiso limitado a este servidor."
      ],
      "cleanupSteps": [
        "Guarda los datos necesarios y elimina el servidor previsto. Para conservar su dirección al sustituirlo, desactiva primero <strong>Eliminación automática</strong> de la IP principal.",
        "Elimina por separado las IP principales, volúmenes e instantáneas conservados que no necesites. Una IPv4 sigue generando cargos mientras se conserva; <strong>Eliminación automática</strong> activada elimina una IP principal no protegida junto con su servidor."
      ]
    },
    "linode": {
      "consoleSteps": [
        "Abre <strong>Cortafuegos → Crear cortafuegos → Cortafuegos personalizado</strong>. Introduce una etiqueta. Mantén <strong>Política de entrada predeterminada: Descartar</strong> y <strong>Política de salida predeterminada: Aceptar</strong>; así se permite el tráfico saliente y se exigen reglas explícitas para las conexiones entrantes.",
        "Añade una regla de entrada con <strong>Protocolo: TCP</strong>, <strong>Puertos: 22</strong>, <strong>Orígenes: IP/Máscara de red</strong> con tu CIDR de administración y <strong>Acción: Aceptar</strong>. Opcionalmente añade la regla <strong>UDP 51820</strong> de la guía común. Pulsa <strong>Guardar cambios</strong> para activar las reglas.",
        "Abre <strong>Crear → Linode</strong>. Elige una región principal de proceso cercana y luego <strong>Distribuciones → Ubuntu 24.04</strong>. Selecciona un plan disponible con al menos <strong>1 GB de RAM</strong> y <strong>20 GB de disco</strong>, o el mínimo superior del proveedor.",
        "Establece la <strong>Etiqueta</strong>. En seguridad, selecciona una clave SSH existente o pulsa <strong>Añadir una clave SSH</strong> y pega tu clave pública. <strong>Contraseña de root</strong> es opcional al aprovisionar con una clave SSH; conserva tu clave privada en el dispositivo.",
        "En redes, elige <strong>Internet pública</strong> e <strong>Interfaces de Linode</strong>. Selecciona tu cortafuegos para esa interfaz pública. En <strong>Dirección IP</strong>, elige <strong>Reservada</strong> y una dirección de la misma región, o pulsa <strong>Reservar IP</strong> para obtener una.",
        "Revisa las copias de seguridad opcionales y otros cargos en <strong>Resumen de Linode</strong> y pulsa <strong>Crear Linode</strong>. Espera a la inicialización y anota su IPv4 pública. La dirección reservada permanece en tu cuenta tras eliminar el servidor y no puede trasladarse a otra región."
      ],
      "apiSteps": [
        "Solo para un futuro complemento compatible: abre el menú de tu usuario → <strong>Tokens API → Crear un token de acceso personal</strong>. Establece una etiqueta y una caducidad.",
        "Concede solo los ámbitos necesarios: el aprovisionamiento suele necesitar lectura/escritura de Linodes y cortafuegos; reservar o liberar direcciones también requiere <code>ips:read_write</code>. Guarda el token de forma segura."
      ],
      "cleanupSteps": [
        "Guarda los datos necesarios y abre <strong>Linodes → … → Eliminar → Eliminar Linode</strong>. Revisa los volúmenes e imágenes conservados por separado.",
        "Para una dirección que no necesites, abre <strong>IP reservadas → … → Cancelar reserva</strong> y confirma. Las IP reservadas sobreviven a la eliminación del servidor y siguen generando cargos hasta liberarlas."
      ]
    },
    "vultr": {
      "consoleSteps": [
        "Abre <strong>Cuenta → Claves SSH → Añadir clave SSH</strong>. Pega tu clave pública, asígnale un nombre y guárdala. Conserva la clave privada correspondiente en tu dispositivo; selecciona esta clave pública guardada al configurar la instancia.",
        "Abre <strong>Red → Grupos de cortafuegos → Crear grupo de cortafuegos</strong> y asígnale un nombre. Añade una regla IPv4 de entrada para <strong>TCP 22</strong> desde tu CIDR de administración y la regla opcional <strong>UDP 51820</strong>. Comprueba que haya una regla guardada: los grupos vacíos no se aplican.",
        "Abre <strong>Proceso → Instancias → Crear instancia + → CPU compartida</strong>. Elige un plan disponible con al menos <strong>1 GB de RAM</strong> y <strong>20 GB de disco</strong>, o el mínimo superior del proveedor. Selecciona una ubicación cercana y pulsa <strong>Configurar</strong>.",
        "En <strong>Selección y configuración de imagen → Sistema operativo</strong>, elige <strong>Ubuntu 24.04</strong>. En <strong>Ajustes del servidor</strong>, selecciona tu entrada de <strong>Claves SSH</strong> y el <strong>Grupo de cortafuegos</strong> con reglas. Introduce el <strong>Nombre de host del servidor 1</strong> y la <strong>Etiqueta del servidor 1</strong>.",
        "En <strong>Conectividad de la instancia</strong>, selecciona <strong>Instancia(s) con IP pública</strong> y mantén activada <strong>IPv4 pública</strong>. Revisa las copias automáticas y otros cargos opcionales. <strong>Inicio de sesión de usuario limitado</strong> cambia el usuario de <code>root</code> a <code>linuxuser</code>, que puede usar sudo. Revisa el <strong>Resumen</strong> y pulsa <strong>Desplegar</strong>.",
        "Espera a que la instancia esté lista y anota su IPv4 pública. La dirección ordinaria se mantiene fija mientras exista esta instancia; utiliza una IP reservada de la misma región si debe sobrevivir a una sustitución."
      ],
      "apiSteps": [
        "Solo para un futuro complemento compatible: abre <strong>Cuenta → API</strong> y luego <strong>Activar API</strong> en <strong>Token de acceso personal</strong>. Guarda la credencial de forma segura.",
        "En <strong>Control de acceso</strong>, permite la IP/CIDR desde la que se originarán las solicitudes API. Actualízala después de cambiar de red móvil; esto restringe el origen de las solicitudes, no los permisos sobre recursos concretos."
      ],
      "cleanupSteps": [
        "Guarda los datos necesarios, abre la instancia y pulsa <strong>Destruir servidor</strong>. Selecciona <strong>Sí, destruir este servidor</strong> y luego <strong>Destruir servidor</strong>.",
        "Elimina las direcciones conservadas que no necesites mediante <strong>Red → IP reservadas → Eliminar IP reservada</strong>. Revisa también el almacenamiento y las instantáneas independientes; eliminar el servidor no limpia toda la cuenta."
      ]
    },
    "oracle-cloud": {
      "consoleSteps": [
        "Selecciona tu región de OCI y un compartimento dedicado. Confirma las cuotas de proceso, volúmenes e IP públicas; la capacidad disponible y la elegibilidad para el nivel gratuito dependen de los recursos elegidos.",
        "Abre <strong>Redes → Redes virtuales en la nube → Iniciar asistente de VCN → Crear VCN con conectividad a Internet</strong>. Utiliza su subred pública y confirma una ruta <code>0.0.0.0/0</code> a través de la puerta de enlace de Internet.",
        "Revisa la lista de seguridad de la subred pública y los grupos de seguridad de red asociados. Restringe TCP <code>22</code> a tu CIDR de administración, permite UDP <code>51820</code> y conserva las reglas necesarias de salida e ICMP.",
        "Abre <strong>Proceso → Instancias → Crear instancia</strong>. Establece el nombre, el compartimento y el dominio de disponibilidad. Elige <strong>Cambiar imagen → Ubuntu → 24.04</strong>, una forma de máquina virtual compatible y memoria y almacenamiento de arranque suficientes.",
        "Selecciona la subred pública y activa la asignación de IPv4 pública. En <strong>Añadir claves SSH</strong>, pega o sube tu clave pública Ed25519/ECDSA; la clave generada por la consola es RSA. Conserva la clave privada correspondiente en tu dispositivo.",
        "Revisa y crea la máquina virtual. Cuando esté en ejecución, anota su IPv4 pública. Para conservar una dirección al sustituir la máquina, puedes reemplazar su IP efímera por una IP pública reservada asignada a su IP privada principal; anota la nueva dirección."
      ],
      "apiSteps": [
        "Solo para un futuro complemento de aprovisionamiento: pide a un administrador que conceda a un usuario/grupo IAM dedicado los permisos necesarios de proceso, red y volúmenes en este compartimento.",
        "Abre <strong>Ajustes de usuario → Claves API → Añadir clave API</strong>. Guarda la clave privada de firma RSA PEM, la huella, los OCID de tenencia/usuario y la región; anota el OCID del compartimento. Esta clave es independiente de tu clave SSH."
      ],
      "cleanupSteps": [
        "Termina la instancia y elimina expresamente su volumen de arranque si no lo necesitas; OCI conserva ese volumen por defecto. Haz antes una copia de los datos que quieras guardar.",
        "Elimina las IP públicas reservadas y los volúmenes conservados que no necesites. Elimina las subredes, puertas de enlace y otros recursos de red sin uso de la VCN dedicada, incluidos los recursos de red privada creados por el asistente."
      ]
    },
    "ovhcloud": {
      "consoleSteps": [
        "Activa un proyecto Public Cloud y un método de pago. Revisa <strong>Gestión del proyecto → Cuotas</strong>. En <strong>Claves SSH → Crear una clave SSH</strong>, asigna un nombre, pega tu clave pública y selecciona <strong>Añadir</strong>.",
        "Abre <strong>Proceso → Instancias → Crear instancia</strong>. Asigna un nombre a la máquina virtual, elige una región y un modelo adecuado, selecciona Ubuntu <code>24.04</code> y elige la clave SSH guardada.",
        "En redes, activa <strong>Asignar una IP pública → IP pública básica</strong>; la conectividad pública está desactivada por defecto. La IP básica utiliza <code>Ext-Net</code> y es incompatible con una puerta de enlace. Revisa las instantáneas automáticas y los costes, elige facturación por horas y selecciona <strong>Crear mi instancia</strong>.",
        "Para configurar el filtrado, abre <strong>Gestión del proyecto → Usuarios</strong>. Si es necesario, crea un usuario OpenStack con permisos adecuados de red/instancias, guarda su contraseña y elige su acción <strong>… → Iniciar OpenStack Horizon</strong>.",
        "En Horizon, selecciona la región de la máquina virtual y abre <strong>Red → Grupos de seguridad → Crear grupo de seguridad</strong>. Crea un grupo dedicado. En <strong>Gestionar reglas</strong>, permite TCP <code>22</code> desde tu CIDR de administración y UDP <code>51820</code>; conserva las reglas de salida.",
        "Abre <strong>Proceso → Instancias → Editar grupos de seguridad</strong> en Horizon. Aplica el grupo dedicado y retira el grupo predeterminado permisivo solo de esta máquina virtual; nunca edites ni elimines el grupo predeterminado compartido. Cuando esté activa, anota la IPv4 pública de su Información general."
      ],
      "apiSteps": [
        "Solo para un futuro complemento de aprovisionamiento: abre la página de creación de tokens de la región API de tu cuenta. Asigna un nombre a la aplicación, establece una caducidad y restringe Derechos a las rutas y acciones documentadas de su proyecto.",
        "Guarda de forma segura la clave de aplicación, el secreto de aplicación y la clave de consumidor. Estas credenciales de API firmada son distintas del usuario y contraseña OpenStack que utiliza Horizon."
      ],
      "cleanupSteps": [
        "Haz una copia de los datos que quieras guardar y selecciona <strong>… → Eliminar → Eliminar instancia</strong> de la instancia. La facturación por horas continúa hasta que se elimina.",
        "Elimina por separado los volúmenes, instantáneas/copias de seguridad e IP flotantes/adicionales o puertas de enlace creadas de forma independiente que no necesites. Eliminar la máquina virtual no elimina todos los recursos asociados."
      ]
    },
    "scaleway": {
      "consoleSteps": [
        "Selecciona la organización y el proyecto correctos, activa la facturación y comprueba las cuotas. En <strong>Panel del proyecto → Añadir clave SSH</strong>, asigna un nombre y pega tu clave pública. Las claves SSH se limitan a este proyecto.",
        "Abre <strong>Proceso → Instancias CPU y GPU → Grupos de seguridad</strong> en la zona de disponibilidad elegida. Crea un grupo dedicado en esa zona. Activa el filtrado con estado, establece <strong>Descartar</strong> para la entrada y <strong>Aceptar</strong> para la salida.",
        "En la pestaña <strong>Reglas</strong> del grupo, permite TCP <code>22</code> desde tu CIDR de administración y UDP <code>51820</code> para los clientes VPN. Mantén cerrado TCP <code>51821</code>. El grupo predeterminado creado automáticamente no tiene estado; selecciona expresamente tu grupo dedicado.",
        "Elige <strong>Crear instancia → Crear instancia CPU</strong>, selecciona una configuración de CPU adecuada y la misma zona de disponibilidad, y pulsa <strong>Configurar instancia</strong>. Asigna un nombre, selecciona Ubuntu <code>24.04</code>/Noble y configura un volumen del sistema de al menos 20 GB.",
        "Mantén activada <strong>IPv4 pública</strong> y asigna una dirección o selecciona una existente disponible. Elige tu grupo de seguridad dedicado y comprueba las claves SSH mostradas. Revisa por separado la configuración IPv6 si está activada.",
        "Selecciona <strong>Revisar</strong>, examina los costes estimados y pulsa <strong>Crear instancia</strong>. Espera a que termine el aprovisionamiento y copia la IPv4 pública de <strong>Información general</strong>. Esta IP flexible es un recurso independiente cuyo ciclo de vida debes gestionar."
      ],
      "apiSteps": [
        "Solo para un futuro complemento de aprovisionamiento: crea una aplicación IAM y concede los permisos necesarios de instancias, redes y almacenamiento en el proyecto de destino.",
        "Abre <strong>IAM y claves API → Claves API → Generar clave API</strong>. Selecciona la aplicación y una caducidad. Guarda la clave de acceso y el secreto que se muestra una sola vez; anota por separado el UUID del proyecto y la zona."
      ],
      "cleanupSteps": [
        "Haz una copia de los datos que quieras guardar. En la zona de disponibilidad correcta, elige <strong>… → Eliminar</strong> de la instancia, escribe <code>DELETE</code> y selecciona la eliminación de las IP y volúmenes Block Storage asociados que ya no necesites.",
        "Confirma <strong>Eliminar instancia</strong>. Comprueba si quedan IP flexibles, volúmenes e instantáneas que no necesites; apagar la máquina por sí solo no elimina estos recursos."
      ]
    }
  }
};
