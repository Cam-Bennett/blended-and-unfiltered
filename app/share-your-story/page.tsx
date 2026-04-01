import type { Metadata } from "next";
import { guestForm } from "@/content/siteContent";

export const metadata: Metadata = {
  title: guestForm.meta.title,
  description: guestForm.meta.description,
  alternates: { canonical: "/share-your-story" },
};

// Phase 2B — build when Carrie's email destination is confirmed
export default function ShareYourStoryPage() {
  return (
    <section className="bg-true-black min-h-screen pt-40 md:pt-52 pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h1 className="font-oswald font-700 text-5xl md:text-7xl text-ivory mb-4 whitespace-pre-line">
          {guestForm.headline}
        </h1>
        <p className="font-lato text-lg text-ivory/50">Form coming soon.</p>
      </div>
    </section>
  );
}
