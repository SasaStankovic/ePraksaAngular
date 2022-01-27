import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjavaPrakseComponent } from './components/objava-prakse/objava-prakse.component';
import { ListaAplikacijaComponent } from './components/prijave-na-konkurs/lista-aplikacija/lista-aplikacija.component';
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
        path:'prijave-na-konkurs', component: PrijaveNaKonkursComponent,
        children:[
          {
            path: 'aplikacije', component:ObjavaPrakseComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmaRoutingModule { }
