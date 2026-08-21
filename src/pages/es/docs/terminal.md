---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Controles de la terminal de Mobile SSH, teclas extra, paneles, desplazamiento, tmux, gestores de herdr y Zellij, alertas de agente, acciones de copia y ajustes del teclado."
---

# Terminal

La terminal de Mobile SSH está pensada para usarse en teléfono y tableta. Combina un lienzo de terminal, una fila de teclas extra, paneles de varias sesiones, gestión del desplazamiento y comportamiento de reconexión.

## Conceptos básicos de la terminal

- La terminal usa comportamiento estilo xterm, con soporte de color y manejo de teclas de cursor.
- El búfer de desplazamiento conserva 5000 líneas de forma predeterminada, y en Settings se puede ajustar a 1000, 10 000 o 50 000.
- Toca un panel para seleccionarlo antes de escribir.
- Pellizca un panel de la terminal para cambiar el tamaño del texto. Mobile SSH redimensiona el PTY remoto cuando el gesto se estabiliza.
- Toca dos veces un panel (o usa su control para expandir) para entrar en modo pantalla completa. Usa Atrás en Android, o el control para contraer en iOS, para volver a la cuadrícula.

## Cuadrícula de varias sesiones

Mobile SSH puede ejecutar hasta ocho sesiones SSH al mismo tiempo. Cada sesión aparece como un panel en la cuadrícula de terminales. Toca un panel para seleccionarlo, o usa **+ Add Session** para iniciar otra conexión.

El encabezado del panel indica dónde estás. En Android muestra el directorio de trabajo real del panel, consultado a tmux o comunicado por el shell mediante OSC 7 y actualizado mientras la app está abierta; en iOS muestra el título que fija el equipo remoto, y si no hay ninguno recurre a `user@host:port`.

Cerrar un panel desconecta esa sesión SSH. Volver a la pantalla de inicio mantiene las sesiones activas disponibles en **Active Sessions**.

## Fila de teclas extra

Ambas plataformas ponen a tu alcance una fila de trece teclas de terminal — las que resultan incómodas o no existen en un teclado táctil. En Android es una franja en la parte inferior de la sesión (que se oculta sola cuando hay un teclado físico conectado); en iOS va montada sobre el teclado en pantalla.

Los dos conjuntos predeterminados tienen el mismo tamaño, pero no son idénticos:

| | Android | iOS |
|---|---|---|
| Predeterminadas | `ESC` `TAB` `CTRL` flechas `HOME` `PGUP` `END` `PGDN` `⌫` `⌨` | `ESC` `TAB` `CTRL` `⇧` flechas `HOME` `END` `PGUP` `PGDN` `⌨` |
| Diferencia | tiene tecla de retroceso, no Shift | tiene Shift fijo, no tecla de retroceso |

**La fila nunca se desplaza.** Cuando las teclas dejan de caber en el ancho, se reparten el espacio por igual y saltan a una segunda fila; lo que aún sobre se recoge en un menú desbordado `⋯`. Nada queda oculto tras un deslizamiento ni recortado en el borde de la pantalla, y un modificador armado se sigue aplicando a la tecla que elijas del menú desbordado.

`CTRL` actúa como modificador fijo: toca `CTRL` y luego escribe `C` para enviar Ctrl-C. `Shift` es más «fijo» en iOS que en Android — en iOS también pone en mayúscula el siguiente carácter que escribas en el teclado en pantalla, mientras que en Android solo se aplica a las teclas de la propia barra (`Shift`+`Tab`, `Shift`+flechas).

Si mantienes pulsada una tecla como una flecha o `PGDN`, se repite.

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
- Tanto en Android como en iOS, los caracteres CJK anchos, los emoji y los caracteres combinantes (clústeres de grafemas y uniones de ancho cero) se miden y dibujan correctamente, y una **Nerd Font** incluida dibuja glifos powerline, starship, devicon e iconos de Material Design que la fuente del sistema mostraría como cuadros vacíos.

## Integración con el shell e imágenes en línea

