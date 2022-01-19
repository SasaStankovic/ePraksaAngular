import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljanPregledPrakseComponent } from './detaljan-pregled-prakse.component';

describe('DetaljanPregledPrakseComponent', () => {
  let component: DetaljanPregledPrakseComponent;
  let fixture: ComponentFixture<DetaljanPregledPrakseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaljanPregledPrakseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljanPregledPrakseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
