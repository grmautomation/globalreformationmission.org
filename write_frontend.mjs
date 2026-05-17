import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = '/home/ubuntu/global-reformation-mission-website';
const files = new Map();

files.set('client/index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <meta name="description" content="Global Reformation Mission exists to plant and strengthen Bible-centered churches that equip the saints, reach the lost, and transform communities for the glory of God." />
    <title>Global Reformation Mission</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Source+Sans+3:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script defer src="%VITE_ANALYTICS_ENDPOINT%/umami" data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"></script>
  </body>
</html>
`);

files.set('client/src/App.tsx', `/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Every route should preserve formal hierarchy, scripture-centered language, restrained gold rules, and mission movement.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SiteLayout from "./components/SiteLayout";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Give from "./pages/Give";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import NotFound from "./pages/NotFound";
import Stream from "./pages/Stream";
import Teachings from "./pages/Teachings";
import Visit from "./pages/Visit";

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/visit" component={Visit} />
        <Route path="/about" component={About} />
        <Route path="/mission" component={Mission} />
        <Route path="/teachings" component={Teachings} />
        <Route path="/stream" component={Stream} />
        <Route path="/give" component={Give} />
        <Route path="/connect" component={Connect} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
`);

files.set('client/src/lib/siteData.ts', `/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Data is intentionally sourced from the provided style guide, public channel page, and user-provided links; avoid fabricated commitments.
 */
import { BookOpen, Church, Compass, Globe2, HandHeart, MapPin, Play, Send, UsersRound } from "lucide-react";

export const socialLinks = {
  youtube: "https://www.youtube.com/@GlobalReformationMission",
  facebook: "https://www.facebook.com/globalreformationmission",
};

export const assets = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285988803/3ZUpWVbQs8K7BH2BqZvsuF/grm_hero_cartographic_sanctuary-EuZ89gXaUWMkRGFHAs3qcH.webp",
  missionMap: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285988803/3ZUpWVbQs8K7BH2BqZvsuF/grm_mission_pathway_map-HHiP8Wa5jveaQdbv9WRiiF.webp",
  streamPanel: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285988803/3ZUpWVbQs8K7BH2BqZvsuF/grm_streaming_theology_panel-UsRTJ4EuyfzwLq2vPADkGV.webp",
  visit: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285988803/3ZUpWVbQs8K7BH2BqZvsuF/grm_visit_welcome_parchment-cfPB9mri2WXsJdmvF8NeNK.webp",
};

export const missionPillars = [
  { title: "The Word", reference: "2 Timothy 3:16–17", copy: "Scripture is the foundation for teaching, correction, training, and mission.", icon: BookOpen },
  { title: "The Grace", reference: "Ephesians 2:8–9", copy: "The message is salvation by grace through faith, not human boasting.", icon: HandHeart },
  { title: "The Community", reference: "Hebrews 10:24–25", copy: "The church is a family formed for encouragement, endurance, and good works.", icon: UsersRound },
  { title: "The Mission", reference: "Matthew 28:18–20", copy: "The call is to make disciples under the authority of Christ.", icon: Send },
  { title: "The Glory", reference: "1 Corinthians 10:31", copy: "The final purpose is the glory of God in every work and witness.", icon: Globe2 },
];

export const pathways = [
  { title: "Pray", copy: "Intercede for gospel clarity, faithful churches, trained disciples, and open doors for mission.", icon: Compass },
  { title: "Give", copy: "Support the work through responsible partnership pathways as the mission confirms giving details.", icon: HandHeart },
  { title: "Go", copy: "Move from conviction to embodied service through discipleship, local witness, and mission readiness.", icon: MapPin },
  { title: "Send", copy: "Strengthen church planting, teaching, and leadership formation through sustained partnership.", icon: Church },
];

