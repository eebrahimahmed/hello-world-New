import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
<<<<<<< HEAD
=======
import { Alert, Button } from 'selenium-webdriver';
import { EmailService } from '../email.service';
>>>>>>> 0e5e0da901122cbbfe3518f7e004555e575978a5

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
<<<<<<< HEAD

    isActive="blue";
    constructor(service : CoursesService) { 
    this.courses=service.getCourses();
  }

private _courses : string[];
public get courses() : string[] {
  return this._courses;
}
public set courses(v : string[]) {
  this._courses = v;
}

=======
 
  constructor(service:CoursesService) { 
    
    this.courses= service.getCourses();
  }
//#region Events
>>>>>>> 0e5e0da901122cbbfe3518f7e004555e575978a5
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
