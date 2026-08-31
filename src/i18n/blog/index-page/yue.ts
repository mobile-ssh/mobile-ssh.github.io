import type { BlogIndexContent } from "./types";

export const yue: BlogIndexContent = {
  metaTitle: "網誌 | Mobile SSH",
  metaDescription:
    "來自 Mobile SSH 嘅隨筆、觀點同現場報告 —— 一款為 Android、iPhone 同 iPad 而設嘅原生 SSH、SFTP 同終端機客戶端。",
  eyebrow: "網誌",
  h1: "褲袋入面嘅筆記",
  intro:
    "觀點、現場報告，偶爾仲有一篇悼文 —— 來自 Mobile SSH 團隊，一款為 Android、iPhone 同 iPad 而設嘅原生 SSH、SFTP 同終端機客戶端。",
  posts: {
    "switch-agents-not-apps": {
      tag: "工作流程", dateLabel: "2026年8月30日", readingTime: "閱讀約 6 分鐘",
      title: "轉代理，唔好轉 app。",
      excerpt: "Claude Code 或 Codex 去到用量或者開支上限，訂閱可以停，但 repository 唔會。保留同一部伺服器、working tree 同手機介面——轉一條 terminal command，唔好換成個 app。",
      cta: "睇工作流程",
    },
    "eleven-hours-over-the-atlantic": {
      tag: "現場報告",
      dateLabel: "2026 年 8 月 10 日",
      readingTime: "閱讀約 8 分鐘",
      title: "大西洋上空十一個鐘",
      excerpt:
        "24B 位喺度睇緊一齣佢睇過三次嘅戲。24C 位喺同一個 Wi-Fi 上面審查緊四部伺服器。喺 35,786 km 嘅高度，單係光行一個來回就要 477 ms —— 喺飛機上面做嘢，真正頂唔順嘅係乜，同埋點解同你諗嘅唔一樣。",
      cta: "睇呢篇現場報告",
    },
    "laptops-are-dead": {
      tag: "觀點",
      dateLabel: "2026 年 7 月 27 日",
      readingTime: "閱讀約 7 分鐘",
      title: "手提電腦已死。你個褲袋萬歲。",
      excerpt:
        "但 SSH 同 TCP/IP 仲喺度。謹以此文送別手提電腦（1981–2026），同埋兩位活得過佢嘅長輩 —— 1974 年設計嘅 TCP/IP 同 1995 年寫成嘅 SSH，今日仲喺你手上嗰部機度跑緊。",
      cta: "睇呢篇悼文",
    },
  },
};
