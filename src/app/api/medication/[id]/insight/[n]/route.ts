import { NextRequest, NextResponse } from 'next/server';
import { medicationService } from '@/modules/medication/services/medication-service';
import type { MedicationId } from '@/modules/medication/types/medication';

type Ctx = { params: { id: string; n: string } };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const id = ctx.params.id as MedicationId;
  const n = Math.min(29, Math.max(1, Number(ctx.params.n) || 1));
  const fnName = `analyzeMedicationSignal${n}` as keyof typeof medicationService;
  const fn = medicationService[fnName] as unknown as ((id: MedicationId) => Promise<{ score: number; label: string; details: string[] }>) | undefined;
  if (typeof fn !== 'function') {
    const fallback = await medicationService.analyzeMedicationSignal1(id);
    return NextResponse.json(fallback);
  }
  const result = await fn.call(medicationService, id);
  return NextResponse.json(result);
}
