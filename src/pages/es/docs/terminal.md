---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Controles de terminal de Mobile SSH, teclado, gestores tmux, herdr y Zellij, alertas de agentes, portapapeles, imágenes y escritorios remotos."
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

Cerrar un panel desconecta esa sesión SSH. Al volver al inicio, las conexiones siguen disponibles en **Sesiones activas**. La cabecera indica conexiones bloqueadas; Ajustes permite mostrar velocidades y atenuar o vibrar cuando el enlace deja de responder.

## Eternal Terminal (ET)

Ambas plataformas ofrecen estos transportes en el selector **Transporte** al agregar o editar un servidor:

- **SSH** — una conexión SSH estándar (la opción predeterminada).
- **Eternal Terminal** — una sesión ET que sobrevive a los cortes de red, al modo de suspensión del dispositivo y a los cambios de dirección IP sin reiniciar tu shell.

ET mantiene viva la sesión en el servidor, así que cuando tu teléfono cambia de red o despierta de la suspensión, Mobile SSH se vuelve a adjuntar al mismo shell en ejecución en lugar de abrir uno nuevo. Eso lo hace idóneo para los datos móviles, los saltos entre Wi-Fi y red móvil y los comandos de larga duración.

ET necesita un proceso `etserver` en el servidor. Si falta, Mobile SSH puede ofrecer instalarlo e iniciarlo mediante SSH. Revisa y aprueba los comandos y después conecta con **Eternal Terminal** seleccionado. Las rutas con servidores de salto requieren el transporte **SSH**.

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

En Android, la escritura normal pasa directamente al shell remoto, con autocorrección y sugerencias predictivas desactivadas por defecto. El dictado por voz también puede enviar texto mediante el teclado.

En iOS, **Ajustes → Terminal → Dictado y sugerencias** está activado por defecto y permite dictado, predicciones y correcciones al componer una línea. Para enviar pulsaciones sin procesamiento, desactívalo, deja **Sugerencias del teclado** desactivado y abre un panel nuevo.

**Mostrar teclado al tocar** controla si un toque abre el teclado en pantalla. Está desactivado por defecto en Android y activado en iOS; el botón del teclado sigue disponible en la barra.

## Teclados de hardware

Los teclados externos y Bluetooth controlan la terminal directamente tanto en Android como en iOS. Además de los caracteres corrientes, Mobile SSH asigna las teclas de flecha, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, las teclas de función `F1`–`F12`, las combinaciones `Ctrl`+tecla y `Alt`/`Option` como Meta, y `Shift`+`Tab`. Las teclas modificadoras se combinan con los modificadores fijos de la fila de teclas extra.

## Pegar

Al pegar en un programa que lo solicita (bash, Vim y otras apps con soporte de bracketed paste), el contenido se envuelve con marcadores de pegado entre corchetes, de modo que el contenido multilínea del portapapeles se inserta como texto en lugar de ejecutarse automáticamente línea por línea. Solo se envuelven los pegados reales; el texto escrito y dictado no se toca.

## Seleccionar, copiar, compartir

Mantén pulsada una palabra del terminal y arrastra los controles para ajustar la selección. La barra incluye:

- **Copiar** — coloca el texto seleccionado en el portapapeles del sistema. La selección permanece resaltada después, para que puedas compartirla, volver a copiarla o ampliarla.
- **Compartir** — pasa el texto seleccionado al panel de compartir del sistema (correo, notas, mensajería, etc.).
- **Seleccionar todo** — amplía la selección a todo el búfer visible de la terminal; luego usa Copiar o Compartir.
- **Pegar**: insertar el texto del portapapeles en el terminal.

## Buscar en la terminal

Busca en todo el búfer de la terminal — el búfer de desplazamiento y la pantalla visible — y salta entre coincidencias. Abre la búsqueda desde los controles de la terminal, escribe una consulta y recorre los resultados. Funciona tanto en Android como en iOS.

## Color, cursivas y portapapeles remoto

- La terminal representa **color verdadero de 24 bits** y **cursivas**, de modo que los prompts con temas, el resaltado de sintaxis y las TUI se ven igual que en el escritorio.
- **Portapapeles OSC 52:** los programas remotos pueden copiar texto al teléfono. Leer su portapapeles desde un programa remoto requiere una autorización independiente, desactivada por defecto.
- Tanto en Android como en iOS, los caracteres CJK anchos, los emoji y los caracteres combinantes (clústeres de grafemas y uniones de ancho cero) se miden y dibujan correctamente, y una **Nerd Font** incluida dibuja glifos powerline, starship, devicon e iconos de Material Design que la fuente del sistema mostraría como cuadros vacíos.

