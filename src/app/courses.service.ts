import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  public getCourses()
  {
    return [{email:'eebrahim.ahmed@gmail.com', title:'Course1'} ,{email:'eebrahim.ahmed@gmail.com',title:'Course2'},
    {email:'eebrahim.ahmed@gmail.com', title:'Course3'} ,{email:'eebrahim.ahmed@gmail.com',title:'Course4'}];
  }

}
