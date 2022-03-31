import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CommentModel} from "../../model/comment.model";
import {ProjectService} from "../../service/project.service";

@Component({
  selector: 'app-udea-comment-creation',
  templateUrl: './udea-comment-creation.component.html',
  styleUrls: ['./udea-comment-creation.component.scss']
})
export class UdeaCommentCreationComponent implements OnInit {
  // @ts-ignore
  commentForm: FormGroup;
  commentsList: CommentModel[] = [];
  get comments(): FormArray {
    return this.commentForm.get('comments') as FormArray;
  }
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comments: this.fb.array([]),
    });
    // this.commentService
    //   .getcomment(this.idSelectedPatient.toString())
    //   .subscribe((comments) => {
    //     comments.forEach((comment) => {
    //       this.comments.push(this.createFormcomment(comment));
    //     });
    //   });
  }

  private createFormcomment(comment: CommentModel): FormGroup {
    return this.fb.group({
      id: comment.id,
      content: comment.content,
    });
  }

  addComment(): void {
    this.comments.push(this.createForm());
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: null,
      content: ''
    });
  }

  deleteComment(comment: AbstractControl, index: number): void {
    // @ts-ignore
    if (comment.get('id').value === null) {
      this.comments.removeAt(index);
    } else {
      // this.spinnerService.show();
      // this.commentService
      //   .deletecomment(comment.get('id').value)
      //   .subscribe(() => this.spinnerService.hide());
    }
  }

  saveComment(): void {
    // this.spinnerService.show();
    for (const commentsKey of this.comments.controls) {

      this.commentsList.push({
        // @ts-ignore
        id: commentsKey.get('id').value,
        // @ts-ignore
        content: commentsKey.get('content').value
      });
    }
    this.projectService.setComments(this.commentsList);
    // this.commentService
    //   .savecomment(this.commentsList, this.idSelectedPatient.toString())
      // .subscribe(() => this.spinnerService.hide());
  }
}
