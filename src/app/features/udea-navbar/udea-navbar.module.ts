import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdeaNavbarComponent } from './udea-navbar.component';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    UdeaNavbarComponent
  ],
  exports: [
    UdeaNavbarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class UdeaNavbarModule { }
