---
layout: ../../../layouts/DocLayout.astro
title: "Solução de problemas"
description: "Guia de solução de problemas do Mobile SSH para conexão, autenticação, teclado, tmux, transferência de arquivos e túneis."
---

# Solução de problemas

Esta página cobre problemas comuns do Mobile SSH e as primeiras verificações a fazer antes de mudar as configurações de SSH no servidor.

## Não consigo conectar

Verifique:

- O dispositivo Android tem acesso à rede.
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

A importação de chave privada usa o seletor de arquivos do Android. Se a importação falhar:

- Confirme que o arquivo selecionado é uma chave privada, não um arquivo público `.pub`.
- Abra o arquivo em um editor de texto confiável e verifique se ele contém o bloco completo da chave.
- Tente colar a chave manualmente no campo de chave privada.
- Confirme que o tipo de chave é um dos suportados pela implementação do app: Ed25519, RSA, ECDSA ou DSA.

## A entrada do teclado atrasa ou muda

Se o seu teclado Android altera o texto antes de ele chegar ao shell, desative as sugestões do teclado nas configurações do Mobile SSH. Isso é útil para Vim, tmux, htop, less, shells que usam combinações de teclas incomuns e prompts de senha remotos.

Use a linha de teclas extras para teclas de terminal como `ESC`, `TAB`, `CTRL`, setas, `HOME`, `END`, `PGUP` e `PGDN`.

## A rolagem do tmux não é o que você espera

O Mobile SSH muda o comportamento de rolagem conforme o estado do terminal. No tmux ou em outros programas de tela alternativa, os gestos de rolagem podem enviar comandos do modo de cópia do tmux em vez de rolar o histórico local. Se o modo de mouse do tmux estiver ativado, o app envia sequências de escape de roda do mouse.

Se a rolagem parecer errada:

- Tente ativar ou desativar o modo de mouse do tmux no servidor remoto.
- Use `PGUP` e `PGDN` na linha de teclas extras.
- Toque duas vezes no painel para tela cheia antes de rolar uma saída densa.
- Desanexe e reanexe ao tmux se o tamanho do terminal remoto parecer desatualizado.

## A sessão caiu após o bloqueio de tela

O Mobile SSH usa keepalives, um serviço em primeiro plano, wake lock, Wi-Fi lock e tentativas de reconexão para reduzir desconexões. As políticas de bateria do Android ainda podem interromper o trabalho em segundo plano.

Verifique:

- Desative a otimização de bateria para o Mobile SSH se o seu aparelho interrompe agressivamente apps em segundo plano.
- Mantenha o Wi-Fi ou os dados móveis estáveis durante sessões longas.
- Reabra o Mobile SSH e toque em **Sessões ativas** após desbloquear.
- Se o servidor desconectou a sessão SSH, reconecte pelas sessões recentes.

## A transferência de arquivos não navega pelos arquivos do telefone

Em versões mais novas do Android, a navegação de arquivos locais pode exigir acesso ao armazenamento. Conceda o acesso ao armazenamento nas Configurações do Android para o Mobile SSH e reabra a tela de transferência de arquivos.

Se os arquivos remotos carregam mas os locais não, a conexão SSH provavelmente está bem e o problema é o acesso ao armazenamento local do Android.

## Falha no upload ou download

Verifique:

- A sessão SSH ainda está conectada.
- O diretório remoto existe.
- O usuário remoto tem permissão para ler ou gravar no caminho.
- O destino local é gravável.
- Há espaço livre suficiente no dispositivo Android.
- A rede está estável para transferências grandes.

## Falha no encaminhamento de porta

Verifique:

- A porta local está entre `1` e `65535`.
- A porta local já não está em uso.
- A string do túnel é `PORT` ou `LOCAL:REMOTEHOST:REMOTE`.
- O host remoto e a porta remota são alcançáveis a partir do servidor SSH.
- O servidor SSH permite encaminhamento de TCP.

## Logs de depuração

A tela inicial inclui um botão **Depuração**. Quando ativado, o Mobile SSH registra informações de diagnóstico sobre eventos do terminal, tamanhos de dados SSH, entrada por toque, comportamento de redimensionamento e ciclo de vida dos túneis. Pare a gravação para salvar um arquivo de depuração localmente.

Revise os arquivos de depuração antes de compartilhá-los. Eles servem para solução de problemas e podem revelar nomes de servidores, tempos, comportamento do terminal ou outros detalhes do ambiente.
