---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Controles do terminal do Mobile SSH, teclas extras, painéis, rolagem, comportamento do tmux, ações de cópia e configurações de teclado."
---

# Terminal

O terminal do Mobile SSH foi feito para operação em telefone e tablet. Ele combina uma área de terminal, uma linha de teclas extras, painéis de várias sessões, tratamento de rolagem e comportamento de reconexão.

## Noções básicas do terminal

- O terminal usa comportamento no estilo xterm com suporte a cores e tratamento das teclas de cursor.
- O buffer de rolagem mantém até 5000 linhas.
- Toque em um painel para selecioná-lo antes de digitar.
- Pince um painel do terminal para mudar o tamanho do texto. O Mobile SSH redimensiona o PTY remoto após o gesto se estabilizar.
- Toque duas vezes em um painel para entrar no modo de tela cheia. Use Voltar para retornar à grade.

## Grade de várias sessões

O Mobile SSH pode executar até oito sessões SSH ao mesmo tempo. Cada sessão aparece como um painel na grade de terminais. O cabeçalho do painel mostra o destino ou título atual. Toque em um painel para selecioná-lo, ou use **+ Add Session** para iniciar outra conexão.

Fechar um painel desconecta aquela sessão SSH. Voltar à tela inicial mantém as sessões ativas disponíveis em **Active Sessions**.

## Linha de teclas extras

A linha de teclas extras aparece acima do teclado do Android e fornece teclas de terminal difíceis de acionar em teclados de toque:

- `ESC`
- `TAB`
- `CTRL`
- `Shift`
- Teclas de seta
- `HOME`
- `END`
- `PGUP`
- `PGDN`
- Alternar teclado

`CTRL` e `Shift` agem como modificadores fixos para a próxima entrada compatível. Por exemplo, toque em `CTRL` e depois digite `C` para enviar Ctrl-C.

## Comportamento do teclado

O Mobile SSH tem duas configurações relacionadas ao teclado:

- **Tocar no terminal para mostrar o teclado:** quando ativado, tocar no terminal pede ao Android que exiba o método de entrada.
- **Sugestões do teclado:** quando ativado, teclados compatíveis podem mostrar sugestões nos prompts do shell. Desative essa opção se as sugestões interferirem com programas de terminal.

Quando as sugestões estão ativadas, o Mobile SSH mantém o texto em composição em buffer até o limite de uma palavra, para que a correção do teclado possa substituir a palavra atual antes de ela ser enviada ao shell remoto. Teclas de controle e combinações de terminal ignoram esse buffer, de modo que atalhos como os comandos de prefixo do tmux chegam prontamente.

A entrada por voz (o botão de microfone do Gboard) passa pelo mesmo buffer de texto em composição, então o texto ditado é enviado após ser resolvido, e não caractere por caractere.

## Selecionar, copiar, compartilhar

Pressione e segure dentro do terminal para entrar no modo de seleção. A barra de seleção oferece três ações:

- **Copy** — coloca o texto selecionado na área de transferência do Android.
- **Share** — envia o texto selecionado para a folha de compartilhamento do Android (e-mail, notas, mensagens etc.).
- **Select all** — expande a seleção para todo o buffer visível do terminal; em seguida, use Copy ou Share.

## Rolagem

O Mobile SSH direciona os gestos de rolagem conforme o estado do terminal:

- Na saída normal do shell, deslizar rola o buffer de rolagem local.
- Em aplicativos de terminal com modo de mouse, a rolagem envia sequências de escape de roda do mouse.
- Em aplicativos de tela alternativa sem modo de mouse, como muitas sessões tmux, a rolagem entra no modo de cópia do tmux e envia comandos de rolagem por linha.

Se você digitar enquanto está com o buffer rolado para trás, o Mobile SSH retorna à visão ao vivo do terminal.

## Comportamento do tmux

O Mobile SSH observa os comandos tmux de attach e nova sessão enviados pelo usuário, como:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Quando uma conexão cai enquanto você estava no tmux, o app pode lembrar o nome da última sessão tmux daquele servidor e tentar reanexar após a reconexão. Se nenhum nome de sessão explícito foi observado, mas o app identificou que você estava em uma sessão de tela alternativa semelhante ao tmux, ele pode tentar um `tmux attach` genérico.

Esse comportamento é feito na medida do possível. Se a sessão tmux remota não existir mais, o shell remoto continua disponível.

## Agent alerts

O Mobile SSH pode monitorar a saída do terminal da sessão ativa em busca de padrões que indicam que um agente remoto está aguardando entrada. Quando uma correspondência é detectada — por exemplo, Claude Code ou Codex pausando para um prompt — o app envia uma notificação com som e vibração opcionais.

Para configurar:

1. Abra **Settings** na tela inicial.
2. Ative **Agent alerts**.
3. Escolha um som de notificação e um padrão de vibração.

O alerta é reproduzido pela saída de áudio ativa no momento, incluindo fones de ouvido, para que você possa ouvi-lo enquanto assiste a um vídeo ou com o telefone bloqueado. A notificação aparece mesmo quando o Mobile SSH está em segundo plano.

Os padrões de Agent alerts são verificados contra a saída visível do terminal. Se a ferramenta remota exibir uma linha de prompt reconhecível (um nome de usuário, um `?`, uma pergunta entre colchetes), o app pode identificá-la automaticamente. Se os alertas dispararem com muita frequência ou não dispararem, ajuste a sensibilidade em Settings.

## Programas de terminal em tela cheia

Para programas como Vim, less, htop, ferramentas ncurses e painéis tmux:

- Desative as sugestões do teclado se o teclado começar a fazer buffer da entrada de uma forma que o programa não espera.
- Use a linha de teclas extras para `ESC`, setas, `PGUP` e `PGDN`.
- Use o zoom por pinça se o texto estiver pequeno demais e aguarde um instante para o tamanho do terminal remoto se estabilizar.
