import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdeaTeacherAssignmentComponent } from './udea-teacher-assignment.component';
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    UdeaTeacherAssignmentComponent
  ],
  exports: [
    UdeaTeacherAssignmentComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class UdeaTeacherAssignmentModule { }
