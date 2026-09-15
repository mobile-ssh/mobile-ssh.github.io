---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Mobile SSH terminal controls, keyboard settings, tmux, herdr and Zellij managers, agent alerts, clipboard, pictures and remote desktops."
---

# Terminal

Di Mobile SSH terminal na for phone and tablet operation. E dey combine terminal canvas, extra key row, multi-session panes, scroll handling, and reconnection behavior.

## Terminal basics

- Di terminal dey use xterm-style behavior wit color support and cursor-key handling.
- Di scrollback buffer dey keep 5000 lines by default, and you fit set am to 1,000, 10,000, or 50,000 for Settings.
- Tap one pane make you select am before you type.
- Pinch terminal pane to change text size. Mobile SSH go resize di remote PTY after di gesture settle.
- Double-tap one pane (or use im expand control) to enter fullscreen mode. Use Back on Android, or di collapse control on iOS, to return to di grid.

## Multi-session grid

Mobile SSH fit run up to eight SSH sessions at di same time. Each session dey show as pane for di terminal grid. Tap one pane make you select am, or use **+ Add Session** to start anoda connection.

Di pane header dey name where you dey. For Android e dey show di real working directory of di pane, wey e ask tmux or wey di shell report over OSC 7, and e dey refresh am while di app dey open; for iOS e dey show di title wey di remote set, and e go fall back to `user@host:port`.

If you close one pane, dat SSH session go disconnect. If you return home, live connections still dey **Active Sessions**. Di header dey show connections wey hang; Settings get transfer speed plus dimming or vibration wey you fit turn on when di link no answer.

## Eternal Terminal (ET)

Di two platforms get these transports for **Transport** when you add or edit server:

- **SSH** -- ordinary SSH connection (na di default).
- **Eternal Terminal** -- ET session wey dey survive network drop, device sleep, and IP address change witout restarting your shell.

ET dey keep di session alive for di server, so wen your phone change network or wake from sleep, Mobile SSH dey reattach to di same shell wey dey run instead of opening new one. Dat one make am fit mobile data, Wi-Fi/cellular hand-off, and command wey dey run long time.

ET need `etserver` for di host. If e no dey, Mobile SSH fit offer to install and start am through SSH. Check and approve di setup commands, then connect with **Eternal Terminal**. Route wey pass jump hosts need **SSH** transport.

## Extra key row

Di two platforms dey put row of thirteen terminal key within reach — di ones wey hard or wey no dey for touch keyboard. For Android na strip wey dey for di bottom of di session (and e dey hide imsef wen hardware keyboard dey attached); for iOS e dey ride on top di software keyboard.

Di two default sets get di same size but dem no be di same:

| | Android | iOS |
|---|---|---|
| Defaults | `ESC` `TAB` `CTRL` arrows `HOME` `PGUP` `END` `PGDN` `⌫` `⌨` | `ESC` `TAB` `CTRL` `⇧` arrows `HOME` `END` `PGUP` `PGDN` `⌨` |
| Wetin different | e get backspace, but Shift no dey | e get sticky Shift, but backspace no dey |

**Di row no dey scroll at all.** Wen di keys no fit enter di width again, dem dey divide di space evenly and wrap go second row; anything wey still remain dey fold enter `⋯` overflow menu. Nothing dey hide behind swipe or clip for di screen edge, and modifier wey you don arm still dey apply to key wey you pick from di overflow.

`CTRL` dey act as sticky modifier: tap `CTRL`, then type `C` to send Ctrl-C. `Shift` sticky pass for iOS than for Android — for iOS e dey also make di next character wey you type for di software keyboard capital, while for Android e dey apply only to di bar own keys (`Shift`+`Tab`, `Shift`+arrows).

If you hold key like arrow or `PGDN`, e dey repeat.

## Keyboard behavior

For Android, normal typing dey go straight to di remote shell; autocorrect and suggestions dey off by default. Voice dictation still fit send text through di keyboard.

For iOS, **Settings → Terminal → Dictation and suggestions** dey on by default. E allow voice typing, predictions and corrections as you dey compose line. If you want direct keystrokes, turn am off, keep **Keyboard suggestions** off, then open new pane.

