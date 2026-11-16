"use client";

import { ArrowUp } from "lucide-react";
import { CREDENTIALS } from "@/data/credentials";
import { PROFILE } from "@/data/portfolio";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="closing border-t border-white/10 bg-[#090D16]">
      <div className="wrap flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs text-slate-300">
            SYS_STACK: Next.js App Router · TypeScript Strict · Tailwind CSS
          </p>
          <p className="font-mono text-xs text-slate-400">
            © 2026 {PROFILE.name} (@{PROFILE.handle}) · {CREDENTIALS.length} Verified
            Credentials
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-white/10 bg-[#0F172A] px-3.5 py-2 font-mono text-xs text-slate-100 transition-colors hover:border-cyan-500/30 hover:bg-[#1E293B] hover:text-cyan-400"
        >
          <span>Back to Top</span>
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
