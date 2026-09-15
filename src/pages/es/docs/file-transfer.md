---
layout: ../../../layouts/DocLayout.astro
title: "Transferencia de archivos"
description: "Transferencias SFTP de Mobile SSH, carpetas recordadas, directorios por sesión tmux, colas, permisos y archivos compartidos con el terminal."
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

La app recuerda las rutas remotas recientes y el orden por host. Ábrelas desde la cabecera remota en Android o el reloj en iOS. El panel local muestra la carpeta elegida; iOS usa Documentos de la app hasta que elijas otra.

La pantalla de transferencia de archivos sigue el tema claro u oscuro del sistema, así que encaja con el resto de Mobile SSH.

### Dónde se abre cada sesión

En ambas plataformas, abrir Transferencia de archivos desde tmux recupera el directorio recordado para **esa sesión y ese socket**. Una sesión nueva prueba los directorios frecuentes del host y después otros recordados o el de inicio de sesión.

Si un directorio recordado falta o no es accesible, el navegador prueba la siguiente ubicación utilizable. Los fallos de conexión se notifican, sin confundirlos con carpetas ausentes. Actualizar no cuenta como una nueva visita.

## Acceso al almacenamiento

Mobile SSH no pide un permiso de almacenamiento general en ninguna de las dos plataformas.

En Android concedes **una carpeta** con el selector de carpetas del sistema, y las descargas se escriben ahí — en un sitio que todas las demás apps ya pueden leer. La concesión se mantiene entre arranques.

En iOS, **Mi teléfono → Elegir carpeta local** concede acceso a una carpeta de Archivos, incluidos iCloud Drive y proveedores compatibles. La elección persiste. **Usar carpeta de la app** vuelve a Documentos de Mobile SSH. Si la carpeta deja de estar disponible, selecciónala de nuevo o cambia explícitamente a la carpeta de la app; las descargas no se redirigen sin avisar. El permiso local no se incluye en las copias de seguridad.

Los selectores de documentos y fotos de iOS también importan varios elementos. Si coinciden nombres, ofrecen **Reemplazar**, **Conservar ambos** o **Cancelar**. Importar un archivo que ya está en el destino lo deja intacto.

La importación de la clave privada es independiente de la transferencia de archivos y usa el selector de archivos del sistema.

## Subir archivos

1. Abre el panel local.
2. Navega hasta el archivo que quieres subir.
3. Elige subir.
4. Confirma el destino remoto.
5. Observa la cola de transferencia para ver el progreso y la finalización.

Las subidas siguen la ruta SSH del servidor seleccionado, incluidos sus servidores de salto guardados. Si se corta la conexión, vuelve a intentarlo tras reconectar.

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

- **Copiar al teléfono** para descargar.
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

Los tamaños de archivo se muestran en unidades binarias, así que coinciden con lo que imprime `ls -h` en la terminal de la pestaña de al lado.

## Ordenación y rutas recientes

Cada panel puede ordenar por nombre o fecha, en orden ascendente o descendente. Mobile SSH almacena los modos de ordenación local y remoto seleccionados por host, junto con las rutas recientes, para que las transferencias repetidas al mismo servidor comiencen en lugares conocidos.

## Cola de transferencia

Las transferencias se muestran por estado: En cola / Fallidas / Completadas en Android y Activas / Fallidas / Hechas en iOS. Los fallos incluyen el motivo disponible. En iOS, la transferencia actual permanece arriba en Activas y puede cancelarse.

En iOS, la cola conserva la carpeta original aunque navegues a otra. Las descargas terminan en almacenamiento temporal antes de reemplazar el destino; cancelar o fallar conserva el archivo existente. Si el destino cambió después de autorizar la sobrescritura, la app se detiene.

## Sacar archivos de la app

- **Android:** las descargas aterrizan en la carpeta que has concedido, así que ya son visibles para todas las demás apps. **Abrir en otra app** está en ambos paneles; un archivo remoto se descarga primero y luego se entrega.
- **iOS:** **Abrir en otra app** está disponible para archivos locales y remotos. Los remotos se descargan antes de abrir la hoja para compartir. La carpeta de la app aparece en **En mi iPhone → Mobile SSH**; una carpeta externa conserva su ubicación original en Archivos.

## Enviar un archivo a una sesión

Ambas plataformas aceptan archivos compartidos por otras apps y tienen un control 📎 **Adjuntar un archivo** en el terminal. Se suben a `~/.cache/mobile-ssh` del host elegido y sus rutas pueden insertarse en el prompt sin pulsar Intro. Se admiten varios archivos.

En Android se comparte con la sesión en ejecución. En iOS, el clip ofrece **Fototeca** o **Archivos**. La extensión para compartir de iOS también sube a un servidor SSH guardado con Mobile SSH cerrado; no ofrece perfiles Eternal Terminal. Verifica primero las identidades desconocidas en la app principal.

Después de subir mediante la extensión de iOS, las rutas se copian al portapapeles y esperan para insertarse cuando haya un panel conectado a ese servidor. No se insertan en un panel de otro host.

## Consejos prácticos

- Usa SFTP para mover archivos puntuales; usa herramientas de línea de comandos como `rsync` en el servidor para sincronizar directorios grandes.
- Evita editar archivos de producción en uso a menos que tengas una copia de seguridad o una vía de reversión del despliegue.
- Si un archivo no aparece tras subirlo, actualiza el panel remoto o verifica la ruta de destino.
- Si el panel local de Android está vacío, usa **Elegir carpeta**. En iOS, usa **Elegir carpeta local**, **Usar carpeta de la app** o los selectores de importación según dónde quieras los archivos.
