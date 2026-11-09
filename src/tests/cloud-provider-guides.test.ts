import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { cloudGuides, providerText } from "../i18n/cloud-guides";
import { providers } from "../i18n/cloud-guides/providers";
import { providerIds } from "../i18n/cloud-guides/types";
import { locales } from "../i18n/locales";

const english = cloudGuides.en;
const pages = join(import.meta.dirname, "..", "pages");
const leaves = (value: unknown, path = ""): [string, string][] => {
  if (typeof value === "string") return [[path, value]];
  return Object.entries(value as Record<string, unknown>)
    .flatMap(([key, child]) => leaves(child, `${path}.${key}`));
};
const tags = (value: string) => value.match(/<[^>]*>/g) ?? [];
const code = (value: string) => [...value.matchAll(/<code>(.*?)<\/code>/g)].map(match => match[1]);
const placeholders = (value: string) => value.match(/\{[^}]+\}/g) ?? [];
const englishLeaves = new Map(leaves(english));
const officialHosts = new Set([
  "docs.aws.amazon.com", "ubuntu.com", "docs.cloud.google.com", "learn.microsoft.com",
  "docs.digitalocean.com", "docs.hetzner.com", "techdocs.akamai.com", "docs.vultr.com",
  "docs.oracle.com", "docs.ovhcloud.com", "www.scaleway.com"
]);
const scripts: Record<string, RegExp> = {
  zh: /\p{Script=Han}/u, yue: /\p{Script=Han}/u, ja: /[\p{Script=Hiragana}\p{Script=Katakana}]/u,
  ar: /\p{Script=Arabic}/u, arz: /\p{Script=Arabic}/u, ur: /\p{Script=Arabic}/u,
  hi: /\p{Script=Devanagari}/u, mr: /\p{Script=Devanagari}/u,
  bn: /\p{Script=Bengali}/u, te: /\p{Script=Telugu}/u, ta: /\p{Script=Tamil}/u,
  ru: /\p{Script=Cyrillic}/u
};

describe("cloud provider walkthroughs", () => {
  it("covers every supported locale and all eleven provider choices", () => {
    expect(Object.keys(cloudGuides).sort()).toEqual(locales.map(locale => locale.code).sort());
    expect(providerIds).toHaveLength(11);
    expect(Object.keys(providers)).toEqual([...providerIds]);
    expect(providerIds).toContain("aws-lightsail");
    expect(providerIds).toContain("aws-ec2");
  });

  it("supplies provider-specific console links, login values and official sources for each step", () => {
    for (const id of providerIds) {
      const metadata = providers[id];
      expect(metadata.id).toBe(id);
      expect(metadata.name.length).toBeGreaterThan(2);
      expect(metadata.login).toMatch(/^[a-z][a-z0-9_-]+$/);
      expect(new URL(metadata.consoleUrl).protocol).toBe("https:");
      expect(metadata.stepSources).toHaveLength(6);
      expect(metadata.apiSources).toHaveLength(2);
      expect(metadata.cleanupSources).toHaveLength(2);
      for (const href of [...metadata.stepSources, ...metadata.apiSources, ...metadata.cleanupSources]) {
        const url = new URL(href);
        expect(url.protocol).toBe("https:");
        expect(officialHosts.has(url.hostname), href).toBe(true);
      }
    }
  });

  for (const { code: locale } of locales) {
    const guide = cloudGuides[locale];
    it(`${locale}: translates every section and provider step without losing technical markup`, () => {
      const translatedLeaves = leaves(guide);
      expect(translatedLeaves.map(([path]) => path)).toEqual([...englishLeaves.keys()]);
      expect(Object.keys(guide.providers)).toEqual([...providerIds]);
      expect(guide.before).toHaveLength(3);
      expect(guide.networkRules).toHaveLength(4);
      for (const id of providerIds) {
        expect(guide.providers[id].consoleSteps).toHaveLength(6);
        expect(guide.providers[id].apiSteps).toHaveLength(2);
        expect(guide.providers[id].cleanupSteps).toHaveLength(2);
      }
      for (const [path, value] of translatedLeaves) {
        const source = englishLeaves.get(path)!;
        expect(value.trim().length, path).toBeGreaterThan(0);
        expect(tags(value), path).toEqual(tags(source));
        expect(tags(value).every(tag => /^<\/?(?:strong|code)>$/.test(tag)), path).toBe(true);
        expect(code(value), path).toEqual(code(source));
        expect(placeholders(value), path).toEqual(placeholders(source));
        for (const token of ["24.04", "51820", "51821", "Ed25519", "RSA", "TCP", "UDP", "IPv4", "IPv6"]) {
          if (source.includes(token)) expect(value, `${path}: ${token}`).toContain(token);
        }
        // Short UI labels and names can legitimately be shared between languages.
        if (locale !== "en" && locale !== "pcm" && source.length > 60) {
          expect(value, path).not.toBe(source);
          if (scripts[locale]) expect(scripts[locale].test(value), path).toBe(true);
        }
      }
    });

    it(`${locale}: links the overview to every guide and exposes the shared installation handoff`, () => {
      const overview = readFileSync(join(pages, locale === "en" ? "" : locale, "docs", "cloud-vpn.md"), "utf8");
      for (const id of providerIds) expect(overview).toContain(`](./${id}/)`);
      expect(overview.match(/id="wg-easy-install"/g)).toHaveLength(1);
      expect(overview).toMatch(/<a id="wg-easy-install"><\/a>\n\n## /);
      for (const id of providerIds) {
        const title = providerText(guide.title, providers[id].name);
        expect(title).toContain(providers[id].name);
        expect(title).not.toContain("{provider}");
      }
    });
  }
});
