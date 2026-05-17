/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * About copy should preserve theological clarity without inventing staff history, affiliations, or commitments.
 */
import { IconCard, PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, missionPillars } from "@/lib/siteData";

export default function About() {
  return (
    <>
      <PageHero kicker="About" title="A ministry identity with weight and welcome." image={assets.hero} cta={{ href: "/mission", label: "Explore the Mission" }}>
        Global Reformation Mission is committed to biblical authority, local hospitality, global church-planting vision, and clear pathways for worship, partnership, and giving.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading kicker="01 / Positioning" title="Planting and strengthening Bible-centered churches.">
            The mission is clear: equipping the saints, reaching the lost, and transforming communities for the glory of God. Everything flows from this calling.
          </SectionHeading>
          <div className="quote-ledger"><p>"Global Reformation Mission exists to plant and strengthen Bible-centered churches that equip the saints, reach the lost, and transform communities for the glory of God."</p></div>
        </div>
      </section>
      <section className="section bg-[var(--parchment)]">
        <div className="container">
          <SectionHeading kicker="02 / Foundations" title="Theological clarity in five repeated anchors." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{missionPillars.map((pillar) => <IconCard key={pillar.title} {...pillar} />)}</div>
        </div>
      </section>
    </>
  );
}
