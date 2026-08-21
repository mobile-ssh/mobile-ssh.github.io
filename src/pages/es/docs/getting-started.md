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

- **Android:** Mobile SSH está actualmente en una prueba cerrada en Google Play. Abre el enlace de inscripción en un navegador móvil del dispositivo — no dentro de la app de Google Play, donde puede que la prueba no aparezca — y únete con la cuenta de Google que vayas a usar. A partir de ahí se instala y se actualiza desde Play como cualquier otra app.
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

Mobile SSH admite claves privadas pegadas y la importación de claves mediante el selector de archivos del sistema. En Android la app admite claves Ed25519, ECDSA (P-256/384/521) y RSA; en iOS admite claves Ed25519 y ECDSA (P-256/384/521). DSA (`ssh-dss`) no es compatible en ninguna de las dos plataformas. Ambas plataformas pueden abrir una clave cifrada con frase de contraseña: introduce la frase en el campo de contraseña/frase.

Para usar una clave privada:

1. Abre **Credentials** o el cuadro de diálogo de edición del servidor.
2. Pega el texto de la clave privada o elige **Import from file**.
3. Introduce la frase de contraseña de la clave en el campo de contraseña/frase si la clave está cifrada.
4. Guarda la credencial o el servidor.

La importación de la clave privada usa el selector de archivos del sistema para los archivos de clave. En Android, la transferencia de archivos usa un explorador de archivos local aparte y puede solicitar un acceso al almacenamiento más amplio en versiones recientes de Android; en iOS, los archivos entran a través de los selectores de documentos y fotos del sistema.

## La pantalla de inicio

La pantalla de inicio está pensada para responder a «¿a qué puedo volver?», en lugar de abrir un formulario de conexión en blanco:

- **Continuar** lista las conexiones que están activas en este momento, con el número de paneles cuando una conexión tiene más de uno. Al tocar una fila vuelves a ella.
- **Sesiones de tmux** lista lo que se está ejecutando en tus servidores guardados. Se toma de una instantánea que la app ya había guardado, así que aparece al instante incluso sin red — cada fila indica la antigüedad de la instantánea, y al tocar una te conectas y te adjuntas a esa sesión. Las instantáneas se atenúan pasadas unas horas y se descartan al cabo de una semana.
- En iOS hay una lista de **Recientes** debajo de estas; la app de Android la retiró, porque «¿a qué puedo volver?» resultó ser una pregunta más útil que «¿cuándo me conecté por última vez?».

Si no hay nada activo ni nada en caché, la pantalla lo indica y te dirige a **Servers**.

## Nombrar y buscar servidores guardados

Un servidor guardado puede llevar un nombre — «NAS de casa», «Web de producción» — y la lista muestra ese nombre en lugar de la dirección. La dirección reaparece por sí sola siempre que el nombre resulte ambiguo: dos filas con el mismo nombre, o una búsqueda en curso, para que siempre puedas distinguir unas filas de otras.

Toca el campo de búsqueda en la página **Saved Servers** para filtrar. La búsqueda coincide con el nombre, el usuario, el host, el puerto, la credencial y cualquier dirección alternativa. La pantalla **+ Add Session** también se abre con búsqueda integrada, para que puedas encontrar y conectarte a un servidor guardado en un solo paso.

Los servidores se pueden archivar en carpetas. Una carpeta se contrae, recuerda que estaba contraída y se puede reordenar o renombrar; al eliminarla, sus servidores pasan a **Sin agrupar** en lugar de borrarse.

## Exportar parte de tu configuración

**Export selected…**, en las pantallas Servers y Credentials, convierte la lista en un selector con casillas, para que puedas entregar tres servidores sin exportarlo todo. Tocar la cabecera de una carpeta selecciona la carpeta entera. Las exportaciones se cifran si les das una frase de contraseña — sin ella, el archivo guarda contraseñas y claves privadas en texto plano, y la app te lo advierte antes de escribirlo.

## Sesiones activas

Cuando hay sesiones en ejecución, la pantalla de inicio muestra **Active Sessions** con un contador. Tócalo para volver a la cuadrícula de terminales. Una notificación persistente también lista los hosts activos: toca un host en la notificación para ir directamente a esa terminal.

Volver a la pantalla de inicio no desconecta las sesiones SSH activas; cerrar paneles o finalizar la actividad de terminal sí las desconecta.

## Primeros ajustes útiles

Abre **Settings** desde la pantalla de inicio (tiene su propia página):

- Decide si tocar la terminal levanta el teclado. Las dos plataformas parten de valores opuestos: en Android el teclado solo aparece con el botón ⌨, y en iOS un toque lo levanta.
- Ajusta el **tamaño del texto**, la **fuente**, el **esquema de colores** y el tamaño del **scrollback** de la terminal, y elige un **tema** para la app (Sistema, Claro u Oscuro).
- Activa **Agent alerts** si ejecutas tareas largas en segundo plano (Claude Code, Codex, scripts de shell) y quieres que te avisen cuando el agente necesite tu intervención. Consulta la guía **Terminal** para ver cómo se identifican los agentes.
- En Android, **Keep sessions running in background** está activado de forma predeterminada, así que las shells y los agentes sobreviven a que descartes la app de recientes.
- En Android, desactiva el envío de estadísticas de uso anónimas si prefieres que no se transmita ningún dato. La app de iOS todavía no tiene ese interruptor.

## Idiomas

Mobile SSH sigue el idioma del sistema de forma predeterminada. La app incluye traducciones a árabe, bengalí, chino (simplificado y tradicional), inglés, francés, alemán, hindi, indonesio, japonés, maratí, portugués, ruso, español, tamil, telugu, turco y urdu — veinte idiomas en Android, que añade además pidgin nigeriano y árabe egipcio, y dieciocho en iOS.

Si quieres la app en un idioma distinto al del teléfono, **Ajustes → Idioma** incluye un selector con una opción de «Predeterminado del sistema». También puedes seguir cambiándolo desde **Ajustes → Sistema → Idiomas** en Android o **Ajustes → General → Idioma y región** en iOS.

## Nota de seguridad

Conéctate solo a servidores en los que confíes. La app actual almacena los datos de conexión guardados localmente y no ofrece un baúl en la nube ni sincronización entre dispositivos. La implementación actual tampoco presenta una confirmación de host conocido, así que evita conectarte por redes no confiables cuando la identidad del host sea importante.
