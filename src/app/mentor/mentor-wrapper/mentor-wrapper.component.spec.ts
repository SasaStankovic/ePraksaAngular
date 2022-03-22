import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorWrapperComponent } from './mentor-wrapper.component';

describe('MentorWrapperComponent', () => {
  let component: MentorWrapperComponent;
  let fixture: ComponentFixture<MentorWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
