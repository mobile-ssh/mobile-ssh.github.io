---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Controles do terminal Mobile SSH, teclado, gerenciadores tmux, herdr e Zellij, alertas, área de transferência, imagens e desktops remotos."
---

# Terminal

O terminal do Mobile SSH foi feito para operação em telefone e tablet. Ele combina uma área de terminal, uma linha de teclas extras, painéis de várias sessões, tratamento de rolagem e comportamento de reconexão.

## Noções básicas do terminal

- O terminal usa comportamento no estilo xterm com suporte a cores e tratamento das teclas de cursor.
- O buffer de scrollback mantém 5.000 linhas por padrão, e pode ser definido em 1.000, 10.000 ou 50.000 nas Configurações.
- Toque em um painel para selecioná-lo antes de digitar.
- Pince um painel do terminal para mudar o tamanho do texto. O Mobile SSH redimensiona o PTY remoto após o gesto se estabilizar.
- Toque duas vezes em um painel (ou use o seu controle de expansão) para entrar no modo de tela cheia. Use Voltar no Android, ou o controle de recolher no iOS, para retornar à grade.

## Grade de várias sessões

O Mobile SSH pode executar até oito sessões SSH ao mesmo tempo. Cada sessão aparece como um painel na grade de terminais. Toque em um painel para selecioná-lo, ou use **+ Add Session** para iniciar outra conexão.

O cabeçalho do painel diz onde você está. No Android, ele mostra o diretório de trabalho real do painel, obtido do tmux ou informado pelo shell via OSC 7 e atualizado enquanto o app está aberto; no iOS, ele mostra o título definido pelo lado remoto, com `user@host:port` como alternativa.

Fechar um painel desconecta sua sessão SSH. Voltar ao início mantém as conexões em **Sessões ativas**. O cabeçalho indica conexões sem resposta; Configurações oferece taxas de transferência e escurecimento ou vibração opcionais quando a conexão para de responder.

## Eternal Terminal (ET)

As duas plataformas oferecem estes transportes no seletor **Transporte** ao adicionar ou editar um servidor:

- **SSH** -- uma conexão SSH padrão (o padrão).
- **Eternal Terminal** -- uma sessão ET que sobrevive a quedas de rede, suspensão do dispositivo e mudanças de endereço IP sem reiniciar o seu shell.

O ET mantém a sessão ativa no servidor, de modo que, quando o seu telefone muda de rede ou desperta da suspensão, o Mobile SSH reanexa ao mesmo shell em execução em vez de abrir um novo. Isso o torna uma boa escolha para dados móveis, transições entre Wi-Fi e rede celular e comandos de longa duração.

ET precisa de `etserver` no servidor. Se faltar, Mobile SSH pode oferecer instalá-lo e iniciá-lo por SSH. Revise e aprove os comandos e depois conecte com **Eternal Terminal**. Rotas por bastiões exigem o transporte **SSH**.

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

No Android, a digitação normal segue diretamente para o shell remoto, com autocorreção e sugestões desativadas por padrão. O ditado por voz ainda pode enviar texto pelo teclado.

No iOS, **Configurações → Terminal → Ditado e sugestões** vem ativado para ditado, previsões e correções durante a composição da linha. Para enviar teclas diretamente, desative-o, deixe **Sugestões do teclado** desativado e abra um painel novo.

**Mostrar teclado ao tocar** controla se um toque abre o teclado virtual. Vem desativado no Android e ativado no iOS; o botão de teclado continua disponível na barra.

## Teclados físicos

Teclados externos e Bluetooth controlam o terminal diretamente no Android e no iOS. Além dos caracteres comuns, o Mobile SSH mapeia as teclas de seta, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, as teclas de função `F1`–`F12`, combinações `Ctrl`+tecla e `Alt`/`Option` como Meta, e `Shift`+`Tab`. As teclas modificadoras se combinam com os modificadores fixos da linha de teclas extras.

## Colar

A colagem em um programa que a solicita (bash, Vim e outros aplicativos com bracketed paste) é envolvida em marcadores de bracketed paste, para que o conteúdo de várias linhas da área de transferência seja inserido como texto em vez de ser executado automaticamente linha por linha. Apenas colagens reais são envolvidas; o texto digitado e ditado não é afetado.

