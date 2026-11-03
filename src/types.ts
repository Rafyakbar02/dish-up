export type Kind = 'food' | 'beverage' | 'snack' | 'dessert';

export type Ingredient = {
    name: string;
    unit: string;
    amount: number;
};

export type Recipe = {
    id: string;
    name: string;
    kind: Kind;
    tags: string[];        // first tag = menu category; empty = "Mine"
    time: number;          // minutes
    kcal: number;          // per serving, 0 = not set
    base: number;          // servings the amounts are written for
    description: string;
    ingredients: Ingredient[];
    steps: string[];
    addedByName: string;
};