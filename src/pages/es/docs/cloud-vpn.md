---
layout: ../../../layouts/DocLayout.astro
title: "Máquinas virtuales en la nube y wg-easy"
description: "Crea una máquina virtual en la nube con IP pública, guarda su conexión SSH en Mobile SSH e instala wg-easy por separado, con explicaciones sobre credenciales, redes y eliminación de recursos."
---

# Máquinas virtuales en la nube y wg-easy

Crea una máquina virtual Linux en tu propia cuenta de la nube, conéctate con Mobile SSH y después instala wg-easy para ejecutar una VPN WireGuard. Separar la creación de recursos de la instalación permite usar la misma máquina para otro servicio o instalar la VPN en un servidor que ya tengas.

**Disponibilidad — 8 de noviembre de 2026:** los plugins independientes para crear máquinas virtuales son el flujo previsto que se describe a continuación. La implementación local de **VPN Setup** para Android revisada combina creación de recursos, instalación e importación de clientes; sus cambios de plugin y catálogo aún no se han publicado y los despliegues reales en la nube siguen sin probarse. Las entradas independientes de AWS, Google Cloud y Azure son actualmente estructuras preliminares de manifiesto y ajustes; sus acciones para enumerar y controlar máquinas virtuales no están implementadas y no crean máquinas. Usa las instrucciones de consola e instalación manual siguientes si tu catálogo no tiene un flujo de creación. El nuevo flujo nativo requiere una compilación compatible de Android; no se ha establecido una automatización equivalente en iOS.

## Dos plugins con responsabilidades separadas

- **Plugin de creación en la nube:** usa la API del proveedor para crear la máquina, la dirección pública y los recursos de red necesarios, y después guarda una conexión SSH. Conserva los identificadores de recursos necesarios para gestionarlos o eliminarlos posteriormente.
- **Instalador de wg-easy:** se conecta por SSH a un servidor guardado seleccionado, instala el servicio VPN y ayuda a crear una configuración de cliente. Necesita acceso al servidor y privilegios administrativos, no tus credenciales de la API de la nube. También puede usarse una máquina creada manualmente.

La información transferida entre plugins debería incluir la referencia al servidor guardado, la dirección pública, el puerto SSH, el usuario, la referencia a la credencial SSH y los identificadores del despliegue y los recursos. Los secretos de la nube y las claves SSH privadas no deberían copiarse a la salida del plugin ni a la máquina virtual. Quitar la VPN y eliminar la máquina en la nube son operaciones distintas.

## Prepara la cuenta y la configuración del servidor

1. Activa una cuenta de la nube y la facturación, elige una región y comprueba las cuotas de máquinas virtuales, discos e IP públicas. Revisa las tarifas actuales de máquinas, IPv4, almacenamiento y tráfico; no se da por supuesta la disponibilidad de un nivel gratuito.
2. Para esta guía, elige una máquina dedicada con **Ubuntu 24.04 LTS**, al menos **1 GB de RAM y 20 GB de disco**, y arquitectura **amd64 o arm64**. Son las opciones de partida de esta configuración, no un mínimo universal de wg-easy. Usa una cuenta con acceso root o sudo; la instalación desatendida necesita elevar privilegios sin interacción.
3. Selecciona o genera una clave SSH y conserva la clave privada en Mobile SSH. Sube únicamente la clave pública a la nube. La vía de importación de Lightsail requiere una clave SSH RSA. Otros proveedores e imágenes tienen sus propios tipos de clave admitidos. El cliente SSH actual de iOS admite claves privadas Ed25519/ECDSA en lugar de RSA. Para usar Lightsail en iOS, añade primero una clave pública compatible con la aplicación a `authorized_keys` desde la consola SSH del navegador del proveedor y después conéctate con esa clave.
4. Elige una **IPv4 pública**, preferentemente reservada o estática si el proveedor la ofrece. Una dirección privada, una instancia solo IPv6 o una pasarela NAT solo de salida no cumplen el requisito de punto de conexión de esta guía.
5. Establece expresamente el CIDR de origen de SSH, por ejemplo tu IPv4 pública actual seguida de `/32`. No supongas que el valor predeterminado del plugin restringe el acceso. Los cambios entre datos móviles y Wi-Fi pueden exigir actualizar esa regla desde la consola de la nube.

