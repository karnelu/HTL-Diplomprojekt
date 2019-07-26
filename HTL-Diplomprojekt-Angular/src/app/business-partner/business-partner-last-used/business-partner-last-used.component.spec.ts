import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnerLastUsedComponent } from './business-partner-last-used.component';

describe('BusinessPartnerLastUsedComponent', () => {
  let component: BusinessPartnerLastUsedComponent;
  let fixture: ComponentFixture<BusinessPartnerLastUsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessPartnerLastUsedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartnerLastUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
