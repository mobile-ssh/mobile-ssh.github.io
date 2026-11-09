import type { CloudGuides } from "./types";

export const en: CloudGuides = {
  "title": "Create a VM on {provider}",
  "description": "Step-by-step {provider} VM creation, public IPv4, firewall rules, SSH access from Mobile SSH, optional API credentials and cleanup.",
  "intro": "Create an Ubuntu server with a public IPv4 in your own {provider} account. Follow the console steps, connect from Mobile SSH, then install wg-easy as a separate task.",
  "back": "Cloud VMs and wg-easy",
  "indexHeading": "Step-by-step cloud provider guides",
  "indexIntro": "Choose your provider for its console screens, public-IP settings, SSH login, optional API credentials and cleanup. AWS Lightsail and EC2 have separate walkthroughs.",
  "cardAction": "Create a VM and connect with Mobile SSH",
  "navLabel": "Choose a cloud provider",
  "openConsole": "Open the provider console",
  "availability": "These instructions use the provider's console. Separate VM-creation plugins are planned; the combined Android VPN Setup implementation is local and unpublished. The API section prepares future access and is unnecessary for this manual route.",
  "availabilityLink": "Check plugin availability",
  "checked": "Console documentation checked November 8, 2026.",
  "beforeHeading": "Before you start",
  "before": [
    "Activate billing and check regional VM, disk and public-IP quotas. Review the displayed price before creating resources; do not assume a free tier or a particular plan is available.",
    "Use Ubuntu 24.04 LTS with at least 1 GB RAM and 20 GB storage for this setup, or a larger provider minimum. Match the CPU architecture to the image. This is the guide's baseline, not a universal wg-easy minimum.",
    "Keep an SSH private key in Mobile SSH and upload only its public key. Ed25519 works with the current Android and iOS clients; Lightsail's RSA import and iOS workaround are covered in its steps. Record your current public IPv4 followed by <code>/32</code> as the SSH source, or use your approved management CIDR."
  ],
  "networkHeading": "Network rules for this setup",
  "networkRules": [
    "Allow inbound <code>TCP 22</code> from the management CIDR. Remove broader SSH allow rules if they are not required; adding a narrow rule does not automatically cancel a wider one. Update the source when your phone's public address changes.",
    "For the later VPN step, allow inbound <code>UDP 51820</code> from VPN-client networks; roaming clients may need <code>0.0.0.0/0</code>. Configure IPv6 rules deliberately if you enable IPv6.",
    "Keep public <code>TCP 51821</code> closed. The wg-easy admin interface will bind to server loopback and be reached through SSH forwarding.",
    "Permit the necessary outbound DNS, package/container downloads and VPN traffic. Check both cloud and guest firewalls; preserve provider storage and essential ICMP rules."
  ],
  "stepsHeading": "Create the server and connect",
  "sourceLink": "Provider instructions",
  "connectHeading": "Save the server in Mobile SSH",
  "connectText": "Open Servers, add a server and fill in these values. Select the credential containing the matching private key. Use the username you configured if it differs from the guide's example.",
  "hostLabel": "Host",
  "hostValue": "The VM's public IPv4 from the provider console",
  "portLabel": "Port",
  "userLabel": "Username",
  "credentialLabel": "Authentication",
  "credentialValue": "The matching SSH private-key credential",
  "identityText": "Obtain the SSH host-key fingerprint through the provider's trusted console or boot logs and compare it before trusting the connection. On Android, disable automatic acceptance of new identities if you want to review first use. Investigate changed-key warnings before replacing a saved identity.",
  "connectionGuide": "SSH keys and identity checks",
  "vpnHeading": "Install wg-easy as a separate step",
  "vpnText": "First confirm the saved server opens a terminal and your login has root or sudo access. Then follow the shared wg-easy installation guide: Docker, a pinned container, private administration over SSH, client creation and VPN verification. The installer needs SSH access, not your cloud API secret.",
  "vpnLink": "Continue to the wg-easy installation steps",
  "apiHeading": "Optional API credentials for a future plugin",
  "apiIntro": "Skip this section for console setup. Create credentials only when a compatible provisioner requires them. The permission lists below are preparation guidance, not tested minimum policies for a released plugin.",
  "apiSecretNote": "Enter credentials only in a supported protected form. Do not put cloud secrets into voice prompts, terminal commands or the VM. Use the narrowest supported scope, record expiry, and revoke credentials you no longer need.",
  "cleanupHeading": "Delete resources you no longer need",
  "cleanupWarning": "Stopping the VM, canceling a setup job or removing a Mobile SSH profile does not delete cloud resources or guarantee that charges stop. Keep resource IDs until deletion is confirmed, and retain unrelated resources.",
  "providers": {
    "aws-lightsail": {
      "consoleSteps": [
        "Sign in to your AWS account, open Lightsail, and select <strong>Create instance</strong>. Choose the region closest to your intended VPN location.",
        "Select <strong>Linux/Unix → OS Only → Ubuntu 24.04 LTS</strong>. Choose a dual-stack IPv4/IPv6 plan with at least 1 GB RAM and 20 GB storage; review its displayed price.",
        "Choose the regional SSH key pair or upload your RSA public key. Keep its private key securely, name the instance, and select <strong>Create instance</strong>. iOS needs the additional key setup below.",
        "Open <strong>Networking → Create static IP</strong>. Select the same region, attach the address to this instance, give it a name, and create it. Record the static IPv4.",
        "In the instance’s <strong>Networking</strong> tab, restrict SSH to your phone’s public IPv4, preserving <strong>Allow Lightsail browser SSH/RDP</strong>. Add the shared UDP 51820 rule; review IPv6 rules separately and leave TCP 51821 closed.",
        "For iOS, select <strong>Connect → Connect using SSH</strong>. Add your app’s Ed25519 public key as a new line in <code>/home/ubuntu/.ssh/authorized_keys</code>, preserving existing keys. Browser SSH uses a separate provider key; your static IPv4 is now ready."
      ],
      "apiSteps": [
        "For a future provisioner only, create a dedicated IAM identity with the required Lightsail instance, SSH-key, static-IP and firewall actions, including cleanup. Restrict region and resources where supported; this is not a tested minimum policy.",
        "Under <strong>IAM → Users → Security credentials</strong>, create an access key only when supported automation needs it. Supply its ID and secret through the protected native form; temporary credentials also require their session token. Never use root keys."
      ],
      "cleanupSteps": [
        "Delete the instance when finished. Review retained snapshots and disks separately; stopping an instance does not end all charges.",
        "Release the static IP separately after detaching it. Deleting its instance does not delete the address."
      ]
    },
    "aws-ec2": {
      "consoleSteps": [
        "Open EC2 in your AWS region and select <strong>Launch instance</strong>. Name the server and choose an official Canonical <strong>Ubuntu Server 24.04 LTS</strong> AMI, checking its publisher and architecture.",
        "Select an instance type with at least 1 GB RAM and matching architecture. Under <strong>Configure storage</strong>, choose at least 20 GB for the boot volume and review the estimated resource costs.",
        "Under <strong>Key pair</strong>, select an existing key or create/import an Ed25519 key pair for Linux. Keep the matching private key available in the app; AWS installs the public key on the instance.",
        "In <strong>Network settings</strong>, choose a public subnet. Its VPC needs an attached internet gateway and a route <code>0.0.0.0/0</code> to that gateway. Enable a public IPv4; the static address follows below.",
        "Create or select a security group with the shared TCP 22 and UDP 51820 rules. Restrict SSH to your phone’s public IPv4, leave TCP 51821 closed, then select <strong>Launch instance</strong> and wait for it to run.",
        "Open <strong>Network &amp; Security → Elastic IPs → Allocate Elastic IP address</strong>. Then select <strong>Actions → Associate Elastic IP address</strong> and choose this instance and its primary private IP. Record the static IPv4; public IPv4 addresses incur charges."
      ],
      "apiSteps": [
        "For a future provisioner only, create a dedicated IAM identity covering instance creation, related AMI/network/disk/key resources, tagging, Elastic IPs and cleanup. Existing read/start/stop permissions are insufficient. Add <code>iam:PassRole</code> only if attaching an instance profile.",
        "Create or obtain that identity’s credentials and supply them only through supported protected native settings. Prefer temporary credentials when supported, including their session token; never use root access keys. This console workflow needs no API key in Mobile SSH."
      ],
      "cleanupSteps": [
        "Terminate the instance. Check <strong>Delete on termination</strong> and remove any unwanted retained EBS volumes or snapshots separately.",
        "Release the Elastic IP separately. Termination disassociates the address but does not release it or end its charges."
      ]
    },
    "google-cloud": {
      "consoleSteps": [
        "Select or create a Google Cloud project, enable billing, and enable the <strong>Compute Engine API</strong>. Open <strong>Compute Engine → VM instances → Create instance</strong>.",
        "Name the VM and choose its region, zone and a machine with at least 1 GB RAM. Under <strong>OS and storage → Change</strong>, select <strong>Ubuntu → Ubuntu 24.04 LTS</strong> and at least 20 GB storage.",
        "Reserve a regional static external IPv4 in the VM’s region. In the VM’s <strong>Networking</strong> settings, select the intended VPC/subnet and choose that address for the network interface’s external IPv4. The VPC must have a default internet route; create a suitable network and subnet if your project has none.",
        "In the VM’s SSH-key settings, add your app’s public key with <code>mobileuser</code> as its username comment: <code>ssh-ed25519 AAAA… mobileuser</code>. If your project enforces OS Login, use that flow and its assigned POSIX username instead; metadata keys do not override it.",
        "Add a network tag such as <code>wg-vpn</code>. Create ingress firewall rules targeting that tag for the shared TCP 22 and UDP 51820 access. Restrict SSH to your phone’s public IPv4 and leave TCP 51821 closed.",
        "Finish reviewing the VM configuration and select <strong>Create</strong>. Wait until the instance is running, then record its external IPv4 and the SSH username selected above. Do not assume the username is <code>ubuntu</code>."
      ],
      "apiSteps": [
        "For a future provisioner only, use a dedicated service account with project-scoped Compute Instance Admin (v1), Compute Network Admin and Compute Security Admin roles, or narrower equivalents. Compute Network Admin cannot create firewalls. If attaching a VM service account, also grant Service Account User on it.",
        "If supported automation needs a JSON key and organization policy permits it, open <strong>IAM &amp; Admin → Service accounts → Keys → Add key → Create new key → JSON</strong>. Supply the project ID and JSON through protected native settings; never bypass a key restriction."
      ],
      "cleanupSteps": [
        "Delete the VM and review whether its boot and data disks are deleted or retained; remove unwanted retained disks and snapshots.",
        "Release the reserved external IPv4 separately. Deleting the VM does not release a reserved address."
      ]
    },
    "azure": {
      "consoleSteps": [
        "Open the Azure portal with an active subscription. Create a dedicated resource group, then open <strong>Virtual machines → Create → Azure virtual machine</strong> and select that subscription and group.",
        "Enter a name and region. Choose <strong>Ubuntu Server 24.04 LTS – x64 Gen2</strong> and a compatible size with at least 1 GB RAM. Keep an OS disk of at least 20 GB; review the displayed cost.",
        "Choose <strong>SSH public key</strong> authentication, set the administrator username to <code>azureuser</code>, and select an existing public key. Paste your app’s Ed25519 public key; keep the private key in the app.",
        "Under <strong>Networking</strong>, select or create a VNet and subnet. Create or select a Standard static public IPv4 in the appropriate region and attach it to this VM’s network-interface IP configuration.",
        "Configure the applicable network security group with the shared TCP 22 and UDP 51820 rules. Restrict SSH to your phone’s public IPv4; leave TCP 51821 closed. If both subnet and interface have security groups, both must allow the traffic.",
        "Select <strong>Review + create → Create</strong>. Wait for deployment, then open the VM’s <strong>Overview</strong> and record its public IPv4. The VM is ready with the <code>azureuser</code> account and your chosen SSH key."
      ],
      "apiSteps": [
        "For a future provisioner only, create a dedicated single-tenant app under <strong>Microsoft Entra ID → App registrations</strong>. Record tenant, client and subscription IDs. If required, create a client secret under <strong>Certificates &amp; secrets</strong> and copy its Value, not its secret ID.",
        "In the resource group’s <strong>Access control (IAM)</strong>, assign suitable compute/network permissions to that principal. Contributor on this dedicated group is broad but workable; prefer a narrower tested role. Pre-create the group because group-scoped permission cannot create it. Use protected native credential settings."
      ],
      "cleanupSteps": [
        "If the resource group contains only this deployment, review its contents and delete the group when finished.",
        "If retaining the group, delete the VM and check its attached-resource deletion options. Separately delete unwanted retained disks, network interfaces and public IPs."
      ]
    },
    "digitalocean": {
      "consoleSteps": [
        "Open <strong>Create → Droplet</strong> in the control panel. Choose a nearby <strong>Region</strong> with available capacity. Use a project and hostname that identify this server; region, plan availability and pricing can differ.",
        "Under <strong>Choose an image → OS</strong>, select <strong>Ubuntu 24.04 LTS</strong>. If a configuration-type selector appears, choose <strong>Bundled</strong>, then <strong>Shared CPU → Basic</strong>. Select at least <strong>1 GB RAM</strong> and <strong>20 GB disk</strong>, or the provider’s larger minimum.",
        "Under <strong>Choose Authentication Method → SSH key → Add SSH Key</strong>, paste and name your public key, then select it. Keep the matching private key on your device; an account key added later is not automatically installed on existing Droplets.",
        "Under <strong>Networking</strong>, keep <strong>Public IPv4 address</strong> selected. Set quantity to <strong>1</strong>, confirm the hostname and project, then click <strong>Create Droplet</strong>. Clearing both public-address options creates a private-only server.",
        "Open <strong>Create → Firewall</strong> and name it. Replace the default anywhere-SSH source with your management CIDR for <strong>TCP 22</strong>; optionally add the shared guide’s <strong>UDP 51820</strong> rule. Retain suitable outbound rules, choose the server under <strong>Apply to Droplets</strong>, and create the firewall.",
        "For an address retained across replacement, open <strong>Networking → Reserved IPs → Add a Reserved IP</strong>. Choose <strong>IPv4 Address → Assign to Droplet</strong>, select this Droplet and confirm. Record the assigned public IPv4 when provisioning finishes."
      ],
      "apiSteps": [
        "Only for a future compatible plugin: open <strong>Account → API → Tokens → Generate New Token</strong>. Enter a descriptive name and expiry.",
        "Choose <strong>Custom Scopes</strong> for the implemented workflow’s required Droplet, SSH-key, firewall and Reserved-IP operations and dependencies. Avoid defaulting to Full Access; save the token when shown."
      ],
      "cleanupSteps": [
        "After saving needed data, open <strong>Settings → Destroy</strong>, review associated resources, enter the Droplet’s name and confirm. Unselected volumes and snapshots remain; automated backups retain their expiration dates.",
        "Open <strong>Networking → Reserved IPs → … → Delete</strong> for each unwanted address, then confirm <strong>Delete Reserved IP</strong>. Retained addresses and other resources can continue billing."
      ]
    },
    "hetzner": {
      "consoleSteps": [
        "Open the intended project, then <strong>Firewalls → Create Firewall</strong>. Name the firewall and allow inbound <strong>TCP 22</strong> from your management CIDR. Optionally add the shared guide’s <strong>UDP 51820</strong> rule. Leaving outbound rules empty allows outbound traffic.",
        "Open <strong>Servers → Add server</strong>. Choose a nearby <strong>Location</strong> where your selected server type is available. Keep the firewall and server in the same project; availability can vary by location and current capacity.",
        "Choose an available <strong>Type</strong> with at least <strong>1 GB RAM</strong> and <strong>20 GB disk</strong>, or the provider’s larger minimum. Under <strong>Image → OS Images</strong>, select <strong>Ubuntu 24.04</strong> matching the chosen server architecture.",
        "Under <strong>Networking</strong>, enable public <strong>IPv4</strong>. Select an unassigned <strong>Primary IPv4</strong> in the same project and location, or let Hetzner create one. A private-only or IPv6-only server does not meet this guide’s public-IPv4 requirement.",
        "Under <strong>SSH key</strong>, add or select your public key. Under <strong>Firewalls</strong>, select the firewall created earlier. Account keys selected here are installed at creation; adding another account key later does not update this server.",
        "Enter a recognizable <strong>Name</strong>, review optional backups and the total cost, then click <strong>Create & Buy Now</strong>. Wait for the server to become ready and record its Primary IPv4. Keep that IP resource if you need to reuse the address."
      ],
      "apiSteps": [
        "Only for a future compatible plugin: open the intended project’s <strong>Security → API tokens → Generate API token</strong> and enter a description.",
        "Choose <strong>Read & Write</strong> for provisioning and copy the token before closing the window. This grants project-wide write access, not permission limited to this single server."
      ],
      "cleanupSteps": [
        "Save needed data, then delete the intended server. To keep its address for replacement, first disable the Primary IP’s <strong>Auto delete</strong> setting.",
        "Delete unwanted retained Primary IPs, volumes and snapshots separately. An IPv4 address continues billing while retained; enabled <strong>Auto delete</strong> removes an unprotected Primary IP with its server."
      ]
    },
    "linode": {
      "consoleSteps": [
        "Open <strong>Firewalls → Create Firewall → Custom Firewall</strong>. Enter a label. Keep <strong>Default Inbound Policy: Drop</strong> and <strong>Default Outbound Policy: Accept</strong>; this permits outgoing traffic while requiring explicit rules for incoming connections.",
        "Add an inbound rule with <strong>Protocol: TCP</strong>, <strong>Ports: 22</strong>, <strong>Sources: IP/Netmask</strong> containing your management CIDR, and <strong>Action: Accept</strong>. Optionally add the shared guide’s <strong>UDP 51820</strong> rule. Click <strong>Save Changes</strong> to activate the rules.",
        "Open <strong>Create → Linode</strong>. Choose a nearby core compute region, then <strong>Distributions → Ubuntu 24.04</strong>. Select an available plan with at least <strong>1 GB RAM</strong> and <strong>20 GB disk</strong>, or the provider’s larger minimum.",
        "Set the <strong>Label</strong>. Under security, select an existing SSH key or click <strong>Add an SSH Key</strong> and paste your public key. <strong>Root Password</strong> is optional when provisioning with an SSH key; keep your private key on your device.",
        "Under networking, choose <strong>Public Internet</strong> and <strong>Linode Interfaces</strong>. Select your firewall for that public interface. Under <strong>IP address</strong>, choose <strong>Reserved</strong> and a same-region address, or click <strong>Reserve IP</strong> to obtain one.",
        "Review optional backups and other charges in <strong>Linode Summary</strong>, then click <strong>Create Linode</strong>. Wait for initialization and record its public IPv4. The reserved address remains with your account after server deletion and cannot move to another region."
      ],
      "apiSteps": [
        "Only for a future compatible plugin: open your username menu → <strong>API Tokens → Create a Personal Access Token</strong>. Set a label and expiry.",
        "Grant only required scopes: provisioning generally needs Linodes and Firewalls Read/Write; reserving or releasing addresses also needs <code>ips:read_write</code>. Save the token securely."
      ],
      "cleanupSteps": [
        "Save needed data, then open <strong>Linodes → … → Delete → Delete Linode</strong>. Check separately retained volumes and images.",
        "For an unwanted address, open <strong>Reserved IPs → … → Unreserve</strong> and confirm. Reserved IPs survive server deletion and continue billing until released."
      ]
    },
    "vultr": {
      "consoleSteps": [
        "Open <strong>Account → SSH Keys → Add SSH Key</strong>. Paste and name your public key, then save it. Keep the corresponding private key on your device; select this saved public key when configuring the instance.",
        "Open <strong>Network → Firewall Groups → Create Firewall Group</strong> and name it. Add an inbound IPv4 rule for <strong>TCP 22</strong> from your management CIDR, plus the optional <strong>UDP 51820</strong> rule. Verify a saved rule exists: empty groups are not enforced.",
        "Open <strong>Compute → Instances → Create Instance + → Shared CPU</strong>. Choose an available plan with at least <strong>1 GB RAM</strong> and <strong>20 GB disk</strong>, or the provider’s larger minimum. Select a nearby location, then click <strong>Configure</strong>.",
        "Under <strong>Image Selection and Configuration → Operating System</strong>, choose <strong>Ubuntu 24.04</strong>. Under <strong>Server Settings</strong>, select your <strong>SSH Keys</strong> entry and populated <strong>Firewall Group</strong>. Enter <strong>Server 1 Hostname</strong> and <strong>Server 1 Label</strong>.",
        "Under <strong>Instance Connectivity</strong>, select <strong>Instance(s) with Public IP</strong> and keep <strong>Public IPv4</strong> enabled. Review automatic backups and other optional charges. <strong>Limited User Login</strong> changes the login from <code>root</code> to the sudo-capable <code>linuxuser</code>. Review the <strong>Summary</strong> and click <strong>Deploy</strong>.",
        "Wait for the instance to become ready and record its public IPv4. The ordinary address stays fixed while this instance exists; use a same-region Reserved IP if it must survive replacement."
      ],
      "apiSteps": [
        "Only for a future compatible plugin: open <strong>Account → API</strong>, then <strong>Enable API</strong> under <strong>Personal Access Token</strong>. Store the credential securely.",
        "Under <strong>Access Control</strong>, allow the IP/CIDR that will originate API requests. Update it after mobile-network changes; this restricts request origin, not permissions to particular resources."
      ],
      "cleanupSteps": [
        "Save needed data, open the instance and click <strong>Server Destroy</strong>. Select <strong>Yes, destroy this server</strong>, then <strong>Destroy Server</strong>.",
        "Delete unwanted retained addresses through <strong>Network → Reserved IPs → Remove Reserved IP</strong>. Check separate storage and snapshots too; deleting the server is not a complete account cleanup."
      ]
    },
    "oracle-cloud": {
      "consoleSteps": [
        "Select your OCI region and a dedicated compartment. Confirm compute, volume and public-IP quotas; available capacity and free-tier eligibility depend on the selected resources.",
        "Open <strong>Networking → Virtual cloud networks → Start VCN Wizard → Create VCN with Internet Connectivity</strong>. Use its public subnet and confirm a <code>0.0.0.0/0</code> route through the Internet Gateway.",
        "Review the public subnet’s security list and any attached network security groups. Restrict TCP <code>22</code> to your management CIDR, allow UDP <code>51820</code>, and preserve necessary outbound and ICMP rules.",
        "Open <strong>Compute → Instances → Create instance</strong>. Set the name, compartment and availability domain. Choose <strong>Change image → Ubuntu → 24.04</strong>, a compatible VM shape and adequate memory and boot storage.",
        "Select the public subnet and enable public IPv4 assignment. Under <strong>Add SSH keys</strong>, paste or upload your Ed25519/ECDSA public key; the console’s generated key is RSA. Keep its matching private key on your device.",
        "Review and create the VM. Once Running, record its public IPv4. For an address that survives VM replacement, optionally replace its ephemeral IP with a reserved public IP assigned to its primary private IP; record the new address."
      ],
      "apiSteps": [
        "Only for a future provisioning plugin: have an administrator grant a dedicated IAM user/group the required compute, network and volume permissions in this compartment.",
        "Open <strong>User settings → API Keys → Add API Key</strong>. Save the RSA PEM signing private key, fingerprint, tenancy/user OCIDs and region; record the compartment OCID. This is separate from your SSH key."
      ],
      "cleanupSteps": [
        "Terminate the instance and explicitly delete its boot volume if unnecessary; OCI preserves that volume by default. Back up wanted data first.",
        "Delete unwanted reserved public IPs and retained volumes. Remove the dedicated VCN’s unused subnets, gateways and other networking resources, including private-network resources created by the wizard."
      ]
    },
    "ovhcloud": {
      "consoleSteps": [
        "Activate a Public Cloud project and payment method. Check <strong>Project Management → Quotas</strong>. Under <strong>SSH keys → Create an SSH key</strong>, name and paste your public key, then select <strong>Add</strong>.",
        "Open <strong>Compute → Instances → Create instance</strong>. Name the VM, choose a region and suitable model, select Ubuntu <code>24.04</code>, and choose the saved SSH key.",
        "Under networking, enable <strong>Assign a public IP → Basic Public IP</strong>; public connectivity is off by default. Basic IP uses <code>Ext-Net</code> and is incompatible with a gateway. Review automatic snapshots and costs, choose hourly billing, then select <strong>Create my instance</strong>.",
        "To configure filtering, open <strong>Project Management → Users</strong>. Create an OpenStack user with appropriate network/instance permissions if needed, save its password, and choose its <strong>… → Launch OpenStack Horizon</strong> action.",
        "In Horizon, select the VM’s region, then <strong>Network → Security Groups → Create Security Group</strong>. Create a dedicated group. Under <strong>Manage Rules</strong>, allow TCP <code>22</code> from your management CIDR and UDP <code>51820</code>; retain outgoing rules.",
        "Open Horizon <strong>Compute → Instances → Edit Security Groups</strong>. Apply the dedicated group and remove the permissive default group only from this VM; never edit/delete the shared default group. Once Active, record the public IPv4 from its Overview."
      ],
      "apiSteps": [
        "Only for a future provisioning plugin: open the token-creation page for your account’s API region. Name the application, set an expiry and restrict Rights to its documented project paths/actions.",
        "Save the application key, application secret and consumer key securely. These signed-API credentials differ from the OpenStack username/password used by Horizon."
      ],
      "cleanupSteps": [
        "Back up wanted data, then select the instance’s <strong>… → Delete → Delete instance</strong>. Hourly billing continues until deletion.",
        "Separately remove unwanted volumes, snapshots/backups, and any independently created Floating/Additional IPs or gateways. Deleting the VM does not remove every associated resource."
      ]
    },
    "scaleway": {
      "consoleSteps": [
        "Select the correct Organization and Project, activate billing and check quotas. On the <strong>Project dashboard → Add SSH key</strong>, name and paste your public key. SSH keys are scoped to this Project.",
        "Open <strong>Compute → CPU & GPU Instances → Security groups</strong> in your chosen Availability Zone. Create a dedicated group in that zone. Enable stateful filtering, set inbound <strong>Drop</strong> and outbound <strong>Accept</strong>.",
        "In the group’s <strong>Rules</strong> tab, allow TCP <code>22</code> from your management CIDR and UDP <code>51820</code> for VPN clients. Keep TCP <code>51821</code> closed. The automatically created default group is stateless, so select your dedicated group explicitly.",
        "Choose <strong>Create Instance → Create CPU Instance</strong>, select a suitable CPU configuration and the same Availability Zone, then <strong>Configure Instance</strong>. Name it, select Ubuntu <code>24.04</code>/Noble and configure at least a 20 GB system volume.",
        "Keep <strong>Public IPv4</strong> enabled and allocate an address, or select an available existing address. Choose your dedicated security group and verify the SSH keys displayed. Review IPv6 settings separately if enabled.",
        "Select <strong>Review</strong>, inspect estimated costs, then <strong>Create Instance</strong>. Wait for provisioning to finish and copy the public IPv4 from <strong>Overview</strong>. This flexible IP is a separate resource whose lifecycle you must manage."
      ],
      "apiSteps": [
        "Only for a future provisioning plugin: create an IAM application and grant the required permissions for Instances, networking and storage in the target Project.",
        "Open <strong>IAM & API keys → API keys → Generate API key</strong>. Select the application and an expiry. Save the access key and one-time-displayed secret; record the Project UUID and zone separately."
      ],
      "cleanupSteps": [
        "Back up wanted data. In the correct Availability Zone, choose the instance’s <strong>… → Delete</strong>, type <code>DELETE</code>, and select deletion of associated IPs and Block Storage volumes you no longer need.",
        "Confirm <strong>Delete Instance</strong>. Check for unwanted retained flexible IPs, volumes and snapshots; powering off alone does not remove these resources."
      ]
    }
  }
};
