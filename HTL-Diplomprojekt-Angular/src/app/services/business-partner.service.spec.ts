import { TestBed } from '@angular/core/testing';

import { BusinessPartnerService } from './business-partner.service';

describe('BusinessPartnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessPartnerService = TestBed.get(BusinessPartnerService);
    expect(service).toBeTruthy();
  });
});
