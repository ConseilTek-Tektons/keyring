import { describe, expect, it } from "vitest";
import { hasPermission, resolveRolesFromClaims } from "./rbac";

describe("Keyring RBAC", () => {
  it("grants wildcard permissions to administrators", () => expect(hasPermission(["admin"], "settings.manage")).toBe(true));
  it("keeps access policy away from operators", () => expect(hasPermission(["approver"], "access.manage")).toBe(false));
  it("maps identity groups", () => expect(resolveRolesFromClaims({ groups: ["keyring-managers"] })).toEqual(["security_admin"]));
});
