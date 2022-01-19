import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KomisijaRoutingModule } from './komisija-routing.module';
import { KomisijaWrapperComponent } from './components/komisija-wrapper/komisija-wrapper.component';
import { NavBarKomisijaComponent } from './components/nav-bar-komisija/nav-bar-komisija.component';
import { PregledPraktikanataComponent } from './components/pregled-praktikanata/pregled-praktikanata.component';
import { PregledStudentaComponent } from './components/pregled-studenta/pregled-studenta.component';
import { ZahtjeviZaPrakseComponent } from './components/zahtjevi-za-prakse/zahtjevi-za-prakse.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    KomisijaWrapperComponent,
    NavBarKomisijaComponent,
    PregledStudentaComponent,
    PregledPraktikanataComponent,
    ZahtjeviZaPrakseComponent,
    NavBarKomisijaComponent
  ],
  imports: [
    CommonModule,
    KomisijaRoutingModule,
    SharedModule
  ]
})
export class KomisijaModule { }
