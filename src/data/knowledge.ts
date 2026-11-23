export const knowledgeArticles = [
  {
    "id": "checkout-policy",
    "title": "Checkout and dual-control policy",
    "summary": "High-risk accounts require two independent approvers and a bounded access window.",
    "content": "Approvals are append-only, grants expire automatically, and every checkout produces an audit event.",
    "tags": [
      "checkout",
      "approval",
      "dual",
      "control"
    ]
  },
  {
    "id": "rotation",
    "title": "Credential rotation operations",
    "summary": "Rotation jobs use idempotency keys and never expose secret material to the web application.",
    "content": "The control plane records versions and job state while ciphertext and wrapping keys remain in the configured KMS boundary.",
    "tags": [
      "rotation",
      "secret",
      "kms"
    ]
  },
  {
    "id": "session-evidence",
    "title": "Session evidence retention",
    "summary": "Session metadata and recording references are retained under the organisation policy.",
    "content": "Legal hold, integrity checks, and reviewer access are separate permissions with explicit audit events.",
    "tags": [
      "session",
      "recording",
      "evidence",
      "retention"
    ]
  }
];
