import { TestBed, inject } from '@angular/core/testing';

import { ServiceDemoService } from './service-demo.service';

describe('ServiceDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDemoService]
    });
  });

  it('should be created', inject([ServiceDemoService], (service: ServiceDemoService) => {
    expect(service).toBeTruthy();
  }));
});
