import { TestBed } from '@angular/core/testing';

import { IndustrygetService } from './industryget.service';

describe('IndustrygetService', () => {
  let service: IndustrygetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustrygetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
