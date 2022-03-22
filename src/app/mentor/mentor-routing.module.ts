import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PraksaItemComponent } from './praksa-item/praksa-item.component';
import { MentorWrapperComponent } from './mentor-wrapper/mentor-wrapper.component';
import { PraksaItemDetaildComponent } from './praksa-item-detaild/praksa-item-detaild.component';

const routes: Routes = [
  {
    path: '', component: MentorWrapperComponent,
    children: [
      {
        path: '', redirectTo: 'internships'
      },
      {
        path: 'internships', component: PraksaItemDetaildComponent,
        children: [
          { path: ':id/details', component: PraksaItemComponent }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
