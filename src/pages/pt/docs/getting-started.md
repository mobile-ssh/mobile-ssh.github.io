---
layout: ../../../layouts/DocLayout.astro
title: "Primeiros passos"
description: "Instale Mobile SSH, verifique identidades, configure bastiões e chaves e faça backup de servidores, credenciais e ajustes."
---

# Primeiros passos

O Mobile SSH é um cliente SSH para Android e iOS para conectar aos seus próprios servidores Linux, Unix, de rede, IoT ou de desenvolvimento. Você fornece o endereço do servidor e as credenciais; o app abre um terminal SSH interativo.

## Requisitos

- Android 8.0 ou mais recente, ou iOS 16 ou mais recente (iPhone ou iPad).
- Acesso de rede do dispositivo ao seu servidor SSH.
- Nome de host ou endereço IP do servidor SSH, porta, nome de usuário e uma senha ou chave privada.
- Para arquivos locais, escolha pastas ou arquivos pelo seletor do sistema. Nenhuma plataforma exige acesso geral ao armazenamento.

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

## Verificar identidades de servidores

Ambos verificam a identidade SSH antes de enviar credenciais. Chaves alteradas bloqueiam a conexão, inclusive em endereços alternativos e bastiões.

- **Android:** **Aceitar automaticamente novas identidades SSH** vem ativado. Salva a primeira chave sem certificado e exige correspondência depois. Desative em **Configurações → Geral → Segurança** para comparar novas impressões SHA-256 com o administrador antes de aceitar e reconectar.
- **iOS:** chave desconhecida exige confirmação. Compare a impressão SHA-256 por canal confiável e escolha **Confiar e reconectar**.

Revise as identidades salvas em Configurações. As duas plataformas aceitam revogações de chaves de host fornecidas pelo administrador; o Android também suporta autoridades certificadoras de hosts. No iOS, use **Configurações → Identidades de servidores → Importar chaves revogadas** para entradas OpenSSH `@revoked` Ed25519/ECDSA com escopo definido. Chaves revogadas são bloqueadas em novas conexões e reconexões, mesmo quando já eram confiáveis; importar uma revogação não encerra conexões existentes. O iOS não suporta certificados de host nem importação de CAs. A confiança permanece em cada dispositivo e não é importada de backups. Não remova uma chave alterada ou revogada sem verificar por que ela foi bloqueada.

## Escolher um transporte

Ao adicionar ou editar um servidor, o seletor **Transport** escolhe como o Mobile SSH se conecta:

- **SSH** -- uma conexão SSH padrão (o padrão).
- **Eternal Terminal** -- uma sessão resiliente que sobrevive a quedas de rede, suspensão e mudanças de IP. Se o host não tiver um `etserver`, o Mobile SSH pode instalar um para você pelo SSH. Consulte o guia **Terminal** para mais detalhes.

Android também oferece conexões experimentais pelo proxy **Teleport**. Rotas com bastiões exigem SSH e não podem combinar com Eternal Terminal.

## Salvar servidores

Os servidores salvos guardam o destino da conexão e a configuração opcional de túneis. Um servidor salvo pode incluir:

- Nome de host ou endereço IP.
- Porta SSH.
- Nome de usuário.
- Detalhes de senha ou chave privada.
- Regras opcionais de encaminhamento local de portas.
- Endereços adicionais opcionais para a mesma máquina (veja abaixo).
- Bastiões salvos opcionais e **Anexar ao conectar**: Auto, Nada, tmux, herdr ou Zellij.

Use servidores salvos para hosts que você acessa com frequência. Se um servidor salvo apontar para um host diferente da sua sessão ativa atual, o Mobile SSH inicia uma nova conexão para o destino selecionado.

### Vários endereços (roaming entre LAN/VPN)

A mesma máquina costuma estar acessível em endereços diferentes conforme o lugar onde você está — um IP de Wi-Fi de casa versus um IP de VPN. Adicione os endereços alternativos na caixa de diálogo de edição do servidor, cada um com a sua própria porta se necessário. Ao conectar, o Mobile SSH tenta os endereços em ordem até um responder, e lembra o endereço que funcionou por último para discá-lo primeiro na próxima vez. Uma mudança de rede (por exemplo, sair da VPN) dispara uma reconexão imediata ao endereço que estiver acessível no momento, em vez de esperar a rota inativa expirar por tempo limite.

### Bastiões

Salve os bastiões primeiro e selecione sua ordem nas configurações do destino. As duas plataformas aceitam até oito saltos SSH expandidos. Cada um usa suas credenciais e verificação; o destino só precisa ser acessível pelo anterior. Servidor ausente, ciclo ou salto com falha interrompe a rota sem conexão direta silenciosa. Terminais, SFTP, encaminhamentos e funções SSH compatíveis usam a rota salva.

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

Importar chave privada usa o seletor do sistema sem acesso ao restante do armazenamento. A transferência tem sua própria seleção de pastas e arquivos.

Android aceita **chaves FIDO2** por USB/NFC: cadastre ou importe credencial OpenSSH e siga os pedidos de toque/PIN. A chave física continua necessária após exportar/restaurar. **Encaminhamento de agente SSH** é ativado por servidor; chaves salvas respondem assinaturas com aprovação opcional por uso. Ative apenas em servidores confiáveis para pedir assinaturas. iOS não aceita chave física nem encaminhamento de agente.

## A tela inicial

A tela inicial foi feita para responder "ao que eu posso voltar?", em vez de abrir um formulário de conexão em branco:

