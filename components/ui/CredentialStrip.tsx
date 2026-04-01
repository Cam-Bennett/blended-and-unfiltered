import { home } from "@/content/siteContent";

export function CredentialStrip() {
  const { credentialStrip } = home;

  return (
    <div className="bg-card-dark border-y border-white/8">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {credentialStrip.map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && (
                <span
                  className="hidden md:block w-1 h-1 rounded-full bg-rust/60"
                  aria-hidden="true"
                />
              )}
              <span className="font-oswald font-600 text-sm tracking-widest uppercase text-ivory/70">
                {item.label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
