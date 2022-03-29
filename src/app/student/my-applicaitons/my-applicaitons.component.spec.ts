import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicaitonsComponent } from './my-applicaitons.component';

describe('MyApplicaitonsComponent', () => {
  let component: MyApplicaitonsComponent;
  let fixture: ComponentFixture<MyApplicaitonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyApplicaitonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApplicaitonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
