import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('The Plant Philosophy','A beautiful spread of fruits and vegetables.',
      'https://i2.wp.com/reluctantentertainer.com/wp-content/uploads/2020/06/Best-Epic-Vegan-Charcuterie-Board.jpg'),
    new Recipe('Epic Vegan Charcuterie Board','The balance of protein and carbs make it super satisfying.',
      'https://i2.wp.com/reluctantentertainer.com/wp-content/uploads/2020/06/Best-Epic-Vegan-Charcuterie-Board.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
