/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Giving should feel like worship, not fundraising — conviction → grounding → action.
 */
import { ExternalLink, Shield } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, kofiUrl } from "@/lib/siteData";
import SEO from "@/components/SEO";

export default function Give() {
  return (
    <>
      <SEO title="Give" description="Support the mission through generous partnership. Give securely via card or PayPal to advance the gospel through Global Reformation Mission." path="/give" />
      {/*
       * ── Section 1: Conviction ───────────────────────────────
       * Hero: establishes giving as partnership for the gospel.
       */}
      <PageHero kicker="Give" title="Partnership for gospel work." image={assets.missionMap} cta={{ href: kofiUrl, label: "Support the Mission" }}>
        Giving is an act of worship and partnership. Every gift supports the proclamation of the gospel, the strengthening of churches, and the training of faithful workers.
      </PageHero>

      {/*
       * ── Section 2: Grounding ────────────────────────────────
       * Parchment grid, two columns: scripture quote + theology.
       * Mirrors the rhythm of the Home page's Partnership Pathways section.
       */}
      <section className="section parchment-grid">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <figure className="quote-ledger">
            <blockquote>
              Each of you should give what you have decided in your heart to give,
              not reluctantly or under compulsion, for God loves a cheerful giver.
            </blockquote>
            <figcaption className="mt-6 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--gold)]">
              2 Corinthians 9:7
            </figcaption>
          </figure>
          <div>
            <SectionHeading kicker="01 / The Grace of Giving" title="From joyful hearts to faithful mission.">
              Giving is not merely a transaction. It is a response to grace — a cheerful act of worship
              that flows from what God has already given. Every gift, whether large or small, advances
              the proclamation of the gospel and the strengthening of Bible-centered churches.
            </SectionHeading>
          </div>
        </div>
      </section>

      {/*
       * ── Section 3: Action ───────────────────────────────────
       * Midnight background, two columns: heading + cta panel.
       * Mirrors the Home page's "From Conviction to Invitation" section.
       */}
      <section className="section bg-[var(--midnight)] text-[var(--parchment)]">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-[var(--gold)]">02 / Partnership</p>
            <h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">Give now.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--steel)]">
              Give securely through Ko-fi using your card or PayPal. Your partnership
              makes the work of the gospel possible.
            </p>
          </div>
          <div className="cta-panel flex flex-col items-center gap-6">
            <a
              href={kofiUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4 w-full justify-center"
            >
              Give Now <ExternalLink className="h-4 w-4" />
            </a>
            <a href={kofiUrl} target="_blank" rel="noreferrer" className="block rounded-xl bg-white/10 p-4 transition hover:bg-white/15">
              <img
                src="/give-qr.png"
                alt="Scan to support Global Reformation Mission on Ko-fi"
                className="w-40 h-40"
              />
            </a>
            <p className="flex items-center gap-2 text-sm text-[var(--steel)]">
              <Shield className="h-3.5 w-3.5" /> Secure processing via Ko-fi
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
