import { TestBed } from '@angular/core/testing';

import { AppToolbarService } from './app-toolbar.service';

describe('AppToolbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppToolbarService = TestBed.get(AppToolbarService);
    expect(service).toBeTruthy();
  });
});
