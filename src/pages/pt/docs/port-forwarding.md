---
layout: ../../../layouts/DocLayout.astro
title: "Encaminhamento de portas"
description: "Sintaxe de encaminhamento de portas local do Mobile SSH e gerenciamento de túneis no Android e no iOS."
---

# Encaminhamento de portas

O Mobile SSH suporta encaminhamento de portas SSH local tanto no Android quanto no iOS. Uma porta local no dispositivo escuta em `127.0.0.1` e encaminha o tráfego pela conexão SSH para um host e porta remotos.

## Sintaxe do túnel salvo

As regras de encaminhamento de portas são separadas por vírgula. Cada entrada usa uma de duas formas:

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Forma curta:

```text
8080
```

Isso vincula `127.0.0.1:8080` no dispositivo e encaminha para `localhost:8080` do ponto de vista do servidor.

Forma completa:

```text
3000:localhost:3000
```

Isso vincula `127.0.0.1:3000` no dispositivo e encaminha por SSH para `localhost:3000` no lado remoto.

Vários encaminhamentos:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Adicionar um túnel a um servidor salvo

1. Abra **Saved Servers**.
2. Adicione ou edite um perfil de servidor.
3. Informe as regras de encaminhamento em **Port forwards**.
4. Salve o servidor.
5. Conecte ao servidor.

O app aplica os encaminhamentos salvos após a sessão SSH ser estabelecida.

## Gerenciar túneis ativos

Com a sessão conectada, selecione a sessão e abra a visualização de túneis na barra de ferramentas do terminal. A partir daí você pode inspecionar os encaminhamentos locais ativos, adicionar um novo túnel ou remover um encaminhamento local.

## Vinculação de endereço

O Mobile SSH vincula os encaminhamentos locais a `127.0.0.1` no dispositivo. Isso é intencional: mantém o túnel local ao dispositivo e evita surpresas com loopback exclusivo de IPv6. Outros apps no mesmo dispositivo podem conseguir se conectar à porta local encaminhada, caso o sistema operacional permita o acesso de rede a eles.

## Exemplos comuns

Acessar um serviço web em execução no servidor remoto:

```text
8080
```

Em seguida, abra `http://127.0.0.1:8080` em um navegador no mesmo dispositivo.

Acessar um servidor de desenvolvimento:

```text
3000:localhost:3000
```

Acessar um banco de dados interno alcançável a partir do servidor SSH:

```text
15432:db.internal:5432
```

## Solução de problemas de túneis

- Verifique se a sessão SSH está conectada antes de adicionar túneis em tempo de execução.
- Verifique se a porta local não está sendo usada por outro processo.
- Verifique se o host e a porta remotos são alcançáveis a partir do servidor SSH.
- Use `localhost` quando o serviço de destino estiver no próprio servidor SSH.
- Use o nome DNS interno ou o IP do servidor ao encaminhar para outro host atrás do servidor SSH.
