---
layout: ../../../layouts/DocLayout.astro
title: "Transferencia de archivos"
description: "Guía de transferencia de archivos por SFTP de Mobile SSH para archivos locales y remotos, subida, descarga, ordenación y permisos."
---

# Transferencia de archivos

Mobile SSH incluye una pantalla de transferencia de archivos por SFTP vinculada a la conexión SSH activa. Está pensada para el mantenimiento rápido del servidor desde tu teléfono o tableta: subir una configuración, descargar un registro, renombrar un archivo remoto o inspeccionar permisos sin salir de la app.

## Abrir la transferencia de archivos

1. Conéctate a un servidor SSH.
2. Selecciona el panel de terminal conectado.
3. Abre **Transferencia** desde la barra de herramientas de la terminal, o mantén pulsado el encabezado del panel cuando la pantalla actual lo permita.
4. La pantalla de transferencia de archivos se abre con un panel local y un panel remoto.

Si no hay una sesión SSH activa, la transferencia de archivos no puede abrirse.

## Paneles local y remoto

La pantalla de transferencia de archivos tiene dos paneles de exploración:

- **Panel local:** almacenamiento del teléfono.
- **Panel remoto:** archivos del servidor por SFTP.

La app recuerda las diez últimas rutas remotas por host — ábrelas desde el encabezado del panel remoto en Android, o desde el icono del reloj en iOS. Los ajustes de ordenación se recuerdan por host para ambos paneles. No hay historial de rutas locales: en Android el panel local es la carpeta que hayas concedido, y en iOS es el área de documentos propia de la app.

La pantalla de transferencia de archivos sigue el tema claro u oscuro del sistema, así que encaja con el resto de Mobile SSH.

### Dónde se abre cada sesión (Android)

Abrir la transferencia de archivos desde un panel adjunto a una sesión de tmux devuelve el panel remoto al lugar donde **esa sesión** estaba trabajando por última vez, con el nombre de la sesión en el encabezado del panel. Una sesión desde la que no la hayas abierto antes empieza en los directorios que más usas en ese host, después en el último directorio del host y después en tu directorio personal.

Si un directorio recordado se ha eliminado desde entonces, la app va bajando por esa lista hasta que alguno se pueda listar de verdad, en lugar de dejarte en un error — y no vuelve a guardar la ruta rota. En iOS se recuerda un directorio remoto por host.

## Acceso al almacenamiento

Mobile SSH no pide un permiso de almacenamiento general en ninguna de las dos plataformas.

En Android concedes **una carpeta** con el selector de carpetas del sistema, y las descargas se escriben ahí — en un sitio que todas las demás apps ya pueden leer. La concesión se mantiene entre arranques.

En iOS el panel local es el área de documentos de la app, y los archivos entran mediante los selectores de documentos y fotos del sistema.

En iOS, el panel local funciona con el área de documentos propia de la app, y los archivos se incorporan mediante los selectores de documentos y fotos del sistema, incluida la importación con selección múltiple de fotos y documentos. No se necesita un permiso de almacenamiento aparte.

La importación de la clave privada es independiente de la transferencia de archivos y usa el selector de archivos del sistema.

## Subir archivos

1. Abre el panel local.
2. Navega hasta el archivo que quieres subir.
3. Elige subir.
4. Confirma el destino remoto.
5. Observa la cola de transferencia para ver el progreso y la finalización.

Las subidas usan la conexión SSH/SFTP existente. Si la conexión se cae, reinténtalo tras reconectar.

## Descargar archivos

1. Abre el panel remoto.
2. Navega hasta el archivo que quieres descargar.
3. Elige descargar.
4. Confirma el destino local.
5. Observa la cola de transferencia para ver el progreso y la finalización.

Las descargas grandes conviene hacerlas en una red estable cuando sea posible.

## Copiar carpetas completas

