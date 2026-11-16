"use client";

import { useMemo, useState } from "react";
import { Award, ExternalLink, FolderGit2 } from "lucide-react";
import { CREDENTIALS } from "@/data/credentials";
import { PROFILE } from "@/data/portfolio";
import type { IssuerName } from "@/types/portfolio";
import { SectionHeader } from "@/components/SectionHeader";

type FilterValue = "Featured" | "All" | IssuerName;

const ISSUER_ORDER: readonly IssuerName[] = [
  "AMD",
  "Anthropic",
  "AWS",
  "Cisco",
  "Hugging Face",
  "IBM",
  "Kaggle",
  "Microsoft",
];

export function Certifications() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("Featured");

  const issuerCounts = useMemo(() => {
    const counts = new Map<IssuerName, number>();
    for (const cred of CREDENTIALS) {
      counts.set(cred.issuer, (counts.get(cred.issuer) ?? 0) + 1);
    }
    return counts;
  }, []);

  const visibleCredentials = useMemo(() => {
    if (activeFilter === "Featured") {
      return CREDENTIALS.filter((c) => c.featured).slice(0, 6);
    }
    if (activeFilter === "All") {
      return CREDENTIALS;
    }
    return CREDENTIALS.filter((c) => c.issuer === activeFilter);
  }, [activeFilter]);

  const featuredCount = useMemo(
    () => Math.min(CREDENTIALS.filter((c) => c.featured).length, 6),
    []
  );

  return (
    <section
      id="credentials"
      className="min-h-[100svh] bg-[#090D16] py-20 lg:py-24"
    >
      <div className="wrap">
        <SectionHeader
          index="02"
          eyebrow="Verified Credentials"
          title="Certifications & Technical Badges"
          description="Auditable credentials archived in adonzone/certificates across GPU compute, agentic protocols, cloud infrastructure, and systems security."
        />

        <div
          data-visual="app-frame"
          className="mb-6 overflow-hidden rounded-lg border border-white/10 bg-[#0F172A]"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-[#090D16] px-4 py-2.5 font-mono text-xs">
            <span className="text-slate-200">
              LEDGER :: github.com/adonzone/certificates (main)
            </span>
            <a
              href={PROFILE.certificationsRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] scroll-mt-24 items-center gap-2 text-emerald-300 transition-colors hover:text-emerald-200"
            >
              <FolderGit2 className="h-4 w-4" aria-hidden="true" />
              <span>Open Archive ({CREDENTIALS.length} PDFs)</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 p-4 font-mono text-xs sm:grid-cols-4">
            <div className="rounded border border-white/10 bg-[#090D16] px-3 py-2">
              <div className="text-slate-400">GPU_COMPUTE</div>
              <div className="mt-0.5 text-cyan-300">AMD ROCm</div>
            </div>
            <div className="rounded border border-white/10 bg-[#090D16] px-3 py-2">
              <div className="text-slate-400">PROTOCOLS</div>
              <div className="mt-0.5 text-slate-100">Anthropic MCP</div>
            </div>
            <div className="rounded border border-white/10 bg-[#090D16] px-3 py-2">
              <div className="text-slate-400">CLOUD_&_NET</div>
              <div className="mt-0.5 text-slate-100">AWS · Cisco</div>
            </div>
            <div className="rounded border border-white/10 bg-[#090D16] px-3 py-2">
              <div className="text-slate-400">DEVSECOPS</div>
              <div className="mt-0.5 text-emerald-300">GitHub · CodeQL</div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-3">
          <div
            role="tablist"
            aria-label="Filter credentials by issuer"
            className="flex flex-wrap items-center gap-2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === "Featured"}
              onClick={() => setActiveFilter("Featured")}
              className={`min-h-[44px] scroll-mt-24 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
                activeFilter === "Featured"
                  ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-200"
                  : "border-white/10 bg-[#0F172A] text-slate-200 hover:border-cyan-500/30 hover:bg-[#1E293B]"
              }`}
            >
              Featured ({featuredCount})
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === "All"}
              onClick={() => setActiveFilter("All")}
              className={`min-h-[44px] scroll-mt-24 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
                activeFilter === "All"
                  ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-200"
                  : "border-white/10 bg-[#0F172A] text-slate-200 hover:border-cyan-500/30 hover:bg-[#1E293B]"
              }`}
            >
              All ({CREDENTIALS.length})
            </button>

            {ISSUER_ORDER.map((issuer) => {
              const count = issuerCounts.get(issuer) ?? 0;
              if (count === 0) return null;
              const isSelected = activeFilter === issuer;
              return (
                <button
                  key={issuer}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(issuer)}
                  className={`min-h-[44px] scroll-mt-24 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
                    isSelected
                      ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-200"
                      : "border-white/10 bg-[#0F172A] text-slate-200 hover:border-cyan-500/30 hover:bg-[#1E293B]"
                  }`}
                >
                  {issuer} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleCredentials.map((cred) => (
            <article
              key={cred.id}
              className="group flex flex-col justify-between rounded-lg border border-white/10 bg-[#0F172A] p-5 transition-all hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-[#1E293B]"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span
                    data-visual="cert-badge"
                    className="inline-flex items-center gap-2 rounded border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-cyan-200"
                  >
                    <Award className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                    <span>{cred.issuer}</span>
                  </span>
                  <time className="font-mono text-xs text-slate-300">
                    {cred.date}
                  </time>
                </div>

                <h3 className="text-base font-semibold leading-snug text-white">
                  {cred.title}
                </h3>

                {cred.credentialId ? (
                  <p className="mt-2 truncate font-mono text-xs text-slate-300">
                    ID: {cred.credentialId}
                  </p>
                ) : null}

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills">
                  {cred.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded border border-white/10 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t border-white/10 pt-3">
                <a
                  href={cred.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-between rounded-md border border-white/10 bg-[#090D16] px-3 py-2 font-mono text-xs font-medium text-slate-100 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
                >
                  <span>Verify Credential</span>
                  <ExternalLink
                    className="h-4 w-4 text-slate-300 transition-colors group-hover:text-cyan-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
