import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahtjeviZaPrakseComponent } from './zahtjevi-za-prakse.component';

describe('ZahtjeviZaPrakseComponent', () => {
  let component: ZahtjeviZaPrakseComponent;
  let fixture: ComponentFixture<ZahtjeviZaPrakseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZahtjeviZaPrakseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahtjeviZaPrakseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
