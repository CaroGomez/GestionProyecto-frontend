import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdeaStudentAssignmentComponent } from './udea-student-assignment.component';
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UdeaStudentAssignmentComponent
  ],
  exports: [
    UdeaStudentAssignmentComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class UdeaStudentAssignmentModule { }
