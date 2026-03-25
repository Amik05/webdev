// Domain logic
// Recipe class

import type {
  RecipeType,
  RecipeData,
  RecipeItem,
  NutritionPer100g,
} from "./models";

export class Recipe implements RecipeData {
  public id: string;
  public name: string;
  public type: RecipeType;
  public items: RecipeItem[] = [];

  constructor(id: string, name: string, type: RecipeType) {
    this.id = id;
    this.name = name;
    this.type = type;
  }

  // Add ingredient to recipe
  addIngredient(item: RecipeItem): void {
    // Check if ingredient already exists in recipe
    const exists = this.items.some(
      (i) => i.ingredient.id === item.ingredient.id,
    );
    if (!exists) {
      this.items.push(item);
    }
  }

  // Remove ingredient from recipe
  removeIngredient(ingredientId: string): void {
    this.items = this.items.filter((i) => i.ingredient.id !== ingredientId);
  }

  // Update the ingredient weight
  updateIngredient(ingredientId: string, newWeight: number): void {
    const item = this.items.find((i) => i.ingredient.id === ingredientId);
    if (item) {
      item.grams = newWeight;
    }
  }

  // Get total Macros
  getNutritionTotals(): NutritionPer100g {
    // loop through all items and calculate total macros
    return this.items.reduce(
      (totals, item) => {
        return {
          calories:
            totals.calories +
            (item.ingredient.nutritionPer100g.calories * item.grams) / 100,
          protein:
            totals.protein +
            (item.ingredient.nutritionPer100g.protein * item.grams) / 100,
          carbs:
            totals.carbs +
            (item.ingredient.nutritionPer100g.carbs * item.grams) / 100,
          fat:
            totals.fat +
            (item.ingredient.nutritionPer100g.fat * item.grams) / 100,
        };
      },
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );
  }
}

// Vegetrian Recipe class
export class VegetarianRecipe extends Recipe {
  public isVegetarian: boolean = true;
  // override addIngredient to prevent adding meat
  override addIngredient(item: RecipeItem): void {
    if (item.ingredient.category === "meat") {
      throw new Error("Cannot add meat to a vegetarian recipe.");
    }
    super.addIngredient(item);
  }
}
