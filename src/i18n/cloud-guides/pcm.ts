import type { CloudGuides } from "./types";

export const pcm: CloudGuides = {
  "title": "Create VM for {provider}",
  "description": "Step-by-step way to create {provider} VM, set public IPv4 and firewall rules, connect from Mobile SSH, prepare optional API credentials and clean up.",
  "intro": "Create Ubuntu server with public IPv4 inside your own {provider} account. Follow di console steps, connect from Mobile SSH, then install wg-easy as separate work.",
  "back": "Cloud VMs and wg-easy",
  "indexHeading": "Step-by-step guides for cloud providers",
  "indexIntro": "Choose your provider to see im console screens, public-IP settings, SSH login, optional API credentials and cleanup. AWS Lightsail and EC2 get separate guides.",
  "cardAction": "Create VM and connect am with Mobile SSH",
  "navLabel": "Choose cloud provider",
  "openConsole": "Open di provider console",
  "availability": "These instructions use di provider console. Separate plugins to create VMs still dey planned; di combined Android VPN Setup implementation dey local and dem never publish am. Di API section na preparation for future access; you no need am for this manual route.",
  "availabilityLink": "Check which plugins dey available",
  "checked": "We check di console documentation on November 8, 2026.",
  "beforeHeading": "Before you start",
  "before": [
    "Activate billing and check di region limits for VMs, disks and public IPs. Review di price wey dem display before you create resources; no assume say free tier or any particular plan dey available.",
    "For this setup, use Ubuntu 24.04 LTS with at least 1 GB RAM and 20 GB storage, or di provider minimum if e bigger. Make di CPU architecture match di image. Na this guide baseline be this, no be minimum wey every wg-easy setup must use.",
    "Keep your SSH private key inside Mobile SSH and upload only im public key. Ed25519 dey work with di current Android and iOS clients; di Lightsail steps explain im RSA import and di extra setup for iOS. Write your current public IPv4 with <code>/32</code> after am as di SSH source, or use your approved management CIDR."
  ],
  "networkHeading": "Network rules for this setup",
  "networkRules": [
    "Allow incoming <code>TCP 22</code> from di management CIDR. Remove wider SSH allow rules if you no need dem; adding narrow rule no automatically cancel wider one. Update di source when your phone public address change.",
    "For di VPN step later, allow incoming <code>UDP 51820</code> from VPN-client networks; clients wey dey move between networks fit need <code>0.0.0.0/0</code>. Set IPv6 rules with care if you enable IPv6.",
    "Keep public <code>TCP 51821</code> closed. Di wg-easy admin interface go bind to server loopback, and you go reach am through SSH forwarding.",
    "Allow di outgoing DNS, package/container downloads and VPN traffic wey you need. Check both cloud and guest firewalls; preserve provider storage rules and essential ICMP rules."
  ],
  "stepsHeading": "Create di server and connect",
  "sourceLink": "Provider instructions",
  "connectHeading": "Save di server inside Mobile SSH",
  "connectText": "Open Servers, add server and fill these values. Choose di credential wey hold di matching private key. If di username wey you configure differ from this guide example, use your own.",
  "hostLabel": "Host",
  "hostValue": "Di VM public IPv4 from di provider console",
  "portLabel": "Port",
  "userLabel": "Username",
  "credentialLabel": "Authentication",
  "credentialValue": "Di matching SSH private-key credential",
  "identityText": "Get di SSH host-key fingerprint through di provider trusted console or boot logs and compare am before you trust di connection. For Android, turn off automatic acceptance of new identities if you wan review first use. Investigate changed-key warnings before you replace saved identity.",
  "connectionGuide": "SSH keys and identity checks",
  "vpnHeading": "Install wg-easy as separate step",
  "vpnText": "First confirm say di saved server dey open terminal and your login get root or sudo access. Then follow di shared wg-easy installation guide: Docker, pinned container, private administration through SSH, client creation and VPN checks. Di installer need SSH access, no be your cloud API secret.",
  "vpnLink": "Continue to di wg-easy installation steps",
  "apiHeading": "Optional API credentials for future plugin",
  "apiIntro": "Skip this section for console setup. Create credentials only when provisioner wey support am need dem. Di permission lists below na preparation guidance; dem no be tested minimum policies for plugin wey dem don release.",
  "apiSecretNote": "Enter credentials only inside protected form wey support dem. No put cloud secrets inside voice prompts, terminal commands or di VM. Use di narrowest scope wey e support, record when credentials go expire, and revoke di ones wey you no need again.",
  "cleanupHeading": "Delete resources wey you no need again",
  "cleanupWarning": "Stopping di VM, canceling setup job or removing Mobile SSH profile no delete cloud resources and no guarantee say charges go stop. Keep resource IDs until you confirm deletion, and preserve resources wey no concern this setup.",
  "providers": {
    "aws-lightsail": {
      "consoleSteps": [
        "Sign in to your AWS account, open Lightsail and select <strong>Create instance</strong>. Choose di region wey near di place where you want your VPN.",
        "Select <strong>Linux/Unix → OS Only → Ubuntu 24.04 LTS</strong>. Choose dual-stack IPv4/IPv6 plan with at least 1 GB RAM and 20 GB storage; review di price wey dem display.",
        "Choose di region SSH key pair or upload your RSA public key. Keep im private key safe, name di instance and select <strong>Create instance</strong>. iOS need di extra key setup below.",
        "Open <strong>Networking → Create static IP</strong>. Select di same region, attach di address to this instance, give am name and create am. Record di static IPv4.",
        "For di instance <strong>Networking</strong> tab, restrict SSH to your phone public IPv4, but keep <strong>Allow Lightsail browser SSH/RDP</strong> enabled. Add di shared UDP 51820 rule; review IPv6 rules separately and keep TCP 51821 closed.",
        "For iOS, select <strong>Connect → Connect using SSH</strong>. Add your app Ed25519 public key as new line inside <code>/home/ubuntu/.ssh/authorized_keys</code>, and preserve di keys wey already dey. Browser SSH use separate provider key; your static IPv4 don ready."
      ],
      "apiSteps": [
        "For future provisioner only, create dedicated IAM identity with di Lightsail instance, SSH-key, static-IP and firewall actions wey e need, including cleanup. Restrict region and resources where e support am; this no be tested minimum policy.",
        "Under <strong>IAM → Users → Security credentials</strong>, create access key only when automation wey support am need am. Supply im ID and secret through di protected native form; temporary credentials need their session token too. No ever use root keys."
      ],
      "cleanupSteps": [
        "Delete di instance when you finish. Review snapshots and disks wey remain separately; stopping instance no end every charge.",
        "Release di static IP separately after you detach am. Deleting im instance no delete di address."
      ]
    },
    "aws-ec2": {
      "consoleSteps": [
        "Open EC2 for your AWS region and select <strong>Launch instance</strong>. Name di server and choose official Canonical <strong>Ubuntu Server 24.04 LTS</strong> AMI; check im publisher and architecture.",
        "Select instance type with at least 1 GB RAM and matching architecture. Under <strong>Configure storage</strong>, choose at least 20 GB for di boot volume and review di estimated resource costs.",
        "Under <strong>Key pair</strong>, select existing key or create/import Ed25519 key pair for Linux. Keep di matching private key available inside di app; AWS go install di public key for di instance.",
        "For <strong>Network settings</strong>, choose public subnet. Im VPC need attached internet gateway and <code>0.0.0.0/0</code> route to that gateway. Enable public IPv4; di static address step dey below.",
        "Create or select security group with di shared TCP 22 and UDP 51820 rules. Restrict SSH to your phone public IPv4, keep TCP 51821 closed, then select <strong>Launch instance</strong> and wait make e start running.",
        "Open <strong>Network &amp; Security → Elastic IPs → Allocate Elastic IP address</strong>. Then select <strong>Actions → Associate Elastic IP address</strong> and choose this instance and im primary private IP. Record di static IPv4; public IPv4 addresses get charges."
      ],
      "apiSteps": [
        "For future provisioner only, create dedicated IAM identity wey cover instance creation, related AMI/network/disk/key resources, tags, Elastic IPs and cleanup. Existing read/start/stop permissions no enough. Add <code>iam:PassRole</code> only if you dey attach instance profile.",
        "Create or obtain that identity credentials and supply dem only through supported protected native settings. Prefer temporary credentials when e support dem, including their session token; no ever use root access keys. This console workflow no need API key inside Mobile SSH."
      ],
      "cleanupSteps": [
        "Terminate di instance. Check <strong>Delete on termination</strong> and remove unwanted EBS volumes or snapshots wey remain separately.",
        "Release di Elastic IP separately. Termination go disassociate di address, but e no release am or stop im charges."
      ]
    },
    "google-cloud": {
      "consoleSteps": [
        "Select or create Google Cloud project, enable billing and enable di <strong>Compute Engine API</strong>. Open <strong>Compute Engine → VM instances → Create instance</strong>.",
        "Name di VM and choose im region, zone and machine with at least 1 GB RAM. Under <strong>OS and storage → Change</strong>, select <strong>Ubuntu → Ubuntu 24.04 LTS</strong> and at least 20 GB storage.",
        "Reserve regional static external IPv4 for di VM region. For di VM <strong>Networking</strong> settings, select di VPC/subnet wey you intend and choose that address for di network interface external IPv4. Di VPC must get default internet route; create suitable network and subnet if your project no get any.",
        "For di VM SSH-key settings, add your app public key with <code>mobileuser</code> as im username comment: <code>ssh-ed25519 AAAA… mobileuser</code>. If your project enforce OS Login, use that flow and im assigned POSIX username instead; metadata keys no override am.",
        "Add network tag like <code>wg-vpn</code>. Create ingress firewall rules wey target that tag for di shared TCP 22 and UDP 51820 access. Restrict SSH to your phone public IPv4 and keep TCP 51821 closed.",
        "Finish reviewing di VM configuration and select <strong>Create</strong>. Wait until di instance dey run, then record im external IPv4 and di SSH username wey you choose above. No assume say di username na <code>ubuntu</code>."
      ],
      "apiSteps": [
        "For future provisioner only, use dedicated service account with project-scoped Compute Instance Admin (v1), Compute Network Admin and Compute Security Admin roles, or narrower equivalents. Compute Network Admin no fit create firewalls. If you attach VM service account, also grant Service Account User on am.",
        "If supported automation need JSON key and organization policy allow am, open <strong>IAM &amp; Admin → Service accounts → Keys → Add key → Create new key → JSON</strong>. Supply di project ID and JSON through protected native settings; no ever bypass key restriction."
      ],
      "cleanupSteps": [
        "Delete di VM and check whether dem delete or retain im boot and data disks; remove unwanted retained disks and snapshots.",
        "Release di reserved external IPv4 separately. Deleting di VM no release reserved address."
      ]
    },
    "azure": {
      "consoleSteps": [
        "Open di Azure portal with active subscription. Create dedicated resource group, then open <strong>Virtual machines → Create → Azure virtual machine</strong> and select that subscription and group.",
        "Enter name and region. Choose <strong>Ubuntu Server 24.04 LTS – x64 Gen2</strong> and compatible size with at least 1 GB RAM. Keep OS disk of at least 20 GB; review di cost wey dem display.",
        "Choose <strong>SSH public key</strong> authentication, set di administrator username to <code>azureuser</code>, and select existing public key. Paste your app Ed25519 public key; keep di private key inside di app.",
        "Under <strong>Networking</strong>, select or create VNet and subnet. Create or select Standard static public IPv4 for di correct region and attach am to this VM network-interface IP configuration.",
        "Configure di applicable network security group with di shared TCP 22 and UDP 51820 rules. Restrict SSH to your phone public IPv4; keep TCP 51821 closed. If both subnet and interface get security groups, both must allow di traffic.",
        "Select <strong>Review + create → Create</strong>. Wait for deployment, then open di VM <strong>Overview</strong> and record im public IPv4. Di VM don ready with di <code>azureuser</code> account and di SSH key wey you choose."
      ],
      "apiSteps": [
        "For future provisioner only, create dedicated single-tenant app under <strong>Microsoft Entra ID → App registrations</strong>. Record tenant, client and subscription IDs. If e need am, create client secret under <strong>Certificates &amp; secrets</strong> and copy im Value, no be im secret ID.",
        "For di resource group <strong>Access control (IAM)</strong>, assign suitable compute/network permissions to that principal. Contributor for this dedicated group broad but e fit work; prefer narrower tested role. Create di group beforehand because group-scoped permission no fit create am. Use protected native credential settings."
      ],
      "cleanupSteps": [
        "If na only this deployment dey inside di resource group, review everything wey dey inside and delete di group when you finish.",
        "If you dey keep di group, delete di VM and check im attached-resource deletion options. Separately delete unwanted disks, network interfaces and public IPs wey remain."
      ]
    },
    "digitalocean": {
      "consoleSteps": [
        "Open <strong>Create → Droplet</strong> for di control panel. Choose nearby <strong>Region</strong> wey get available capacity. Use project and hostname wey identify this server; region, plan availability and price fit differ.",
        "Under <strong>Choose an image → OS</strong>, select <strong>Ubuntu 24.04 LTS</strong>. If configuration-type selector appear, choose <strong>Bundled</strong>, then <strong>Shared CPU → Basic</strong>. Select at least <strong>1 GB RAM</strong> and <strong>20 GB disk</strong>, or di provider minimum if e bigger.",
        "Under <strong>Choose Authentication Method → SSH key → Add SSH Key</strong>, paste and name your public key, then select am. Keep di matching private key for your device; account key wey you add later no automatically enter existing Droplets.",
        "Under <strong>Networking</strong>, keep <strong>Public IPv4 address</strong> selected. Set quantity to <strong>1</strong>, confirm di hostname and project, then click <strong>Create Droplet</strong>. If you clear both public-address options, na private-only server you go create.",
        "Open <strong>Create → Firewall</strong> and name am. Replace di default anywhere-SSH source with your management CIDR for <strong>TCP 22</strong>; if you want, add di shared guide <strong>UDP 51820</strong> rule. Keep suitable outbound rules, choose di server under <strong>Apply to Droplets</strong>, and create di firewall.",
        "For address wey go remain even when you replace di server, open <strong>Networking → Reserved IPs → Add a Reserved IP</strong>. Choose <strong>IPv4 Address → Assign to Droplet</strong>, select this Droplet and confirm. Record di assigned public IPv4 when provisioning finish."
      ],
      "apiSteps": [
        "Only for future compatible plugin: open <strong>Account → API → Tokens → Generate New Token</strong>. Enter name wey describe am and expiry.",
        "Choose <strong>Custom Scopes</strong> for di Droplet, SSH-key, firewall and Reserved-IP operations and dependencies wey di implemented workflow need. No just default to Full Access; save di token when dem show am."
      ],
      "cleanupSteps": [
        "After you save di data wey you need, open <strong>Settings → Destroy</strong>, review associated resources, enter di Droplet name and confirm. Volumes and snapshots wey you no select go remain; automated backups keep their expiry dates.",
        "Open <strong>Networking → Reserved IPs → … → Delete</strong> for each address wey you no want, then confirm <strong>Delete Reserved IP</strong>. Addresses and other resources wey remain fit continue to get charges."
      ]
    },
    "hetzner": {
      "consoleSteps": [
        "Open di intended project, then <strong>Firewalls → Create Firewall</strong>. Name di firewall and allow incoming <strong>TCP 22</strong> from your management CIDR. If you want, add di shared guide <strong>UDP 51820</strong> rule. If you leave outbound rules empty, outgoing traffic dey allowed.",
        "Open <strong>Servers → Add server</strong>. Choose nearby <strong>Location</strong> where di server type wey you select dey available. Keep di firewall and server inside di same project; availability fit differ by location and current capacity.",
        "Choose available <strong>Type</strong> with at least <strong>1 GB RAM</strong> and <strong>20 GB disk</strong>, or di provider minimum if e bigger. Under <strong>Image → OS Images</strong>, select <strong>Ubuntu 24.04</strong> wey match di server architecture wey you choose.",
        "Under <strong>Networking</strong>, enable public <strong>IPv4</strong>. Select unassigned <strong>Primary IPv4</strong> inside di same project and location, or let Hetzner create one. Private-only or IPv6-only server no meet this guide public-IPv4 requirement.",
        "Under <strong>SSH key</strong>, add or select your public key. Under <strong>Firewalls</strong>, select di firewall wey you create earlier. Account keys wey you select here go install when you create di server; adding another account key later no update this server.",
        "Enter <strong>Name</strong> wey you fit recognize, review optional backups and di total cost, then click <strong>Create & Buy Now</strong>. Wait make di server ready and record im Primary IPv4. Keep that IP resource if you need reuse di address."
      ],
      "apiSteps": [
        "Only for future compatible plugin: open di intended project <strong>Security → API tokens → Generate API token</strong> and enter description.",
        "Choose <strong>Read & Write</strong> for provisioning and copy di token before you close di window. This give write access across di whole project, no be permission wey stop for only this server."
      ],
      "cleanupSteps": [
        "Save di data wey you need, then delete di intended server. To keep im address for replacement, first disable di Primary IP <strong>Auto delete</strong> setting.",
        "Delete unwanted Primary IPs, volumes and snapshots wey remain separately. IPv4 address go continue to get charges while you retain am; enabled <strong>Auto delete</strong> go remove unprotected Primary IP together with im server."
      ]
    },
    "linode": {
      "consoleSteps": [
        "Open <strong>Firewalls → Create Firewall → Custom Firewall</strong>. Enter label. Keep <strong>Default Inbound Policy: Drop</strong> and <strong>Default Outbound Policy: Accept</strong>; this allow outgoing traffic but require explicit rules for incoming connections.",
        "Add inbound rule with <strong>Protocol: TCP</strong>, <strong>Ports: 22</strong>, <strong>Sources: IP/Netmask</strong> wey contain your management CIDR, and <strong>Action: Accept</strong>. If you want, add di shared guide <strong>UDP 51820</strong> rule. Click <strong>Save Changes</strong> to activate di rules.",
        "Open <strong>Create → Linode</strong>. Choose nearby core compute region, then <strong>Distributions → Ubuntu 24.04</strong>. Select available plan with at least <strong>1 GB RAM</strong> and <strong>20 GB disk</strong>, or di provider minimum if e bigger.",
        "Set di <strong>Label</strong>. Under security, select existing SSH key or click <strong>Add an SSH Key</strong> and paste your public key. <strong>Root Password</strong> na optional when you provision with SSH key; keep your private key for your device.",
        "Under networking, choose <strong>Public Internet</strong> and <strong>Linode Interfaces</strong>. Select your firewall for that public interface. Under <strong>IP address</strong>, choose <strong>Reserved</strong> and address for di same region, or click <strong>Reserve IP</strong> to get one.",
        "Review optional backups and other charges for <strong>Linode Summary</strong>, then click <strong>Create Linode</strong>. Wait for initialization and record im public IPv4. Di reserved address go remain with your account after you delete di server, and e no fit move to another region."
      ],
      "apiSteps": [
        "Only for future compatible plugin: open your username menu → <strong>API Tokens → Create a Personal Access Token</strong>. Set label and expiry.",
        "Grant only di scopes wey e need: provisioning generally need Linodes and Firewalls Read/Write; reserving or releasing addresses also need <code>ips:read_write</code>. Save di token securely."
      ],
      "cleanupSteps": [
        "Save di data wey you need, then open <strong>Linodes → … → Delete → Delete Linode</strong>. Check volumes and images wey remain separately.",
        "For address wey you no want, open <strong>Reserved IPs → … → Unreserve</strong> and confirm. Reserved IPs remain after server deletion and continue to get charges until you release dem."
      ]
    },
    "vultr": {
      "consoleSteps": [
        "Open <strong>Account → SSH Keys → Add SSH Key</strong>. Paste and name your public key, then save am. Keep di matching private key for your device; select this saved public key when you configure di instance.",
        "Open <strong>Network → Firewall Groups → Create Firewall Group</strong> and name am. Add incoming IPv4 rule for <strong>TCP 22</strong> from your management CIDR, plus di optional <strong>UDP 51820</strong> rule. Verify say saved rule dey: dem no enforce empty groups.",
        "Open <strong>Compute → Instances → Create Instance + → Shared CPU</strong>. Choose available plan with at least <strong>1 GB RAM</strong> and <strong>20 GB disk</strong>, or di provider minimum if e bigger. Select nearby location, then click <strong>Configure</strong>.",
        "Under <strong>Image Selection and Configuration → Operating System</strong>, choose <strong>Ubuntu 24.04</strong>. Under <strong>Server Settings</strong>, select your <strong>SSH Keys</strong> entry and <strong>Firewall Group</strong> wey get rules. Enter <strong>Server 1 Hostname</strong> and <strong>Server 1 Label</strong>.",
        "Under <strong>Instance Connectivity</strong>, select <strong>Instance(s) with Public IP</strong> and keep <strong>Public IPv4</strong> enabled. Review automatic backups and other optional charges. <strong>Limited User Login</strong> change di login from <code>root</code> to <code>linuxuser</code> wey fit use sudo. Review di <strong>Summary</strong> and click <strong>Deploy</strong>.",
        "Wait make di instance ready and record im public IPv4. Di ordinary address no change as long as this instance exist; use Reserved IP for di same region if you need di address to remain after replacement."
      ],
      "apiSteps": [
        "Only for future compatible plugin: open <strong>Account → API</strong>, then <strong>Enable API</strong> under <strong>Personal Access Token</strong>. Store di credential securely.",
        "Under <strong>Access Control</strong>, allow di IP/CIDR where API requests go come from. Update am after mobile-network changes; this restrict request origin, no be permissions for particular resources."
      ],
      "cleanupSteps": [
        "Save di data wey you need, open di instance and click <strong>Server Destroy</strong>. Select <strong>Yes, destroy this server</strong>, then <strong>Destroy Server</strong>.",
        "Delete unwanted addresses wey remain through <strong>Network → Reserved IPs → Remove Reserved IP</strong>. Check separate storage and snapshots too; deleting di server no clean up di whole account."
      ]
    },
    "oracle-cloud": {
      "consoleSteps": [
        "Select your OCI region and dedicated compartment. Confirm compute, volume and public-IP quotas; available capacity and free-tier eligibility depend on di resources wey you select.",
        "Open <strong>Networking → Virtual cloud networks → Start VCN Wizard → Create VCN with Internet Connectivity</strong>. Use im public subnet and confirm <code>0.0.0.0/0</code> route through di Internet Gateway.",
        "Review di public subnet security list and any network security groups wey attach. Restrict TCP <code>22</code> to your management CIDR, allow UDP <code>51820</code>, and preserve di outbound and ICMP rules wey you need.",
        "Open <strong>Compute → Instances → Create instance</strong>. Set di name, compartment and availability domain. Choose <strong>Change image → Ubuntu → 24.04</strong>, compatible VM shape and enough memory and boot storage.",
        "Select di public subnet and enable public IPv4 assignment. Under <strong>Add SSH keys</strong>, paste or upload your Ed25519/ECDSA public key; di key wey di console generate na RSA. Keep di matching private key for your device.",
        "Review and create di VM. When e show Running, record im public IPv4. If you want address wey go remain after VM replacement, you fit replace im ephemeral IP with reserved public IP wey attach to im primary private IP; record di new address."
      ],
      "apiSteps": [
        "Only for future provisioning plugin: make administrator grant dedicated IAM user/group di compute, network and volume permissions wey e need inside this compartment.",
        "Open <strong>User settings → API Keys → Add API Key</strong>. Save di RSA PEM signing private key, fingerprint, tenancy/user OCIDs and region; record di compartment OCID. This one separate from your SSH key."
      ],
      "cleanupSteps": [
        "Terminate di instance and explicitly delete im boot volume if you no need am; OCI dey preserve that volume by default. First back up data wey you want keep.",
        "Delete unwanted reserved public IPs and volumes wey remain. Remove di dedicated VCN unused subnets, gateways and other networking resources, including private-network resources wey di wizard create."
      ]
    },
    "ovhcloud": {
      "consoleSteps": [
        "Activate Public Cloud project and payment method. Check <strong>Project Management → Quotas</strong>. Under <strong>SSH keys → Create an SSH key</strong>, name and paste your public key, then select <strong>Add</strong>.",
        "Open <strong>Compute → Instances → Create instance</strong>. Name di VM, choose region and suitable model, select Ubuntu <code>24.04</code>, and choose di saved SSH key.",
        "Under networking, enable <strong>Assign a public IP → Basic Public IP</strong>; public connectivity dey off by default. Basic IP use <code>Ext-Net</code> and e no compatible with gateway. Review automatic snapshots and costs, choose hourly billing, then select <strong>Create my instance</strong>.",
        "To configure filtering, open <strong>Project Management → Users</strong>. Create OpenStack user with di proper network/instance permissions if you need one, save im password, and choose im <strong>… → Launch OpenStack Horizon</strong> action.",
        "For Horizon, select di VM region, then <strong>Network → Security Groups → Create Security Group</strong>. Create dedicated group. Under <strong>Manage Rules</strong>, allow TCP <code>22</code> from your management CIDR and UDP <code>51820</code>; keep outgoing rules.",
        "Open Horizon <strong>Compute → Instances → Edit Security Groups</strong>. Apply di dedicated group and remove di permissive default group from only this VM; no ever edit/delete di shared default group. When e show Active, record di public IPv4 from im Overview."
      ],
      "apiSteps": [
        "Only for future provisioning plugin: open di token-creation page for your account API region. Name di application, set expiry and restrict Rights to im documented project paths/actions.",
        "Save di application key, application secret and consumer key securely. These signed-API credentials differ from di OpenStack username/password wey Horizon dey use."
      ],
      "cleanupSteps": [
        "Back up data wey you want keep, then select di instance <strong>… → Delete → Delete instance</strong>. Hourly billing go continue until deletion.",
        "Separately remove unwanted volumes, snapshots/backups, and any Floating/Additional IPs or gateways wey you create independently. Deleting di VM no remove every associated resource."
      ]
    },
    "scaleway": {
      "consoleSteps": [
        "Select di correct Organization and Project, activate billing and check quotas. For di <strong>Project dashboard → Add SSH key</strong>, name and paste your public key. SSH keys get scope inside this Project.",
        "Open <strong>Compute → CPU & GPU Instances → Security groups</strong> for di Availability Zone wey you choose. Create dedicated group for that zone. Enable stateful filtering, set inbound to <strong>Drop</strong> and outbound to <strong>Accept</strong>.",
        "For di group <strong>Rules</strong> tab, allow TCP <code>22</code> from your management CIDR and UDP <code>51820</code> for VPN clients. Keep TCP <code>51821</code> closed. Di default group wey dem create automatically na stateless, so select your dedicated group yourself.",
        "Choose <strong>Create Instance → Create CPU Instance</strong>, select suitable CPU configuration and di same Availability Zone, then <strong>Configure Instance</strong>. Name am, select Ubuntu <code>24.04</code>/Noble and configure at least 20 GB system volume.",
        "Keep <strong>Public IPv4</strong> enabled and allocate address, or select available existing address. Choose your dedicated security group and verify di SSH keys wey dem display. Review IPv6 settings separately if e dey enabled.",
        "Select <strong>Review</strong>, inspect estimated costs, then <strong>Create Instance</strong>. Wait make provisioning finish and copy di public IPv4 from <strong>Overview</strong>. This flexible IP na separate resource wey you must manage im lifecycle."
      ],
      "apiSteps": [
        "Only for future provisioning plugin: create IAM application and grant di permissions wey e need for Instances, networking and storage inside di target Project.",
        "Open <strong>IAM & API keys → API keys → Generate API key</strong>. Select di application and expiry. Save di access key and di secret wey dem show only once; record di Project UUID and zone separately."
      ],
      "cleanupSteps": [
        "Back up data wey you want keep. For di correct Availability Zone, choose di instance <strong>… → Delete</strong>, type <code>DELETE</code>, and select deletion for associated IPs and Block Storage volumes wey you no need again.",
        "Confirm <strong>Delete Instance</strong>. Check for unwanted flexible IPs, volumes and snapshots wey remain; powering off alone no remove these resources."
      ]
    }
  }
};
