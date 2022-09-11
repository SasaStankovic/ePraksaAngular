import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaljanPregledPrakseComponent } from '../shared/detaljan-pregled-prakse/detaljan-pregled-prakse.component';
import { DnevnikRadaComponent } from '../shared/dnevnik-rada/dnevnik-rada.component';
import { MenotrReportComponent } from '../shared/menotr-report/menotr-report.component';
import { AuthGuard } from '../_guards/auth.guard';
import { StudentGuard } from '../_guards/student.guard';
import { ApplicationComponent } from './application/application.component';
import { MyApplicaitonsComponent } from './my-applicaitons/my-applicaitons.component';
import { PocetnaStranaComponent } from './pocetna-strana/pocetna-strana.component';
import { StudentComponent } from './student.component';
import { SutdentProfilComponent } from './sutdent-profil/sutdent-profil.component';

export const routes: Routes = [
  {
    path: '', component: StudentComponent,
    canActivate: [AuthGuard, StudentGuard],
    children: [
      {
        path: '', redirectTo: 'internships', pathMatch: 'full',
      },
      {
        path: 'internships', component: PocetnaStranaComponent,
      },
      {
        path: 'internships/:id/details', component: DetaljanPregledPrakseComponent,
      },
      {
        path: 'internships/:id/application', component: ApplicationComponent
      },
      {
        path: 'profil', component: SutdentProfilComponent
      },
      {
        path: 'dnevnik-rada', component: DnevnikRadaComponent
      },
      {
        path: 'mentor-report', component: MenotrReportComponent
      },
      {
        path: 'my-applicaitons', component: MyApplicaitonsComponent
      },
      {
        path: '**', redirectTo: '', pathMatch: 'full'
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
