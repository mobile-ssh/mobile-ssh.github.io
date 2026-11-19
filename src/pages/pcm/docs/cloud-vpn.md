---
layout: ../../../layouts/DocLayout.astro
title: "Cloud VMs and wg-easy"
description: "Create cloud VM wey get public IP, save im SSH connection for Mobile SSH, then install wg-easy as separate step, with explanation for provider credentials, network and how to remove resources."
---

# Cloud VMs and wg-easy

Create Linux VM for your own cloud account and run WireGuard VPN with wg-easy. For compatible Android builds, di published **VPN Setup** plugin fit create VM, install wg-easy and import client inside one guided workflow. You fit also create VM for provider console and install through Mobile SSH, or use public server wey you already get.

**Availability — November 19, 2026:** **VPN Setup 1.0.7** don publish for di [default plugin catalog](https://github.com/mobile-ssh/mobile-ssh-plugins/tree/main/plugins/vpnsetup). Basic setup need plugin bridge **1.3.0**, server updates need **1.4.0**, and removing eligible finished entries need **1.5.0**. Availability depend on di Android build wey you install and release track; plugin publication no confirm say particular app release dey available to you. We never establish equivalent iOS automation. Use console and manual instructions below if plugin no dey available.

## Choose guided or manual workflow

- **Create with cloud API:** VPN Setup dey use your provider account to create VM and network resources, save SSH connection, install wg-easy and import client. E dey keep resource IDs and ownership records for cleanup later.
- **Create in cloud console or use an existing server:** create VM yourself, then give VPN Setup im public IPv4, SSH username and key, or follow manual installation below. Plugin no need cloud API login details to install for your server.

Di published plugin dey combine provisioning and installation; separate provisioner and installer plugins still dey planned architecture. Resources wey API create and servers wey you bring get different deletion behavior, as we explain below. One recorded live Hetzner test pass setup, VPN traffic, client management, private administration and cleanup for Android emulator. That no establish live acceptance for every provider, account policy or physical phone.

## Prepare your account and server settings

1. Activate cloud account and billing, choose region, then check VM, disk and public-IP quotas. Review di provider current charges for VM, IPv4, storage and traffic; no assume say free tier dey available.
2. For this guide, choose dedicated **Ubuntu 24.04 LTS** VM with at least **1 GB RAM and 20 GB disk**, using **amd64 or arm64**. Na baseline choices for this setup, no be universal wg-easy minimum. Use login wey get root or sudo access; installation wey nobody dey supervise need privilege escalation wey no require interaction.
3. Select or generate SSH key, keep di private key inside Mobile SSH. Upload only di public key to cloud. Lightsail need RSA SSH key for im import path. Other providers and images get their own key types wey dem accept. Di current iOS SSH client support Ed25519/ECDSA private keys instead of RSA. For Lightsail on iOS, first use di provider browser SSH console to add public key wey di app support to `authorized_keys`, then connect with that key.
4. Choose **public IPv4**, preferably reserved/static if di provider offer am. Private address, IPv6-only instance or NAT gateway wey only allow outbound traffic no meet this guide endpoint requirement.
5. Set di SSH source CIDR yourself, like your current public IPv4 followed by `/32`. No assume say di plugin default restrict access. If mobile data or Wi-Fi change, you fit need update that rule through cloud console.

Manual path support di architectures above. VPN Setup currently dey choose **Ubuntu 24.04 on amd64/x86-64**, connect for **SSH port 22**, and accept **Ed25519 or RSA** SSH keys; im Lightsail path need RSA. ECDSA keys, private-only hosts and IPv6-only endpoints no dey supported for this workflow. Existing server must get public IPv4 and allow noninteractive administrative access.

Cloud API login details dey authorize resource management; SSH keys dey authorize server login. Enter API secrets only for protected native credential form, never for voice prompts, terminal commands or source files. Native code dey authenticate with approved provider endpoints; secrets no dey go VM or plugin worker. Remembered credentials dey use Android Keystore encryption; if you choose not to remember dem, dem stay for memory and you fit need enter dem again after app process end.

Voice controls fit answer supported questions wey no contain secrets and report progress, but credential entry and approvals need screen. Microphone capture dey pause for protected credential forms and need explicit action before e resume. Voice setup need opt-in, downloaded local model and microphone permission. Offline voice model no make cloud API calls, downloads or SSH work without internet.

## Choose cloud and get public address

For **console setup**, sign in to provider yourself; Mobile SSH no need im API login details. For **VPN Setup API provisioning**, prepare di credential below with permission for required create, read, network and delete operations. Plugin implement di ten providers for this table; AWS EC2 na separate console-only option. Limit access to dedicated project or deployment where provider support am. Account policies still apply to both methods.

Create di Ubuntu VM wey you select with your SSH public key, then apply di SSH rule for di next section. Di links explain di address and authentication steps for each provider.

<div class="doc-table" tabindex="0" role="region" aria-label="Cloud providers and their public addresses">

| Provider | Credential for API provisioning | How to set public IPv4 for console |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | Access-key ID and secret; include session token for temporary credentials. Grant di [Lightsail actions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) wey e need. | Create dual-stack Ubuntu instance, select di RSA SSH key, then allocate and attach [static IPv4 for im region](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Use `ubuntu` for di Ubuntu image. |
| [Google Cloud Compute Engine](./google-cloud/) | Service-account JSON key plus project ID. Permissions must cover VM/disk, network, address and firewall work; Compute Network Admin alone no fit write firewall rules. Check [IAM permissions](https://docs.cloud.google.com/compute/docs/access/iam). | Enable Compute Engine API, choose VPC/subnet with internet routing, reserve [regional external IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address), and attach am to VM. Set matching SSH username/key; OS Login need im own identity setup. VPN Setup dey use metadata SSH keys and disable OS Login for im VM; if your organization require OS Login, use approved console configuration instead. |
| [Microsoft Azure](./azure/) | Tenant ID, application/client ID, client-secret **value** and subscription ID. VPN Setup dey create im own deployment resource group: grant group creation/deletion for subscription or parent scope, plus compute/network operations. Access wey stop for existing group no enough. See [service principal setup](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Create dedicated resource group and VNet/subnet. Attach [Standard static IPv4 Public IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) to VM NIC and associate NSG. Use di administrator username wey you choose during creation. |
| [DigitalOcean](./digitalocean/) | Personal access token with di Droplet, SSH-key, Reserved-IP, firewall and related [scopes](https://docs.digitalocean.com/reference/api/create-personal-access-token/) wey e need. | Create Ubuntu Droplet with di public SSH key, assign [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/), then attach Cloud Firewall. Di first Ubuntu login usually na `root`. |
| [Hetzner Cloud](./hetzner/) | [Read & Write API token](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/) wey belong to di project. | Create Ubuntu server with [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), your SSH key and Cloud Firewall. Use `root`. Check whether di separate Primary IP go remain when you delete di server. |
| [Akamai / Linode](./linode/) | Personal access token with Linodes and Firewalls read/write permissions and di [read scopes](https://techdocs.akamai.com/linode-api/reference/get-started) wey e need. | Create Ubuntu Linode with public IPv4 and SSH key, then attach [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Use `root`. Keep di assigned address for as long as di instance dey. |
| [Vultr](./vultr/) | API key with API access enabled; im [source-IP allowlist](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) must allow di phone current connection. | Create Ubuntu Cloud Compute instance with public main IPv4, SSH key and Firewall Group. Use `root`. Di [assigned address go last for di instance lifetime](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); Reserved IP na separate choice. |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | Tenancy/user OCIDs, API-key fingerprint and [RSA signing private key](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), with di matching public signing key registered. This one different from SSH key. | Create VCN, internet gateway and public subnet wey get gateway route. Assign [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) to di VM VNIC private IP. Use `ubuntu` for Canonical Ubuntu; configure security lists/NSG. |
| [OVHcloud Public Cloud](./ovhcloud/) | Application key, application secret and validated consumer key for di matching EU/CA/US API endpoint. Limit [API rights](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) to di selected project operations. | Create Ubuntu [Public Cloud instance](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) with Basic Public IP through Ext-Net, SSH key and security group. Use `ubuntu`. Floating/Additional IPs na separate resources. |
| [Scaleway Instances](./scaleway/) | IAM application API secret key and project UUID, with instance, volume, IP, security-group and SSH-key permissions. See [how to create API key](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Create Ubuntu instance, attach [flexible routed IPv4 for di same zone](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), configure security group and power am on. Use di image SSH login, usually `root`. |

</div>

**[AWS EC2](./aws-ec2/) alternative:** launch Ubuntu for public subnet with [internet gateway and `0.0.0.0/0` gateway route](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), choose SSH key and security group, then associate [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Use `ubuntu`. VPN Setup automatic AWS adapter dey target Lightsail; EC2 na console path. Elastic IP alone no make private subnet reachable.

If organization no allow service-account keys, external IPs or di SSH authentication method wey you choose, get configuration wey administrator approve. Console setup no bypass those restrictions.

## Create di resources and save di SSH connection

Open **Plugins**, install **VPN Setup** from default catalog and open im standalone page. Choose **Set up a VPN**, select provider, then choose **Create with cloud API** or **Create in cloud console**. For server wey you already get, select existing-public-server option. Enter credentials through native form, choose or generate SSH key, and review location, size, image and SSH source CIDR. Account-backed choices and preflight checks dey help select supported offerings; dem no reserve capacity or guarantee quota. Check provider current prices and approve creation for screen.

Follow existing operation until VM and SSH ready. If request time out or Android pause background work, resume or review that operation instead of creating another billable VM. If creation response lost, you fit need cloud lookup or console review. Keep VM, disk, address and firewall resource IDs; workflow wey stop fit still don create resources.

VPN Setup dey request SSH host-key approval, save connection, install wg-easy and import im first client. Compare fingerprint with provider trusted console. For manual setup, add server under **Servers** with public IPv4, SSH port `22`, image username and matching private key. Automatic Google Cloud and Azure adapters dey use `ubuntu`; console guides dey use usernames wey you configure there. See [Getting started](../getting-started/) for identity checks and saved login details.

## Configure di two network layers

Public address need route, cloud firewall permission, guest firewall permission and service wey dey listen. Use these rules for di provider firewall/security group; keep any existing guest rules wey still necessary.

- **TCP 22:** allow from management CIDR wey you choose for SSH. Set this during provisioning.
- **UDP 51820:** allow networks wey go use VPN. For roaming clients, this fit mean `0.0.0.0/0`. VPN Setup dey configure am for API-created deployments; use cloud console for server wey you bring.
- **TCP 51821:** keep am closed publicly. Publish wg-easy admin UI only for server loopback and reach am through SSH tunnel.
- **Outbound traffic:** allow package/container downloads, DNS and internet traffic wey VPN suppose carry.

Check Docker [firewall behavior](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): container ports wey you publish fit bypass UFW rules. No depend on only UFW to hide di admin UI, and no flush provider firewall chains, especially OCI storage/iSCSI rules.

<a id="wg-easy-install"></a>

## Install wg-easy for di VM wey you select

After approval, VPN Setup dey install im digest-pinned wg-easy release through SSH, install Docker when Ubuntu 24.04 need am, and create first client. E keep admin interface for server loopback and preserve provider firewall chains. For console-created or existing server, configure cloud firewall yourself; installer need SSH access and administrative privileges, no be your cloud API secret. Use fresh dedicated server; no assume say e fit adopt unrelated VPN installation.

Di older **WireGuard (wg-easy)** catalog plugin need active SSH session and Docker. E dey separate from **VPN Setup** and no promise native client import. Use VPN Setup for compatible Android build, or follow manual path below from Mobile SSH terminal for fresh dedicated VM.

### Manual installation through SSH

Install Docker Engine and im Compose plugin with di official [Ubuntu instructions](https://docs.docker.com/engine/install/ubuntu/). Then download di configuration for di specified version from di original project:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.5.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Edit `/opt/wg-easy/compose.yaml` with terminal editor wey get privileges before you start am. Under `services.wg-easy`, replace di image, uncomment/set di environment block, then replace di port mappings with these values. Keep di rest of di original file, including persistent volume, module mount, capabilities, networks and sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.5.0@sha256:071f79a639e9361123a5e57733107320207b844ddbbd92dfa6962f541fe8aac8
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

Create one client for each device and download im WireGuard `.conf`. Where your Mobile SSH build provide am, open **VPN → WireGuard**, add profile, import file and save am. Current Android and iOS source support file import; check di build wey you install. VPN Setup dey import first client directly for compatible Android builds. Im page still offer **Add client**, **Revoke client**, **Export client/QR** and **Open admin** through private SSH tunnel. This no establish those capabilities for older plugin or equivalent iOS automation. Configuration files and QR codes get private keys; keep dem private.

## Verify di VPN and handle failures

Start di profile and approve di operating system VPN request. Check recent peer handshake and traffic counters wey dey increase, then test DNS and di internet or private-network routes wey you want. Imported profile or running container alone no prove say VPN dey work.

- **VM creation denied:** check billing, quota, regional capacity, credential expiry and exact IAM permissions. Google Cloud firewall writes need permissions beyond Compute Network Admin; OS Login wey organization enforce need approved console setup.
- **SSH timeout:** check public address, subnet routing, TCP 22 rules and phone current source IP. Authentication failures usually need correct image username and SSH key.
- **Admin UI unavailable:** keep SSH forwarding connected, check container status and loopback port mapping, and confirm say HTTP dey enabled only for tunnel.
- **No WireGuard handshake:** check client endpoint, UDP 51820 for both firewall layers, client keys and whether server dey listen.
- **Handshake but no traffic:** check forwarding/NAT, DNS, route overlap and `AllowedIPs`. Full-tunnel IPv4 dey use `0.0.0.0/0`; evaluate IPv6 separately. VM without upstream IPv6 no fit provide IPv6 internet egress, and IPv4-only routes fit leave IPv6 outside VPN.

## Update plugin and VPN server

For **Plugins**, use available **Update** action for newer compatible version from same catalog. Review new capabilities wey e request. Settings, credentials and deployment records dey stay; unfinished operation dey continue with plugin version wey start am. Plugin update alone no dey update server wg-easy container.

For plugin bridge 1.4.0 or newer, **Check server** dey report running wg-easy version and **Update WireGuard** dey offer plugin pinned release. Approve update for screen. E dey download image before changing service, and preserve server keys, clients and local profiles. If this phone dey use that VPN, app go disconnect am before updating; reconnect afterward. This dey update managed container, no be host operating system.

Failed update dey distinguish image-download failure, successful rollback and failed rollback wey leave VPN down. Follow im recovery check or retry; no assume say service don return. Manual installations need their own reviewed image-pin change and backup; fresh-install recipe above no be migration guide.

## Remove clients and stop cloud charges

Revoke di client for wg-easy before you discard im local profile. To delete profile for Mobile SSH no revoke di server peer key. Back up configuration wey you need securely before you remove di VPN container or im persistent data.

For API-created deployment, **Delete deployment** dey review and delete im owned cloud resources through provider API, even when SSH no dey available. Check reported resources wey still remain if deletion pause or fail; resume cleanup or inspect console. Keep unrelated resources outside plugin-managed deployment, especially im dedicated Azure resource group.

For console-created or existing server, plugin deletion dey remove im managed VPN installation; e **no** delete your VM or public IP. Delete those for provider console when you no need dem again, then check disks, snapshots, addresses and network resources wey remain. If account or location settings change during recovery, check earlier account and location too, including earlier Scaleway project or Oracle Cloud compartment.

**Stop workflow** dey stop operation; e no delete resources. For bridge 1.5.0 or newer, **Remove from list** dey appear only when app fit verify say entry fit be forgotten, with no unfinished operations or outstanding managed resources. E clear local history, no be cloud resources. Stopping VM or uninstalling plugin still no guarantee say charges go stop. Keep resource IDs until deletion confirm.
