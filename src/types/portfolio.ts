export type IssuerName =
  | "AMD"
  | "AWS"
  | "Anthropic"
  | "Cisco"
  | "Hugging Face"
  | "IBM"
  | "Kaggle"
  | "Microsoft";

export interface Credential {
  id: string;
  title: string;
  issuer: IssuerName;
  date: string;
  credentialId?: string;
  skills: readonly string[];
  verifyUrl: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  subtitle: string;
  items: readonly string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  domain: string;
  summary: string;
  architecture: readonly string[];
  tags: readonly string[];
  repoUrl: string;
  demoUrl?: string;
  status: "Active" | "Production" | "Archived";
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  copyValue: string;
  href?: string;
}
