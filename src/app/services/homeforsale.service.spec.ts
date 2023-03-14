import { TestBed } from '@angular/core/testing';

import { HomeforsaleService } from './homeforsale.service';

describe('HomeforsaleService', () => {
  let service: HomeforsaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeforsaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
