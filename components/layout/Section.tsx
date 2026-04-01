import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** "dark" = #1C1C1C bg, "light" = #F7F0E8 bg */
  variant?: "dark" | "light";
  containerWidth?: "default" | "wide" | "narrow";
  /** Remove top/bottom padding for tight stacks */
  noPadding?: boolean;
  id?: string;
}

export function Section({
  children,
  className = "",
  variant = "dark",
  containerWidth = "default",
  noPadding = false,
  id,
}: SectionProps) {
  const bgClass =
    variant === "light"
      ? "bg-ivory text-true-black"
      : "bg-true-black text-ivory";

  const paddingClass = noPadding ? "" : "py-16 md:py-24";

  return (
    <section id={id} className={`${bgClass} ${paddingClass} ${className}`}>
      <Container width={containerWidth}>{children}</Container>
    </section>
  );
}
