import { Code2, Cpu, HardDrive, Layers, TerminalSquare } from "lucide-react";
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
      return <TerminalSquare className="h-6 w-6 text-cyan-400" aria-hidden="true" />;
    case "linux":
      return <HardDrive className="h-6 w-6 text-emerald-400" aria-hidden="true" />;
    case "infra":
      return <Layers className="h-6 w-6 text-cyan-400" aria-hidden="true" />;
  }
}

export function About() {
  return (
    <section
      id="about"
      className="flex min-h-[100svh] items-center bg-[#0C1220] py-20 lg:py-24"
    >
      <div className="wrap">
        <SectionHeader
          index="01"
          eyebrow="Insights & Competencies"
          title="Systems Engineering & Technical Stack"
          description="Hands-on execution across real-time robotics, bare-metal Linux operations, and local-first AI tooling."
        />

        <svg
          viewBox="0 0 720 56"
          data-visual="architecture-flow"
          className="mb-8 hidden h-14 w-full rounded-lg border border-white/10 bg-[#0F172A] px-4 md:block"
          aria-hidden="true"
        >
          <line x1="150" y1="28" x2="290" y2="28" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="430" y1="28" x2="570" y2="28" stroke="#10b981" strokeWidth="1.5" />
          <rect x="20" y="12" width="130" height="32" rx="6" fill="#090D16" stroke="#334155" />
          <text x="85" y="32" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="monospace">ROBOTICS / CAN</text>
          <rect x="290" y="10" width="140" height="36" rx="6" fill="#090D16" stroke="#06b6d4" />
          <text x="360" y="32" textAnchor="middle" fill="#f8fafc" fontSize="11" fontFamily="monospace">LINUX / ROCm</text>
          <rect x="570" y="12" width="130" height="32" rx="6" fill="#090D16" stroke="#10b981" />
          <text x="635" y="32" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontFamily="monospace">EDGE AI / MCP</text>
        </svg>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#0F172A] p-6 transition-all hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-[#1E293B]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span
                    data-visual="pillar-icon"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-[#090D16]"
                  >
                    <PillarIcon icon={pillar.icon} />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-300">
                    {pillar.metric}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {pillar.summary}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.category}
              className="rounded-lg border border-white/10 bg-[#0F172A] p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  data-visual="skill-icon"
                  className="inline-flex h-9 w-9 items-center justify-center rounded border border-white/10 bg-[#090D16] text-cyan-400"
                >
                  {idx === 0 ? (
                    <Code2 className="h-5 w-5" aria-hidden="true" />
                  ) : idx === 1 ? (
                    <HardDrive className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                  ) : (
                    <Cpu className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    {group.category}
                  </h3>
                  <p className="font-mono text-xs text-slate-300">
                    {group.subtitle}
                  </p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={group.category}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-white/10 bg-slate-800/80 px-2.5 py-1 font-mono text-[11px] text-slate-100"
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
