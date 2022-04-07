import { Injectable } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CommentModel} from "../model/comment.model";
import {KpiModel} from "../model/kpi.model";
import {UserModel} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb: FormBuilder) { }

  comments(commentForm: FormGroup): FormArray {
    return commentForm.get('comments') as FormArray;
  }

  kpis(kpiForm: FormGroup) {
    return kpiForm.get('kpis') as FormArray;
  }

  students(studentForm: FormGroup) {
    return studentForm.get('students') as FormArray;
  }

  teachers(teacherForm:FormGroup) {
    return teacherForm.get('teachers') as FormArray;
  }


  createFormComment(comment: CommentModel): FormGroup {
    return this.fb.group({
      id: comment.id,
      content: comment.content,
    });
  }

  createFormKpi(kpi: KpiModel): FormGroup {
    return this.fb.group({
      id: kpi.id,
      name: kpi.name,
      description: kpi.description,
      completed: kpi.completed
    });
  }

  createFormStudent(student: UserModel): FormGroup {
    return this.fb.group({
      id: student.id,
      name: student.name,
      email: student.email,
      phone: student.phone,
      role: student.role
    });
  }

  createFormTeacher(teacher: UserModel): FormGroup {
    return this.fb.group({
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      phone: teacher.phone,
      role: teacher.role
    });
  }
}
