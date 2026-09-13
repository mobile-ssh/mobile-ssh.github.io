import { createHash, X509Certificate } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { getDict } from "../i18n";
import { locales } from "../i18n/locales";
import openvpnRelease from "../data/openvpn-release.json";

const publicRoot = fileURLToPath(new URL("../../public/", import.meta.url));

describe("published component licenses and certificates", () => {
  for (const { code } of locales) {
    it(`${code}: every component links to a license text`, () => {
      const about = getDict(code).about;
      for (const notice of about.notices) {
        expect(notice.licenseUrl).toMatch(/^(https:\/\/|\/licenses\/)/);
        if (notice.licenseUrl.startsWith("/")) {
          expect(existsSync(publicRoot + notice.licenseUrl), notice.licenseUrl).toBe(true);
        }
      }
      for (const key of ["openvpnSourceHeading", "openvpnSourceBody", "openvpnSourceLabel",
        "certificatesHeading", "apkCertificateLabel", "apkCertificateBody",
        "serverCertificateBody", "signingHelpLabel"] as const) {
        expect(about[key].trim().length).toBeGreaterThan(0);
      }
      expect(about.openvpnSourceBody).toContain("MPL 2.0");
      expect(about.apkCertificateBody).toContain("Google Play");
    });
  }

  it("the source download matches its displayed immutable checksum", () => {
    expect(openvpnRelease.archiveUrl).toMatch(/^\/downloads\/openvpn\/[a-zA-Z0-9._-]+\.tar\.gz$/);
    const archive = readFileSync(publicRoot + openvpnRelease.archiveUrl);
    expect(createHash("sha256").update(archive).digest("hex")).toBe(openvpnRelease.sha256);
  });

  it("publishes only the intended public APK certificate", () => {
    const pem = readFileSync(publicRoot + "/certificates/mobile-ssh-sideload-signing.pem", "utf8");
    expect(pem).toMatch(/^-----BEGIN CERTIFICATE-----\n[A-Za-z0-9+/=\n]+\n-----END CERTIFICATE-----\n$/);
    const cert = new X509Certificate(pem);
    expect(cert.fingerprint256.replaceAll(":", "").toLowerCase()).toBe(
      "6def716eb76dc156948e4d5350b68665da6fff072431fdd1fe5a1ec5e7d0a9cb",
    );
  });
});
