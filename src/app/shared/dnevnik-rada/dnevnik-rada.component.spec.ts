import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnevnikRadaComponent } from './dnevnik-rada.component';

describe('DnevnikRadaComponent', () => {
  let component: DnevnikRadaComponent;
  let fixture: ComponentFixture<DnevnikRadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnevnikRadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnevnikRadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
