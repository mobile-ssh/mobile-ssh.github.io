export type Html = string;

export type GoOutsideBlock =
  | { kind: "lead"; html: Html }
  | { kind: "p"; html: Html }
  | { kind: "h2"; html: Html }
  | { kind: "pull"; html: Html }
  | { kind: "checklist" }
  | { kind: "truth" };

/** One line of the conditions board: a running session, read as a surf break. */
export interface BoardRow {
  /** The session's name. Not translated — it is a tmux session on a server. */
  name: string;
  /** The swell reading, e.g. "2-3 ft". Locale-independent. */
  swell: string;
  /** What the session is doing: rising, holding, needs you. */
  state: string;
  /** Renders amber, matching the app's real agent-alert chip. */
  needsYou: boolean;
}

export interface ChecklistStep {
  heading: string;
  body: Html;
}

export interface TruthRow {
  item: string;
  value: string;
  survives: boolean;
}

export interface GoOutsidePost {
  metaTitle: string;
  metaDescription: string;
  back: string;
  eyebrow: string;
  title: string;
  standfirst: Html;
  author: string;
  date: string;
  readingTime: string;
  board: {
    ariaLabel: string;
    heading: string;
    timeLabel: string;
    breakHeading: string;
    swellHeading: string;
    stateHeading: string;
    rows: BoardRow[];
    statusLine: string;
    caption: string;
  };
  body: GoOutsideBlock[];
  checklist: {
    heading: string;
    steps: ChecklistStep[];
    promptLabel: string;
    prompt: string;
  };
  truth: {
    heading: string;
    itemHeading: string;
    resultHeading: string;
    yes: string;
    no: string;
    rows: TruthRow[];
    note: Html;
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
