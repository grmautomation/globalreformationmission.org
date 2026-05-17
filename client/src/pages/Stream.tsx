/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Streaming should be reverent and practical: embeds and channel links.
 */
import { ExternalLink, Play } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, socialLinks, videos, youtubeEmbed, youtubeWatch } from "@/lib/siteData";

export default function Stream() {
  const featured = videos[0];
  return (
    <>
      <PageHero kicker="Streaming" title="Watch teachings from Global Reformation Mission." image={assets.streamPanel}>
        Browse public teachings from the mission's YouTube channel. For the latest uploads and live availability, visit the channel directly.
      </PageHero>
      <section className="section bg-[var(--midnight)] text-[var(--parchment)]">
        <div className="container grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="stream-frame"><iframe className="aspect-video w-full" src={youtubeEmbed(featured.id)} title={featured.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
          <aside className="stream-aside">
            <p className="eyebrow text-[var(--gold)]">Featured Teaching</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">{featured.title}</h2>
            <p className="mt-5 text-[var(--steel)]">Duration: {featured.duration}.</p>
            <div className="mt-7 grid gap-3"><a className="btn-primary" href={youtubeWatch(featured.id)} target="_blank" rel="noreferrer"><Play className="h-4 w-4" /> Watch on YouTube</a><a className="btn-outline-light" href={socialLinks.youtube} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /> Open Channel</a></div>
          </aside>
        </div>
      </section>
      <section className="section parchment-grid">
        <div className="container">
          <SectionHeading kicker="01 / Recent Channel Videos" title="Current public teachings." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {videos.map((video) => <article className="video-card" key={video.id}><iframe className="aspect-video w-full" src={youtubeEmbed(video.id)} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /><div className="p-5"><p className="eyebrow text-[var(--steel)]">{video.duration} &bull; {video.age}</p><h3 className="mt-2 font-serif text-2xl leading-tight">{video.title}</h3><a href={youtubeWatch(video.id)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--mission-blue)]">Open video <ExternalLink className="h-4 w-4" /></a></div></article>)}
          </div>
        </div>
      </section>
      <section className="section bg-[var(--navy)] text-[var(--parchment)]"><div className="container grid gap-8 md:grid-cols-[1fr_1fr]"><div><p className="eyebrow text-[var(--gold)]">Social Channels</p><h2 className="mt-4 font-serif text-5xl leading-none">Follow the mission where updates are posted.</h2></div><div className="cta-panel"><p className="text-[var(--steel)]">Use these official links for current public videos and social updates.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a className="btn-primary" href={socialLinks.youtube} target="_blank" rel="noreferrer">YouTube Channel</a><a className="btn-outline-light" href={socialLinks.facebook} target="_blank" rel="noreferrer">Facebook Page</a></div></div></div></section>
    </>
  );
}
