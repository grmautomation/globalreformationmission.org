/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Teachings should feel like an ordered library of Scripture-centered formation.
 */
import { ExternalLink, Play } from "lucide-react";
import { Link } from "wouter";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, socialLinks, videos, youtubeWatch } from "@/lib/siteData";

export default function Teachings() {
  return (
    <>
      <PageHero kicker="Teaching" title="Scripture-centered teaching for discipleship." image={assets.streamPanel} cta={{ href: "/stream", label: "Open Streaming Hub" }}>
        Teaching is central to the mission because Scripture equips the people of God for faithful witness, correction, maturity, and every good work.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container">
          <SectionHeading kicker="01 / Latest Videos" title="Recent teaching from the channel." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {videos.map((video, index) => (
              <article className="teaching-card" key={video.id}>
                <div className="teaching-thumb"><span>0{index + 1}</span><Play className="h-8 w-8" /></div>
                <div className="p-6"><p className="eyebrow text-[var(--steel)]">{video.age}</p><h3 className="mt-3 font-serif text-3xl leading-tight">{video.title}</h3><p className="mt-4 text-[var(--ink-soft)]">Available on the mission's YouTube channel.</p><a className="btn-secondary mt-6 inline-flex" href={youtubeWatch(video.id)} target="_blank" rel="noreferrer">Watch on YouTube</a></div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center"><a className="btn-outline-dark inline-flex items-center gap-2" href={socialLinks.youtube} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /> View channel for more teaching</a></div>
        </div>
      </section>
      <section className="section bg-[var(--navy)] text-[var(--parchment)]"><div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="eyebrow text-[var(--gold)]">Archive</p><h2 className="mt-3 font-serif text-5xl">For the full library, use the streaming hub.</h2></div><Link href="/stream" className="btn-primary">Streaming Hub</Link></div></section>
    </>
  );
}
