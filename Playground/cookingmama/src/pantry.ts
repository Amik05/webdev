import type { Ingredient } from "./models";

export const pantry: Ingredient[] = [
  {
    id: "ing_1",
    name: "Chicken Breast",
    category: "meat",
    nutritionPer100g: { calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  },
  {
    id: "ing_2",
    name: "Tofu",
    category: "protein",
    nutritionPer100g: { calories: 76, protein: 8, carbs: 1.9, fat: 4.8 },
  },
  {
    id: "ing_3",
    name: "Cooked Rice",
    category: "grain",
    nutritionPer100g: { calories: 130, protein: 2.4, carbs: 28.2, fat: 0.3 },
  },
  {
    id: "ing_4",
    name: "Milk (2%)",
    category: "dairy",
    nutritionPer100g: { calories: 50, protein: 3.4, carbs: 5, fat: 2 },
  },
  {
    id: "ing_5",
    name: "Olive Oil",
    category: "other",
    nutritionPer100g: { calories: 884, protein: 0, carbs: 0, fat: 100 },
  },
  {
    id: "ing_6",
    name: "Broccoli",
    category: "vegetable",
    nutritionPer100g: { calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4 },
  },
  {
    id: "ing_7",
    name: "Banana",
    category: "fruit",
    nutritionPer100g: { calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3 },
  },
  {
    id: "ing_8",
    name: "Almonds",
    category: "protein",
    nutritionPer100g: { calories: 579, protein: 21.2, carbs: 21.6, fat: 49.9 },
  },
  {
    id: "ing_9",
    name: "Eggs",
    category: "protein",
    nutritionPer100g: { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
  },
  {
    id: "ing_10",
    name: "Sugar",
    category: "grain",
    nutritionPer100g: { calories: 387, protein: 0, carbs: 100, fat: 0 },
  },
];
