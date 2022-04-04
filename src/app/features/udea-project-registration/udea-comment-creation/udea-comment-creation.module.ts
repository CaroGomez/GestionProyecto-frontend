import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UdeaCommentCreationComponent } from './udea-comment-creation.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    UdeaCommentCreationComponent
  ],
  exports: [
    UdeaCommentCreationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class UdeaCommentCreationModule { }
