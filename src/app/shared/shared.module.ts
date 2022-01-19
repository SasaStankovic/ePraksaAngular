import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { PrikazprakseComponent } from './prikazprakse/prikazprakse.component';
import { DetaljanPregledPrakseComponent } from './detaljan-pregled-prakse/detaljan-pregled-prakse.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DnevnikRadaComponent } from './dnevnik-rada/dnevnik-rada.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    PrikazprakseComponent,
    DetaljanPregledPrakseComponent,
    DnevnikRadaComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports:[FooterComponent,PrikazprakseComponent,DetaljanPregledPrakseComponent, DnevnikRadaComponent]
})
export class SharedModule { }