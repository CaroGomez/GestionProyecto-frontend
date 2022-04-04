import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CommentModel} from "../../../model/comment.model";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-udea-comment-creation',
  templateUrl: './udea-comment-creation.component.html',
  styleUrls: ['./udea-comment-creation.component.scss']
})
export class UdeaCommentCreationComponent implements OnInit {
  @Input()
  commentForm: FormGroup = this.fb.group({});
  commentsList: CommentModel[] = [];
  get comments(): FormArray {
    return this.commentForm.get('comments') as FormArray;
  }
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    // this.commentService
    //   .getcomment(this.idSelectedPatient.toString())
    //   .subscribe((comments) => {
    //     comments.forEach((comment) => {
    //       this.comments.push(this.createFormcomment(comment));
    //     });
    //   });
  }

  private createFormComment(comment: CommentModel): FormGroup {
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
}
