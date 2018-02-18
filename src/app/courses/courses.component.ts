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
 
  constructor(service:CoursesService) { 
    
    this.courses= service.getCourses();
  }
//#region Events
  ngOnInit() {
  }
  onSave(btnSave)
  {
   // console.log ("Message", btnSave );
  }
  email="eebrahim.ahmed@gmail.com";
  onInputKeyUp()
  {
    
    alert(this.email);
  }
  //#endregion


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
