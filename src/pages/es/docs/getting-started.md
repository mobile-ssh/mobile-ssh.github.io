---
layout: ../../../layouts/DocLayout.astro
title: "Primeros pasos"
description: "Primeros pasos para instalar Mobile SSH, conectarte a un servidor y guardar perfiles, credenciales y sesiones."
---

# Primeros pasos

Mobile SSH es un cliente SSH para Android e iOS para conectarte a tus propios servidores Linux, Unix, de red, IoT o de desarrollo. Tú proporcionas la dirección del servidor y las credenciales; la app abre una terminal SSH interactiva.

## Requisitos

- Android 8.0 o más reciente, o iOS 16 o más reciente (iPhone o iPad).
- Acceso de red desde el dispositivo a tu servidor SSH.
- Nombre de host o dirección IP del servidor SSH, puerto, nombre de usuario y una contraseña o clave privada.
- En Android, acceso al almacenamiento si quieres usar la transferencia de archivos por SFTP con el explorador de archivos local del teléfono; iOS usa en su lugar los selectores de archivos y fotos del sistema.

## Instalar la app

- **Android:** instala Mobile SSH desde Google Play.
- **iOS:** la app para iOS se distribuye como beta pública en TestFlight. Instala la app TestFlight de Apple y luego abre el enlace de invitación de Mobile SSH desde la página de inicio del sitio para instalarla y recibir actualizaciones.

## Conectarse a un servidor

1. Abre Mobile SSH.
2. Toca **+ Add Session** y busca un servidor guardado, o añade uno nuevo desde esa pantalla.
3. Introduce el host, el puerto, el nombre de usuario y los datos de autenticación si añades un servidor nuevo.
4. Toca el servidor para abrir una sesión de terminal.
5. Usa **Active Sessions** en la pantalla de inicio para volver a las sesiones que siguen en ejecución.

El puerto SSH predeterminado es `22`. Si tu servidor usa otro puerto, indícalo en el perfil del servidor.

## Guardar servidores

Los servidores guardados conservan el destino de conexión y la configuración opcional de túneles. Un servidor guardado puede incluir:

- Nombre de host o dirección IP.
- Puerto SSH.
- Nombre de usuario.
- Datos de contraseña o clave privada.
- Reglas opcionales de reenvío de puertos local.
- Direcciones adicionales opcionales para la misma máquina (ver más abajo).

Usa servidores guardados para hosts a los que accedes con frecuencia. Si un servidor guardado apunta a un host distinto de tu sesión activa actual, Mobile SSH inicia una conexión nueva para el destino seleccionado.

### Varias direcciones (roaming entre LAN y VPN)

A menudo se puede llegar a la misma máquina en distintas direcciones según dónde te encuentres — una IP de Wi-Fi doméstica frente a una IP de VPN. Añade las direcciones alternativas en el cuadro de diálogo de edición del servidor, cada una con su propio puerto si es necesario. Al conectarte, Mobile SSH prueba las direcciones en orden hasta que una responde, y recuerda la dirección que funcionó por última vez para marcarla primero la próxima vez. Un cambio de red (por ejemplo, salir de la VPN) desencadena una reconexión inmediata a la dirección que ahora sea accesible, en lugar de esperar a que la ruta muerta agote el tiempo de espera.

## Guardar credenciales

La pantalla **Credentials** almacena registros reutilizables de usuario/contraseña o usuario/clave privada. Las credenciales guardadas se pueden seleccionar en el cuadro de diálogo de configuración del servidor, para no volver a introducir los mismos datos de acceso en cada host.

Los registros de credenciales se almacenan localmente en el dispositivo — en iOS, los secretos se guardan en el Keychain del sistema. Protege el dispositivo con un bloqueo de pantalla si guardas contraseñas, frases de contraseña o claves privadas.

## Usar claves privadas

Mobile SSH admite claves privadas pegadas y la importación de claves mediante el selector de archivos del sistema. En Android la app admite claves Ed25519, RSA, ECDSA y DSA; en iOS admite claves Ed25519 y ECDSA (P-256/384/521).

Para usar una clave privada:

1. Abre **Credentials** o el cuadro de diálogo de edición del servidor.
2. Pega el texto de la clave privada o elige **Import from file**.
3. Introduce la frase de contraseña de la clave en el campo de contraseña/frase si la clave está cifrada.
4. Guarda la credencial o el servidor.

La importación de la clave privada usa el selector de archivos del sistema para los archivos de clave. En Android, la transferencia de archivos usa un explorador de archivos local aparte y puede solicitar un acceso al almacenamiento más amplio en versiones recientes de Android; en iOS, los archivos entran a través de los selectores de documentos y fotos del sistema.

## Sesiones recientes

La pantalla de inicio muestra las sesiones recientes. Una sesión reciente puede reconectarse al mismo conjunto de servidores. Si la sesión anterior sigue activa, Mobile SSH vuelve a ella en lugar de iniciar una conexión duplicada.

## Buscar servidores guardados

Toca el campo de búsqueda en la página **Saved Servers** para filtrar por nombre o host. La pantalla **+ Add Session** también se abre con búsqueda integrada, para que puedas encontrar y conectarte a un servidor guardado en un solo paso.

## Sesiones activas

Cuando hay sesiones en ejecución, la pantalla de inicio muestra **Active Sessions** con un contador. Tócalo para volver a la cuadrícula de terminales. Una notificación persistente también lista los hosts activos: toca un host en la notificación para ir directamente a esa terminal.

Volver a la pantalla de inicio no desconecta las sesiones SSH activas; cerrar paneles o finalizar la actividad de terminal sí las desconecta.

## Primeros ajustes útiles

Abre **Settings** desde la pantalla de inicio (tiene su propia página):

- Activa "tap-to-show-keyboard" si prefieres que el teclado aparezca al tocar la terminal.
- Activa **Agent alerts** si ejecutas tareas largas en segundo plano (Claude Code, Codex, scripts de shell) y quieres recibir una notificación sonora o de vibración cuando el agente necesite tu intervención.
- Desactiva el envío de estadísticas de uso anónimas si prefieres que no se transmita ningún dato.

## Idiomas

Mobile SSH sigue el idioma del sistema. La app incluye traducciones a árabe, bengalí, chino (simplificado y tradicional), inglés, francés, alemán, hindi, indonesio, japonés, maratí, pidgin nigeriano, portugués, ruso, español, tamil, telugu, turco y urdu. Cambia el idioma en **Ajustes → Sistema → Idiomas** de Android, o en iOS en **Ajustes → General → Idioma y región**, no dentro de la app.

## Nota de seguridad

Conéctate solo a servidores en los que confíes. La app actual almacena los datos de conexión guardados localmente y no ofrece un baúl en la nube ni sincronización entre dispositivos. La implementación actual tampoco presenta una confirmación de host conocido, así que evita conectarte por redes no confiables cuando la identidad del host sea importante.
