"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a section and activates scroll reveal on all
 * child elements that have the "reveal" class.
 */
export function ScrollRevealWrapper({
  children,
  className = "",
}: ScrollRevealWrapperProps) {
  const ref = useScrollReveal();

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}
