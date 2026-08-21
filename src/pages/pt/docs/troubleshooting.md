---
layout: ../../../layouts/DocLayout.astro
title: "Solução de problemas"
description: "Guia de solução de problemas do Mobile SSH para conexão, autenticação, teclado, tmux, transferência de arquivos e túneis."
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

## Falha na autenticação

Verifique:

- A grafia do nome de usuário.
- A senha ou a frase-senha da chave.
- Se o servidor permite login por senha, por chave ou ambos.
- Se a chave privada corresponde a uma chave pública no `authorized_keys` do usuário do servidor.
- Se o arquivo da chave foi importado por completo, incluindo as linhas de cabeçalho e rodapé.

Para chaves privadas criptografadas, informe a frase-senha no campo de senha/frase-senha.

## Falha na importação da chave privada

A importação de chave privada usa o seletor de arquivos do sistema. Se a importação falhar:

- Confirme que o arquivo selecionado é uma chave privada, não um arquivo público `.pub`.
- Abra o arquivo em um editor de texto confiável e verifique se ele contém o bloco completo da chave.
- Tente colar a chave manualmente no campo de chave privada.
- Confirme que o tipo de chave é suportado: Ed25519, ECDSA (P-256/384/521) ou RSA no Android; Ed25519 ou ECDSA no iOS. DSA (`ssh-dss`) não funciona em nenhuma das duas, e o iOS não suporta RSA — gere uma chave Ed25519 no lugar.

## A entrada do teclado atrasa ou muda

O Mobile SSH envia as teclas diretamente ao shell com a autocorreção e as sugestões preditivas desativadas, de modo que o teclado não deve reescrever o texto antes de ele chegar ao lado remoto. Se o seu teclado ainda assim alterar a entrada, confirme que nenhuma ferramenta de substituição ou de área de transferência de nível de sistema esteja interceptando-a, e use a linha de teclas extras para teclas de terminal como `ESC`, `TAB`, `CTRL`, setas, `HOME`, `END`, `PGUP` e `PGDN`.

## A rolagem do tmux não é o que você espera

O Mobile SSH muda o comportamento de rolagem conforme o estado do terminal. No tmux ou em outros programas de tela alternativa, os gestos de rolagem podem enviar comandos do modo de cópia do tmux em vez de rolar o histórico local. Se o modo de mouse do tmux estiver ativado, o app envia sequências de escape de roda do mouse.

Se a rolagem parecer errada:

- Tente ativar ou desativar o modo de mouse do tmux no servidor remoto.
- Use `PGUP` e `PGDN` na linha de teclas extras.
- Toque duas vezes no painel para tela cheia antes de rolar uma saída densa.
- Desanexe e reanexe ao tmux se o tamanho do terminal remoto parecer desatualizado.

## A sessão caiu após o bloqueio de tela

No Android, o Mobile SSH usa keepalives, um serviço em primeiro plano, wake lock, Wi-Fi lock e tentativas de reconexão para reduzir desconexões. As políticas de bateria do Android ainda podem interromper o trabalho em segundo plano.

Verifique:

- Desative a otimização de bateria para o Mobile SSH se o seu aparelho interrompe agressivamente apps em segundo plano.
- Mantenha o Wi-Fi ou os dados móveis estáveis durante sessões longas.
- Reabra o Mobile SSH e toque em **Active Sessions** após desbloquear.
- Verifique se **Keep sessions running in background** está ativado nas Configurações, caso queira que as shells sobrevivam a fechar o app na lista de recentes.
- Se o servidor desconectou a sessão SSH, reconecte pela tela inicial — **Continue** lista o que ainda está ativo e **Tmux sessions** lista o que está esperando no servidor.

No iOS, o sistema suspende os apps em segundo plano, então uma conexão SSH pura não pode ser mantida aberta indefinidamente depois que você troca de app ou bloqueia a tela. Um curto período de tolerância cobre trocas rápidas de app; para qualquer coisa mais longa, ative **Auto-attach tmux session** no perfil do servidor (ou use o transporte **Eternal Terminal**) para que a reconexão devolva você ao mesmo shell onde parou.

## A transferência de arquivos não navega pelos arquivos do telefone

O Mobile SSH não pede nenhuma permissão de armazenamento no Android. Em vez disso, o painel local mostra uma pasta que você concede com o seletor de pastas do sistema — se ele estiver vazio, use **Pick folder** para escolher uma. A concessão continua valendo, então isso é uma etapa única.

Se os arquivos remotos carregam mas os locais não, a conexão SSH está bem e você simplesmente ainda não concedeu nenhuma pasta.

No iOS, o painel local mostra a área de documentos do app, e você adiciona arquivos pelos seletores de documentos e fotos do sistema. Os downloads feitos ali também ficam visíveis no app Arquivos em **No meu iPhone**.

## Falha no upload ou download

Verifique:

- A sessão SSH ainda está conectada.
- O diretório remoto existe.
- O usuário remoto tem permissão para ler ou gravar no caminho.
- O destino local é gravável.
- Há espaço livre suficiente no dispositivo.
- A rede está estável para transferências grandes.

## Falha no encaminhamento de porta

Verifique:

- A porta local está entre `1` e `65535`.
- A porta local já não está em uso.
- A string do túnel é `PORT` ou `LOCAL:REMOTEHOST:REMOTE`.
- O host remoto e a porta remota são alcançáveis a partir do servidor SSH.
- O servidor SSH permite encaminhamento de TCP.

## Logs de depuração

As duas plataformas registram coisas diferentes, então escolha a que corresponde ao seu problema.

**Android — terminal e renderização.** Ative **Settings → Debugging → Show Debug and Logs buttons** e depois use o botão **Debug** que aparece na tela inicial. Ele registra eventos do terminal, tamanhos de dados SSH, entrada por toque, comportamento de redimensionamento e ciclo de vida dos túneis. Ao iniciar uma gravação, ele avisa antes que isso captura cada tecla que você digita, senhas inclusive. Ao parar, ele grava um arquivo na sua pasta Downloads.

**iOS — conexões e reconexões.** Ative **Settings → Diagnostics → Record debug log**. Ele registra cada endereço discado e por que ele falhou, tentativas de reconexão e o seu backoff, conexões perdidas, "peer stopped answering keepalives", mudanças de rede e comandos tmux com seus erros. As Configurações mostram uma contagem de linhas ao vivo, para você confirmar que está gravando, e **Export Debug Log** compartilha tudo como um arquivo de texto. Ele fica na memória e cobre apenas a sessão atual do app.

Revise qualquer log ou arquivo de depuração antes de compartilhá-lo. Eles servem para solução de problemas e podem revelar nomes de servidores, endereços, tempos ou outros detalhes do ambiente — e, no Android, qualquer coisa que você tenha digitado.
