import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../../../model/user.model";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-udea-teacher-assignment',
  templateUrl: './udea-teacher-assignment.component.html',
  styleUrls: ['./udea-teacher-assignment.component.scss']
})
export class UdeaTeacherAssignmentComponent implements OnInit {
  @Input()
  teacherForm: FormGroup = this.fb.group({});
  teachersList: UserModel[] = [];
  get teachers(): FormArray {
    return this.teacherForm.get('teachers') as FormArray;
  }
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  private createFormTeacher(teacher: UserModel): FormGroup {
    return this.fb.group({
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      phone: teacher.phone,
      role: teacher.role
    });
  }

  addTeacher(): void {
    this.teachers.push(this.createForm());
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: null,
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      role: {
        id: null,
        name: 'MAESTRO'
      }
    });
  }

  deleteTeacher(teacher: AbstractControl, index: number): void {
    this.teachers.removeAt(index);
  }
}
