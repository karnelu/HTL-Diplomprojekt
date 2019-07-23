import { TestBed } from '@angular/core/testing';

import { GeschaeftspartnerService } from './geschaeftspartner.service';

describe('GeschaeftspartnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeschaeftspartnerService = TestBed.get(GeschaeftspartnerService);
    expect(service).toBeTruthy();
  });
});
