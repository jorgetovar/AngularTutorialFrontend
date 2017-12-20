import { TestBed, inject } from '@angular/core/testing';

import { BdbRouteProviderService } from './bdb-route-provider.service';

describe('BdbRouteProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BdbRouteProviderService]
    });
  });

  it('should be created', inject([BdbRouteProviderService], (service: BdbRouteProviderService) => {
    expect(service).toBeTruthy();
  }));
});