export const videos = [
  { title: "Ne Retournez pas a L'esclavage!", duration: "45:22", views: "75", age: "4 months ago", id: "0O42GH5dOvE" },
  { title: "La femme selon le coeur de Dieu 2", duration: "56:46", views: "79", age: "5 months ago", id: "VEAOf_2sIoU" },
  { title: "La femme selon le coeur de Dieu 1", duration: "48:36", views: "252", age: "5 months ago", id: "7Ni1Z8WLAII" },
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/visit", label: "Visit" },
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/teachings", label: "Teachings" },
  { href: "/stream", label: "Stream" },
  { href: "/give", label: "Give" },
  { href: "/connect", label: "Connect" },
];

export const youtubeEmbed = (id: string) => "https://www.youtube.com/embed/" + id;
export const youtubeWatch = (id: string) => "https://www.youtube.com/watch?v=" + id;
`);

files.set('client/src/components/SiteLayout.tsx', `/**
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
        <div className="border-t border-[var(--steel)]/20 py-5 text-center text-sm text-[var(--steel)]">© Global Reformation Mission. Website mockup prepared for review.</div>
      </footer>
    </div>
  );
}
`);

files.set('client/src/components/SectionPrimitives.tsx', `/**
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
          {cta && <Link href={cta.href} className="btn-primary mt-8 inline-flex">{cta.label}</Link>}
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
`);

files.set('client/src/pages/Home.tsx', `/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * The homepage must move from conviction to invitation with scripture, mission pillars, and practical pathways.
 */
import { ArrowRight, MapPin, Play, Radio, Send } from "lucide-react";
import { Link } from "wouter";
import { IconCard, ScriptureCard, SectionHeading } from "@/components/SectionPrimitives";
import { assets, missionPillars, pathways, socialLinks, videos, youtubeEmbed } from "@/lib/siteData";

export default function Home() {
  const featured = videos[0];
  return (
    <>
      <section className="hero-shell relative overflow-hidden bg-[var(--midnight)] text-[var(--parchment)]">
        <img src={assets.hero} alt="Abstract navy cartographic sanctuary background" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--midnight)] via-[var(--midnight)]/88 to-[var(--navy)]/50" />
        <div className="container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow text-[var(--gold)]">Website UX Mission Mockup</p>
            <h1 className="mt-5 max-w-4xl font-serif text-6xl font-semibold leading-[0.9] tracking-[-0.04em] md:text-8xl">Reformed in conviction. Missionary in movement.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[var(--steel)]">Global Reformation Mission exists to plant and strengthen Bible-centered churches that equip the saints, reach the lost, and transform communities for the glory of God.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/stream" className="btn-primary"><Play className="h-4 w-4" /> Watch Teachings</Link>
              <Link href="/visit" className="btn-outline-light">Plan a Visit <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="hero-panel">
            <p className="eyebrow text-[var(--gold)]">Core Message</p>
            <blockquote className="mt-5 font-serif text-3xl leading-tight md:text-5xl">“Equipping the saints. Reaching the lost. Transforming communities.”</blockquote>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="hero-fact"><Radio className="h-5 w-5 text-[var(--mission-blue)]" /><span>Sundays at 15:00</span></div>
              <div className="hero-fact"><MapPin className="h-5 w-5 text-[var(--mission-blue)]" /><span>Lewiston, ME, USA</span></div>
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[var(--steel)]">Confirm current gathering details before attending.</p>
          </div>
        </div>
      </section>

      <section className="section parchment-grid">
        <div className="container">
          <SectionHeading kicker="01 / Mission Pillars" title="A serious mission requires a clear foundation.">
            The style system names five anchors for the work: Word, Grace, Community, Mission, and Glory. These form the main teaching and discipleship vocabulary across the website.
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {missionPillars.map((pillar) => <IconCard key={pillar.title} {...pillar} />)}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--navy)] text-[var(--parchment)]">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ScriptureCard quote="All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness." reference="2 Timothy 3:16–17" />
          <div>
            <SectionHeading dark kicker="02 / Teaching Stream" title="A channel for teaching, training, and discipleship.">
              The streaming page gathers recent public videos from the YouTube channel and gives visitors a clear path to the complete channel archive.
            </SectionHeading>
            <div className="mt-8 overflow-hidden border border-[var(--gold)]/35 bg-black/30 shadow-2xl">
              <iframe className="aspect-video w-full" src={youtubeEmbed(featured.id)} title={featured.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/stream" className="btn-primary">Open Streaming Page</Link>
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="btn-outline-light">Visit YouTube Channel</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--parchment)]">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <img src={assets.missionMap} alt="Abstract missionary pathway map" className="mission-image" />
          <div>
            <SectionHeading kicker="03 / Partnership Pathways" title="Pray, give, go, and send with clarity.">
              The website frames partnership as concrete participation in a mission to plant and strengthen Bible-centered churches.
            </SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pathways.map((path) => <IconCard key={path.title} {...path} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--midnight)] text-[var(--parchment)]">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-[var(--gold)]">04 / Next Step</p>
            <h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">From conviction to invitation.</h2>
          </div>
          <div className="cta-panel">
            <p className="text-lg leading-8 text-[var(--steel)]">Explore the mission, review teachings, connect through the social channels, or move toward partnership. Each path is designed to reduce ambiguity and support faithful next steps.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/connect" className="btn-primary"><Send className="h-4 w-4" /> Connect</Link><Link href="/mission" className="btn-outline-light">Explore Mission</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
