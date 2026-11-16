"use client";

import { type FormEvent, useState } from "react";
import { Check, Copy, ExternalLink, MapPin, Send } from "lucide-react";
import { CONTACT_CHANNELS, PROFILE } from "@/data/portfolio";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { SectionHeader } from "@/components/SectionHeader";

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM_STATE: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const { copiedKey, copyText } = useCopyToClipboard();
  const [formState, setFormState] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }
    setSubmitted(true);
    setFormState(INITIAL_FORM_STATE);
  }

  return (
    <section
      id="contact"
      className="flex min-h-[100svh] items-center bg-[#090D16] py-20 lg:py-24"
    >
      <div className="wrap">
        <SectionHeader
          index="04"
          eyebrow="Direct Channels"
          title="Contact & Collaboration"
          description="Reach out for systems engineering, competitive robotics software, or edge AI infrastructure work."
        />

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-white/10 bg-[#0F172A] px-3.5 py-2 font-mono text-xs text-slate-100">
            <MapPin className="h-4 w-4 text-cyan-400" aria-hidden="true" />
            <span>{PROFILE.location}</span>
          </div>
          <div className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 font-mono text-xs text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span>{PROFILE.availability}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {CONTACT_CHANNELS.map((channel) => {
              const isCopied = copiedKey === channel.id;
              return (
                <div
                  key={channel.id}
                  className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-[#0F172A] p-4 transition-colors hover:border-cyan-500/30 hover:bg-[#1E293B]"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
                      {channel.label}
                    </p>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          channel.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-1 inline-flex min-h-[44px] items-center gap-1.5 truncate font-mono text-sm font-medium text-slate-50 hover:text-cyan-400"
                      >
                        <span className="truncate">{channel.value}</span>
                        {channel.href.startsWith("http") ? (
                          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        ) : null}
                      </a>
                    ) : (
                      <p className="mt-1 flex min-h-[44px] items-center truncate font-mono text-sm font-medium text-slate-50">
                        {channel.value}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => void copyText(channel.copyValue, channel.id)}
                    aria-label={`Copy ${channel.label}`}
                    className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-md border border-white/10 bg-[#090D16] px-3 font-mono text-xs text-slate-200 transition-colors hover:border-emerald-500/30 hover:text-emerald-300"
                  >
                    {isCopied ? (
                      <span className="inline-flex items-center gap-1.5 text-emerald-300">
                        <Check className="h-4 w-4" aria-hidden="true" />
                        <span>Copied</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5">
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        <span>Copy</span>
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-white/10 bg-[#0F172A] p-6 lg:col-span-7"
          >
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-base font-semibold text-white">
                Send a Direct Message
              </h3>
              <span className="font-mono text-xs text-slate-300">
                TLS / DIRECT_DISPATCH
              </span>
            </div>

            <svg
              viewBox="0 0 420 56"
              data-visual="dispatch-channel"
              className="mb-4 h-14 w-full rounded border border-white/10 bg-[#090D16] px-3"
              aria-hidden="true"
            >
              <line x1="108" y1="28" x2="180" y2="28" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="250" y1="28" x2="312" y2="28" stroke="#10b981" strokeWidth="1.5" />
              <rect x="16" y="14" width="92" height="28" rx="4" fill="#0F172A" stroke="#334155" />
              <text x="62" y="32" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="monospace">CLIENT</text>
              <rect x="180" y="14" width="70" height="28" rx="4" fill="#0F172A" stroke="#06b6d4" />
              <text x="215" y="32" textAnchor="middle" fill="#f8fafc" fontSize="10" fontFamily="monospace">TLS 1.3</text>
              <rect x="312" y="14" width="92" height="28" rx="4" fill="#0F172A" stroke="#10b981" />
              <text x="358" y="32" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontFamily="monospace">INBOX</text>
            </svg>

            {submitted ? (
              <div
                role="status"
                className="mb-4 flex items-center justify-between gap-3 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
              >
                <span>
                  Message staged. For immediate response, email{" "}
                  <span className="font-mono text-emerald-300">{PROFILE.email}</span>.
                </span>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="min-h-[44px] shrink-0 font-mono text-xs text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                >
                  Reset
                </button>
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-200"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Ada Lovelace"
                  className="min-h-[44px] w-full rounded-md border border-white/15 bg-[#090D16] px-3.5 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-200"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="ada@analytical.example"
                  className="min-h-[44px] w-full rounded-md border border-white/15 bg-[#090D16] px-3.5 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-200"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formState.message}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Project scope, systems requirements, or role details..."
                className="w-full rounded-md border border-white/15 bg-[#090D16] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-500"
              />
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-400 active:translate-y-px sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Transmit Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
