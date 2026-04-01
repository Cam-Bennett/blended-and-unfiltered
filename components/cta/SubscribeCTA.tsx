import Link from "next/link";
import { home } from "@/content/siteContent";

export function SubscribeCTA() {
  const { subscribeCta } = home;

  return (
    <section className="bg-ivory text-true-black py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="reveal max-w-xl mx-auto text-center">
          <h2 className="font-oswald font-700 text-4xl md:text-5xl leading-tight text-true-black mb-4 whitespace-pre-line">
            {subscribeCta.headline}
          </h2>
          <p className="font-lato text-base text-charcoal leading-relaxed mb-8">
            {subscribeCta.body}
          </p>
          <Link
            href={subscribeCta.cta.href}
            className="inline-flex items-center justify-center w-full sm:w-auto min-w-52 px-8 py-4 bg-rust text-ivory font-oswald font-700 text-sm tracking-widest uppercase hover:bg-rust/90 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
          >
            {subscribeCta.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
