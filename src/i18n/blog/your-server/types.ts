export type Html = string;
export type HostingModel = "managed" | "cloud" | "owned";
export type ControlDimension = "hardware" | "admin" | "storage" | "access" | "portability" | "maintenance";

export type YourServerBlock =
  | { kind: "lead" | "p" | "h2" | "pull"; html: Html }
  | { kind: "comparison" | "checklist" };

export interface YourServerPost {
  metaTitle: string;
  metaDescription: string;
  back: string;
  eyebrow: string;
  title: string;
  standfirst: string;
  author: string;
  date: string;
  readingTime: string;
  figure: {
    heading: string;
    phone: string;
    connection: string;
    hosts: { id: "owned" | "cloud"; title: string; detail: string }[];
    workspace: string;
    modelConnection: string;
    model: string;
    caption: string;
  };
  body: YourServerBlock[];
  comparison: {
    heading: string;
    dimension: string;
    models: { id: HostingModel; title: string }[];
    rows: { id: ControlDimension; label: string; managed: string; cloud: string; owned: string }[];
    note: string;
  };
  checklist: {
    heading: string;
    steps: { heading: string; body: string }[];
  };
  sources: {
    heading: string;
    aws: string;
    anthropic: string;
    google: string;
    checked: string;
  };
  cta: {
    heading: string;
    body: string;
    playButton: string;
    iosButton: string;
    docsLink: string;
    privacyLink: string;
  };
}
