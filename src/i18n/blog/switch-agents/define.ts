import { en } from "./en";
import type { Html, SwitchAgentsBlock, SwitchAgentsPost } from "./types";

type LocalizedSwitchAgentsPost = Omit<SwitchAgentsPost, "body"> & { body: Html[] };

/**
 * Locale modules provide only the twenty translatable body strings. Placement
 * markers (limits/carry/handoff) inherit their positions from English, so a
 * translator cannot silently move or drop a rendered figure.
 */
export function defineSwitchAgents(input: LocalizedSwitchAgentsPost): SwitchAgentsPost {
  const expected = en.body.filter((block) => "html" in block).length;
  if (input.body.length !== expected) {
    throw new Error(`Switch-agents body has ${input.body.length} strings; expected ${expected}`);
  }

  let index = 0;
  const body: SwitchAgentsBlock[] = en.body.map((block) =>
    "html" in block ? { ...block, html: input.body[index++] } : block,
  );
  return { ...input, body };
}
