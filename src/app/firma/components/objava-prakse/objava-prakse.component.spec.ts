import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjavaPrakseComponent } from './objava-prakse.component';

describe('ObjavaPrakseComponent', () => {
  let component: ObjavaPrakseComponent;
  let fixture: ComponentFixture<ObjavaPrakseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjavaPrakseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjavaPrakseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
