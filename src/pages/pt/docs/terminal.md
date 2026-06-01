---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Controles do terminal do Mobile SSH, teclas extras, painéis, rolagem, comportamento do tmux, ações de cópia e configurações de teclado."
---

# Terminal

O terminal do Mobile SSH foi feito para operação em telefone e tablet. Ele combina uma área de terminal, uma linha de teclas extras, painéis de várias sessões, tratamento de rolagem e comportamento de reconexão.

## Noções básicas do terminal

- O terminal usa comportamento no estilo xterm, com suporte a cores e tratamento das teclas de cursor.
- O buffer de rolagem mantém até 5000 linhas.
- Toque em um painel para selecioná-lo antes de digitar.
- Pince um painel do terminal para mudar o tamanho do texto. O Mobile SSH redimensiona o PTY remoto após o gesto se estabilizar.
- Toque duas vezes em um painel para entrar no modo tela cheia. Use Voltar para retornar à grade.

## Grade de várias sessões

O Mobile SSH pode executar até oito sessões SSH ao mesmo tempo. Cada sessão aparece como um painel na grade de terminais. O cabeçalho do painel mostra o destino ou título atual. Toque em um painel para selecioná-lo, ou use **+ Adicionar sessão** para iniciar outra conexão.

Fechar um painel desconecta aquela sessão SSH. Voltar à tela inicial mantém as sessões ativas disponíveis em **Sessões ativas**.

## Linha de teclas extras

A linha de teclas extras aparece acima do teclado do Android e fornece teclas de terminal difíceis em teclados de toque:

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

`CTRL` e `Shift` agem como modificadores fixos para a próxima entrada compatível. Por exemplo, toque em `CTRL` e digite `C` para enviar Ctrl-C.

## Comportamento do teclado

O Mobile SSH tem duas configurações relacionadas ao teclado:

- **Tocar no terminal para mostrar o teclado:** quando ativado, tocar no terminal pede ao Android que mostre o método de entrada.
- **Sugestões do teclado:** quando ativado, teclados compatíveis podem mostrar sugestões nos prompts do shell. Desative se as sugestões atrapalharem programas de terminal.

Quando as sugestões estão ativadas, o Mobile SSH mantém o texto em composição em buffer até o limite de uma palavra, para que a correção do teclado possa substituir a palavra atual antes de ela ser enviada ao shell remoto. Teclas de controle e combinações de terminal ignoram esse buffer, para que atalhos como os comandos de prefixo do tmux cheguem prontamente.

A entrada por voz (o botão de microfone do Gboard) passa pelo mesmo buffer de texto em composição, então o texto ditado é enviado depois de resolvido, e não caractere por caractere.

## Selecionar, copiar, compartilhar

Pressione e segure dentro do terminal para entrar no modo de seleção. A barra de seleção oferece três ações:

- **Copiar** — coloca o texto selecionado na área de transferência do Android.
- **Compartilhar** — envia o texto selecionado para a folha de compartilhamento do Android (e-mail, notas, mensagens etc.).
- **Selecionar tudo** — expande a seleção para todo o buffer visível do terminal, depois Copiar ou Compartilhar.

## Rolagem

O Mobile SSH direciona os gestos de rolagem conforme o estado do terminal:

- Na saída normal do shell, deslizar rola o buffer de rolagem local.
- Em apps de terminal com modo de mouse, a rolagem envia sequências de escape de roda do mouse.
- Em apps de tela alternativa sem modo de mouse, como muitas sessões tmux, a rolagem entra no modo de cópia do tmux e envia comandos de rolagem por linha.

Se você digitar enquanto está rolando para trás, o Mobile SSH retorna à visão ao vivo do terminal.

## Comportamento do tmux

O Mobile SSH observa comandos tmux de attach e nova sessão que saem, como:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Quando uma conexão cai enquanto você estava no tmux, o app pode lembrar o nome da última sessão tmux daquele servidor e tentar reanexar após reconectar. Se nenhum nome de sessão explícito foi observado, mas o app sabe que você estava em uma sessão semelhante ao tmux em tela alternativa, ele pode tentar um `tmux attach` genérico.

Esse comportamento é feito na medida do possível. Se a sessão tmux remota não existir mais, o shell remoto continua disponível.

## Programas de terminal em tela cheia

Para programas como Vim, less, htop, ferramentas ncurses e painéis tmux:

- Desative as sugestões do teclado se o teclado começar a fazer buffer da entrada de um jeito que o programa não espera.
- Use a linha de teclas extras para `ESC`, setas, `PGUP` e `PGDN`.
- Use o zoom por pinça se o texto estiver pequeno demais e aguarde um instante para o tamanho do terminal remoto se estabilizar.
