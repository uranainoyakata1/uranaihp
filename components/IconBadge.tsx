import type { ReactNode } from "react";

type IconBadgeProps = {
  children: ReactNode;
};

export function IconBadge({ children }: IconBadgeProps) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-white text-gold shadow-sm">
      <span className="h-6 w-6">{children}</span>
    </span>
  );
}
