"use client";

import Link from "next/link";
import { nav } from "@/content/siteContent";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={`fixed inset-0 z-40 bg-true-black flex flex-col transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Spacer for header height */}
      <div className="h-16" />

      <nav className="flex flex-col justify-center flex-1 px-8 pb-16 gap-2">
        {nav.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-oswald font-700 text-4xl text-ivory hover:text-rust transition-colors duration-150 py-3 border-b border-white/8"
          >
            {link.label}
          </Link>
        ))}

        <div className="mt-8">
          <Link
            href={nav.cta.href}
            onClick={onClose}
            className="inline-flex items-center justify-center w-full py-4 bg-rust text-ivory font-oswald font-700 text-xl tracking-widest uppercase hover:bg-rust/90 transition-colors duration-150"
          >
            {nav.cta.label}
          </Link>
        </div>
      </nav>
    </div>
  );
}
