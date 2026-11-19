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

- **Android:** instale o Mobile SSH a partir do Google Play através da ligação na página inicial. A disponibilidade depende do canal de lançamento. Se participar num teste fechado, abra a ligação de inscrição num navegador e adira com a conta Google usada no Play.
- **iOS:** a app iOS é distribuída como beta pública no TestFlight. Instale o TestFlight da Apple e abra a ligação de convite do Mobile SSH na página inicial do site para instalar e receber atualizações.

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

A importação de chaves privadas usa o seletor de ficheiros do sistema. O Android recusa ficheiros de chaves superiores a 64 KB. A importação não dá acesso ao restante armazenamento; a transferência de ficheiros tem as suas próprias seleções de pastas e ficheiros.

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

As cópias de segurança do Android também excluem modelos de prompts e os seus rascunhos, modelos transferidos, definições do servidor de voz, credenciais de nuvem do VPN Setup e caches do Chat ou de execuções de prompts. Configure-os novamente num telemóvel novo; uma cópia de segurança não move nem remove agendamentos já instalados num servidor.

## Sessões ativas

Com sessões em execução, **Sessões ativas** mostra a contagem e abre a grade. No Android, notificação persistente lista hosts e abre controles da conexão.

Voltar à tela inicial não desconecta as sessões SSH ativas; fechar painéis ou encerrar a atividade do terminal as desconecta.

## Primeiras configurações úteis

Abra **Settings** na tela inicial (ela tem sua própria página):

- Decida se tocar no terminal abre o teclado. As plataformas têm predefinições opostas: no Android, o teclado só aparece através do botão ⌨; no iOS, aparece ao tocar.
- Defina o **tamanho do texto**, o **tipo de letra**, o **esquema de cores** e o tamanho do **histórico** do terminal, e escolha um **tema** para a app (Sistema, Claro ou Escuro).
- Ative **Alertas de agentes** se executar tarefas longas em segundo plano (Claude Code, Codex, scripts de shell) e quiser ser avisado quando o agente precisa da sua intervenção. Consulte o guia **Terminal** para saber como os agentes comunicam o seu estado.
- No Android, **Manter sessões em segundo plano** está ativado por predefinição, para que shells e agentes continuem após dispensar a app com um gesto.
- Ambas as plataformas têm um interruptor de análise anónima de utilização nas Definições. Desativá-lo interrompe a recolha de novos eventos.
- No iOS, **Ditado e sugestões** está ativado por predefinição. Desative-o e abra um novo painel se preferir introdução direta sem ditado nem correção automática.
- Notificações remotas, alertas de fim de comando e leituras remotas da área de transferência são opções separadas que exigem ativação. Ative apenas as ações remotas que pretende.
- No Android, **Assistente de voz**, **Modelos de prompts** e **Navegador integrado** são opcionais e estão desativados por predefinição. Voz tem a sua própria página nas Definições; os outros dois estão em **Geral**.

## Assistente de voz no Android

O assistente de voz é experimental e está desativado por predefinição. Pode usar o Gemma 4 num telemóvel compatível de 64 bits ou um serviço de voz no seu próprio servidor SSH Linux.

1. Abra **Definições → Assistente de voz** e ative o assistente.
2. Para processar a fala localmente, ative **Usar Gemma neste telemóvel (sem servidor de voz)**, escolha um modelo disponível e toque em **Transferir**. Em alternativa, escolha um servidor Linux de voz guardado e siga a configuração do serviço; requer Python 3.11–3.13, serviços de utilizador systemd e vários GB de espaço livre.
3. Inicie uma conversa de voz para o terminal que pretende controlar. Escolha **Mensagens** para gravar, rever e enviar, ou **Em direto** para conversar sem usar as mãos e receber respostas faladas. Um endereço personalizado de servidor de voz usa o modo Em direto.
4. Reveja os comandos propostos antes de os confirmar. O Gemma pode executar uma lista curta de verificações só de leitura sem confirmação; os restantes comandos e os prompts enviados ao Claude Code ou Codex exigem a sua confirmação ou **Enviar**.

