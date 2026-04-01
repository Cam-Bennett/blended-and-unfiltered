interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "amber";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variantClass =
    variant === "amber"
      ? "bg-amber/20 text-amber border-amber/30"
      : "bg-rust/20 text-rust border-rust/30";

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-oswald font-600 tracking-widest uppercase border ${variantClass}`}
    >
      {children}
    </span>
  );
}
