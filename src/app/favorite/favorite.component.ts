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

  @Input('is-favorite') public set  isSelected(value: boolean) {
    this._isSelected = value;    
  }

  
  private _border : string;
  public get border() : string {
    return this._border;
  }
  public set border(v : string) {
    this._border = v;
  }
  
  onClick() {
    this.isSelected = !this.isSelected; 
     this.change.emit();
  }

}
