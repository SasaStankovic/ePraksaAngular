import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirmaRoutingModule } from './firma-routing.module';
import { ObjavaPrakseComponent } from './components/objava-prakse/objava-prakse.component';

import { MatButtonModule} from '@angular/material/button';
import { MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PrijaveNaKonkursComponent } from './components/prijave-na-konkurs/prijave-na-konkurs.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MentorsComponent } from './components/mentors/mentors.component';
@NgModule({
  declarations: [
    ObjavaPrakseComponent,
    PrijaveNaKonkursComponent,
    MentorsComponent
  ],
  imports: [
    CommonModule,
    FirmaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatCardModule
  ],
  providers:[
    MatDatepickerModule
  ]
})
export class FirmaModule { }
