// Content contract for the blog post "Eleven hours over the Atlantic".
//
// Everything a reader reads lives here. What deliberately does NOT live here:
// the split-flap departure board tiles and its four data rows, the terminal
// scrollback, the tmux status bar, pane-title slugs, box-drawing glyphs and the
// ASCII bar runs. Those are decorative, aria-hidden, or per-character markup
// that would be destroyed by translation (Arabic/Urdu shaping, Indic conjuncts),
// so they stay hard-coded in ElevenHours.astro.

/** A string that may carry inline markup (<strong>, <em>, <code>, entities). */
export type Html = string;

export interface FlightMeta {
  /** <title> and og/twitter title. */
  title: string;
  /** Meta description. */
  description: string;
}

export interface FlightBylineItem {
  /** Label including its colon, e.g. "author:". */
  key: string;
  value: string;
}

export interface FlightBoardLegend {
  time: string;
  flight: string;
  destination: string;
  remarks: string;
}

export interface FlightMasthead {
  /** Badge above the board. */
  eyebrow: string;
  /** The board's own title ("Departures"). */
  boardTitle: string;
  legend: FlightBoardLegend;
  /**
   * The real headline. It is the .sr-only text inside <h1>, and it is what a
   * screen reader announces — the flap tiles beside it are aria-hidden.
   */
  headline: string;
  /**
   * Optional visible headline, rendered under the board for non-English
   * locales only. The flap tiles stay English in every language, so this is
   * what a translated reader actually sees.
   */
  headlineTranslated?: string;
  deck: Html;
  byline: FlightBylineItem[];
}

export interface FlightSeatLine {
  time: string;
  /** The bolded verb, e.g. "attach". */
  verb: string;
  /** The rest of the line, e.g. "— 4 sessions, 1 grid". */
  text: string;
}

export interface FlightSeatColumn {
  /** Column tag, e.g. "seat 24b". */
  tag: string;
  lines: FlightSeatLine[];
}

export interface FlightOrbit {
  /** aria-label describing the whole diagram. */
  alt: string;
  geoLabel: string;
  geoValue: string;
  leoLabel: string;
  leoValue: string;
  /** Label under the aircraft glyph. */
  aircraft: string;
  caption: string;
}

export interface FlightChartRow {
  label: string;
  value: string;
}

export interface FlightChart {
  rows: FlightChartRow[];
  note: string;
}

export interface FlightRolloutItem {
  name: string;
  value: string;
  text: string;
}

export interface FlightRollout {
  items: FlightRolloutItem[];
  note: string;
}

export interface FlightTableRow {
  task: string;
  low: string;
  high: string;
  verdict: string;
}

export interface FlightTable {
  caption: string;
  /** Four column headers, in order. */
  head: string[];
  rows: FlightTableRow[];
}

export interface FlightWindow {
  /** tmux-style window name shown in bold. */
  title: string;
  body: Html;
  /** Screen-reader text for the bell flag; only the alerts window has one. */
  bellLabel?: string;
}

export interface FlightCta {
  /** Trailing shell comment on the command line, without the leading "#". */
  cmdComment: string;
  heading: string;
  prose: Html[];
  tags: string[];
  playButton: string;
  iosButton: string;
  note: string;
}

export interface FlightSources {
  heading: string;
  items: Html[];
  /** The less(1) prompt after "(END)". */
  quitHint: string;
}

export interface FlightSections {
  twoSeats: {
    heading: string;
    intro: Html[];
    /** Prose after the seat-24B / seat-24C split. */
    outro: Html[];
  };
  aboveYou: {
    heading: string;
    intro: Html[];
    afterDiagram: Html[];
    afterChart: Html[];
  };
  rollout: {
    heading: string;
    intro: Html[];
    afterFigure: Html[];
  };
  filmVsShell: {
    heading: string;
    /** Trailing shell comment, without the leading "#". */
    cmdComment: string;
    prose: Html[];
  };
  whatBreaks: {
    heading: string;
    intro: Html[];
    afterTable: Html[];
  };
  moveTheWork: {
    heading: string;
    intro: Html[];
    /** The <h3> above the prediction chart. */
    chartHeading: string;
    afterChart: Html[];
  };
  seat24c: {
    heading: string;
    lead: Html;
    outro: Html[];
  };
  caveat: {
    heading: string;
    prose: Html[];
  };
  descent: {
    heading: string;
    prose: Html[];
  };
}

export interface FlightPost {
  meta: FlightMeta;
  /** Link back to the blog index (the ← arrow is drawn by the component). */
  backLabel: string;
  masthead: FlightMasthead;
  sections: FlightSections;
  seat24b: FlightSeatColumn;
  seat24c: FlightSeatColumn;
  /** The three copy-mode pull quotes, in order. */
  quotes: string[];
  orbit: FlightOrbit;
  latencyChart: FlightChart;
  rolloutFigure: FlightRollout;
  latencyTable: FlightTable;
  moshChart: FlightChart;
  /** The four tmux "windows" in §7. */
  windows: FlightWindow[];
  cta: FlightCta;
  sources: FlightSources;
  /** Two colophon lines under the sources. */
  colophon: string[];
}