`);

files.set('client/src/pages/Visit.tsx', `/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * The visit page should reduce uncertainty while maintaining ecclesial dignity and local hospitality.
 */
import { Mail, MapPin, Radio } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, socialLinks } from "@/lib/siteData";

export default function Visit() {
  return (
    <>
      <PageHero kicker="Visit" title="Local hospitality under biblical authority." image={assets.visit} cta={{ href: "/connect", label: "Ask a Question" }}>
        A visit page should help first-time guests understand where to go, what to expect, and how to take the next step without unnecessary pressure.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading kicker="01 / First Visit" title="Clear expectations, fewer unknowns.">
            This mockup keeps details that require confirmation intentionally modest. The style guide showed a gathering reference of Sundays at 15:00 in Lewiston, Maine; current details should be verified by the mission before launch.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="info-card"><Radio className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Gathering</h3><p>Sundays at 15:00, pending confirmation for launch copy.</p></div>
            <div className="info-card"><MapPin className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Location</h3><p>Lewiston, ME, USA, as shown in the current style system.</p></div>
            <div className="info-card"><Mail className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Contact</h3><p>Use the connect page or social links for current information.</p></div>
          </div>
        </div>
      </section>
      <section className="section bg-[var(--navy)] text-[var(--parchment)]">
        <div className="container grid gap-10 md:grid-cols-2">
          <div><p className="eyebrow text-[var(--gold)]">What to Expect</p><h2 className="mt-4 font-serif text-5xl leading-none">Worship, Scripture, prayer, and community.</h2></div>
          <div className="prose-panel-dark"><p>The page can later be expanded with parking details, children’s ministry information, service language, accessibility notes, and a confirmed contact form. For now, it gives a polished, faithful pathway without inventing operational details.</p><a className="btn-primary mt-7 inline-flex" href={socialLinks.facebook} target="_blank" rel="noreferrer">Open Facebook Page</a></div>
        </div>
      </section>
    </>
  );
}
`);

files.set('client/src/pages/About.tsx', `/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * About copy should preserve theological clarity without inventing staff history, affiliations, or commitments.
 */
import { IconCard, PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, missionPillars } from "@/lib/siteData";

