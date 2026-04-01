"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { nav, site } from "@/content/siteContent";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-true-black/95 backdrop-blur-sm border-b border-white/8"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-oswald font-700 text-lg md:text-xl tracking-wide text-ivory hover:text-rust transition-colors duration-150"
            aria-label={`${site.name} — Home`}
          >
            <span className="text-rust">B&amp;U</span>
            <span className="hidden sm:inline ml-2 text-ivory/80 font-600 text-sm tracking-widest uppercase">
              Blended &amp; Unfiltered
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-lato text-sm tracking-wide text-ivory/70 hover:text-ivory transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={nav.cta.href}
              className="ml-4 inline-flex items-center px-5 py-2 bg-rust text-ivory font-oswald font-600 text-sm tracking-widest uppercase hover:bg-rust/90 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-true-black"
            >
              {nav.cta.label}
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-ivory transition-all duration-200 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ivory transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-ivory transition-all duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
