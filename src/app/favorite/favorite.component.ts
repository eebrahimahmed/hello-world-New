import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  private _favIcone: string;
  public get favIcone(): string {
    return this._favIcone;
  }
  public set favIcone(v: string) {
    this._favIcone = v;
  }

  onClick() {

    if (this.favIcone === "https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/apps/keditbookmarks.png")
      this.favIcone = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mw-watch-icon.svg/2000px-Mw-watch-icon.svg.png";
    else
      this.favIcone = "https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/apps/keditbookmarks.png";
  }

}