## Integración con el shell e imágenes en línea

- **Integración con el shell (OSC 133):** cuando tu shell emite marcadores de prompt OSC 133, Mobile SSH puede recorrer los prompts uno a uno y avisarte cuando termina un comando de larga duración. Funciona en Android e iOS. Ninguna de las dos apps inyecta los marcadores — los tiene que emitir tu shell (un hook `PROMPT_COMMAND`/`precmd`, o starship). En Android, la navegación entre prompts está desactivada hasta que la habilitas en **Settings → Shell integration**; en iOS el menú aparece solo en cuanto empiezan a llegar marcas.
- **Seleccionar la salida:** toca en cualquier punto dentro de la salida de un comando y selecciona ese bloque entero — el error de compilación de hace 300 líneas, no solo el último comando — y luego cópialo, compártelo o amplíalo.
- **Imágenes integradas:** los programas que usan Kitty dibujan imágenes en el terminal de Android e iOS. Sobreviven al zoom y al reajuste de líneas porque siguen sus celdas y líneas. También funcionan en aplicaciones a pantalla completa, con posiciones separadas del historial normal.
- **Glifos de mosaico:** la app dibuja bloques, braille, sextantes y octantes; `chafa`, `timg` y el arte ANSI encajan en la cuadrícula sin huecos ni cuadros vacíos, con cualquier fuente.
- **Resolución de imagen:** el ajuste Imágenes puede comunicar la resolución completa, la mitad o un tercio a los programas, reduciendo los píxeles enviados por la red móvil.
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

En ambas plataformas, tocar un programa que sigue el ratón normalmente envía un clic izquierdo. En iOS, **Tocar coloca el cursor** intercambia esta acción con el movimiento del cursor; Mayús y toque realiza la otra acción. Mantener y arrastrar como ratón está desactivado por defecto, por lo que un deslizamiento normal desplaza el contenido.

Si escribes mientras estás desplazado hacia atrás, Mobile SSH vuelve a la vista en vivo de la terminal.

## Comportamiento de tmux

Mobile SSH observa los comandos salientes de tmux para attach y nueva sesión, como:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Si se corta la conexión, la app recuerda la sesión tmux y su socket para volver al mismo destino. Cada panel del mismo host conserva su propia sesión. Si ya no existe, el shell sigue disponible.

En iOS, al cambiar de socket se consulta el prefijo actual de tmux sin suponer Ctrl+B. Un prefijo incompatible o una consulta fallida detiene la operación con un mensaje. Escribir, cerrar el panel o desconectarse cancela los pasos de conexión pendientes; no se envían comandos de conexión a un programa de pantalla completa no identificado.

## Gestor de tmux

El gestor tmux permite controlarlo sin combinaciones de prefijo. Ábrelo desde el control de multiplexores de una sesión conectada; mantenlo pulsado para elegir tmux si hay varios gestores. Muestra tres secciones:

- **Sesiones** — todas las sesiones de tmux del servidor.
- **Ventanas** — las ventanas de la sesión seleccionada.
- **Paneles** — los paneles de la ventana seleccionada.

Desde el gestor puedes:

- **Adjuntar** una sesión a la terminal actual.
- **Crear** una sesión o una ventana nuevas, y **renombrarlas**.
- **Dividir** un panel en horizontal o en vertical, **ampliar** un panel y **cerrar** sesiones, ventanas o paneles.
- **Ordenar** sesiones por Recientes (predeterminado), nombre o fecha de creación.

Un 🔔 marca cualquier sesión cuyo agente esté esperando entrada, así que puedes ver de un vistazo una ejecución de Claude Code o de Codex en pausa y adjuntarte a ella. Esto complementa las pistas para volver a adjuntarse de más arriba: esa lógica restaura tu última sesión automáticamente al reconectar, mientras que el gestor te da el control manual completo.

Ambas plataformas gestionan varios servidores tmux (sockets) en un host. Los indicadores de conexión del gestor corresponden al terminal que estás usando, no a otro cliente del servidor.

## Herdr y Zellij

Android e iOS también gestionan Herdr y Zellij. Un control de la barra abre el multiplexor principal detectado; mantenlo pulsado para elegir otro. Solo aparecen programas encontrados en ese servidor. Dentro del gestor, el título permite cambiar de servidor y el selector de multiplexores cambia de gestor.

