/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * The mission page should make sending, church strengthening, and partnership feel concrete rather than vague.
 */
import { IconCard, PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, pathways } from "@/lib/siteData";
import SEO from "@/components/SEO";

export default function Mission() {
  return (
    <>
      <SEO title="Mission" description="Church planting vision from Lewiston to the ends of the earth. Pray, give, go, and send with Global Reformation Mission." path="/mission" />
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
          {[
            { title: 'Bible-centered churches', text: 'Churches grounded in Scripture, governed by faithful elders, and committed to the ordinary means of grace — preaching, prayer, and the sacraments.' },
            { title: 'Equipped saints', text: 'Believers trained for ministry through teaching, discipleship, and hands-on service — prepared to carry the gospel into every sphere of life.' },
            { title: 'Transformed communities', text: 'Communities renewed by the gospel as churches live out mercy, justice, and witness in their neighborhoods and beyond.' },
          ].map((item, index) => <div className="dark-stat" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}
        </div>
      </section>
    </>
  );
}
