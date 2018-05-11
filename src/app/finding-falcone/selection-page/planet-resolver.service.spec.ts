import { TestBed, inject } from '@angular/core/testing';

import { PlanetResolverService } from './planet-resolver.service';

describe('PlanetResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetResolverService]
    });
  });

  it('should be created', inject([PlanetResolverService], (service: PlanetResolverService) => {
    expect(service).toBeTruthy();
  }));
});
