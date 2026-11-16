import type { ContactChannel, ProjectItem, SkillGroup } from "@/types/portfolio";

export const PROFILE = {
  name: "Adonai Afewerki",
  handle: "adonzone",
  role: "Systems, Robotics & Edge AI Engineer",
  email: "adonafom100@gmail.com",
  location: "North America · EST (UTC-5)",
  availability: "Available for Systems & Edge AI Roles",
  githubUrl: "https://github.com/adonzone",
  linkedinUrl: "https://www.linkedin.com/in/adonaiafewerki",
  certificationsRepoUrl: "https://github.com/adonzone/certificates",
} as const;

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    category: "Languages",
    subtitle: "Systems, scripting, and full-stack runtimes",
    items: [
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "Bash / Zsh",
      "SQL",
    ],
  },
  {
    category: "Systems & Infrastructure",
    subtitle: "Bare-metal deployment, containers, and telemetry",
    items: [
      "Linux (Debian / Arch)",
      "AMD ROCm",
      "Docker & Compose",
      "Git Internals",
      "GitHub Actions CI",
      "Systemd & Networking",
      "Self-Hosted Services",
    ],
  },
  {
    category: "Core Technical Domains",
    subtitle: "Control loops, local inference, and security",
    items: [
      "Competitive Robotics",
      "Edge AI & Local LLMs",
      "Model Context Protocol",
      "Hardware Diagnostics",
      "CodeQL / DevSecOps",
      "CAN Bus Telemetry",
    ],
  },
];

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: "simple-git",
    title: "SimpleGit",
    domain: "Systems Programming · VCS Internals",
    summary:
      "From-scratch implementation of core Git plumbing and porcelain primitives to model content-addressable storage and commit DAGs.",
    architecture: [
      "SHA-1 object store handling blobs, trees, and commit snapshots with zlib compression.",
      "Index staging tree and deterministic diff traversal without external VCS binaries.",
      "Clean CLI surface mirroring init, add, commit, and object inspection workflows.",
    ],
    tags: ["Systems", "DAG", "Content-Addressable", "CLI"],
    repoUrl: "https://github.com/adonzone/SimpleGit",
    status: "Active",
  },
  {
    id: "kiwix-vault",
    title: "kiwix-vault",
    domain: "Self-Hosted Infrastructure · Offline Knowledge",
    summary:
      "Resilient overlay interface for local Kiwix ZIM archives, enabling air-gapped documentation and knowledge retrieval on self-hosted Linux nodes.",
    architecture: [
      "Lightweight web overlay indexing local ZIM archives with zero external network dependencies.",
      "Designed for low-power edge nodes and homelab deployments behind reverse proxies.",
      "Fast keyboard-first navigation across technical documentation bundles.",
    ],
    tags: ["Self-Hosted", "Linux", "Offline-First", "HTML/CSS"],
    repoUrl: "https://github.com/adonzone/kiwix-vault",
    status: "Active",
  },
  {
    id: "say-tool",
    title: "say-tool",
    domain: "Systems Utility · Audio Pipeline",
    summary:
      "Cross-platform Python CLI utility routing synthesized speech directly to the OS preferred audio output device for headless alerts.",
    architecture: [
      "Thin OS-native audio abstraction with zero cloud TTS latency or API key requirements.",
      "Composable Unix-style CLI suitable for cron jobs, build notifications, and robotics alerts.",
      "Minimal dependency footprint for rapid deployment on fresh Linux or macOS hosts.",
    ],
    tags: ["Python", "CLI", "Audio", "Linux/macOS"],
    repoUrl: "https://github.com/adonzone/say-tool",
    status: "Production",
  },
];

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    id: "email",
    label: "Direct Email",
    value: PROFILE.email,
    copyValue: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
  },
  {
    id: "github",
    label: "GitHub Handle",
    value: `@${PROFILE.handle}`,
    copyValue: PROFILE.githubUrl,
    href: PROFILE.githubUrl,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "in/adonaiafewerki",
    copyValue: PROFILE.linkedinUrl,
    href: PROFILE.linkedinUrl,
  },
  {
    id: "certs",
    label: "Certificates Vault",
    value: "adonzone/certificates",
    copyValue: PROFILE.certificationsRepoUrl,
    href: PROFILE.certificationsRepoUrl,
  },
];
