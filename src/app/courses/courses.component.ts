import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 counter=0;
 getCounter(){return this.counter++;}
  constructor(service:CoursesService) { 

    this.courses= service.getCourses();
  }

  ngOnInit() {
  }


  //#region Proprieties
private _courses : string[];
  public get courses() : string[] {
    return this._courses;
  }
  public set courses(v : string[]) {
    this._courses = v;
  }
//  #endregion
}
