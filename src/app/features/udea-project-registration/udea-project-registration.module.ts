import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdeaProjectRegistrationComponent } from './udea-project-registration.component';
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {UdeaCommentCreationModule} from "../udea-comment-creation/udea-comment-creation.module";
import {UdeaKpiCreationModule} from "../udea-kpi-creation/udea-kpi-creation.module";
import {UdeaStudentAssignmentModule} from "../udea-student-assignment/udea-student-assignment.module";
import {UdeaTeacherAssignmentModule} from "../udea-teacher-assignment/udea-teacher-assignment.module";



@NgModule({
  declarations: [
    UdeaProjectRegistrationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    UdeaCommentCreationModule,
    UdeaKpiCreationModule,
    UdeaStudentAssignmentModule,
    UdeaTeacherAssignmentModule
  ]
})
export class UdeaProjectRegistrationModule { }
