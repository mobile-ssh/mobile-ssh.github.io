---
layout: ../../../layouts/DocLayout.astro
title: "Solución de problemas"
description: "Guía de solución de problemas de Mobile SSH para conexión, autenticación, teclado, tmux, transferencia de archivos y túneles."
---

# Solución de problemas

Esta página cubre los problemas comunes de Mobile SSH y las primeras comprobaciones que conviene hacer antes de cambiar la configuración de SSH en el servidor.

## No se puede conectar

Comprueba:

- El dispositivo Android tiene acceso a la red.
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

La importación de la clave privada usa el selector de archivos de Android. Si la importación falla:

- Confirma que el archivo seleccionado es una clave privada, no un archivo público `.pub`.
- Abre el archivo en un editor de texto de confianza y verifica que contiene el bloque completo de la clave.
- Prueba a pegar la clave manualmente en el campo de clave privada.
- Confirma que el tipo de clave es uno de los admitidos por la implementación de la app: Ed25519, RSA, ECDSA o DSA.

## La entrada del teclado se retrasa o cambia

Si tu teclado de Android cambia el texto antes de que llegue al shell, desactiva las sugerencias del teclado en los ajustes de Mobile SSH. Es útil para Vim, tmux, htop, less, shells con combinaciones de teclas poco habituales y prompts de contraseña remotos.

Usa la fila de teclas extra para teclas de terminal como `ESC`, `TAB`, `CTRL`, flechas, `HOME`, `END`, `PGUP` y `PGDN`.

## El desplazamiento de tmux no es el que esperas

Mobile SSH cambia el comportamiento del desplazamiento según el estado de la terminal. En tmux u otros programas de pantalla alternativa, los gestos de desplazamiento pueden enviar comandos del modo de copia de tmux en lugar de desplazar el historial local. Si el modo de ratón de tmux está activado, la app envía secuencias de escape de rueda del ratón.

Si el desplazamiento no funciona bien:

- Prueba a activar o desactivar el modo de ratón de tmux en el servidor remoto.
- Usa `PGUP` y `PGDN` de la fila de teclas extra.
- Toca dos veces el panel para pantalla completa antes de desplazar una salida densa.
- Desvincula y vuelve a vincular tmux si el tamaño de la terminal remota parece desactualizado.

## La sesión se cae tras el bloqueo de pantalla

Mobile SSH usa keepalives, un servicio en primer plano, wake lock, Wi-Fi lock e intentos de reconexión para reducir las desconexiones. Las políticas de batería de Android aún pueden detener el trabajo en segundo plano.

Comprueba:

- Desactiva la optimización de batería para Mobile SSH si tu dispositivo detiene agresivamente las apps en segundo plano.
- Mantén el Wi-Fi o los datos móviles estables durante sesiones largas.
- Vuelve a abrir Mobile SSH y toca **Sesiones activas** tras desbloquear.
- Si el servidor desconectó la sesión SSH, reconéctate desde las sesiones recientes.

## La transferencia de archivos no explora los archivos del teléfono

En versiones recientes de Android, la exploración de archivos locales puede requerir acceso al almacenamiento. Concede el acceso al almacenamiento en los Ajustes de Android para Mobile SSH y vuelve a abrir la pantalla de transferencia de archivos.

Si los archivos remotos cargan pero los locales no, la conexión SSH probablemente está bien y el problema es el acceso al almacenamiento local de Android.

## Falló la subida o la descarga

Comprueba:

- La sesión SSH sigue conectada.
- El directorio remoto existe.
- El usuario remoto tiene permiso para leer o escribir en la ruta.
- El destino local admite escritura.
- Hay suficiente espacio libre en el dispositivo Android.
- La red es estable para transferencias grandes.

## Falló el reenvío de puertos

Comprueba:

- El puerto local está entre `1` y `65535`.
- El puerto local no está ya en uso.
- La cadena del túnel es `PORT` o `LOCAL:REMOTEHOST:REMOTE`.
- El host remoto y el puerto remoto son accesibles desde el servidor SSH.
- El servidor SSH permite el reenvío de TCP.

## Registros de depuración

La pantalla de inicio incluye un botón **Depuración**. Cuando está activado, Mobile SSH registra información de diagnóstico sobre eventos de la terminal, tamaños de datos SSH, entrada táctil, comportamiento de redimensionado y ciclo de vida de los túneles. Detén la grabación para guardar un archivo de depuración localmente.

Revisa los archivos de depuración antes de compartirlos. Están pensados para la solución de problemas y pueden revelar nombres de servidores, tiempos, comportamiento de la terminal u otros detalles del entorno.
