import type { Metadata } from "next";
import { connect } from "@/content/siteContent";

export const metadata: Metadata = {
  title: connect.meta.title,
  description: connect.meta.description,
  alternates: { canonical: "/connect" },
};

// Phase 2B — build when podcast platform links and email tool are confirmed
export default function ConnectPage() {
  return (
    <section className="bg-true-black min-h-screen pt-40 md:pt-52 pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h1 className="font-oswald font-700 text-5xl md:text-7xl text-ivory mb-4">
          {connect.headline}
        </h1>
        <p className="font-lato text-lg text-ivory/50">
          Platform links and email signup coming soon.
        </p>
      </div>
    </section>
  );
}
