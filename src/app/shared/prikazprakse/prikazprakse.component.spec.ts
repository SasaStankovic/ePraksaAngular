import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazprakseComponent } from './prikazprakse.component';

describe('PrikazprakseComponent', () => {
  let component: PrikazprakseComponent;
  let fixture: ComponentFixture<PrikazprakseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazprakseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazprakseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
