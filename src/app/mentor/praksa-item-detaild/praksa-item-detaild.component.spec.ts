import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraksaItemDetaildComponent } from './praksa-item-detaild.component';

describe('PraksaItemDetaildComponent', () => {
  let component: PraksaItemDetaildComponent;
  let fixture: ComponentFixture<PraksaItemDetaildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraksaItemDetaildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraksaItemDetaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
