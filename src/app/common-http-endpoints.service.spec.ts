import { TestBed } from '@angular/core/testing';

import { CommonHttpEndpointsService } from './common-http-endpoints.service';

describe('CommonHttpEndpointsService', () => {
  let service: CommonHttpEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonHttpEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
