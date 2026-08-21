---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Controles do terminal do Mobile SSH, teclas extras, painéis, rolagem, tmux, gerenciadores herdr e Zellij, alertas de agente, ações de cópia e configurações de teclado."
---

# Terminal

O terminal do Mobile SSH foi feito para operação em telefone e tablet. Ele combina uma área de terminal, uma linha de teclas extras, painéis de várias sessões, tratamento de rolagem e comportamento de reconexão.

## Noções básicas do terminal

- O terminal usa comportamento no estilo xterm com suporte a cores e tratamento das teclas de cursor.
- O buffer de rolagem mantém 5000 linhas por padrão, e pode ser definido em 1.000, 10.000 ou 50.000 nas Configurações.
- Toque em um painel para selecioná-lo antes de digitar.
- Pince um painel do terminal para mudar o tamanho do texto. O Mobile SSH redimensiona o PTY remoto após o gesto se estabilizar.
- Toque duas vezes em um painel (ou use o seu controle de expansão) para entrar no modo de tela cheia. Use Voltar no Android, ou o controle de recolher no iOS, para retornar à grade.

## Grade de várias sessões

O Mobile SSH pode executar até oito sessões SSH ao mesmo tempo. Cada sessão aparece como um painel na grade de terminais. Toque em um painel para selecioná-lo, ou use **+ Add Session** para iniciar outra conexão.

O cabeçalho do painel diz onde você está. No Android, ele mostra o diretório de trabalho real do painel, obtido do tmux ou informado pela shell via OSC 7 e atualizado enquanto o app está aberto; no iOS, ele mostra o título definido pelo lado remoto, com `user@host:port` como alternativa.

Fechar um painel desconecta aquela sessão SSH. Voltar à tela inicial mantém as sessões ativas disponíveis em **Active Sessions**.

## Eternal Terminal (ET)

Cada servidor salvo pode usar um de dois transportes, escolhido com o seletor **Transport** ao adicionar ou editar um servidor:

- **SSH** -- uma conexão SSH padrão (o padrão).
- **Eternal Terminal** -- uma sessão ET que sobrevive a quedas de rede, suspensão do dispositivo e mudanças de endereço IP sem reiniciar o seu shell.

O ET mantém a sessão ativa no servidor, de modo que, quando o seu telefone muda de rede ou desperta da suspensão, o Mobile SSH reanexa ao mesmo shell em execução em vez de abrir um novo. Isso o torna uma boa escolha para dados móveis, transições entre Wi-Fi e rede celular e comandos de longa duração.

O ET precisa de um processo `etserver` no host. Se o servidor não tiver um, o Mobile SSH pode instalá-lo e iniciá-lo para você pela conexão SSH existente -- sem necessidade de configuração manual no servidor. Quando o ET estiver disponível, conecte com o transporte **Eternal Terminal** selecionado.

## Linha de teclas extras

As duas plataformas deixam ao alcance uma linha de treze teclas de terminal — justamente aquelas que são difíceis ou inexistentes em um teclado de toque. No Android, é uma faixa na parte de baixo da sessão (que se esconde sozinha quando há um teclado físico conectado); no iOS, ela fica acima do teclado virtual.

Os dois conjuntos padrão têm o mesmo tamanho, mas não são idênticos:

| | Android | iOS |
|---|---|---|
| Padrões | `ESC` `TAB` `CTRL` setas `HOME` `PGUP` `END` `PGDN` `⌫` `⌨` | `ESC` `TAB` `CTRL` `⇧` setas `HOME` `END` `PGUP` `PGDN` `⌨` |
| Diferença | tem tecla de retrocesso, não tem Shift | tem Shift fixo, não tem tecla de retrocesso |

**A linha nunca rola.** Quando as teclas deixam de caber na largura, elas dividem o espaço por igual e quebram para uma segunda linha; o que ainda sobrar se recolhe em um menu de excedentes `⋯`. Nada fica escondido atrás de um deslize nem cortado na borda da tela, e um modificador armado continua valendo para uma tecla que você escolha no menu de excedentes.

`CTRL` age como modificador fixo: toque em `CTRL` e depois digite `C` para enviar Ctrl-C. O `Shift` é mais "grudento" no iOS do que no Android — no iOS ele também deixa maiúsculo o próximo caractere que você digitar no teclado virtual, enquanto no Android ele vale apenas para as teclas da própria barra (`Shift`+`Tab`, `Shift`+setas).

