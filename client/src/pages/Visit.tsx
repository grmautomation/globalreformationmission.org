/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * The visit page should reduce uncertainty while maintaining ecclesial dignity and local hospitality.
 */
import { Mail, MapPin, Radio } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, socialLinks } from "@/lib/siteData";

export default function Visit() {
  return (
    <>
      <PageHero kicker="Visit" title="Local hospitality under biblical authority." image={assets.visit} cta={{ href: "/connect", label: "Ask a Question" }}>
        Global Reformation Mission welcomes guests to gather for worship, Scripture, and fellowship at the time and place confirmed below.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading kicker="01 / First Visit" title="Clear expectations, fewer unknowns.">
            Gatherings are held at 29 Forest St, Lewiston, ME 04240. You are welcome to join us and see for yourself what the Lord is doing through this ministry.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="info-card"><Radio className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Gathering</h3><p>Sundays at 15:00.</p></div>
            <div className="info-card"><MapPin className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Location</h3><p>29 Forest St, Lewiston, ME 04240.</p></div>
            <div className="info-card"><Mail className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Contact</h3><p>Reach out through the connect page or social channels if you have questions before attending.</p></div>
          </div>
        </div>
      </section>
      <section className="section bg-[var(--navy)] text-[var(--parchment)]">
        <div className="container grid gap-10 md:grid-cols-2">
          <div><p className="eyebrow text-[var(--gold)]">What to Expect</p><h2 className="mt-4 font-serif text-5xl leading-none">Worship, Scripture, prayer, and community.</h2></div>
          <div className="prose-panel-dark"><p>Each gathering centers on the reading and preaching of Scripture, prayer, and the fellowship of the saints. Visitors are welcome to attend, observe, and ask questions at their own pace.</p><a className="btn-primary mt-7 inline-flex" href={socialLinks.facebook} target="_blank" rel="noreferrer">Open Facebook Page</a></div>
        </div>
      </section>
    </>
  );
}
