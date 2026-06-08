/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Reusable primitives must preserve measured hierarchy, restrained ornament, and practical mission direction.
 */
import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";

export function SectionHeading({ kicker, title, children, dark = false }: { kicker: string; title: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <div className="section-heading">
      <p className={"eyebrow " + (dark ? "text-[var(--gold)]" : "text-[var(--navy)]")}>{kicker}</p>
      <h2 className={"mt-4 font-serif text-4xl font-semibold leading-[0.98] md:text-6xl " + (dark ? "text-[var(--parchment)]" : "text-[var(--navy)]")}>{title}</h2>
      {children && <div className={"mt-5 max-w-3xl text-lg leading-8 " + (dark ? "text-[var(--steel)]" : "text-[var(--ink-soft)]")}>{children}</div>}
    </div>
  );
}

export function PageHero({ kicker, title, children, image, cta }: { kicker: string; title: string; children: React.ReactNode; image?: string; cta?: { href: string; label: string } }) {
  return (
    <section className="relative overflow-hidden bg-[var(--midnight)] text-[var(--parchment)]">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-34" />}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--midnight)] via-[var(--midnight)]/88 to-[var(--navy)]/65" />
      <div className="container relative py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="eyebrow text-[var(--gold)]">{kicker}</p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] md:text-7xl">{title}</h1>
          <div className="mt-6 max-w-2xl text-xl leading-9 text-[var(--steel)]">{children}</div>
          {cta && (cta.href.startsWith("http") || cta.href.startsWith("//") ? (
            <a href={cta.href} target="_blank" rel="noreferrer" className="btn-primary mt-8 inline-flex">{cta.label}</a>
          ) : (
            <Link href={cta.href} className="btn-primary mt-8 inline-flex">{cta.label}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ScriptureCard({ quote, reference }: { quote: string; reference: string }) {
  return (
    <figure className="scripture-card">
      <blockquote className="font-serif text-3xl leading-tight text-[var(--parchment)]">“{quote}”</blockquote>
      <figcaption className="mt-7 border-t border-[var(--gold)]/30 pt-4 text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)]">{reference}</figcaption>
    </figure>
  );
}

export function IconCard({ title, copy, icon: Icon, reference }: { title: string; copy: string; icon: LucideIcon; reference?: string }) {
  return (
    <article className="icon-card group">
      <div className="flex items-start justify-between gap-6">
        <div className="grid h-12 w-12 place-items-center border border-[var(--gold)]/45 bg-[var(--navy)] text-[var(--gold)] transition group-hover:bg-[var(--gold)] group-hover:text-[var(--midnight)]"><Icon className="h-5 w-5" /></div>
        {reference && <span className="text-right text-xs font-bold uppercase tracking-[0.2em] text-[var(--steel)]">{reference}</span>}
      </div>
      <h3 className="mt-8 font-serif text-3xl font-semibold text-[var(--navy)]">{title}</h3>
      <p className="mt-4 leading-7 text-[var(--ink-soft)]">{copy}</p>
    </article>
  );
}

export function RouteLink({ href, children, className = "btn-secondary" }: { href: string; children: React.ReactNode; className?: string }) {
  return <Link href={href} className={className}>{children}</Link>;
}
