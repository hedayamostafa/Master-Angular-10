import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {AuthComponent} from './auth/auth.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  { path: '' , redirectTo: '/recipes' , pathMatch: 'full'},
  { path: 'recipes' , component: RecipesComponent },
  { path: 'shopping-list' , component: ShoppingListComponent },
  { path: 'recipe-detail' , component: RecipeDetailComponent }

  /*,
  { path: 'auth', component: AuthComponent }*/
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {


}
