import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BASE_URL } from './app.tokens';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DirectivesComponent } from './directives/directives.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { PasswordFlowLoginComponent } from './password-flow-login/password-flow-login.component';
import {ExtraOptions, RouterModule} from '@angular/router';
import { useHash } from './flags';

const ROUTING_OPTIONS: ExtraOptions = {
  // preloadingStrategy: CustomPreloadingStrategy,
  useHash: useHash,
  initialNavigation: !useHash
};

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectivesComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    CockpitComponent,
    ServerElementComponent,
    PasswordFlowLoginComponent
  ],
    imports: [
      RouterModule.forRoot(APP_ROUTES, ROUTING_OPTIONS),
      BrowserModule,
      FormsModule,
      RouterModule,
      HttpClientModule,
      OAuthModule.forRoot({
        resourceServer: {
          allowedUrls: ['http://www.angular.at/api'],
          sendAccessToken: true
        }
      })
    ],
  providers: [
    // (useHash) ? { provide: LocationStrategy, useClass: HashLocationStrategy } : [],
    // {provide: AuthConfig, useValue: authConfig },
    // { provide: OAuthStorage, useValue: localStorage },
    // { provide: ValidationHandler, useClass: JwksValidationHandler },
    { provide: BASE_URL, useValue: 'http://www.angular.at' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
