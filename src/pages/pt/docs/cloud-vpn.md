---
layout: ../../../layouts/DocLayout.astro
title: "Máquinas virtuais na nuvem e wg-easy"
description: "Crie uma máquina virtual na nuvem com IP público, salve a conexão SSH no Mobile SSH e instale o wg-easy separadamente, com explicações sobre credenciais, rede e remoção dos recursos."
---

# Máquinas virtuais na nuvem e wg-easy

Crie uma máquina virtual Linux na sua própria conta de nuvem, conecte-se com o Mobile SSH e depois instale o wg-easy para executar uma VPN WireGuard. Separar a criação de recursos da instalação permite usar a mesma máquina para outro serviço ou instalar a VPN em um servidor que você já tem.

**Disponibilidade — 8 de novembro de 2026:** plugins separados de criação de máquinas virtuais são o fluxo previsto descrito abaixo. A implementação local Android de **VPN Setup** analisada combina criação de recursos, instalação e importação de clientes; suas alterações de plugin e catálogo não foram publicadas, e implantações reais na nuvem continuam sem testes. As entradas separadas de AWS, Google Cloud e Azure atualmente são apenas estruturas preliminares de manifesto e configurações; as ações de listagem e controle de máquinas virtuais não foram implementadas, e elas não criam máquinas. Use as instruções de console e instalação manual abaixo quando seu catálogo não oferecer um fluxo de criação. O novo fluxo nativo exige uma compilação Android compatível; automação equivalente no iOS não foi estabelecida.

## Dois plugins com responsabilidades separadas

- **Plugin de provisionamento na nuvem:** usa a API do provedor para criar a máquina, o endereço público e os recursos de rede necessários, depois salva uma conexão SSH. Guarda os identificadores dos recursos para gerenciamento ou exclusão posterior.
- **Instalador do wg-easy:** conecta-se por SSH ao servidor salvo selecionado, instala o serviço VPN e ajuda a criar uma configuração de cliente. Precisa de acesso ao servidor e privilégios administrativos, não das suas credenciais de API da nuvem. Uma máquina criada manualmente também pode ser usada.

A passagem entre plugins deve conter a referência do servidor salvo, o endereço público, a porta SSH, o usuário, a referência da credencial SSH e os identificadores da implantação e dos recursos. Segredos da nuvem e chaves SSH privadas não devem ser copiados para a saída do plugin nem para a máquina. Remover a VPN e excluir a máquina na nuvem são operações separadas.

## Prepare a conta e as configurações do servidor

1. Ative uma conta de nuvem e a cobrança, escolha uma região e confira as cotas de máquinas, discos e IPs públicos. Revise os preços atuais de máquinas, IPv4, armazenamento e tráfego; não se presume disponibilidade de uma faixa gratuita.
2. Para este guia, escolha uma máquina dedicada com **Ubuntu 24.04 LTS**, pelo menos **1 GB de RAM e 20 GB de disco**, usando **amd64 ou arm64**. São as opções básicas desta configuração, não um mínimo universal do wg-easy. Use uma conta com acesso root ou sudo; instalação sem supervisão exige elevação de privilégios sem interação.
3. Selecione ou gere uma chave SSH, mantendo a chave privada no Mobile SSH. Envie somente a chave pública para a nuvem. O caminho de importação do Lightsail exige uma chave SSH RSA. Outros provedores e imagens aceitam seus próprios tipos de chave. O cliente SSH atual do iOS aceita chaves privadas Ed25519/ECDSA em vez de RSA. Para usar Lightsail no iOS, primeiro use o console SSH do provedor no navegador para adicionar uma chave pública aceita pelo aplicativo a `authorized_keys`, depois conecte-se com essa chave.
4. Escolha um **IPv4 público**, de preferência reservado ou estático quando o provedor oferecer essa opção. Endereço privado, instância somente IPv6 ou gateway NAT apenas de saída não atendem ao requisito de endpoint deste guia.
5. Defina explicitamente o CIDR de origem do SSH, como seu IPv4 público atual seguido de `/32`. Não suponha que o padrão do plugin restringe o acesso. Mudanças entre dados móveis e Wi-Fi podem exigir atualizar essa regra no console da nuvem.

As credenciais da API da nuvem autorizam o gerenciamento dos recursos; as chaves SSH autorizam o acesso ao servidor. São credenciais diferentes. Digite segredos de API somente no formulário protegido de credenciais do provedor, nunca em pedidos por voz, comandos de terminal ou arquivos de código. No fluxo local Android, o código nativo cuida da autenticação no provedor e do armazenamento criptografado das credenciais; elas são enviadas ao provedor quando necessário, não à máquina nem ao executor do plugin. Um modelo de voz offline não permite chamadas à API da nuvem, downloads ou SSH sem acesso à internet.

