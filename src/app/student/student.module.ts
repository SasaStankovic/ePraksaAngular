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
import {MatDividerModule} from '@angular/material/divider';
import { KomisijaModule } from '../komisija/komisija.module';
import { MentorModule } from '../mentor/mentor.module';
import { MyApplicaitonsComponent } from './my-applicaitons/my-applicaitons.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { FirmaModule } from '../firma/firma.module';
@NgModule({
  declarations: [
    StudentComponent,
    PocetnaStranaComponent,
    SutdentProfilComponent,
    NavBarStudentComponent,
    ApplicationComponent,
    MyApplicaitonsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports:[SutdentProfilComponent],
  providers:[KomisijaModule,MentorModule,FirmaModule]
})
export class StudentModule { }
