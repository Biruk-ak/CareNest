import { NextRequest, NextResponse } from 'next/server';
import { complianceService } from '@/modules/compliance/services/compliance-service';
import type { ComplianceId } from '@/modules/compliance/types/compliance';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as ComplianceId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeComplianceSignal${n}` as keyof typeof complianceService;
  const fn = complianceService[fnName] as unknown as ((id: ComplianceId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await complianceService.analyzeComplianceSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(complianceService, id);
  return NextResponse.json(result);
}
