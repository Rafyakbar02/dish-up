import type { Recipe } from '../types';

export const seedRecipes: Recipe[] = [
  {
    id: 'r1',
    name: 'Spaghetti Bolognese',
    kind: 'food',
    tags: ['Italian'],
    time: 30,
    kcal: 450,
    base: 4,
    description: 'A classic Italian pasta dish with a rich meat sauce.',
    ingredients: [
      { name: 'Pasta', unit: 'g', amount: 400 },
      { name: 'Ground Beef', unit: 'g', amount: 300 },
      { name: 'Tomato Sauce', unit: 'ml', amount: 400 },
      { name: 'Onion', unit: 'pieces', amount: 1 },
      { name: 'Garlic', unit: 'cloves', amount: 2 }
    ],
    steps: [
      'Cook the pasta according to package instructions.',
      'In a large pan, brown the ground beef.',
      'Add the onion and garlic, cooking until softened.',
      'Stir in the tomato sauce and simmer for 15 minutes.',
      'Serve the sauce over the cooked pasta.'
    ],
    addedByName: 'John Doe'
  },
  {
    id: 'r2',
    name: 'Chocolate Chip Cookies',
    kind: 'dessert',
    tags: ['Bakery'],
    time: 20,
    kcal: 250,
    base: 12,
    description: 'Classic homemade chocolate chip cookies.',
    ingredients: [
      { name: 'All-Purpose Flour', unit: 'g', amount: 150 },
      { name: 'Butter', unit: 'g', amount: 100 },
      { name: 'Brown Sugar', unit: 'g', amount: 100 },
      { name: 'Egg', unit: 'pieces', amount: 1 },
      { name: 'Vanilla Extract', unit: 'ml', amount: 5 }
    ],
    steps: [
      'Preheat the oven to 180°C.',
      'Cream the butter and sugar until light and fluffy.',
      'Add the egg and vanilla extract, mixing well.',
      'Gradually add the flour, mixing until just combined.',
      'Fold in the chocolate chips.',
      'Drop spoonfuls onto a baking sheet and bake for 10-12 minutes.'
    ],
    addedByName: 'Jane Smith'
  },
  {
    id: 'r3',
    name: 'Caesar Salad',
    kind: 'food',
    tags: ['Salad'],
    time: 15,
    kcal: 300,
    base: 4,
    description: 'A fresh and crispy salad with a tangy Caesar dressing.',
    ingredients: [
      { name: 'Romaine Lettuce', unit: 'g', amount: 200 },
      { name: 'Croutons', unit: 'g', amount: 50 },
      { name: 'Parmesan Cheese', unit: 'g', amount: 30 },
      { name: 'Caesar Dressing', unit: 'ml', amount: 100 }
    ],
    steps: [
      'Wash and chop the romaine lettuce.',
      'Toss the lettuce with the Caesar dressing.',
      'Top with croutons and grated Parmesan cheese.'
    ],
    addedByName: 'Alice Johnson'
  },
  {
    id: 'r4',
    name: 'Lemonade',
    kind: 'beverage',
    tags: ['Drink'],
    time: 10,
    kcal: 120,
    base: 4,
    description: 'A refreshing homemade lemonade.',
    ingredients: [
      { name: 'Lemons', unit: 'pieces', amount: 4 },
      { name: 'Sugar', unit: 'g', amount: 100 },
      { name: 'Water', unit: 'ml', amount: 500 }
    ],
    steps: [
      'Juice the lemons and strain the juice into a pitcher.',
      'Add sugar and water, stirring until the sugar is dissolved.',
      'Serve over ice and garnish with lemon slices.'
    ],
    addedByName: 'Bob Brown'
  }
];