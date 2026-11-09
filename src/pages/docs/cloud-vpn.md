---
layout: ../../layouts/DocLayout.astro
title: "Cloud VMs and wg-easy"
description: "Create a public-IP cloud VM, save its SSH connection in Mobile SSH, and install wg-easy as a separate step, with provider credentials, networking and cleanup explained."
---

# Cloud VMs and wg-easy

Create a Linux VM in your own cloud account, connect to it with Mobile SSH, then install wg-easy to run a WireGuard VPN. Keeping provisioning and installation separate lets you use the same VM for another service, or install the VPN on a server you already have.

**Availability — November 8, 2026:** separate VM-creation plugins are the intended workflow described below. The reviewed local Android **VPN Setup** implementation combines provisioning, installation and client import; its plugin/catalog changes are unpublished and live cloud deployments remain untested. The separate AWS, Google Cloud and Azure entries are currently manifest/settings stubs; their VM listing and control actions are not implemented, and they do not create VMs. Use the console and manual installation instructions below when your catalog has no creation workflow. The new native workflow requires a compatible Android build; equivalent iOS automation is not established.

## Two plugins with separate responsibilities

- **Cloud provisioner:** uses your provider's API to create the VM, public address and necessary network resources, then saves an SSH connection. It retains the cloud resource IDs needed for later management or deletion.
- **wg-easy installer:** connects to a selected saved server over SSH, installs the VPN service and helps create a client configuration. It needs server access and administrative privileges, not your cloud API credentials. A manually created VM can be used here too.

The handoff should contain the saved-server reference, public address, SSH port, username, SSH credential reference and deployment/resource IDs. Cloud secrets and SSH private keys should not be copied into plugin output or onto the VM. Removing the VPN and deleting the cloud VM are separate operations.

## Prepare your account and server settings

1. Activate a cloud account and billing, choose a region, and check VM, disk and public-IP quotas. Review the provider's current VM, IPv4, storage and traffic charges; no free-tier availability is assumed.
2. For this guide, choose a dedicated **Ubuntu 24.04 LTS** VM with at least **1 GB RAM and 20 GB disk**, using **amd64 or arm64**. These are the setup's baseline choices, not a universal wg-easy minimum. Use a login with root or sudo access; unattended installation needs noninteractive privilege escalation.
3. Select or generate an SSH key, keeping the private key in Mobile SSH. Upload only its public key to the cloud. Lightsail requires an RSA SSH key for its import path. Other providers and images have their own accepted key types. The current iOS SSH client supports Ed25519/ECDSA rather than RSA private keys. For Lightsail on iOS, first use the provider’s browser SSH console to add an app-supported public key to `authorized_keys`, then connect with that key.
4. Choose a **public IPv4**, preferably reserved/static when the provider offers it. A private address, an IPv6-only instance, or an outbound-only NAT gateway does not meet this guide's endpoint requirement.
5. Set the SSH source CIDR explicitly, such as your current public IPv4 followed by `/32`. Do not assume the plugin's default restricts access. Mobile data and Wi-Fi changes may require updating that rule through the cloud console.

Cloud API credentials authorize resource management; SSH keys authorize server login. They are different credentials. Enter API secrets only in the provider's protected credential form, never in voice prompts, terminal commands or source files. In the local Android workflow, native code handles provider authentication and encrypted credential storage; credentials are sent to their provider where required, not to the VM or the plugin worker. An offline voice model does not make cloud API calls, downloads or SSH work without internet access.

## Choose a cloud and obtain a public address

For **console setup**, sign in to the provider yourself; Mobile SSH does not need its API credentials. For future **plugin provisioning**, prepare the credential shown below with permissions for the required create, read, network and delete operations. Scope access to a dedicated project or deployment where supported. Account policies still apply to both methods.

Create the selected Ubuntu VM with your SSH public key and apply the SSH rule in the next section. The links explain the provider-specific address and authentication steps.

<div class="doc-table" tabindex="0" role="region" aria-label="Cloud providers and public addresses">

