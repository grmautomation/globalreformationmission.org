# TODO

## Completed

- [x] Replace generic location references with confirmed address: 29 Forest St, Lewiston, ME 04240
- [x] Update Visit page copy to remove pending-confirmation wording
- [x] Validate frontend after changes
- [x] Save checkpoint and deliver

### UX & Content Refinements (2026-06-02)

- [x] /visit: Contact card links directly to /connect page and Facebook
- [x] /stream: "More teaching on YouTube" link below video grid
- [x] /teachings: Convert placeholders to YouTube iframe embeds (playable, clickable)
- [x] /teachings: "Latest Public Videos" → "Latest Videos"
- [x] /teachings: "View channel for more teaching" link below grid
- [x] /devotions: "Today's Reading" → "Today's Devotional"
- [x] /stream: Featured video no longer duplicates in grid (slice(1))
- [x] Fetch 4 videos (up from 3) so grid always shows 3 after featured

### Video Pipeline

- [x] Replace stale YouTube RSS feed with YouTube Data API v3
- [x] Rewrite fetch script to use YouTube API (accurate chronological order)
- [x] Fix workflow: remove broken site-source working directory
- [x] Add YOUTUBE_API_KEY as GitHub repo secret

## Pending

- [ ] Monitor YouTube API quota usage (10k/day free, 4 req/day → negligible)