Os modelos para telemóvel transferem cerca de 2.6–3.7 GB do Hugging Face apenas depois de tocar em Transferir. As transferências em ligações com tráfego limitado exigem confirmação, e uma transferência iniciada por Wi-Fi pausa se a ligação passar a ter tráfego limitado. Com o Gemma, a fala permanece no telemóvel; a opção de servidor envia o áudio para o serviço de voz configurado. A permissão do microfone é solicitada ao usar uma função de voz. Se faltar uma voz de síntese offline, a app oferece a sua transferência através do motor de voz do telemóvel.

Se outra app assumir o áudio ou os auscultadores enviarem Parar, a conversa pausa preservando o modo e o contexto. Use **Continuar conversa** na página Voz ou na notificação, ou prima Reproduzir nos auscultadores. Uma pausa causada pelo áudio de outra app termina quando esse áudio acaba.

## Modelos de prompts no Android

Os modelos de prompts são experimentais e estão desativados por predefinição. Agendam execuções só de leitura do Claude Code ou Codex no seu próprio servidor. O servidor necessita de Python 3.8 ou mais recente, cron e um agente de programação com sessão iniciada.

1. Ative **Definições → Geral → Modelos de prompts**.
2. Abra **Prompts** no Início ou a opção de modelos de prompts no menu de um servidor guardado.
3. Crie um modelo com um prompt, servidor, pasta de projeto e Claude Code ou Codex. Escolha um fuso horário e agende execuções diárias, nos dias úteis, em dias selecionados ou a cada 1–12 horas.
4. Guarde o modelo e ligue-se ao respetivo servidor para o sincronizar. O Mobile SSH instala um pequeno auxiliar e uma entrada no crontab; os agendamentos correm no servidor mesmo com o telemóvel desligado da ligação.
5. Reveja a saída e o estado de cada execução ou escolha **Executar agora**, **Pausar** ou **Remover do servidor**.

Os modelos e os rascunhos do editor são cifrados no telemóvel e excluídos das cópias de segurança. Um modelo Gemma transferido pode ajudar a redigir e rever um prompt. Desativar a funcionalidade oculta os controlos e interrompe a sincronização do telemóvel; não para nem remove os agendamentos já instalados num servidor. Pause ou remova primeiro esses agendamentos em Modelos de prompts.

## Plugins

Os plugins ampliam o Mobile SSH com fluxos de trabalho adicionais. Abra **Plugins** na tela inicial para:

- Navegue por categoria e pesquise plugins no catálogo.
- Instalar os que você quiser -- cada plugin é baixado sob demanda e verificado por checksum SHA-256 no armazenamento privado do app.
- Executar os plugins instalados a partir da mesma tela.

Os plugins são obtidos de um catálogo público por padrão. Se você mantiver o seu próprio, pode apontar o Mobile SSH para uma origem de catálogo personalizada ou privada. Instale apenas plugins de origens em que você confia.

No Android, os plugins do catálogo mostram **Atualizar para** quando existe uma versão mais recente. As atualizações usam o catálogo original, preservam as definições e os dados e pedem aprovação caso necessitem de acesso adicional. Não instalam uma versão anterior à instalada.

## Idiomas

Mobile SSH segue o idioma do sistema. Ambos os apps têm vinte idiomas: árabe, árabe egípcio, bengali, chinês simplificado e tradicional, inglês, francês, alemão, hindi, indonésio, japonês, marata, pidgin nigeriano, português, russo, espanhol, tâmil, telugo, turco e urdu.

Se quiser o app em um idioma diferente do celular, **Settings → Language** tem um seletor com a opção "System default". Você também continua podendo alterá-lo em **Settings → System → Languages** do Android ou, no iOS, em **Settings → General → Language & Region**.

## Nota de segurança

Conecte só a servidores confiáveis. Dados ficam no dispositivo salvo exportação ou compartilhamento; não há cofre em nuvem nem sincronização automática. Proteja dispositivo e backups, verifique impressões desconhecidas e investigue mudanças de chave antes de reconectar.
