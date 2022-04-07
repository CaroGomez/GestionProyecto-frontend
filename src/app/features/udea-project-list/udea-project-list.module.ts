import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdeaProjectListComponent } from './udea-project-list.component';
import {TranslateModule} from "@ngx-translate/core";
import {UdeaProjectDetailComponent} from "../udea-project-detail/udea-project-detail.component";
import {ReactiveFormsModule} from "@angular/forms";
import {
  UdeaCommentCreationModule
} from "../udea-project-registration/udea-comment-creation/udea-comment-creation.module";
import {UdeaKpiCreationModule} from "../udea-project-registration/udea-kpi-creation/udea-kpi-creation.module";
import {
  UdeaStudentAssignmentModule
} from "../udea-project-registration/udea-student-assignment/udea-student-assignment.module";
import {
  UdeaTeacherAssignmentModule
} from "../udea-project-registration/udea-teacher-assignment/udea-teacher-assignment.module";
import {RouterModule} from "@angular/router";
import {IgxPieChartCoreModule} from "igniteui-angular-charts";
import {UdeaChartModule} from "../udea-chart/udea-chart.module";



@NgModule({
  declarations: [
    UdeaProjectListComponent,
    UdeaProjectDetailComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    UdeaCommentCreationModule,
    UdeaKpiCreationModule,
    UdeaStudentAssignmentModule,
    UdeaTeacherAssignmentModule,
    RouterModule,
    IgxPieChartCoreModule,
    UdeaChartModule
  ]
})
export class UdeaProjectListModule { }
