---
layout: ../../../layouts/DocLayout.astro
title: "Primeros pasos"
description: "Primeros pasos para instalar Mobile SSH, conectarte a un servidor y guardar perfiles, credenciales y sesiones."
---

# Primeros pasos

Mobile SSH es un cliente SSH para Android para conectarte a tus propios servidores Linux, Unix, de red, IoT o de desarrollo. Tú proporcionas la dirección del servidor y las credenciales; la app abre una terminal SSH interactiva.

## Requisitos

- Android 8.0 o más reciente.
- Acceso de red desde el dispositivo Android a tu servidor SSH.
- Nombre de host o dirección IP del servidor SSH, puerto, nombre de usuario y una contraseña o clave privada.
- Acceso al almacenamiento si quieres usar la transferencia de archivos por SFTP con el explorador de archivos local del teléfono.

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

Usa servidores guardados para hosts a los que accedes con frecuencia. Si un servidor guardado apunta a un host distinto de tu sesión activa actual, Mobile SSH inicia una conexión nueva para el destino seleccionado.

## Guardar credenciales

La pantalla **Credentials** almacena registros reutilizables de usuario/contraseña o usuario/clave privada. Las credenciales guardadas se pueden seleccionar en el cuadro de diálogo de configuración del servidor, para no volver a introducir los mismos datos de acceso en cada host.

Los registros de credenciales se almacenan localmente en el dispositivo Android. Protege el dispositivo con un bloqueo de pantalla si guardas contraseñas, frases de contraseña o claves privadas.

## Usar claves privadas

Mobile SSH admite claves privadas pegadas y la importación de claves mediante el selector de archivos de Android. La implementación de la app admite claves Ed25519, RSA, ECDSA y DSA.

Para usar una clave privada:

1. Abre **Credentials** o el cuadro de diálogo de edición del servidor.
2. Pega el texto de la clave privada o elige **Import from file**.
3. Introduce la frase de contraseña de la clave en el campo de contraseña/frase si la clave está cifrada.
4. Guarda la credencial o el servidor.

La importación de la clave privada usa el selector de archivos de Android para los archivos de clave. La transferencia de archivos usa un explorador de archivos local aparte y puede solicitar un acceso al almacenamiento más amplio en versiones recientes de Android.

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
- Desactiva las sugerencias del IME si las sugerencias del teclado interfieren con programas de terminal como Vim, less, htop o apps tmux a pantalla completa.
- Activa **Agent alerts** si ejecutas tareas largas en segundo plano (Claude Code, Codex, scripts de shell) y quieres recibir una notificación sonora o de vibración cuando el agente necesite tu intervención.
- Desactiva el envío de estadísticas de uso anónimas si prefieres que no se transmita ningún dato.

## Idiomas

Mobile SSH sigue el idioma del sistema Android. La app incluye traducciones a árabe, bengalí, chino (simplificado y tradicional), inglés, francés, alemán, hindi, indonesio, japonés, maratí, pidgin nigeriano, portugués, ruso, español, tamil, telugu, turco y urdu. Cambia el idioma en **Ajustes → Sistema → Idiomas** de Android, no dentro de la app.

## Nota de seguridad

Conéctate solo a servidores en los que confíes. La app actual almacena los datos de conexión guardados localmente y no ofrece un baúl en la nube ni sincronización entre dispositivos. La implementación actual tampoco presenta una confirmación de host conocido, así que evita conectarte por redes no confiables cuando la identidad del host sea importante.
