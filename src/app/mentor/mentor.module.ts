import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { PraksaItemDetaildComponent } from './praksa-item-detaild/praksa-item-detaild.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PraksaItemComponent } from './praksa-item/praksa-item.component';
import { MatListModule } from '@angular/material/list';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  declarations: [
    PraksaItemComponent,
    PraksaItemDetaildComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCardModule,
    MatListModule,
    PipesModule,
  ]
})
export class MentorModule { }
