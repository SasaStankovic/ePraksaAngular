import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import { StudentComponent } from './student/student.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'welcome', redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
  },
  {
    path: 'commission_member',
    loadChildren: () => import('./komisija/komisija.module').then(m => m.KomisijaModule),
  },
  {
    path: 'company',
    loadChildren: () => import('./firma/firma.module').then(m => m.FirmaModule),
  },
  {
    path: 'mentor',
    loadChildren: () => import('./mentor/mentor.module').then(m => m.MentorModule),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
