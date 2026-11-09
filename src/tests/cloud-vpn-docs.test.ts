import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { locales } from "../i18n/locales";
import { getDict } from "../i18n";

const pages = join(import.meta.dirname, "..", "pages");
const read = (code: string) => readFileSync(join(pages, code === "en" ? "" : code, "docs", "cloud-vpn.md"), "utf8");
const english = read("en");
const codeBlocks = (text: string) => text.match(/```[\s\S]*?```/g) ?? [];
const inlineCode = (text: string) => [...text.replace(/```[\s\S]*?```/g, "").matchAll(/`([^`\n]+)`/g)].map(match => match[1]);
const links = (text: string) => [...text.matchAll(/\]\(([^)]+)\)/g)].map(match => match[1]);
const providerNames = (text: string) => text.split("\n").filter(line => line.startsWith("| ")).slice(2).map(line => line.split("|")[1].trim());

describe("cloud VM guide translations", () => {
  for (const { code } of locales) {
    it(`${code}: preserves provider coverage, commands and source links`, () => {
      const content = read(code);
      expect(providerNames(content)).toEqual(providerNames(english));
      expect(providerNames(content)).toHaveLength(10);
      expect(codeBlocks(content)).toEqual(codeBlocks(english));
      expect(inlineCode(content)).toEqual(inlineCode(english));
      expect(links(content)).toEqual(links(english));
      expect(content).toContain('class="doc-table" tabindex="0" role="region"');
    });

    it(`${code}: names the same page in navigation, card, title and heading`, () => {
      const content = read(code);
      const dict = getDict(code);
      const card = dict.docsIndex.cards.find(card => card.slug === "cloud-vpn");
      const title = content.match(/^title: "(.*)"$/m)?.[1];
      expect(title).toBeTruthy();
      expect(card?.title).toBe(title);
      expect(dict.docsNav.cloudVpn).toBe(title);
      expect(content.match(/^# (.*)$/m)?.[1]).toBe(title);
      if (code !== "en" && code !== "pcm") expect(title).not.toBe(getDict("en").docsNav.cloudVpn);
    });
  }
});
