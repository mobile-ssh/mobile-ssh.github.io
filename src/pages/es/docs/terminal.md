---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Controles de la terminal de Mobile SSH, teclas extra, paneles, desplazamiento, comportamiento de tmux, acciones de copia y ajustes del teclado."
---

# Terminal

La terminal de Mobile SSH está pensada para usarse en teléfono y tableta. Combina un lienzo de terminal, una fila de teclas extra, paneles de varias sesiones, gestión del desplazamiento y comportamiento de reconexión.

## Conceptos básicos de la terminal

- La terminal usa comportamiento estilo xterm, con soporte de color y manejo de teclas de cursor.
- El búfer de desplazamiento conserva hasta 5000 líneas.
- Toca un panel para seleccionarlo antes de escribir.
- Pellizca un panel de la terminal para cambiar el tamaño del texto. Mobile SSH redimensiona el PTY remoto cuando el gesto se estabiliza.
- Toca dos veces un panel para entrar en modo pantalla completa. Usa Atrás para volver a la cuadrícula.

## Cuadrícula de varias sesiones

Mobile SSH puede ejecutar hasta ocho sesiones SSH al mismo tiempo. Cada sesión aparece como un panel en la cuadrícula de terminales. El encabezado del panel muestra el destino o el título actual. Toca un panel para seleccionarlo, o usa **+ Agregar sesión** para iniciar otra conexión.

Cerrar un panel desconecta esa sesión SSH. Volver a la pantalla de inicio mantiene las sesiones activas disponibles en **Sesiones activas**.

## Fila de teclas extra

La fila de teclas extra aparece sobre el teclado de Android y ofrece teclas de terminal incómodas en teclados táctiles:

- `ESC`
- `TAB`
- `CTRL`
- `Shift`
- Teclas de flecha
- `HOME`
- `END`
- `PGUP`
- `PGDN`
- Alternar teclado

`CTRL` y `Shift` actúan como modificadores fijos para la siguiente entrada compatible. Por ejemplo, toca `CTRL` y luego escribe `C` para enviar Ctrl-C.

## Comportamiento del teclado

Mobile SSH tiene dos ajustes relacionados con el teclado:

- **Tocar la terminal para mostrar el teclado:** cuando está activado, tocar la terminal pide a Android que muestre el método de entrada.
- **Sugerencias del teclado:** cuando está activado, los teclados compatibles pueden mostrar sugerencias en los prompts del shell. Desactívalo si las sugerencias interfieren con los programas de terminal.

Cuando las sugerencias están activadas, Mobile SSH almacena el texto en composición hasta un límite de palabra, para que la corrección del teclado pueda reemplazar la palabra actual antes de enviarla al shell remoto. Las teclas de control y las combinaciones de terminal omiten ese búfer, de modo que atajos como los comandos de prefijo de tmux llegan de inmediato.

La entrada por voz (el botón de micrófono de Gboard) pasa por el mismo búfer de texto en composición, así que el texto dictado se envía cuando se resuelve, no carácter por carácter.

## Seleccionar, copiar, compartir

Mantén pulsado dentro de la terminal para entrar en modo de selección. La barra de selección ofrece tres acciones:

- **Copiar** — coloca el texto seleccionado en el portapapeles de Android.
- **Compartir** — pasa el texto seleccionado al panel de compartir de Android (correo, notas, mensajería, etc.).
- **Seleccionar todo** — amplía la selección a todo el búfer visible de la terminal, luego Copiar o Compartir.

## Desplazamiento

Mobile SSH dirige los gestos de desplazamiento según el estado de la terminal:

- En la salida normal del shell, deslizar desplaza el búfer de desplazamiento local.
- En apps de terminal con modo de ratón, el desplazamiento envía secuencias de escape de rueda del ratón.
- En apps de pantalla alternativa sin modo de ratón, como muchas sesiones tmux, el desplazamiento entra en el modo de copia de tmux y envía comandos de desplazamiento por líneas.

Si escribes mientras estás desplazado hacia atrás, Mobile SSH vuelve a la vista en vivo de la terminal.

## Comportamiento de tmux

Mobile SSH observa los comandos salientes de tmux de attach y nueva sesión, como:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Cuando una conexión se cae mientras estabas en tmux, la app puede recordar el nombre de la última sesión tmux de ese servidor e intentar reconectarse a ella tras volver a conectar. Si no se observó un nombre de sesión explícito pero la app sabe que estabas en una sesión tipo tmux de pantalla alternativa, puede intentar un `tmux attach` genérico.

Este comportamiento es en la medida de lo posible. Si la sesión tmux remota ya no existe, el shell remoto sigue disponible.

## Programas de terminal a pantalla completa

Para programas como Vim, less, htop, herramientas ncurses y paneles de tmux:

- Desactiva las sugerencias del teclado si el teclado empieza a almacenar la entrada de un modo que el programa no espera.
- Usa la fila de teclas extra para `ESC`, flechas, `PGUP` y `PGDN`.
- Usa el zoom con pellizco si el texto es demasiado pequeño, y luego espera un momento a que el tamaño de la terminal remota se estabilice.
