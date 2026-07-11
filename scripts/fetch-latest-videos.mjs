#!/usr/bin/env node

/**
 * Fetches the latest 3 videos from the Global Reformation Mission YouTube channel
 * via the YouTube Data API v3 **uploads playlist** endpoint.
 * Uses playlistItems which is more reliable than search for latest uploads.
 *
 * Usage: YOUTUBE_API_KEY=... node scripts/fetch-latest-videos.mjs
 *
 * Updates client/src/lib/siteData.ts with the fresh data.
 */

const CHANNEL_ID = "UC5TzLV6MqV7JB7rdvdOtqpA";
// Uploads playlist ID: UU + channel_id (without the UC prefix)
const UPLOADS_PLAYLIST_ID = "UU5TzLV6MqV7JB7rdvdOtqpA";

const API_KEY = process.env.YOUTUBE_API_KEY;
if (!API_KEY) {
  console.error("YOUTUBE_API_KEY environment variable is required");
  process.exit(1);
}

const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=4&key=${API_KEY}`;
const SITE_DATA_PATH = new URL("../client/src/lib/siteData.ts", import.meta.url);

function relativeAge(isoDate) {
  const now = Date.now();
  const then = new Date(isoDate).getTime();
  const diffMs = now - then;
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);

  if (diffHours < 1) return "Streamed less than an hour ago";
  if (diffHours < 24) return `Streamed ${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  if (diffDays < 7) return `Streamed ${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  if (diffWeeks < 5) return `Streamed ${diffWeeks} week${diffWeeks === 1 ? "" : "s"} ago`;
  return `Streamed ${diffMonths} month${diffMonths === 1 ? "" : "s"} ago`;
}

async function main() {
  console.log(`Fetching videos via YouTube Data API playlistItems for channel ${CHANNEL_ID}`);

  const response = await fetch(API_URL);

  if (!response.ok) {
    const body = await response.text();
    console.error(`YouTube API error: ${response.status} ${response.statusText}`);
    console.error(body);
    process.exit(1);
  }

  const data = await response.json();

  if (!data.items || data.items.length === 0) {
    console.error("No videos found in API response");
    process.exit(1);
  }

  // playlistItems returns items in reverse chronological order (newest first) ✓
  const top3 = data.items.map((item) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    published: item.snippet.publishedAt,
  }));

  console.log(`Found ${data.items.length} videos:\n`);
  top3.forEach((v, i) => {
    console.log(`  ${i + 1}. ${v.title} (${v.id}) — ${v.published}`);
  });

  // Generate the new videos array as a string
  const videoEntries = top3
    .map((v) => {
      const age = v.published ? relativeAge(v.published) : "Recently";
      const escapedTitle = v.title.replace(/'/g, "\\'");
      return `  { title: '${escapedTitle}', age: '${age}', id: '${v.id}' }`;
    })
    .join(",\n");

  // Read the current siteData.ts
  const fs = await import("node:fs");
  const currentContent = fs.readFileSync(SITE_DATA_PATH, "utf-8");

  // Find the videos array and replace it
  const videosArrayRegex = /export const videos = \[[\s\S]*?\];/;
  const newVideosSection = `export const videos = [\n${videoEntries},\n];`;

  if (!videosArrayRegex.test(currentContent)) {
    console.error("Could not find videos array in siteData.ts");
    process.exit(1);
  }

  const newContent = currentContent.replace(videosArrayRegex, newVideosSection);

  fs.writeFileSync(SITE_DATA_PATH, newContent, "utf-8");
  console.log("\n✅ Updated client/src/lib/siteData.ts");
}

main().catch((err) => {
  console.error("Script failed:", err);
  process.exit(1);
});
