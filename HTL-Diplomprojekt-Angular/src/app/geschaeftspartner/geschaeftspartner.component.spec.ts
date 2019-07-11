import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeschaeftspartnerComponent } from './geschaeftspartner.component';

describe('GeschaeftspartnerComponent', () => {
  let component: GeschaeftspartnerComponent;
  let fixture: ComponentFixture<GeschaeftspartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeschaeftspartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeschaeftspartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
