import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaljanPregledPrakseComponent } from '../shared/detaljan-pregled-prakse/detaljan-pregled-prakse.component';
import { DnevnikRadaComponent } from '../shared/dnevnik-rada/dnevnik-rada.component';
import { AuthGuard } from '../_guards/auth.guard';
import { StudentGuard } from '../_guards/student.guard';
import { PocetnaStranaComponent } from './pocetna-strana/pocetna-strana.component';
import { StudentComponent } from './student.component';
import { SutdentProfilComponent } from './sutdent-profil/sutdent-profil.component';

export const routes: Routes = [
  {
    path: '', component: StudentComponent,
    // canActivate:[AuthGuard, StudentGuard],
    canActivate:[AuthGuard],
    children: [
      {
        path: '', component: PocetnaStranaComponent
      },
      {
        path: 'profil', component: SutdentProfilComponent
      },
      {
        path: 'dnevnik-rada', component: DnevnikRadaComponent
      },
      {
        path: '**', redirectTo:'', pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  bootstrap: [StudentComponent]
})
export class StudentRoutingModule { }
