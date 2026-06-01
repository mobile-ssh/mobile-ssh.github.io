---
layout: ../../../layouts/DocLayout.astro
title: "Transferência de arquivos"
description: "Guia de transferência de arquivos por SFTP do Mobile SSH para arquivos locais e remotos, upload, download, ordenação e permissões."
---

# Transferência de arquivos

O Mobile SSH inclui uma tela de transferência de arquivos por SFTP vinculada à conexão SSH ativa. Ela serve para manutenção rápida do servidor a partir do Android: enviar uma configuração, baixar um log, renomear um arquivo remoto ou inspecionar permissões sem sair do app.

## Abrir a transferência de arquivos

1. Conecte a um servidor SSH.
2. Selecione o painel de terminal conectado.
3. Abra **Transferência** na barra de ferramentas do terminal, ou pressione e segure o cabeçalho do painel quando a tela atual permitir.
4. A tela de transferência de arquivos abre com um painel local e um painel remoto.

Se não houver uma sessão SSH ativa, a transferência de arquivos não pode abrir.

## Painéis local e remoto

A tela de transferência de arquivos tem dois painéis de navegação:

- **Painel local:** armazenamento do telefone.
- **Painel remoto:** arquivos do servidor por SFTP.

O app lembra os caminhos locais e remotos recentes por host. As configurações de ordenação também são lembradas por host para ambos os painéis.

## Permissão de armazenamento do Android

Em versões do Android que restringem a navegação direta de arquivos, o Mobile SSH pode pedir acesso ao armazenamento antes que o painel local consiga navegar pelos arquivos do telefone. Se você pular ou negar essa permissão, a navegação remota ainda pode funcionar, mas os caminhos locais de upload e download podem ficar limitados.

A importação de chave privada é separada da transferência de arquivos e usa o seletor de arquivos do Android.

## Enviar arquivos (upload)

1. Abra o painel local.
2. Navegue até o arquivo que deseja enviar.
3. Escolha enviar.
4. Confirme o destino remoto.
5. Acompanhe a fila de transferência para ver o progresso e a conclusão.

Os uploads usam a conexão SSH/SFTP existente. Se a conexão cair, tente novamente após reconectar.

## Baixar arquivos (download)

1. Abra o painel remoto.
2. Navegue até o arquivo que deseja baixar.
3. Escolha baixar.
4. Confirme o destino local.
5. Acompanhe a fila de transferência para ver o progresso e a conclusão.

Downloads grandes devem ser feitos em uma rede estável quando possível.

## Ações em arquivos remotos

Dependendo do item remoto selecionado, o Mobile SSH pode mostrar ações como:

- Baixar.
- Renomear.
- Excluir.
- Criar arquivo ou diretório.
- Editar arquivo de texto.
- Ver detalhes do arquivo.

Os detalhes de um arquivo remoto podem incluir os bits de permissão, o proprietário, o grupo e os valores de permissão em octal. Use esses detalhes antes de alterar arquivos do servidor gerenciados por outro processo ou ferramenta de implantação.

## Ordenação e caminhos recentes

Cada painel pode ordenar por nome ou data, em ordem crescente ou decrescente. O Mobile SSH armazena os modos de ordenação local e remoto selecionados por host, junto com os caminhos recentes, para que transferências repetidas ao mesmo servidor comecem em locais familiares.

## Fila de transferência

As transferências são enfileiradas e exibidas por status. A área de log separa as transferências na fila, com falha e bem-sucedidas. As transferências com falha incluem um motivo quando a operação SFTP subjacente fornece um.

## Dicas práticas

- Use o SFTP para mover arquivos pontuais; use ferramentas de linha de comando como o `rsync` no servidor para sincronizar diretórios grandes.
- Evite editar arquivos de produção em uso, a menos que tenha um backup ou um caminho de reversão da implantação.
- Se um arquivo não aparecer após o upload, atualize o painel remoto ou verifique o caminho de destino.
- Se o acesso ao armazenamento do Android bloquear a navegação local, conceda a permissão nas Configurações do Android e reabra a transferência de arquivos.
