import { NextRequest, NextResponse } from 'next/server';
import { adminService } from '@/modules/admin/services/admin-service';
import type { AdminId } from '@/modules/admin/types/admin';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as AdminId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeAdminSignal${n}` as keyof typeof adminService;
  const fn = adminService[fnName] as unknown as ((id: AdminId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await adminService.analyzeAdminSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(adminService, id);
  return NextResponse.json(result);
}
