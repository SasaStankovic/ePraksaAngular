import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '',component:WelcomeComponent
  },
  {
    path: 'welcome',redirectTo:'', pathMatch:'full'
  },
  {
    path: 'student',
    loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)
  },
  {
    path:'komisija',
    loadChildren:()=>import('./komisija/komisija.module').then(m=>m.KomisijaModule)
  },
  {
    path: '**', redirectTo:'', pathMatch:'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
