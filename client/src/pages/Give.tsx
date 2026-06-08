/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Giving should be presented as responsible partnership.
 */
import { ExternalLink, HandHeart, Mail, Send } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, kofiUrl } from "@/lib/siteData";

export default function Give() {
  return (
    <>
      <PageHero kicker="Give" title="Partnership for gospel work." image={assets.missionMap} cta={{ href: kofiUrl, label: "Support the Mission" }}>
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
            <div className="info-card"><ExternalLink className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Donate</h3><p>Support the mission directly through our secure giving partner. Every contribution goes toward gospel proclamation and church strengthening.</p></div>
          </div>
        </div>
      </section>
      <section className="section bg-[var(--midnight)] text-[var(--parchment)]">
        <div className="container grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h2 className="font-serif text-5xl leading-none">Support the Mission</h2>
            <p className="text-lg leading-8 text-[var(--steel)] mt-6 max-w-lg">
              Your partnership makes the work of the gospel possible. Give securely through our giving partner, Ko-fi, using your card or PayPal.
            </p>
            <a
              className="btn-primary mt-7 inline-flex items-center gap-2"
              href={kofiUrl}
              target="_blank"
              rel="noreferrer"
            >
              Give Now <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <a href={kofiUrl} target="_blank" rel="noreferrer" className="block bg-white rounded-xl p-3">
              <img
                src="/give-qr.png"
                alt="Scan to support Global Reformation Mission on Ko-fi"
                className="w-40 h-40 md:w-48 md:h-48"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
