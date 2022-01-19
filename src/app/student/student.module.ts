import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocetnaStranaComponent } from './pocetna-strana/pocetna-strana.component';
import { StudentComponent } from './student.component';
import { SharedModule } from '../shared/shared.module';
import { SutdentProfilComponent } from './sutdent-profil/sutdent-profil.component';
import { StudentRoutingModule } from './student-routing.module';
import { NavBarStudentComponent } from './nav-bar-student/nav-bar-student.component';

@NgModule({
  declarations: [
    StudentComponent,
    PocetnaStranaComponent,
    SutdentProfilComponent,
    NavBarStudentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ],
  exports:[]
})
export class StudentModule { }
