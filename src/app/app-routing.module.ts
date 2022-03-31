import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  UdeaProjectRegistrationComponent
} from "./features/udea-project-registration/udea-project-registration.component";

const routes: Routes = [
  {
    path: '',
    component: UdeaProjectRegistrationComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
