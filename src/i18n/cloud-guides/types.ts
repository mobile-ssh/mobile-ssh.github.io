export const providerIds = ["aws-lightsail", "aws-ec2", "google-cloud", "azure", "digitalocean", "hetzner", "linode", "vultr", "oracle-cloud", "ovhcloud", "scaleway"] as const;
export type ProviderId = typeof providerIds[number];
export type Pair = [string, string];
export type SixSteps = [string, string, string, string, string, string];

export interface ProviderContent {
  consoleSteps: SixSteps;
  apiSteps: Pair;
  cleanupSteps: Pair;
}

export interface ProviderMetadata {
  id: ProviderId;
  name: string;
  login: string;
  consoleUrl: string;
  stepSources: SixSteps;
  apiSources: Pair;
  cleanupSources: Pair;
}

export interface CloudGuides {
  title: string;
  description: string;
  intro: string;
  back: string;
  indexHeading: string;
  indexIntro: string;
  cardAction: string;
  navLabel: string;
  openConsole: string;
  availability: string;
  availabilityLink: string;
  checked: string;
  beforeHeading: string;
  before: [string, string, string];
  networkHeading: string;
  networkRules: [string, string, string, string];
  stepsHeading: string;
  sourceLink: string;
  connectHeading: string;
  connectText: string;
  hostLabel: string;
  hostValue: string;
  portLabel: string;
  userLabel: string;
  credentialLabel: string;
  credentialValue: string;
  identityText: string;
  connectionGuide: string;
  vpnHeading: string;
  vpnText: string;
  vpnLink: string;
  apiHeading: string;
  apiIntro: string;
  apiSecretNote: string;
  cleanupHeading: string;
  cleanupWarning: string;
  providers: Record<ProviderId, ProviderContent>;
}
