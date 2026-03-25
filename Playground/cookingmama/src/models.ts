export interface Ingredient {
  id: string;
  name: string;
  nutritionPer100g: NutritionPer100g;
  category: Category;
}

export interface NutritionPer100g {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface RecipeItem {
  ingredient: Ingredient;
  grams: number;
}

export interface RecipeData {
  id: string;
  name: string;
  type: RecipeType;
  items: RecipeItem[];
}

export type Category =
  | "vegetable"
  | "fruit"
  | "meat"
  | "dairy"
  | "grain"
  | "spice"
  | "other"
  | "protein";

export type RecipeType = "regular" | "vegetarian";
