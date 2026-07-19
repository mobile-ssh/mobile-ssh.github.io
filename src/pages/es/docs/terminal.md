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
- Toca dos veces un panel (o usa su control para expandir) para entrar en modo pantalla completa. Usa Atrás en Android, o el control para contraer en iOS, para volver a la cuadrícula.

## Cuadrícula de varias sesiones

Mobile SSH puede ejecutar hasta ocho sesiones SSH al mismo tiempo. Cada sesión aparece como un panel en la cuadrícula de terminales. El encabezado del panel muestra el destino o el título actual. Toca un panel para seleccionarlo, o usa **+ Add Session** para iniciar otra conexión.

Cerrar un panel desconecta esa sesión SSH. Volver a la pantalla de inicio mantiene las sesiones activas disponibles en **Active Sessions**.

## Fila de teclas extra

Tanto en Android como en iOS, la fila de teclas extra aparece sobre el teclado en pantalla y ofrece teclas de terminal que resultan incómodas en teclados táctiles:

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

La terminal usa una conexión nativa de paso directo con el teclado en pantalla: cada carácter se envía al shell remoto a medida que escribes, con la autocorrección y las sugerencias predictivas desactivadas, de modo que el teclado nunca reescribe la entrada antes de que llegue al shell. Esto mantiene predecibles Vim, tmux, htop, less, los shells con combinaciones de teclas poco habituales y los prompts de contraseña remotos — no hay ningún búfer de sugerencias que desactivar.

- **Tocar la terminal para mostrar el teclado:** cuando está activado, tocar la terminal pide al sistema que muestre el teclado en pantalla.

El dictado por voz del teclado en pantalla sigue funcionando: el texto dictado se entrega directamente al shell como cualquier otra entrada escrita.

## Teclados de hardware

Los teclados externos y Bluetooth controlan la terminal directamente tanto en Android como en iOS. Además de los caracteres corrientes, Mobile SSH asigna las teclas de flecha, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, las teclas de función `F1`–`F12`, las combinaciones `Ctrl`+tecla y `Alt`/`Option` como Meta, y `Shift`+`Tab`. Las teclas modificadoras se combinan con los modificadores fijos de la fila de teclas extra.

## Pegar

Al pegar en un programa que lo solicita (bash, Vim y otras apps con soporte de bracketed paste), el contenido se envuelve con marcadores de pegado entre corchetes, de modo que el contenido multilínea del portapapeles se inserta como texto en lugar de ejecutarse automáticamente línea por línea. Solo se envuelven los pegados reales; el texto escrito y dictado no se toca.

## Seleccionar, copiar, compartir

Mantén pulsado dentro de la terminal para seleccionar la palabra bajo tu dedo; luego arrastra los tiradores para ajustarla. La barra de selección ofrece tres acciones:

- **Copiar** — coloca el texto seleccionado en el portapapeles del sistema. La selección permanece resaltada después, para que puedas compartirla, volver a copiarla o ampliarla.
- **Compartir** — pasa el texto seleccionado al panel de compartir del sistema (correo, notas, mensajería, etc.).
- **Seleccionar todo** — amplía la selección a todo el búfer visible de la terminal; luego usa Copiar o Compartir.

## Buscar en la terminal

Busca en todo el búfer de la terminal — el búfer de desplazamiento y la pantalla visible — y salta entre coincidencias. Abre la búsqueda desde los controles de la terminal, escribe una consulta y recorre los resultados. Funciona tanto en Android como en iOS.

## Color, cursivas y portapapeles remoto

- La terminal representa **color verdadero de 24 bits** y **cursivas**, de modo que los prompts con temas, el resaltado de sintaxis y las TUI se ven igual que en el escritorio.
- **Portapapeles OSC 52:** cuando un programa remoto copia texto (el `set-clipboard` de tmux, un yank OSC 52 de Vim/Neovim), acaba en el portapapeles de tu teléfono — así puedes copiar desde el servidor y pegar en una app local.
- En Android, una **Nerd Font** incluida dibuja glifos powerline, starship, devicon e iconos de Material Design que la fuente del sistema mostraría como cuadros vacíos, y los caracteres CJK anchos, los emoji y los caracteres combinantes se miden correctamente.

## Desplazamiento

Mobile SSH dirige los gestos de desplazamiento según el estado de la terminal:

- En la salida normal del shell, deslizar desplaza el búfer de desplazamiento local.
- En apps de terminal con modo de ratón, el desplazamiento envía secuencias de escape de rueda del ratón.
- En apps de pantalla alternativa sin modo de ratón, como muchas sesiones de tmux, el desplazamiento activa el modo de copia de tmux y envía comandos de desplazamiento por líneas.

Si escribes mientras estás desplazado hacia atrás, Mobile SSH vuelve a la vista en vivo de la terminal.

## Comportamiento de tmux

Mobile SSH observa los comandos salientes de tmux para attach y nueva sesión, como:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Cuando una conexión se interrumpe mientras estabas en tmux, la app puede recordar el nombre de la última sesión tmux de ese servidor e intentar reconectarse a ella tras volver a conectar. Si no se detectó un nombre de sesión explícito pero la app sabe que estabas en una sesión de pantalla alternativa de tipo tmux, puede intentar un `tmux attach` genérico.

Este comportamiento es de mejor esfuerzo. Si la sesión tmux remota ya no existe, el shell remoto sigue disponible.

## Agent alerts

Mobile SSH puede vigilar la salida de la terminal de la sesión activa en busca de patrones que indiquen que un agente remoto está esperando una respuesta. Cuando se detecta una coincidencia — por ejemplo, Claude Code o Codex pausando para pedir confirmación — la app envía una notificación con sonido y vibración opcionales.

Para configurarlo:

1. Abre **Settings** desde la pantalla de inicio.
2. Activa **Agent alerts**.
3. Elige un sonido de notificación y un patrón de vibración.

La alerta se reproduce a través de la salida de audio activa, incluyendo auriculares, para que puedas escucharla mientras ves un video o con el teléfono bloqueado. La notificación aparece incluso cuando Mobile SSH está en segundo plano.

Los patrones de Agent alerts se comparan con la salida visible de la terminal. Si tu herramienta remota muestra una línea de prompt reconocible (un nombre de usuario, un `?`, una pregunta entre corchetes), la app puede detectarla automáticamente. Si las alertas se activan con demasiada frecuencia o no se activan en absoluto, ajusta la sensibilidad en Settings.

## Programas de terminal a pantalla completa

Para programas como Vim, less, htop, herramientas ncurses y paneles de tmux:

- La entrada pasa directamente al programa — no hay autocorrección ni búfer de sugerencias que interfiera.
- Usa la fila de teclas extra para `ESC`, flechas, `PGUP` y `PGDN`.
- Usa el zoom con pellizco si el texto es demasiado pequeño, y luego espera un momento a que el tamaño de la terminal remota se estabilice.
