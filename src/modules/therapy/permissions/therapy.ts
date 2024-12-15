/** RBAC helpers for Therapy */

export type CareNestRole = 'viewer' | 'caregiver' | 'nurse' | 'admin' | 'owner';

export type TherapyAction =
  | 'read'
  | 'create'
  | 'update'
  | 'delete'
  | 'export'
  | 'assign'
  | 'escalate';

const ROLE_MATRIX: Record<CareNestRole, TherapyAction[]> = {
  viewer: ['read'],
  caregiver: ['read', 'create', 'update', 'assign'],
  nurse: ['read', 'create', 'update', 'assign', 'escalate', 'export'],
  admin: ['read', 'create', 'update', 'delete', 'export', 'assign', 'escalate'],
  owner: ['read', 'create', 'update', 'delete', 'export', 'assign', 'escalate'],
};

export function canTherapy(role: CareNestRole, action: TherapyAction): boolean {
  return ROLE_MATRIX[role]?.includes(action) ?? false;
}

export function explainTherapyPermission1(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:1] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission1(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (1): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission2(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:2] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission2(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (2): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission3(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:3] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission3(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (3): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission4(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:4] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission4(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (4): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission5(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:5] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission5(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (5): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission6(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:6] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission6(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (6): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission7(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:7] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission7(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (7): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission8(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:8] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission8(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (8): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission9(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:9] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission9(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (9): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission10(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:10] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission10(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (10): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission11(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:11] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission11(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (11): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission12(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:12] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission12(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (12): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission13(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:13] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission13(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (13): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission14(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:14] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission14(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (14): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission15(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:15] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission15(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (15): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission16(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:16] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission16(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (16): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission17(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:17] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission17(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (17): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission18(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:18] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission18(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (18): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission19(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:19] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission19(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (19): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission20(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:20] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission20(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (20): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission21(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:21] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission21(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (21): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission22(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:22] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission22(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (22): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission23(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:23] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission23(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (23): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission24(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:24] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission24(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (24): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission25(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:25] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission25(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (25): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission26(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:26] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission26(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (26): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission27(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:27] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission27(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (27): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission28(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:28] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission28(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (28): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission29(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:29] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission29(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (29): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission30(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:30] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission30(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (30): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission31(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:31] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission31(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (31): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission32(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:32] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission32(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (32): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission33(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:33] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission33(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (33): ${role} cannot ${action}`);
  }
}

export function explainTherapyPermission34(role: CareNestRole, action: TherapyAction): string {
  const allowed = canTherapy(role, action);
  return `[therapy:34] role=${role} action=${action} => ${allowed ? 'allow' : 'deny'}`;
}

export function requireTherapyPermission34(role: CareNestRole, action: TherapyAction): void {
  if (!canTherapy(role, action)) {
    throw new Error(`CareNest Therapy permission denied (34): ${role} cannot ${action}`);
  }
}
