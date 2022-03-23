import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocetnaStranaComponent } from './pocetna-strana/pocetna-strana.component';
import { StudentComponent } from './student.component';
import { SharedModule } from '../shared/shared.module';
import { SutdentProfilComponent } from './sutdent-profil/sutdent-profil.component';
import { StudentRoutingModule } from './student-routing.module';
import { NavBarStudentComponent } from './nav-bar-student/nav-bar-student.component';
import { ApplicationComponent } from './application/application.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    StudentComponent,
    PocetnaStranaComponent,
    SutdentProfilComponent,
    NavBarStudentComponent,
    ApplicationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  exports:[]
})
export class StudentModule { }
