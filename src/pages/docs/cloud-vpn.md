---
layout: ../../layouts/DocLayout.astro
title: "Cloud VMs and wg-easy"
description: "Create a public-IP cloud VM, save its SSH connection in Mobile SSH, and install wg-easy as a separate step, with provider credentials, networking and cleanup explained."
---

# Cloud VMs and wg-easy

Create a Linux VM in your own cloud account and run a WireGuard VPN with wg-easy. On compatible Android builds, the published **VPN Setup** plugin can create the VM, install wg-easy and import a client in one guided workflow. You can also create the VM in its provider console and install through Mobile SSH, or use an existing public server.

**Availability — November 19, 2026:** **VPN Setup 1.0.7** is published in the [default plugin catalog](https://github.com/mobile-ssh/mobile-ssh-plugins/tree/main/plugins/vpnsetup). Basic setup requires plugin bridge **1.3.0**, server updates require **1.4.0**, and removing eligible finished entries requires **1.5.0**. Availability depends on your installed Android build and release track; plugin publication does not confirm a particular app release is available to you. Equivalent iOS automation is not established. Use the console and manual instructions below when the plugin is unavailable.

## Choose the guided or manual workflow

- **Create with cloud API:** VPN Setup uses your provider account to create the VM and network resources, saves its SSH connection, installs wg-easy and imports a client. It retains resource IDs and ownership records for later cleanup.
- **Create in cloud console or use an existing server:** create the VM yourself, then provide its public IPv4, SSH username and key to VPN Setup, or follow the manual installation below. The plugin does not need cloud API credentials to install on your server.

The published plugin combines provisioning and installation; separate provisioner and installer plugins remain a planned architecture. API-created resources and servers you bring have different deletion behavior, explained below. A recorded live Hetzner test passed setup, VPN traffic, client management, private administration and cleanup on an Android emulator. That does not establish live acceptance for every provider, account policy or physical phone.

## Prepare your account and server settings

1. Activate a cloud account and billing, choose a region, and check VM, disk and public-IP quotas. Review the provider's current VM, IPv4, storage and traffic charges; no free-tier availability is assumed.
2. For this guide, choose a dedicated **Ubuntu 24.04 LTS** VM with at least **1 GB RAM and 20 GB disk**, using **amd64 or arm64**. These are the setup's baseline choices, not a universal wg-easy minimum. Use a login with root or sudo access; unattended installation needs noninteractive privilege escalation.
3. Select or generate an SSH key, keeping the private key in Mobile SSH. Upload only its public key to the cloud. Lightsail requires an RSA SSH key for its import path. Other providers and images have their own accepted key types. The current iOS SSH client supports Ed25519/ECDSA rather than RSA private keys. For Lightsail on iOS, first use the provider’s browser SSH console to add an app-supported public key to `authorized_keys`, then connect with that key.
4. Choose a **public IPv4**, preferably reserved/static when the provider offers it. A private address, an IPv6-only instance, or an outbound-only NAT gateway does not meet this guide's endpoint requirement.
5. Set the SSH source CIDR explicitly, such as your current public IPv4 followed by `/32`. Do not assume the plugin's default restricts access. Mobile data and Wi-Fi changes may require updating that rule through the cloud console.

The manual path supports the architectures above. VPN Setup currently selects **Ubuntu 24.04 on amd64/x86-64**, connects on **SSH port 22**, and accepts **Ed25519 or RSA** SSH keys; its Lightsail path requires RSA. ECDSA keys, private-only hosts and IPv6-only endpoints are not supported by this workflow. An existing server must have a public IPv4 and allow noninteractive administrative access.

Cloud API credentials authorize resource management; SSH keys authorize server login. Enter API secrets only in the protected native credential form, never in voice prompts, terminal commands or source files. Native code authenticates with approved provider endpoints; secrets do not go to the VM or the plugin worker. Remembered credentials use Android Keystore encryption; if you choose not to remember them, they remain in memory and may need re-entry after the app process ends.

Voice controls can answer supported non-secret questions and report progress, but credential entry and approvals require the screen. Microphone capture pauses for protected credential forms and needs an explicit action to resume. Voice setup requires its opt-in, downloaded local model and microphone permission. An offline voice model does not make cloud API calls, downloads or SSH work without internet access.

## Choose a cloud and obtain a public address

For **console setup**, sign in to the provider yourself; Mobile SSH does not need its API credentials. For **VPN Setup API provisioning**, prepare the credential shown below with permissions for the required create, read, network and delete operations. The plugin implements the ten providers in this table; AWS EC2 is a separate console-only option. Scope access to a dedicated project or deployment where supported. Account policies still apply to both methods.

Create the selected Ubuntu VM with your SSH public key and apply the SSH rule in the next section. The links explain the provider-specific address and authentication steps.

<div class="doc-table" tabindex="0" role="region" aria-label="Cloud providers and public addresses">

| Provider | Credential for API provisioning | Public IPv4 setup in the console |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | Access-key ID and secret; include a session token for temporary credentials. Grant the required [Lightsail actions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html). | Create a dual-stack Ubuntu instance, select the RSA SSH key, then allocate and attach a [static IPv4 in its region](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Use `ubuntu` for the Ubuntu image. |
| [Google Cloud Compute Engine](./google-cloud/) | Service-account JSON key plus project ID. Permissions must include VM/disk, network, address and firewall operations; Compute Network Admin alone cannot write firewall rules. Check [IAM permissions](https://docs.cloud.google.com/compute/docs/access/iam). | Enable Compute Engine API, choose a VPC/subnet with internet routing, reserve a [regional external IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address), and attach it to the VM. Configure the matching SSH username/key; OS Login requires its own identity setup. VPN Setup uses metadata SSH keys and disables OS Login on its VM; if your organization requires OS Login, use an approved console configuration instead. |
| [Microsoft Azure](./azure/) | Tenant ID, application/client ID, client-secret **value** and subscription ID. VPN Setup creates its own deployment resource group: grant group creation/deletion at subscription or parent scope plus compute/network operations. Access limited to an existing group is insufficient. See [service principal setup](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Create a dedicated resource group and VNet/subnet. Attach a [Standard static IPv4 Public IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) to the VM NIC and associate an NSG. Use the administrator username chosen during creation. |
| [DigitalOcean](./digitalocean/) | Personal access token with the required Droplet, SSH-key, Reserved-IP, firewall and related [scopes](https://docs.digitalocean.com/reference/api/create-personal-access-token/). | Create an Ubuntu Droplet with the public SSH key, assign a [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/), and attach a Cloud Firewall. The initial Ubuntu login is normally `root`. |
| [Hetzner Cloud](./hetzner/) | Project-specific [Read & Write API token](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/). | Create an Ubuntu server with a [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), your SSH key and a Cloud Firewall. Use `root`. Check whether the separate Primary IP will be retained when deleting the server. |
| [Akamai / Linode](./linode/) | Personal access token with Linodes and Firewalls read/write permissions and the required [read scopes](https://techdocs.akamai.com/linode-api/reference/get-started). | Create an Ubuntu Linode with a public IPv4 and SSH key, then attach a [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Use `root`. Keep the instance's assigned address for its lifetime. |
| [Vultr](./vultr/) | API key with API access enabled; its [source-IP allowlist](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) must allow the phone's current connection. | Create an Ubuntu Cloud Compute instance with a public main IPv4, SSH key and Firewall Group. Use `root`. The [assigned address lasts for the instance's lifetime](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); a Reserved IP is a separate choice. |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | Tenancy/user OCIDs, API-key fingerprint and [RSA signing private key](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), with the matching public signing key registered. This is separate from the SSH key. | Create a VCN, internet gateway and public subnet with a gateway route. Assign a [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) to the VM's VNIC private IP. Use `ubuntu` for Canonical Ubuntu; configure security lists/NSG. |
| [OVHcloud Public Cloud](./ovhcloud/) | Application key, application secret and validated consumer key for the matching EU/CA/US API endpoint. Limit [API rights](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) to the selected project's operations. | Create an Ubuntu [Public Cloud instance](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) with Basic Public IP through Ext-Net, an SSH key and security group. Use `ubuntu`. Floating/Additional IPs are separate resources. |
| [Scaleway Instances](./scaleway/) | IAM application's API secret key and project UUID, with instance, volume, IP, security-group and SSH-key permissions. See [API key creation](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Create an Ubuntu instance, attach a [flexible routed IPv4 in the same zone](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), configure a security group and power it on. Use the image's SSH login, commonly `root`. |

</div>

**[AWS EC2](./aws-ec2/) alternative:** launch Ubuntu in a public subnet with an [internet gateway and a `0.0.0.0/0` gateway route](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), select an SSH key and security group, then associate an [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Use `ubuntu`. VPN Setup's automatic AWS adapter targets Lightsail; EC2 is a console path. An Elastic IP alone does not make a private subnet reachable.

If an organization prohibits service-account keys, external IPs or your chosen SSH authentication method, obtain an administrator-approved configuration. Console setup does not bypass those restrictions.

## Provision and save the SSH connection

Open **Plugins**, install **VPN Setup** from the default catalog, and open its standalone page. Choose **Set up a VPN**, select a provider, then choose **Create with cloud API** or **Create in cloud console**. For a server you already have, select the existing-public-server option. Enter credentials through the native form, choose or generate an SSH key, and review the location, size, image and SSH source CIDR. Account-backed choices and preflight checks help select supported offerings; they do not reserve capacity or guarantee quota. Review the provider's current prices and approve creation on screen.

Follow the existing operation until the VM and SSH are ready. If a request times out or Android pauses background work, resume or review that operation instead of creating another billable VM. Lost creation responses may require a cloud lookup or console review. Keep the VM, disk, address and firewall resource IDs; a stopped workflow can still have created resources.

VPN Setup requests SSH host-key approval, saves the connection, installs wg-easy and imports its first client. Compare the fingerprint with the provider's trusted console. For manual setup, add the server under **Servers** with its public IPv4, SSH port `22`, image username and matching private key. The automatic Google Cloud and Azure adapters use `ubuntu`; the console guides use the usernames configured there. See [Getting started](../getting-started/) for identity checks and saved credentials.

## Configure the two network layers

A public address needs a route, cloud firewall permission, guest firewall permission and a listening service. Use these rules in the provider's firewall/security group; preserve any required existing guest rules.

- **TCP 22:** allow from your chosen management CIDR for SSH. Configure this while provisioning.
- **UDP 51820:** allow from the networks that will use the VPN. For roaming clients, this may mean `0.0.0.0/0`. VPN Setup configures this for API-created deployments; use the cloud console for a server you bring.
- **TCP 51821:** keep closed publicly. Publish the wg-easy admin UI only on server loopback and reach it through an SSH tunnel.
- **Outbound traffic:** allow package/container downloads, DNS and the internet traffic the VPN is meant to carry.

Check Docker's [firewall behavior](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): published container ports can bypass UFW rules. Do not rely on UFW alone to hide the admin UI, and do not flush provider firewall chains, especially OCI's storage/iSCSI rules.

<a id="wg-easy-install"></a>

## Install wg-easy on the selected VM

After approval, VPN Setup installs its digest-pinned wg-easy release over SSH, installs Docker when needed on Ubuntu 24.04, and creates the first client. It keeps the admin interface on server loopback and preserves provider firewall chains. For a console-created or existing server, configure the cloud firewall yourself; the installer needs SSH access and administrative privileges, not your cloud API secret. Use a fresh dedicated server rather than assuming it can adopt an unrelated VPN installation.

The older **WireGuard (wg-easy)** catalog plugin requires an active SSH session and Docker. It is separate from **VPN Setup** and does not promise native client import. Use VPN Setup on a compatible Android build, or the following manual path from Mobile SSH's terminal on a fresh dedicated VM.

### Manual installation through SSH

Install Docker Engine and its Compose plugin using the official [Ubuntu instructions](https://docs.docker.com/engine/install/ubuntu/). Then download the versioned upstream configuration:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.5.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Edit `/opt/wg-easy/compose.yaml` with a privileged terminal editor before starting it. Under `services.wg-easy`, replace the image, uncomment/set the environment block and replace the port mappings with these values. Keep the rest of the upstream file, including its persistent volume, module mount, capabilities, networks and sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.5.0@sha256:071f79a639e9361123a5e57733107320207b844ddbbd92dfa6962f541fe8aac8
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

This is a replacement fragment, not a complete Compose file; preserve YAML indentation under the service. `INSECURE=true` permits HTTP for the loopback SSH tunnel only. Do not publish the admin port to the internet. The container's listener is different from the host-side loopback mapping. See upstream's [HTTP configuration](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/).

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

Keep `/etc/wireguard` container data in its persistent volume. Do not apply older `PASSWORD`, `PASSWORD_HASH` or `WG_HOST` recipes to v15; use its setup wizard. The image is pinned intentionally: upgrading requires reviewing a new version and changing the pin, not merely running `pull`.

## Open the admin UI and add a client

Create a Mobile SSH [local port forward](../port-forwarding/) with local port `51821`, remote host `127.0.0.1`, and remote port `51821`. Keep the SSH connection active and open `http://127.0.0.1:51821` on the same phone. If that local port is occupied, choose another local port and use it in the browser URL.

In wg-easy's [first-run wizard](https://wg-easy.github.io/wg-easy/latest/guides/setup/), create an administrator account, choose a new installation, and set the VPN endpoint to the VM's public IPv4 or DNS name with port `51820`. The VPN endpoint is not the web UI's loopback address or port `51821`.

Create one client per device and download its WireGuard `.conf`. Where your Mobile SSH build provides it, open **VPN → WireGuard**, add a profile, import the file and save it. Current Android and iOS source support file import; check your installed build. VPN Setup imports its first client directly on compatible Android builds. Its page also offers **Add client**, **Revoke client**, **Export client/QR** and **Open admin** through a private SSH tunnel. This does not establish those capabilities for the older plugin or equivalent iOS automation. Configuration files and QR codes contain private keys; keep them private.

## Verify the VPN and handle failures

Start the profile and approve the operating system's VPN request. Check a recent peer handshake and increasing traffic counters, then test DNS and the intended internet or private-network routes. An imported profile or running container alone does not prove a working VPN.

- **VM creation denied:** check billing, quota, regional capacity, credential expiry and exact IAM permissions. Google Cloud firewall writes need permissions beyond Compute Network Admin; organization-enforced OS Login requires an approved console setup.
- **SSH timeout:** check public address, subnet routing, TCP 22 rules and the phone's current source IP. Authentication failures usually need the correct image username and SSH key.
- **Admin UI unavailable:** keep SSH forwarding connected, check container status and loopback port mapping, and confirm HTTP is enabled only for the tunnel.
- **No WireGuard handshake:** check the client endpoint, UDP 51820 in both firewall layers, client keys and whether the server is listening.
- **Handshake but no traffic:** inspect forwarding/NAT, DNS, route overlap and `AllowedIPs`. Full-tunnel IPv4 uses `0.0.0.0/0`; evaluate IPv6 separately. A VM without upstream IPv6 cannot provide IPv6 internet egress, and IPv4-only routes may leave IPv6 outside the VPN.

## Update the plugin and VPN server

In **Plugins**, use the available **Update** action for a newer compatible version from the same catalog. Review newly requested capabilities. Settings, credentials and deployment records are retained; an unfinished operation continues with the plugin version that started it. A plugin update alone does not update the server's wg-easy container.

On plugin bridge 1.4.0 or newer, **Check server** reports the running wg-easy version and **Update WireGuard** offers the plugin's pinned release. Approve the update on screen. It downloads the image before changing the service and preserves server keys, clients and local profiles. If this phone uses that VPN, the app disconnects it before updating; reconnect afterward. This updates the managed container, not the host operating system.

A failed update distinguishes an image-download failure, a successful rollback and a failed rollback that leaves the VPN down. Follow its recovery check or retry instead of assuming service returned. Manual installations need their own reviewed image-pin change and backup; the fresh-install recipe above is not a migration guide.

## Remove clients and stop cloud charges

Revoke the client in wg-easy before discarding its local profile. Deleting a profile in Mobile SSH does not revoke the server's peer key. Back up required configuration securely before removing the VPN container or its persistent data.

For an API-created deployment, **Delete deployment** reviews and deletes its owned cloud resources through the provider API, even when SSH is unavailable. Check the reported resources still remaining if deletion pauses or fails; resume cleanup or inspect the console. Keep unrelated resources out of a plugin-managed deployment, especially its dedicated Azure resource group.

For a console-created or existing server, plugin deletion removes its managed VPN installation; it does **not** delete your VM or public IP. Delete those in the provider console when no longer needed, then check retained disks, snapshots, addresses and network resources. If account or location settings changed during recovery, inspect the earlier account and location too, including an earlier Scaleway project or Oracle Cloud compartment.

**Stop workflow** stops the operation; it does not delete resources. On bridge 1.5.0 or newer, **Remove from list** is offered only when the app can verify that an entry is eligible to forget, with no unfinished operations or outstanding managed resources. It clears local history, not cloud resources. Stopping a VM or uninstalling the plugin also does not guarantee that charges stop. Keep resource IDs until deletion is confirmed.
