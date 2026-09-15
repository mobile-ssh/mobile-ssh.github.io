---
layout: ../../../layouts/DocLayout.astro
title: "Solución de problemas"
description: "Soluciona problemas de conexión, identidad de servidores, claves de seguridad, terminal, archivos, VPN, copias de seguridad y escritorios remotos."
---

# Solución de problemas

Esta página cubre los problemas comunes de Mobile SSH y las primeras comprobaciones que conviene hacer antes de cambiar la configuración de SSH en el servidor.

## No se puede conectar

Comprueba:

- El dispositivo tiene acceso a la red.
- El nombre de host o la dirección IP del servidor es correcto.
- El puerto SSH es correcto, normalmente `22`.
- Un firewall, una VPN, la red del operador o la red Wi-Fi no están bloqueando el puerto.
- El servidor SSH está en ejecución y acepta conexiones desde la red que usas.

Si el mismo host funciona desde otro dispositivo, compara exactamente host, puerto, nombre de usuario, clave y ruta de red.

## La identidad del servidor requiere atención

Ambas plataformas comprueban la identidad SSH antes de enviar credenciales. En iOS una clave nueva requiere confirmar su huella y **Confiar y reconectar**. En Android, **Ajustes → General → Seguridad → Aceptar automáticamente nuevas identidades SSH** está activado por defecto: guarda la primera clave sin certificado y exige que las siguientes coincidan. Desactívalo para revisar huellas nuevas antes de conectar.

Compara la huella SHA-256 de una clave nueva o cambiada con tu administrador por un canal fiable. Un cambio puede indicar sustitución del servidor o un servidor inesperado; no elimines la identidad anterior sin verificarlo. Revisa las identidades en Ajustes. Ni las direcciones alternativas ni los bastiones evitan la comprobación.

Android también admite autoridades de certificados de host con ámbitos definidos y revocaciones. Las autoridades desconocidas, los certificados caducados o inválidos y las claves revocadas siguen bloqueados incluso con la aceptación automática inicial activada. En iOS, **Ajustes → Identidades de servidores → Importar claves revocadas** acepta entradas OpenSSH `@revoked` Ed25519/ECDSA con ámbitos definidos. Si el texto pegado mezcla entradas no compatibles, se rechaza por completo; no se admiten entradas de CA, certificados, claves RSA ni nombres de host con hash. Las revocaciones anulan la confianza anterior en conexiones nuevas y reconexiones, pero no cierran las existentes. Las identidades y revocaciones se excluyen de las copias de seguridad. En iOS, verifica un servidor desconocido en la app principal antes de subir archivos mediante la extensión para compartir.

## No se puede conectar mediante un bastión

Revisa direcciones y credenciales de cada bastión y que el teléfono alcance el primero. Cada host posterior debe ser accesible desde el anterior. Los bastiones deben permitir reenvío TCP, respetando `permitopen`. La ruta debe usar SSH, no tener ciclos y expandirse a ocho saltos como máximo.

Un bastión eliminado o sin resolver no produce una conexión directa. Corrige la ruta y reconecta. En Android, el estado y el registro de inicio de sesión distinguen el salto fallido del servidor final.

## Error de autenticación

Comprueba:

- La ortografía del nombre de usuario.
- La contraseña o la frase de contraseña de la clave.
- Si el servidor permite el acceso por contraseña, por clave o ambos.
- Si la clave privada corresponde a una clave pública en el `authorized_keys` del usuario del servidor.
- Si el archivo de la clave se importó por completo, incluidas las líneas de cabecera y pie.

Para claves privadas cifradas, introduce la frase de contraseña en el campo de contraseña/frase.

En Android, `ssh` o `git` remoto necesita **Reenviar agente SSH** activado para ese servidor y permitido en el servidor. Solo se ofrecen claves guardadas utilizables. Una solicitud de Permitir/Denegar o de clave física puede pausar terminal, transferencias y túneles hasta 30 segundos; respóndela en la app o desde la notificación.

## Falló la importación de la clave privada

La importación de la clave privada usa el selector de archivos del sistema. Si la importación falla:

- Confirma que el archivo seleccionado es una clave privada, no un archivo público `.pub`.
- Abre el archivo en un editor de texto de confianza y verifica que contiene el bloque completo de la clave.
- Prueba a pegar la clave manualmente en el campo de clave privada.
- Confirma que el tipo de clave es compatible: Ed25519, ECDSA (P-256/384/521) o RSA en Android; Ed25519 o ECDSA en iOS. DSA (`ssh-dss`) no funciona en ninguna de las dos, y iOS no admite RSA — genera en su lugar una clave Ed25519.

## La clave de seguridad no responde en Android