## Selecionar, copiar, compartilhar

Mantenha pressionada uma palavra no terminal e ajuste a seleção pelas alças. A barra inclui:

- **Copy** — coloca o texto selecionado na área de transferência do sistema. A seleção permanece destacada depois, para que você possa compartilhá-la, copiá-la de novo ou estendê-la.
- **Share** — envia o texto selecionado para a folha de compartilhamento do sistema (e-mail, notas, mensagens etc.).
- **Select all** — expande a seleção para todo o buffer visível do terminal; em seguida, use Copy ou Share.
- **Colar**: inserir o texto da área de transferência no terminal.

## Pesquisar no terminal

Pesquise em todo o buffer do terminal — o scrollback e a tela visível — e pule entre as correspondências. Abra a pesquisa a partir dos controles do terminal, digite uma consulta e percorra os resultados. Isso funciona tanto no Android quanto no iOS.

## Cor, itálicos e área de transferência remota

- O terminal renderiza **cores reais de 24 bits** e **itálicos**, de modo que prompts com tema, realce de sintaxe e TUIs ficam com a aparência que têm no desktop.
- **Área de transferência OSC 52:** programas remotos podem copiar texto para o telefone. Ler sua área de transferência exige uma permissão separada, desativada por padrão.
- Tanto no Android quanto no iOS, caracteres CJK largos, emojis e caracteres combinantes (clusters de grafemas e juntores de largura zero) são medidos e desenhados corretamente, e uma **Nerd Font** incluída desenha glifos de ícones powerline, starship, devicon e Material Design que a fonte do sistema mostraria como quadrados vazios.

## Integração de shell e imagens em linha

- **Integração de shell (OSC 133):** quando seu shell emite marcadores de prompt OSC 133, o Mobile SSH pode avançar de um prompt a outro e alertá-lo quando um comando de longa duração termina. Funciona no Android e no iOS. Nenhum dos apps injeta os marcadores — seu shell precisa emiti-los (um hook `PROMPT_COMMAND`/`precmd`, ou o starship). No Android, a navegação entre prompts fica desligada até você ativá-la em **Settings → Shell integration**; no iOS, o menu aparece sozinho assim que as marcações começam a chegar.
- **Selecionar a saída:** toque em qualquer ponto dentro da saída de um comando e selecione esse bloco inteiro — o erro de compilação de 300 linhas atrás, não só o do último comando — e depois copie, compartilhe ou estenda a seleção.
- **Imagens no terminal:** programas que usam Kitty mostram imagens no Android e iOS. Medidas em células e vinculadas à linha, elas sobrevivem ao zoom e à reorganização. Também aparecem em aplicativos de tela cheia, com posições separadas do histórico normal.
- **Glifos de mosaico:** o app desenha blocos, braille, sextantes e octantes; `chafa`, `timg` e arte ANSI se encaixam na grade sem espaços ou quadrados vazios, independentemente da fonte.
- **Resolução de imagens:** Imagens pode informar resolução completa, metade ou um terço aos programas, reduzindo os pixels enviados pela rede móvel.
- **Diretório de trabalho real (Android):** o cabeçalho do painel mostra onde o painel realmente está, obtido do tmux ou informado pelo shell via OSC 7, em vez do que o último prompt tiver impresso.

## Aparência e teclas

Tanto no Android quanto no iOS, as Configurações permitem personalizar o terminal:

