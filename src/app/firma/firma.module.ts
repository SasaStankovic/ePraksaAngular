import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirmaRoutingModule } from './firma-routing.module';
import { ObjavaPrakseComponent } from './components/objava-prakse/objava-prakse.component';


@NgModule({
  declarations: [
    ObjavaPrakseComponent
  ],
  imports: [
    CommonModule,
    FirmaRoutingModule
  ]
})
export class FirmaModule { }
