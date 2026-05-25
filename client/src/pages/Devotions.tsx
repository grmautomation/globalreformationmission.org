/**
 * Design philosophy reminder: Liturgical Editorial Modernism with cartographic mission cues.
 * Devotions should feel like a daily Scripture-formed rhythm — restrained but warm,
 * theologically grounded, with clear language pathways for listening and reflection.
 */
import { useEffect, useState, useRef } from "react";
import { PageHero, SectionHeading } from "@/components/SectionPrimitives";
import { assets } from "@/lib/siteData";

const WIDGET_BASE = "https://www.christhimself.com/widgets";
const WIDGET_SCRIPTS = [
  { src: `${WIDGET_BASE}/audio-player.js` },
  { src: `${WIDGET_BASE}/devotional.js` },
];

const LANG_LABELS: Record<string, string> = {
  en: "English",
  pt: "Português",
  fr: "Français",
};

function injectScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) { resolve(); return; }
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function injectWidgetScripts(): Promise<void[]> {
  return Promise.all(WIDGET_SCRIPTS.map((w) => injectScript(w.src)));
}

export default function Devotions() {
  const [lang, setLang] = useState("en");
  const widgetsInjected = useRef(false);

  const switchLang = (newLang: string) => {
    setLang(newLang);
    document.documentElement.lang = newLang;
    // Update data-ch-lang attributes synchronously before dispatching event,
    // so widget's resolveLang() reads the correct value immediately
    document.querySelectorAll("[data-ch-audio], [data-ch-devotional]").forEach((el) => {
      el.setAttribute("data-ch-lang", newLang);
    });
    document.dispatchEvent(new CustomEvent("ch-lang-change"));
  };

  useEffect(() => {
    if (widgetsInjected.current) return;
    widgetsInjected.current = true;

    document.documentElement.lang = lang;

    injectWidgetScripts().catch(() => {
      // Widget scripts failed — page still renders, widgets just won't work
    });
  }, [lang]);

  return (
    <>
      <PageHero
        kicker="Devotions"
        title="Daily Scripture devotionals. Listen and reflect."
        image={assets.streamPanel}
      >
        A daily devotional rooted in the classic <em>Daily Light on the Path</em> —
        pairing Old and New Testament passages around a single theme. Available in
        English, Portuguese, and French. Morning and evening readings.
      </PageHero>

      <section className="section parchment-grid">
        <div className="container">
          <SectionHeading
            kicker="01 / Today's Reading"
            title="Listen and read the daily devotional."
          >
            Each entry begins with a theme verse, followed by supporting scriptures,
            a brief pastoral summary, and four guided reflection questions. Choose
            your language below to begin.
          </SectionHeading>

          {/* Language picker */}
          <div className="mt-10 flex items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--steel)]">
              Language:
            </span>
            <div className="flex gap-1" role="radiogroup" aria-label="Devotional language">
              {Object.entries(LANG_LABELS).map(([code, label]) => (
                <button
                  key={code}
                  onClick={() => switchLang(code)}
                  className={
                    "rounded-sm border px-4 py-2 text-sm font-semibold uppercase tracking-wider transition " +
                    (lang === code
                      ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--midnight)]"
                      : "border-[var(--steel)]/30 bg-transparent text-[var(--ink-soft)] hover:border-[var(--gold)]/60")
                  }
                  role="radio"
                  aria-checked={lang === code}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Audio player widget */}
          <div className="mt-8 rounded-sm border border-[var(--steel)]/20 bg-white p-6 shadow-sm">
            <p className="eyebrow mb-4 text-[var(--navy)]">Audio Readings</p>
            <div data-ch-audio data-ch-lang={lang}></div>
          </div>

          {/* Devotional reader widget */}
          <div className="mt-8 rounded-sm border border-[var(--steel)]/20 bg-white p-6 shadow-sm">
            <p className="eyebrow mb-4 text-[var(--navy)]">Devotional Text</p>
            <div data-ch-devotional data-ch-lang={lang}></div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--navy)] text-[var(--parchment)]">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-[var(--gold)]">About Christ Himself</p>
            <h2 className="mt-3 font-serif text-5xl">
              A full year of daily devotionals.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--steel)]">
              Christ Himself is a multi-language devotional project — 366 days of
              morning and evening readings, podcast feeds, and a free web app.
              Explore the complete archive or subscribe to the podcast.
            </p>
          </div>
          <a
            href="https://www.christhimself.com"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex shrink-0"
          >
            Visit Devotional Website
          </a>
        </div>
      </section>
    </>
  );
}
