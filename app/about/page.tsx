import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about } from "@/content/siteContent";
import { ScrollRevealWrapper } from "@/components/layout/ScrollRevealWrapper";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: about.meta.title,
    description: about.meta.description,
    images: [{ url: about.photo.src, width: 1200, height: 630, alt: about.photo.alt }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        className="relative bg-true-black pt-40 pb-16 md:pt-52 md:pb-24"
        aria-labelledby="about-headline"
      >
        {/* Atmospheric bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(193,68,14,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="font-oswald font-600 text-xs tracking-widest uppercase text-rust mb-4">
                About the Host
              </p>
              <h1
                id="about-headline"
                className="font-oswald font-700 text-5xl md:text-7xl leading-none text-ivory mb-4"
              >
                {about.headline}
              </h1>
              <p className="font-lato text-lg text-ivory/60 leading-relaxed">
                {about.subheadline}
              </p>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* TODO: replace with Carrie's headshot at /public/images/carrie-profile.jpg */}
                <Image
                  src={about.photo.src}
                  alt={about.photo.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Vignette overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(28,28,28,0.5) 0%, transparent 50%)",
                  }}
                  aria-hidden="true"
                />
              </div>
              {/* Rust accent border */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full border border-rust/30 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ───────────────────────────────────────────────── */}
      <ScrollRevealWrapper>
        <section className="bg-ivory text-true-black py-16 md:py-24" aria-label="Carrie's story">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="max-w-2xl">
              <p className="reveal font-oswald font-600 text-xs tracking-widest uppercase text-rust mb-8">
                Her Story
              </p>
              {about.story.map((paragraph, i) => (
                <p
                  key={i}
                  className="reveal font-lato text-base md:text-lg text-charcoal leading-relaxed mb-6 last:mb-0"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealWrapper>

      {/* ── CREDENTIALS ─────────────────────────────────────────── */}
      <ScrollRevealWrapper>
        <section className="bg-true-black py-16 md:py-24" aria-label="Credentials">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <p className="reveal font-oswald font-600 text-xs tracking-widest uppercase text-rust mb-10">
              Roles &amp; Platform
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {about.credentials.map((cred, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} border-t-2 border-rust pt-6`}
                >
                  <h3 className="font-oswald font-700 text-xl text-ivory mb-3">
                    {cred.title}
                  </h3>
                  <p className="font-lato text-sm text-ivory/60 leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealWrapper>

      {/* ── SHOW MISSION ────────────────────────────────────────── */}
      <ScrollRevealWrapper>
        <section className="bg-card-dark py-16 md:py-24" aria-label="Show mission">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal max-w-xl border-l-4 border-rust pl-8">
              <p className="font-lato text-lg md:text-xl text-ivory/80 leading-relaxed italic">
                &ldquo;{about.showMission}&rdquo;
              </p>
            </div>
          </div>
        </section>
      </ScrollRevealWrapper>

      {/* ── GUEST CTA ───────────────────────────────────────────── */}
      <ScrollRevealWrapper>
        <section className="bg-ivory text-true-black py-16 md:py-24" aria-label="Share your story">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal max-w-xl">
              <h2 className="font-oswald font-700 text-4xl md:text-5xl leading-tight text-true-black mb-4">
                {about.guestCta.headline}
              </h2>
              <p className="font-lato text-base text-charcoal leading-relaxed mb-8">
                {about.guestCta.body}
              </p>
              <Link
                href={about.guestCta.cta.href}
                className="inline-flex items-center justify-center min-h-[52px] px-8 bg-rust text-ivory font-oswald font-700 text-sm tracking-widest uppercase hover:bg-rust/90 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              >
                {about.guestCta.cta.label}
              </Link>
            </div>
          </div>
        </section>
      </ScrollRevealWrapper>
    </>
  );
}
