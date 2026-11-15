interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-2 border-b border-white/10 pb-5">
      <div className="flex items-center gap-2.5 font-mono text-xs tracking-wider uppercase text-cyan-400">
        <span className="rounded border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 text-[11px]">
          {index}
        </span>
        <span>{eyebrow}</span>
      </div>
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-sm leading-relaxed text-slate-400">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
