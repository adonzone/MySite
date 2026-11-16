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

        <div
          data-visual="app-frame"
          className="mb-8 overflow-hidden rounded-lg border border-white/10 bg-[#0F172A]"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-[#090D16] px-4 py-2.5 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-200">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>node01 :: rocm-smi --showuse &amp;&amp; systemctl status edge-mcp</span>
            </div>
            <span className="text-emerald-300">ONLINE · 0 FAULTS</span>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 font-mono text-xs sm:grid-cols-3">
            <div className="rounded border border-white/10 bg-[#090D16] p-3">
              <div className="text-slate-400">CONTROL_LOOP</div>
              <div className="mt-1 text-sm font-medium text-cyan-300">20ms deterministic tick</div>
              <div className="mt-1 text-slate-300">CAN bus telemetry · PID state</div>
            </div>
            <div className="rounded border border-white/10 bg-[#090D16] p-3">
              <div className="text-slate-400">KERNEL_&_GPU</div>
              <div className="mt-1 text-sm font-medium text-emerald-300">Linux 6.x · AMD ROCm</div>
              <div className="mt-1 text-slate-300">Bare-metal · Containerized</div>
            </div>
            <div className="rounded border border-white/10 bg-[#090D16] p-3">
              <div className="text-slate-400">LOCAL_INFERENCE</div>
              <div className="mt-1 text-sm font-medium text-slate-100">MCP Tool Runtime</div>
              <div className="mt-1 text-slate-300">Air-gapped · Zero cloud lock-in</div>
            </div>
          </div>
        </div>

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
