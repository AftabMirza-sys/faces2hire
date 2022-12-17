import { TestBed } from '@angular/core/testing';

import { MajordataService } from './majordata.service';

describe('MajordataService', () => {
  let service: MajordataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MajordataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
