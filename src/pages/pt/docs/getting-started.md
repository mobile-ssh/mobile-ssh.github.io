---
layout: ../../../layouts/DocLayout.astro
title: "Primeiros passos"
description: "Primeiros passos para instalar o Mobile SSH, conectar a um servidor e salvar perfis, credenciais e sessões."
---

# Primeiros passos

O Mobile SSH é um cliente SSH para Android e iOS para conectar aos seus próprios servidores Linux, Unix, de rede, IoT ou de desenvolvimento. Você fornece o endereço do servidor e as credenciais; o app abre um terminal SSH interativo.

## Requisitos

- Android 8.0 ou mais recente, ou iOS 16 ou mais recente (iPhone ou iPad).
- Acesso de rede do dispositivo ao seu servidor SSH.
- Nome de host ou endereço IP do servidor SSH, porta, nome de usuário e uma senha ou chave privada.
- No Android, acesso ao armazenamento, se quiser usar a transferência de arquivos por SFTP com o navegador de arquivos local do telefone; o iOS usa os seletores de arquivos e fotos do sistema.

## Instalar o app

- **Android:** o Mobile SSH está no momento em teste fechado no Google Play. Abra o link de adesão em um navegador do celular no aparelho — e não dentro do app Google Play, onde o teste pode não aparecer — e entre com a conta Google que você vai usar. Depois disso, ele instala e atualiza pelo Play como qualquer outro app.
- **iOS:** o app para iOS é distribuído como beta público no TestFlight. Instale o app TestFlight da Apple e, em seguida, abra o link de convite do Mobile SSH na página inicial do site para instalar e receber atualizações.

## Conectar a um servidor

1. Abra o Mobile SSH.
2. Toque em **+ Add Session** e pesquise um servidor salvo, ou adicione um novo a partir dessa tela.
3. Informe o host, a porta, o nome de usuário e os detalhes de autenticação ao adicionar um novo servidor.
4. Toque no servidor para abrir uma sessão de terminal.
5. Use **Active Sessions** na tela inicial para voltar a sessões que ainda estão em execução.

A porta SSH padrão é `22`. Se o seu servidor usar outra porta, informe-a no perfil do servidor.

## Escolher um transporte

Ao adicionar ou editar um servidor, o seletor **Transport** escolhe como o Mobile SSH se conecta:

- **SSH** -- uma conexão SSH padrão (o padrão).
- **Eternal Terminal** -- uma sessão resiliente que sobrevive a quedas de rede, suspensão e mudanças de IP. Se o host não tiver um `etserver`, o Mobile SSH pode instalar um para você pelo SSH. Consulte o guia **Terminal** para mais detalhes.

## Salvar servidores

Os servidores salvos guardam o destino da conexão e a configuração opcional de túneis. Um servidor salvo pode incluir:

- Nome de host ou endereço IP.
- Porta SSH.
- Nome de usuário.
- Detalhes de senha ou chave privada.
- Regras opcionais de encaminhamento de portas local.
- Endereços adicionais opcionais para a mesma máquina (veja abaixo).

Use servidores salvos para hosts que você acessa com frequência. Se um servidor salvo apontar para um host diferente da sua sessão ativa atual, o Mobile SSH inicia uma nova conexão para o destino selecionado.

### Vários endereços (roaming entre LAN/VPN)

A mesma máquina costuma estar acessível em endereços diferentes conforme o lugar onde você está — um IP de Wi-Fi de casa versus um IP de VPN. Adicione os endereços alternativos na caixa de diálogo de edição do servidor, cada um com a sua própria porta se necessário. Ao conectar, o Mobile SSH tenta os endereços em ordem até um responder, e lembra o endereço que funcionou por último para discá-lo primeiro na próxima vez. Uma mudança de rede (por exemplo, sair da VPN) dispara uma reconexão imediata ao endereço que estiver acessível no momento, em vez de esperar a rota inativa expirar por tempo limite.

## Salvar credenciais

A tela **Credentials** armazena registros reutilizáveis de usuário/senha ou usuário/chave privada. As credenciais salvas podem ser selecionadas na caixa de diálogo de configuração do servidor, para que você não precise digitar os mesmos dados de login em cada host.

Os registros de credenciais são armazenados localmente no dispositivo — no iOS, os segredos ficam guardados no Keychain do sistema. Proteja o dispositivo com um bloqueio de tela se salvar senhas, frases-senha ou chaves privadas.

## Usar chaves privadas

O Mobile SSH aceita chaves privadas coladas e a importação de chaves pelo seletor de arquivos do sistema. No Android, o app suporta chaves Ed25519, ECDSA (P-256/384/521) e RSA; no iOS, ele suporta chaves Ed25519 e ECDSA (P-256/384/521). DSA (`ssh-dss`) não é suportado em nenhuma das plataformas. As duas plataformas conseguem abrir uma chave criptografada com frase-senha — informe a frase-senha no campo de senha/frase-senha.

Para usar uma chave privada:

1. Abra **Credentials** ou a caixa de diálogo de edição do servidor.
2. Cole o texto da chave privada ou escolha **Import from file**.
3. Informe a frase-senha da chave no campo de senha/frase-senha se a chave estiver criptografada.
4. Salve a credencial ou o servidor.

