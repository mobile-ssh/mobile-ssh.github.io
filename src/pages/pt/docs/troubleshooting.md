---
layout: ../../../layouts/DocLayout.astro
title: "Solução de problemas"
description: "Resolva problemas de conexão, identidades, chaves de segurança, terminais, arquivos, VPNs, backups e desktops remotos."
---

# Solução de problemas

Esta página cobre problemas comuns do Mobile SSH e as primeiras verificações a fazer antes de mudar as configurações de SSH no servidor.

## Não consigo conectar

Verifique:

- O dispositivo tem acesso à rede.
- O nome de host ou endereço IP do servidor está correto.
- A porta SSH está correta, normalmente `22`.
- Um firewall, VPN, rede da operadora ou rede Wi-Fi não está bloqueando a porta.
- O servidor SSH está em execução e aceita conexões da rede que você está usando.

Se o mesmo host funciona em outro dispositivo, compare exatamente host, porta, nome de usuário, chave e caminho de rede.

## A identidade do servidor requer atenção

Ambas verificam a identidade SSH antes de enviar credenciais. No iOS, chave desconhecida exige confirmar impressão digital e **Confiar e reconectar**. No Android, **Configurações → Geral → Segurança → Aceitar automaticamente novas identidades SSH** vem ativado: salva a primeira chave sem certificado e exige correspondência depois. Desative para revisar novas impressões antes de conectar.

Compare a impressão SHA-256 nova ou alterada com o administrador por canal confiável. Mudança pode indicar substituição ou servidor inesperado; não remova a identidade anterior sem verificar. Revise identidades em Configurações. Endereços alternativos e bastiões não evitam a verificação.

O Android também suporta autoridades certificadoras de hosts com escopo definido e revogações. Autoridades desconhecidas, certificados expirados ou inválidos e chaves revogadas continuam bloqueados mesmo com a aceitação automática no primeiro uso ativada. No iOS, **Configurações → Identidades de servidores → Importar chaves revogadas** aceita entradas OpenSSH `@revoked` Ed25519/ECDSA com escopo definido. Um texto colado que misture entradas incompatíveis é rejeitado por completo; entradas de CA, certificados, chaves RSA e nomes de host com hash não são suportados. As revogações anulam a confiança anterior em novas conexões e reconexões, mas não encerram as existentes. Identidades e revogações não entram nos backups. No iOS, verifique um servidor desconhecido no app principal antes de enviar pela extensão de compartilhamento.

## Não conecta por um bastião

Confira endereço e credenciais de cada bastião e acesso do telefone ao primeiro. Cada host seguinte deve ser acessível pelo anterior. Bastiões precisam permitir TCP, respeitando `permitopen`. A rota exige SSH, sem ciclos e até oito saltos expandidos.

Bastião excluído ou não resolvido não gera conexão direta. Corrija a rota e reconecte. Estado e registro de login do Android distinguem o salto com falha do servidor final.

## Falha na autenticação

Verifique:

- A grafia do nome de usuário.
- A senha ou a frase-senha da chave.
- Se o servidor permite login por senha, por chave ou ambos.
- Se a chave privada corresponde a uma chave pública no `authorized_keys` do usuário do servidor.
- Se o arquivo da chave foi importado por completo, incluindo as linhas de cabeçalho e rodapé.

Para chaves privadas criptografadas, informe a frase-senha no campo de senha/frase-senha.

No Android, `ssh` ou `git` remoto exige **Encaminhar agente SSH** no perfil e permitido pelo servidor. Só chaves salvas utilizáveis são oferecidas. Solicitação Permitir/Negar ou de chave física pode pausar terminal, arquivos e túneis até 30 segundos; responda no app ou na notificação.

## Falha na importação da chave privada

A importação de chave privada usa o seletor de arquivos do sistema. Se a importação falhar:

- Confirme que o arquivo selecionado é uma chave privada, não um arquivo público `.pub`.
- Abra o arquivo em um editor de texto confiável e verifique se ele contém o bloco completo da chave.
- Tente colar a chave manualmente no campo de chave privada.
- Confirme que o tipo de chave é suportado: Ed25519, ECDSA (P-256/384/521) ou RSA no Android; Ed25519 ou ECDSA no iOS. DSA (`ssh-dss`) não funciona em nenhuma das duas, e o iOS não suporta RSA — gere uma chave Ed25519 no lugar.

## A chave de segurança não responde no Android

