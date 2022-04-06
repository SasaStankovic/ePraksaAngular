import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaljanPregledPrakseComponent } from '../shared/detaljan-pregled-prakse/detaljan-pregled-prakse.component';
import { InternshipViewComponent } from '../shared/internship-view/internship-view.component';
import { SutdentProfilComponent } from '../student/sutdent-profil/sutdent-profil.component';
import { AuthGuard } from '../_guards/auth.guard';
import { MentorsComponent } from './components/mentors/mentors.component';
import { ObjavaPrakseComponent } from './components/objava-prakse/objava-prakse.component';
import { PrijaveNaKonkursComponent } from './components/prijave-na-konkurs/prijave-na-konkurs.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path:'', component:WrapperComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'objava-prakse', component:ObjavaPrakseComponent
      },
      {
        path:'prijave-na-konkurs', component: PrijaveNaKonkursComponent
      },
      {
        path:'students/:id', component: SutdentProfilComponent
      },
      {
        path:'internships_view/:type', component: InternshipViewComponent
      },
      {
        path:'mentors', component: MentorsComponent,
      },
      {
        path:'internships/:id/details', component: DetaljanPregledPrakseComponent
      },
      {
        path:'internships/:id/edit', component: ObjavaPrakseComponent
      },
      {
        path:'**', redirectTo:'', pathMatch:'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmaRoutingModule { }
