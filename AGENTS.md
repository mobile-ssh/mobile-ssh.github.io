# Working on this repo

Guidance for coding agents (Claude Code, Codex, or a human doing the same job).

This site ships in 20 languages. Unlike the mobile apps, translations here are
**typed and structurally enforced** — `src/tests/translations.test.ts` fails the
build if any locale's arrays don't match English element-for-element. Read this
before touching copy.

## Localization

### Layout

| Path | Role |
|---|---|
| `src/i18n/types.ts` | The `Dict` interface — the contract every locale satisfies |
| `src/i18n/locales.ts` | The 20 locale codes, native names, `htmlLang`, `dir` |
| `src/i18n/dict/en.ts` | English source of truth |
| `src/i18n/dict/<loc>.ts` | One per locale, same shape |
| `src/i18n/version.ts` | App versions — **not** in the dicts |
| `src/pages/<loc>/docs/*.md` | 5 translated doc pages per locale |
| `astro.config.mjs` | `i18n.locales`, `defaultLocale: "en"` |

### Adding or changing a string

Adding a key means touching **22 files**: `types.ts`, `en.ts`, and all 19 other
dicts. TypeScript will tell you which are missing — `Dict` is not optional.

1. Add the field to `Dict` in `types.ts`.
2. Add it to `en.ts`.
3. Add it to all 19 other dicts with a real translation.
4. `npx vitest run` — must be green before you commit.

Changing existing English copy is the more common failure: it leaves 19 locales
describing the old behaviour. If you edit `en.ts`, update every locale in the
same change, or you have shipped a lie in 19 languages.

### Arrays must be the same length everywhere

The test suite asserts element counts against English for `home.advantages`,
`home.features`, `home.galleryAlts`, `home.galleryIosAlts`, `about.notices`,
`compare.featureRows`, `compare.agentAppsRows`, `compare.rows`,
`features.groups` **and each group's `items`**, `privacy.sections`, and
`docsIndex.cards`.

Add one bullet to an English feature group and you have broken 19 locales. Add
it everywhere in the same change.

Every `compare.agentAppsRows` entry must fill all app columns: `mobile`,
`onepilot`, `happy`, `omnara`, `chatgpt`, `claude`.

### Placeholders and versions

App versions live in `src/i18n/version.ts` (`VERSION_NAME`, `VERSION_CODE`,
`IOS_VERSION_NAME`, `LANGUAGE_COUNT`) — never hardcode a version in a dict.
`home.versionLine` must keep `{count}`, `{version}` and `{iosVersion}`; a test
asserts all three survive translation.

### Translations must not be English copy-paste

A test compares each locale's `home.intro`, `features.intro`, `compare.intro`,
`privacy.intro`, `nav.home` and at least 4 of 7 `advantages` titles against
English and fails if they're identical. Values that are legitimately
locale-independent are exempt: URLs, pure numbers, and the names
`Mobile SSH`, `SSH`, `SFTP`, `tmux`, `Termux`, `Termius`, `Google Play`,
`Android`, `Claude Code`, `Codex`.

`pcm` (Nigerian Pidgin) is exempt from these checks — it's English-lexified, so
sharing vocabulary is correct. It should still read as Pidgin
("Links wey you fit tap"), not as untranslated English.

### Doc pages

Every locale needs all five under `src/pages/<loc>/docs/`: `getting-started`,
`terminal`, `file-transfer`, `port-forwarding`, `troubleshooting`. Tests
require each to be over 500 characters and to reference
`../../../layouts/DocLayout.astro` — the relative depth differs from the
English pages in `src/pages/docs/`, so don't copy that frontmatter verbatim.

Editing an English doc means editing 19 translated copies too.

### Never translate

Product and protocol names: `SSH`, `SFTP`, `SCP`, `tmux`, `Mobile SSH`,
`Termux`, `Termius`, `Teleport`, `OSC 133`, `OSC 52`, `Ed25519`, `RSA`,
`ECDSA`, `DSA`, `Nerd Font`, `powerline`, `Kitty`, `VT100`, `xterm-256color`,
`JetBrains Mono`, `Source Code Pro`, `Solarized`, `Gruvbox`, `Dracula`, `Nord`,
`OTP`, `URL`, `Claude Code`, `Codex`.

### RTL

`ar`, `arz` and `ur` are `dir: "rtl"` in `locales.ts`. Use logical CSS
properties (`margin-inline-start`, not `margin-left`) so layouts mirror.

### Before you commit

```bash
npx vitest run      # 675 tests; structural parity + translation checks
npx astro build     # 223 pages across 20 locales
```

### Locale codes differ from the apps

The site uses `id`, `zh`, plus `arz` and `yue`. Android uses `in` (legacy
Indonesian), `zh-rCN`/`zh-rHK`, and `ar-rEG`; iOS uses `zh-Hans`/`zh-Hant` and
has no `pcm`/`arz`/`yue`. The three lists are deliberately not identical —
`ar-rEG` (Arabic, Egypt region) and `arz` (Egyptian Arabic, a distinct
language) are not the same identifier and don't map 1:1. Don't "fix" one list
to match another without deciding which is correct.