Las subidas y descargas no se limitan a archivos sueltos. Elige una carpeta y Mobile SSH copia todo el subárbol en ambas direcciones — del teléfono al remoto y del remoto al teléfono — creando primero los directorios de destino y luego poniendo en cola cada archivo. Un subdirectorio que no se pueda leer no detiene el resto de la copia; en Android se informa como una fila fallida con el texto «Can't list directory», mientras que iOS continúa sin detallar lo que ha omitido.

## Acciones sobre archivos remotos

Según el elemento remoto seleccionado, Mobile SSH puede mostrar acciones como:

- Descargar, o **Copy to phone** en Android.
- Copiar o mover **en el servidor** — `cp -r` / `mv` se ejecutan en el host sin que los bytes pasen por tu teléfono.
- Renombrar.
- Eliminar.
- Crear archivo o directorio.
- Editar archivo de texto.
- Comprimir a `.tar.gz`.
- Permisos — cambia el modo y el propietario, con la opción de aplicarlo a una carpeta entera.
- Abrir en otra app.
- Ver detalles del archivo.

Los detalles de un archivo remoto pueden incluir los bits de permiso, el propietario, el grupo y los valores de permiso en octal. Usa estos detalles antes de cambiar archivos del servidor gestionados por otro proceso o herramienta de despliegue.

Los tamaños de archivo se muestran en unidades binarias, así que coinciden con lo que imprime `ls -h` en el terminal de la pestaña de al lado.

## Ordenación y rutas recientes

Cada panel puede ordenar por nombre o fecha, en orden ascendente o descendente. Mobile SSH almacena los modos de ordenación local y remoto seleccionados por host, junto con las rutas recientes, para que las transferencias repetidas al mismo servidor comiencen en lugares conocidos.

## Cola de transferencia

Las transferencias se ponen en cola y se muestran por estado, y el registro muestra todas las transferencias y se puede desplazar — Android las agrupa en pestañas En cola / Fallidas / Correctas, e iOS en Activas / Fallidas / Hechas. Las transferencias fallidas incluyen un motivo cuando la operación SFTP subyacente lo proporciona. En iOS, el archivo que se está transfiriendo se mantiene arriba del todo en la pestaña Activas, y una fila se puede cancelar a mitad de vuelo.

## Sacar archivos de la app

- **Android:** las descargas aterrizan en la carpeta que has concedido, así que ya son visibles para todas las demás apps. **Abrir en otra app** está en ambos paneles; un archivo remoto se descarga primero y luego se entrega.
- **iOS:** Mobile SSH aparece en la app Archivos, dentro de **En mi iPhone**, así que todo lo que hay en el panel Mi teléfono es accesible desde Mail, los selectores y otras apps. Mantén pulsado un archivo descargado y elige **Abrir en otra app** para entregarlo, enviarlo por AirDrop o guardarlo en otro sitio.

## Enviar un archivo a una sesión (Android)

Android acepta archivos compartidos desde cualquier otra app: comparte con Mobile SSH y el archivo se sube a `~/.cache/mobile-ssh` en el host de ese panel, con su ruta remota escrita en el prompt para que puedas usarlo de inmediato. El botón 📎 de la barra de herramientas de la terminal hace lo mismo desde el selector de archivos del sistema, y ambos aceptan varios archivos a la vez.

En iOS, incorpora archivos al panel local con el botón ＋ y súbelos desde ahí.

## Consejos prácticos

- Usa SFTP para mover archivos puntuales; usa herramientas de línea de comandos como `rsync` en el servidor para sincronizar directorios grandes.
- Evita editar archivos de producción en uso a menos que tengas una copia de seguridad o una vía de reversión del despliegue.
- Si un archivo no aparece tras subirlo, actualiza el panel remoto o verifica la ruta de destino.
- Si el panel local de Android está vacío, elige una carpeta con **Pick folder** — la app solo tiene acceso a la carpeta que le concedas. En iOS, usa en su lugar los selectores para añadir archivos al panel local.