Las credenciales de la API de la nube autorizan la gestión de recursos; las claves SSH autorizan el acceso al servidor. Son credenciales diferentes. Introduce los secretos de la API únicamente en el formulario protegido de credenciales del proveedor, nunca en peticiones por voz, comandos de terminal ni archivos de código. En el flujo local de Android, el código nativo gestiona la autenticación del proveedor y el almacenamiento cifrado de credenciales; estas se envían al proveedor cuando hace falta, no a la máquina ni al proceso del plugin. Un modelo de voz sin conexión no permite hacer llamadas a la API de la nube, descargar archivos ni usar SSH sin acceso a internet.

## Elige una nube y obtén una dirección pública

Para la **configuración desde la consola**, inicia sesión tú mismo en el proveedor; Mobile SSH no necesita sus credenciales de API. Para la futura **creación mediante plugins**, prepara la credencial indicada abajo con permisos para las operaciones necesarias de creación, lectura, red y eliminación. Limita el acceso a un proyecto o despliegue dedicado cuando sea posible. Las políticas de la cuenta siguen aplicándose a ambos métodos.

Crea la máquina Ubuntu elegida con tu clave SSH pública y aplica la regla SSH de la siguiente sección. Los enlaces explican los pasos de direcciones y autenticación propios de cada proveedor.

<div class="doc-table" tabindex="0" role="region" aria-label="Proveedores de nube y direcciones públicas">

