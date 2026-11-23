import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "keyring",
  name: "Keyring",
  category: "Identity & Access",
  tagline: "Privileged access, vaulted and recorded, in your account.",
  description: "A self-hosted privileged access control plane for vaulted credentials, approvals, session evidence, and rotation operations.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/keyring",
  nav: [
  {
    "label": "Safes",
    "badge": "4"
  },
  {
    "label": "Accounts"
  },
  {
    "label": "Requests"
  },
  {
    "label": "Sessions"
  },
  {
    "label": "Rotation"
  }
],
  demoUsers: [
    { id: "demo-admin", name: "Morgan Lee", email: "morgan@northstar.example", role: "admin", label: "Workspace administrator" },
    { id: "demo-manager", name: "Avery Brooks", email: "avery@northstar.example", role: "security_admin", label: "Security administrator" },
    { id: "demo-operator", name: "Jordan Patel", email: "jordan@northstar.example", role: "approver", label: "Access approver" },
  ],
  ai: {
    name: "Keyring knowledge guide",
    description: "Ask grounded questions about kms-backed secret metadata and safe policy, just-in-time checkout approvals and expiry, session evidence and immutable audit records, or operating policy.",
    systemPrompt: "You are Keyring's grounded knowledge guide. Answer only from authorised workspace context and approved knowledge. Cite the supporting record or policy. Never mutate data, approve a workflow, or make a regulated decision.",
    suggestedQuestions: ["Explain checkout and dual-control policy.","Explain credential rotation operations.","Explain session evidence retention."],
  },
};
