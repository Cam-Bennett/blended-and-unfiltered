import type { Metadata } from "next";
import { episodes } from "@/content/siteContent";

export const metadata: Metadata = {
  title: episodes.meta.title,
  description: episodes.meta.description,
  alternates: { canonical: "/episodes" },
};

// Phase 2B — build when podcast platform links are confirmed
export default function EpisodesPage() {
  return (
    <section className="bg-true-black min-h-screen pt-40 md:pt-52 pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h1 className="font-oswald font-700 text-5xl md:text-7xl text-ivory mb-4">
          Episodes
        </h1>
        <p className="font-lato text-lg text-ivory/50">Coming soon.</p>
      </div>
    </section>
  );
}
