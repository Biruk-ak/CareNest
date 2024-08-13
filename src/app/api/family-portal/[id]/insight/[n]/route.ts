import { NextRequest, NextResponse } from 'next/server';
import { familyPortalService } from '@/modules/family-portal/services/family-portal-service';
import type { FamilyPortalId } from '@/modules/family-portal/types/family-portal';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as FamilyPortalId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeFamilyPortalSignal${n}` as keyof typeof familyPortalService;
  const fn = familyPortalService[fnName] as unknown as ((id: FamilyPortalId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await familyPortalService.analyzeFamilyPortalSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(familyPortalService, id);
  return NextResponse.json(result);
}