**Show keyboard on tap** decide whether tap go raise di keyboard. E dey off by default for Android, on for iOS; di keyboard button still dey for toolbar.

## Hardware keyboards

External and Bluetooth keyboards dey drive di terminal directly for both Android and iOS. Pass ordinary characters, Mobile SSH dey map arrow keys, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, function keys `F1`–`F12`, `Ctrl`+key and `Alt`/`Option`-as-Meta chords, and `Shift`+`Tab`. Modifier keys dey combine wit di extra key row sticky modifiers.

## Paste

Wen you paste enter program wey request am (bash, Vim, and oda bracketed-paste apps), e dey wrap inside bracketed-paste markers, so multi-line clipboard content dey enter as text instead of make e run line by line by itself. Na only real paste dem dey wrap; typed and dictated text no dey touched.

## Select, copy, share

Long-press word for terminal, then drag di handles to adjust wetin you select. Di selection toolbar get:

- **Copy** -- put di selected text for di system clipboard. Di selection dey stay highlighted afterward, so you fit share am, re-copy, or extend am.
- **Share** -- pass di selected text to di system share sheet (mail, notes, messaging, etc.).
- **Select all** -- expand di selection to di full visible terminal buffer, then Copy or Share.
- **Paste** -- put clipboard text inside di terminal.

## Find for di terminal

Search di whole terminal buffer — scrollback and di visible screen — and jump between di matches. Open search from di terminal controls, type wetin you dey find, and step through di hits. Dis one dey work for both Android and iOS.

## Color, italics, and remote clipboard

- Di terminal dey render **24-bit true color** and **italics**, so themed prompts, syntax highlighting, and TUIs go look di way dem dey for desktop.
- **OSC 52 clipboard:** remote programs fit copy text to your phone. To read di phone clipboard from remote program, you must turn on separate permission; e dey off by default.
- For both Android and iOS, wide CJK, emoji, and combining characters (grapheme clusters and zero-width joiners) dey measured and drawn correctly, and bundled **Nerd Font** dey draw powerline, starship, devicon, and Material Design icon glyphs wey di system font for don show as empty boxes.

## Shell integration and inline images

- **Shell integration (OSC 133):** wen your shell dey emit OSC 133 prompt markers, Mobile SSH fit step between prompts and alert you wen long-running command finish. E dey work for Android and iOS. Neither app dey inject di markers — na your shell go emit dem (`PROMPT_COMMAND`/`precmd` hook, or starship). For Android, prompt navigation dey off until you enable am under **Settings → Shell integration**; for iOS di menu dey show by imsef once marks begin land.
- **Select output:** touch anywhere inside di output of one command and select dat whole block — di build error wey happen 300 lines back, no be just di last command — then copy, share, or extend am.
- **Inline images:** programs wey use Kitty dey show pictures inside terminal for Android and iOS. Di pictures follow cells and lines, so zoom and line wrapping no remove dem. Dem still work for full-screen apps, with positions separate from normal scrollback.
- **Mosaic glyphs:** di app draw block, braille, sextant and octant characters by itself, so `chafa`, `timg` and ANSI art fit di grid without gaps or empty boxes, no matter di font.
- **Image resolution:** Images setting fit tell programs full, half or one-third of di display resolution, so fewer pixels go pass mobile network.
- **Real working directory (Android):** di pane header dey show where di pane really dey, wey e ask tmux or wey di shell report over OSC 7, instead of whatever di last prompt just print.

## Appearance and keys

For both Android and iOS, Settings dey let you tailor di terminal:

