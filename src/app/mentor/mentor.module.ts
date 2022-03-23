import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { NavBarMentorComponent } from './nav-bar-mentor/nav-bar-mentor.component';
import { PraksaItemDetaildComponent } from './praksa-item-detaild/praksa-item-detaild.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
@NgModule({
  declarations: [
    // NavBarMentorComponent
  
    PraksaItemDetaildComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    // CdkAccordionModule,
  ]
})
export class MentorModule { }
