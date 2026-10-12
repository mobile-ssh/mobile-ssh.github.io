import { describe, expect, it } from "vitest";
import { locales } from "../i18n/locales";
import { getBlogIndex } from "../i18n/blog/index-page";
import { getDrive } from "../i18n/blog/drive";
import { defineDrive } from "../i18n/blog/drive/define";

const en = getDrive("en");
const slug = "the-blog-post-that-started-on-the-drive-home";
const anchors = (html: string) => [...html.matchAll(/href="(#[^"]+)"/g)].map(match => match[1]);

function checkComplete(actual: unknown, expected: unknown, path = "post") {
  if (typeof expected === "string") {
    expect(typeof actual, path).toBe("string");
    expect((actual as string).trim().length, path).toBeGreaterThan(0);
  } else if (Array.isArray(expected)) {
    expect(Array.isArray(actual), path).toBe(true);
    expect(actual, path).toHaveLength(expected.length);
    expected.forEach((value, i) => checkComplete((actual as unknown[])[i], value, `${path}[${i}]`));
  } else if (expected && typeof expected === "object") {
    expect(actual, path).toBeTruthy();
    expect(Object.keys(actual as object).sort(), path).toEqual(Object.keys(expected).sort());
    for (const [key, value] of Object.entries(expected)) {
      checkComplete((actual as Record<string, unknown>)[key], value, `${path}.${key}`);
    }
  }
}

describe("driving story localization", () => {
  it("includes all four products and exactly one comparison", () => {
    expect(en.comparison.rows.map(row => row.id)).toEqual(["t3", "moshi", "mobile", "paseo"]);
    expect(en.body.filter(block => block.kind === "comparison")).toHaveLength(1);
  });

  for (const { code } of locales) {
    it(`${code}: supplies complete content with all four products`, () => {
      const t = getDrive(code);
      checkComplete(t, en);
      expect(t.body.map(block => block.kind)).toEqual(en.body.map(block => block.kind));
      expect(t.comparison.rows.map(row => row.id)).toEqual(en.comparison.rows.map(row => row.id));
      const body = t.body.flatMap(block => "html" in block ? [block.html] : []).join(" ");
      for (const name of ["T3 Code", "Moshi", "Mobile SSH", "paseo.sh"]) expect(body).toContain(name);
    });

    it(`${code}: keeps citations with their corresponding paragraphs`, () => {
      getDrive(code).body.forEach((block, i) => {
        const original = en.body[i];
        if ("html" in block && "html" in original) expect(anchors(block.html)).toEqual(anchors(original.html));
      });
    });

    it(`${code}: index card matches the article`, () => {
      const t = getDrive(code);
      const card = getBlogIndex(code).posts[slug];
      expect(card.title).toBe(t.title);
      expect(card.tag).toBe(t.eyebrow);
      expect(card.dateLabel).toBe(t.date);
      expect(card.readingTime).toBe(t.readingTime);
      expect(card.excerpt.trim()).not.toBe("");
      expect(card.cta.trim()).not.toBe("");
    });

    if (code !== "en") {
      it(`${code}: uses its own translated prose, including evidence limits`, () => {
        const t = getDrive(code);
        expect(t).not.toBe(en);
        for (const key of ["title", "standfirst", "evidence"] as const) expect(t[key]).not.toBe(en[key]);
        expect(t.sources.mobileAudit).not.toBe(en.sources.mobileAudit);
        if (code !== "pcm") {
          t.body.forEach((block, i) => {
            const original = en.body[i];
            if ("html" in block && "html" in original) expect(block.html).not.toBe(original.html);
          });
          expect(getBlogIndex(code).posts[slug].excerpt).not.toBe(getBlogIndex("en").posts[slug].excerpt);
        }
      });
    }
  }

  it("rejects missing paragraphs before they can shift translated sections", () => {
    const body = en.body.flatMap(block => "html" in block ? [block.html] : []);
    expect(() => defineDrive({ ...en, body: body.slice(1) })).toThrow(/expected 25/);
  });
});
