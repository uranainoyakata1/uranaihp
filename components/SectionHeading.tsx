type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false
}: SectionHeadingProps) {
  const titleClass = invert ? "text-white" : "text-ink";
  const descClass = invert ? "text-white/70" : "text-ink/70";
  const badgeClass = invert
    ? "border-white/20 bg-white/10 text-white/70"
    : "border-gold/40 bg-white/80 text-ink/80";

  return (
    <div className="max-w-2xl">
      <p
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] ${badgeClass}`}
      >
        {eyebrow}
      </p>
      <h2 className={`mt-4 font-serif text-3xl font-semibold sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-3 text-sm leading-relaxed sm:text-base ${descClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
