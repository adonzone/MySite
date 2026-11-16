"use client";

import { useState } from "react";
import { Menu, Terminal, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Credentials", href: "#credentials" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav sticky top-0 z-50 border-b border-white/10 bg-[#090D16]/85 backdrop-blur-md">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="wrap flex items-center justify-between gap-4 py-2.5">
        <a
          href="#hero"
          className="inline-flex min-h-[44px] items-center gap-2.5 rounded-md px-1 font-mono text-sm font-medium text-slate-100 transition-colors hover:text-cyan-400"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded border border-white/10 bg-[#0F172A] text-cyan-400">
            <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="tracking-tight">
            adonaiafewerki<span className="text-cyan-400">.me</span>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-slate-200 transition-colors hover:bg-[#1E293B] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs text-emerald-300 sm:inline-flex">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>SYS: ONLINE</span>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-white/10 bg-[#0F172A] text-slate-100 transition-colors hover:border-cyan-500/30 hover:bg-[#1E293B] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#090D16]/95 py-3 md:hidden"
        >
          <div className="wrap flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="inline-flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-slate-100 transition-colors hover:bg-[#1E293B] hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 font-mono text-xs text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Systems &amp; Edge AI Roles</span>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
