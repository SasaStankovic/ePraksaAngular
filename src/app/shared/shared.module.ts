import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { PrikazprakseComponent } from './prikazprakse/prikazprakse.component';
import { DetaljanPregledPrakseComponent } from './detaljan-pregled-prakse/detaljan-pregled-prakse.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DnevnikRadaComponent } from './dnevnik-rada/dnevnik-rada.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OdbijanjeComponent } from './odbijanje/odbijanje.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InternshipViewComponent } from './internship-view/internship-view.component';
import { MenotrReportComponent } from './menotr-report/menotr-report.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    FooterComponent,
    PrikazprakseComponent,
    DetaljanPregledPrakseComponent,
    DnevnikRadaComponent,
    OdbijanjeComponent,
    InternshipViewComponent,
    MenotrReportComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatMenuModule,
    MatBadgeModule,
    MatTooltipModule,
    MatSelectModule,
  ],
  exports: [
    FooterComponent,
    PrikazprakseComponent,
    DetaljanPregledPrakseComponent,
    DnevnikRadaComponent,
    InternshipViewComponent,
    MenotrReportComponent,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }