import type { DashboardConfig } from "./dashboard-schema";
export type { DashboardItem } from "./dashboard-schema";

export const dashboard: DashboardConfig = {
  eyebrow: "IDENTITY & ACCESS · OPERATIONS",
  heading: "Keyring keeps the operating record visible, governed, and ready for action.",
  summary: "KMS-backed secret metadata and safe policy, Just-in-time checkout approvals and expiry, Session evidence and immutable audit records are backed by PostgreSQL records and explicit workflow history.",
  primaryAction: "Create request", secondaryAction: "Open workspace",
  secondaryNotice: "Workspace opened with current identity, role, and record filters.",
  managePermission: "request.manage", metricLabel: "Keyring operating health",
  metrics: [{"label":"Managed accounts","value":"3,042","change":"98.7% covered","context":"current workspace","tone":"positive","progress":"82%"},{"label":"Open requests","value":"18","change":"4 need review","context":"operational window","tone":"positive","progress":"76%"},{"label":"Rotation health","value":"99.4%","change":"6 exceptions","context":"current workspace","tone":"warning","progress":"91%"},{"label":"Recorded sessions","value":"8,912","change":"this month","context":"operational window","tone":"positive","progress":"96%"}],
  trend: [46,52,49,64,71,78,86].map((value, index) => ({ label: String(index), value })),
  listTitle: "Active checkout requests", workspaceAction: "Open governed workspace",
  items: [{"id":1,"primary":"KEY-842 · Emergency database elevation","secondary":"KMS-backed secret metadata and safe policy","tertiary":"Updated today","status":"Pending","accent":"violet"},{"id":2,"primary":"KEY-831 · Quarterly domain-admin checkout","secondary":"Just-in-time checkout approvals and expiry","tertiary":"Evidence current","status":"Approved","accent":"lime"},{"id":3,"primary":"KEY-820 · Vendor production support window","secondary":"Session evidence and immutable audit records","tertiary":"Updated today","status":"Active","accent":"cyan"},{"id":4,"primary":"KEY-809 · Linux root rotation exception","secondary":"Rotation jobs and break-glass review","tertiary":"Evidence current","status":"Review","accent":"lime"}],
  sideTitle: "Control posture", sideSubtitle: "Derived from workflow and evidence",
  sideItems: [
    { title: "KMS-backed secret metadata and safe policy", detail: "Policy and evidence current", value: "Healthy" },
    { title: "Just-in-time checkout approvals and expiry", detail: "A small review queue needs attention", value: "Review", warning: true },
    { title: "Session evidence and immutable audit records", detail: "Within the configured operating target", value: "On track" },
  ],
  insightTitle: "Just-in-time checkout approvals and expiry has the clearest next action.",
  insightBody: "The recommendation is grounded in current request records, workflow events, and approved operating policy. It remains advisory until an authorised user acts.",
  insightNotice: "Recommendation opened with its supporting records and policy citations.",
  itemNoun: "Checkout request", modalEyebrow: "NEW CHECKOUT REQUEST", modalTitle: "Add checkout request",
  formFields: [
    { name: "title", label: "Checkout request title", placeholder: "Emergency database elevation" },
    { name: "owner", label: "Owner", placeholder: "Access approver" },
    { name: "reference", label: "Reference", placeholder: "KEY-843" },
  ],
  defaultSecondary: "KMS-backed secret metadata and safe policy", defaultTertiary: "Created now", newItemStatus: "Draft",
  policyPreview: "The request inherits workspace visibility, requires request.manage, and records its creator and changes in the audit trail.",
  submitLabel: "Create request",
};
