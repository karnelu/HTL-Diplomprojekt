import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLastScannedComponent } from './vehicle-last-scanned.component';

describe('VehicleLastScannedComponent', () => {
  let component: VehicleLastScannedComponent;
  let fixture: ComponentFixture<VehicleLastScannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleLastScannedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleLastScannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