- **Font:** choose di system monospace font, JetBrains Mono, or Source Code Pro.
- **Color scheme:** Default, Solarized Dark or Light, Gruvbox, Dracula, or Nord — dem dey apply live to open panes.
- **Extra key row:** add, remove, reorder, and hide keys, define your own escape-sequence keys, and reset to defaults, wit live preview wey dey show di exact row split wey you go get. Android put dis one for **Keys** tab; iOS put am under **Extra keys → Customize keys**.
- **Add from presets:** palette of about 45 key for six group — `F1`–`F12`, Ctrl combination like `^C` `^D` `^Z` `^R` `^L`, symbol like `|` `~` `/` `_` `:`, and modifiers. Dem dey send `F1`–`F12` as ordinary escape sequence, so dem no need `FN` chord. Android also get 📎 **Attach a file** key wey dey open di file picker and upload enter di live session; iOS get `INS`, `DEL`, and `FN` key wey dey reveal digit row.
- **Scrollback size:** 1,000, 5,000, 10,000, or 50,000 lines (5,000 na di default). E dey apply to new panes.
- **Text size:** slider, along wit pinch-to-zoom.
- **Theme:** System, Light, or Dark for di whole app.

Reset dey restore di defaults wey di app ship wit instead of freezing today list, so improvement wey later release bring go still reach you. Any edit dey apply live to panes wey don already open.

## Scrolling

Mobile SSH dey route scroll gestures based on terminal state:

- For normal shell output, swiping dey scroll di local scrollback buffer.
- For mouse-mode terminal apps, scrolling dey send mouse-wheel escape sequences.
- For alternate-screen apps witout mouse mode, like plenty tmux sessions, scrolling dey enter tmux copy mode and send line scroll commands.

For both platforms, tap inside program wey track mouse normally send left click. For iOS, **Tap places the cursor** swap this with cursor movement; Shift-tap do di other action. Hold-then-drag mouse input dey off by default, so ordinary swipe dey scroll.

If you type while you don scroll back, Mobile SSH go return to di live terminal view.

## tmux behavior

Mobile SSH dey observe outgoing tmux attach and new-session commands like:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

When connection drop, di app remember di tmux session and socket so reconnect fit carry you back there. Different panes for di same host keep their own attachment. If di session don disappear, shell still dey available.

For iOS, socket switch read di current tmux prefix instead of assuming Ctrl+B. Prefix wey no get support or lookup wey fail go stop with message. Typing, closing pane or disconnecting cancel pending attach steps; di app no send attach commands into full-screen program wey e never identify.

## Tmux manager

Di tmux manager let you browse and control tmux without prefix chords. Open am from di multiplexer control for connected session; long-press to choose tmux if several managers dey. E show three sections:

- **Sessions** -- every tmux session wey dey di server.
- **Windows** -- windows wey dey inside di session wey you select.
- **Panes** -- panes wey dey inside di window wey you select.

From di manager you fit:

- **Attach** one session to di current terminal.
- **Create** new session or window, and **rename** dem.
- **Split** pane horizontal or vertical, **zoom** pane, and **kill** session, window, or pane.
- **Sort** sessions by Recent (na di default), name or creation date.

🔔 dey mark any session wey im agent dey wait for input, so you fit spot Claude Code or Codex wey pause wit one eye and attach to am. Dis one dey complement di reattach hints on top: di reattach logic dey restore your last session automatic wen you reconnect, while di manager dey give you full manual control.

Both platforms fit manage more than one tmux server (socket) for di same host. Di manager attachment marks na for di terminal wey you dey use, no be another client for di server.

## Herdr and Zellij

Android and iOS dey manage Herdr and Zellij too. One toolbar control open di main multiplexer wey e detect; long-press to choose another. Only programs wey e find for dat server go show. Inside manager, server title change server, while multiplexer picker change manager.

- **Herdr** show sessions, workspaces, tabs and panes with agent status. Preview or answer agent from di list. Replies still go to di selected pane and named session; **Send** submit text and **Just Enter** send empty confirmation. Exact pane focus show where support dey; otherwise use Focus for di parent tab. Herdr supply status without extra hook.
- **Zellij** dey list sessions, tabs, and panes wit attach, rename, kill, and split. Session wey dem kill still dey listed so attach dey resurrect am, while delete dey forget am for good. Tab and pane detail need Zellij 0.44 or newer; for older version di page dey show tab name and talk why. Split need client wey attach to di session, and di page dey explain dat instead of offering button wey go fail.

