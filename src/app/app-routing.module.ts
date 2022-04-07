import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {
  UdeaProjectRegistrationComponent
} from "./features/udea-project-registration/udea-project-registration.component";
import {UdeaHomeComponent} from "./features/udea-home/udea-home.component";
import {UdeaProjectListComponent} from "./features/udea-project-list/udea-project-list.component";

const routes: Routes = [
  {
    path: '',
    component: UdeaHomeComponent
  },
  {
    path: 'register',
    component: UdeaProjectRegistrationComponent
  },
  {
    path: 'project/list',
    component: UdeaProjectListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
