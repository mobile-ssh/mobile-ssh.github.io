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

La app recuerda las rutas locales y remotas recientes por host. Los ajustes de ordenación también se recuerdan por host para ambos paneles.

## Acceso al almacenamiento

En las versiones de Android que restringen la exploración directa de archivos, Mobile SSH puede pedir acceso al almacenamiento antes de que el panel local pueda explorar los archivos del teléfono. Si omites o deniegas este permiso, la exploración remota puede seguir funcionando, pero las rutas locales de subida y descarga pueden quedar limitadas.

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

Las subidas y descargas no se limitan a archivos sueltos. Elige una carpeta y Mobile SSH copia todo el subárbol en ambas direcciones — del teléfono al remoto y del remoto al teléfono — creando primero los directorios de destino y luego poniendo en cola cada archivo. Un subdirectorio que no se pueda leer se omite y se informa, sin detener el resto de la copia.

## Acciones sobre archivos remotos

Según el elemento remoto seleccionado, Mobile SSH puede mostrar acciones como:

- Descargar.
- Renombrar.
- Eliminar.
- Crear archivo o directorio.
- Editar archivo de texto.
- Ver detalles del archivo.

Los detalles de un archivo remoto pueden incluir los bits de permiso, el propietario, el grupo y los valores de permiso en octal. Usa estos detalles antes de cambiar archivos del servidor gestionados por otro proceso o herramienta de despliegue.

## Ordenación y rutas recientes

Cada panel puede ordenar por nombre o fecha, en orden ascendente o descendente. Mobile SSH almacena los modos de ordenación local y remoto seleccionados por host, junto con las rutas recientes, para que las transferencias repetidas al mismo servidor comiencen en lugares conocidos.

## Cola de transferencia

Las transferencias se ponen en cola y se muestran por estado. El área de registro separa las transferencias en cola, fallidas y correctas. Las transferencias fallidas incluyen un motivo cuando la operación SFTP subyacente lo proporciona.

## Consejos prácticos

- Usa SFTP para mover archivos puntuales; usa herramientas de línea de comandos como `rsync` en el servidor para sincronizar directorios grandes.
- Evita editar archivos de producción en uso a menos que tengas una copia de seguridad o una vía de reversión del despliegue.
- Si un archivo no aparece tras subirlo, actualiza el panel remoto o verifica la ruta de destino.
- Si el acceso al almacenamiento de Android bloquea la exploración local, concede el permiso en los Ajustes de Android y vuelve a abrir la transferencia de archivos. En iOS, usa en su lugar los selectores para añadir archivos al panel local.
