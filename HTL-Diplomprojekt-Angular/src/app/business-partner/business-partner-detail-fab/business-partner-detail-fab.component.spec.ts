import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnerDetailFabComponent } from './business-partner-detail-fab.component';

describe('BusinessPartnerDetailFabComponent', () => {
  let component: BusinessPartnerDetailFabComponent;
  let fixture: ComponentFixture<BusinessPartnerDetailFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPartnerDetailFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartnerDetailFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
