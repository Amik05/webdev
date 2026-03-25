import { pantry } from "./pantry";

export class UI {
  init(): void {
    this.renderPantry();
  }

  // Render the pantry
  private renderPantry(): void {
    const pantryList = document.getElementById(
      "pantry-ingredients",
    ) as HTMLTableSectionElement;

    pantry.forEach((ingredient) => {
      const row = document.createElement("tr");
      row.innerHTML = `
         <td>${ingredient.name}</td>
        <td><span class="badge bg-secondary">${ingredient.category}</span></td>
        <td class="text-end">${ingredient.nutritionPer100g.calories}</td>
        <td class="text-end">${ingredient.nutritionPer100g.protein}</td>
        <td class="text-end">${ingredient.nutritionPer100g.carbs}</td>
        <td class="text-end">${ingredient.nutritionPer100g.fat}</td>
        <td class="text-end"><button class="btn btn-primary btn-sm">Add</button></td>
      `;

      // Add event listener to each button
      const btn = row.querySelector("button") as HTMLButtonElement;
      // TODO: Add to recipeItems
      btn.addEventListener("click", () => 0);
      pantryList.appendChild(row);
    });
  }

  addIngredient(ingredientId: string): void {}
}
