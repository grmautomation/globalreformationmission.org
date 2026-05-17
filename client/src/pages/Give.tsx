/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Giving should be presented as responsible partnership.
 */
import { HandHeart, Mail, Send } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, socialLinks } from "@/lib/siteData";

export default function Give() {
  return (
    <>
      <PageHero kicker="Give" title="Partnership for gospel work." image={assets.missionMap} cta={{ href: "/connect", label: "Inquire About Giving" }}>
        Giving is an act of worship and partnership. Every gift supports the proclamation of the gospel, the strengthening of churches, and the training of faithful workers.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading kicker="01 / Stewardship" title="Pray, give, go, and send with purpose.">
            Partnership takes many forms. Whether through prayer, financial support, or direct service, every contribution advances the mission to plant and strengthen Bible-centered churches.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="info-card"><HandHeart className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Give</h3><p>Financial partnership enables teaching, discipleship, church planting, and outreach to continue and expand.</p></div>
            <div className="info-card"><Send className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Send</h3><p>Partnership strengthens the sending of faithful workers into local and global fields of service.</p></div>
            <div className="info-card"><Mail className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Connect</h3><p>Reach out through the social channels or connect page to learn about current giving opportunities.</p></div>
          </div>
        </div>
      </section>
      <section className="section bg-[var(--midnight)] text-[var(--parchment)]"><div className="container grid gap-8 md:grid-cols-[1fr_1fr]"><h2 className="font-serif text-5xl leading-none">Ready to partner?</h2><div><p className="text-lg leading-8 text-[var(--steel)]">Contact the mission through its social channels to learn how you can support the work of the gospel.</p><a className="btn-primary mt-7 inline-flex" href={socialLinks.facebook} target="_blank" rel="noreferrer">Open Facebook Page</a></div></div></section>
    </>
  );
}
