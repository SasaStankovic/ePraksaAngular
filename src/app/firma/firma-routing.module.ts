import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SutdentProfilComponent } from '../student/sutdent-profil/sutdent-profil.component';
import { ObjavaPrakseComponent } from './components/objava-prakse/objava-prakse.component';
import { PrijaveNaKonkursComponent } from './components/prijave-na-konkurs/prijave-na-konkurs.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path:'', component:WrapperComponent,
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
