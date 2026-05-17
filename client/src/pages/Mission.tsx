/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * The mission page should make sending, church strengthening, and partnership feel concrete rather than vague.
 */
import { IconCard, PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, pathways } from "@/lib/siteData";

export default function Mission() {
  return (
    <>
      <PageHero kicker="Mission" title="Church planting vision with practical next steps." image={assets.missionMap} cta={{ href: "/give", label: "Partner with the Mission" }}>
        The mission advances through prayer, giving, going, and sending. Every believer is called to participate in the work of planting and strengthening churches.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img className="mission-image" src={assets.missionMap} alt="Abstract global mission pathway map" />
          <div>
            <SectionHeading kicker="01 / Movement" title="From local worship to global witness.">
              Worship forms disciples. Disciples strengthen churches. Churches send faithful workers into practical service. This movement extends from Lewiston to the ends of the earth.
            </SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{pathways.map((path) => <IconCard key={path.title} {...path} />)}</div>
          </div>
        </div>
      </section>
      <section className="section bg-[var(--midnight)] text-[var(--parchment)]">
        <div className="container grid gap-10 md:grid-cols-3">
          {['Bible-centered churches', 'Equipped saints', 'Transformed communities'].map((item, index) => <div className="dark-stat" key={item}><span>0{index + 1}</span><h3>{item}</h3><p>These three marks guide the mission's work: churches grounded in Scripture, believers trained for ministry, and communities renewed by the gospel.</p></div>)}
        </div>
      </section>
    </>
  );
}
