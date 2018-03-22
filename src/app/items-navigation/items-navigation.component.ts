import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'items-navigation',
  templateUrl: './items-navigation.component.html',
  styleUrls: ['./items-navigation.component.css']
})
export class ItemsNavigationComponent implements OnInit {

  constructor() { }
public viewMode="map";
  ngOnInit() {
  }

}