export default function About() {
  return (
    <>
      <PageHero kicker="About" title="A ministry identity with weight and welcome." image={assets.hero} cta={{ href: "/mission", label: "Explore the Mission" }}>
        Global Reformation Mission is presented through a disciplined identity: biblical authority, local hospitality, global church-planting vision, and clear pathways for worship, partnership, and giving.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading kicker="01 / Positioning" title="Planting and strengthening Bible-centered churches.">
            The style guide states the mission plainly: equipping the saints, reaching the lost, and transforming communities for the glory of God. The website should make that logic easy to understand and act on.
          </SectionHeading>
          <div className="quote-ledger"><p>“Global Reformation Mission exists to plant and strengthen Bible-centered churches that equip the saints, reach the lost, and transform communities for the glory of God.”</p></div>
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
`);

files.set('client/src/pages/Mission.tsx', `/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * The mission page should make sending, church strengthening, and partnership feel concrete rather than vague.
 */
import { IconCard, PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, pathways } from "@/lib/siteData";

export default function Mission() {
  return (
    <>
      <PageHero kicker="Mission" title="Church planting vision with practical next steps." image={assets.missionMap} cta={{ href: "/give", label: "Partner with the Mission" }}>
        Global visuals should clarify sending and partnership, not create vague inspiration. This page translates mission into pathways: pray, give, go, and send.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img className="mission-image" src={assets.missionMap} alt="Abstract global mission pathway map" />
          <div>
            <SectionHeading kicker="01 / Movement" title="From local worship to global witness.">
              The design treats mission as movement under authority: worship forms disciples, disciples strengthen churches, and churches send faithful workers into practical service.
            </SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{pathways.map((path) => <IconCard key={path.title} {...path} />)}</div>
          </div>
        </div>
      </section>
      <section className="section bg-[var(--midnight)] text-[var(--parchment)]">
        <div className="container grid gap-10 md:grid-cols-3">
          {['Bible-centered churches', 'Equipped saints', 'Transformed communities'].map((item, index) => <div className="dark-stat" key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Each phrase functions as a future content category for stories, updates, reports, or ministry initiatives once confirmed.</p></div>)}
        </div>
      </section>
    </>
  );
}
`);

files.set('client/src/pages/Teachings.tsx', `/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Teachings should feel like an ordered library of Scripture-centered formation, with clear streaming actions.
 */
import { Play } from "lucide-react";
import { Link } from "wouter";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, videos, youtubeWatch } from "@/lib/siteData";

export default function Teachings() {
  return (
    <>
      <PageHero kicker="Teachings" title="Scripture-centered teaching for discipleship." image={assets.streamPanel} cta={{ href: "/stream", label: "Open Streaming Hub" }}>
        Public teachings from the YouTube channel can be gathered into a clear library that points visitors toward the full archive.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container">
          <SectionHeading kicker="01 / Latest Public Videos" title="Recent teaching from the channel." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {videos.map((video, index) => (
              <article className="teaching-card" key={video.id}>
                <div className="teaching-thumb"><span>0{index + 1}</span><Play className="h-8 w-8" /></div>
                <div className="p-6"><p className="eyebrow text-[var(--steel)]">{video.duration} • {video.age}</p><h3 className="mt-3 font-serif text-3xl leading-tight">{video.title}</h3><p className="mt-4 text-[var(--ink-soft)]">Visible channel views at audit: {video.views}.</p><a className="btn-secondary mt-6 inline-flex" href={youtubeWatch(video.id)} target="_blank" rel="noreferrer">Watch on YouTube</a></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[var(--navy)] text-[var(--parchment)]"><div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="eyebrow text-[var(--gold)]">Archive</p><h2 className="mt-3 font-serif text-5xl">For the full library, use the streaming hub.</h2></div><Link href="/stream" className="btn-primary">Streaming Hub</Link></div></section>
    </>
  );
}
`);

files.set('client/src/pages/Stream.tsx', `/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Streaming should be reverent and practical: embeds, channel links, and no unsupported claims of live availability.
 */
import { ExternalLink, Play } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, socialLinks, videos, youtubeEmbed, youtubeWatch } from "@/lib/siteData";

export default function Stream() {
  const featured = videos[0];
  return (
    <>
      <PageHero kicker="Streaming" title="Watch teachings from Global Reformation Mission." image={assets.streamPanel}>
        This page provides embedded access to public YouTube videos and direct links to the channel. For the latest uploads and live availability, open the YouTube channel.
      </PageHero>
      <section className="section bg-[var(--midnight)] text-[var(--parchment)]">
        <div className="container grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="stream-frame"><iframe className="aspect-video w-full" src={youtubeEmbed(featured.id)} title={featured.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
          <aside className="stream-aside">
            <p className="eyebrow text-[var(--gold)]">Featured Teaching</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">{featured.title}</h2>
            <p className="mt-5 text-[var(--steel)]">Duration: {featured.duration}. This embed uses a publicly visible video from the channel page reviewed during the mockup process.</p>
            <div className="mt-7 grid gap-3"><a className="btn-primary" href={youtubeWatch(featured.id)} target="_blank" rel="noreferrer"><Play className="h-4 w-4" /> Watch on YouTube</a><a className="btn-outline-light" href={socialLinks.youtube} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /> Open Channel</a></div>
          </aside>
        </div>
      </section>
      <section className="section parchment-grid">
        <div className="container">
          <SectionHeading kicker="01 / Recent Channel Videos" title="A streaming page designed for ongoing teaching." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {videos.map((video) => <article className="video-card" key={video.id}><iframe className="aspect-video w-full" src={youtubeEmbed(video.id)} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /><div className="p-5"><p className="eyebrow text-[var(--steel)]">{video.duration} • {video.age}</p><h3 className="mt-2 font-serif text-2xl leading-tight">{video.title}</h3><a href={youtubeWatch(video.id)} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--mission-blue)]">Open video <ExternalLink className="h-4 w-4" /></a></div></article>)}
          </div>
        </div>
      </section>
      <section className="section bg-[var(--navy)] text-[var(--parchment)]"><div className="container grid gap-8 md:grid-cols-[1fr_1fr]"><div><p className="eyebrow text-[var(--gold)]">Social Channels</p><h2 className="mt-4 font-serif text-5xl leading-none">Follow the mission where updates are posted.</h2></div><div className="cta-panel"><p className="text-[var(--steel)]">Use these official links for current public videos and social updates.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a className="btn-primary" href={socialLinks.youtube} target="_blank" rel="noreferrer">YouTube Channel</a><a className="btn-outline-light" href={socialLinks.facebook} target="_blank" rel="noreferrer">Facebook Page</a></div></div></div></section>
    </>
  );
}
`);

files.set('client/src/pages/Give.tsx', `/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Giving should be presented as responsible partnership without inventing donation infrastructure.
 */
import { HandHeart, Mail, Send } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets, socialLinks } from "@/lib/siteData";

export default function Give() {
  return (
    <>
      <PageHero kicker="Give" title="Partnership for gospel work." image={assets.missionMap} cta={{ href: "/connect", label: "Connect About Giving" }}>
        This mockup frames giving as a mission partnership pathway while avoiding unsupported payment processing or unconfirmed donation details.
      </PageHero>
      <section className="section parchment-grid">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading kicker="01 / Responsible Partnership" title="Pray, give, go, and send with stewardship.">
            If the mission later confirms a giving platform, this page can connect directly to it. Until then, the mockup directs visitors to contact and social channels for verified next steps.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="info-card"><HandHeart className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Give</h3><p>Support requires a confirmed giving process before public launch.</p></div>
            <div className="info-card"><Send className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Send</h3><p>Partnership strengthens teaching, discipleship, and church planting.</p></div>
            <div className="info-card"><Mail className="h-6 w-6 text-[var(--mission-blue)]" /><h3>Confirm</h3><p>Use the contact pathway to ask for current giving details.</p></div>
          </div>
        </div>
      </section>
      <section className="section bg-[var(--midnight)] text-[var(--parchment)]"><div className="container grid gap-8 md:grid-cols-[1fr_1fr]"><h2 className="font-serif text-5xl leading-none">Ready to partner?</h2><div><p className="text-lg leading-8 text-[var(--steel)]">Contact the mission through its social channels while verified giving instructions are finalized.</p><a className="btn-primary mt-7 inline-flex" href={socialLinks.facebook} target="_blank" rel="noreferrer">Open Facebook Page</a></div></div></section>
    </>
  );
}
`);

files.set('client/src/pages/Connect.tsx', `/**
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
`);

files.set('client/src/index.css', `/*
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Global styles must preserve formal hierarchy, navy/parchment contrast, covenant-gold rules, Mission Blue actions, and restrained motion.
 */
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --font-sans: "Source Sans 3", sans-serif;
  --font-serif: "Cormorant Garamond", serif;
}

:root {
  --navy: #031B3D;
  --midnight: #06112A;
  --parchment: #F7F3E8;
  --gold: #E5B84B;
  --mission-blue: #1E9BFF;
  --steel: #7DA9C7;
  --ink-soft: #39506C;
  --primary: oklch(0.64 0.17 249);
  --primary-foreground: oklch(0.98 0.02 91);
  --sidebar-primary: oklch(0.64 0.17 249);
  --sidebar-primary-foreground: oklch(0.98 0.02 91);
  --chart-1: oklch(0.74 0.13 249);
  --chart-2: oklch(0.82 0.12 84);
  --chart-3: oklch(0.43 0.1 258);
  --chart-4: oklch(0.93 0.03 91);
  --chart-5: oklch(0.62 0.06 230);
  --radius: 0.15rem;
  --background: oklch(0.96 0.025 91);
  --foreground: oklch(0.22 0.057 258);
  --card: oklch(0.985 0.017 91);
  --card-foreground: oklch(0.22 0.057 258);
  --popover: oklch(0.985 0.017 91);
  --popover-foreground: oklch(0.22 0.057 258);
  --secondary: oklch(0.92 0.035 91);
  --secondary-foreground: oklch(0.23 0.057 258);
  --muted: oklch(0.91 0.025 91);
  --muted-foreground: oklch(0.45 0.04 248);
  --accent: oklch(0.84 0.12 84);
  --accent-foreground: oklch(0.18 0.06 258);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.79 0.045 225);
  --input: oklch(0.79 0.045 225);
  --ring: oklch(0.64 0.17 249);
  --sidebar: oklch(0.96 0.025 91);
  --sidebar-foreground: oklch(0.22 0.057 258);
  --sidebar-accent: oklch(0.91 0.025 91);
  --sidebar-accent-foreground: oklch(0.18 0.06 258);
  --sidebar-border: oklch(0.79 0.045 225);
  --sidebar-ring: oklch(0.64 0.17 249);
}

