import { TestBed, inject } from '@angular/core/testing';

import { VehicleResolverService } from './vehicle-resolver.service';

describe('VehicleResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleResolverService]
    });
  });

  it('should be created', inject([VehicleResolverService], (service: VehicleResolverService) => {
    expect(service).toBeTruthy();
  }));
});
