// Translatable content for the "Laptops are dead" post
// (/blog/laptops-are-dead/, /<locale>/blog/laptops-are-dead/).
//
// Everything here is human-readable copy. Things that are *not* translatable —
// the phone frame, the terminal glyphs ($, •, ✓, ?, ·), the estate icons, the
// back arrow, the machine-readable date and every URL — live in
// src/components/blog/LaptopsAreDead.astro.
//
// Fields documented as *prose* are rendered with `set:html`, so they may carry
// inline markup (<strong>, <em>, <code>, <a>, &nbsp;, curly quotes, &mdash;).
// Keep their line breaks: HTML collapses them to spaces, so they only affect
// the shape of the source, not the page.

/** The fake scrollback in the lead figure's phone. One field per line. */
export interface LaptopsTerminal {
  /** Terminal title bar, e.g. "ssh · prod-01 · tmux". */
  title: string;
  /** Prompt user@host. */
  prompt: string;
  /** Working directory shown next to the prompt. */
  path: string;
  /** The command typed at the "$" prompt. */
  command: string;
  /** Agent progress line; the component prefixes the "•" bullet. */
  reading: string;
  /** Agent progress line; the component prefixes the "•" bullet. */
  patching: string;
  /** Success line; the component prefixes the "✓" glyph. */
  result: string;
  /** Attention line; the component prefixes the "?" glyph. */
  needsInput: string;
  /** The command left under the cursor. */
  push: string;
}

/** The Agent Alerts push notification overlaid on the phone. */
export interface LaptopsToast {
  /** Bolded notification title. */
  title: string;
  /** Server the alert came from. */
  host: string;
  /** Notification body. */
  body: string;
}

export interface LaptopsLeadFigure {
  terminal: LaptopsTerminal;
  toast: LaptopsToast;
  /** Caption under the figure. */
  caption: string;
}

/**
 * The body of the post, in order. `ledger` and `estate` are placement markers:
 * they carry no copy, they say where the ledger figure and the estate list are
 * rendered between the paragraphs. Keep them where they are when translating.
 */
export type LaptopsBlock =
  | { kind: "lead"; html: string }
  | { kind: "p"; html: string }
  | { kind: "h2"; html: string }
  | { kind: "pull"; html: string }
  | { kind: "ledger" }
  | { kind: "estate" };

/** One row of the order-of-service ledger. */
export interface LaptopsLedgerEntry {
  /** Year, e.g. "1974". */
  year: string;
  /** What happened. Prose. */
  event: string;
  /** Status pill, e.g. "still running". */
  status: string;
  /** True for the green "still running" style pill. */
  on: boolean;
}

export interface LaptopsLedger {
  entries: LaptopsLedgerEntry[];
  caption: string;
}

/** One item of the estate list. The icon is positional and lives in the component. */
export interface LaptopsEstateItem {
  heading: string;
  /** Prose. */
  body: string;
}

export interface LaptopsCta {
  /** Accessible name of the closing call-to-action region. */
  ariaLabel: string;
  heading: string;
  body: string;
  /** Pills under the heading, e.g. "No ads". */
  tags: string[];
  /** Label of the Google Play (closed testing) button. */
  playButton: string;
  /** Label of the TestFlight button. */
  iosButton: string;
  /**
   * Closed-testing footnote. Prose, and it embeds the link to the Play
   * listing: `{playUrl}` is replaced with the URL by the component.
   */
  note: string;
}

export interface LaptopsPost {
  metaTitle: string;
  metaDescription: string;
  /** Label of the back link; the component adds the "←" arrow. */
  back: string;
  /** Small uppercase label above the title. */
  eyebrow: string;
  /** First half of the h1. */
  titleLead: string;
  /** Second half of the h1, set in the muted style. */
  titleSoft: string;
  /** Standfirst under the h1. Prose. */
  standfirst: string;
  author: string;
  /** Human-readable date, e.g. "July 27, 2026". The machine date is in the component. */
  date: string;
  /** e.g. "7 min read". */
  readingTime: string;
  leadFigure: LaptopsLeadFigure;
  body: LaptopsBlock[];
  ledger: LaptopsLedger;
  estate: LaptopsEstateItem[];
  cta: LaptopsCta;
}
