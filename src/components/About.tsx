import { HardDrive, Layers, TerminalSquare } from "lucide-react";
import { SKILL_GROUPS } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";

interface ExperiencePillar {
  title: string;
  metric: string;
  summary: string;
  icon: "robotics" | "linux" | "infra";
}

const PILLARS: readonly ExperiencePillar[] = [
  {
    title: "Competitive Robotics Software Lead",
    metric: "Real-Time Control",
    summary:
      "Architected deterministic subsystem state machines, autonomous command scheduling, and live CAN-bus telemetry diagnostics under competition match pressure.",
    icon: "robotics",
  },
  {
    title: "Hardware Diagnostics & Linux Deployment",
    metric: "Bare-Metal Ops",
    summary:
      "Provisioned and debugged headless Linux hosts, ROCm GPU compute stacks, kernel-level drivers, and reproducible container environments for low-latency workloads.",
    icon: "linux",
  },
  {
    title: "Self-Hosted Infrastructure & Edge AI",
    metric: "Air-Gapped & Local",
    summary:
      "Built offline-first knowledge vaults, local LLM tool-calling runtimes via Model Context Protocol, and automated CI security gates with zero cloud lock-in.",
    icon: "infra",
  },
];

function PillarIcon({ icon }: { icon: ExperiencePillar["icon"] }) {
  switch (icon) {
    case "robotics":
      return <TerminalSquare className="h-4 w-4 text-cyan-400" aria-hidden="true" />;
    case "linux":
      return <HardDrive className="h-4 w-4 text-emerald-400" aria-hidden="true" />;
    case "infra":
      return <Layers className="h-4 w-4 text-cyan-400" aria-hidden="true" />;
  }
}

export function About() {
  return (
    <section id="about" className="border-b border-white/10 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="01"
          eyebrow="Insights & Competencies"
          title="Systems Engineering & Technical Stack"
          description="Hands-on execution across real-time robotics, bare-metal Linux operations, and local-first AI tooling."
        />

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#0F172A] p-5 transition-colors hover:border-cyan-500/30 hover:bg-[#1E293B]"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-white/10 bg-[#090D16]">
                    <PillarIcon icon={pillar.icon} />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400">
                    {pillar.metric}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-100">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {pillar.summary}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-white/10 bg-[#0F172A] p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
                {group.category}
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-400">
                {group.subtitle}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={group.category}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-white/5 bg-slate-800/80 px-2.5 py-1 font-mono text-[11px] text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
