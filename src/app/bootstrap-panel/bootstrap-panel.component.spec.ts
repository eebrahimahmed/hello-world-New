import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { bootstrapPanelComponent } from './bootstrap-panel.component';

describe('bootstrapPanelComponent', () => {
  let component: bootstrapPanelComponent;
  let fixture: ComponentFixture<bootstrapPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ bootstrapPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(bootstrapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
