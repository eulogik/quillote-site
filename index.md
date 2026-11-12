# Quillote

A tiny code and Markdown editor for macOS, iPhone, iPad and Android, with Windows and Linux built from the same codebase. iOS 0.1.3 and Android 0.1.4 are live; desktop 0.1.3 is the public beta. Live mode is the hook: headings, emphasis, code and links style themselves in the buffer you are typing in, while the Markdown stays on disk.

- Site: https://quillote.com
- Built by: [Eulogik](https://eulogik.com)
- Status: public beta, free ($0, no paid tier)
- Install: macOS universal DMG (5.2 MB, Apple Silicon + Intel), App Store (6 MB, iPhone and iPad), Google Play (3.64 MB), or a signed Android APK (7.2 MB)
- Release: https://github.com/eulogik/quillote-site/releases/latest

## Guides

- [Markdown editor for Mac](https://quillote.com/markdown-editor-for-mac/)
- [Markdown editor for iPhone and Android](https://quillote.com/markdown-editor-for-iphone/)
- [Markdown with LaTeX math](https://quillote.com/markdown-editor-with-latex/)
- [Quillote vs Typora](https://quillote.com/typora-alternative/)
- [Press kit](https://quillote.com/press/)

## What it is

Quillote opens local plain-text files. Markdown gets three views: Source, Live and Read. Code files get Source, with syntax highlighting for around 100 languages. There is no account, no analytics and no telemetry.

The app uses the system webview instead of bundling Chromium. That is why the universal macOS DMG is 5.2 MB and the App Store download is 6 MB. The initial JavaScript is 143.1 KB gzipped and the app CSS is 5.0 KB. The size budgets are enforced in CI.

## Film

Two cuts, both from the real app:

- [16:9 film](https://quillote.com/assets/video/quillote-desktop-16x9-sound.mp4), 16 seconds, 1920 x 1080.
- [9:16 phone film](https://quillote.com/assets/video/quillote-phone-9x16-sound.mp4), 15 seconds, 1080 x 1920.

## The three views

- **Source**: the file exactly as it is, Markdown and code included.
- **Live**: headings, emphasis, links and code style themselves in place. Markers are hidden except on the line with the cursor. Tables and math remain source.
- **Read**: a clean article with tables, KaTeX math, links and images. KaTeX loads only when a document needs it.

## Features

- Around 100 code languages, each a lazy-loaded chunk.
- Command palette, keyboard shortcuts and 1 / 2 / 3 mode keys.
- Night and Ink themes. Night is the first-run default. System is an option.
- Crash snapshots every five seconds while the buffer is dirty.
- Autosave off on desktop, on for mobile.
- Print, PDF export on macOS, and copy as HTML.
- Phone formatting bar above the software keyboard.
- File picker accepts compatible text and code files only; binary files are refused with a readable message.

## Platforms

- macOS: universal (Apple Silicon + Intel), macOS 10.13+. The beta DMG is unsigned; right-click and Open the first time.
- iPhone and iPad: iOS 15+. 0.1.3 is live on the App Store, free, 6 MB.
- Android: Android 7.0 (API 24)+. 0.1.4 is live on Google Play at 3.64 MB, or sideload the 7.2 MB signed APK.
- Windows and Linux: the same Tauri codebase; CI-built installers are attached to the GitHub release. They are unsigned in the beta. Windows NSIS and MSI are 2.1 MB and 2.6 MB. Linux ships .deb and .rpm; the AppImage is over the 10 MB budget and is not shipped.

## Phone file model

Phones do not provide a stable path that apps can write back to reliably. Quillote copies a picked file into its own sandbox and edits the copy. A new file saves in the same folder and reopens from Recents. The original stays where it was.

## FAQ

### What is Quillote?

A small code and Markdown editor with Source, Live and Read views. It is built for people who keep their work in files, not in a database.

### Is it free?

Yes. Quillote is free. There is no paid tier, no subscription and no account.

### Does it work offline?

Yes. It opens files on your disk and needs no connection. Links open in your browser.

### Does it collect data?

No. No accounts, no analytics, no telemetry. The only network request is a link you choose to open.

### Does it support code?

Yes. Around 100 languages, syntax highlighting, line numbers and lazy-loaded grammars.

### Does it support math and tables?

Read mode renders tables and KaTeX math. Live mode keeps tables and math as source.

### Can I use it on my phone?

Yes. Quillote is live on the App Store and Google Play, and the signed APK is downloadable. Files copy into the app sandbox, and new files reopen from Recents. Share-sheet export is the next mobile update.

### How is it only 5.2 MB?

It uses the system webview instead of bundling Chromium, ships no UI or editor fonts, and uses a size-tuned Rust release profile. The universal DMG is 5.2 MB. The budgets run in CI.

### Is the macOS build signed?

Not yet. The beta DMG is unsigned; right-click the app and choose Open the first time.

### What about Windows and Linux?

The same codebase builds there. CI-built and unsigned, they are attached to the latest GitHub release: Windows NSIS and MSI, Linux .deb and .rpm.

## Links

- [Support](https://quillote.com/support/)
- [Privacy](https://quillote.com/privacy/)
- [Changelog](https://quillote.com/changelog/)
- [llms.txt](https://quillote.com/llms.txt)
- [GitHub](https://github.com/eulogik)
