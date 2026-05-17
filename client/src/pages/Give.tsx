/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Giving should be presented as responsible partnership without inventing donation infrastructure.
 */
import { HandHeart, Mail, Send } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, socialLinks } from "@/lib/siteData";

export default function Give() {
  return (
    <>
      <PageHero kicker="Give" title="Partnership for gospel work." image={assets.missionMap} cta={{ href: "/connect", label: "Connect About Giving" }}>
        This mockup frames giving as a mission partnership pathway while avoiding unsupported payment processing or unconfirmed donation details.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading kicker="01 / Responsible Partnership" title="Pray, give, go, and send with stewardship.">
            If the mission later confirms a giving platform, this page can connect directly to it. Until then, the mockup directs visitors to contact and social channels for verified next steps.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="info-card"><HandHeart className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Give</h3><p>Support requires a confirmed giving process before public launch.</p></div>
            <div className="info-card"><Send className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Send</h3><p>Partnership strengthens teaching, discipleship, and church planting.</p></div>
            <div className="info-card"><Mail className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Confirm</h3><p>Use the contact pathway to ask for current giving details.</p></div>
          </div>
        </div>
      </section>
      <section className="section bg-[var(--midnight)] text-[var(--parchment)]"><div className="container grid gap-8 md:grid-cols-[1fr_1fr]"><h2 className="font-serif text-5xl leading-none">Ready to partner?</h2><div><p className="text-lg leading-8 text-[var(--steel)]">Contact the mission through its social channels while verified giving instructions are finalized.</p><a className="btn-primary mt-7 inline-flex" href={socialLinks.facebook} target="_blank" rel="noreferrer">Open Facebook Page</a></div></div></section>
    </>
  );
}
