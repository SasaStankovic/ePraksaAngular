import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjavaPrakseComponent } from './components/objava-prakse/objava-prakse.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path:'', component:WrapperComponent,
    children:[
      {
        path:'objava-prakse', component:ObjavaPrakseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmaRoutingModule { }
