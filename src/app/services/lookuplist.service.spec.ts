import { TestBed } from '@angular/core/testing';

import { LookuplistService } from './lookuplist.service';

describe('LookuplistService', () => {
  let service: LookuplistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookuplistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
