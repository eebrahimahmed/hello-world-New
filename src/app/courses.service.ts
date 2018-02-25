import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  public getCourses()
  {
    return ["Course1","Course2","Course3","Course4"];
  }

}
