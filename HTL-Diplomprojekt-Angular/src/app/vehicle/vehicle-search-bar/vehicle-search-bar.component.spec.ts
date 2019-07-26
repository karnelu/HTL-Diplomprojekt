import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSearchBarComponent } from './vehicle-search-bar.component';

describe('VehicleSearchBarComponent', () => {
  let component: VehicleSearchBarComponent;
  let fixture: ComponentFixture<VehicleSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
