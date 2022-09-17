import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe(
      "test recipe", 
      "this is a test description for the recipe", 
      "https://lobsterfrommaine.com/wp-content/uploads/fly-images/1577/20210517-Pasta-alla-Gricia-with-Lobster3010-2048x576-c.jpg"
    ),
    new Recipe(
      "test recipe 2", 
      "this is yet another test description", 
      "https://media.istockphoto.com/id/1155681995/fi/valokuva/spagettipastaa-ja-lihapullia.webp?s=612x612&w=is&k=20&c=d0x6erDVJA-oguW6f_WAyuW1ov5BPSk6G9oFNqAuOOM="
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log('recipelist component --> onRecipeSelected fired');
    
  }

}
