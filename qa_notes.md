# Visual QA Notes

## Initial Build

The homepage loads successfully in the browser preview. The navigation, hero background, brand typography, navy/parchment/gold/mission-blue styling, hero calls to action, mission pillar section, embedded featured YouTube video, and footer links are visible. The text contrast on the dark hero is readable, and the formal editorial design direction is consistent with the selected Liturgical Editorial Modernism concept.

## Streaming Page

The `/stream` page loads successfully. It includes the dedicated streaming hero, a featured embedded YouTube video, a featured teaching panel, recent embedded videos, and direct links to the official YouTube channel and Facebook page. Embedded YouTube players render with visible controls and titles.

## Build Validation

`pnpm run check` passed. `pnpm run build` completed successfully. Vite reported a non-blocking chunk-size warning, which is acceptable for this static mockup and can be addressed later with route-level code splitting if needed.

---

## UX & Content Refinements (2026-06-02)

### /visit — Contact card
Previously plain text ("connect page or social channels"), now has clickable `<a>` links to `/connect` and the Facebook page. Underlined gold-accent styling consistent with the design system.

### /teachings — Video cards
Replaced static numbered-thumbnail placeholders with YouTube iframe embeds (matching the /stream pattern). Videos are now playable inline, show YouTube thumbnails, and have clickable "Open video" links. Removed the "Available on the mission's YouTube channel" placeholder text.

### /stream — Video grid duplication
The featured video (top) was also appearing as the first card in the "Current teaching" grid. Fixed with `videos.slice(1)` — grid now shows videos 2, 3, and 4.

### Copy edits
- /teachings: "Latest Public Videos" → "Latest Videos"
- /devotions: "Today's Reading" → "Today's Devotional"

### Video pipeline
Replaced YouTube RSS feed (stale, unreliable ordering) with YouTube Data API v3. Fetch script uses `playlistItems` endpoint (uploads playlist) — more reliable than `search` which can lag hours behind new uploads. Fetches 4 videos so /stream can feature 1 and show 3 in the grid. Runs every 6 hours via GitHub Actions. API key stored as repo secret.

#### Workflow fixes (2026-07-11)
- **Permission denied on push:** Added `permissions: contents: write` to the job — default GITHUB_TOKEN is read-only
- **Stale video data:** Switched from `/search` to `/playlistItems` endpoint — the uploads playlist returns actual latest uploads immediately, including streams

---

## Ko-fi Giving Integration (2026-06-08)

### /give — Complete redesign

The page was rebuilt from a mockup (no payment processing, dead-end Facebook link) into a live donation flow:

- **Ko-fi account** created at `ko-fi.com/globalreformationmission` for card/PayPal processing
- **PageHero component fixed** — was using wouter's `Link` (client-side router) for the CTA, which silently broke external URLs. Now detects `http`-prefixed hrefs and renders a native `<a target="_blank">` instead.
- **Layout restructured** into a 3-section narrative flow matching the site's rhythm:
  1. Conviction (hero, dark navy) — "Support the Mission" CTA
  2. Grounding (parchment, two columns) — scripture quote-ledger (2 Cor 9:7) + giving theology
  3. Action (midnight, two columns) — "Give Now" button + QR code in cta-panel
- **QR code** placed in `client/public/give-qr.png` for Vite asset pipeline; encodes the Ko-fi donation URL for mobile scanning
- **All documentation updated**: site_architecture.md, README.md, todo.md
