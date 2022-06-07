import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {WelcomeComponent } from './welcome/welcome.component';
import { ProfilComponent } from './shared/profil/profil.component';
import { SharedModule } from './shared/shared.module';
import { StudentModule } from './student/student.module';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './_guards/auth.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KomisijaModule } from './komisija/komisija.module';
import { WrapperComponent } from './firma/components/wrapper/wrapper.component';
import { NavBarFirmaComponent } from './firma/components/nav-bar-firma/nav-bar-firma.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonModule, DatePipe } from '@angular/common';
import { MentorWrapperComponent } from './mentor/mentor-wrapper/mentor-wrapper.component';
import { NavBarMentorComponent } from './mentor/nav-bar-mentor/nav-bar-mentor.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProfilComponent,
    LoginFormComponent,
    WrapperComponent,
    NavBarFirmaComponent,
    MentorWrapperComponent,
    NavBarMentorComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StudentModule,
    KomisijaModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [AuthGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
