#!/usr/bin/env node

/**
 * Fetches the latest 3 videos from the Global Reformation Mission YouTube channel
 * via the YouTube RSS feed (no API key needed).
 *
 * Usage: node scripts/fetch-latest-videos.mjs
 *
 * Updates client/src/lib/siteData.ts with the fresh data.
 */

const CHANNEL_ID = "UC5TzLV6MqV7JB7rdvdOtqpA";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
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

function parseRSS(xmlText) {
  const entries = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;

  while ((match = entryRegex.exec(xmlText)) !== null) {
    const entryXml = match[1];
    const idMatch = entryXml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = entryXml.match(/<title>([^<]*)<\/title>/);
    const publishedMatch = entryXml.match(/<published>([^<]+)<\/published>/);

    if (idMatch && titleMatch) {
      entries.push({
        id: idMatch[1],
        title: titleMatch[1]
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'"),
        published: publishedMatch ? publishedMatch[1] : null,
      });
    }
  }

  return entries;
}

async function main() {
  console.log(`Fetching RSS feed: ${RSS_URL}`);
  const response = await fetch(RSS_URL);

  if (!response.ok) {
    console.error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
    process.exit(1);
  }

  const xmlText = await response.text();
  const entries = parseRSS(xmlText);

  if (entries.length === 0) {
    console.error("No entries found in RSS feed");
    process.exit(1);
  }

  // Take the top 3
  const top3 = entries.slice(0, 3);

  console.log(`Found ${entries.length} videos, taking top 3:\n`);
  top3.forEach((v, i) => {
    console.log(`  ${i + 1}. ${v.title} (${v.id}) — ${v.published ?? "unknown date"}`);
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