Segure uma tecla como uma seta ou `PGDN` e ela se repete.

## Comportamento do teclado

O terminal usa uma conexão nativa e direta (pass-through) com o teclado na tela: cada caractere é enviado ao shell remoto conforme você digita, com a autocorreção e as sugestões preditivas desativadas, de modo que o teclado nunca reescreve a entrada antes de ela chegar ao shell. Isso mantém previsíveis o Vim, o tmux, o htop, o less, shells com combinações de teclas incomuns e prompts remotos de senha — não há buffer de sugestões para desativar.

- **Tocar no terminal para mostrar o teclado:** quando ativado, tocar no terminal pede ao sistema que exiba o teclado na tela.

O ditado por voz do teclado virtual continua funcionando: o texto ditado é enviado diretamente ao shell como qualquer outra entrada digitada.

## Teclados físicos

Teclados externos e Bluetooth controlam o terminal diretamente no Android e no iOS. Além dos caracteres comuns, o Mobile SSH mapeia as teclas de seta, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, as teclas de função `F1`–`F12`, combinações `Ctrl`+tecla e `Alt`/`Option` como Meta, e `Shift`+`Tab`. As teclas modificadoras se combinam com os modificadores fixos da linha de teclas extras.

## Colar

A colagem em um programa que a solicita (bash, Vim e outros aplicativos com bracketed paste) é envolvida em marcadores de bracketed paste, para que o conteúdo de várias linhas da área de transferência seja inserido como texto em vez de ser executado automaticamente linha por linha. Apenas colagens reais são envolvidas; o texto digitado e ditado não é afetado.

## Selecionar, copiar, compartilhar

Pressione e segure dentro do terminal para selecionar a palavra sob o seu dedo e, em seguida, arraste as alças para ajustar. A barra de seleção oferece três ações:

- **Copy** — coloca o texto selecionado na área de transferência do sistema. A seleção permanece destacada depois, para que você possa compartilhá-la, copiá-la de novo ou estendê-la.
- **Share** — envia o texto selecionado para a folha de compartilhamento do sistema (e-mail, notas, mensagens etc.).
- **Select all** — expande a seleção para todo o buffer visível do terminal; em seguida, use Copy ou Share.

## Pesquisar no terminal

Pesquise em todo o buffer do terminal — o scrollback e a tela visível — e pule entre as correspondências. Abra a pesquisa a partir dos controles do terminal, digite uma consulta e percorra os resultados. Isso funciona tanto no Android quanto no iOS.

## Cor, itálicos e área de transferência remota

- O terminal renderiza **cores reais de 24 bits** e **itálicos**, de modo que prompts com tema, realce de sintaxe e TUIs ficam com a aparência que têm no desktop.
- **Área de transferência via OSC 52:** quando um programa remoto copia texto (o `set-clipboard` do tmux, um yank OSC 52 do Vim/Neovim), ele vai parar na área de transferência do seu celular — assim você pode copiar do servidor e colar em um app local.
- Tanto no Android quanto no iOS, caracteres CJK largos, emojis e caracteres combinantes (clusters de grafemas e juntores de largura zero) são medidos e desenhados corretamente, e uma **Nerd Font** incluída desenha glifos de ícones powerline, starship, devicon e Material Design que a fonte do sistema mostraria como quadrados vazios.

## Integração de shell e imagens em linha

- **Integração de shell (OSC 133):** quando sua shell emite marcadores de prompt OSC 133, o Mobile SSH pode avançar de um prompt a outro e alertá-lo quando um comando de longa duração termina. Funciona no Android e no iOS. Nenhum dos apps injeta os marcadores — sua shell precisa emiti-los (um hook `PROMPT_COMMAND`/`precmd`, ou o starship). No Android, a navegação entre prompts fica desligada até você ativá-la em **Settings → Shell integration**; no iOS, o menu aparece sozinho assim que as marcações começam a chegar.
- **Selecionar a saída:** toque em qualquer ponto dentro da saída de um comando e selecione esse bloco inteiro — o erro de compilação de 300 linhas atrás, não só o do último comando — e depois copie, compartilhe ou estenda a seleção.
- **Imagens em linha:** programas que usam o protocolo gráfico Kitty desenham imagens diretamente no terminal, no Android e no iOS. As imagens sobrevivem ao zoom por pinça e à reorganização das linhas: elas são medidas em células e acompanham a sua linha, em vez de serem descartadas deixando um buraco. Elas são um recurso da tela principal e são limpas quando uma TUI de tela cheia assume.
- **Glifos de mosaico (Android):** os caracteres de bloco, braille, sextantes e octantes são desenhados pelo próprio app, em vez de serem pedidos a uma fonte, para que `chafa`, `timg` e arte ANSI preencham a grade com exatidão — sem emendas, sem quadrados vazios, qualquer que seja a fonte escolhida.
- **Diretório de trabalho real (Android):** o cabeçalho do painel mostra onde o painel realmente está, obtido do tmux ou informado pela shell via OSC 7, em vez do que o último prompt tiver impresso.