| Proveedor | Credencial para crear recursos por API | Configuración de IPv4 pública en la consola |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | Identificador y secreto de la clave de acceso; incluye un token de sesión para credenciales temporales. Concede las [acciones de Lightsail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) necesarias. | Crea una instancia Ubuntu de doble pila, selecciona la clave SSH RSA y después asigna y conecta una [IPv4 estática en su región](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Usa `ubuntu` para la imagen Ubuntu. |
| [Google Cloud Compute Engine](./google-cloud/) | Clave JSON de cuenta de servicio e identificador de proyecto. Los permisos deben cubrir operaciones de máquinas/discos, redes, direcciones y cortafuegos; Network Admin por sí solo no puede modificar reglas de cortafuegos. Consulta los [permisos IAM](https://docs.cloud.google.com/compute/docs/access/iam). | Activa Compute Engine API, elige una VPC/subred con salida a internet, reserva una [IPv4 externa regional](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address) y asígnala a la máquina. Configura el usuario y la clave SSH correspondientes; OS Login requiere su propia configuración de identidad. |
| [Microsoft Azure](./azure/) | Identificador de inquilino, identificador de aplicación/cliente, **valor** del secreto de cliente e identificador de suscripción. Concede permisos de cómputo y red; crear un grupo de recursos requiere además permiso en el ámbito superior. Consulta la [configuración de una entidad de servicio](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Crea un grupo de recursos dedicado y una VNet/subred. Conecta una [Public IP IPv4 estática Standard](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) a la NIC de la máquina y asocia un NSG. Usa el nombre de administrador elegido al crearla. |
| [DigitalOcean](./digitalocean/) | Token de acceso personal con los [ámbitos](https://docs.digitalocean.com/reference/api/create-personal-access-token/) necesarios para Droplets, claves SSH, Reserved IP, cortafuegos y operaciones relacionadas. | Crea un Droplet Ubuntu con la clave SSH pública, asigna una [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) y conecta un Cloud Firewall. El usuario inicial de Ubuntu suele ser `root`. |
| [Hetzner Cloud](./hetzner/) | [Token de API Read & Write](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/) específico del proyecto. | Crea un servidor Ubuntu con una [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), tu clave SSH y un Cloud Firewall. Usa `root`. Comprueba si la Primary IP independiente se conservará al eliminar el servidor. |
| [Akamai / Linode](./linode/) | Token de acceso personal con permisos de lectura/escritura para Linodes y Firewalls y los [ámbitos de lectura](https://techdocs.akamai.com/linode-api/reference/get-started) necesarios. | Crea un Linode Ubuntu con IPv4 pública y clave SSH, y después conecta un [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Usa `root`. Conserva la dirección asignada durante la vida de la instancia. |
| [Vultr](./vultr/) | Clave de API con acceso a la API habilitado; su [lista de IP de origen permitidas](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) debe admitir la conexión actual del teléfono. | Crea una instancia Ubuntu Cloud Compute con IPv4 pública principal, clave SSH y Firewall Group. Usa `root`. La [dirección asignada dura toda la vida de la instancia](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); una Reserved IP es una opción independiente. |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | OCID del inquilino y del usuario, huella de la clave de API y [clave privada de firma RSA](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), con la clave pública de firma correspondiente registrada. Es distinta de la clave SSH. | Crea una VCN, una pasarela de internet y una subred pública con una ruta a la pasarela. Asigna una [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) a la IP privada de la VNIC de la máquina. Usa `ubuntu` para Canonical Ubuntu; configura las listas de seguridad o el NSG. |
| [OVHcloud Public Cloud](./ovhcloud/) | Clave de aplicación, secreto de aplicación y clave de consumidor validada para el punto de API EU/CA/US correspondiente. Limita los [derechos de API](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) a las operaciones del proyecto seleccionado. | Crea una [instancia Public Cloud](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) Ubuntu con Basic Public IP a través de Ext-Net, clave SSH y grupo de seguridad. Usa `ubuntu`. Las Floating/Additional IP son recursos independientes. |
| [Scaleway Instances](./scaleway/) | Clave secreta de API de una aplicación IAM y UUID del proyecto, con permisos para instancias, volúmenes, IP, grupos de seguridad y claves SSH. Consulta la [creación de claves de API](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Crea una instancia Ubuntu, conecta una [IPv4 flexible enrutada en la misma zona](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), configura un grupo de seguridad y enciéndela. Usa el usuario SSH de la imagen, normalmente `root`. |

</div>

**Alternativa [AWS EC2](./aws-ec2/):** inicia Ubuntu en una subred pública con una [pasarela de internet y una ruta `0.0.0.0/0` a esa pasarela](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), selecciona una clave SSH y un grupo de seguridad, y después asocia una [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Usa `ubuntu`. El adaptador automático local usa Lightsail; EC2 se configura desde la consola. Una Elastic IP por sí sola no hace accesible una subred privada.

Si una organización prohíbe las claves de cuentas de servicio, las IP externas o el método SSH elegido, obtén una configuración aprobada por un administrador. La configuración desde la consola no evita esas restricciones.

## Crea los recursos y guarda la conexión SSH

En el flujo separado previsto, abre **Plugins**, instala el plugin de creación del proveedor desde un catálogo de confianza, selecciona su cuenta y región, y elige el tamaño de máquina, la imagen, la dirección pública y la clave SSH. Revisa los recursos y costes antes de confirmar. Un plugin solo de gestión, sin acción de creación, no puede realizar este paso; usa la consola del proveedor.

Espera a que el proveedor indique que la máquina está en ejecución y SSH sea accesible. Conserva los identificadores de máquina, disco, dirección y cortafuegos. Si una petición agota el tiempo de espera, inspecciona o reanuda la operación existente antes de volver a crear recursos para evitar una segunda máquina facturable.

Guarda la conexión devuelta en Mobile SSH o añádela manualmente en **Servidores**: IPv4 pública, puerto SSH `22`, usuario de la imagen y credencial de clave privada correspondiente. Compara la huella de la clave de host SSH usando la consola de confianza del proveedor antes de conectarte. Consulta [Primeros pasos](../getting-started/) para las comprobaciones de identidad y las credenciales guardadas.

## Configura las dos capas de red

Una dirección pública necesita una ruta, permiso en el cortafuegos de la nube, permiso en el cortafuegos del sistema invitado y un servicio a la escucha. Usa estas reglas en el cortafuegos o grupo de seguridad del proveedor y conserva las reglas existentes necesarias del sistema invitado.

- **TCP 22:** permite el acceso SSH desde el CIDR de administración elegido. Configúralo al crear los recursos.
- **UDP 51820:** permite el acceso desde las redes que usarán la VPN. Para clientes itinerantes, puede ser `0.0.0.0/0`. Añádelo al configurar WireGuard mediante el plugin de creación o la consola.
- **TCP 51821:** mantenlo cerrado al público. Publica la interfaz administrativa de wg-easy solo en la interfaz de bucle local del servidor y accede mediante un túnel SSH.
- **Tráfico saliente:** permite descargas de paquetes y contenedores, DNS y el tráfico de internet que deba transportar la VPN.

Consulta el [comportamiento del cortafuegos de Docker](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): los puertos publicados de contenedores pueden eludir las reglas de UFW. No dependas solo de UFW para ocultar la interfaz administrativa ni vacíes las cadenas de cortafuegos del proveedor, especialmente las reglas de almacenamiento/iSCSI de OCI.

<a id="wg-easy-install"></a>

## Instala wg-easy en la máquina seleccionada

El instalador independiente debería aceptar el servidor SSH guardado y pedir aprobación para modificarlo. Debería comprobar el sistema operativo, los privilegios, las instalaciones Docker/VPN existentes y los conflictos de puertos, conservar los datos persistentes e indicar la versión instalada. No necesita el secreto de la cuenta de la nube; usa el plugin de creación o la consola para modificar el cortafuegos de la nube.

El antiguo plugin del catálogo **WireGuard (wg-easy)** necesita una sesión SSH activa y Docker. No es el nuevo instalador automatizado y no promete importación nativa de clientes. Usa un instalador actualizado compatible o sigue este procedimiento manual desde el terminal de Mobile SSH en una máquina dedicada nueva.

### Instalación manual mediante SSH

Instala Docker Engine y su plugin Compose siguiendo las [instrucciones oficiales para Ubuntu](https://docs.docker.com/engine/install/ubuntu/). Después descarga la configuración original de la versión indicada:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Edita `/opt/wg-easy/compose.yaml` con un editor de terminal con privilegios antes de iniciarlo. Dentro de `services.wg-easy`, sustituye la imagen, descomenta o establece el bloque de entorno y reemplaza los mapeos de puertos con estos valores. Conserva el resto del archivo original, incluidos el volumen persistente, el montaje de módulos, las capacidades, las redes y los sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
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

Crea un cliente por dispositivo y descarga su archivo WireGuard `.conf`. Si tu compilación de Mobile SSH lo ofrece, abre **VPN → WireGuard**, añade un perfil, importa el archivo y guárdalo. El código actual de Android e iOS admite la importación de archivos; comprueba la compilación instalada. El flujo combinado local de Android puede importar directamente, pero eso no es una promesa sobre el plugin antiguo ni la automatización de iOS. Los archivos de configuración y códigos QR contienen claves privadas; mantenlos privados.

## Verifica la VPN y resuelve fallos

Inicia el perfil y aprueba la solicitud de VPN del sistema operativo. Comprueba un intercambio de claves reciente con el par y contadores de tráfico crecientes; después prueba DNS y las rutas de internet o redes privadas previstas. Un perfil importado o un contenedor en ejecución no prueban por sí solos que la VPN funcione.

- **Creación de máquina denegada:** comprueba facturación, cuotas, capacidad regional, caducidad de credenciales y permisos IAM exactos. Modificar cortafuegos de Google Cloud necesita permisos adicionales a Network Admin.
- **Tiempo de espera de SSH agotado:** comprueba la dirección pública, el enrutamiento de subred, las reglas TCP 22 y la IP de origen actual del teléfono. Los fallos de autenticación suelen requerir el usuario correcto de la imagen y la clave SSH adecuada.
- **Interfaz administrativa no disponible:** mantén conectado el reenvío SSH, comprueba el estado del contenedor y el mapeo del puerto de bucle local, y confirma que HTTP solo esté habilitado para el túnel.
- **Sin intercambio de claves WireGuard:** comprueba el punto de conexión del cliente, UDP 51820 en ambas capas de cortafuegos, las claves del cliente y que el servidor esté escuchando.
- **Intercambio de claves pero sin tráfico:** inspecciona reenvío/NAT, DNS, solapamiento de rutas y `AllowedIPs`. El túnel completo IPv4 usa `0.0.0.0/0`; evalúa IPv6 por separado. Una máquina sin conectividad IPv6 externa no puede dar salida IPv6 a internet, y las rutas solo IPv4 pueden dejar IPv6 fuera de la VPN.

## Elimina clientes y detén los cargos de la nube

Revoca el cliente en wg-easy antes de descartar su perfil local. Eliminar un perfil en Mobile SSH no revoca la clave del par en el servidor. Guarda una copia segura de la configuración necesaria antes de quitar el contenedor VPN o sus datos persistentes.

Usa el plugin responsable de los recursos o la consola del proveedor para eliminar una máquina que ya no necesites; después comprueba discos conservados, instantáneas, direcciones reservadas/públicas y recursos de red. Revisa el contenido de un grupo de recursos Azure dedicado antes de eliminarlo. Mantén los recursos ajenos fuera de los despliegues gestionados por plugins.

Detener una máquina, cancelar una tarea de configuración o desinstalar el plugin no garantiza que los recursos se eliminen o los cargos cesen. Tú sigues siendo responsable de eliminar los recursos creados desde la consola; conserva sus identificadores hasta confirmar la eliminación.
