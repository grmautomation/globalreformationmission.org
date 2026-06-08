/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Giving should be clear, purposeful, and direct — partnership for the gospel.
 */
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/SectionPrimitives";
import { assets, kofiUrl } from "@/lib/siteData";

export default function Give() {
  return (
    <>
      <PageHero kicker="Give" title="Partnership for gospel work." image={assets.missionMap} cta={{ href: kofiUrl, label: "Support the Mission" }}>
        Giving is an act of worship and partnership. Every gift supports the proclamation of the gospel, the strengthening of churches, and the training of faithful workers.
      </PageHero>

      <section className="section parchment-grid">
        <div className="container max-w-4xl text-center">
          <p className="eyebrow text-[var(--navy)]">02 / Stewardship</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[0.98] md:text-6xl text-[var(--navy)]">
            Your partnership makes the work possible.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--ink-soft)] max-w-2xl mx-auto">
            Give securely through Ko-fi using your card or PayPal. Every contribution goes directly toward
            teaching, discipleship, church planting, and outreach.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href={kofiUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Give Now <ExternalLink className="h-5 w-5" />
            </a>
            <a href={kofiUrl} target="_blank" rel="noreferrer" className="block bg-white rounded-xl p-3 shadow-md">
              <img
                src="/give-qr.png"
                alt="Scan to support Global Reformation Mission on Ko-fi"
                className="w-44 h-44"
              />
            </a>
            <p className="text-sm text-[var(--ink-soft)]">Or scan the QR code with your phone</p>
          </div>
        </div>
      </section>
    </>
  );
}
