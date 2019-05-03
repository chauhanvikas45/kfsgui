import { TestBed } from '@angular/core/testing';

import { KfsServiceService } from './kfs-service.service';

describe('KfsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KfsServiceService = TestBed.get(KfsServiceService);
    expect(service).toBeTruthy();
  });
});
