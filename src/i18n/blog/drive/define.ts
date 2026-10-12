import { en } from "./en";
import type { DriveBlock, DrivePost } from "./types";

export type LocalizedDrivePost = Omit<DrivePost, "body"> & { body: string[] };

export function defineDrive(input: LocalizedDrivePost): DrivePost {
  const expected = en.body.filter(block => "html" in block).length;
  if (input.body.length !== expected) {
    throw new Error(`Drive article has ${input.body.length} strings; expected ${expected}`);
  }
  let index = 0;
  const body: DriveBlock[] = en.body.map(block =>
    "html" in block ? { ...block, html: input.body[index++] } : block,
  );
  return { ...input, body };
}
