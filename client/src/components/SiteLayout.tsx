/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * The layout should feel like a restrained missionary field report: strong navigation, gold rules, parchment surfaces, and direct social paths.
 */
import { Menu, Play, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { navItems, socialLinks } from "@/lib/siteData";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-[var(--parchment)] text-[var(--navy)] selection:bg-[var(--gold)]/35">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--gold)] focus:px-4 focus:py-2 focus:text-[var(--midnight)]">
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 border-b border-[var(--steel)]/25 bg-[var(--midnight)]/95 text-[var(--parchment)] backdrop-blur-xl">
        <div className="container flex min-h-20 items-center justify-between gap-4 py-3">
          <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-11 w-11 place-items-center border border-[var(--gold)]/70 bg-[var(--navy)] text-[var(--gold)] transition group-hover:bg-[var(--gold)] group-hover:text-[var(--midnight)]">✦</span>
            <span className="leading-tight">
              <span className="block font-serif text-xl font-semibold tracking-wide">Global Reformation</span>
              <span className="block text-[0.67rem] font-bold uppercase tracking-[0.36em] text-[var(--steel)]">Mission</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={("nav-link " + (location === item.href ? "nav-link-active" : "")).trim()}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a className="btn-ghost-dark" href={socialLinks.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a className="btn-primary" href={socialLinks.youtube} target="_blank" rel="noreferrer"><Play className="h-4 w-4" /> YouTube</a>
          </div>

          <button className="inline-flex h-11 w-11 items-center justify-center border border-[var(--gold)]/40 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[var(--gold)]/20 bg-[var(--midnight)] lg:hidden">
            <div className="container grid gap-2 py-5">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={("mobile-nav-link " + (location === item.href ? "mobile-nav-link-active" : "")).trim()}>
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a className="btn-ghost-dark justify-center" href={socialLinks.facebook} target="_blank" rel="noreferrer">Facebook</a>
                <a className="btn-primary justify-center" href={socialLinks.youtube} target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="main">{children}</main>

      <footer className="bg-[var(--midnight)] text-[var(--parchment)]">
        <div className="container grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="eyebrow text-[var(--gold)]">Global Reformation Mission</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight">Reformed in conviction. Missionary in movement.</h2>
            <p className="mt-5 max-w-xl text-[var(--steel)]">A disciplined web identity for biblical authority, local hospitality, global church-planting vision, and clear pathways for worship, partnership, and giving.</p>
          </div>
          <div>
            <p className="footer-heading">Explore</p>
            <div className="mt-4 grid gap-2">
              {navItems.slice(1).map((item) => <Link className="footer-link" key={item.href} href={item.href}>{item.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="footer-heading">Streaming & Social</p>
            <div className="mt-4 grid gap-3">
              <a className="footer-link" href={socialLinks.youtube} target="_blank" rel="noreferrer">YouTube Channel</a>
              <a className="footer-link" href={socialLinks.facebook} target="_blank" rel="noreferrer">Facebook Page</a>
              <Link className="footer-link" href="/stream">Streaming Page</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--steel)]/20 py-5 text-center text-sm text-[var(--steel)]">
          <div className="container flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <span>© Global Reformation Mission.</span>
            <img src="/affiliation-badge.png" alt="Send Network affiliation badge" className="h-8 w-auto opacity-70 transition-opacity hover:opacity-100" />
          </div>
        </div>
      </footer>
    </div>
  );
}
