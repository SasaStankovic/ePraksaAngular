import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarKomisijaComponent } from './nav-bar-komisija.component';

describe('NavBarKomisijaComponent', () => {
  let component: NavBarKomisijaComponent;
  let fixture: ComponentFixture<NavBarKomisijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarKomisijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarKomisijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
