import { TestBed } from '@angular/core/testing';

import { SurpriseService } from './surprise.service';

describe('SurpriseService', () => {
  let service: SurpriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurpriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