.dark {
  --background: oklch(0.17 0.06 258);
  --foreground: oklch(0.96 0.025 91);
}

@layer base {
  * { @apply border-border outline-ring/50; }
  html { scroll-behavior: smooth; }
  body { @apply bg-background text-foreground font-sans antialiased; }
  button:not(:disabled), [role="button"]:not([aria-disabled="true"]), [type="button"]:not(:disabled), [type="submit"]:not(:disabled), [type="reset"]:not(:disabled), a[href], select:not(:disabled), input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled) { @apply cursor-pointer; }
}

@layer components {
  .container { width: 100%; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
  .flex { min-height: 0; min-width: 0; }
  @media (min-width: 640px) { .container { padding-left: 1.5rem; padding-right: 1.5rem; } }
  @media (min-width: 1024px) { .container { padding-left: 2rem; padding-right: 2rem; max-width: 1280px; } }
  .section { @apply py-20 md:py-28; }
  .eyebrow { @apply text-xs font-extrabold uppercase tracking-[0.34em]; }
  .nav-link { @apply px-3 py-2 text-sm font-bold uppercase tracking-[0.14em] text-[var(--steel)] transition hover:text-[var(--parchment)]; }
  .nav-link-active { @apply text-[var(--gold)]; }
  .mobile-nav-link { @apply border border-[var(--steel)]/20 px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--steel)]; }
  .mobile-nav-link-active { @apply border-[var(--gold)]/50 text-[var(--gold)]; }
  .btn-primary { @apply inline-flex items-center justify-center gap-2 bg-[var(--mission-blue)] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_18px_45px_rgba(30,155,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#47adff] focus-visible:ring-2 focus-visible:ring-[var(--gold)]; }
  .btn-secondary { @apply inline-flex items-center justify-center gap-2 border border-[var(--navy)]/30 bg-[var(--parchment)] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--navy)] transition hover:-translate-y-0.5 hover:border-[var(--gold)] hover:bg-white; }
  .btn-outline-light { @apply inline-flex items-center justify-center gap-2 border border-[var(--gold)]/45 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--parchment)] transition hover:-translate-y-0.5 hover:bg-[var(--gold)] hover:text-[var(--midnight)]; }
  .btn-ghost-dark { @apply inline-flex items-center gap-2 border border-[var(--steel)]/25 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-[var(--steel)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]; }
  .hero-panel { @apply border border-[var(--gold)]/30 bg-[var(--parchment)]/10 p-7 shadow-2xl backdrop-blur-md md:p-10; }
  .hero-fact { @apply flex items-center gap-3 border border-[var(--steel)]/20 bg-[var(--midnight)]/70 p-4 text-sm text-[var(--parchment)]; }
  .parchment-grid { background-color: var(--parchment); background-image: linear-gradient(rgba(3,27,61,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(3,27,61,.045) 1px, transparent 1px), radial-gradient(circle at 20% 0%, rgba(229,184,75,.13), transparent 28%); background-size: 72px 72px, 72px 72px, auto; }
  .section-heading { @apply max-w-4xl; }
  .scripture-card { @apply border border-[var(--gold)]/35 bg-[var(--midnight)] p-8 shadow-2xl md:p-10; }
  .icon-card { @apply border border-[var(--steel)]/25 bg-white/62 p-6 shadow-[0_22px_60px_rgba(3,27,61,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/70 hover:bg-white; }
  .mission-image { @apply w-full border border-[var(--gold)]/35 object-cover shadow-[0_24px_75px_rgba(3,27,61,0.20)]; }
  .cta-panel { @apply border border-[var(--gold)]/25 bg-white/5 p-8 backdrop-blur; }
  .footer-heading { @apply text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--gold)]; }
  .footer-link { @apply text-[var(--steel)] transition hover:text-[var(--gold)]; }
  .info-card { @apply border border-[var(--steel)]/30 bg-white/70 p-7 shadow-[0_18px_45px_rgba(3,27,61,0.07)]; }
  .info-card h3 { @apply mt-6 font-serif text-3xl font-semibold text-[var(--navy)]; }
  .info-card p { @apply mt-3 leading-7 text-[var(--ink-soft)]; }
  .hover-card { @apply block transition hover:-translate-y-1 hover:border-[var(--gold)] hover:bg-white; }
  .prose-panel-dark { @apply border border-[var(--gold)]/25 bg-white/5 p-8 text-lg leading-8 text-[var(--steel)]; }
  .quote-ledger { @apply border-l-4 border-[var(--gold)] bg-white/70 p-8 font-serif text-3xl leading-tight text-[var(--navy)] shadow-[0_20px_55px_rgba(3,27,61,0.08)]; }
  .dark-stat { @apply border border-[var(--gold)]/25 bg-white/5 p-7; }
  .dark-stat span { @apply text-xs font-extrabold uppercase tracking-[0.3em] text-[var(--gold)]; }
  .dark-stat h3 { @apply mt-5 font-serif text-3xl leading-tight; }
  .dark-stat p { @apply mt-4 leading-7 text-[var(--steel)]; }
  .teaching-card, .video-card { @apply overflow-hidden border border-[var(--steel)]/30 bg-white/75 shadow-[0_20px_55px_rgba(3,27,61,0.08)]; }
  .teaching-thumb { @apply flex aspect-video items-center justify-between bg-[var(--midnight)] p-7 text-[var(--gold)]; }
  .teaching-thumb span { @apply text-xs font-extrabold uppercase tracking-[0.35em]; }
  .stream-frame { @apply overflow-hidden border border-[var(--gold)]/35 bg-black shadow-2xl; }
  .stream-aside { @apply border border-[var(--gold)]/25 bg-white/5 p-8 backdrop-blur; }
}

@layer utilities {
  .opacity-34 { opacity: .34; }
}
`);

for (const [relative, content] of files) {
  const fullPath = join(root, relative);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, content);
}

console.log(`Wrote ${files.size} frontend files.`);
