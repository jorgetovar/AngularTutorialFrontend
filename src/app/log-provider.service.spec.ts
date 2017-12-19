import { TestBed, inject } from '@angular/core/testing';

import { LogProviderService } from './log-provider.service';

describe('LogProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogProviderService]
    });
  });

  it('should be created', inject([LogProviderService], (service: LogProviderService) => {
    expect(service).toBeTruthy();
  }));
});
