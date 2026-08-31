// Translatable content for "Switch agents, not apps"
// (/blog/switch-agents-not-apps/, /<locale>/blog/switch-agents-not-apps/).

export type Html = string;

export type SwitchAgentsBlock =
  | { kind: "lead"; html: Html }
  | { kind: "p"; html: Html }
  | { kind: "h2"; html: Html }
  | { kind: "pull"; html: Html }
  | { kind: "limits" }
  | { kind: "carry" }
  | { kind: "handoff" };

export interface LimitKind {
  heading: string;
  body: Html;
  action: Html;
}

export interface CarryRow {
  item: string;
  value: string;
  shared: boolean;
}

export interface HandoffStep {
  heading: string;
  body: Html;
}

export interface SwitchAgentsPost {
  metaTitle: string;
  metaDescription: string;
  back: string;
  eyebrow: string;
  title: string;
  standfirst: Html;
  author: string;
  date: string;
  readingTime: string;
  figure: {
    ariaLabel: string;
    claudePane: string;
    codexPane: string;
    sameHost: string;
    carriedWork: string;
    ready: string;
    caption: string;
  };
  body: SwitchAgentsBlock[];
  limits: {
    ariaLabel: string;
    actionLabel: string;
    items: LimitKind[];
  };
  carry: {
    heading: string;
    itemHeading: string;
    resultHeading: string;
    yes: string;
    no: string;
    rows: CarryRow[];
    note: Html;
  };
  handoff: {
    heading: string;
    steps: HandoffStep[];
    promptLabel: string;
    prompt: string;
  };
  sources: {
    heading: string;
    intro: string;
    openai: string;
    anthropic: string;
    checked: string;
  };
  cta: {
    ariaLabel: string;
    heading: string;
    body: string;
    tags: string[];
    playButton: string;
    iosButton: string;
    note: Html;
  };
}
