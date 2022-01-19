import { TestBed } from '@angular/core/testing';

import { KomisijaService } from './komisija.service';

describe('KomisijaService', () => {
  let service: KomisijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KomisijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
