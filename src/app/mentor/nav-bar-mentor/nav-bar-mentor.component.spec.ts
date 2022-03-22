import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMentorComponent } from './nav-bar-mentor.component';

describe('NavBarMentorComponent', () => {
  let component: NavBarMentorComponent;
  let fixture: ComponentFixture<NavBarMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
