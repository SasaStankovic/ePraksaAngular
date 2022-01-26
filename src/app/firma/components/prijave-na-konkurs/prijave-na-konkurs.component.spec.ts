import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijaveNaKonkursComponent } from './prijave-na-konkurs.component';

describe('PrijaveNaKonkursComponent', () => {
  let component: PrijaveNaKonkursComponent;
  let fixture: ComponentFixture<PrijaveNaKonkursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijaveNaKonkursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijaveNaKonkursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
