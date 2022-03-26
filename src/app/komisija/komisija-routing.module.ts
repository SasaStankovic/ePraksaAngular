import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaljanPregledPrakseComponent } from '../shared/detaljan-pregled-prakse/detaljan-pregled-prakse.component';
import { SutdentProfilComponent } from '../student/sutdent-profil/sutdent-profil.component';
import { AuthGuard } from '../_guards/auth.guard';
import { KomisijaGuard } from '../_guards/komisija.guard';
import { KomisijaWrapperComponent } from './components/komisija-wrapper/komisija-wrapper.component';
import { PregledPraktikanataComponent } from './components/pregled-praktikanata/pregled-praktikanata.component';
import { PregledStudentaComponent } from './components/pregled-studenta/pregled-studenta.component';
import { ZahtjeviZaPrakseComponent } from './components/zahtjevi-za-prakse/zahtjevi-za-prakse.component';

const routes: Routes = [
  {
    path: '', component: KomisijaWrapperComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'internships', pathMatch: 'full',
      },
      {
        path: 'internships', component: ZahtjeviZaPrakseComponent,
        children: [
          {
            path: ':id/details',
            component: DetaljanPregledPrakseComponent
          },
        ]
      },
      // {
      //   path: 'internship/:id/details',
      //   component: DetaljanPregledPrakseComponent
      // },
      {
        path: 'students', component: PregledPraktikanataComponent,
        // children: [
        //   { path: ':id/profile', component: SutdentProfilComponent }
        // ]
      },
      { path: ':id/profile', component: SutdentProfilComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KomisijaRoutingModule { }
