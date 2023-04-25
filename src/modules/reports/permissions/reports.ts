/** RBAC helpers for Reports */

export type CareNestRole = 'viewer' | 'caregiver' | 'nurse' | 'admin' | 'owner';

export type ReportsAction =
  | 'read'
  | 'create'
  | 'update'
  | 'delete'
  | 'export'
  | 'assign'
  | 'escalate';

const ROLE_MATRIX: Record<CareNestRole, ReportsAction[]> = {
  viewer: ['read'],
  caregiver: ['read', 'create', 'update', 'assign'],
  nurse: ['read', 'create', 'update', 'assign', 'escalate', 'export'],
  admin: ['read', 'create', 'update', 'delete', 'export', 'assign', 'escalate'],
  owner: ['read', 'create', 'update', 'delete', 'export', 'assign', 'escalate'],
};

export function canReports(role: CareNestRole, action: ReportsAction): boolean {
  return ROLE_MATRIX[role]?.includes(action) ?? false;
}

export function explainReportsPermission1(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:1] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission1(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (1): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission2(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:2] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission2(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (2): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission3(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:3] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission3(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (3): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission4(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:4] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission4(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (4): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission5(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:5] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission5(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (5): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission6(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:6] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission6(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (6): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission7(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:7] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission7(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (7): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission8(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:8] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission8(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (8): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission9(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:9] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission9(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (9): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission10(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:10] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission10(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (10): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission11(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:11] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission11(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (11): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission12(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:12] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission12(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (12): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission13(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:13] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission13(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (13): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission14(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:14] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission14(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (14): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission15(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:15] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission15(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (15): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission16(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:16] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission16(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (16): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission17(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:17] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission17(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (17): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission18(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:18] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission18(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (18): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission19(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:19] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission19(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (19): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission20(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:20] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission20(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (20): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission21(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:21] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission21(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (21): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission22(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:22] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission22(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (22): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission23(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:23] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission23(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (23): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission24(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:24] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission24(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (24): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission25(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:25] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission25(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (25): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission26(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:26] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission26(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (26): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission27(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:27] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission27(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (27): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission28(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:28] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission28(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (28): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission29(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:29] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission29(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (29): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission30(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:30] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission30(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (30): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission31(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:31] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission31(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (31): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission32(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:32] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission32(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (32): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission33(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:33] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission33(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (33): ${role} cannot ${action}`);
  }
}

export function explainReportsPermission34(role: CareNestRole, action: ReportsAction): string {
  const allowed = canReports(role, action);
  return `[reports:34] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireReportsPermission34(role: CareNestRole, action: ReportsAction): void {
  if (!canReports(role, action)) {
    throw new Error(`CareNest Reports permission denied (34): ${role} cannot ${action}`);
  }
}
