"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { CREDENTIALS } from "@/data/credentials";
import { PROFILE } from "@/data/portfolio";
import { HeroShader } from "@/components/HeroShader";

interface HeroStat {
  label: string;
  value: string;
}

const HERO_STATS: readonly HeroStat[] = [
  { label: "Verified Credentials", value: `${CREDENTIALS.length} Certs` },
  { label: "Primary Stack", value: "Linux · C++ · Python · TS" },
  { label: "Compute Target", value: "AMD ROCm & Edge Nodes" },
  { label: "Focus", value: "Robotics & Local AI" },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#090D16] bg-engineering-grid"
      data-enter=""
    >
      <HeroShader />
      <div className="wrap relative z-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          <div className="hero-text lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#0F172A] px-3 py-1.5 font-mono text-xs text-slate-200">
              <Cpu className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              <span>{PROFILE.role}</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            >
              Engineering deterministic{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                systems, robotics, and edge AI
              </span>{" "}
              from bare metal up.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              I&apos;m <strong className="font-semibold text-white">{PROFILE.name}</strong>{" "}
              (<span className="font-mono text-cyan-400">@{PROFILE.handle}</span>). I build
              competition-grade robotics control software, harden Linux deployments, and architect
              self-hosted edge AI infrastructure with verifiable reliability.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#credentials"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-400 active:translate-y-px"
              >
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>View Credentials</span>
              </a>

              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-white/15 bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-slate-100 transition-all hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-[#1E293B] active:translate-y-px"
              >
                <span>Explore Work</span>
                <ArrowRight className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-white/10 bg-[#0F172A] text-slate-200 transition-all hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-[#1E293B] hover:text-cyan-400"
              >
                <Code2 className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-white/10 bg-[#0F172A] text-slate-200 transition-all hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-[#1E293B] hover:text-cyan-400"
              >
                <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside
            aria-label="System specification summary"
            data-visual="system-telemetry"
            className="rounded-lg border border-white/10 bg-[#0F172A] p-6 lg:col-span-5"
          >
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
              <span className="text-slate-300">SYSTEM_PROFILE.json</span>
              <span className="text-emerald-400">VERIFIED</span>
            </div>

            <svg
              viewBox="0 0 360 64"
              className="mb-5 h-16 w-full rounded border border-white/10 bg-[#090D16] p-2"
              aria-hidden="true"
            >
              <line x1="56" y1="32" x2="148" y2="32" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="212" y1="32" x2="304" y2="32" stroke="#10b981" strokeWidth="1.5" />
              <rect x="12" y="14" width="52" height="36" rx="6" fill="#0F172A" stroke="#334155" />
              <text x="38" y="36" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">EDGE</text>
              <rect x="136" y="10" width="88" height="44" rx="6" fill="#0F172A" stroke="#06b6d4" />
              <text x="180" y="36" textAnchor="middle" fill="#f8fafc" fontSize="10" fontFamily="monospace">LINUX / ROCm</text>
              <rect x="296" y="14" width="52" height="36" rx="6" fill="#0F172A" stroke="#10b981" />
              <text x="322" y="36" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontFamily="monospace">AGENTS</text>
            </svg>

            <dl className="space-y-3.5">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-0.5 border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
                    {stat.label}
                  </dt>
                  <dd className="font-mono text-sm font-medium text-slate-50">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