A importação de chave privada usa o seletor de arquivos do sistema para arquivos de chave. No Android, a transferência de arquivos usa um navegador de arquivos local separado e pode solicitar acesso mais amplo ao armazenamento em versões mais novas do Android; no iOS, os arquivos entram pelos seletores de documentos e fotos do sistema.

## A tela inicial

A tela inicial foi feita para responder "ao que eu posso voltar?", em vez de abrir um formulário de conexão em branco:

- **Continue** lista as conexões que estão ativas neste momento, com a contagem de painéis quando uma conexão tem mais de um. Tocar em uma linha leva você de volta a ela.
- **Tmux sessions** lista o que está em execução nos seus servidores salvos. Ela vem de um instantâneo que o app já armazenou, então aparece na hora, sem rede alguma — cada linha traz a idade do instantâneo, e tocar em uma delas conecta e anexa aquela sessão. Os instantâneos ficam esmaecidos depois de algumas horas e são descartados após uma semana.
- No iOS, uma lista **Recent** fica abaixo dessas; o app Android abandonou essa lista, porque "ao que eu posso voltar?" se mostrou uma pergunta mais útil do que "quando foi a última vez que conectei?".

Se nada está ativo e nada está em cache, a tela informa isso e aponta você para **Servers**.

## Nomear e pesquisar servidores salvos

Um servidor salvo pode ter um nome — "NAS de casa", "Web de produção" — e a lista mostra esse nome no lugar do endereço. O endereço volta sozinho sempre que o nome ficaria ambíguo: duas linhas com o mesmo nome, ou uma pesquisa em andamento, para que você sempre consiga distinguir as linhas.

Toque no campo de pesquisa na página **Saved Servers** para filtrar. A pesquisa considera o nome, o usuário, o host, a porta, a credencial e quaisquer endereços alternativos. A tela **+ Add Session** também abre com pesquisa, para que você possa encontrar e se conectar a um servidor salvo em uma única etapa.

Os servidores podem ser organizados em pastas. Uma pasta se recolhe, lembra que foi recolhida e pode ser reordenada ou renomeada; excluir uma delas move os seus servidores para **Ungrouped**, em vez de apagá-los.

## Exportar parte da sua configuração

**Export selected…** nas telas Servers e Credentials transforma a lista em um seletor com caixas de marcação, para que você entregue três servidores sem exportar tudo. Tocar no cabeçalho de uma pasta leva a pasta inteira. As exportações são criptografadas se você definir uma frase-senha — sem ela, o arquivo guarda senhas e chaves privadas em texto puro, e o app avisa isso antes de gravar.

## Sessões ativas

Quando há sessões em execução, a tela inicial mostra **Active Sessions** com uma contagem. Toque para voltar à grade de terminais. Uma notificação contínua também lista os hosts ativos — toque em um host na notificação para ir diretamente para aquele terminal.

Voltar à tela inicial não desconecta as sessões SSH ativas; fechar painéis ou encerrar a atividade do terminal as desconecta.

## Primeiras configurações úteis

Abra **Settings** na tela inicial (ela tem sua própria página):

- Decida se tocar no terminal levanta o teclado. As duas plataformas vêm com padrões opostos: no Android o teclado só aparece pelo botão ⌨; no iOS um toque o levanta.
- Defina o **tamanho do texto**, a **fonte**, o **esquema de cores** e o tamanho do **scrollback** do terminal, e escolha um **tema** para o app (Sistema, Claro ou Escuro).
- Ative **Agent alerts** se você executa tarefas longas em segundo plano (Claude Code, Codex, scripts de shell) e quer ser avisado quando o agente precisar da sua entrada. Veja no guia **Terminal** como os agentes se reportam.
- No Android, **Keep sessions running in background** vem ativado, então shells e agentes sobrevivem a você fechar o app na lista de recentes.
- No Android, desative a coleta anônima de dados de uso se preferir que nenhuma informação seja enviada. O app iOS ainda não tem essa opção.

## Plugins

Os plugins ampliam o Mobile SSH com fluxos de trabalho adicionais. Abra **Plugins** na tela inicial para:

- Navegar por um catálogo de plugins disponíveis.
- Instalar os que você quiser -- cada plugin é baixado sob demanda e verificado por checksum SHA-256 no armazenamento privado do app.
- Executar os plugins instalados a partir da mesma tela.

Os plugins são obtidos de um catálogo público por padrão. Se você mantiver o seu próprio, pode apontar o Mobile SSH para uma origem de catálogo personalizada ou privada. Instale apenas plugins de origens em que você confia.

## Idiomas

O Mobile SSH segue o idioma do sistema por padrão. O app vem com traduções para árabe, bengali, chinês (simplificado e tradicional), inglês, francês, alemão, hindi, indonésio, japonês, marata, português, russo, espanhol, tâmil, télugo, turco e urdu — vinte idiomas no Android, que acrescenta o pidgin nigeriano e o árabe egípcio, e dezoito no iOS.

Se quiser o app em um idioma diferente do celular, **Settings → Language** tem um seletor com a opção "System default". Você também continua podendo alterá-lo em **Settings → System → Languages** do Android ou, no iOS, em **Settings → General → Language & Region**.

## Nota de segurança

Conecte apenas a servidores em que você confia. O app atual armazena os dados de conexão salvos localmente e não oferece cofre na nuvem nem sincronização entre dispositivos. A implementação atual também não exibe uma confirmação de host conhecido, então evite conectar por redes não confiáveis quando a identidade do host for importante.
