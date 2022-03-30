import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipViewComponent } from './internship-view.component';

describe('InternshipViewComponent', () => {
  let component: InternshipViewComponent;
  let fixture: ComponentFixture<InternshipViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
