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
- Toque duas vezes em um painel (ou use o seu controle de expansão) para entrar no modo de tela cheia. Use Voltar no Android, ou o controle de recolher no iOS, para retornar à grade.

## Grade de várias sessões

O Mobile SSH pode executar até oito sessões SSH ao mesmo tempo. Cada sessão aparece como um painel na grade de terminais. O cabeçalho do painel mostra o destino ou título atual. Toque em um painel para selecioná-lo, ou use **+ Add Session** para iniciar outra conexão.

Fechar um painel desconecta aquela sessão SSH. Voltar à tela inicial mantém as sessões ativas disponíveis em **Active Sessions**.

## Eternal Terminal (ET)

Cada servidor salvo pode usar um de dois transportes, escolhido com o seletor **Transport** ao adicionar ou editar um servidor:

- **SSH** -- uma conexão SSH padrão (o padrão).
- **Eternal Terminal** -- uma sessão ET que sobrevive a quedas de rede, suspensão do dispositivo e mudanças de endereço IP sem reiniciar o seu shell.

O ET mantém a sessão ativa no servidor, de modo que, quando o seu telefone muda de rede ou desperta da suspensão, o Mobile SSH reanexa ao mesmo shell em execução em vez de abrir um novo. Isso o torna uma boa escolha para dados móveis, transições entre Wi-Fi e rede celular e comandos de longa duração.

O ET precisa de um processo `etserver` no host. Se o servidor não tiver um, o Mobile SSH pode instalá-lo e iniciá-lo para você pela conexão SSH existente -- sem necessidade de configuração manual no servidor. Quando o ET estiver disponível, conecte com o transporte **Eternal Terminal** selecionado.

## Linha de teclas extras

Tanto no Android quanto no iOS, a linha de teclas extras aparece acima do teclado na tela e fornece teclas de terminal difíceis de acionar em teclados de toque:

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

O terminal usa uma conexão nativa e direta (pass-through) com o teclado na tela: cada caractere é enviado ao shell remoto conforme você digita, com a autocorreção e as sugestões preditivas desativadas, de modo que o teclado nunca reescreve a entrada antes de ela chegar ao shell. Isso mantém previsíveis o Vim, o tmux, o htop, o less, shells com combinações de teclas incomuns e prompts remotos de senha — não há buffer de sugestões para desativar.

- **Tocar no terminal para mostrar o teclado:** quando ativado, tocar no terminal pede ao sistema que exiba o teclado na tela.

O ditado por voz do teclado virtual continua funcionando: o texto ditado é enviado diretamente ao shell como qualquer outra entrada digitada.

## Teclados físicos

Teclados externos e Bluetooth controlam o terminal diretamente no Android e no iOS. Além dos caracteres comuns, o Mobile SSH mapeia as teclas de seta, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, as teclas de função `F1`–`F12`, combinações `Ctrl`+tecla e `Alt`/`Option` como Meta, e `Shift`+`Tab`. As teclas modificadoras se combinam com os modificadores fixos da linha de teclas extras.

## Colar

A colagem em um programa que a solicita (bash, Vim e outros aplicativos com bracketed paste) é envolvida em marcadores de bracketed paste, para que o conteúdo de várias linhas da área de transferência seja inserido como texto em vez de ser executado automaticamente linha por linha. Apenas colagens reais são envolvidas; o texto digitado e ditado não é afetado.

## Selecionar, copiar, compartilhar

Pressione e segure dentro do terminal para entrar no modo de seleção. A barra de seleção oferece três ações:

- **Copy** — coloca o texto selecionado na área de transferência do sistema.
- **Share** — envia o texto selecionado para a folha de compartilhamento do sistema (e-mail, notas, mensagens etc.).
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

## Gerenciador do tmux

O Mobile SSH inclui um gerenciador do tmux para que você possa navegar e controlar o tmux sem digitar combinações de prefixo. Abra-o com o botão **Tmux** a partir de uma sessão conectada. Ele lista, em três seções:

- **Sessions** -- todas as sessões tmux no servidor.
- **Windows** -- as janelas da sessão selecionada.
- **Panes** -- os painéis da janela selecionada.

A partir do gerenciador, você pode:

- **Anexar** uma sessão ao terminal atual.
- **Criar** uma nova sessão ou janela e **renomeá-las**.
- **Dividir** um painel horizontal ou verticalmente, **ampliar** um painel e **encerrar** sessões, janelas ou painéis.
- **Ordenar** as sessões por nome ou data de criação.

Um 🔔 marca qualquer sessão cujo agente esteja aguardando entrada, para que você possa identificar de relance uma execução pausada do Claude Code ou do Codex e anexar a ela. Isso complementa as dicas de reanexação acima: a lógica de reanexação restaura automaticamente a sua última sessão ao reconectar, enquanto o gerenciador oferece controle manual completo.

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

- A entrada passa direto para o programa — não há autocorreção nem buffer de sugestões para interferir.
- Use a linha de teclas extras para `ESC`, setas, `PGUP` e `PGDN`.
- Use o zoom por pinça se o texto estiver pequeno demais e aguarde um instante para o tamanho do terminal remoto se estabilizar.
