import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnerNewAppointmentComponent } from './business-partner-new-appointment.component';

describe('BusinessPartnerNewAppointmentComponent', () => {
  let component: BusinessPartnerNewAppointmentComponent;
  let fixture: ComponentFixture<BusinessPartnerNewAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPartnerNewAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartnerNewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
