import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { home, episodes } from "@/content/siteContent";
import { EpisodeHero } from "@/components/episodes/EpisodeHero";
import { EpisodeGrid } from "@/components/episodes/EpisodeGrid";
import { SubscribeCTA } from "@/components/cta/SubscribeCTA";
import { CredentialStrip } from "@/components/ui/CredentialStrip";
import { ScrollRevealWrapper } from "@/components/layout/ScrollRevealWrapper";

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
  alternates: {
    canonical: "/",
  },
};

const featuredEpisode =
  episodes.items.find((ep) => ep.id === home.featuredEpisodeId) ??
  episodes.items[0];

const recentEpisodes = episodes.items
  .filter((ep) => ep.id !== featuredEpisode.id)
  .slice(0, home.recentEpisodesCount);

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        className="relative bg-true-black min-h-screen flex items-center pt-16"
        aria-labelledby="hero-headline"
      >
        {/* Hero background image */}
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
          sizes="100vw"
        />
        {/* Dark overlay + rust gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, rgba(28,28,28,0.96) 0%, rgba(28,28,28,0.85) 50%, rgba(28,28,28,0.6) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(193,68,14,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8 py-24 md:py-32">
          {/* Eyebrow */}
          <p className="font-oswald font-600 text-xs tracking-widest uppercase text-rust mb-6 animate-[fadeSlideUp_0.6s_ease-out_both]">
            {home.hero.eyebrow}
          </p>

          {/* Main headline */}
          <h1
            id="hero-headline"
            className="font-oswald font-700 leading-none text-ivory mb-6"
            style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}
          >
            {home.hero.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p
            className="font-lato text-lg md:text-xl text-ivory/70 leading-relaxed max-w-xl mb-10"
            style={{ animationDelay: "0.2s" }}
          >
            {home.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={home.hero.cta.href}
              className="inline-flex items-center justify-center min-h-[52px] px-8 bg-rust text-ivory font-oswald font-700 text-sm tracking-widest uppercase hover:bg-rust/90 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-true-black"
            >
              {home.hero.cta.label}
            </Link>
            <Link
              href={home.hero.secondaryCta.href}
              className="inline-flex items-center justify-center min-h-[52px] px-8 border border-white/20 text-ivory font-oswald font-600 text-sm tracking-widest uppercase hover:border-white/40 hover:bg-white/5 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-true-black"
            >
              {home.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED EPISODE ────────────────────────────────────── */}
      <ScrollRevealWrapper>
        <section className="bg-true-black py-16 md:py-24" aria-label="Latest episode">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <p className="font-oswald font-600 text-xs tracking-widest uppercase text-ivory/40 mb-6">
              Latest Episode
            </p>
            <EpisodeHero episode={featuredEpisode} />
          </div>
        </section>
      </ScrollRevealWrapper>

      {/* ── MISSION ─────────────────────────────────────────────── */}
      <ScrollRevealWrapper>
        <section className="bg-ivory text-true-black py-16 md:py-24" aria-label="Our mission">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="reveal max-w-2xl">
              <p className="font-oswald font-600 text-xs tracking-widest uppercase text-rust mb-6">
                Why This Show Exists
              </p>
              <p className="font-lato text-lg md:text-xl text-charcoal leading-relaxed">
                {home.mission}
              </p>
            </div>
          </div>
        </section>
      </ScrollRevealWrapper>

      {/* ── RECENT EPISODES ─────────────────────────────────────── */}
      {recentEpisodes.length > 0 && (
        <ScrollRevealWrapper>
          <section
            className="bg-true-black py-16 md:py-24"
            aria-label="Recent episodes"
          >
            <div className="mx-auto max-w-6xl px-6 md:px-8">
              <div className="flex items-end justify-between mb-10">
                <h2 className="font-oswald font-700 text-3xl md:text-4xl text-ivory">
                  More Episodes
                </h2>
                <Link
                  href="/episodes"
                  className="font-oswald font-600 text-sm tracking-widest uppercase text-rust hover:text-amber transition-colors duration-150"
                >
                  All Episodes →
                </Link>
              </div>
              <EpisodeGrid episodes={recentEpisodes} />
            </div>
          </section>
        </ScrollRevealWrapper>
      )}

      {/* ── SUBSCRIBE CTA ───────────────────────────────────────── */}
      <ScrollRevealWrapper>
        <SubscribeCTA />
      </ScrollRevealWrapper>

      {/* ── CREDENTIAL STRIP ────────────────────────────────────── */}
      <CredentialStrip />
    </>
  );
}