- **Continue** lista as conexões que estão ativas neste momento, com a contagem de painéis quando uma conexão tem mais de um. Tocar em uma linha leva você de volta a ela.
- **Tmux sessions** lista o que está em execução nos seus servidores salvos. Ela vem de um instantâneo que o app já armazenou, então aparece na hora, sem rede alguma — cada linha traz a idade do instantâneo, e tocar em uma delas conecta e anexa aquela sessão. Os instantâneos ficam esmaecidos depois de algumas horas e são descartados após uma semana.
- No iOS, **Recentes** fica em **Nova conexão**; escolher uma entrada preenche o formulário.

O bloco **VPN** do Android abre clientes integrados; **Sobre** fica em Configurações. O guia VPN faz parte de **Encaminhamento de portas** neste site.

Se nada está ativo e nada está em cache, a tela informa isso e aponta você para **Servers**.

## Nomear e pesquisar servidores salvos

Um servidor salvo pode ter um nome — "NAS de casa", "Web de produção" — e a lista mostra esse nome no lugar do endereço. O endereço volta sozinho sempre que o nome ficaria ambíguo: duas linhas com o mesmo nome, ou uma pesquisa em andamento, para que você sempre consiga distinguir as linhas.

Toque no campo de pesquisa na página **Saved Servers** para filtrar. A pesquisa considera o nome, o usuário, o host, a porta, a credencial e quaisquer endereços alternativos. A tela **+ Add Session** também abre com pesquisa, para que você possa encontrar e se conectar a um servidor salvo em uma única etapa.

Os servidores podem ser organizados em pastas. Uma pasta se recolhe, lembra que foi recolhida e pode ser reordenada ou renomeada; excluir uma delas move os seus servidores para **Ungrouped**, em vez de apagá-los.

## Exportar parte da sua configuração

**Export selected…** nas telas Servers e Credentials transforma a lista em um seletor com caixas de marcação, para que você entregue três servidores sem exportar tudo. Tocar no cabeçalho de uma pasta leva a pasta inteira. As exportações são criptografadas se você definir uma frase-senha — sem ela, o arquivo guarda senhas e chaves privadas em texto puro, e o app avisa isso antes de gravar.

Para backup completo, escolha **Exportar tudo (backup)** no Android ou **Backup e restauração** no iOS. Inclui servidores, credenciais e preferências como idioma, teclas e ordenação dos multiplexadores. Android inclui VPN/SOCKS. Use uma frase secreta para proteger todo o arquivo.

Ambos leem formato 2 e inventários antigos. Veja a prévia: **Mesclar** aplica seções mantendo itens existentes; **Substituir** troca seções presentes e redefine ajustes omitidos dentro da seção de configurações fornecida. Seções ausentes ficam intactas. Opções incompatíveis são identificadas; importar não cria funções na outra plataforma. Importar backup não inicia VPN.

Identidades, sessões ativas, permissões e acesso a pastas não são restaurados. Verifique hosts e conceda acesso local no destino. Apps antigos não leem o formato completo novo.

## Sessões ativas

Com sessões em execução, **Sessões ativas** mostra a contagem e abre a grade. No Android, notificação persistente lista hosts e abre controles da conexão.

Voltar à tela inicial não desconecta as sessões SSH ativas; fechar painéis ou encerrar a atividade do terminal as desconecta.

## Primeiras configurações úteis

Abra **Settings** na tela inicial (ela tem sua própria página):

- Decida se tocar no terminal levanta o teclado. As duas plataformas vêm com padrões opostos: no Android o teclado só aparece pelo botão ⌨; no iOS um toque o levanta.
- Defina o **tamanho do texto**, a **fonte**, o **esquema de cores** e o tamanho do **scrollback** do terminal, e escolha um **tema** para o app (Sistema, Claro ou Escuro).
- Ative **Agent alerts** se você executa tarefas longas em segundo plano (Claude Code, Codex, scripts de shell) e quer ser avisado quando o agente precisar da sua entrada. Veja no guia **Terminal** como os agentes se reportam.
- No Android, **Keep sessions running in background** vem ativado, então shells e agentes sobrevivem a você fechar o app na lista de recentes.
- Ambas têm opção de estatísticas anônimas nas Configurações; desligar interrompe a coleta de novos eventos.
- No iOS, **Ditado e sugestões** vem ativado. Desative e abra novo painel para entrada direta sem ditado ou autocorreção.
- Notificações remotas, alertas de comando concluído e leitura remota do clipboard exigem permissões próprias. Ative só as ações desejadas.

## Plugins

Os plugins ampliam o Mobile SSH com fluxos de trabalho adicionais. Abra **Plugins** na tela inicial para:

- Navegue por categoria e pesquise plugins no catálogo.
- Instalar os que você quiser -- cada plugin é baixado sob demanda e verificado por checksum SHA-256 no armazenamento privado do app.
- Executar os plugins instalados a partir da mesma tela.

Os plugins são obtidos de um catálogo público por padrão. Se você mantiver o seu próprio, pode apontar o Mobile SSH para uma origem de catálogo personalizada ou privada. Instale apenas plugins de origens em que você confia.

## Idiomas

Mobile SSH segue o idioma do sistema. Ambos os apps têm vinte idiomas: árabe, árabe egípcio, bengali, chinês simplificado e tradicional, inglês, francês, alemão, hindi, indonésio, japonês, marata, pidgin nigeriano, português, russo, espanhol, tâmil, telugo, turco e urdu.

Se quiser o app em um idioma diferente do celular, **Settings → Language** tem um seletor com a opção "System default". Você também continua podendo alterá-lo em **Settings → System → Languages** do Android ou, no iOS, em **Settings → General → Language & Region**.

## Nota de segurança

Conecte só a servidores confiáveis. Dados ficam no dispositivo salvo exportação ou compartilhamento; não há cofre em nuvem nem sincronização automática. Proteja dispositivo e backups, verifique impressões desconhecidas e investigue mudanças de chave antes de reconectar.
