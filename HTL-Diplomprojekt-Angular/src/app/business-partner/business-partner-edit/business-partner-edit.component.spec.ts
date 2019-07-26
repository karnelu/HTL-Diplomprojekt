import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnerEditComponent } from './business-partner-edit.component';

describe('BusinessPartnerEditComponent', () => {
  let component: BusinessPartnerEditComponent;
  let fixture: ComponentFixture<BusinessPartnerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPartnerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartnerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
