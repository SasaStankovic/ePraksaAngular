import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenotrReportComponent } from './menotr-report.component';

describe('MenotrReportComponent', () => {
  let component: MenotrReportComponent;
  let fixture: ComponentFixture<MenotrReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenotrReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenotrReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
