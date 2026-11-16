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

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

interface SubmitStatus {
  kind: "success" | "error";
  text: string;
}

const INITIAL_FORM_STATE: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

function validateForm(values: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please enter a message of at least 10 characters.";
  }
  return errors;
}

export function Contact() {
  const { copiedKey, copyText } = useCopyToClipboard();
  const [formState, setFormState] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const validationErrors = validateForm(formState);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(
        `Portfolio Inquiry from ${formState.name.trim()}`
      );
      const body = encodeURIComponent(
        `From: ${formState.name.trim()} <${formState.email.trim()}>\n\n${formState.message.trim()}`
      );
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      setStatus({
        kind: "success",
        text: `Opened your email client addressed to ${PROFILE.email}.`,
      });
      setFormState(INITIAL_FORM_STATE);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Inquiry from ${formState.name.trim()}`,
          from_name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),
        }),
      });

      const payload = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !payload.success) {
        throw new Error(payload.message ?? "Unable to send message.");
      }

      setStatus({
        kind: "success",
        text: `Message delivered to ${PROFILE.email}.`,
      });
      setFormState(INITIAL_FORM_STATE);
    } catch {
      setStatus({
        kind: "error",
        text: `Delivery failed. Please email ${PROFILE.email} directly.`,
      });
    } finally {
      setIsSubmitting(false);
    }
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
            noValidate
            onSubmit={handleSubmit}
            className="rounded-lg border border-white/10 bg-[#0F172A] p-6 lg:col-span-7"
          >
            <div
              data-visual="dispatch-frame"
              className="mb-4 flex items-center justify-between rounded border border-white/10 bg-[#090D16] px-3.5 py-2.5 font-mono text-xs"
            >
              <span className="font-semibold text-white">Send a Direct Message</span>
              <span className="text-emerald-300">
                {WEB3FORMS_KEY ? "TLS / WEB3FORMS" : "MAILTO DISPATCH"}
              </span>
            </div>

            {status ? (
              <div
                role="status"
                className={`mb-4 flex items-center justify-between gap-3 rounded-md border px-4 py-3 text-sm ${
                  status.kind === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                    : "border-rose-500/30 bg-rose-500/10 text-rose-200"
                }`}
              >
                <span>{status.text}</span>
                <button
                  type="button"
                  onClick={() => setStatus(null)}
                  className="min-h-[44px] shrink-0 font-mono text-xs underline underline-offset-4"
                >
                  Dismiss
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
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  value={formState.name}
                  onChange={(e) => {
                    setFormState((prev) => ({ ...prev, name: e.target.value }));
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Ada Lovelace"
                  className="min-h-[44px] w-full rounded-md border border-white/15 bg-[#090D16] px-3.5 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-500"
                />
                {errors.name ? (
                  <p id="contact-name-error" className="mt-1 font-mono text-xs text-rose-300">
                    {errors.name}
                  </p>
                ) : null}
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
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  value={formState.email}
                  onChange={(e) => {
                    setFormState((prev) => ({ ...prev, email: e.target.value }));
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="ada@analytical.example"
                  className="min-h-[44px] w-full rounded-md border border-white/15 bg-[#090D16] px-3.5 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-500"
                />
                {errors.email ? (
                  <p id="contact-email-error" className="mt-1 font-mono text-xs text-rose-300">
                    {errors.email}
                  </p>
                ) : null}
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
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                value={formState.message}
                onChange={(e) => {
                  setFormState((prev) => ({ ...prev, message: e.target.value }));
                  if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                }}
                placeholder="Project scope, systems requirements, or role details..."
                className="w-full rounded-md border border-white/15 bg-[#090D16] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-500"
              />
              {errors.message ? (
                <p id="contact-message-error" className="mt-1 font-mono text-xs text-rose-300">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-cyan-400 active:translate-y-px disabled:opacity-60 sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>{isSubmitting ? "Sending..." : "Transmit Message"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
