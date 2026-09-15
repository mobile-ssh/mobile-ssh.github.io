---
layout: ../../../layouts/DocLayout.astro
title: "Primeros pasos"
description: "Instala Mobile SSH, verifica identidades, configura bastiones y claves y guarda servidores, credenciales y ajustes en copias de seguridad."
---

# Primeros pasos

Mobile SSH es un cliente SSH para Android e iOS para conectarte a tus propios servidores Linux, Unix, de red, IoT o de desarrollo. Tú proporcionas la dirección del servidor y las credenciales; la app abre una terminal SSH interactiva.

## Requisitos

- Android 8.0 o más reciente, o iOS 16 o más reciente (iPhone o iPad).
- Acceso de red desde el dispositivo a tu servidor SSH.
- Nombre de host o dirección IP del servidor SSH, puerto, nombre de usuario y una contraseña o clave privada.
- Para transferir archivos locales, elige carpetas o archivos con el selector del sistema. Ninguna plataforma necesita acceso general al almacenamiento.

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

## Verificar identidades de servidores

Ambas apps comprueban la identidad SSH antes de enviar credenciales. Las claves cambiadas detienen la conexión, también con direcciones alternativas y bastiones.

- **Android:** **Aceptar automáticamente nuevas identidades SSH** viene activado. Guarda la primera clave sin certificado y exige coincidencia después. Desactívalo en **Ajustes → General → Seguridad** para comparar cada nueva huella SHA-256 con el administrador antes de aceptar y reconectar.
- **iOS:** una clave desconocida requiere confirmación. Compara su huella SHA-256 por un canal fiable y elige **Confiar y reconectar**.

Revisa las identidades guardadas en Ajustes. Ambas plataformas admiten revocaciones de claves de host proporcionadas por el administrador; Android también admite autoridades de certificados de host. En iOS, usa **Ajustes → Identidades de servidores → Importar claves revocadas** para entradas OpenSSH `@revoked` Ed25519/ECDSA con ámbitos definidos. Las claves revocadas se bloquean en conexiones nuevas y reconexiones, incluidas las que antes eran de confianza; importar una revocación no cierra conexiones existentes. iOS no admite certificados de host ni importación de CA. La confianza permanece en cada dispositivo y no se importa de las copias de seguridad. No elimines una clave cambiada o revocada sin comprobar por qué se bloqueó.

## Elegir un transporte

Al añadir o editar un servidor, el selector **Transport** decide cómo se conecta Mobile SSH:

- **SSH** — una conexión SSH estándar (la opción predeterminada).
- **Eternal Terminal** — una sesión resiliente que sobrevive a los cortes de red, al modo de suspensión y a los cambios de IP. Si el host no tiene `etserver`, Mobile SSH puede instalarte uno por SSH. Consulta la guía **Terminal** para más detalles.

Android ofrece además conexiones experimentales mediante proxy **Teleport**. Las rutas SSH con bastiones requieren SSH y no pueden combinarse con Eternal Terminal.

## Guardar servidores

Los servidores guardados conservan el destino de conexión y la configuración opcional de túneles. Un servidor guardado puede incluir:

- Nombre de host o dirección IP.
- Puerto SSH.
- Nombre de usuario.
- Datos de contraseña o clave privada.
- Reglas opcionales de reenvío local de puertos.
- Direcciones adicionales opcionales para la misma máquina (ver más abajo).
- Bastiones guardados opcionales y **Adjuntar al conectar**: Auto, Nada, tmux, herdr o Zellij.

Usa servidores guardados para hosts a los que accedes con frecuencia. Si un servidor guardado apunta a un host distinto de tu sesión activa actual, Mobile SSH inicia una conexión nueva para el destino seleccionado.

### Varias direcciones (roaming entre LAN y VPN)

