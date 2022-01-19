import { TestBed } from '@angular/core/testing';

import { PrakseService } from './prakse.service';

describe('PrakseService', () => {
  let service: PrakseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrakseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
