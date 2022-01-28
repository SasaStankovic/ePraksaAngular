import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdbijanjeComponent } from './odbijanje.component';

describe('OdbijanjeComponent', () => {
  let component: OdbijanjeComponent;
  let fixture: ComponentFixture<OdbijanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdbijanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdbijanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
