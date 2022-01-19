import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledStudentaComponent } from './pregled-studenta.component';

describe('PregledStudentaComponent', () => {
  let component: PregledStudentaComponent;
  let fixture: ComponentFixture<PregledStudentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledStudentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledStudentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
