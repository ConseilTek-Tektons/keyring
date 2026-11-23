# Keyring operations knowledge

## Checkout and dual-control policy

High-risk accounts require two independent approvers and a bounded access window.

Approvals are append-only, grants expire automatically, and every checkout produces an audit event.

## Credential rotation operations

Rotation jobs use idempotency keys and never expose secret material to the web application.

The control plane records versions and job state while ciphertext and wrapping keys remain in the configured KMS boundary.

## Session evidence retention

Session metadata and recording references are retained under the organisation policy.

Legal hold, integrity checks, and reviewer access are separate permissions with explicit audit events.

## Product boundary

The reference control plane does not ship a production SSH, RDP, or database protocol proxy. Use audited broker adapters and a cloud KMS or HSM before protecting real credentials.
