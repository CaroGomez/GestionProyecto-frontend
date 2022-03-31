import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {UserModel} from "../../model/user.model";
import {ProjectService} from "../../service/project.service";

@Component({
  selector: 'app-udea-teacher-assignment',
  templateUrl: './udea-teacher-assignment.component.html',
  styleUrls: ['./udea-teacher-assignment.component.scss']
})
export class UdeaTeacherAssignmentComponent implements OnInit {
// @ts-ignore
  teacherForm: FormGroup;
  teachersList: UserModel[] = [];
  get teachers(): FormArray {
    return this.teacherForm.get('teachers') as FormArray;
  }
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.teacherForm = this.fb.group({
      teachers: this.fb.array([]),
    });
    // this.teacherService
    //   .getteacher(this.idSelectedPatient.toString())
    //   .subscribe((teachers) => {
    //     teachers.forEach((teacher) => {
    //       this.teachers.push(this.createFormteacher(teacher));
    //     });
    //   });
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
      name: '',
      email: '',
      phone: false,
      role: {
        id: 0,
        name: 'MAESTRO'
      }
    });
  }

  deleteTeacher(teacher: AbstractControl, index: number): void {
    // @ts-ignore
    if (teacher.get('id').value === null) {
      this.teachers.removeAt(index);
    } else {
      // this.spinnerService.show();
      // this.teacherService
      //   .deleteteacher(teacher.get('id').value)
      //   .subscribe(() => this.spinnerService.hide());
    }
  }

  saveTeacher(): void {
    // this.spinnerService.show();
    for (const teachersKey of this.teachers.controls) {

      this.teachersList.push({
        // @ts-ignore
        id: teachersKey.get('id').value,
        // @ts-ignore
        name: teachersKey.get('name').value,
        // @ts-ignore
        email: teachersKey.get('email').value,
        // @ts-ignore
        phone: teachersKey.get('phone')?.value,
        // @ts-ignore
        role: teachersKey.get('role')?.value
      });
    }

    this.projectService.setTeachers(this.teachersList);
    // this.teacherService
    //   .saveTeacher(this.teachersList, this.idSelectedPatient.toString())
    // .subscribe(() => this.spinnerService.hide());
  }
}
