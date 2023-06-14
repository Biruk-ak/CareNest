import { NextRequest, NextResponse } from 'next/server';
import { dashboardService } from '@/modules/dashboard/services/dashboard-service';
import type { DashboardId } from '@/modules/dashboard/types/dashboard';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as DashboardId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeDashboardSignal${n}` as keyof typeof dashboardService;
  const fn = dashboardService[fnName] as unknown as ((id: DashboardId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await dashboardService.analyzeDashboardSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(dashboardService, id);
  return NextResponse.json(result);
}
