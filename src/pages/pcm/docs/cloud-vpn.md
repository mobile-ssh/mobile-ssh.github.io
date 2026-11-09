---
layout: ../../../layouts/DocLayout.astro
title: "Cloud VMs and wg-easy"
description: "Create cloud VM wey get public IP, save im SSH connection for Mobile SSH, then install wg-easy as separate step, with explanation for provider credentials, network and how to remove resources."
---

# Cloud VMs and wg-easy

Create Linux VM for your own cloud account, connect to am with Mobile SSH, then install wg-easy to run WireGuard VPN. When you separate resource creation from installation, you fit use di same VM for another service or install di VPN for server wey you already get.

**Availability — 8 November 2026:** separate plugins wey go create VMs na di planned workflow wey this guide describe. Di local Android **VPN Setup** implementation wey we review join resource creation, installation and client import together; dem never publish im plugin/catalog changes, and nobody don test real cloud deployments yet. Di separate AWS, Google Cloud and Azure entries currently na manifest/settings stubs; dem never implement di actions to list or control VMs, and dem no dey create VMs. Use di console and manual installation instructions below if your catalog no get creation workflow. Di new native workflow need compatible Android build; equivalent iOS automation never establish.

## Two plugins wey get separate work

- **Cloud provisioner:** e use your provider API to create di VM, public address and network resources wey e need, then save SSH connection. E keep di cloud resource IDs wey you go need to manage or delete dem later.
- **wg-easy installer:** e connect through SSH to di saved server wey you select, install di VPN service and help create client configuration. E need server access and administrator privileges, no be your cloud API credentials. You fit use VM wey you create manually too.

Wetin pass between di plugins suppose contain di saved-server reference, public address, SSH port, username, SSH credential reference and deployment/resource IDs. Cloud secrets and SSH private keys no suppose enter plugin output or di VM. To remove di VPN and to delete di cloud VM na separate operations.

## Prepare your account and server settings

1. Activate cloud account and billing, choose region, then check VM, disk and public-IP quotas. Review di provider current charges for VM, IPv4, storage and traffic; no assume say free tier dey available.
2. For this guide, choose dedicated **Ubuntu 24.04 LTS** VM with at least **1 GB RAM and 20 GB disk**, using **amd64 or arm64**. Na baseline choices for this setup, no be universal wg-easy minimum. Use login wey get root or sudo access; installation wey nobody dey supervise need privilege escalation wey no require interaction.
3. Select or generate SSH key, keep di private key inside Mobile SSH. Upload only di public key to cloud. Lightsail need RSA SSH key for im import path. Other providers and images get their own key types wey dem accept. Di current iOS SSH client support Ed25519/ECDSA private keys instead of RSA. For Lightsail on iOS, first use di provider browser SSH console to add public key wey di app support to `authorized_keys`, then connect with that key.
4. Choose **public IPv4**, preferably reserved/static if di provider offer am. Private address, IPv6-only instance or NAT gateway wey only allow outbound traffic no meet this guide endpoint requirement.
5. Set di SSH source CIDR yourself, like your current public IPv4 followed by `/32`. No assume say di plugin default restrict access. If mobile data or Wi-Fi change, you fit need update that rule through cloud console.

Cloud API credentials authorize resource management; SSH keys authorize server login. Na different credentials dem be. Enter API secrets only for di provider protected credential form, never for voice prompts, terminal commands or source files. For di local Android workflow, native code handle provider authentication and encrypted credential storage; credentials go to their provider where necessary, no be to di VM or plugin worker. Offline voice model no make cloud API calls, downloads or SSH work without internet access.

## Choose cloud and get public address

For **console setup**, sign in to di provider yourself; Mobile SSH no need im API credentials. For future **plugin provisioning**, prepare di credential wey dey below with permissions for di create, read, network and delete operations wey e need. Limit access to dedicated project or deployment where dem support am. Account policies still apply to both methods.

Create di Ubuntu VM wey you select with your SSH public key, then apply di SSH rule for di next section. Di links explain di address and authentication steps for each provider.

<div class="doc-table" tabindex="0" role="region" aria-label="Cloud providers and their public addresses">

