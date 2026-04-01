import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Use "wide" for section-level containers, "narrow" for text columns */
  width?: "default" | "wide" | "narrow";
}

export function Container({
  children,
  className = "",
  width = "default",
}: ContainerProps) {
  const widthClass =
    width === "wide"
      ? "max-w-7xl"
      : width === "narrow"
      ? "max-w-2xl"
      : "max-w-6xl";

  return (
    <div className={`mx-auto w-full px-6 md:px-8 ${widthClass} ${className}`}>
      {children}
    </div>
  );
}
