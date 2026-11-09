import type { ProviderId, ProviderMetadata } from "./types";

export const providers: Record<ProviderId, ProviderMetadata> = {
  "aws-lightsail": {
    "id": "aws-lightsail",
    "name": "AWS Lightsail",
    "login": "ubuntu",
    "consoleUrl": "https://lightsail.aws.amazon.com/",
    "stepSources": [
      "https://docs.aws.amazon.com/lightsail/latest/userguide/getting-started-with-amazon-lightsail.html",
      "https://docs.aws.amazon.com/lightsail/latest/userguide/how-to-create-amazon-lightsail-instance-virtual-private-server-vps.html",
      "https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-managing-ssh-keys.html",
      "https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html",
      "https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-editing-firewall-rules.html",
      "https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-remove-ssh-key-on-instance.html"
    ],
    "apiSources": [
      "https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html",
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"
    ],
    "cleanupSources": [
      "https://docs.aws.amazon.com/lightsail/latest/userguide/delete-an-amazon-lightsail-instance.html",
      "https://docs.aws.amazon.com/lightsail/latest/userguide/how-to-delete-static-ip.html"
    ]
  },
  "aws-ec2": {
    "id": "aws-ec2",
    "name": "AWS EC2",
    "login": "ubuntu",
    "consoleUrl": "https://console.aws.amazon.com/ec2/",
    "stepSources": [
      "https://ubuntu.com/aws/docs/aws-how-to/instances/find-ubuntu-images/",
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-launch-parameters.html",
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html",
      "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html",
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-launch-parameters.html",
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html"
    ],
    "apiSources": [
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policies-for-amazon-ec2.html",
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html"
    ],
    "cleanupSources": [
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-ec2-instance-termination-works.html",
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html"
    ]
  },
  "google-cloud": {
    "id": "google-cloud",
    "name": "Google Cloud",
    "login": "mobileuser",
    "consoleUrl": "https://console.cloud.google.com/compute/instances",
    "stepSources": [
      "https://docs.cloud.google.com/compute/docs/create-linux-vm-instance",
      "https://docs.cloud.google.com/compute/docs/create-linux-vm-instance",
      "https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address",
      "https://docs.cloud.google.com/compute/docs/connect/add-ssh-keys",
      "https://docs.cloud.google.com/firewall/docs/using-firewalls",
      "https://docs.cloud.google.com/compute/docs/connect/standard-ssh"
    ],
    "apiSources": [
      "https://docs.cloud.google.com/compute/docs/access",
      "https://docs.cloud.google.com/iam/docs/keys-create-delete"
    ],
    "cleanupSources": [
      "https://docs.cloud.google.com/compute/docs/instances/deleting-instance",
      "https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address"
    ]
  },
  "azure": {
    "id": "azure",
    "name": "Microsoft Azure",
    "login": "azureuser",
    "consoleUrl": "https://portal.azure.com/",
    "stepSources": [
      "https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal",
      "https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal",
      "https://learn.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys",
      "https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/associate-public-ip-address-vm",
      "https://learn.microsoft.com/en-us/azure/virtual-network/manage-network-security-group",
      "https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal"
    ],
    "apiSources": [
      "https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal",
      "https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal"
    ],
    "cleanupSources": [
      "https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal",
      "https://learn.microsoft.com/en-us/azure/virtual-machines/delete"
    ]
  },
  "digitalocean": {
    "id": "digitalocean",
    "name": "DigitalOcean",
    "login": "root",
    "consoleUrl": "https://cloud.digitalocean.com/",
    "stepSources": [
      "https://docs.digitalocean.com/products/droplets/how-to/create/",
      "https://docs.digitalocean.com/products/droplets/how-to/create/",
      "https://docs.digitalocean.com/products/droplets/how-to/create/",
      "https://docs.digitalocean.com/products/droplets/how-to/create/",
      "https://docs.digitalocean.com/products/networking/firewalls/how-to/create/",
      "https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/"
    ],
    "apiSources": [
      "https://docs.digitalocean.com/reference/api/create-personal-access-token/",
      "https://docs.digitalocean.com/reference/api/create-personal-access-token/"
    ],
    "cleanupSources": [
      "https://docs.digitalocean.com/products/droplets/how-to/destroy/",
      "https://docs.digitalocean.com/products/networking/reserved-ips/how-to/delete/"
    ]
  },
  "hetzner": {
    "id": "hetzner",
    "name": "Hetzner Cloud",
    "login": "root",
    "consoleUrl": "https://console.hetzner.com/",
    "stepSources": [
      "https://docs.hetzner.com/cloud/firewalls/getting-started/creating-a-firewall/",
      "https://docs.hetzner.com/cloud/servers/getting-started/creating-a-server/",
      "https://docs.hetzner.com/cloud/servers/getting-started/creating-a-server/",
      "https://docs.hetzner.com/cloud/servers/getting-started/creating-a-server/",
      "https://docs.hetzner.com/cloud/servers/getting-started/creating-a-server/",
      "https://docs.hetzner.com/cloud/servers/getting-started/creating-a-server/"
    ],
    "apiSources": [
      "https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/",
      "https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/"
    ],
    "cleanupSources": [
      "https://docs.hetzner.com/cloud/servers/faq/",
      "https://docs.hetzner.com/cloud/servers/primary-ips/faq/"
    ]
  },
  "linode": {
    "id": "linode",
    "name": "Akamai Cloud (Linode)",
    "login": "root",
    "consoleUrl": "https://cloud.linode.com/",
    "stepSources": [
      "https://techdocs.akamai.com/cloud-computing/docs/create-a-cloud-firewall",
      "https://techdocs.akamai.com/cloud-computing/docs/manage-firewall-rules",
      "https://techdocs.akamai.com/cloud-computing/docs/create-a-compute-instance",
      "https://techdocs.akamai.com/cloud-computing/docs/create-a-compute-instance",
      "https://techdocs.akamai.com/cloud-computing/docs/create-a-compute-instance",
      "https://techdocs.akamai.com/cloud-computing/docs/create-a-compute-instance"
    ],
    "apiSources": [
      "https://techdocs.akamai.com/cloud-computing/docs/manage-personal-access-tokens",
      "https://techdocs.akamai.com/linode-api/reference/post-reserved-ip"
    ],
    "cleanupSources": [
      "https://techdocs.akamai.com/cloud-computing/docs/stop-further-billing",
      "https://techdocs.akamai.com/cloud-computing/docs/managing-reserved-ips"
    ]
  },
  "vultr": {
    "id": "vultr",
    "name": "Vultr",
    "login": "root",
    "consoleUrl": "https://console.vultr.com/",
    "stepSources": [
      "https://docs.vultr.com/products/orchestration/ssh-keys/add-ssh-keys",
      "https://docs.vultr.com/products/network/firewall-groups/provisioning",
      "https://docs.vultr.com/products/compute/instances/cloud-compute/provisioning",
      "https://docs.vultr.com/products/compute/instances/cloud-compute/provisioning",
      "https://docs.vultr.com/products/compute/instances/cloud-compute/provisioning",
      "https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address"
    ],
    "apiSources": [
      "https://docs.vultr.com/platform/other/api/enable-user-api-access",
      "https://docs.vultr.com/platform/other/api/manage-api-access-control"
    ],
    "cleanupSources": [
      "https://docs.vultr.com/products/compute/instances/cloud-compute/management/destroy-instance",
      "https://docs.vultr.com/products/network/reserved-ips/management/delete"
    ]
  },
  "oracle-cloud": {
    "id": "oracle-cloud",
    "name": "Oracle Cloud Infrastructure",
    "login": "ubuntu",
    "consoleUrl": "https://cloud.oracle.com/",
    "stepSources": [
      "https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/launchinginstance.htm",
      "https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/quickstartnetworking.htm",
      "https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/securitylists.htm",
      "https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/launchinginstance.htm",
      "https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/managingkeypairs.htm",
      "https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm"
    ],
    "apiSources": [
      "https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm",
      "https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm"
    ],
    "cleanupSources": [
      "https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/terminatinginstance.htm",
      "https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm"
    ]
  },
  "ovhcloud": {
    "id": "ovhcloud",
    "name": "OVHcloud Public Cloud",
    "login": "ubuntu",
    "consoleUrl": "https://www.ovh.com/manager/",
    "stepSources": [
      "https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started",
      "https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started",
      "https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started",
      "https://docs.ovhcloud.com/en/guides/public-cloud/cross-functional/create-and-delete-a-user",
      "https://docs.ovhcloud.com/en/guides/public-cloud/compute/setup-security-group",
      "https://docs.ovhcloud.com/en/guides/public-cloud/compute/setup-security-group"
    ],
    "apiSources": [
      "https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps",
      "https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps"
    ],
    "cleanupSources": [
      "https://docs.ovhcloud.com/en/guides/public-cloud/compute/first-steps-with-public-cloud-instance",
      "https://docs.ovhcloud.com/en/guides/public-cloud/compute/first-steps-with-public-cloud-instance"
    ]
  },
  "scaleway": {
    "id": "scaleway",
    "name": "Scaleway",
    "login": "root",
    "consoleUrl": "https://console.scaleway.com/",
    "stepSources": [
      "https://www.scaleway.com/en/docs/iam/security/create-ssh-key/",
      "https://www.scaleway.com/en/docs/instances/how-to/use-security-groups/",
      "https://www.scaleway.com/en/docs/instances/how-to/use-security-groups/",
      "https://www.scaleway.com/en/docs/instances/how-to/create-an-instance/",
      "https://www.scaleway.com/en/docs/instances/how-to/create-an-instance/",
      "https://www.scaleway.com/en/docs/instances/how-to/create-an-instance/"
    ],
    "apiSources": [
      "https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/",
      "https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/"
    ],
    "cleanupSources": [
      "https://www.scaleway.com/en/docs/instances/how-to/delete-instance/",
      "https://www.scaleway.com/en/docs/instances/reference-content/understanding-instance-pricing/"
    ]
  }
};
