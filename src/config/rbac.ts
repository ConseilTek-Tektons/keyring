export const rbacConfig = {
  roles: {
    owner: { label: "Owner", description: "Full control of security, policy, and workspace data." },
    admin: { label: "Admin", description: "Manages configuration, integrations, identities, and access." },
    security_admin: { label: "Security administrator", description: "Owns kms-backed secret metadata and safe policy and just-in-time checkout approvals and expiry." },
    approver: { label: "Access approver", description: "Operates authorised request workflows and records." },
    viewer: { label: "Viewer", description: "Reads permitted operational data." },
    auditor: { label: "Auditor", description: "Reads immutable history, controls, and evidence." },
  },
  permissions: {
    "dashboard.view": "View operational dashboard",
    "request.manage": "Create and update request records",
    "workflow.approve": "Approve controlled workflow transitions",
    "reports.view": "View operational reports",
    "sensitive.export": "Export sensitive workspace data",
    "assistant.ask": "Ask the Keyring knowledge guide",
    "audit.view": "Read audit history",
    "access.manage": "Configure roles and identity mappings",
    "settings.manage": "Manage workspace settings and integrations",
  },
  rolePermissions: {
    owner: ["*"], admin: ["*"],
    security_admin: ["dashboard.view", "request.manage", "workflow.approve", "reports.view", "assistant.ask", "audit.view"],
    approver: ["dashboard.view", "request.manage", "reports.view", "assistant.ask"],
    viewer: ["dashboard.view", "reports.view"], auditor: ["dashboard.view", "reports.view", "audit.view"],
  } as Record<string, readonly string[]>,
  identityGroupMappings: {
    "keyring-owners": "owner", "keyring-admins": "admin",
    "keyring-managers": "security_admin", "keyring-operators": "approver",
    "keyring-viewers": "viewer", "internal-audit": "auditor",
  } as Record<string, string>,
  defaultRole: "viewer",
};