Android aceita CTAP2/FIDO2 `ed25519-sk` e `ecdsa-sk` por USB/NFC. Use a chave física que criou o arquivo importado. USB exige modo host e permissão; ative NFC e mantenha a chave junto ao telefone até terminar. Informe o PIN solicitado e toque na chave.

O servidor precisa de OpenSSH 8.2+ com o algoritmo `sk-*` permitido. Não aceita chaves somente U2F nem descoberta de credenciais residentes. O prazo de login pode acabar enquanto procura a chave: prepare-a antes. Para pedidos em segundo plano, abra a notificação ou volte ao app. iOS não aceita autenticação com chave de segurança física.

## A entrada do teclado atrasa ou muda

Android envia teclas diretamente sem autocorreção nem previsão. No iOS, **Ditado e sugestões** vem ativado para voz e correções da linha. Se mudar a entrada inesperadamente, desative-o, confira **Sugestões do teclado** e abra um painel novo.

Use a fileira extra para `ESC`, `TAB`, `CTRL`, setas, `HOME`, `END`, `PGUP` e `PGDN`. Rede travada também atrasa entrada. Android mostra **sem resposta** ou **não enviado**; digitação durante reconexão é descartada, nunca reproduzida no novo shell. Aguarde, confira o prompt e redigite apenas o necessário.

## A rolagem do tmux não é o que você espera

O Mobile SSH muda o comportamento de rolagem conforme o estado do terminal. No tmux ou em outros programas de tela alternativa, os gestos de rolagem podem enviar comandos do modo de cópia do tmux em vez de rolar o scrollback local. Se o modo de mouse do tmux estiver ativado, o app envia sequências de escape de roda do mouse.

Se a rolagem parecer errada:

- Tente ativar ou desativar o modo de mouse do tmux no servidor remoto.
- Use `PGUP` e `PGDN` na linha de teclas extras.
- Toque duas vezes no painel para tela cheia antes de rolar uma saída densa.
- Desanexe e reanexe ao tmux se o tamanho do terminal remoto parecer desatualizado.

No Android, chegar ao fim sai do modo cópia tmux controlado pelo app quando aparece o indicador padrão. Layouts personalizados ou divididos sem indicador podem exigir saída manual. Ao trocar sessão, confira servidor, socket tmux e nome no gerenciador.

## A sessão caiu após o bloqueio de tela

No Android, o Mobile SSH usa keepalives, um serviço em primeiro plano, wake lock, Wi-Fi lock e tentativas de reconexão para reduzir desconexões. As políticas de bateria do Android ainda podem interromper o trabalho em segundo plano.

Verifique:

- Desative a otimização de bateria para o Mobile SSH se o seu aparelho interrompe agressivamente apps em segundo plano.
- Mantenha o Wi-Fi ou os dados móveis estáveis durante sessões longas.
- Reabra o Mobile SSH e toque em **Active Sessions** após desbloquear.
- Verifique se **Keep sessions running in background** está ativado nas Configurações, caso queira que os shells sobrevivam a fechar o app na lista de recentes.
- Se o servidor desconectou a sessão SSH, reconecte pela tela inicial — **Continue** lista o que ainda está ativo e **Tmux sessions** lista o que está esperando no servidor.

iOS suspende apps em segundo plano, então SSH não fica conectado indefinidamente após trocar de app ou bloquear. Há breve tolerância para trocas rápidas. Configure **Anexar ao conectar** como tmux, Herdr ou Zellij, ou use **Eternal Terminal**, para retomar após reconectar. O multiplexador deve continuar no servidor; Eternal Terminal não aceita bastiões.

## A transferência de arquivos não navega pelos arquivos do telefone

O Mobile SSH não pede nenhuma permissão de armazenamento no Android. Em vez disso, o painel local mostra uma pasta que você concede com o seletor de pastas do sistema — se ele estiver vazio, use **Pick folder** para escolher uma. A concessão continua valendo, então isso é uma etapa única.

Se os arquivos remotos carregam mas os locais não, a conexão SSH está bem e você simplesmente ainda não concedeu nenhuma pasta.

No iOS, o painel local começa em Documentos do app. **Meu telefone → Escolher pasta local** lembra outra pasta de Arquivos. Se provedor ou permissão falhar, escolha novamente ou volte à pasta do app. Downloads dela aparecem em **No Meu iPhone**; externos ficam no provedor original. Permissões de pasta não viajam no backup.

## Falha no upload ou download

Verifique:

