import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
  }


  private _isSelected: boolean;
  public get isSelected(): boolean {
    return this._isSelected;
  }
  @Output() change = new EventEmitter();

  @Input('is-favorite') public set  isSelected(v: boolean) {
    this._isSelected = v;

    if (v === false)
      this.favIcone = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mw-watch-icon.svg/2000px-Mw-watch-icon.svg.png";
    else
      this.favIcone = "https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/apps/keditbookmarks.png";

    
  }


  private _favIcone: string;
  public get favIcone(): string {
    return this._favIcone;
  }

  public set favIcone(v: string) {
    this._favIcone = v;
  }

  onClick() {

    this.isSelected = !this.isSelected; 
     this.change.emit();
  }

}
