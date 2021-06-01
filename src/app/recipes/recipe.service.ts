import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('The Plant Philosophy','A beautiful spread of fruits and vegetables.',
      'https://i2.wp.com/reluctantentertainer.com/wp-content/uploads/2020/06/Best-Epic-Vegan-Charcuterie-Board.jpg'),
    new Recipe('Epic Vegan Charcuterie Board','The balance of protein and carbs make it super satisfying.',
      'https://i2.wp.com/reluctantentertainer.com/wp-content/uploads/2020/06/Best-Epic-Vegan-Charcuterie-Board.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
