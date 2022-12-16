import { TestBed } from '@angular/core/testing';

import { LookupbytypeService } from './lookupbytype.service';

describe('LookupbytypeService', () => {
  let service: LookupbytypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookupbytypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
