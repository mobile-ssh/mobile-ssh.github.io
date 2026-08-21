---
layout: ../../../layouts/DocLayout.astro
title: "Transferência de arquivos"
description: "Guia de transferência de arquivos por SFTP do Mobile SSH para arquivos locais e remotos, upload, download, ordenação e permissões."
---

# Transferência de arquivos

O Mobile SSH inclui uma tela de transferência de arquivos por SFTP vinculada à conexão SSH ativa. Ela serve para manutenção rápida do servidor a partir do seu telefone ou tablet: enviar uma configuração, baixar um log, renomear um arquivo remoto ou inspecionar permissões sem sair do app.

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

O app lembra os últimos dez caminhos remotos por host — abra-os pelo cabeçalho do painel remoto no Android, ou pelo ícone de relógio no iOS. As configurações de ordenação são lembradas por host para ambos os painéis. Não há histórico de caminhos locais: no Android, o painel local é a pasta que você concedeu e, no iOS, é a área de documentos do próprio app.

A tela de transferência de arquivos segue o tema claro ou escuro do seu sistema, para que combine com o restante do Mobile SSH.

### Onde cada sessão abre (Android)

Abrir a Transferência de arquivos a partir de um painel anexado a uma sessão tmux coloca o painel remoto de volta onde **aquela sessão** estava trabalhando por último, com o nome da sessão no cabeçalho do painel. Uma sessão a partir da qual você ainda não a abriu começa nos diretórios que você mais usa naquele host, depois no último diretório do host e, por fim, no seu diretório pessoal.

Se um diretório lembrado tiver sido apagado desde então, o app desce por essa lista até que um deles realmente liste o conteúdo, em vez de deixar você diante de um erro — e não regrava o caminho quebrado. No iOS, é lembrado um diretório remoto por host.

## Acesso ao armazenamento

O Mobile SSH não pede permissão irrestrita de armazenamento em nenhuma das plataformas.

No Android, você concede **uma pasta** com o seletor de pastas do sistema, e os downloads são gravados nela — em um lugar que todos os outros apps já conseguem ler. A concessão continua valendo entre as aberturas do app.

No iOS, o painel local é a área de documentos do app, e os arquivos entram pelos seletores de documentos e de fotos do sistema.

No iOS, o painel local trabalha com a área de documentos do próprio app, e você traz arquivos por meio dos seletores de documentos e de fotos do sistema — incluindo a importação com seleção múltipla de fotos e documentos. Nenhuma permissão de armazenamento separada é necessária.

A importação de chave privada é separada da transferência de arquivos e usa o seletor de arquivos do sistema.

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

## Copiar pastas inteiras

Os uploads e downloads não se limitam a arquivos individuais. Escolha uma pasta e o Mobile SSH copia toda a subárvore nas duas direções — do telefone para o remoto e do remoto para o telefone — criando primeiro os diretórios de destino e depois enfileirando cada arquivo. Um subdiretório ilegível não interrompe o restante da cópia; no Android, ele é relatado como uma linha com falha dizendo "Can't list directory", enquanto o iOS continua sem listar o que foi pulado.

## Ações em arquivos remotos

Dependendo do item remoto selecionado, o Mobile SSH pode mostrar ações como:

- Baixar, ou **Copy to phone** no Android.
- Copiar ou mover **no servidor** — `cp -r` / `mv` são executados no host sem que os bytes passem pelo seu telefone.
- Renomear.
- Excluir.
- Criar arquivo ou diretório.
- Editar arquivo de texto.
- Compactar em `.tar.gz`.
- Permissões — altere o modo e o dono, com a opção de aplicar a uma pasta inteira.
- Abrir em outro app.
- Ver detalhes do arquivo.

Os detalhes de um arquivo remoto podem incluir os bits de permissão, o proprietário, o grupo e os valores de permissão em octal. Use esses detalhes antes de alterar arquivos do servidor gerenciados por outro processo ou ferramenta de implantação.

Os tamanhos dos arquivos são mostrados em unidades binárias, para que coincidam com o que o `ls -h` imprime no terminal a uma aba de distância.

## Ordenação e caminhos recentes

Cada painel pode ordenar por nome ou data, em ordem crescente ou decrescente. O Mobile SSH armazena os modos de ordenação local e remoto selecionados por host, junto com os caminhos recentes, para que transferências repetidas ao mesmo servidor comecem em locais familiares.

## Fila de transferência

As transferências são enfileiradas e exibidas por status, e o log mostra todas elas e pode ser rolado — o Android as organiza em abas Queued / Failed / Successful; o iOS, em Active / Failed / Done. As transferências com falha incluem um motivo quando a operação SFTP subjacente fornece um. No iOS, o arquivo que está sendo transferido no momento fica no topo da aba Active, e uma linha pode ser cancelada no meio do caminho.

## Tirar arquivos de dentro do app

- **Android:** os downloads caem na pasta que você concedeu, então já ficam visíveis para todos os outros apps. **Open in another app** está nos dois painéis; um arquivo remoto é baixado primeiro e depois entregue.
- **iOS:** o Mobile SSH aparece no app Arquivos em **No meu iPhone**, então tudo o que está no painel My Phone fica acessível pelo Mail, por seletores e por outros apps. Pressione e segure um arquivo baixado e escolha **Open in another app** para entregá-lo, enviá-lo por AirDrop ou salvá-lo em outro lugar.

## Enviar um arquivo para dentro de uma sessão (Android)

O Android aceita arquivos compartilhados a partir de qualquer outro app: compartilhe com o Mobile SSH e o arquivo é enviado para `~/.cache/mobile-ssh` no host daquele painel, com o caminho remoto dele digitado no prompt, para que você possa usá-lo imediatamente. O botão 📎 na barra de ferramentas do terminal faz o mesmo a partir do seletor de arquivos do sistema, e ambos aceitam vários arquivos de uma vez.

No iOS, traga arquivos para o painel local com o botão ＋ e envie-os a partir dali.

## Dicas práticas

- Use o SFTP para mover arquivos pontuais; use ferramentas de linha de comando como o `rsync` no servidor para sincronizar diretórios grandes.
- Evite editar arquivos de produção em uso, a menos que tenha um backup ou um caminho de reversão da implantação.
- Se um arquivo não aparecer após o upload, atualize o painel remoto ou verifique o caminho de destino.
- Se o painel local do Android estiver vazio, escolha uma pasta com **Pick folder** — o app só tem acesso à pasta que você conceder a ele. No iOS, use os seletores para adicionar arquivos ao painel local.
