import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrzeugeDetailComponent } from './fahrzeuge-detail.component';

describe('FahrzeugeDetailComponent', () => {
  let component: FahrzeugeDetailComponent;
  let fixture: ComponentFixture<FahrzeugeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FahrzeugeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FahrzeugeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