- A sessão SSH ainda está conectada.
- O diretório remoto existe.
- O usuário remoto tem permissão para ler ou gravar no caminho.
- O destino local é gravável.
- Há espaço livre suficiente no dispositivo.
- A rede está estável para transferências grandes.

## Falha no encaminhamento de portas

Verifique:

- A porta local está entre `1` e `65535`.
- A porta local já não está em uso.
- A string do túnel é `PORT` ou `LOCAL:REMOTEHOST:REMOTE`.
- O host remoto e a porta remota são alcançáveis a partir do servidor SSH.
- O servidor SSH permite encaminhamento de TCP.

## VPN ou proxy não transporta tráfego no Android

- Inicie o perfil em **VPN** e autorize Android. VPN de dispositivo substitui a anterior; use SOCKS5 local para manter outra VPN.
- Em SSH VPN, confira servidor, bastiões, identidade, permissão TCP e seleção apps/sites. Transporta TCP e DNS, não UDP geral.
- Em SOCKS5, configure endereço local, porta, senha e DNS remoto no cliente. Proxy ativo não redireciona todos os apps.
- Em WireGuard, confira handshake, chaves, `AllowedIPs` e DNS. Em Shadowsocks, confira cifra/senha e retransmissão UDP para DNS.
- Em OpenVPN, use perfil autocontido compatível, verifique CA/identidade e credenciais, forneça DNS VPN para túnel completo. Corrija autenticação/certificados e pare e inicie o perfil novamente.

SSH VPN, Shadowsocks e OpenVPN podem bloquear tráfego capturado ao reconectar sem voltar à conexão direta. Parar termina a proteção. VPN não contorna restrições de internet impostas ao servidor por provedor ou administrador.

## O backup não restaurou tudo

Confira a prévia e **Mesclar** ou **Substituir**. Seções ausentes em backup antigo ou parcial ficam inalteradas. Backups completos incluem preferências compatíveis; Android também inclui VPN/proxy. Nem todo item de plataforma é portátil ao iOS; versões antigas podem rejeitar formato completo novo.

Identidades, permissões do sistema e acesso a pastas ficam no dispositivo. Verifique hosts e conceda acesso a pasta/VPN no novo. Credenciais físicas ainda precisam da chave. Importar não inicia VPN; revise os perfis antes.

## Desktop remoto indisponível ou sem redimensionamento

Abra pelo SSH conectado e confira permissão de encaminhamento TCP local. No Linux, instale desktop/VNC indicado pela mensagem de pacote ausente. Android não espelha console Wayland; use desktop virtual compatível.

No macOS, ative Compartilhamento de Tela nas configurações do Mac. O Android suporta autenticação com uma conta do Mac; o iOS exige acesso clássico por senha VNC ativado em Compartilhamento de Tela, usando a senha de compartilhamento em vez da senha de uma conta do Mac. O visualizador mostra a tela existente do Mac. Talvez seja preciso mudar sua resolução no Mac. Um desktop virtual só pode ser redimensionado ao vivo se o servidor suportar; reiniciar um desktop criado pelo app exige confirmação e fecha seus programas. Sair do visualizador mantém o desktop remoto funcionando.

## Logs de depuração

As duas plataformas registram coisas diferentes, então escolha a que corresponde ao seu problema.

**Android — terminal e renderização.** Ative **Settings → Debugging → Show Debug and Logs buttons** e depois use o botão **Debug** que aparece na tela inicial. Ele registra eventos do terminal, tamanhos de dados SSH, entrada por toque, comportamento de redimensionamento e ciclo de vida dos túneis. Ao iniciar uma gravação, ele avisa antes que isso captura cada tecla que você digita, senhas inclusive. Ao parar, ele grava um arquivo na sua pasta Downloads.

**iOS — conexões e reconexões.** Ative **Settings → Diagnostics → Record debug log**. Ele registra cada endereço discado e por que ele falhou, tentativas de reconexão e o seu backoff, conexões perdidas, "peer stopped answering keepalives", mudanças de rede e comandos tmux com seus erros. As Configurações mostram uma contagem de linhas ao vivo, para você confirmar que está gravando, e **Export Debug Log** compartilha tudo como um arquivo de texto. Ele fica na memória e cobre apenas a sessão atual do app.

Revise qualquer log ou arquivo de depuração antes de compartilhá-lo. Eles servem para solução de problemas e podem revelar nomes de servidores, endereços, tempos ou outros detalhes do ambiente — e, no Android, qualquer coisa que você tenha digitado.
