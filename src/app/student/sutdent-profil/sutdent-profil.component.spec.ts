import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutdentProfilComponent } from './sutdent-profil.component';

describe('SutdentProfilComponent', () => {
  let component: SutdentProfilComponent;
  let fixture: ComponentFixture<SutdentProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SutdentProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SutdentProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
