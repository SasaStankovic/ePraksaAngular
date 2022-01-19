import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomisijaWrapperComponent } from './komisija-wrapper.component';

describe('KomisijaWrapperComponent', () => {
  let component: KomisijaWrapperComponent;
  let fixture: ComponentFixture<KomisijaWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomisijaWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KomisijaWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
