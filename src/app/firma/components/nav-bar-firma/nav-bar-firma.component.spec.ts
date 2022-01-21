import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarFirmaComponent } from './nav-bar-firma.component';

describe('NavBarFirmaComponent', () => {
  let component: NavBarFirmaComponent;
  let fixture: ComponentFixture<NavBarFirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarFirmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