Android admite credenciales CTAP2/FIDO2 `ed25519-sk` y `ecdsa-sk` por USB o NFC. Usa la misma clave física que creó el archivo importado. USB necesita modo host y permiso; activa NFC y mantén la clave contra el teléfono hasta terminar. Introduce el PIN cuando se solicite y toca la clave.

El servidor necesita OpenSSH 8.2 o posterior con el algoritmo `sk-*` elegido permitido. No se admiten claves solo U2F ni detección de credenciales residentes. El plazo de inicio puede agotarse mientras buscas la clave: tenla preparada. Para solicitudes en segundo plano, abre la notificación o vuelve a la app. iOS no admite autenticación con claves de seguridad físicas.

## La entrada del teclado se retrasa o cambia

Android envía directamente la entrada con autocorrección y predicciones desactivadas. En iOS, **Dictado y sugerencias** viene activado y admite voz y correcciones de la línea actual. Si altera inesperadamente el shell, desactívalo, revisa **Sugerencias del teclado** y abre un panel nuevo.

Usa la fila adicional para `ESC`, `TAB`, `CTRL`, flechas, `HOME`, `END`, `PGUP` y `PGDN`. Una red bloqueada también retrasa la entrada. La cabecera de Android muestra **sin respuesta** o **no enviado**; lo escrito al reconectar se descarta y no se reproduce en un shell nuevo. Espera la conexión, revisa el prompt y repite solo lo necesario.

## El desplazamiento de tmux no es el que esperas

Mobile SSH cambia el comportamiento del desplazamiento según el estado de la terminal. En tmux u otros programas de pantalla alternativa, los gestos de desplazamiento pueden enviar comandos del modo de copia de tmux en lugar de desplazar el historial local. Si el modo de ratón de tmux está activado, la app envía secuencias de escape de rueda del ratón.

Si el desplazamiento no funciona bien:

- Prueba a activar o desactivar el modo de ratón de tmux en el servidor remoto.
- Usa `PGUP` y `PGDN` de la fila de teclas extra.
- Toca dos veces el panel para pantalla completa antes de desplazar una salida densa.
- Desvincula y vuelve a vincular tmux si el tamaño de la terminal remota parece desactualizado.

En Android, llegar al final abandona automáticamente el modo copia tmux controlado por la app si se ve su indicador estándar. Diseños personalizados o divididos sin indicador pueden necesitar salida manual. Al cambiar de sesión, comprueba servidor, socket tmux y nombre de sesión en el gestor.

## La sesión se cae tras el bloqueo de pantalla

En Android, Mobile SSH usa keepalives, un servicio en primer plano, wake lock, Wi-Fi lock e intentos de reconexión para reducir las desconexiones. Las políticas de batería de Android aún pueden detener el trabajo en segundo plano.

Comprueba:

- Desactiva la optimización de batería para Mobile SSH si tu dispositivo detiene agresivamente las apps en segundo plano.
- Mantén el Wi-Fi o los datos móviles estables durante sesiones largas.
- Vuelve a abrir Mobile SSH y toca **Active Sessions** tras desbloquear.
- Comprueba que **Keep sessions running in background** esté activado en Settings si quieres que los shells sobrevivan a que descartes la app de recientes.
- Si el servidor desconectó la sesión SSH, reconéctate desde la pantalla de inicio — **Continuar** lista lo que sigue activo, y **Sesiones de tmux** lista lo que te espera en el servidor.

iOS suspende las apps en segundo plano, por lo que SSH no se mantiene indefinidamente al cambiar de app o bloquear. Hay una breve tolerancia para cambios rápidos. Elige tmux, Herdr o Zellij en **Adjuntar al conectar**, o usa **Eternal Terminal**, para retomar trabajo después de reconectar. El multiplexor debe seguir en ejecución en el servidor; Eternal Terminal no admite rutas con bastiones.

## La transferencia de archivos no explora los archivos del teléfono

Mobile SSH no pide ningún permiso de almacenamiento en Android. En su lugar, el panel local muestra una única carpeta que tú concedes con el selector de carpetas del sistema — si está vacío, usa **Pick folder** para elegir una. La concesión se mantiene, así que es un paso que se hace una sola vez.

Si los archivos remotos cargan pero los locales no, la conexión SSH está bien y simplemente todavía no has concedido ninguna carpeta.

En iOS, el panel local empieza en Documentos de la app. **Mi teléfono → Elegir carpeta local** permite recordar otra carpeta de Archivos. Si falta el proveedor o permiso, elígela de nuevo o cambia a la carpeta de la app. Sus descargas aparecen en **En mi iPhone**; las externas conservan la ubicación del proveedor. Los permisos de carpeta no se transfieren con las copias.

## Falló la subida o la descarga

Comprueba:

