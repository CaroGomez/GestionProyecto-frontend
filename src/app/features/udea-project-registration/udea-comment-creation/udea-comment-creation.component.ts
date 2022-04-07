import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  }

  addComment(): void {
    this.comments.push(this.createForm());
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: null,
      content: ['', Validators.required]
    });
  }

  deleteComment(comment: AbstractControl, index: number): void {
    this.comments.removeAt(index);
  }
}
