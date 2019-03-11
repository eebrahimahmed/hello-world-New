import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Alert, Button } from 'selenium-webdriver';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  isActive = "blue";

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  private _courses: any[];
  public get courses(): any[] {
    return this._courses;
  }
  public set courses(v: any[]) {
    this._courses = v;
  }


  //#region Events
  ngOnInit() {
  }
  onFavChanged() {
    console.log("Favorite changed");
  }
  onSave(btnSave) {
    // console.log ("Message", btnSave );
  }
  //email = "eebrahim.ahmed@gmail.com";
  onInputKeyUp($event) {
    console.log(this.courses);
    alert($event.target.value);
  }
  //#endregion
}
