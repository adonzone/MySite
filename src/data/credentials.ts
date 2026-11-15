import type { Credential } from "@/types/portfolio";

const CERT_REPO_BASE = "https://github.com/adonzone/certificates/blob/main";

function certUrl(path: string): string {
  const encoded = path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${CERT_REPO_BASE}/${encoded}`;
}

export const CREDENTIALS: readonly Credential[] = [
  {
    id: "amd-rocm-certified-associate",
    title: "AMD ROCm Certified Associate",
    issuer: "AMD",
    date: "Nov 2026",
    credentialId: "20261105-20-m60cqz",
    skills: ["ROCm", "HIP", "GPU Compute", "Linux Drivers"],
    verifyUrl: certUrl(
      "AMD/AMD ROCm Certified Associate/AMDROCmCertifiedAssociateCertificate20261105-20-m60cqz.pdf"
    ),
    featured: true,
  },
  {
    id: "anthropic-mcp-advanced",
    title: "MCP (Model Context Protocol) Advanced Topics",
    issuer: "Anthropic",
    date: "2026",
    skills: ["MCP", "Tool Protocols", "Context Engineering", "Agents"],
    verifyUrl: certUrl(
      "Anthropic/MCP (Model Context Protocol) Advanced Topics/claude-academy-badge-model-context-protocol-advanced-topics.pdf"
    ),
    featured: true,
  },
  {
    id: "anthropic-intro-mcp",
    title: "Introduction to MCP (Model Context Protocol)",
    issuer: "Anthropic",
    date: "2026",
    skills: ["MCP", "Server Primitives", "Client Integration"],
    verifyUrl: certUrl(
      "Anthropic/Introduction to MCP (Model Context Protocol)/claude-academy-badge-introduction-to-model-context-protocol.pdf"
    ),
    featured: true,
  },
  {
    id: "anthropic-human-agent-teams",
    title: "Building Effective Human-Agent Teams (Beta)",
    issuer: "Anthropic",
    date: "2026",
    skills: ["Agent Orchestration", "Human-in-the-Loop", "Workflows"],
    verifyUrl: certUrl(
      "Anthropic/Buidling Effective Human-Agent Teams (Beta)/claude-academy-badge-building-effective-human-agent-teams.pdf"
    ),
    featured: true,
  },
  {
    id: "anthropic-claude-code-101",
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "2026",
    skills: ["Agentic Coding", "CLI Workflows", "Code Verification"],
    verifyUrl: certUrl(
      "Anthropic/Claude Code 101/claude-academy-badge-claude-code-101.pdf"
    ),
  },
  {
    id: "anthropic-ai-capabilities",
    title: "AI Capabilities & Limitations",
    issuer: "Anthropic",
    date: "2026",
    skills: ["LLM Evaluation", "Reliability", "Safety Boundaries"],
    verifyUrl: certUrl(
      "Anthropic/AI Capabilities & Limitations/claude-academy-badge-ai-capabilities-and-limitations.pdf"
    ),
  },
  {
    id: "anthropic-claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
    skills: ["Prompt Engineering", "Structured Outputs", "Reasoning"],
    verifyUrl: certUrl("Anthropic/Claude 101/claude-academy-badge-claude-101.pdf"),
  },
  {
    id: "aws-ai-factories",
    title: "Introduction to AWS AI Factories",
    issuer: "AWS",
    date: "2026",
    credentialId: "4eeaeaf9-9f2e-431d-8c4b-af4e41244c60",
    skills: ["AI Infrastructure", "Compute Clusters", "Cloud Architecture"],
    verifyUrl: certUrl(
      "AWS/Introduction to AWS AI Factories/4eeaeaf9-9f2e-431d-8c4b-af4e41244c60.pdf"
    ),
    featured: true,
  },
  {
    id: "aws-ml-basics",
    title: "ML Basics",
    issuer: "AWS",
    date: "2026",
    credentialId: "e6dc5647-5080-4381-b8e8-f8f4ac4aec2c",
    skills: ["Machine Learning", "Model Training", "Inference"],
    verifyUrl: certUrl(
      "AWS/ML basics/e6dc5647-5080-4381-b8e8-f8f4ac4aec2c.pdf"
    ),
  },
  {
    id: "aws-saas-fundamentals",
    title: "SaaS Technical Fundamentals",
    issuer: "AWS",
    date: "2026",
    credentialId: "020e79d1-1fff-4947-9853-24c769f93d9a",
    skills: ["Multi-Tenancy", "Cloud Architecture", "Scalability"],
    verifyUrl: certUrl(
      "AWS/SaaS Technical Fundamentals/020e79d1-1fff-4947-9853-24c769f93d9a.pdf"
    ),
  },
  {
    id: "aws-security-essentials",
    title: "Media & Entertainment Content Production Security Essentials",
    issuer: "AWS",
    date: "2026",
    credentialId: "7c2f4c2f-3183-45f9-b9ea-b3559743cc1f",
    skills: ["Zero Trust", "Cloud Security", "Access Control"],
    verifyUrl: certUrl(
      "AWS/Media & Entertainment Content Production Security Essientials/7c2f4c2f-3183-45f9-b9ea-b3559743cc1f.pdf"
    ),
  },
  {
    id: "aws-job-roles",
    title: "Job Roles in the Cloud",
    issuer: "AWS",
    date: "2026",
    credentialId: "5f2ddb80-565d-4429-b9cd-0acc2116a245",
    skills: ["Cloud Operations", "DevOps", "Solutions Architecture"],
    verifyUrl: certUrl(
      "AWS/Job Roles in the Cloud/5f2ddb80-565d-4429-b9cd-0acc2116a245.pdf"
    ),
  },
  {
    id: "cisco-operating-systems",
    title: "Operating Systems Basics",
    issuer: "Cisco",
    date: "Nov 2026",
    credentialId: "20261102-20-kusv6e",
    skills: ["Linux", "Kernel Concepts", "Process Management"],
    verifyUrl: certUrl(
      "Cisco/Operating Systems Basics/OperatingSystemsBasicsUpdate20261102-20-kusv6e.pdf"
    ),
    featured: true,
  },
  {
    id: "cisco-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Nov 2026",
    credentialId: "20261102-20-pepjv8",
    skills: ["Network Security", "Threat Modeling", "Hardening"],
    verifyUrl: certUrl(
      "Cisco/Introduction to Cybersecurity/I2CSUpdate20261102-20-pepjv8.pdf"
    ),
    featured: true,
  },
  {
    id: "cisco-iot",
    title: "Introduction to Internet of Things (IoT)",
    issuer: "Cisco",
    date: "Nov 2026",
    credentialId: "20261102-20-ivt9fg",
    skills: ["Embedded Systems", "Edge Telemetry", "Networking"],
    verifyUrl: certUrl(
      "Cisco/Introduction to Internet of Things (IoT/IntrotoIoTUpdate20261102-20-ivt9fg.pdf"
    ),
    featured: true,
  },
  {
    id: "cisco-modern-ai",
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    date: "Nov 2026",
    credentialId: "20261102-20-981s6n",
    skills: ["Neural Networks", "Edge AI", "Applied ML"],
    verifyUrl: certUrl(
      "Cisco/Introduction to Modern AI/IntrotoModernAIUpdate20261102-20-981s6n.pdf"
    ),
  },
  {
    id: "cisco-python-essentials",
    title: "Python Essentials 1",
    issuer: "Cisco",
    date: "Nov 2026",
    credentialId: "20261102-20-4b2h6m",
    skills: ["Python", "Data Structures", "Automation"],
    verifyUrl: certUrl(
      "Cisco/Python Essientials 1/PythonEssentials1Update20261102-20-4b2h6m.pdf"
    ),
  },
  {
    id: "cisco-html-essentials",
    title: "HTML Essentials",
    issuer: "Cisco",
    date: "Nov 2026",
    credentialId: "20261102-20-nbtwaa",
    skills: ["Semantic HTML", "Accessibility", "Web Standards"],
    verifyUrl: certUrl(
      "Cisco/HTML Essentials/HTMLEssentialsv120261102-20-nbtwaa.pdf"
    ),
  },
  {
    id: "hf-llm-ch1",
    title: "Hugging Face LLM Course — Chapter 1",
    issuer: "Hugging Face",
    date: "2026",
    skills: ["Transformers", "Tokenization", "Local Inference"],
    verifyUrl: certUrl("Hugging Face/Chapter 1 Hugging Face LLM.pdf"),
    featured: true,
  },
  {
    id: "ibm-quantum-enigmas",
    title: "Quantum Enigmas",
    issuer: "IBM",
    date: "Oct 2026",
    credentialId: "20261027-20-u4ia3l",
    skills: ["Quantum Computing", "Qubits", "Superposition"],
    verifyUrl: certUrl(
      "IBM/Quantum Enigmas/QuantumEnigmas_Badge20261027-20-u4ia3l.pdf"
    ),
    featured: true,
  },
  {
    id: "ibm-emerging-tech",
    title: "Explore Emerging Tech",
    issuer: "IBM",
    date: "Oct 2026",
    credentialId: "20261026-20-s1buv1",
    skills: ["AI Systems", "Cloud", "Distributed Ledger"],
    verifyUrl: certUrl(
      "IBM/Explore Emerging Tech/ExploreEmergingTech_Badge20261026-20-s1buv1.pdf"
    ),
  },
  {
    id: "kaggle-intro-ml",
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "2026",
    skills: ["Python", "Decision Trees", "Model Validation"],
    verifyUrl: certUrl("Kaggle/Adonai Afewerki - Intro to Machine Learning.pdf"),
    featured: true,
  },
  {
    id: "kaggle-ai-ethics",
    title: "Intro to AI Ethics",
    issuer: "Kaggle",
    date: "2026",
    skills: ["AI Governance", "Bias Auditing", "Model Cards"],
    verifyUrl: certUrl("Kaggle/Adonai Afewerki - Intro to AI Ethics.pdf"),
  },
  {
    id: "ms-code-scanning",
    title: "Configure Code Scanning on GitHub",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["CodeQL", "Static Analysis", "DevSecOps"],
    verifyUrl: certUrl(
      "Microsoft/Configure code scanning on GitHub/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
    featured: true,
  },
  {
    id: "ms-intro-mcp-server",
    title: "Introduction to MCP Server",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["MCP Server", "Tool Schemas", "AI Integration"],
    verifyUrl: certUrl(
      "Microsoft/Introduction to MCP Server/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-copilot-agent-mode",
    title: "Building Applications with GitHub Copilot Agent Mode",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["Agent Mode", "Automated Refactoring", "CI/CD"],
    verifyUrl: certUrl(
      "Microsoft/Building applications with GitHub Copilot agent mode/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-accelerate-copilot-cloud",
    title: "Accelerate Development with Copilot in the Cloud",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["Cloud Dev", "Codespaces", "Workflow Automation"],
    verifyUrl: certUrl(
      "Microsoft/Accelerate development with Copilot in the cloud/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-github-codespaces",
    title: "Code with GitHub Codespaces",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["Devcontainers", "Remote Linux", "Reproducible Envs"],
    verifyUrl: certUrl(
      "Microsoft/Code with GitHub Codespaces/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-github-foundations-1",
    title: "GitHub Foundations Part 1 of 2",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["Git Internals", "Branching", "Collaboration"],
    verifyUrl: certUrl(
      "Microsoft/GitHub Foundations Part 1 of 2/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-copilot-fundamentals-2",
    title: "GitHub Copilot Fundamentals Part 2 of 2",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["Context Prompting", "Testing", "Code Review"],
    verifyUrl: certUrl(
      "Microsoft/Github Copillot Fundamentals Part 2 of 2/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-pr-code-reviews",
    title: "Levelling Up Code Reviews & Pull Requests with GitHub Copilot",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["PR Review", "Diff Analysis", "Quality Gates"],
    verifyUrl: certUrl(
      "Microsoft/Levelling up code reviews and pull requests with GitHub Copilot/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-copilot-python",
    title: "Using GitHub Copilot with Python",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["Python", "Type Hints", "Unit Testing"],
    verifyUrl: certUrl(
      "Microsoft/Using GitHub Copilot with Python/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-copilot-js",
    title: "Using GitHub Copilot with JavaScript",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["JavaScript", "TypeScript", "Frontend Tooling"],
    verifyUrl: certUrl(
      "Microsoft/Using GitHub Copilot with JavaScript/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-intro-git",
    title: "Introduction to Git",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["Version Control", "Commit Graphs", "CLI"],
    verifyUrl: certUrl(
      "Microsoft/Introduction to Git/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-intro-github",
    title: "Introduction to GitHub",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["Repositories", "Issues", "Pull Requests"],
    verifyUrl: certUrl(
      "Microsoft/Introduction to Github/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-github-products",
    title: "Introduction to GitHub's Products",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["GitHub Actions", "Packages", "Enterprise"],
    verifyUrl: certUrl(
      "Microsoft/Introduction to GitHub's products/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-intro-copilot",
    title: "Introduction to GitHub Copilot",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["AI Pair Programming", "IDE Integration"],
    verifyUrl: certUrl(
      "Microsoft/Introduction to Github Copilot/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-github-projects",
    title: "Manage Your Work with GitHub Projects",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["Sprint Planning", "Roadmaps", "Issue Triage"],
    verifyUrl: certUrl(
      "Microsoft/Manage your work with Github Projects/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-markdown",
    title: "Communicate Effectively on GitHub Using Markdown",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["Technical Docs", "Markdown", "Specifications"],
    verifyUrl: certUrl(
      "Microsoft/Communicate effectively on GitHub using Markdown/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
  {
    id: "ms-first-csharp",
    title: "Write Your First C# Code",
    issuer: "Microsoft",
    date: "2026",
    credentialId: "adonaiafewerki-4322",
    skills: ["C#", ".NET", "Type Safety"],
    verifyUrl: certUrl(
      "Microsoft/Write your first C# code/Achievements - adonaiafewerki-4322 _ Microsoft Learn.pdf"
    ),
  },
];