| Provider | Credential for API provisioning | How to set public IPv4 for console |
| --- | --- | --- |
| AWS Lightsail | Access-key ID and secret; include session token for temporary credentials. Grant di [Lightsail actions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) wey e need. | Create dual-stack Ubuntu instance, select di RSA SSH key, then allocate and attach [static IPv4 for im region](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Use `ubuntu` for di Ubuntu image. |
| Google Cloud Compute Engine | Service-account JSON key plus project ID. Permissions must cover VM/disk, network, address and firewall operations; Network Admin alone no fit write firewall rules. Check [IAM permissions](https://docs.cloud.google.com/compute/docs/access/iam). | Enable Compute Engine API, choose VPC/subnet wey get internet routing, reserve [regional external IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address), then attach am to di VM. Set di matching SSH username/key; OS Login need im own identity setup. |
| Microsoft Azure | Tenant ID, application/client ID, client-secret **value** and subscription ID. Grant compute/network permissions; to create resource group, you also need permission for im parent scope. See [service principal setup](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Create dedicated resource group and VNet/subnet. Attach [Standard static IPv4 Public IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) to di VM NIC and associate NSG. Use di administrator username wey you choose when you create am. |
| DigitalOcean | Personal access token with di Droplet, SSH-key, Reserved-IP, firewall and related [scopes](https://docs.digitalocean.com/reference/api/create-personal-access-token/) wey e need. | Create Ubuntu Droplet with di public SSH key, assign [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/), then attach Cloud Firewall. Di first Ubuntu login usually na `root`. |
| Hetzner Cloud | [Read & Write API token](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/) wey belong to di project. | Create Ubuntu server with [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), your SSH key and Cloud Firewall. Use `root`. Check whether di separate Primary IP go remain when you delete di server. |
| Akamai / Linode | Personal access token with Linodes and Firewalls read/write permissions and di [read scopes](https://techdocs.akamai.com/linode-api/reference/get-started) wey e need. | Create Ubuntu Linode with public IPv4 and SSH key, then attach [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Use `root`. Keep di assigned address for as long as di instance dey. |
| Vultr | API key with API access enabled; im [source-IP allowlist](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) must allow di phone current connection. | Create Ubuntu Cloud Compute instance with public main IPv4, SSH key and Firewall Group. Use `root`. Di [assigned address go last for di instance lifetime](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); Reserved IP na separate choice. |
| Oracle Cloud Infrastructure | Tenancy/user OCIDs, API-key fingerprint and [RSA signing private key](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), with di matching public signing key registered. This one different from SSH key. | Create VCN, internet gateway and public subnet wey get gateway route. Assign [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) to di VM VNIC private IP. Use `ubuntu` for Canonical Ubuntu; configure security lists/NSG. |
| OVHcloud Public Cloud | Application key, application secret and validated consumer key for di matching EU/CA/US API endpoint. Limit [API rights](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) to di selected project operations. | Create Ubuntu [Public Cloud instance](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) with Basic Public IP through Ext-Net, SSH key and security group. Use `ubuntu`. Floating/Additional IPs na separate resources. |
| Scaleway Instances | IAM application API secret key and project UUID, with instance, volume, IP, security-group and SSH-key permissions. See [how to create API key](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Create Ubuntu instance, attach [flexible routed IPv4 for di same zone](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), configure security group and power am on. Use di image SSH login, usually `root`. |

</div>

**AWS EC2 alternative:** launch Ubuntu for public subnet with [internet gateway and `0.0.0.0/0` route to di gateway](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), select SSH key and security group, then associate [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Use `ubuntu`. Di local automatic adapter target Lightsail; EC2 na console path. Elastic IP alone no make private subnet reachable.

If organization no allow service-account keys, external IPs or di SSH authentication method wey you choose, get configuration wey administrator approve. Console setup no bypass those restrictions.

## Create di resources and save di SSH connection

For di planned separate workflow, open **Plugins**, install di provider provisioning plugin from trusted catalog, select im account and region, then choose VM size, image, public address and SSH key. Review resources and costs before you confirm creation. Management-only plugin wey no get creation action no fit do this step; use di provider console instead.

Wait till di provider report say di VM dey run and SSH become reachable. Keep di VM, disk, address and firewall resource IDs. If request time out, inspect or resume di existing operation before you try creation again, so you no create second VM wey dem go bill you for.

Save di connection wey return for Mobile SSH, or add am yourself under **Servers**: public IPv4, SSH port `22`, di image username and di matching private-key credential. Compare di SSH host-key fingerprint with di provider trusted console before you connect. See [How to start](../getting-started/) for identity checks and saved credentials.

## Configure di two network layers

Public address need route, cloud firewall permission, guest firewall permission and service wey dey listen. Use these rules for di provider firewall/security group; keep any existing guest rules wey still necessary.

- **TCP 22:** allow SSH from di management CIDR wey you choose. Set am when you dey create di resources.
- **UDP 51820:** allow di networks wey go use di VPN. For clients wey dey change network, this fit mean `0.0.0.0/0`. Add am when you set up WireGuard, through di cloud provisioner or console.
- **TCP 51821:** keep am closed to di public. Publish di wg-easy admin UI only for server loopback, then reach am through SSH tunnel.
- **Outbound traffic:** allow package/container downloads, DNS and di internet traffic wey di VPN suppose carry.

Check Docker [firewall behavior](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): container ports wey you publish fit bypass UFW rules. No depend on only UFW to hide di admin UI, and no flush provider firewall chains, especially OCI storage/iSCSI rules.

## Install wg-easy for di VM wey you select

Di separate installer suppose accept di saved SSH server and ask for approval before server changes. E suppose check di OS, privileges, existing Docker/VPN installation and port conflicts, preserve persistent data, then report di version wey e install. E no need di cloud account secret; use di provisioner or console to change cloud firewall.

Di older **WireGuard (wg-easy)** catalog plugin need active SSH session and Docker. E no be di new automated installer and e no promise native client import. Use compatible updated installer, or follow di manual path below from Mobile SSH terminal for fresh dedicated VM.

### Manual installation through SSH

Install Docker Engine and im Compose plugin with di official [Ubuntu instructions](https://docs.docker.com/engine/install/ubuntu/). Then download di configuration for di specified version from di original project:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Edit `/opt/wg-easy/compose.yaml` with terminal editor wey get privileges before you start am. Under `services.wg-easy`, replace di image, uncomment/set di environment block, then replace di port mappings with these values. Keep di rest of di original file, including persistent volume, module mount, capabilities, networks and sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

Na replacement fragment this be, no be complete Compose file; keep di YAML indentation under di service. `INSECURE=true` allow HTTP for di loopback SSH tunnel only. No publish di admin port for internet. Di container listener different from di host-side loopback mapping. See di original project [HTTP configuration](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/).

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

Keep `/etc/wireguard` container data for im persistent volume. No use older `PASSWORD`, `PASSWORD_HASH` or `WG_HOST` recipes for v15; use im setup wizard. We pin di image on purpose: to upgrade, you need review new version and change di pin, no be just run `pull`.

## Open di admin UI and add client

Create Mobile SSH [local port forward](../port-forwarding/) with local port `51821`, remote host `127.0.0.1` and remote port `51821`. Keep di SSH connection active and open `http://127.0.0.1:51821` for di same phone. If that local port already dey in use, choose another local port and put am for di browser URL.

For wg-easy [first-run wizard](https://wg-easy.github.io/wg-easy/latest/guides/setup/), create administrator account, choose new installation, then set di VPN endpoint to di VM public IPv4 or DNS name with port `51820`. Di VPN endpoint no be di web UI loopback address or port `51821`.

Create one client for each device and download im WireGuard `.conf`. If your Mobile SSH build get di feature, open **VPN → WireGuard**, add profile, import di file and save am. Current Android and iOS source support file import; check di build wey you install. Di local Android combined workflow fit import directly, but that no be promise about di older plugin or iOS automation. Configuration files and QR codes contain private keys; keep dem private.

## Verify di VPN and handle failures

Start di profile and approve di operating system VPN request. Check recent peer handshake and traffic counters wey dey increase, then test DNS and di internet or private-network routes wey you want. Imported profile or running container alone no prove say VPN dey work.

- **VM creation denied:** check billing, quota, regional capacity, credential expiry and di exact IAM permissions. Google Cloud firewall writes need permissions beyond Network Admin.
- **SSH timeout:** check public address, subnet routing, TCP 22 rules and di phone current source IP. Authentication failures usually need di correct image username and SSH key.
- **Admin UI no dey available:** keep SSH forwarding connected, check container status and loopback port mapping, then confirm say HTTP dey enabled only for di tunnel.
- **No WireGuard handshake:** check client endpoint, UDP 51820 for both firewall layers, client keys and whether di server dey listen.
- **Handshake dey but no traffic:** inspect forwarding/NAT, DNS, route overlap and `AllowedIPs`. Full-tunnel IPv4 use `0.0.0.0/0`; evaluate IPv6 separately. VM wey no get upstream IPv6 no fit provide IPv6 internet egress, and IPv4-only routes fit leave IPv6 outside di VPN.

## Remove clients and stop cloud charges

Revoke di client for wg-easy before you discard im local profile. To delete profile for Mobile SSH no revoke di server peer key. Back up configuration wey you need securely before you remove di VPN container or im persistent data.

Use di provisioner wey own di deployment or provider console to delete VM wey you no need again, then check disks wey remain, snapshots, reserved/public addresses and network resources. Review wetin dey inside dedicated Azure resource group before you delete di group. Keep unrelated resources outside deployment wey plugin dey manage.

To stop VM, cancel setup job or uninstall plugin no guarantee say resources don delete or charges don stop. Na still your work to clean up resources wey you create for console; keep di provider resource IDs until dem confirm deletion.
