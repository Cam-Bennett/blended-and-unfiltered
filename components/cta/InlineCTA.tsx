import Link from "next/link";

interface InlineCTAProps {
  headline: string;
  body?: string;
  cta: { label: string; href: string };
  variant?: "dark" | "light";
}

export function InlineCTA({
  headline,
  body,
  cta,
  variant = "dark",
}: InlineCTAProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`reveal p-8 md:p-12 border ${
        isDark
          ? "bg-card-dark border-white/8 text-ivory"
          : "bg-ivory border-true-black/10 text-true-black"
      }`}
    >
      <div className="max-w-lg">
        <h3
          className={`font-oswald font-700 text-2xl md:text-3xl leading-tight mb-3 ${
            isDark ? "text-ivory" : "text-true-black"
          }`}
        >
          {headline}
        </h3>
        {body && (
          <p
            className={`font-lato text-base leading-relaxed mb-6 ${
              isDark ? "text-ivory/70" : "text-charcoal"
            }`}
          >
            {body}
          </p>
        )}
        <Link
          href={cta.href}
          className={`inline-flex items-center px-6 py-3 font-oswald font-700 text-sm tracking-widest uppercase transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-offset-2 ${
            isDark
              ? "bg-rust text-ivory hover:bg-rust/90 focus-visible:ring-rust focus-visible:ring-offset-true-black"
              : "bg-true-black text-ivory hover:bg-charcoal focus-visible:ring-true-black focus-visible:ring-offset-ivory"
          }`}
        >
          {cta.label}
        </Link>
      </div>
    </div>
  );
}