A menudo se puede llegar a la misma máquina en distintas direcciones según dónde te encuentres — una IP de Wi-Fi doméstica frente a una IP de VPN. Añade las direcciones alternativas en el cuadro de diálogo de edición del servidor, cada una con su propio puerto si es necesario. Al conectarte, Mobile SSH prueba las direcciones en orden hasta que una responde, y recuerda la dirección que funcionó por última vez para marcarla primero la próxima vez. Un cambio de red (por ejemplo, salir de la VPN) desencadena una reconexión inmediata a la dirección que ahora sea accesible, en lugar de esperar a que la ruta muerta agote el tiempo de espera.

### Servidores de salto

Guarda primero los bastiones y selecciónalos en orden en los ajustes del destino. Ambas plataformas admiten hasta ocho saltos SSH expandidos. Cada uno usa sus credenciales y verificación; el destino solo debe ser accesible desde el salto anterior. Servidores ausentes, ciclos o saltos fallidos detienen la ruta sin conexión directa silenciosa. Terminales, SFTP, reenvíos y funciones SSH compatibles usan la ruta guardada.

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

Importar claves privadas usa el selector del sistema sin dar acceso al resto del almacenamiento. La transferencia de archivos tiene sus propias selecciones de carpetas y archivos.

Android admite **claves de seguridad FIDO2** por USB y NFC: registra una o importa su credencial OpenSSH y sigue las solicitudes de toque/PIN. La clave física sigue siendo necesaria tras exportar o restaurar. **Reenvío del agente SSH** se activa por servidor: las credenciales guardadas responden a solicitudes de firma, con aprobación opcional por uso. Actívalo solo para servidores en los que confíes para solicitar firmas. iOS no admite estas claves ni reenvío del agente.

## La pantalla de inicio

La pantalla de inicio está pensada para responder a «¿a qué puedo volver?», en lugar de abrir un formulario de conexión en blanco:

- **Continuar** lista las conexiones que están activas en este momento, con el número de paneles cuando una conexión tiene más de uno. Al tocar una fila vuelves a ella.
- **Sesiones de tmux** lista lo que se está ejecutando en tus servidores guardados. Se toma de una instantánea que la app ya había guardado, así que aparece al instante incluso sin red — cada fila indica la antigüedad de la instantánea, y al tocar una te conectas y te adjuntas a esa sesión. Las instantáneas se atenúan pasadas unas horas y se descartan al cabo de una semana.
- En iOS, **Recientes** está en **Nueva conexión**; elegir una entrada rellena el formulario.

El mosaico **VPN** de Android abre los clientes integrados; **Acerca de** está en Ajustes. La guía VPN forma parte de **Reenvío de puertos** en este sitio.

Si no hay nada activo ni nada en caché, la pantalla lo indica y te dirige a **Servers**.

## Nombrar y buscar servidores guardados

Un servidor guardado puede llevar un nombre — «NAS de casa», «Web de producción» — y la lista muestra ese nombre en lugar de la dirección. La dirección reaparece por sí sola siempre que el nombre resulte ambiguo: dos filas con el mismo nombre, o una búsqueda en curso, para que siempre puedas distinguir unas filas de otras.

Toca el campo de búsqueda en la página **Saved Servers** para filtrar. La búsqueda coincide con el nombre, el usuario, el host, el puerto, la credencial y cualquier dirección alternativa. La pantalla **+ Add Session** también se abre con búsqueda integrada, para que puedas encontrar y conectarte a un servidor guardado en un solo paso.

Los servidores se pueden archivar en carpetas. Una carpeta se contrae, recuerda que estaba contraída y se puede reordenar o renombrar; al eliminarla, sus servidores pasan a **Sin agrupar** en lugar de borrarse.

## Exportar parte de tu configuración

**Export selected…**, en las pantallas Servers y Credentials, convierte la lista en un selector con casillas, para que puedas entregar tres servidores sin exportarlo todo. Tocar la cabecera de una carpeta selecciona la carpeta entera. Las exportaciones se cifran si les das una frase de contraseña — sin ella, el archivo guarda contraseñas y claves privadas en texto plano, y la app te lo advierte antes de escribirlo.

Para una copia completa, elige **Exportar todo (copia de seguridad)** en Android o **Copia y restauración** en iOS. Incluye servidores, credenciales y preferencias como idioma, teclas y orden de multiplexores. Android añade perfiles VPN y SOCKS. Protege todo el archivo con una frase de contraseña.

