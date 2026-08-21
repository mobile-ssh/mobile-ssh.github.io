---
layout: ../../../layouts/DocLayout.astro
title: "Solución de problemas"
description: "Guía de solución de problemas de Mobile SSH para conexión, autenticación, teclado, tmux, transferencia de archivos y túneles."
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

## Error de autenticación

Comprueba:

- La ortografía del nombre de usuario.
- La contraseña o la frase de contraseña de la clave.
- Si el servidor permite el acceso por contraseña, por clave o ambos.
- Si la clave privada corresponde a una clave pública en el `authorized_keys` del usuario del servidor.
- Si el archivo de la clave se importó por completo, incluidas las líneas de cabecera y pie.

Para claves privadas cifradas, introduce la frase de contraseña en el campo de contraseña/frase.

## Falló la importación de la clave privada

La importación de la clave privada usa el selector de archivos del sistema. Si la importación falla:

- Confirma que el archivo seleccionado es una clave privada, no un archivo público `.pub`.
- Abre el archivo en un editor de texto de confianza y verifica que contiene el bloque completo de la clave.
- Prueba a pegar la clave manualmente en el campo de clave privada.
- Confirma que el tipo de clave es compatible: Ed25519, ECDSA (P-256/384/521) o RSA en Android; Ed25519 o ECDSA en iOS. DSA (`ssh-dss`) no funciona en ninguna de las dos, y iOS no admite RSA — genera en su lugar una clave Ed25519.

## La entrada del teclado se retrasa o cambia

Mobile SSH envía las pulsaciones directamente al shell con la autocorrección y las sugerencias predictivas desactivadas, así que el teclado no debería reescribir el texto antes de que llegue al lado remoto. Si tu teclado aún altera la entrada, confirma que ninguna herramienta de reemplazo o de portapapeles a nivel del sistema la esté interceptando, y usa la fila de teclas extra para teclas de terminal como `ESC`, `TAB`, `CTRL`, flechas, `HOME`, `END`, `PGUP` y `PGDN`.

## El desplazamiento de tmux no es el que esperas

Mobile SSH cambia el comportamiento del desplazamiento según el estado de la terminal. En tmux u otros programas de pantalla alternativa, los gestos de desplazamiento pueden enviar comandos del modo de copia de tmux en lugar de desplazar el historial local. Si el modo de ratón de tmux está activado, la app envía secuencias de escape de rueda del ratón.

Si el desplazamiento no funciona bien:

- Prueba a activar o desactivar el modo de ratón de tmux en el servidor remoto.
- Usa `PGUP` y `PGDN` de la fila de teclas extra.
- Toca dos veces el panel para pantalla completa antes de desplazar una salida densa.
- Desvincula y vuelve a vincular tmux si el tamaño de la terminal remota parece desactualizado.

## La sesión se cae tras el bloqueo de pantalla

En Android, Mobile SSH usa keepalives, un servicio en primer plano, wake lock, Wi-Fi lock e intentos de reconexión para reducir las desconexiones. Las políticas de batería de Android aún pueden detener el trabajo en segundo plano.

Comprueba:

- Desactiva la optimización de batería para Mobile SSH si tu dispositivo detiene agresivamente las apps en segundo plano.
- Mantén el Wi-Fi o los datos móviles estables durante sesiones largas.
- Vuelve a abrir Mobile SSH y toca **Active Sessions** tras desbloquear.
- Comprueba que **Keep sessions running in background** esté activado en Settings si quieres que las shells sobrevivan a que descartes la app de recientes.
- Si el servidor desconectó la sesión SSH, reconéctate desde la pantalla de inicio — **Continuar** lista lo que sigue activo, y **Sesiones de tmux** lista lo que te espera en el servidor.

En iOS, el sistema suspende las apps en segundo plano, por lo que una conexión SSH en bruto no puede mantenerse abierta indefinidamente una vez que cambias de app o bloqueas la pantalla. Un breve período de gracia cubre los cambios rápidos de app; para cualquier cosa más larga, activa **Auto-attach tmux session** en el perfil del servidor (o usa el transporte **Eternal Terminal**) para que al reconectarte vuelvas al mismo shell donde lo dejaste.

## La transferencia de archivos no explora los archivos del teléfono

Mobile SSH no pide ningún permiso de almacenamiento en Android. En su lugar, el panel local muestra una única carpeta que tú concedes con el selector de carpetas del sistema — si está vacío, usa **Pick folder** para elegir una. La concesión se mantiene, así que es un paso que se hace una sola vez.

Si los archivos remotos cargan pero los locales no, la conexión SSH está bien y simplemente todavía no has concedido ninguna carpeta.

En iOS, el panel local muestra el área de documentos de la app, y los archivos se añaden mediante los selectores de documentos y fotos del sistema. Las descargas también son visibles ahí desde la app Archivos, dentro de **En mi iPhone**.

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

## Registros de depuración

Las dos plataformas registran cosas distintas, así que elige la que corresponda a tu problema.

**Android — terminal y representación.** Activa **Settings → Debugging → Show Debug and Logs buttons** y luego usa el botón **Debug** que aparece en la pantalla de inicio. Registra eventos de la terminal, tamaños de datos SSH, entrada táctil, comportamiento de redimensionado y ciclo de vida de los túneles. Al iniciar una grabación se te advierte primero de que captura todas las teclas que pulses, contraseñas incluidas. Al detenerla se guarda un archivo comprimido en tu carpeta de Descargas.

**iOS — conexiones y reconexiones.** Activa **Settings → Diagnostics → Record debug log**. Registra cada dirección marcada y por qué falló, los intentos de reconexión y su retroceso, las conexiones caídas, «peer stopped answering keepalives», los cambios de red y los comandos de tmux con sus errores. Settings muestra un recuento de líneas en vivo para que puedas confirmar que está grabando, y **Export Debug Log** lo comparte como archivo de texto. Se mantiene en memoria y cubre únicamente la sesión actual de la app.

Revisa cualquier registro o archivo de depuración antes de compartirlo. Están pensados para la solución de problemas y pueden revelar nombres de servidores, direcciones, tiempos u otros detalles del entorno — y en Android, todo lo que hayas escrito.
