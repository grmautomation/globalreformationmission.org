# Global Reformation Mission — Website

Public-facing website for Global Reformation Mission, a ministry dedicated to proclaiming the Gospel of Jesus Christ, building up the Body of Christ, and training disciples to transform the nations.

**Live:** https://globalreformation.org

## Tech Stack

- **Framework:** React + TypeScript (Vite)
- **Routing:** wouter (lightweight client-side router)
- **Styling:** Tailwind CSS + custom design tokens
- **UI Components:** shadcn/ui
- **Hosting:** GitHub Pages (deployed via GitHub Actions)
- **Video Data:** YouTube Data API v3 (auto-fetched every 6 hours)

## Design Philosophy

**Liturgical Editorial Modernism with cartographic mission cues.** Formal, spacious, scripture-centered, restrained — oriented around mission movement.

| Role | Color | Usage |
|---|---|---|
| Reformation Navy | `#031B3D` | Authority backgrounds |
| Midnight Mission | `#06112A` | Deep section panels |
| Parchment White | `#F7F3E8` | Reading surfaces |
| Covenant Gold | `#E5B84B` | Sacred emphasis, rules |
| Mission Blue | `#1E9BFF` | Links, buttons, actions |

## Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Conviction, mission, worship invitation |
| `/visit` | Visit | Reduce first-time visitor uncertainty |
| `/about` | About | Mission identity and theology |
| `/mission` | Mission | Church-planting pathway (pray, give, go, send) |
| `/teachings` | Teachings | Latest videos + channel link |
| `/stream` | Stream | Video hub: featured teaching + recent videos |
| `/devotions` | Devotions | Daily devotional reader + audio (Christ Himself widgets) |
| `/give` | Give | Partnership pathway (no payment processing) |
| `/connect` | Connect | Contact info and social links |

## Video Pipeline

Videos are sourced from the channel's YouTube Data API v3 feed:

- **Schedule:** Every 6 hours (GitHub Actions cron)
- **Fetches:** 4 most recent uploads
- **Uses:** 1 featured (stream hero) + 3 in grid
- **Secret:** `YOUTUBE_API_KEY` in repo secrets

Run manually: `gh workflow run "Update Videos from YouTube"`

## Development

```bash
pnpm dev          # Local dev server
pnpm build        # Production build
pnpm check        # TypeScript check
pnpm start        # Run production build
```

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.

## Project Documentation

- `site_architecture.md` — Architecture overview and design decisions
- `audit_findings.md` — Original brand and channel audit
- `generated_assets.md` — Image asset inventory
- `ideas.md` — Design brainstorming and chosen direction
- `qa_notes.md` — QA and changelog
- `todo.md` — Task tracking