## Escolha uma nuvem e obtenha um endereço público

Na **configuração pelo console**, entre você mesmo no provedor; o Mobile SSH não precisa das credenciais de API dele. Para o futuro **provisionamento por plugin**, prepare a credencial abaixo com permissões para as operações necessárias de criação, leitura, rede e exclusão. Limite o acesso a um projeto ou implantação dedicada quando possível. As políticas da conta continuam valendo para ambos os métodos.

Crie a máquina Ubuntu escolhida com sua chave SSH pública e aplique a regra SSH da próxima seção. Os links explicam os passos de endereço e autenticação específicos de cada provedor.

<div class="doc-table" tabindex="0" role="region" aria-label="Provedores de nuvem e endereços públicos">

| Provedor | Credencial para provisionamento por API | Configuração do IPv4 público no console |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | Identificador e segredo da chave de acesso; inclua um token de sessão para credenciais temporárias. Conceda as [ações do Lightsail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) necessárias. | Crie uma instância Ubuntu de pilha dupla, selecione a chave SSH RSA e depois aloque e associe um [IPv4 estático na mesma região](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Use `ubuntu` para a imagem Ubuntu. |
| [Google Cloud Compute Engine](./google-cloud/) | Chave JSON de conta de serviço e identificador do projeto. As permissões devem incluir operações de máquinas/discos, rede, endereços e firewall; Network Admin sozinho não pode alterar regras de firewall. Consulte as [permissões IAM](https://docs.cloud.google.com/compute/docs/access/iam). | Ative Compute Engine API, escolha VPC/sub-rede com roteamento para a internet, reserve um [IPv4 externo regional](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address) e associe-o à máquina. Configure o usuário e a chave SSH correspondentes; OS Login exige sua própria configuração de identidade. |
| [Microsoft Azure](./azure/) | Identificador do locatário, identificador da aplicação/cliente, **valor** do segredo de cliente e identificador da assinatura. Conceda permissões de computação/rede; criar um grupo de recursos também exige permissão no escopo superior. Veja a [configuração da entidade de serviço](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Crie um grupo de recursos dedicado e VNet/sub-rede. Associe um [Public IP IPv4 estático Standard](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) à NIC da máquina e vincule um NSG. Use o nome de administrador escolhido na criação. |
| [DigitalOcean](./digitalocean/) | Token de acesso pessoal com os [escopos](https://docs.digitalocean.com/reference/api/create-personal-access-token/) necessários de Droplet, chave SSH, Reserved IP, firewall e operações relacionadas. | Crie um Droplet Ubuntu com a chave SSH pública, atribua um [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) e associe um Cloud Firewall. O usuário inicial do Ubuntu normalmente é `root`. |
| [Hetzner Cloud](./hetzner/) | [Token de API Read & Write](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/) específico do projeto. | Crie um servidor Ubuntu com [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), sua chave SSH e um Cloud Firewall. Use `root`. Confira se o Primary IP separado será mantido ao excluir o servidor. |
| [Akamai / Linode](./linode/) | Token de acesso pessoal com permissões de leitura/escrita para Linodes e Firewalls e os [escopos de leitura](https://techdocs.akamai.com/linode-api/reference/get-started) necessários. | Crie um Linode Ubuntu com IPv4 público e chave SSH, depois associe um [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Use `root`. Mantenha o endereço atribuído durante a vida da instância. |
| [Vultr](./vultr/) | Chave de API com acesso à API habilitado; sua [lista de IPs de origem permitidos](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) deve aceitar a conexão atual do telefone. | Crie uma instância Ubuntu Cloud Compute com IPv4 público principal, chave SSH e Firewall Group. Use `root`. O [endereço atribuído dura toda a vida da instância](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); Reserved IP é uma opção separada. |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | OCIDs do locatário e usuário, impressão digital da chave de API e [chave privada de assinatura RSA](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), com a chave pública de assinatura correspondente registrada. É separada da chave SSH. | Crie VCN, gateway de internet e sub-rede pública com rota para o gateway. Atribua um [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) ao IP privado da VNIC da máquina. Use `ubuntu` para Canonical Ubuntu; configure listas de segurança ou NSG. |
| [OVHcloud Public Cloud](./ovhcloud/) | Chave de aplicação, segredo de aplicação e chave de consumidor validada para o endpoint API EU/CA/US correspondente. Limite os [direitos de API](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) às operações do projeto selecionado. | Crie uma [instância Public Cloud](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) Ubuntu com Basic Public IP por Ext-Net, chave SSH e grupo de segurança. Use `ubuntu`. Floating/Additional IPs são recursos separados. |
| [Scaleway Instances](./scaleway/) | Chave secreta de API de uma aplicação IAM e UUID do projeto, com permissões de instância, volume, IP, grupo de segurança e chave SSH. Veja a [criação de chave de API](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Crie uma instância Ubuntu, associe um [IPv4 flexível roteado na mesma zona](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), configure um grupo de segurança e ligue a máquina. Use o usuário SSH da imagem, normalmente `root`. |

</div>

**Alternativa [AWS EC2](./aws-ec2/):** inicie Ubuntu em uma sub-rede pública com [gateway de internet e rota `0.0.0.0/0` para ele](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), selecione chave SSH e grupo de segurança, depois associe um [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Use `ubuntu`. O adaptador automático local usa Lightsail; EC2 é um caminho pelo console. Um Elastic IP sozinho não torna uma sub-rede privada acessível.

Se uma organização proíbe chaves de contas de serviço, IPs externos ou o método de autenticação SSH escolhido, obtenha uma configuração aprovada pelo administrador. Configurar pelo console não contorna essas restrições.

## Provisione e salve a conexão SSH

No fluxo separado previsto, abra **Plugins**, instale o plugin de provisionamento do provedor por um catálogo confiável, selecione a conta e a região, e escolha tamanho da máquina, imagem, endereço público e chave SSH. Revise recursos e custos antes de confirmar a criação. Um plugin apenas de gerenciamento, sem ação de criação, não faz essa etapa; use o console do provedor.

Espere o provedor informar que a máquina está em execução e o SSH ficar acessível. Guarde os identificadores da máquina, disco, endereço e firewall. Se uma solicitação expirar, inspecione ou retome a operação existente antes de tentar criar novamente, evitando uma segunda máquina cobrada.

Salve a conexão retornada no Mobile SSH ou adicione-a manualmente em **Servidores**: IPv4 público, porta SSH `22`, usuário da imagem e credencial da chave privada correspondente. Compare a impressão digital da chave de host SSH usando o console confiável do provedor antes de conectar. Veja [Primeiros passos](../getting-started/) para verificações de identidade e credenciais salvas.

## Configure as duas camadas de rede

Um endereço público precisa de rota, permissão no firewall da nuvem, permissão no firewall do sistema convidado e um serviço escutando. Use estas regras no firewall ou grupo de segurança do provedor; preserve as regras existentes necessárias no sistema convidado.

- **TCP 22:** permita SSH a partir do CIDR de administração escolhido. Configure durante o provisionamento.
- **UDP 51820:** permita as redes que usarão a VPN. Para clientes em movimento, isso pode ser `0.0.0.0/0`. Adicione na configuração do WireGuard, pelo provisionador ou console.
- **TCP 51821:** mantenha fechado ao público. Publique a interface administrativa do wg-easy somente no loopback do servidor e acesse por um túnel SSH.
- **Tráfego de saída:** permita downloads de pacotes e contêineres, DNS e o tráfego de internet que a VPN deverá transportar.

Confira o [comportamento de firewall do Docker](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): portas publicadas de contêineres podem contornar regras UFW. Não dependa só do UFW para ocultar a interface administrativa e não limpe as cadeias de firewall do provedor, especialmente as regras de armazenamento/iSCSI da OCI.

<a id="wg-easy-install"></a>

## Instale o wg-easy na máquina selecionada

O instalador separado deve aceitar o servidor SSH salvo e pedir aprovação para alterações no servidor. Deve conferir sistema operacional, privilégios, instalações Docker/VPN existentes e conflitos de portas, preservar dados persistentes e informar a versão instalada. Não precisa do segredo da conta de nuvem; use o provisionador ou console para alterar o firewall da nuvem.

O plugin antigo **WireGuard (wg-easy)** do catálogo exige sessão SSH ativa e Docker. Não é o novo instalador automatizado e não promete importação nativa de clientes. Use um instalador atualizado compatível ou siga o caminho manual abaixo no terminal do Mobile SSH, em uma máquina dedicada nova.

### Instalação manual por SSH

Instale Docker Engine e seu plugin Compose pelas [instruções oficiais para Ubuntu](https://docs.docker.com/engine/install/ubuntu/). Depois baixe a configuração da versão indicada no projeto original:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Edite `/opt/wg-easy/compose.yaml` com um editor de terminal com privilégios antes de iniciar. Em `services.wg-easy`, substitua a imagem, descomente ou defina o bloco de ambiente e troque os mapeamentos de portas pelos valores abaixo. Preserve o resto do arquivo original, incluindo volume persistente, montagem de módulos, capacidades, redes e sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

Este é um trecho de substituição, não um arquivo Compose completo; mantenha a indentação YAML dentro do serviço. `INSECURE=true` permite HTTP somente para o túnel SSH de loopback. Não publique a porta administrativa na internet. A escuta do contêiner é diferente do mapeamento de loopback no host. Veja a [configuração HTTP do projeto original](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/).

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

Mantenha os dados de `/etc/wireguard` do contêiner no volume persistente. Não aplique receitas antigas de `PASSWORD`, `PASSWORD_HASH` ou `WG_HOST` à v15; use o assistente de configuração. A imagem foi fixada intencionalmente: atualizar exige revisar uma nova versão e mudar a referência fixada, não apenas executar `pull`.

## Abra a interface administrativa e adicione um cliente

Crie um [encaminhamento local de porta](../port-forwarding/) no Mobile SSH com porta local `51821`, host remoto `127.0.0.1` e porta remota `51821`. Mantenha a conexão SSH ativa e abra `http://127.0.0.1:51821` no mesmo telefone. Se a porta local estiver ocupada, escolha outra e use-a na URL do navegador.

No [assistente da primeira execução](https://wg-easy.github.io/wg-easy/latest/guides/setup/) do wg-easy, crie uma conta administrativa, escolha uma instalação nova e configure o endpoint da VPN com o IPv4 público ou nome DNS da máquina e porta `51820`. O endpoint da VPN não é o endereço de loopback da interface web nem a porta `51821`.

Crie um cliente por dispositivo e baixe seu arquivo WireGuard `.conf`. Quando sua compilação do Mobile SSH oferecer o recurso, abra **VPN → WireGuard**, adicione um perfil, importe o arquivo e salve. O código atual de Android e iOS oferece importação de arquivos; confira a compilação instalada. O fluxo combinado local Android pode importar diretamente, mas isso não é promessa sobre o plugin antigo nem sobre automação no iOS. Arquivos de configuração e códigos QR contêm chaves privadas; mantenha-os privados.

## Verifique a VPN e resolva falhas

Inicie o perfil e aprove a solicitação de VPN do sistema operacional. Confira um handshake recente com o par e contadores de tráfego aumentando, depois teste DNS e as rotas de internet ou rede privada desejadas. Só importar um perfil ou ter um contêiner em execução não comprova que a VPN funciona.

- **Criação da máquina negada:** confira cobrança, cotas, capacidade regional, vencimento das credenciais e permissões IAM exatas. Alterar firewalls do Google Cloud exige permissões além de Network Admin.
- **Tempo limite de SSH:** confira endereço público, roteamento da sub-rede, regras TCP 22 e IP de origem atual do telefone. Falhas de autenticação geralmente exigem o usuário correto da imagem e a chave SSH certa.
- **Interface administrativa indisponível:** mantenha o encaminhamento SSH conectado, confira o estado do contêiner e o mapeamento da porta de loopback, e confirme que HTTP está habilitado somente para o túnel.
- **Sem handshake WireGuard:** confira endpoint do cliente, UDP 51820 nas duas camadas de firewall, chaves do cliente e se o servidor está escutando.
- **Handshake sem tráfego:** inspecione encaminhamento/NAT, DNS, sobreposição de rotas e `AllowedIPs`. O túnel completo IPv4 usa `0.0.0.0/0`; avalie IPv6 separadamente. Uma máquina sem conectividade IPv6 externa não fornece saída IPv6 para a internet, e rotas somente IPv4 podem deixar IPv6 fora da VPN.

## Remova clientes e encerre cobranças da nuvem

Revogue o cliente no wg-easy antes de descartar o perfil local. Excluir um perfil no Mobile SSH não revoga a chave do par no servidor. Faça uma cópia segura da configuração necessária antes de remover o contêiner VPN ou seus dados persistentes.

Use o provisionador responsável ou o console do provedor para excluir uma máquina que não é mais necessária, depois confira discos retidos, snapshots, endereços reservados/públicos e recursos de rede. Revise o conteúdo de um grupo de recursos dedicado do Azure antes de excluí-lo. Mantenha recursos não relacionados fora de implantações gerenciadas por plugins.

Parar uma máquina, cancelar uma tarefa de configuração ou desinstalar o plugin não garante a exclusão dos recursos nem o fim da cobrança. Recursos criados pelo console continuam sendo sua responsabilidade para remoção; guarde os identificadores do provedor até a exclusão ser confirmada.
