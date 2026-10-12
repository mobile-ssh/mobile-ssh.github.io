export type ProductId = "t3" | "moshi" | "mobile" | "paseo";
export type DriveBlock =
  | { kind: "lead" | "p" | "h2" | "quote"; html: string }
  | { kind: "comparison" };

export interface DrivePost {
  metaTitle: string;
  metaDescription: string;
  back: string;
  eyebrow: string;
  title: string;
  standfirst: string;
  author: string;
  date: string;
  readingTime: string;
  evidence: string;
  body: DriveBlock[];
  comparison: {
    heading: string;
    productHeading: string;
    voiceHeading: string;
    fitHeading: string;
    rows: { id: ProductId; voice: string; fit: string }[];
    note: string;
  };
  sources: {
    heading: string;
    mobileAudit: string;
    t3Voice: string;
    t3Ios: string;
    t3Git: string;
    t3Stage: string;
    moshiVoice: string;
    moshiConversation: string;
    paseoVoice: string;
    paseoWork: string;
    paseoBackground: string;
    mobileVoice: string;
    mobileHeadset: string;
    mobileNoise: string;
    mobileAudio: string;
    mobileIos: string;
    mobileCar: string;
  };
  cta: { heading: string; body: string; docsLink: string; featuresLink: string };
}
