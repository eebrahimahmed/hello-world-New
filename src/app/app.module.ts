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


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummeryPipe,
    FavoriteComponent,
    bootstrapPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
