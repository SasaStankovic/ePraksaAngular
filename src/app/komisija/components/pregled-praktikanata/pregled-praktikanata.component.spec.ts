import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledPraktikanataComponent } from './pregled-praktikanata.component';

describe('PregledPraktikanataComponent', () => {
  let component: PregledPraktikanataComponent;
  let fixture: ComponentFixture<PregledPraktikanataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregledPraktikanataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledPraktikanataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
