import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PraksaItemComponent } from './praksa-item/praksa-item.component';
import { MentorWrapperComponent } from './mentor-wrapper/mentor-wrapper.component';
import { PraksaItemDetaildComponent } from './praksa-item-detaild/praksa-item-detaild.component';
import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: MentorWrapperComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '', redirectTo: 'internships', pathMatch: 'full'
      },
      {
        path:'internships', component:PraksaItemComponent,
      },
      {
        path: 'internships/:id/details', component:PraksaItemDetaildComponent ,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
