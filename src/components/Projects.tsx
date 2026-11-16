import { Code2, ExternalLink, GitBranch } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";

const PROJECT_SNIPPETS: Record<string, readonly string[]> = {
  "simple-git": [
    "$ sgit hash-object -w README.md",
    "blob 9f4d2c8a1e3b... (zlib)",
    "$ sgit log --graph --oneline",
  ],
  "kiwix-vault": [
    "ZIM_ARCHIVE: archwiki_en_2026.zim",
    "INDEX_STATE: mounted (air-gapped)",
    "LATENCY: 4.2ms local loopback",
  ],
  "say-tool": [
    "$ say-tool --device default \\",
    '  "Build 61e77ec deployed"',
    "AUDIO_OUT: CoreAudio / ALSA ok",
  ],
};

export function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-[100svh] items-center bg-[#0C1220] py-20 lg:py-24"
    >
      <div className="wrap">
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
              className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#0F172A] p-6 transition-all hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-[#1E293B]"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-cyan-300">
                    <GitBranch className="h-4 w-4" aria-hidden="true" />
                    <span>{project.domain}</span>
                  </span>
                  <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <div
                  data-visual="project-terminal"
                  className="mt-3 rounded border border-white/10 bg-[#090D16] p-3 font-mono text-[11px] leading-relaxed text-slate-200"
                >
                  {(PROJECT_SNIPPETS[project.id] ?? ["$ status: active"]).map((line) => (
                    <div key={line} className="truncate">
                      {line}
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {project.summary}
                </p>

                <ul className="mt-4 space-y-1.5 border-l border-white/15 pl-3 text-xs leading-relaxed text-slate-300">
                  {project.architecture.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/10 bg-slate-800/80 px-2 py-0.5 font-mono text-[11px] text-slate-200"
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
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-md border border-white/10 bg-[#090D16] px-3 py-2 font-mono text-xs font-medium text-slate-100 transition-colors hover:border-cyan-500/30 hover:text-cyan-300"
                >
                  <Code2 className="h-4 w-4" aria-hidden="true" />
                  <span>Repository</span>
                </a>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-md border border-white/10 bg-[#090D16] px-3 py-2 font-mono text-xs font-medium text-slate-100 transition-colors hover:border-emerald-500/30 hover:text-emerald-300"
                  >
                    <span>Demo</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
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
