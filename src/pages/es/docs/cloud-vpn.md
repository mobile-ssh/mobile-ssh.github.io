---
layout: ../../../layouts/DocLayout.astro
title: "Máquinas virtuales en la nube y wg-easy"
description: "Crea una máquina virtual en la nube con IP pública, guarda su conexión SSH en Mobile SSH e instala wg-easy por separado, con explicaciones sobre credenciales, redes y eliminación de recursos."
---

# Máquinas virtuales en la nube y wg-easy

Crea una VM Linux en tu propia cuenta en la nube y ejecuta una VPN WireGuard con wg-easy. En compilaciones compatibles de Android, el complemento publicado **VPN Setup** puede crear la VM, instalar wg-easy e importar un cliente en un único proceso guiado. También puedes crear la VM en la consola del proveedor e instalar desde Mobile SSH, o usar un servidor público existente.

**Disponibilidad — 19 de noviembre de 2026:** **VPN Setup 1.0.7** está publicado en el [catálogo predeterminado de complementos](https://github.com/mobile-ssh/mobile-ssh-plugins/tree/main/plugins/vpnsetup). La configuración básica requiere el puente de complementos **1.3.0**, las actualizaciones del servidor requieren **1.4.0** y eliminar entradas finalizadas aptas requiere **1.5.0**. La disponibilidad depende de la compilación de Android instalada y del canal de publicación; la publicación del complemento no confirma que una versión concreta de la app esté disponible para ti. No se ha establecido una automatización equivalente en iOS. Usa las instrucciones de consola y manuales siguientes cuando el complemento no esté disponible.

## Elige el proceso guiado o manual

- **Crear con la API de la nube:** VPN Setup usa tu cuenta del proveedor para crear la VM y los recursos de red, guarda su conexión SSH, instala wg-easy e importa un cliente. Conserva los identificadores de recursos y los registros de propiedad para su posterior limpieza.
- **Crear en la consola de la nube o usar un servidor existente:** crea la VM por tu cuenta y después proporciona a VPN Setup su IPv4 pública, usuario SSH y clave, o sigue la instalación manual de abajo. El complemento no necesita credenciales de API de la nube para instalar en tu servidor.

El complemento publicado combina la creación de recursos y la instalación; separar estas tareas en complementos distintos sigue siendo una arquitectura prevista. Los recursos creados por API y los servidores que aportas tienen comportamientos de eliminación distintos, explicados más abajo. Una prueba real documentada con Hetzner completó la configuración, el tráfico VPN, la gestión de clientes, la administración privada y la limpieza en un emulador Android. Esto no acredita pruebas reales satisfactorias con todos los proveedores, políticas de cuenta o teléfonos físicos.

## Prepara la cuenta y la configuración del servidor

1. Activa una cuenta de la nube y la facturación, elige una región y comprueba las cuotas de máquinas virtuales, discos e IP públicas. Revisa las tarifas actuales de máquinas, IPv4, almacenamiento y tráfico; no se da por supuesta la disponibilidad de un nivel gratuito.
2. Para esta guía, elige una máquina dedicada con **Ubuntu 24.04 LTS**, al menos **1 GB de RAM y 20 GB de disco**, y arquitectura **amd64 o arm64**. Son las opciones de partida de esta configuración, no un mínimo universal de wg-easy. Usa una cuenta con acceso root o sudo; la instalación desatendida necesita elevar privilegios sin interacción.
3. Selecciona o genera una clave SSH y conserva la clave privada en Mobile SSH. Sube únicamente la clave pública a la nube. La vía de importación de Lightsail requiere una clave SSH RSA. Otros proveedores e imágenes tienen sus propios tipos de clave admitidos. El cliente SSH actual de iOS admite claves privadas Ed25519/ECDSA en lugar de RSA. Para usar Lightsail en iOS, añade primero una clave pública compatible con la aplicación a `authorized_keys` desde la consola SSH del navegador del proveedor y después conéctate con esa clave.
4. Elige una **IPv4 pública**, preferentemente reservada o estática si el proveedor la ofrece. Una dirección privada, una instancia solo IPv6 o una pasarela NAT solo de salida no cumplen el requisito de punto de conexión de esta guía.
5. Establece expresamente el CIDR de origen de SSH, por ejemplo tu IPv4 pública actual seguida de `/32`. No supongas que el valor predeterminado del plugin restringe el acceso. Los cambios entre datos móviles y Wi-Fi pueden exigir actualizar esa regla desde la consola de la nube.

La vía manual admite las arquitecturas anteriores. VPN Setup selecciona actualmente **Ubuntu 24.04 en amd64/x86-64**, conecta por el **puerto SSH 22** y acepta claves SSH **Ed25519 o RSA**; su vía Lightsail requiere RSA. Este proceso no admite claves ECDSA, hosts solo privados ni puntos de conexión solo IPv6. Un servidor existente debe tener IPv4 pública y permitir acceso administrativo no interactivo.

Las credenciales de API de la nube autorizan la gestión de recursos; las claves SSH autorizan el acceso al servidor. Introduce secretos de API solo en el formulario nativo protegido de credenciales, nunca en instrucciones de voz, comandos de terminal ni archivos de código. El código nativo se autentica con los puntos de conexión aprobados del proveedor; los secretos no llegan a la VM ni al proceso del complemento. Las credenciales recordadas se cifran con Android Keystore; si eliges no recordarlas, permanecen en memoria y puede que debas introducirlas otra vez al terminar el proceso de la app.

Los controles de voz pueden responder preguntas compatibles que no impliquen secretos e informar del progreso, pero introducir credenciales y aprobar requiere la pantalla. La captura de micrófono se pausa en los formularios protegidos y exige una acción explícita para reanudarse. La configuración por voz requiere activación voluntaria, un modelo local descargado y permiso de micrófono. Un modelo de voz sin conexión no permite llamar a API de la nube, descargar ni usar SSH sin internet.

## Elige una nube y obtén una dirección pública

Para la **configuración desde la consola**, inicia sesión tú mismo en el proveedor; Mobile SSH no necesita sus credenciales de API. Para la **creación por API con VPN Setup**, prepara la credencial indicada abajo con permisos para las operaciones necesarias de creación, lectura, red y eliminación. El complemento implementa los diez proveedores de esta tabla; AWS EC2 es una opción separada solo por consola. Limita el acceso a un proyecto o despliegue dedicado cuando sea posible. Las políticas de la cuenta siguen aplicándose a ambos métodos.

Crea la máquina Ubuntu elegida con tu clave SSH pública y aplica la regla SSH de la siguiente sección. Los enlaces explican los pasos de direcciones y autenticación propios de cada proveedor.

<div class="doc-table" tabindex="0" role="region" aria-label="Proveedores de nube y direcciones públicas">

| Proveedor | Credencial para crear recursos por API | Configuración de IPv4 pública en la consola |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | Identificador y secreto de la clave de acceso; incluye un token de sesión para credenciales temporales. Concede las [acciones de Lightsail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) necesarias. | Crea una instancia Ubuntu de doble pila, selecciona la clave SSH RSA y después asigna y conecta una [IPv4 estática en su región](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Usa `ubuntu` para la imagen Ubuntu. |
| [Google Cloud Compute Engine](./google-cloud/) | Clave JSON de cuenta de servicio e identificador de proyecto. Los permisos deben cubrir operaciones de máquinas/discos, redes, direcciones y cortafuegos; Compute Network Admin por sí solo no puede modificar reglas de cortafuegos. Consulta los [permisos IAM](https://docs.cloud.google.com/compute/docs/access/iam). | Activa Compute Engine API, elige una VPC/subred con salida a internet, reserva una [IPv4 externa regional](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address) y asígnala a la máquina. Configura el usuario y la clave SSH correspondientes; OS Login requiere su propia configuración de identidad. VPN Setup usa claves SSH de metadatos y desactiva OS Login en su VM; si tu organización exige OS Login, usa una configuración de consola aprobada. |
| [Microsoft Azure](./azure/) | Identificador de inquilino, identificador de aplicación/cliente, **valor** del secreto de cliente e identificador de suscripción. VPN Setup crea su propio grupo de recursos del despliegue: concede creación/eliminación de grupos en el ámbito de la suscripción o superior, además de las operaciones de cómputo/red. El acceso limitado a un grupo existente no basta. Consulta la [configuración de una entidad de servicio](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Crea un grupo de recursos dedicado y una VNet/subred. Conecta una [Public IP IPv4 estática Standard](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) a la NIC de la máquina y asocia un NSG. Usa el nombre de administrador elegido al crearla. |
| [DigitalOcean](./digitalocean/) | Token de acceso personal con los [ámbitos](https://docs.digitalocean.com/reference/api/create-personal-access-token/) necesarios para Droplets, claves SSH, Reserved IP, cortafuegos y operaciones relacionadas. | Crea un Droplet Ubuntu con la clave SSH pública, asigna una [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) y conecta un Cloud Firewall. El usuario inicial de Ubuntu suele ser `root`. |
| [Hetzner Cloud](./hetzner/) | [Token de API Read & Write](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/) específico del proyecto. | Crea un servidor Ubuntu con una [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), tu clave SSH y un Cloud Firewall. Usa `root`. Comprueba si la Primary IP independiente se conservará al eliminar el servidor. |
| [Akamai / Linode](./linode/) | Token de acceso personal con permisos de lectura/escritura para Linodes y Firewalls y los [ámbitos de lectura](https://techdocs.akamai.com/linode-api/reference/get-started) necesarios. | Crea un Linode Ubuntu con IPv4 pública y clave SSH, y después conecta un [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Usa `root`. Conserva la dirección asignada durante la vida de la instancia. |
| [Vultr](./vultr/) | Clave de API con acceso a la API habilitado; su [lista de IP de origen permitidas](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) debe admitir la conexión actual del teléfono. | Crea una instancia Ubuntu Cloud Compute con IPv4 pública principal, clave SSH y Firewall Group. Usa `root`. La [dirección asignada dura toda la vida de la instancia](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); una Reserved IP es una opción independiente. |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | OCID del inquilino y del usuario, huella de la clave de API y [clave privada de firma RSA](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), con la clave pública de firma correspondiente registrada. Es distinta de la clave SSH. | Crea una VCN, una pasarela de internet y una subred pública con una ruta a la pasarela. Asigna una [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) a la IP privada de la VNIC de la máquina. Usa `ubuntu` para Canonical Ubuntu; configura las listas de seguridad o el NSG. |
| [OVHcloud Public Cloud](./ovhcloud/) | Clave de aplicación, secreto de aplicación y clave de consumidor validada para el punto de API EU/CA/US correspondiente. Limita los [derechos de API](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) a las operaciones del proyecto seleccionado. | Crea una [instancia Public Cloud](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) Ubuntu con Basic Public IP a través de Ext-Net, clave SSH y grupo de seguridad. Usa `ubuntu`. Las Floating/Additional IP son recursos independientes. |
| [Scaleway Instances](./scaleway/) | Clave secreta de API de una aplicación IAM y UUID del proyecto, con permisos para instancias, volúmenes, IP, grupos de seguridad y claves SSH. Consulta la [creación de claves de API](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Crea una instancia Ubuntu, conecta una [IPv4 flexible enrutada en la misma zona](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), configura un grupo de seguridad y enciéndela. Usa el usuario SSH de la imagen, normalmente `root`. |

</div>

**Alternativa [AWS EC2](./aws-ec2/):** inicia Ubuntu en una subred pública con una [pasarela de internet y una ruta `0.0.0.0/0` a esa pasarela](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), selecciona una clave SSH y un grupo de seguridad, y después asocia una [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Usa `ubuntu`. El adaptador automático de AWS de VPN Setup usa Lightsail; EC2 se configura desde la consola. Una Elastic IP por sí sola no hace accesible una subred privada.

Si una organización prohíbe las claves de cuentas de servicio, las IP externas o el método SSH elegido, obtén una configuración aprobada por un administrador. La configuración desde la consola no evita esas restricciones.

## Crea los recursos y guarda la conexión SSH

Abre **Complementos**, instala **VPN Setup** desde el catálogo predeterminado y abre su página independiente. Elige **Configurar una VPN**, selecciona un proveedor y después **Crear con la API de la nube** o **Crear en la consola de la nube**. Si ya tienes un servidor, elige la opción de servidor público existente. Introduce las credenciales en el formulario nativo, elige o genera una clave SSH y revisa la ubicación, el tamaño, la imagen y el CIDR de origen SSH. Las opciones obtenidas de tu cuenta y las comprobaciones previas ayudan a elegir ofertas compatibles; no reservan capacidad ni garantizan cuota. Revisa los precios actuales del proveedor y aprueba la creación en pantalla.

Sigue la operación existente hasta que la VM y SSH estén listos. Si una solicitud agota el tiempo o Android pausa el trabajo en segundo plano, reanuda o revisa esa operación en lugar de crear otra VM facturable. Una respuesta de creación perdida puede requerir consultar la nube o revisar la consola. Conserva los identificadores de VM, disco, dirección y cortafuegos; un proceso detenido puede haber creado recursos.

VPN Setup solicita aprobar la clave del host SSH, guarda la conexión, instala wg-easy e importa su primer cliente. Compara la huella con la consola de confianza del proveedor. Para la configuración manual, añade el servidor en **Servidores** con su IPv4 pública, puerto SSH `22`, usuario de la imagen y clave privada correspondiente. Los adaptadores automáticos de Google Cloud y Azure usan `ubuntu`; las guías de consola usan los usuarios configurados allí. Consulta [Primeros pasos](../getting-started/) para verificar identidades y guardar credenciales.

## Configura las dos capas de red

Una dirección pública necesita una ruta, permiso en el cortafuegos de la nube, permiso en el cortafuegos del sistema invitado y un servicio a la escucha. Usa estas reglas en el cortafuegos o grupo de seguridad del proveedor y conserva las reglas existentes necesarias del sistema invitado.

- **TCP 22:** permite el CIDR de administración elegido para SSH. Configúralo durante la creación.
- **UDP 51820:** permite las redes que usarán la VPN. Para clientes itinerantes, puede significar `0.0.0.0/0`. VPN Setup lo configura en despliegues creados por API; usa la consola de la nube para un servidor que aportes.
- **TCP 51821:** mantenlo cerrado públicamente. Publica la interfaz de administración de wg-easy solo en el loopback del servidor y accede por un túnel SSH.
- **Tráfico saliente:** permite descargas de paquetes/contenedores, DNS y el tráfico de internet que deba transportar la VPN.

Consulta el [comportamiento del cortafuegos de Docker](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): los puertos publicados de contenedores pueden eludir las reglas de UFW. No dependas solo de UFW para ocultar la interfaz administrativa ni vacíes las cadenas de cortafuegos del proveedor, especialmente las reglas de almacenamiento/iSCSI de OCI.

<a id="wg-easy-install"></a>

## Instala wg-easy en la máquina seleccionada

Tras la aprobación, VPN Setup instala por SSH su versión de wg-easy fijada por digest, instala Docker si hace falta en Ubuntu 24.04 y crea el primer cliente. Mantiene la administración en el loopback del servidor y conserva las cadenas de cortafuegos del proveedor. Para un servidor creado en consola o existente, configura tú el cortafuegos de la nube; el instalador necesita acceso SSH y privilegios administrativos, no el secreto de API de la nube. Usa un servidor dedicado nuevo en lugar de suponer que puede adoptar una instalación VPN ajena.

El complemento antiguo del catálogo **WireGuard (wg-easy)** requiere una sesión SSH activa y Docker. Es independiente de **VPN Setup** y no promete importar clientes de forma nativa. Usa VPN Setup en una compilación compatible de Android o la vía manual siguiente desde la terminal de Mobile SSH en una VM dedicada nueva.

### Instalación manual mediante SSH

Instala Docker Engine y su plugin Compose siguiendo las [instrucciones oficiales para Ubuntu](https://docs.docker.com/engine/install/ubuntu/). Después descarga la configuración original de la versión indicada:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.5.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Edita `/opt/wg-easy/compose.yaml` con un editor de terminal con privilegios antes de iniciarlo. Dentro de `services.wg-easy`, sustituye la imagen, descomenta o establece el bloque de entorno y reemplaza los mapeos de puertos con estos valores. Conserva el resto del archivo original, incluidos el volumen persistente, el montaje de módulos, las capacidades, las redes y los sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.5.0@sha256:071f79a639e9361123a5e57733107320207b844ddbbd92dfa6962f541fe8aac8
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

Es un fragmento de sustitución, no un archivo Compose completo; conserva la sangría YAML dentro del servicio. `INSECURE=true` permite HTTP solo para el túnel SSH de bucle local. No publiques el puerto administrativo en internet. La escucha del contenedor es distinta del mapeo de bucle local del host. Consulta la [configuración HTTP original](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/).

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

Conserva los datos de `/etc/wireguard` del contenedor en su volumen persistente. No apliques recetas antiguas de `PASSWORD`, `PASSWORD_HASH` o `WG_HOST` a v15; usa su asistente de configuración. La imagen está fijada intencionadamente: actualizar exige revisar una nueva versión y cambiar la referencia fijada, no solo ejecutar `pull`.

## Abre la interfaz administrativa y añade un cliente

Crea un [reenvío local de puertos](../port-forwarding/) en Mobile SSH con puerto local `51821`, host remoto `127.0.0.1` y puerto remoto `51821`. Mantén activa la conexión SSH y abre `http://127.0.0.1:51821` en el mismo teléfono. Si ese puerto local está ocupado, elige otro y úsalo en la URL del navegador.

En el [asistente del primer inicio](https://wg-easy.github.io/wg-easy/latest/guides/setup/) de wg-easy, crea una cuenta administrativa, elige una instalación nueva y establece como punto de conexión de la VPN la IPv4 pública o el nombre DNS de la máquina con puerto `51820`. Ese punto de conexión no es la dirección de bucle local de la interfaz web ni el puerto `51821`.

Crea un cliente por dispositivo y descarga su archivo WireGuard `.conf`. Si tu compilación de Mobile SSH lo ofrece, abre **VPN → WireGuard**, añade un perfil, importa el archivo y guárdalo. El código fuente actual de Android e iOS admite importar archivos; comprueba la compilación instalada. VPN Setup importa directamente su primer cliente en compilaciones compatibles de Android. Su página también ofrece **Añadir cliente**, **Revocar cliente**, **Exportar cliente/QR** y **Abrir administración** mediante un túnel SSH privado. Esto no acredita esas capacidades en el complemento antiguo ni una automatización equivalente en iOS. Los archivos de configuración y códigos QR contienen claves privadas; mantenlos privados.

## Verifica la VPN y resuelve fallos

Inicia el perfil y aprueba la solicitud de VPN del sistema operativo. Comprueba un intercambio de claves reciente con el par y contadores de tráfico crecientes; después prueba DNS y las rutas de internet o redes privadas previstas. Un perfil importado o un contenedor en ejecución no prueban por sí solos que la VPN funcione.

- **Creación de VM denegada:** revisa la facturación, cuota, capacidad regional, caducidad de credenciales y permisos IAM exactos. Modificar cortafuegos de Google Cloud requiere más permisos que Compute Network Admin; si la organización impone OS Login, usa una configuración de consola aprobada.
- **Tiempo de espera SSH agotado:** comprueba la dirección pública, las rutas de subred, las reglas TCP 22 y la IP de origen actual del teléfono. Los fallos de autenticación suelen requerir el usuario correcto de la imagen y la clave SSH.
- **Administración no disponible:** mantén conectado el reenvío SSH, comprueba el contenedor y la asignación de puertos de loopback, y confirma que HTTP solo esté habilitado para el túnel.
- **Sin negociación WireGuard:** revisa el punto de conexión del cliente, UDP 51820 en ambas capas de cortafuegos, las claves de cliente y si el servidor está a la escucha.
- **Negociación sin tráfico:** revisa el reenvío/NAT, DNS, rutas superpuestas y `AllowedIPs`. Un túnel completo IPv4 usa `0.0.0.0/0`; evalúa IPv6 por separado. Una VM sin conectividad IPv6 de salida no puede proporcionar salida a internet IPv6, y las rutas solo IPv4 pueden dejar IPv6 fuera de la VPN.

## Actualiza el complemento y el servidor VPN

En **Complementos**, usa la acción **Actualizar** disponible para instalar una versión compatible más reciente del mismo catálogo. Revisa las capacidades adicionales solicitadas. Se conservan ajustes, credenciales y registros de despliegue; una operación sin terminar continúa con la versión del complemento con la que empezó. Actualizar solo el complemento no actualiza el contenedor wg-easy del servidor.

Con el puente de complementos 1.4.0 o posterior, **Comprobar servidor** informa de la versión de wg-easy en ejecución y **Actualizar WireGuard** ofrece la versión fijada por el complemento. Aprueba la actualización en pantalla. Descarga la imagen antes de cambiar el servicio y conserva claves del servidor, clientes y perfiles locales. Si el teléfono usa esa VPN, la app la desconecta antes de actualizar; reconecta después. Se actualiza el contenedor gestionado, no el sistema operativo del host.

Una actualización fallida distingue entre fallo al descargar la imagen, reversión correcta y reversión fallida que deja la VPN sin servicio. Sigue su comprobación de recuperación o reintenta, sin suponer que el servicio se ha restablecido. Las instalaciones manuales requieren su propio cambio revisado de imagen fijada y copia de seguridad; la receta de instalación nueva anterior no es una guía de migración.

## Elimina clientes y detén los cargos de la nube

Revoca el cliente en wg-easy antes de descartar su perfil local. Eliminar un perfil en Mobile SSH no revoca la clave del par en el servidor. Guarda una copia segura de la configuración necesaria antes de quitar el contenedor VPN o sus datos persistentes.

En un despliegue creado por API, **Eliminar despliegue** revisa y elimina sus recursos de nube propios mediante la API del proveedor, incluso sin SSH. Si la eliminación se pausa o falla, comprueba los recursos que se indican como pendientes; reanuda la limpieza o revisa la consola. No incluyas recursos ajenos en un despliegue gestionado por el complemento, especialmente en su grupo de recursos Azure dedicado.

En un servidor creado en consola o existente, la eliminación desde el complemento retira la instalación VPN que gestiona; **no** elimina tu VM ni tu IP pública. Elimínalas en la consola del proveedor cuando ya no las necesites y revisa los discos, instantáneas, direcciones y recursos de red conservados. Si cambiaste la cuenta o la ubicación durante la recuperación, revisa también las anteriores, incluido un proyecto previo de Scaleway o un compartimento previo de Oracle Cloud.

**Detener proceso** detiene la operación; no elimina recursos. Con el puente 1.5.0 o posterior, **Quitar de la lista** solo aparece cuando la app verifica que puede olvidar la entrada, sin operaciones pendientes ni recursos gestionados restantes. Borra el historial local, no los recursos de nube. Detener una VM o desinstalar el complemento tampoco garantiza el fin de los cargos. Conserva los identificadores de recursos hasta confirmar la eliminación.
