import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnerSearchBarComponent } from './business-partner-search-bar.component';

describe('BusinessPartnerSearchBarComponent', () => {
  let component: BusinessPartnerSearchBarComponent;
  let fixture: ComponentFixture<BusinessPartnerSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPartnerSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartnerSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
