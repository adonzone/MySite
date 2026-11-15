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
      return CREDENTIALS.filter((c) => c.featured);
    }
    if (activeFilter === "All") {
      return CREDENTIALS;
    }
    return CREDENTIALS.filter((c) => c.issuer === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="credentials"
      className="border-b border-white/10 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="02"
          eyebrow="Verified Credentials"
          title="Certifications & Technical Badges"
          description="Auditable credentials archived in adonzone/certificates across GPU compute, agentic protocols, cloud infrastructure, and systems security."
        />

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div
            role="tablist"
            aria-label="Filter credentials by issuer"
            className="flex flex-wrap gap-1.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === "Featured"}
              onClick={() => setActiveFilter("Featured")}
              className={`min-h-[44px] rounded-md border px-3 py-1.5 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                activeFilter === "Featured"
                  ? "border-cyan-500/40 bg-cyan-500/15 text-cyan-300"
                  : "border-white/10 bg-[#0F172A] text-slate-300 hover:border-cyan-500/30 hover:bg-[#1E293B]"
              }`}
            >
              Featured ({CREDENTIALS.filter((c) => c.featured).length})
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === "All"}
              onClick={() => setActiveFilter("All")}
              className={`min-h-[44px] rounded-md border px-3 py-1.5 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                activeFilter === "All"
                  ? "border-cyan-500/40 bg-cyan-500/15 text-cyan-300"
                  : "border-white/10 bg-[#0F172A] text-slate-300 hover:border-cyan-500/30 hover:bg-[#1E293B]"
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
                  className={`min-h-[44px] rounded-md border px-3 py-1.5 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    isSelected
                      ? "border-cyan-500/40 bg-cyan-500/15 text-cyan-300"
                      : "border-white/10 bg-[#0F172A] text-slate-300 hover:border-cyan-500/30 hover:bg-[#1E293B]"
                  }`}
                >
                  {issuer} ({count})
                </button>
              );
            })}
          </div>

          <a
            href={PROFILE.certificationsRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-md border border-white/10 bg-[#0F172A] px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-emerald-500/30 hover:bg-[#1E293B] hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <FolderGit2 className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
            <span>adonzone/certificates</span>
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleCredentials.map((cred) => (
            <article
              key={cred.id}
              className="group flex flex-col justify-between rounded-lg border border-white/10 bg-[#0F172A] p-5 transition-colors hover:border-cyan-500/30 hover:bg-[#1E293B]"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded border border-cyan-500/25 bg-cyan-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-cyan-300">
                    <Award className="h-3 w-3" aria-hidden="true" />
                    {cred.issuer}
                  </span>
                  <time className="font-mono text-xs text-slate-400">
                    {cred.date}
                  </time>
                </div>

                <h3 className="text-base font-semibold leading-snug text-white">
                  {cred.title}
                </h3>

                {cred.credentialId ? (
                  <p className="mt-2 truncate font-mono text-xs text-slate-400">
                    ID: {cred.credentialId}
                  </p>
                ) : null}

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills">
                  {cred.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded border border-white/5 bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300"
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
                  className="inline-flex min-h-[44px] w-full items-center justify-between rounded-md border border-white/10 bg-[#090D16] px-3 py-2 font-mono text-xs font-medium text-slate-200 transition-colors hover:border-cyan-500/40 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <span>Verify Credential</span>
                  <ExternalLink
                    className="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-cyan-400"
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
