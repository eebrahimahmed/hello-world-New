import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { SummeryPipe } from './summery.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { bootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { ItemsNavigationComponent } from './items-navigation/items-navigation.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-list/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-list/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummeryPipe,
    FavoriteComponent,
    bootstrapPanelComponent,
    ItemsNavigationComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