If herdr or Zellij dey installed but e no dey di login shell `PATH`, di page go offer to add am.

Every saved server get **Attach on connect**: **Auto (detect)**, **Nothing**, **tmux**, **herdr** or **Zellij**. Auto use detection and history: first di one you don use, then one with live sessions, then installed one. If cached detection no dey, e open plain shell. Later probe only affect future connections; e no launch over wetin you dey type.

## Agent alerts

Mobile SSH dey tell you wen remote AI coding agent — Claude Code, Codex, Gemini — block dey wait for you. E no dey guess by reading your terminal output. Two road dey, and dem dey work for different level of detail.

### Di bell

Terminal bell fit raise agent alert. By default, bell wey follow typing immediately no count. Remote notifications OSC 9/OSC 777 and OSC 133 command-finished alerts get separate settings; for iOS both dey off until you enable dem.

Dis one no need any setup, but di app only sabi say *something* ring.

### Di agent hook

For di app to sabi *which* agent dey wait and *wetin* e dey do, install di agent hook for di server:

- **iOS:** Settings → **Agent alerts** → **Install Agent Hook**. If pass one server dey connected, e go ask you which one.
- **Android:** long-press di pane header of one session and choose **Install agent hooks**.

Dis one dey write small shell script go `~/.mobile-ssh/agent-hook.sh` for dat server. E no tie to any agent — e dey take command-line argument instead of parsing one vendor own format — so anything wey fit run command fit report through am. If you delete di file, na clean uninstall.

Once agent report through di hook:

- Di pane header go read `claude · needs you`, or e go name di tool wey e dey run.
- Pane wey im agent block dey get amber border. Di pane wey you dey look already dem no dey touch am — di prompt dey right dia.
- Badge for di toolbar dey count di agents wey dey wait across every connection, and e dey cap for `9+`.
- Di **Agents** screen dey list every agent for every connection, wit wetin e dey do and how long e don dey wait.

### Answer witout typing

Wen agent ask question wey get fixed set of answer, di app dey show button for each option — up to six — inside di Agents list. For Android you fit also tap di agent chip for pane header.

Dem no dey type your answer inside di session. Dem dey write am go file over separate channel and di hook dey pick am, so reply no fit spoil wetin dey for screen. Di app dey refuse to send option wey di prompt no actually offer, and e dey tell you plain if di connection don drop, instead of failing quietly.

### Settings

Agent alerts dey on by default for both platforms, with switches for notification, sound, vibration and active pane. For iOS, active-pane alerts dey on too, and you fit choose background-only delivery. Alerts fit come only while iOS allow di app run; long background suspension stop live SSH alerts.

One default dey wey e good make you sabi: **sound dey limited to headphones**. If nothing plug or pair, alert go notify and vibrate but e no go play any tone. Off dat one if you want make di alert loud for di phone speaker.

No sensitivity setting dey and no sound picker dey — na on/off di controls be.

## Full-screen terminal programs

For programs like Vim, less, htop, ncurses tools, and tmux panes:

- For direct terminal input on iOS, turn **Dictation and suggestions** and **Keyboard suggestions** off, then open new pane.
- Use di extra key row for `ESC`, arrows, `PGUP`, and `PGDN`.
- Use pinch zoom if text too small, then wait small make di remote terminal size settle.

## Remote desktops

Both platforms fit open remote desktop with VNC wey pass through SSH. Reuse screen wey dem already share, including macOS Screen Sharing, or approve setup for supported Linux desktop. Na di server must provide desktop; SSH access alone no create graphical session. Linux mirroring need X11, no be Wayland; macOS use existing shared screen, e no create private desktop.

Use touch to click, drag and zoom; use screen keyboard or physical keyboard to type. Clipboard controls let you paste phone text into desktop, and desktop fit copy text back to phone too.

**Screen Size** get presets and custom sizes wey e remember per server. For iOS, each side must dey between 320 and 5120 pixels. Live resize keep programs running if server support am. Restart fallback need your confirmation and na only for private desktop wey di app create. E no restart reused desktop or shared console just to resize; change Mac resolution from Displays settings if live resize no dey.
