import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnerNewFabComponent } from './business-partner-new-fab.component';

describe('BusinessPartnerNewFabComponent', () => {
  let component: BusinessPartnerNewFabComponent;
  let fixture: ComponentFixture<BusinessPartnerNewFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPartnerNewFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartnerNewFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
