import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdeaKpiCreationComponent } from './udea-kpi-creation.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    UdeaKpiCreationComponent
  ],
  exports: [
    UdeaKpiCreationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class UdeaKpiCreationModule { }
