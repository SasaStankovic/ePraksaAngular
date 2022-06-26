import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KomisijaRoutingModule } from './komisija-routing.module';
import { KomisijaWrapperComponent } from './components/komisija-wrapper/komisija-wrapper.component';
import { PregledPraktikanataComponent } from './components/pregled-praktikanata/pregled-praktikanata.component';
import { PregledStudentaComponent } from './components/pregled-studenta/pregled-studenta.component';
import { ZahtjeviZaPrakseComponent } from './components/zahtjevi-za-prakse/zahtjevi-za-prakse.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { InternshipsComponent } from './components/internships/internships.component';
import { MatDividerModule } from '@angular/material/divider';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  declarations: [
    KomisijaWrapperComponent,
    PregledStudentaComponent,
    PregledPraktikanataComponent,
    ZahtjeviZaPrakseComponent,
    InternshipsComponent,
  ],
  imports: [
    CommonModule,
    KomisijaRoutingModule,
    SharedModule,
    MatTableModule,
    MatDividerModule,
    PipesModule,
  ]
})
export class KomisijaModule { }