- **Herdr** muestra sesiones, espacios de trabajo, pestañas y paneles con el estado de sus agentes. Puedes previsualizar o responder desde la lista. Las respuestas conservan el panel y la sesión seleccionados; **Enviar** envía el texto y **Solo Intro** una confirmación vacía. Se ofrece enfoque del panel exacto donde es posible; si no, usa Enfocar en la pestaña superior. Herdr proporciona el estado sin instalar otro hook.
- **Zellij** lista sesiones, pestañas y paneles, con adjuntar, renombrar, cerrar y dividir. Las sesiones cerradas siguen apareciendo en la lista, de modo que adjuntarse a ellas las resucita, mientras que eliminar las olvida definitivamente. El detalle de pestañas y paneles requiere Zellij 0.44 o posterior; en una versión anterior la página muestra los nombres de las pestañas y explica por qué. Las divisiones necesitan un cliente adjunto a la sesión, y la página lo explica en lugar de ofrecer un botón que fallaría.

Si herdr o Zellij están instalados pero no en el `PATH` del shell de inicio de sesión, la página ofrece añadirlo.

Cada servidor tiene **Adjuntar al conectar**: **Auto (detectar)**, **Nada**, **tmux**, **herdr** o **Zellij**. Auto usa la detección y el historial disponibles: primero el multiplexor usado anteriormente, luego uno con sesiones activas y después uno instalado. Sin detección guardada abre un shell normal. Una detección posterior afecta a conexiones futuras y no interrumpe lo que estás escribiendo.

## Alertas de agente

Mobile SSH te avisa cuando un agente remoto de programación con IA — Claude Code, Codex, Gemini — está bloqueado esperándote. No lo adivina leyendo la salida de tu terminal. Hay dos vías, y funcionan con distinto nivel de detalle.

### La campana

Las campanas del terminal pueden generar alertas de agentes. Por defecto se ignoran las inmediatamente posteriores a escribir. Las notificaciones remotas OSC 9/OSC 777 y los avisos de comando terminado OSC 133 tienen ajustes propios; en iOS ambos están desactivados inicialmente.

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

Las alertas están activadas por defecto en ambas plataformas, con controles independientes para notificaciones, sonido, vibración y panel activo. En iOS se incluyen por defecto las del panel activo y puede elegirse entrega solo en segundo plano. iOS solo puede entregarlas mientras permite ejecutar la app; una suspensión prolongada interrumpe las alertas SSH en vivo.

Hay un valor predeterminado que conviene conocer: **el sonido se limita a los auriculares**. Sin nada conectado ni emparejado, una alerta notifica y vibra, pero no reproduce ningún tono. Desactívalo si quieres oír la alerta por el altavoz del teléfono.

No hay ajuste de sensibilidad ni selector de sonido — los controles son de activado/desactivado.

## Programas de terminal a pantalla completa

Para programas como Vim, less, htop, herramientas ncurses y paneles de tmux:

- Para entrada directa en iOS, desactiva **Dictado y sugerencias** y **Sugerencias del teclado**, y abre un panel nuevo.
- Usa la fila de teclas extra para `ESC`, flechas, `PGUP` y `PGDN`.
- Usa el zoom con pellizco si el texto es demasiado pequeño, y luego espera un momento a que el tamaño de la terminal remota se estabilice.

## Escritorios remotos

Ambas plataformas abren escritorios mediante VNC sobre SSH. Puedes reutilizar una pantalla compartida, incluida Compartir pantalla de macOS, o aprobar la configuración de un escritorio Linux compatible. El servidor debe proporcionar el escritorio: tener SSH no crea una sesión gráfica. Duplicar una pantalla Linux requiere X11, no Wayland; macOS comparte su pantalla existente y no crea un escritorio privado.

Usa gestos para hacer clic, arrastrar y ampliar, y el teclado en pantalla o físico para escribir. Los controles del portapapeles permiten pegar texto del teléfono en el escritorio, que también puede copiar texto al teléfono.

**Tamaño de pantalla** ofrece medidas predefinidas y personalizadas que se recuerdan por servidor. En iOS cada dimensión debe estar entre 320 y 5120 píxeles. El cambio en vivo conserva las aplicaciones si el servidor lo admite. La alternativa de reiniciar requiere confirmación y solo se ofrece para un escritorio privado creado por la app. No se reinician pantallas compartidas ni escritorios reutilizados para redimensionarlos; cambia la resolución del Mac en Pantallas cuando no admita el ajuste en vivo.