## Aparência e teclas

Tanto no Android quanto no iOS, as Configurações permitem personalizar o terminal:

- **Fonte:** escolha a fonte monoespaçada do sistema, JetBrains Mono ou Source Code Pro.
- **Esquema de cores:** Padrão, Solarized Dark ou Light, Gruvbox, Dracula ou Nord — aplicado ao vivo aos painéis abertos.
- **Linha extra de teclas:** adicione, remova, reordene e oculte teclas, defina suas próprias teclas de sequência de escape e redefina para os padrões, com uma pré-visualização ao vivo que mostra exatamente como a linha será dividida. O Android coloca isso em uma aba **Keys**; o iOS, em **Extra keys → Customize keys**.
- **Adicionar a partir de predefinições:** uma paleta de cerca de 45 teclas em seis grupos — `F1`–`F12`, combinações com Ctrl como `^C` `^D` `^Z` `^R` `^L`, símbolos como `|` `~` `/` `_` `:` e modificadores. `F1`–`F12` são enviadas como sequências de escape comuns, então não precisam de uma combinação com `FN`. O Android também oferece uma tecla 📎 **Attach a file**, que abre o seletor de arquivos e envia o arquivo para a sessão ativa; o iOS oferece `INS`, `DEL` e uma tecla `FN` que revela uma linha de dígitos.
- **Tamanho do scrollback:** 1.000, 5.000, 10.000 ou 50.000 linhas (5.000 por padrão). Vale para os novos painéis.
- **Tamanho do texto:** um controle deslizante, ao lado do zoom por pinça.
- **Tema:** Sistema, Claro ou Escuro para todo o app.

Redefinir restaura os padrões de fábrica em vez de congelar a lista de hoje, então as melhorias de uma versão futura continuam chegando até você. As alterações são aplicadas ao vivo aos painéis já abertos.

## Rolagem

O Mobile SSH direciona os gestos de rolagem conforme o estado do terminal:

- Na saída normal do shell, deslizar rola o buffer de rolagem local.
- Em aplicativos de terminal com modo de mouse, a rolagem envia sequências de escape de roda do mouse.
- Em aplicativos de tela alternativa sem modo de mouse, como muitas sessões tmux, a rolagem entra no modo de cópia do tmux e envia comandos de rolagem por linha.

No Android, um toque dentro de um programa com rastreamento de mouse é entregue como um clique com o botão esquerdo naquela célula, então o htop, o vim e os painéis com foco por clique respondem ao toque. No iOS, um toque no mesmo programa levanta o teclado em vez de clicar; apenas a rolagem por roda é reportada.

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

As duas plataformas também conseguem gerenciar mais de um servidor tmux (socket) no mesmo host e ordenar as sessões por nome ou data de criação.

## Herdr e Zellij (Android)

O Android traz a mesma ideia para outros dois multiplexadores. Cada um ganha o seu próprio ícone na barra de ferramentas, e **um ícone só aparece depois que o app realmente encontrou aquele programa no servidor** — então a barra de ferramentas informa o que está instalado lá sem que você precise rodar `which`.

- **Herdr** usa o seu próprio vocabulário: sessões, workspaces, abas, painéis. Cada painel mostra o status do seu agente — trabalhando, precisa de você, ocioso — e um agente bloqueado pode ser respondido direto da lista. O próprio status do herdr alimenta o selo de agente do app, então isso funciona sem nenhum hook instalado no servidor.
- **Zellij** lista sessões, abas e painéis com anexar, renomear, encerrar e dividir. As sessões encerradas continuam listadas, de modo que anexar as ressuscita, enquanto excluir as esquece de vez. O detalhe de abas e painéis exige o Zellij 0.44 ou mais novo; em uma versão mais antiga, a página mostra os nomes das abas e explica o porquê. As divisões exigem um cliente anexado à sessão, e a página explica isso em vez de oferecer um botão que falharia.

