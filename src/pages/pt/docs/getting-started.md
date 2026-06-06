---
layout: ../../../layouts/DocLayout.astro
title: "Primeiros passos"
description: "Primeiros passos para instalar o Mobile SSH, conectar a um servidor e salvar perfis, credenciais e sessões."
---

# Primeiros passos

O Mobile SSH é um cliente SSH para Android para conectar aos seus próprios servidores Linux, Unix, de rede, IoT ou de desenvolvimento. Você fornece o endereço do servidor e as credenciais; o app abre um terminal SSH interativo.

## Requisitos

- Android 8.0 ou mais recente.
- Acesso de rede do dispositivo Android ao seu servidor SSH.
- Nome de host ou endereço IP do servidor SSH, porta, nome de usuário e uma senha ou chave privada.
- Acesso ao armazenamento, se quiser usar a transferência de arquivos por SFTP com o navegador de arquivos local do telefone.

## Conectar a um servidor

1. Abra o Mobile SSH.
2. Toque em **+ Add Session** e pesquise um servidor salvo, ou adicione um novo a partir dessa tela.
3. Informe o host, a porta, o nome de usuário e os detalhes de autenticação ao adicionar um novo servidor.
4. Toque no servidor para abrir uma sessão de terminal.
5. Use **Active Sessions** na tela inicial para voltar a sessões que ainda estão em execução.

A porta SSH padrão é `22`. Se o seu servidor usar outra porta, informe-a no perfil do servidor.

## Salvar servidores

Os servidores salvos guardam o destino da conexão e a configuração opcional de túneis. Um servidor salvo pode incluir:

- Nome de host ou endereço IP.
- Porta SSH.
- Nome de usuário.
- Detalhes de senha ou chave privada.
- Regras opcionais de encaminhamento de portas local.

Use servidores salvos para hosts que você acessa com frequência. Se um servidor salvo apontar para um host diferente da sua sessão ativa atual, o Mobile SSH inicia uma nova conexão para o destino selecionado.

## Salvar credenciais

A tela **Credentials** armazena registros reutilizáveis de usuário/senha ou usuário/chave privada. As credenciais salvas podem ser selecionadas na caixa de diálogo de configuração do servidor, para que você não precise digitar os mesmos dados de login em cada host.

Os registros de credenciais são armazenados localmente no dispositivo Android. Proteja o dispositivo com um bloqueio de tela se salvar senhas, frases-senha ou chaves privadas.

## Usar chaves privadas

O Mobile SSH aceita chaves privadas coladas e a importação de chaves pelo seletor de arquivos do Android. A implementação do app suporta chaves Ed25519, RSA, ECDSA e DSA.

Para usar uma chave privada:

1. Abra **Credentials** ou a caixa de diálogo de edição do servidor.
2. Cole o texto da chave privada ou escolha **Import from file**.
3. Informe a frase-senha da chave no campo de senha/frase-senha se a chave estiver criptografada.
4. Salve a credencial ou o servidor.

A importação de chave privada usa o seletor de arquivos do Android para arquivos de chave. A transferência de arquivos usa um navegador de arquivos local separado e pode solicitar acesso mais amplo ao armazenamento em versões mais novas do Android.

## Sessões recentes

A tela inicial mostra as sessões recentes. Uma sessão recente pode reconectar ao mesmo conjunto de servidores. Se a sessão anterior ainda estiver ativa, o Mobile SSH retorna a ela em vez de iniciar uma conexão duplicada.

## Pesquisar servidores salvos

Toque no campo de pesquisa na página **Saved Servers** para filtrar por nome ou host. A tela **+ Add Session** também abre com pesquisa, para que você possa encontrar e se conectar a um servidor salvo em uma única etapa.

## Sessões ativas

Quando há sessões em execução, a tela inicial mostra **Active Sessions** com uma contagem. Toque para voltar à grade de terminais. Uma notificação contínua também lista os hosts ativos — toque em um host na notificação para ir diretamente para aquele terminal.

Voltar à tela inicial não desconecta as sessões SSH ativas; fechar painéis ou encerrar a atividade do terminal as desconecta.

## Primeiras configurações úteis

Abra **Settings** na tela inicial (ela tem sua própria página):

- Ative tocar para mostrar o teclado se preferir que o teclado apareça ao tocar no terminal.
- Desative as sugestões do IME se as sugestões do teclado atrapalharem programas de terminal como Vim, less, htop ou apps tmux em tela cheia.
- Ative **Agent alerts** se você executa tarefas longas em segundo plano (Claude Code, Codex, scripts de shell) e quer receber uma notificação sonora ou vibração quando o agente precisar da sua entrada.
- Desative a coleta anônima de dados de uso se preferir que nenhuma informação seja enviada.

## Idiomas

O Mobile SSH segue o idioma do sistema Android. O app vem com traduções para árabe, bengali, chinês (simplificado e tradicional), inglês, francês, alemão, hindi, indonésio, japonês, marata, pidgin nigeriano, português, russo, espanhol, tâmil, télugo, turco e urdu. Altere o idioma em **Settings → System → Languages** do Android, e não dentro do app.

## Nota de segurança

Conecte apenas a servidores em que você confia. O app atual armazena os dados de conexão salvos localmente e não oferece cofre na nuvem nem sincronização entre dispositivos. A implementação atual também não exibe uma confirmação de host conhecido, então evite conectar por redes não confiáveis quando a identidade do host for importante.
