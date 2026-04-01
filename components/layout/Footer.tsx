import Link from "next/link";
import { footer } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="bg-true-black border-t border-white/8">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Wordmark + tagline */}
          <div>
            <Link
              href="/"
              className="font-oswald font-700 text-xl text-ivory hover:text-rust transition-colors duration-150"
            >
              <span className="text-rust">B&amp;U</span>
            </Link>
            <p className="mt-2 font-lato text-sm text-ivory/50 max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-lato text-sm text-ivory/50 hover:text-ivory transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/8">
          <p className="font-lato text-xs text-ivory/30">{footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
