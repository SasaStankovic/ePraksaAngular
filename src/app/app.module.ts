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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProfilComponent,
    LoginFormComponent,
    WrapperComponent,
    NavBarFirmaComponent
    
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
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
