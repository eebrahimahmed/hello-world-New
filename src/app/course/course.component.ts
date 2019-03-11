import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  constructor() 
  {
    this.title="C# Development Course C# Development Course";
    this.email="eebrahim.ahmed@gmail.com"
   }


private _email : string;
public get email() : string {
  return this._email;
}
public set email(v : string) {
  this._email = v;
}

 //#region Events

 ngOnInit() {
}
//#endregion
  
//#region Propreties
private _title : string;
  public get title() : string {
    return this._title;
  }
  public set title(v : string) {
    this._title = v;
  }


  //#endregion

}
