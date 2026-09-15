---
layout: ../../../layouts/DocLayout.astro
title: "Encaminhamento de portas"
description: "Configure túneis SSH e bastiões no Android e iOS, além de VPN, proxy SOCKS5, roteamento e DNS no Android."
---

# Encaminhamento de portas

O Mobile SSH suporta encaminhamento local de portas SSH tanto no Android quanto no iOS. Uma porta local no dispositivo escuta em `127.0.0.1` e encaminha o tráfego pela conexão SSH para um host e porta remotos.

Android também tem uma página **VPN** para SSH VPN, proxy SOCKS5 local, WireGuard, Shadowsocks e OpenVPN. Esses perfis são separados dos encaminhamentos locais descritos abaixo.

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

## Os túneis pertencem ao perfil do servidor

Encaminhamentos locais ficam no perfil salvo e iniciam quando o servidor conecta. Para alterá-los, edite o perfil e reconecte.

O túnel salvo retorna a cada conexão, inclusive após reconectar em outra rede.

## Destinos IPv6

Um destino IPv6 precisa vir entre colchetes, para que os dois-pontos não se confundam com o separador de porta:

```text
8080:[2001:db8::1]:80
```

Um endereço IPv6 sem colchetes é rejeitado como ambíguo, em vez de ser lido errado em silêncio. A mesma forma com colchetes funciona no campo de endereço de um servidor, com uma porta opcional depois dela (`[fe80::1]:22`).

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

## Conexões por bastiões

Nas duas plataformas, um servidor SSH pode conectar por uma lista ordenada de bastiões salvos. Edite o destino, adicione-os em **Conectar por** e ordene-os. Cada salto usa suas credenciais; a rota expandida aceita até oito saltos.

O telefone alcança o primeiro bastião; cada endereço seguinte precisa ser acessível pelo anterior. Encaminhamentos, terminal e SFTP seguem a mesma rota SSH verificada. O destino encaminhado é alcançado pelo último servidor SSH. Cada bastião deve permitir encaminhamento TCP e toda identidade é verificada antes da autenticação. Essas rotas exigem SSH e não valem para Eternal Terminal.

## Roteamento VPN no Android

Abra **VPN** pelo início, adicione ou importe um perfil nomeado e toque **Iniciar**. Autorize a solicitação VPN do Android. O ícone muda para **Parar roteamento** enquanto ativo; lápis edita e lixeira exclui. Os tipos mais usados aparecem primeiro.

Android permite uma VPN de dispositivo por vez. Iniciar outro perfil troca a VPN anterior. Um proxy SSH SOCKS5 local pode continuar por uma VPN não SSH. Tailscale usa seu próprio app; iniciar VPN do Mobile SSH substitui sua conexão. IKEv2/IPsec é gerenciado nas configurações VPN do Android, não no Mobile SSH.

### SSH VPN e proxy SOCKS5

- **SSH VPN:** escolha um servidor SSH salvo com credenciais e bastiões e todas ou algumas apps e sites. O servidor precisa permitir TCP, sem auxiliar VPN. SSH transporta TCP e DNS remoto; outros UDP atribuídos a SSH são bloqueados, permitindo ao navegador trocar QUIC por TCP.
- **Proxy SOCKS5:** escolha o servidor no editor separado e configure cada app com proxy local e DNS remoto. O padrão é `127.0.0.1:1080` com senha gerada. **Copiar URL do proxy com credenciais** fornece `socks5h://` para clientes compatíveis. Pode usar VPN existente, inclusive Tailscale. Só um perfil SSH VPN ou SSH SOCKS5 funciona por vez.

Use domínios como `example.org`, incluindo seus subdomínios. Domínios identificados fora da lista seguem a rede normal. IPs diretos ou endereços obtidos por DNS criptografado não correspondem com confiabilidade e usam SSH. SSH VPN aplica seleções de apps e sites; clientes SOCKS5 são escolhidos configurando cada cliente.

DNS remoto usa `1.1.1.1:53` por padrão; forneça um resolvedor numérico acessível pelo servidor SSH. Durante reconexão ou autenticação, tráfego SSH fica bloqueado e destinos conhecidos fora do túnel seguem normalmente. Parar, trocar perfil, revogar permissão ou encerrar o app termina a proteção. Não há garantia de VPN sempre ativa nem bloqueio do Android.

### WireGuard, Shadowsocks e OpenVPN

- **WireGuard:** importe ou cole `.conf` padrão. `AllowedIPs` define rotas e `DNS` os resolvedores. Verifique handshake e contadores; interface ativa não prova que o par responde.
- **Shadowsocks:** importe `ss://` ou informe servidor, porta, senha, cifra e DNS. Cifras: AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305. TCP e UDP usam o túnel; o servidor precisa de retransmissão UDP para UDP e DNS. Links com plugins e AEAD-2022 não são aceitos.
- **OpenVPN:** importe `.ovpn` autocontido com certificados e chaves embutidos. Aceita usuário/senha e senha de chave privada criptografada. Verificar certificado do servidor é obrigatório. Perfil/servidor definem rotas e DNS; túnel completo exige DNS VPN. Arquivos externos, scripts, plugins, TAP e desafios interativos não são aceitos.

O app inclui esses motores de protocolo. Shadowsocks e OpenVPN não têm os seletores de apps e sites do SSH VPN. VPN não concede ao servidor acesso à internet restringido pelo provedor ou administrador.

### Bloco de configurações rápidas

Inicie um perfil VPN uma vez para selecioná-lo no bloco **Mobile SSH VPN**. Ele fica realçado com uma VPN ativada, inclusive durante conexão ou reconexão. Toque para parar e novamente para iniciar o perfil lembrado. Não inicia SOCKS5 nem para VPN de outro app.

No Android 13 ou posterior, abrir VPN pela primeira vez pede permissão para adicionar o bloco. Se recusar ou usar Android anterior, adicione em **Configurações rápidas → Editar**. Perfil excluído ou falta de permissão abre VPN para configurar.

## Solução de problemas de túneis

- Verifique se a sessão SSH está conectada — os encaminhamentos sobem depois que a sessão sobe.
- Verifique se a porta local não está sendo usada por outro processo.
- Verifique se o host e a porta remotos são alcançáveis a partir do servidor SSH.
- Use `localhost` quando o serviço de destino estiver no próprio servidor SSH.
- Use o nome DNS interno ou o IP do servidor ao encaminhar para outro host atrás do servidor SSH.
- Com bastiões, verifique credenciais, identidade e permissão TCP de cada salto.
- Para VPN, confira servidor/configuração, DNS, permissão Android e outras VPNs ativas. Veja o [guia de solução de problemas](../troubleshooting/) para cada protocolo.
