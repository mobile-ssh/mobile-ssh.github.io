import type { BlogIndexContent } from "./types";

export const en: BlogIndexContent = {
  metaTitle: "Blog | Mobile SSH",
  metaDescription:
    "Notes, opinions and field reports from Mobile SSH — the native SSH, SFTP and terminal client for Android, iPhone and iPad.",
  eyebrow: "Blog",
  h1: "Notes from your pocket",
  // The "\n" is a soft wrap carried over from the original markup. It is plain
  // whitespace in HTML; translations do not have to reproduce it.
  intro:
    "Opinions, field reports and the occasional obituary — from the team behind Mobile SSH, the\nnative SSH, SFTP and terminal client for Android, iPhone and iPad.",
  posts: {
    "eleven-hours-over-the-atlantic": {
      tag: "Field report",
      dateLabel: "August 10, 2026",
      readingTime: "8 min read",
      title: "Eleven hours over the Atlantic",
      excerpt:
        "Seat 24B is watching a film it has seen three times. Seat 24C is reviewing four servers on the same Wi-Fi. At 35,786 km light alone costs 477 ms round trip — here is what actually breaks when you work from a plane, and why it is not what you think.",
      cta: "Read the field report",
    },
    "laptops-are-dead": {
      tag: "Opinion",
      dateLabel: "July 27, 2026",
      readingTime: "7 min read",
      title: "Laptops are dead. Long live your pocket.",
      excerpt:
        "But SSH and TCP/IP survived. An affectionate eulogy for the laptop (1981–2026) and the elders who outlived it — TCP/IP, designed in 1974, and SSH, written in 1995, both still running in the device already in your hand.",
      cta: "Read the eulogy",
    },
  },
};