- La sesión SSH sigue conectada.
- El directorio remoto existe.
- El usuario remoto tiene permiso para leer o escribir en la ruta.
- El destino local admite escritura.
- Hay suficiente espacio libre en el dispositivo.
- La red es estable para transferencias grandes.

## Falló el reenvío de puertos

Comprueba:

- El puerto local está entre `1` y `65535`.
- El puerto local no está ya en uso.
- La cadena del túnel es `PORT` o `LOCAL:REMOTEHOST:REMOTE`.
- El host remoto y el puerto remoto son accesibles desde el servidor SSH.
- El servidor SSH permite el reenvío de TCP.

## La VPN o el proxy no transporta tráfico en Android

- Inicia el perfil deseado en **VPN** y autoriza Android. Una VPN de dispositivo sustituye la anterior; usa SOCKS5 local si debe seguir otra VPN.
- En SSH VPN, revisa servidor guardado, bastiones, identidad, permiso TCP y selección de apps/webs. Transporta TCP y DNS, no UDP general.
- En SOCKS5, configura dirección local, puerto, contraseña y DNS remoto en el cliente. Un proxy activo no redirige automáticamente todas las apps.
- En WireGuard, revisa intercambio de claves, claves, `AllowedIPs` y DNS. En Shadowsocks, verifica cifrado/contraseña y retransmisión UDP para DNS.
- En OpenVPN, usa un perfil autocontenido compatible, verifica CA/identidad y credenciales, y proporciona DNS VPN para túnel completo. Corrige errores de autenticación o certificado y reinicia el perfil.

SSH VPN, Shadowsocks y OpenVPN pueden mantener bloqueado el tráfico capturado al reconectar, en vez de enviarlo directamente. Detenerlos termina esa protección. Una VPN no elimina restricciones de internet impuestas al servidor por su proveedor o administrador.

## La copia de seguridad no restauró todo

Revisa la vista previa y **Combinar** o **Reemplazar**. Las secciones ausentes en copias antiguas o parciales no cambian esas áreas. Las completas incluyen preferencias compatibles; Android incluye también VPN y proxies. No todo lo específico de una plataforma es portable a iOS, y versiones antiguas pueden rechazar formatos completos nuevos.

Identidades, permisos del sistema y acceso a carpetas permanecen en el dispositivo. Verifica hosts y concede permisos de carpeta/VPN en el nuevo. Las credenciales físicas necesitan la clave correspondiente. Importar perfiles no inicia VPN: revísalos antes.

## El escritorio remoto no funciona o no cambia de tamaño

Abre el visor desde una sesión SSH conectada y comprueba que el servidor permite reenvío TCP local. En Linux, sigue el mensaje de paquetes ausentes para instalar escritorio/VNC. Android no duplica consolas Wayland; usa un escritorio virtual compatible.

En macOS, activa Compartir pantalla en los ajustes del Mac. Android admite autenticación con una cuenta del Mac; iOS requiere activar el acceso clásico con contraseña VNC en Compartir pantalla y usar esa contraseña, en lugar de la contraseña de una cuenta del Mac. El visor muestra la pantalla existente del Mac. Puede ser necesario cambiar su resolución en el Mac. Un escritorio virtual solo se redimensiona en vivo si su servidor lo admite; reiniciar uno creado por la app requiere confirmación y cierra sus programas. Salir del visor mantiene el escritorio remoto en ejecución.

## Registros de depuración

Las dos plataformas registran cosas distintas, así que elige la que corresponda a tu problema.

**Android — terminal y representación.** Activa **Settings → Debugging → Show Debug and Logs buttons** y luego usa el botón **Debug** que aparece en la pantalla de inicio. Registra eventos de la terminal, tamaños de datos SSH, entrada táctil, comportamiento de redimensionado y ciclo de vida de los túneles. Al iniciar una grabación se te advierte primero de que captura todas las teclas que pulses, contraseñas incluidas. Al detenerla se guarda un archivo comprimido en tu carpeta de Descargas.

**iOS — conexiones y reconexiones.** Activa **Settings → Diagnostics → Record debug log**. Registra cada dirección marcada y por qué falló, los intentos de reconexión y su retroceso, las conexiones caídas, «peer stopped answering keepalives», los cambios de red y los comandos de tmux con sus errores. Settings muestra un recuento de líneas en vivo para que puedas confirmar que está grabando, y **Export Debug Log** lo comparte como archivo de texto. Se mantiene en memoria y cubre únicamente la sesión actual de la app.

Revisa cualquier registro o archivo de depuración antes de compartirlo. Están pensados para la solución de problemas y pueden revelar nombres de servidores, direcciones, tiempos u otros detalles del entorno — y en Android, todo lo que hayas escrito.