Se o herdr ou o Zellij estiver instalado, mas fora do `PATH` da shell de login, a página oferece adicioná-lo.

Cada servidor salvo tem uma opção **Attach on connect**: **Auto (detect)**, **Nothing**, **tmux**, **herdr** ou **Zellij**. O modo automático escolhe aquele que você usou por último naquele servidor, depois aquele que tiver sessões ativas, depois aquele que estiver instalado — e não anexa nada, em vez de adivinhar, quando ainda não sondou o servidor.

O app iOS hoje funciona apenas com tmux.

## Agent alerts

O Mobile SSH avisa você quando um agente remoto de programação com IA — Claude Code, Codex, Gemini — está bloqueado esperando por você. Ele não adivinha lendo a saída do seu terminal. Há dois caminhos, e eles funcionam com níveis diferentes de detalhe.

### A campainha

Sem nenhuma configuração, uma campainha (bell) de terminal vinda de uma sessão que você não está olhando dispara um alerta, assim como as sequências de escape de notificação de desktop (OSC 9, OSC 777) que muitas ferramentas já emitem. Campainhas que chegam logo depois de você digitar são ignoradas, para que o barulho comum de autocompletar da shell não fique chamando você.

Isso não exige preparo nenhum, mas o app só sabe que *alguma coisa* tocou.

### O hook de agente

Para que o app saiba *qual* agente está esperando e *o que* ele está fazendo, instale o hook de agente no servidor:

- **iOS:** Settings → **Agent alerts** → **Install Agent Hook**. Se houver mais de um servidor conectado, ele pergunta qual.
- **Android:** pressione e segure o cabeçalho do painel de uma sessão e escolha **Install agent hooks**.

Isso grava um pequeno script de shell em `~/.mobile-ssh/agent-hook.sh` naquele servidor. Ele é agnóstico quanto ao agente — recebe argumentos de linha de comando em vez de interpretar o formato de um fornecedor específico — então qualquer coisa capaz de executar um comando pode se reportar por ele. Apagar o arquivo é uma desinstalação limpa.

Assim que um agente se reporta pelo hook:

- O cabeçalho do painel mostra `claude · needs you`, ou o nome da ferramenta que ele está executando.
- Um painel cujo agente está bloqueado ganha uma borda âmbar. O painel que você já está olhando fica em paz — o prompt está bem ali.
- Um selo na barra de ferramentas conta os agentes que esperam em todas as conexões, limitado a `9+`.
- A tela **Agents** lista todos os agentes de todas as conexões, com o que cada um está fazendo e há quanto tempo está esperando.

### Responder sem digitar

Quando um agente faz uma pergunta com um conjunto fixo de respostas, o app mostra um botão por opção — até seis — na lista de Agentes. No Android, você também pode tocar no chip do agente no cabeçalho do painel.

A sua resposta não é digitada na sessão. Ela é gravada em um arquivo por um canal separado e recolhida pelo hook, de modo que responder não pode estragar o que está na tela. O app se recusa a enviar uma opção que o prompt não tenha realmente oferecido e avisa com clareza se a conexão caiu nesse meio-tempo, em vez de falhar em silêncio.

### Configurações

Os alertas vêm ativados por padrão nas duas plataformas, com chaves individuais para a notificação, o som, a vibração e para decidir se a sessão que você está vendo no momento também deve alertar.

Vale conhecer um padrão: **o som se limita aos fones de ouvido**. Sem nada conectado ou pareado, um alerta notifica e vibra, mas não toca nenhum som. Desative essa opção se quiser o alerta audível no alto-falante do celular.

Não existe ajuste de sensibilidade nem seletor de som — os controles são apenas ligar/desligar.

## Programas de terminal em tela cheia

Para programas como Vim, less, htop, ferramentas ncurses e painéis tmux:

- A entrada passa direto para o programa — não há autocorreção nem buffer de sugestões para interferir.
- Use a linha de teclas extras para `ESC`, setas, `PGUP` e `PGDN`.
- Use o zoom por pinça se o texto estiver pequeno demais e aguarde um instante para o tamanho do terminal remoto se estabilizar.
