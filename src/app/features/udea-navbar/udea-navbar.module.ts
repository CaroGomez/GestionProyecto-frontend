import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdeaNavbarComponent } from './udea-navbar.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    UdeaNavbarComponent
  ],
  exports: [
    UdeaNavbarComponent
  ],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ]
})
export class UdeaNavbarModule { }
