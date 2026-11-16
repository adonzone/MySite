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
    <div className="mb-10 flex flex-col gap-2">
      <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
        {index} · {eyebrow}
      </div>
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-sm leading-relaxed text-slate-200">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
