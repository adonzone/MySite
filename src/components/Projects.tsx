import { Code2, ExternalLink, GitBranch } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="03"
          eyebrow="Selected Systems"
          title="Engineering Projects & Architecture"
          description="Open-source repositories and systems tooling built for deterministic control, local inference, and self-hosted reliability."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#0F172A] p-5 transition-colors hover:border-emerald-500/30 hover:bg-[#1E293B]"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-cyan-400">
                    <GitBranch className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.domain}
                  </span>
                  <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-mono text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                <ul className="mt-4 space-y-1.5 border-l border-white/10 pl-3 text-xs leading-relaxed text-slate-400">
                  {project.architecture.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/5 bg-slate-800/80 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-3">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-md border border-white/10 bg-[#090D16] px-3 py-2 font-mono text-xs font-medium text-slate-200 transition-colors hover:border-cyan-500/30 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Repository</span>
                </a>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-md border border-white/10 bg-[#090D16] px-3 py-2 font-mono text-xs font-medium text-slate-200 transition-colors hover:border-emerald-500/30 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
