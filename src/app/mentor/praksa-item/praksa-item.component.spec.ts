import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraksaItemComponent } from './praksa-item.component';

describe('PraksaItemComponent', () => {
  let component: PraksaItemComponent;
  let fixture: ComponentFixture<PraksaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraksaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraksaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