- **Integración con el shell (OSC 133):** cuando tu shell emite marcadores de prompt OSC 133, Mobile SSH puede recorrer los prompts uno a uno y avisarte cuando termina un comando de larga duración. Funciona en Android e iOS. Ninguna de las dos apps inyecta los marcadores — los tiene que emitir tu shell (un hook `PROMPT_COMMAND`/`precmd`, o starship). En Android, la navegación entre prompts está desactivada hasta que la habilitas en **Settings → Shell integration**; en iOS el menú aparece solo en cuanto empiezan a llegar marcas.
- **Seleccionar la salida:** toca en cualquier punto dentro de la salida de un comando y selecciona ese bloque entero — el error de compilación de hace 300 líneas, no solo el último comando — y luego cópialo, compártelo o amplíalo.
- **Imágenes en línea:** los programas que usan el protocolo de gráficos Kitty dibujan imágenes directamente en la terminal, en Android e iOS. Las imágenes sobreviven al zoom con pellizco y al reajuste de líneas: se miden en celdas y siguen a su línea, en lugar de descartarse y dejar un hueco. Son una función de la pantalla principal y se borran cuando una TUI a pantalla completa toma el control.
- **Glifos de mosaico (Android):** los caracteres de bloque, braille, sextantes y octantes los dibuja la propia app en lugar de pedirlos a una fuente, de modo que `chafa`, `timg` y el arte ANSI encajan exactamente en la cuadrícula — sin costuras ni cuadros vacíos, sea cual sea la fuente que hayas elegido.
- **Directorio de trabajo real (Android):** el encabezado del panel muestra dónde está realmente el panel, consultado a tmux o comunicado por el shell mediante OSC 7, en lugar de lo que resultara imprimir el último prompt.

## Apariencia y teclas

Tanto en Android como en iOS, Settings te permite personalizar la terminal:

- **Fuente:** elige la fuente monoespaciada del sistema, JetBrains Mono o Source Code Pro.
- **Esquema de colores:** Default, Solarized Dark o Light, Gruvbox, Dracula o Nord — aplicado en vivo a los paneles abiertos.
- **Fila de teclas extra:** añade, quita, reordena y oculta teclas, define tus propias teclas de secuencia de escape y restablece los valores predeterminados, con una vista previa en vivo que muestra el reparto exacto de filas que vas a obtener. Android lo coloca en una pestaña **Keys**; iOS, en **Extra keys → Customize keys**.
- **Añadir desde predefinidos:** una paleta de unas 45 teclas en seis grupos — `F1`–`F12`, combinaciones con Ctrl como `^C` `^D` `^Z` `^R` `^L`, símbolos como `|` `~` `/` `_` `:` y modificadores. `F1`–`F12` se envían como secuencias de escape corrientes, así que no necesitan ninguna combinación con `FN`. Android ofrece además una tecla 📎 **Attach a file** que abre el selector de archivos y sube el archivo a la sesión en curso; iOS ofrece `INS`, `DEL` y una tecla `FN` que despliega una fila de dígitos.
- **Tamaño del búfer de desplazamiento:** 1000, 5000, 10 000 o 50 000 líneas (5000 de forma predeterminada). Se aplica a los paneles nuevos.
- **Tamaño del texto:** un control deslizante, junto al zoom con pellizco.
- **Tema:** Sistema, Claro u Oscuro para toda la app.

Restablecer recupera los valores predeterminados que se distribuyen con la app, en lugar de congelar la lista de hoy, para que las mejoras de una versión posterior también te lleguen. Los cambios se aplican en vivo a los paneles que ya están abiertos.

## Desplazamiento

Mobile SSH dirige los gestos de desplazamiento según el estado de la terminal:

- En la salida normal del shell, deslizar desplaza el búfer de desplazamiento local.
- En apps de terminal con modo de ratón, el desplazamiento envía secuencias de escape de rueda del ratón.
- En apps de pantalla alternativa sin modo de ratón, como muchas sesiones de tmux, el desplazamiento activa el modo de copia de tmux y envía comandos de desplazamiento por líneas.

En Android, un toque dentro de un programa con seguimiento del ratón se entrega como un clic izquierdo en esa celda, así que htop, vim y los paneles con enfoque por clic responden al tacto. En iOS, un toque en ese mismo programa levanta el teclado en lugar de hacer clic; solo se comunica el desplazamiento de la rueda.

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

Ambas plataformas pueden además gestionar más de un servidor de tmux (socket) en el mismo host, y ordenar las sesiones por nombre o por fecha de creación.

## Herdr y Zellij (Android)

Android trae gestores equivalentes para otros dos multiplexores. Cada uno tiene su propio icono en la barra de herramientas, y **el icono solo aparece cuando la app ha encontrado realmente ese programa en el servidor** — así la barra te dice qué hay instalado allí sin que tengas que ejecutar `which`.