| Provider | Credential for API provisioning | Public IPv4 setup in the console |
| --- | --- | --- |
| AWS Lightsail | Access-key ID and secret; include a session token for temporary credentials. Grant the required [Lightsail actions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html). | Create a dual-stack Ubuntu instance, select the RSA SSH key, then allocate and attach a [static IPv4 in its region](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Use `ubuntu` for the Ubuntu image. |
| Google Cloud Compute Engine | Service-account JSON key plus project ID. Permissions must include VM/disk, network, address and firewall operations; Network Admin alone cannot write firewall rules. Check [IAM permissions](https://docs.cloud.google.com/compute/docs/access/iam). | Enable Compute Engine API, choose a VPC/subnet with internet routing, reserve a [regional external IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address), and attach it to the VM. Configure the matching SSH username/key; OS Login requires its own identity setup. |
| Microsoft Azure | Tenant ID, application/client ID, client-secret **value** and subscription ID. Grant compute/network permissions; creating a resource group also requires permission at its parent scope. See [service principal setup](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Create a dedicated resource group and VNet/subnet. Attach a [Standard static IPv4 Public IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) to the VM NIC and associate an NSG. Use the administrator username chosen during creation. |
| DigitalOcean | Personal access token with the required Droplet, SSH-key, Reserved-IP, firewall and related [scopes](https://docs.digitalocean.com/reference/api/create-personal-access-token/). | Create an Ubuntu Droplet with the public SSH key, assign a [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/), and attach a Cloud Firewall. The initial Ubuntu login is normally `root`. |
| Hetzner Cloud | Project-specific [Read & Write API token](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/). | Create an Ubuntu server with a [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), your SSH key and a Cloud Firewall. Use `root`. Check whether the separate Primary IP will be retained when deleting the server. |
| Akamai / Linode | Personal access token with Linodes and Firewalls read/write permissions and the required [read scopes](https://techdocs.akamai.com/linode-api/reference/get-started). | Create an Ubuntu Linode with a public IPv4 and SSH key, then attach a [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Use `root`. Keep the instance's assigned address for its lifetime. |
| Vultr | API key with API access enabled; its [source-IP allowlist](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) must allow the phone's current connection. | Create an Ubuntu Cloud Compute instance with a public main IPv4, SSH key and Firewall Group. Use `root`. The [assigned address lasts for the instance's lifetime](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); a Reserved IP is a separate choice. |
| Oracle Cloud Infrastructure | Tenancy/user OCIDs, API-key fingerprint and [RSA signing private key](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), with the matching public signing key registered. This is separate from the SSH key. | Create a VCN, internet gateway and public subnet with a gateway route. Assign a [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) to the VM's VNIC private IP. Use `ubuntu` for Canonical Ubuntu; configure security lists/NSG. |
| OVHcloud Public Cloud | Application key, application secret and validated consumer key for the matching EU/CA/US API endpoint. Limit [API rights](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) to the selected project's operations. | Create an Ubuntu [Public Cloud instance](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) with Basic Public IP through Ext-Net, an SSH key and security group. Use `ubuntu`. Floating/Additional IPs are separate resources. |
| Scaleway Instances | IAM application's API secret key and project UUID, with instance, volume, IP, security-group and SSH-key permissions. See [API key creation](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Create an Ubuntu instance, attach a [flexible routed IPv4 in the same zone](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), configure a security group and power it on. Use the image's SSH login, commonly `root`. |

</div>

**AWS EC2 alternative:** launch Ubuntu in a public subnet with an [internet gateway and a `0.0.0.0/0` gateway route](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), select an SSH key and security group, then associate an [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Use `ubuntu`. The local automatic adapter targets Lightsail; EC2 is a console path. An Elastic IP alone does not make a private subnet reachable.

If an organization prohibits service-account keys, external IPs or your chosen SSH authentication method, obtain an administrator-approved configuration. Console setup does not bypass those restrictions.

## Provision and save the SSH connection

In the intended split workflow, open **Plugins**, install the provider's provisioning plugin from a trusted catalog, select its account and region, and choose the VM size, image, public address and SSH key. Review the resources and costs before confirming creation. A management-only plugin without a creation action cannot perform this step; use the provider console instead.

Wait for the provider to report the VM running and for SSH to become reachable. Keep the VM, disk, address and firewall resource IDs. If a request times out, inspect or resume the existing operation before retrying creation so you do not create a second billable VM.

Save the returned connection in Mobile SSH, or add it manually under **Servers**: public IPv4, SSH port `22`, the image's username, and the matching private-key credential. Compare its SSH host-key fingerprint using the provider's trusted console before connecting. See [Getting started](../getting-started/) for identity checks and saved credentials.

## Configure the two network layers

A public address needs a route, cloud firewall permission, guest firewall permission and a listening service. Use these rules in the provider's firewall/security group; preserve any required existing guest rules.

- **TCP 22:** allow from your chosen management CIDR for SSH. Configure this while provisioning.
- **UDP 51820:** allow from the networks that will use the VPN. For roaming clients, this may mean `0.0.0.0/0`. Add it when setting up WireGuard, through the cloud provisioner or console.
- **TCP 51821:** keep closed publicly. Publish the wg-easy admin UI only on server loopback and reach it through an SSH tunnel.
- **Outbound traffic:** allow package/container downloads, DNS and the internet traffic the VPN is meant to carry.

Check Docker's [firewall behavior](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): published container ports can bypass UFW rules. Do not rely on UFW alone to hide the admin UI, and do not flush provider firewall chains, especially OCI's storage/iSCSI rules.

## Install wg-easy on the selected VM

The separate installer should accept the saved SSH server and request approval for server changes. It should check the OS, privileges, existing Docker/VPN installation and port conflicts, preserve persistent data, and report the installed version. It does not need the cloud account secret; use the provisioner or console for cloud firewall changes.

The older **WireGuard (wg-easy)** catalog plugin requires an active SSH session and Docker. It is not the new automated installer and does not promise native client import. Use a compatible updated installer, or the following manual path from Mobile SSH's terminal on a fresh dedicated VM.

### Manual installation through SSH

Install Docker Engine and its Compose plugin using the official [Ubuntu instructions](https://docs.docker.com/engine/install/ubuntu/). Then download the versioned upstream configuration:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Edit `/opt/wg-easy/compose.yaml` with a privileged terminal editor before starting it. Under `services.wg-easy`, replace the image, uncomment/set the environment block and replace the port mappings with these values. Keep the rest of the upstream file, including its persistent volume, module mount, capabilities, networks and sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
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

Create one client per device and download its WireGuard `.conf`. Where your Mobile SSH build provides it, open **VPN → WireGuard**, add a profile, import the file and save it. Current Android and iOS source support file import; check your installed build. The local Android combined workflow can import directly, but that is not a promise about the older plugin or iOS automation. Configuration files and QR codes contain private keys; keep them private.

## Verify the VPN and handle failures

Start the profile and approve the operating system's VPN request. Check a recent peer handshake and increasing traffic counters, then test DNS and the intended internet or private-network routes. An imported profile or running container alone does not prove a working VPN.

- **VM creation denied:** check billing, quota, regional capacity, credential expiry and exact IAM permissions. Google Cloud firewall writes need permissions beyond Network Admin.
- **SSH timeout:** check public address, subnet routing, TCP 22 rules and the phone's current source IP. Authentication failures usually need the correct image username and SSH key.
- **Admin UI unavailable:** keep SSH forwarding connected, check container status and loopback port mapping, and confirm HTTP is enabled only for the tunnel.
- **No WireGuard handshake:** check the client endpoint, UDP 51820 in both firewall layers, client keys and whether the server is listening.
- **Handshake but no traffic:** inspect forwarding/NAT, DNS, route overlap and `AllowedIPs`. Full-tunnel IPv4 uses `0.0.0.0/0`; evaluate IPv6 separately. A VM without upstream IPv6 cannot provide IPv6 internet egress, and IPv4-only routes may leave IPv6 outside the VPN.

## Remove clients and stop cloud charges

Revoke the client in wg-easy before discarding its local profile. Deleting a profile in Mobile SSH does not revoke the server's peer key. Back up required configuration securely before removing the VPN container or its persistent data.

Use the owning provisioner or provider console to delete a VM you no longer need, then check retained disks, snapshots, reserved/public addresses and network resources. Review a dedicated Azure resource group's contents before deleting the group. Keep unrelated resources out of a plugin-managed deployment.

Stopping a VM, canceling a setup job or uninstalling the plugin does not guarantee that resources are deleted or charges stop. Console-created resources remain yours to clean up; keep the provider's resource IDs until deletion is confirmed.
