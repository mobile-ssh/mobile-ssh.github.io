import { en } from "./en";
import type { Html, YourServerBlock, YourServerPost } from "./types";

export type LocalizedYourServerPost = Omit<YourServerPost, "body"> & { body: Html[] };

/** English owns block placement; translations cannot drop the table or checklist. */
export function defineYourServer(input: LocalizedYourServerPost): YourServerPost {
  const expected = en.body.filter(block => "html" in block).length;
  if (input.body.length !== expected) {
    throw new Error(`Your-server body has ${input.body.length} strings; expected ${expected}`);
  }
  let index = 0;
  const body: YourServerBlock[] = en.body.map(block =>
    "html" in block ? { ...block, html: input.body[index++] } : block,
  );
  return { ...input, body };
}