- **Herdr** usa su propio vocabulario: sesiones, espacios de trabajo, pestañas y paneles. Cada panel muestra el estado de su agente — trabajando, te necesita, inactivo — y a un agente bloqueado se le puede responder directamente desde la lista. El propio estado de herdr alimenta el distintivo de agentes de la app, así que esto funciona sin ningún hook instalado en el servidor.
- **Zellij** lista sesiones, pestañas y paneles, con adjuntar, renombrar, cerrar y dividir. Las sesiones cerradas siguen apareciendo en la lista, de modo que adjuntarse a ellas las resucita, mientras que eliminar las olvida definitivamente. El detalle de pestañas y paneles requiere Zellij 0.44 o posterior; en una versión anterior la página muestra los nombres de las pestañas y explica por qué. Las divisiones necesitan un cliente adjunto a la sesión, y la página lo explica en lugar de ofrecer un botón que fallaría.

Si herdr o Zellij están instalados pero no en el `PATH` del shell de inicio de sesión, la página ofrece añadirlo.

Cada servidor guardado tiene un ajuste **Attach on connect**: **Auto (detect)**, **Nothing**, **tmux**, **herdr** o **Zellij**. Auto elige el que hayas usado por última vez en ese servidor, luego el que tenga sesiones activas y luego el que esté instalado — y no adjunta nada, en lugar de adivinar, cuando todavía no ha sondeado el servidor.

La app de iOS hoy funciona únicamente con tmux.

## Agent alerts

Mobile SSH te avisa cuando un agente remoto de programación con IA — Claude Code, Codex, Gemini — está bloqueado esperándote. No lo adivina leyendo la salida de tu terminal. Hay dos vías, y funcionan con distinto nivel de detalle.

### La campana

De serie, una campana de terminal procedente de una sesión que no estás mirando genera una alerta, igual que las secuencias de escape de notificación de escritorio (OSC 9, OSC 777) que muchas herramientas ya emiten. Las campanas que llegan justo después de que hayas escrito se ignoran, para que el ruido normal del autocompletado del shell no te avise.

Esto no requiere ninguna configuración, pero la app solo sabe que *algo* ha sonado.

### El hook de agente

Para que la app sepa *qué* agente está esperando y *qué* está haciendo, instala el hook de agente en el servidor:

- **iOS:** Settings → **Agent alerts** → **Install Agent Hook**. Si hay más de un servidor conectado, te pregunta cuál.
- **Android:** mantén pulsado el encabezado del panel de una sesión y elige **Install agent hooks**.

Esto escribe un pequeño script de shell en `~/.mobile-ssh/agent-hook.sh` en ese servidor. Es agnóstico respecto al agente — recibe argumentos de línea de comandos en lugar de analizar el formato de un proveedor concreto — así que cualquier cosa capaz de ejecutar un comando puede informar a través de él. Borrar el archivo es una desinstalación limpia.

Una vez que un agente informa a través del hook:

- El encabezado del panel indica `claude · te necesita`, o nombra la herramienta que está ejecutando.
- Un panel cuyo agente está bloqueado recibe un borde ámbar. El panel que ya estás mirando se deja en paz — la pregunta está ahí mismo.
- Un distintivo en la barra de herramientas cuenta los agentes en espera en todas las conexiones, con un tope de `9+`.
- La pantalla **Agents** lista todos los agentes de todas las conexiones, con lo que están haciendo y cuánto tiempo llevan esperando.

### Responder sin escribir

Cuando un agente hace una pregunta con un conjunto fijo de respuestas, la app muestra un botón por opción — hasta seis — en la lista de agentes. En Android también puedes tocar la etiqueta del agente en el encabezado de un panel.

Tu respuesta no se escribe en la sesión. Se escribe en un archivo por un canal aparte y la recoge el hook, así que responder no puede estropear lo que haya en pantalla. La app se niega a enviar una opción que la pregunta no ofrecía realmente, y te dice con claridad si la conexión se ha caído entretanto, en lugar de fallar en silencio.

### Ajustes

Las alertas están activadas de forma predeterminada en ambas plataformas, con interruptores independientes para la notificación, el sonido, la vibración y si la sesión que estás viendo en ese momento también debe avisar.

Hay un valor predeterminado que conviene conocer: **el sonido se limita a los auriculares**. Sin nada conectado ni emparejado, una alerta notifica y vibra, pero no reproduce ningún tono. Desactívalo si quieres oír la alerta por el altavoz del teléfono.

No hay ajuste de sensibilidad ni selector de sonido — los controles son de activado/desactivado.

## Programas de terminal a pantalla completa

Para programas como Vim, less, htop, herramientas ncurses y paneles de tmux:

- La entrada pasa directamente al programa — no hay autocorrección ni búfer de sugerencias que interfiera.
- Usa la fila de teclas extra para `ESC`, flechas, `PGUP` y `PGDN`.
- Usa el zoom con pellizco si el texto es demasiado pequeño, y luego espera un momento a que el tamaño de la terminal remota se estabilice.
