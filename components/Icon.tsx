import type { ReactNode } from "react";

type IconProps = {
  children: ReactNode;
};

export function Icon({ children }: IconProps) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gold/40 bg-white text-gold shadow-sm">
      <span className="h-5 w-5">{children}</span>
    </span>
  );
}
