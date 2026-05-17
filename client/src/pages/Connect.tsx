/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Connect should provide clear external channels and avoid collecting private data in this frontend-only mockup.
 */
import { Facebook, Mail, Youtube } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, socialLinks } from "@/lib/siteData";

export default function Connect() {
  return (
    <>
      <PageHero kicker="Connect" title="Clear pathways for conversation and updates." image={assets.hero}>
        Follow the official social channels, watch teachings, and use confirmed contact methods as they become available.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading kicker="01 / Official Links" title="Use the public channels provided by the mission." />
          <div className="grid gap-5 md:grid-cols-3">
            <a className="info-card hover-card" href={socialLinks.youtube} target="_blank" rel="noreferrer"><Youtube className="h-7 w-7 text-[var(--mission-blue)]" /><h3>YouTube</h3><p>Open the teaching channel and full video archive.</p></a>
            <a className="info-card hover-card" href={socialLinks.facebook} target="_blank" rel="noreferrer"><Facebook className="h-7 w-7 text-[var(--mission-blue)]" /><h3>Facebook</h3><p>Open the mission’s public Facebook page.</p></a>
            <div className="info-card"><Mail className="h-7 w-7 text-[var(--mission-blue)]" /><h3>Contact</h3><p>A confirmed contact form or email can be added before launch.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
