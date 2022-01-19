import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KomisijaGuard } from '../_guards/komisija.guard';
import { KomisijaWrapperComponent } from './components/komisija-wrapper/komisija-wrapper.component';
import { PregledPraktikanataComponent } from './components/pregled-praktikanata/pregled-praktikanata.component';
import { PregledStudentaComponent } from './components/pregled-studenta/pregled-studenta.component';
import { ZahtjeviZaPrakseComponent } from './components/zahtjevi-za-prakse/zahtjevi-za-prakse.component';

const routes: Routes = [
  {
    path:'',component:KomisijaWrapperComponent,
    canActivate:[KomisijaGuard],
    children:[
      {
        path:'', component: PregledPraktikanataComponent
      },
      {
        path:'zahtjevi-za-prakse', component:ZahtjeviZaPrakseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KomisijaRoutingModule { }
