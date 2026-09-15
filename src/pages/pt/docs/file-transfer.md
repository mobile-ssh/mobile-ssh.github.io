---
layout: ../../../layouts/DocLayout.astro
title: "Transferência de arquivos"
description: "Transferências SFTP do Mobile SSH, pastas lembradas, diretórios por sessão tmux, filas, permissões e compartilhamento com o terminal."
---

# Transferência de arquivos

O Mobile SSH inclui uma tela de transferência de arquivos por SFTP vinculada à conexão SSH ativa. Ela serve para manutenção rápida do servidor a partir do seu telefone ou tablet: enviar uma configuração, baixar um log, renomear um arquivo remoto ou inspecionar permissões sem sair do app.

## Abrir a transferência de arquivos

1. Conecte a um servidor SSH.
2. Selecione o painel de terminal conectado.
3. Abra **Transfer** na barra de ferramentas do terminal, ou pressione e segure o cabeçalho do painel quando a tela atual permitir.
4. A tela de transferência de arquivos abre com um painel local e um painel remoto.

Se não houver uma sessão SSH ativa, a transferência de arquivos não pode abrir.

## Painéis local e remoto

A tela de transferência de arquivos tem dois painéis de navegação:

- **Painel local:** armazenamento do telefone.
- **Painel remoto:** arquivos do servidor por SFTP.

O app lembra caminhos remotos recentes e ordenação por host. Abra-os pelo cabeçalho remoto no Android ou relógio no iOS. O painel local mostra a pasta escolhida; iOS usa Documentos do app até você escolher outra.

A tela de transferência de arquivos segue o tema claro ou escuro do seu sistema, para que combine com o restante do Mobile SSH.

### Onde cada sessão abre

Nas duas plataformas, abrir Transferência de arquivos pelo tmux restaura o diretório lembrado para **essa sessão e esse socket**. Uma sessão nova tenta pastas frequentes do host e depois outros diretórios lembrados ou de login.

Se um diretório sumiu ou está inacessível, o navegador tenta o próximo local utilizável. Falhas de conexão são informadas sem confundi-las com pastas ausentes. Atualizar não conta como nova visita.

## Acesso ao armazenamento

O Mobile SSH não pede permissão irrestrita de armazenamento em nenhuma das plataformas.

No Android, você concede **uma pasta** com o seletor de pastas do sistema, e os downloads são gravados nela — em um lugar que todos os outros apps já conseguem ler. A concessão continua valendo entre as aberturas do app.

No iOS, **Meu telefone → Escolher pasta local** permite acesso a uma pasta de Arquivos, incluindo iCloud Drive e provedores compatíveis. A escolha persiste. **Usar pasta do app** volta a Documentos do Mobile SSH. Se a pasta ficar indisponível, escolha-a de novo ou volte explicitamente à pasta do app; downloads não são redirecionados silenciosamente. Essa permissão não entra no backup.

Os seletores de documentos e fotos do iOS também importam vários itens. Conflitos oferecem **Substituir**, **Manter ambos** ou **Cancelar**. Importar um arquivo que já está no destino o deixa intacto.

A importação de chave privada é separada da transferência de arquivos e usa o seletor de arquivos do sistema.

## Enviar arquivos (upload)

1. Abra o painel local.
2. Navegue até o arquivo que deseja enviar.
3. Escolha enviar.
4. Confirme o destino remoto.
5. Acompanhe a fila de transferência para ver o progresso e a conclusão.

Uploads seguem a rota SSH do servidor escolhido, incluindo bastiões salvos. Se a conexão cair, tente novamente depois de reconectar.

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

- **Copiar para o telefone** para baixar.
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

Transferências são organizadas por estado: Na fila / Falhas / Sucesso no Android, Ativas / Falhas / Concluídas no iOS. Falhas incluem o motivo disponível. No iOS, a transferência atual fica no topo de Ativas e pode ser cancelada.

No iOS, a fila mantém a pasta original mesmo se você navegar para outra. Downloads terminam em armazenamento temporário antes de substituir o destino; cancelamento ou falha preserva o arquivo existente. Se o destino mudou após autorizar sobrescrita, o app para.

## Tirar arquivos de dentro do app

- **Android:** os downloads caem na pasta que você concedeu, então já ficam visíveis para todos os outros apps. **Open in another app** está nos dois painéis; um arquivo remoto é baixado primeiro e depois entregue.
- **iOS:** **Abrir em outro app** funciona para arquivos locais e remotos. O remoto é baixado antes de abrir o compartilhamento. A pasta do app aparece em **No Meu iPhone → Mobile SSH**; pastas externas continuam na localização original em Arquivos.

## Enviar um arquivo para uma sessão

As duas plataformas aceitam arquivos compartilhados por outros apps e oferecem 📎 **Anexar um arquivo** no terminal. Eles são enviados a `~/.cache/mobile-ssh` no host escolhido, e seus caminhos podem entrar no prompt sem pressionar Enter. Vários arquivos são aceitos.

No Android, compartilhar usa a sessão em execução. No iOS, o clipe oferece **Fototeca** ou **Arquivos**. A extensão de compartilhamento também envia a um servidor SSH salvo com Mobile SSH fechado; perfis Eternal Terminal não aparecem. Verifique identidades desconhecidas no app principal primeiro.

Após upload pela extensão iOS, os caminhos são copiados e ficam na fila para inserção quando houver um painel conectado àquele servidor. Não entram em um painel de outro host.

## Dicas práticas

- Use o SFTP para mover arquivos pontuais; use ferramentas de linha de comando como o `rsync` no servidor para sincronizar diretórios grandes.
- Evite editar arquivos de produção em uso, a menos que tenha um backup ou um caminho de reversão da implantação.
- Se um arquivo não aparecer após o upload, atualize o painel remoto ou verifique o caminho de destino.
- Se o painel local Android estiver vazio, use **Escolher pasta**. No iOS, escolha **Escolher pasta local**, **Usar pasta do app** ou os seletores de importação conforme o destino desejado.