Ambas apps leen el formato 2 y copias de inventario antiguas. Revisa la vista previa: **Combinar** aplica las secciones manteniendo elementos existentes; **Reemplazar** sustituye las secciones incluidas y restablece a sus valores predeterminados los ajustes omitidos dentro de una sección de ajustes. Las secciones ausentes no cambian. Se identifican los ajustes incompatibles; importarlos no añade esas funciones a la otra app. Importar no inicia VPN.

No se restauran identidades, sesiones activas, permisos del sistema ni acceso a carpetas. Verifica hosts y concede acceso local en el dispositivo nuevo. Versiones antiguas no leen el nuevo formato completo.

## Sesiones activas

Con sesiones en ejecución, **Sesiones activas** muestra su número y abre la cuadrícula. En Android, una notificación persistente también enumera hosts activos y abre sus controles.

Volver a la pantalla de inicio no desconecta las sesiones SSH activas; cerrar paneles o finalizar la actividad de terminal sí las desconecta.

## Primeros ajustes útiles

Abre **Settings** desde la pantalla de inicio (tiene su propia página):

- Decide si tocar la terminal levanta el teclado. Las dos plataformas parten de valores opuestos: en Android el teclado solo aparece con el botón ⌨, y en iOS un toque lo levanta.
- Ajusta el **tamaño del texto**, la **fuente**, el **esquema de colores** y el tamaño del **búfer de desplazamiento** de la terminal, y elige un **tema** para la app (Sistema, Claro u Oscuro).
- Activa **Agent alerts** si ejecutas tareas largas en segundo plano (Claude Code, Codex, scripts de shell) y quieres que te avisen cuando el agente necesite tu intervención. Consulta la guía **Terminal** para ver cómo se identifican los agentes.
- En Android, **Keep sessions running in background** está activado de forma predeterminada, así que los shells y los agentes sobreviven a que descartes la app de recientes.
- Ambas plataformas tienen un interruptor de estadísticas anónimas en Ajustes; desactivarlo detiene la recogida de eventos nuevos.
- En iOS, **Dictado y sugerencias** viene activado. Desactívalo y abre un panel nuevo para entrada directa sin dictado ni autocorrección.
- Las notificaciones remotas, avisos de comando terminado y lectura remota del portapapeles tienen autorizaciones separadas. Activa solo las acciones que quieras.

## Complementos

Los complementos amplían Mobile SSH con flujos de trabajo adicionales. Abre **Plugins** desde la pantalla de inicio para:

- Explora el catálogo por categoría y busca plugins.
- Instalar los que quieras — cada complemento se descarga bajo demanda y se verifica con una suma de comprobación SHA-256 en el almacenamiento privado de la app.
- Ejecutar desde esa misma pantalla los complementos instalados.

De forma predeterminada, los complementos se descargan de un catálogo público. Si mantienes el tuyo propio, puedes apuntar Mobile SSH a una fuente de catálogo personalizada o privada. Instala complementos solo de fuentes en las que confíes.

## Idiomas

Mobile SSH usa el idioma del sistema por defecto. Ambas apps incluyen veinte idiomas: árabe, árabe egipcio, bengalí, chino simplificado y tradicional, inglés, francés, alemán, hindi, indonesio, japonés, maratí, pidgin nigeriano, portugués, ruso, español, tamil, telugu, turco y urdu.

Si quieres la app en un idioma distinto al del teléfono, **Settings → Language** incluye un selector con una opción de «Predeterminado del sistema». También puedes seguir cambiándolo desde **Ajustes → Sistema → Idiomas** en Android o **Ajustes → General → Idioma y región** en iOS.

## Nota de seguridad

Conecta solo a servidores fiables. Los datos permanecen en el dispositivo salvo que los exportes o compartas; Mobile SSH no ofrece almacén en la nube ni sincronización automática. Protege dispositivo y copias, verifica huellas desconocidas y revisa errores de clave cambiada antes de reconectar.
