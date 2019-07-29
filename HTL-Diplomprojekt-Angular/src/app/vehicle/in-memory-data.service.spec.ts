import { TestBed } from '@angular/core/testing';

import { InMemoryDataVehicleService } from './in-memory-data-vehicle.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataVehicleService = TestBed.get(InMemoryDataVehicleService);
    expect(service).toBeTruthy();
  });
});
