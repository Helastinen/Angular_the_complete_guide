import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Pasta", 
      "This is the description: Delicious pasta", 
      "https://lobsterfrommaine.com/wp-content/uploads/fly-images/1577/20210517-Pasta-alla-Gricia-with-Lobster3010-2048x576-c.jpg",
      [
        new Ingredient('Fettucini', 1),
        new Ingredient('bacon', 10)
      ]
    ),
    new Recipe(
      "Schnitzel", 
      "Best export from Germany", 
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]
    )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
