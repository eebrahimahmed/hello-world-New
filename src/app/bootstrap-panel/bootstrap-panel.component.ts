import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './bootstrap-panel.component.html',
  styleUrls: ['./bootstrap-panel.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class bootstrapPanelComponent {

  constructor() { }

  public isShow = true;

  public hideShowContent () {
    this.isShow = !this.isShow;
  }

}
