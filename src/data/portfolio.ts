import type { ContactChannel, ProjectItem, SkillGroup } from "@/types/portfolio";

export const PROFILE = {
  name: "Adonai Afewerki",
  handle: "adonzone",
  role: "Systems, Robotics & Edge AI Engineer",
  email: "adonai@adonzone.dev",
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
    id: "beastbots-robotics",
    title: "2026-Rebuilt-Beastbots",
    domain: "Competitive Robotics · Control Systems",
    summary:
      "Competition-grade robot codebase engineered for deterministic autonomous routines, subsystem state machines, and live field diagnostics.",
    architecture: [
      "Modular subsystem isolation with hardware-abstracted motor and sensor interfaces.",
      "Telemetry logging pipeline for real-time PID tuning and brownout fault analysis.",
      "Deterministic autonomous command scheduler validated under competition match constraints.",
    ],
    tags: ["Robotics", "Control Loops", "Telemetry", "Embedded"],
    repoUrl: "https://github.com/adonzone/2026-Rebuilt-Beastbots",
    status: "Production",
  },
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
    id: "jarvis-assistant",
    title: "jarvis",
    domain: "Edge AI · Tool-Using Agent Runtime",
    summary:
      "Modular local assistant framework connecting LLM reasoning loops to system utilities, voice synthesis, and structured tool execution.",
    architecture: [
      "Pluggable tool-calling loop with strict input validation and deterministic fallback paths.",
      "Integrates local speech output and system automation hooks for hands-free operation.",
      "Designed for low-latency execution on workstation and edge GPU hardware.",
    ],
    tags: ["Edge AI", "Agents", "MCP", "Automation"],
    repoUrl: "https://github.com/adonzone/jarvis",
    status: "Active",
  },
  {
    id: "gcvs-scanner",
    title: "gcvs",
    domain: "DevSecOps · Static Security",
    summary:
      "Automated repository virus and supply-chain scanning workflow integrating signature checks into GitHub pipelines.",
    architecture: [
      "Automated artifact and repository scan gates triggered on push and pull request events.",
      "Zero-trust verification mindset aligned with CodeQL and supply-chain hardening.",
      "Structured pass/fail reporting for rapid triage in CI.",
    ],
    tags: ["Security", "CI/CD", "GitHub", "Supply Chain"],
    repoUrl: "https://github.com/adonzone/gcvs",
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
    id: "mslearn",
    label: "Microsoft Learn",
    value: "adonaiafewerki-4322",
    copyValue: "adonaiafewerki-4322",
  },
  {
    id: "certs",
    label: "Certificates Vault",
    value: "adonzone/certificates",
    copyValue: PROFILE.certificationsRepoUrl,
    href: PROFILE.certificationsRepoUrl,
  },
];
