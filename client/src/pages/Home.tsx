/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * The homepage must move from conviction to invitation with scripture, mission pillars, and practical pathways.
 */
import { ArrowRight, MapPin, Play, Radio, Send } from "lucide-react";
import { Link } from "wouter";
import { IconCard, ScriptureCard, SectionHeading } from "@/components/SectionPrimitives";
import { assets, missionPillars, pathways, socialLinks, videos, youtubeEmbed } from "@/lib/siteData";

export default function Home() {
  const featured = videos[0];
  return (
    <>
      <section className="hero-shell relative overflow-hidden bg-[var(--midnight)] text-[var(--parchment)]">
        <img src={assets.hero} alt="Abstract navy cartographic sanctuary background" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--midnight)] via-[var(--midnight)]/88 to-[var(--navy)]/50" />
        <div className="container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="mt-5 max-w-4xl font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.04em] md:text-8xl">Reformed in conviction. Missionary in movement.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[var(--steel)]">Global Reformation Mission exists to plant and strengthen Bible-centered churches that equip the saints, reach the lost, and transform communities for the glory of God.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/stream" className="btn-primary"><Play className="h-4 w-4" /> Watch Teachings</Link>
              <Link href="/visit" className="btn-outline-light">Plan a Visit <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="hero-panel">
            <blockquote className="mt-5 font-serif text-3xl leading-tight md:text-5xl">“Equipping the saints. Reaching the lost. Transforming communities.”</blockquote>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="hero-fact"><Radio className="h-5 w-5 text-[var(--mission-blue)]" /><span>Sundays at 15:00</span></div>
              <div className="hero-fact"><MapPin className="h-5 w-5 text-[var(--mission-blue)]" /><span>29 Forest St, Lewiston, ME 04240</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section parchment-grid">
        <div className="container">
          <SectionHeading kicker="01 / Mission Pillars" title="A serious mission requires a clear foundation.">
            Scripture anchors this ministry in five convictions: the authority of God's Word, salvation by grace, the fellowship of the church, the call to make disciples, and the glory of God in all things.
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {missionPillars.map((pillar) => <IconCard key={pillar.title} {...pillar} />)}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--navy)] text-[var(--parchment)]">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ScriptureCard quote="All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness." reference="2 Timothy 3:16–17" />
          <div>
            <SectionHeading dark kicker="02 / Teaching Stream" title="A channel for teaching, training, and discipleship.">
              Scripture equips the people of God for every good work. These public teachings are gathered here for formation, reproof, correction, and training in righteousness.
            </SectionHeading>
            <div className="mt-8 overflow-hidden border border-[var(--gold)]/35 bg-black/30 shadow-2xl">
              <iframe className="aspect-video w-full" src={youtubeEmbed(featured.id)} title={featured.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/stream" className="btn-primary">Open Streaming Page</Link>
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="btn-outline-light">Visit YouTube Channel</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--parchment)]">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <img src={assets.missionMap} alt="Abstract missionary pathway map" className="mission-image" />
          <div>
            <SectionHeading kicker="03 / Partnership Pathways" title="Pray, give, go, and send with clarity.">
              The mission advances through the prayers, giving, going, and sending of the church. Every believer has a part in planting and strengthening Bible-centered churches.
            </SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pathways.map((path) => <IconCard key={path.title} {...path} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--midnight)] text-[var(--parchment)]">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-[var(--gold)]">04 / Next Step</p>
            <h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">From conviction to invitation.</h2>
          </div>
          <div className="cta-panel">
            <p className="text-lg leading-8 text-[var(--steel)]">Explore the mission, review the teachings, connect through the social channels, or inquire about partnership. Each path leads deeper into the work of the gospel.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/connect" className="btn-primary"><Send className="h-4 w-4" /> Connect</Link><Link href="/mission" className="btn-outline-light">Explore Mission</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
