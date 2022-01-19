import { TestBed } from '@angular/core/testing';

import { KomisijaGuard } from './komisija.guard';

describe('KomisijaGuard', () => {
  let guard: KomisijaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KomisijaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