- **Fonte:** escolha a fonte monoespaçada do sistema, JetBrains Mono ou Source Code Pro.
- **Esquema de cores:** Padrão, Solarized Dark ou Light, Gruvbox, Dracula ou Nord — aplicado ao vivo aos painéis abertos.
- **Linha de teclas extras:** adicione, remova, reordene e oculte teclas, defina suas próprias teclas de sequência de escape e redefina para os padrões, com uma pré-visualização ao vivo que mostra exatamente como a linha será dividida. O Android coloca isso em uma aba **Keys**; o iOS, em **Extra keys → Customize keys**.
- **Adicionar a partir de predefinições:** uma paleta de cerca de 45 teclas em seis grupos — `F1`–`F12`, combinações com Ctrl como `^C` `^D` `^Z` `^R` `^L`, símbolos como `|` `~` `/` `_` `:` e modificadores. `F1`–`F12` são enviadas como sequências de escape comuns, então não precisam de uma combinação com `FN`. O Android também oferece uma tecla 📎 **Attach a file**, que abre o seletor de arquivos e envia o arquivo para a sessão ativa; o iOS oferece `INS`, `DEL` e uma tecla `FN` que revela uma linha de dígitos.
- **Tamanho do scrollback:** 1.000, 5.000, 10.000 ou 50.000 linhas (5.000 por padrão). Vale para os novos painéis.
- **Tamanho do texto:** um controle deslizante, ao lado do zoom por pinça.
- **Tema:** Sistema, Claro ou Escuro para todo o app.

Redefinir restaura os padrões de fábrica em vez de congelar a lista de hoje, então as melhorias de uma versão futura continuam chegando até você. As alterações são aplicadas ao vivo aos painéis já abertos.

## Rolagem

O Mobile SSH direciona os gestos de rolagem conforme o estado do terminal:

- Na saída normal do shell, deslizar rola o buffer de scrollback local.
- Em aplicativos de terminal com modo de mouse, a rolagem envia sequências de escape de roda do mouse.
- Em aplicativos de tela alternativa sem modo de mouse, como muitas sessões tmux, a rolagem entra no modo de cópia do tmux e envia comandos de rolagem por linha.

Nas duas plataformas, tocar em um programa com rastreamento de mouse normalmente envia um clique esquerdo. No iOS, **Toque posiciona o cursor** troca essa ação pelo movimento do cursor; Shift e toque faz a outra ação. Segurar e arrastar como mouse vem desativado, então deslizar normalmente rola a tela.

Se você digitar enquanto está rolado para trás no scrollback, o Mobile SSH retorna à visão ao vivo do terminal.

## Comportamento do tmux

O Mobile SSH observa os comandos tmux de attach e nova sessão enviados pelo usuário, como:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Se a conexão cair, o app lembra a sessão tmux e seu socket para retornar ao mesmo destino. Cada painel no mesmo host conserva seu próprio vínculo. Se a sessão sumiu, o shell continua disponível.

No iOS, trocar de socket consulta o prefixo atual do tmux em vez de presumir Ctrl+B. Prefixos incompatíveis ou consultas malsucedidas param com uma mensagem. Digitar, fechar o painel ou desconectar cancela etapas pendentes; programas de tela cheia não identificados não recebem comandos de anexação.

## Gerenciador de tmux

O gerenciador tmux permite controlá-lo sem combinações de prefixo. Abra pelo controle de multiplexadores da sessão conectada; mantenha pressionado para escolher tmux quando houver vários. Ele apresenta três seções:

- **Sessions** -- todas as sessões tmux no servidor.
- **Windows** -- as janelas da sessão selecionada.
- **Panes** -- os painéis da janela selecionada.

A partir do gerenciador, você pode:

- **Anexar** uma sessão ao terminal atual.
- **Criar** uma nova sessão ou janela e **renomeá-las**.
- **Dividir** um painel horizontal ou verticalmente, **ampliar** um painel e **encerrar** sessões, janelas ou painéis.
- **Ordenar** sessões por Recentes (padrão), nome ou data de criação.

Um 🔔 marca qualquer sessão cujo agente esteja aguardando entrada, para que você possa identificar de relance uma execução pausada do Claude Code ou do Codex e anexar a ela. Isso complementa as dicas de reanexação acima: a lógica de reanexação restaura automaticamente a sua última sessão ao reconectar, enquanto o gerenciador oferece controle manual completo.

As duas plataformas gerenciam vários servidores tmux (sockets) no mesmo host. Os indicadores de anexação se referem ao terminal em uso, não a outro cliente do servidor.

## Herdr e Zellij

Android e iOS também gerenciam Herdr e Zellij. Um controle abre o multiplexador principal detectado; mantenha pressionado para escolher outro. Só são oferecidos programas encontrados no servidor. No gerenciador, o título troca de servidor e o seletor de multiplexadores troca de gerenciador.

