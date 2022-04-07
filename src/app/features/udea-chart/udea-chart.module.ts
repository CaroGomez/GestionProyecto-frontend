import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdeaChartComponent } from './udea-chart.component';



@NgModule({
    declarations: [
        UdeaChartComponent
    ],
  exports: [
    UdeaChartComponent,
    UdeaChartComponent
  ],
    imports: [
        CommonModule
    ]
})
export class UdeaChartModule { }
