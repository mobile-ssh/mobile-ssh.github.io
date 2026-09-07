import { en } from "./en";
import type { GoOutsideBlock, GoOutsidePost, Html } from "./types";

type LocalizedGoOutsidePost = Omit<GoOutsidePost, "body"> & { body: Html[] };

/**
 * Locale modules provide only the translatable body strings. Placement markers
 * (conditions/checklist/truth) inherit their positions from English, so a
 * translator cannot silently move or drop a rendered figure. The count is
 * checked at module-eval time, which means a mismatch fails the build rather
 * than waiting for a test to notice.
 */
export function defineGoOutside(input: LocalizedGoOutsidePost): GoOutsidePost {
  const expected = en.body.filter((block) => "html" in block).length;
  if (input.body.length !== expected) {
    throw new Error(`Go-outside body has ${input.body.length} strings; expected ${expected}`);
  }

  let index = 0;
  const body: GoOutsideBlock[] = en.body.map((block) =>
    "html" in block ? { ...block, html: input.body[index++] } : block,
  );
  return { ...input, body };
}
