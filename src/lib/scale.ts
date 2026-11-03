import type { CartItem, Recipe } from '../types';

// "1.5", "2", "0.33": two decimals, trailing zeros trimmed
export const format = (n: number) => String(Math.round(n * 100) / 100);

export const scaled = (amount: number, base: number, servings: number) =>
    (amount * servings) / base;

export const limitServings = (n: number) => Math.min(12, Math.max(1, n));

export type ListLine = { key: string; name: string; unit: string; amount: number; uses: number };

export function mergeList(recipes: Recipe[], cart: CartItem[]): ListLine[] {
    const map = new Map<string, ListLine>();

    for (const item of cart) {
        const r = recipes.find((x) => x.id === item.recipeId);

        if (!r)
            continue;

        for (const ing of r.ingredients) {
            const key = `${ing.name.trim().toLowerCase()}|${ing.unit.trim().toLowerCase()}`;
            const amt = scaled(ing.amount, r.base, item.servings);
            const line = map.get(key);

            if (line) {
                line.amount += amt; line.uses += 1;
            } else {
                map.set(key, { key, name: ing.name.trim(), unit: ing.unit.trim(), amount: amt, uses: 1 });
            }
        }
    }
    return [...map.values()];
}