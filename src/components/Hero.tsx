"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";
import { CREDENTIALS } from "@/data/credentials";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

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
  const { copiedKey, copyText } = useCopyToClipboard();
  const emailCopied = copiedKey === "hero-email";

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative border-b border-white/10 bg-engineering-grid"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/10 bg-[#0F172A] px-3 py-1.5 font-mono text-xs text-slate-300">
              <Cpu className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
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

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              I&apos;m <strong className="font-semibold text-slate-100">{PROFILE.name}</strong>{" "}
              (<span className="font-mono text-cyan-400">@{PROFILE.handle}</span>). I build
              competition-grade robotics control software, harden Linux deployments, and architect
              self-hosted edge AI infrastructure with verifiable reliability.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#credentials"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090D16]"
              >
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>View Credentials</span>
              </a>

              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-white/10 bg-[#0F172A] px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-cyan-500/30 hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <span>Explore Work</span>
                <ArrowRight className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => void copyText(PROFILE.email, "hero-email")}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-white/10 bg-[#0F172A] px-4 py-2.5 font-mono text-xs text-slate-200 transition-colors hover:border-emerald-500/30 hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {emailCopied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-300">Copied {PROFILE.email}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    <span>{PROFILE.email}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 sm:ml-1">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-white/10 bg-[#0F172A] text-slate-300 transition-colors hover:border-cyan-500/30 hover:bg-[#1E293B] hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <Code2 className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-white/10 bg-[#0F172A] text-slate-300 transition-colors hover:border-cyan-500/30 hover:bg-[#1E293B] hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <aside
            aria-label="System specification summary"
            className="rounded-lg border border-white/10 bg-[#0F172A] p-5 lg:col-span-4"
          >
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
              <span className="text-slate-400">SYSTEM_PROFILE.json</span>
              <span className="text-emerald-400">VERIFIED</span>
            </div>
            <dl className="space-y-3.5">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-0.5 border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="font-mono text-sm font-medium text-slate-100">
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
