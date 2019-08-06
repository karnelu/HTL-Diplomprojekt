import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnerNewComponent } from './business-partner-new.component';

describe('BusinessPartnerNewComponent', () => {
  let component: BusinessPartnerNewComponent;
  let fixture: ComponentFixture<BusinessPartnerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPartnerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartnerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