- **Herdr** mostra sessões, espaços de trabalho, abas e painéis com estado dos agentes. Visualize ou responda pela lista. Respostas permanecem no painel e sessão selecionados; **Enviar** envia o texto e **Só Enter** uma confirmação vazia. O foco exato no painel aparece quando suportado; caso contrário, use Focar na aba superior. Herdr fornece o estado sem hook adicional.
- **Zellij** lista sessões, abas e painéis com anexar, renomear, encerrar e dividir. As sessões encerradas continuam listadas, de modo que anexar as ressuscita, enquanto excluir as esquece de vez. O detalhe de abas e painéis exige o Zellij 0.44 ou mais novo; em uma versão mais antiga, a página mostra os nomes das abas e explica o porquê. As divisões exigem um cliente anexado à sessão, e a página explica isso em vez de oferecer um botão que falharia.

Se o herdr ou o Zellij estiver instalado, mas fora do `PATH` do shell de login, a página oferece adicioná-lo.

Cada servidor tem **Anexar ao conectar**: **Auto (detectar)**, **Nada**, **tmux**, **herdr** ou **Zellij**. Auto usa detecção e histórico disponíveis: primeiro o multiplexador usado antes, depois um com sessões ativas, depois um instalado. Sem detecção salva, abre um shell comum. Uma detecção posterior afeta conexões futuras e não interrompe sua digitação.

## Alertas de agente

O Mobile SSH avisa você quando um agente remoto de programação com IA — Claude Code, Codex, Gemini — está bloqueado esperando por você. Ele não adivinha lendo a saída do seu terminal. Há dois caminhos, e eles funcionam com níveis diferentes de detalhe.

### A campainha

Campainhas do terminal podem alertar que um agente precisa de atenção. As imediatamente após digitar são ignoradas por padrão. Notificações remotas OSC 9/OSC 777 e de término de comando OSC 133 têm ajustes próprios; no iOS ambos começam desativados.

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

Alertas vêm ativados nas duas plataformas, com controles separados para notificações, som, vibração e painel ativo. No iOS, alertas do painel ativo vêm ativados e há opção de receber apenas em segundo plano. Só chegam enquanto iOS permite executar o app; suspensão prolongada interrompe alertas SSH ao vivo.

Vale conhecer um padrão: **o som se limita aos fones de ouvido**. Sem nada conectado ou pareado, um alerta notifica e vibra, mas não toca nenhum som. Desative essa opção se quiser o alerta audível no alto-falante do celular.

Não existe ajuste de sensibilidade nem seletor de som — os controles são apenas ligar/desligar.

## Programas de terminal em tela cheia

Para programas como Vim, less, htop, ferramentas ncurses e painéis tmux:

- Para entrada direta no iOS, desative **Ditado e sugestões** e **Sugestões do teclado**, depois abra um painel novo.
- Use a linha de teclas extras para `ESC`, setas, `PGUP` e `PGDN`.
- Use o zoom por pinça se o texto estiver pequeno demais e aguarde um instante para o tamanho do terminal remoto se estabilizar.

## Desktops remotos

As duas plataformas abrem desktops por VNC sobre SSH. Reutilize uma tela compartilhada, incluindo Compartilhamento de Tela do macOS, ou aprove a configuração de um desktop Linux compatível. O servidor deve fornecer o desktop; SSH sozinho não cria sessão gráfica. Espelhamento no Linux exige X11, não Wayland; macOS usa a tela existente, sem criar desktop privado.

Use gestos para clicar, arrastar e ampliar, e teclado virtual ou físico para digitar. Os controles permitem colar texto do telefone no desktop, que também pode copiar texto de volta ao telefone.

**Tamanho da tela** oferece medidas prontas ou personalizadas, lembradas por servidor. No iOS, cada dimensão deve ter de 320 a 5120 pixels. Redimensionar ao vivo preserva programas quando o servidor permite. A alternativa de reiniciar exige confirmação e só vale para desktop privado criado pelo app. Desktops reutilizados e consoles compartilhados não são reiniciados para isso; altere a resolução do Mac em Telas quando o ajuste ao vivo não funcionar.
