import type { MealPlanningId, MealPlanningRecord } from '../types/meal-planning';
import { seedMealPlanningRecords } from '../seeds/meal-planning';

class MealPlanningMemoryStore {
  private data = new Map<string, MealPlanningRecord>();
  private seeded = false;

  private ensureSeed(): void {
    if (this.seeded) return;
    for (const row of seedMealPlanningRecords()) this.data.set(row.id, row);
    this.seeded = true;
  }

  getAll(): MealPlanningRecord[] {
    this.ensureSeed();
    return Array.from(this.data.values());
  }

  getById(id: MealPlanningId | string): MealPlanningRecord | undefined {
    this.ensureSeed();
    return this.data.get(id);
  }

  upsert(record: MealPlanningRecord): void {
    this.ensureSeed();
    this.data.set(record.id, record);
  }

  remove(id: MealPlanningId | string): boolean {
    this.ensureSeed();
    return this.data.delete(id);
  }

  clear(): void {
    this.data.clear();
    this.seeded = false;
  }
}

export const mealPlanningStore = new MealPlanningMemoryStore();
