import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {KpiModel} from "../../model/kpi.model";
import {UserModel} from "../../model/user.model";
import {ProjectService} from "../../service/project.service";

@Component({
  selector: 'app-udea-student-assignment',
  templateUrl: './udea-student-assignment.component.html',
  styleUrls: ['./udea-student-assignment.component.scss']
})
export class UdeaStudentAssignmentComponent implements OnInit {
// @ts-ignore
  studentForm: FormGroup;
  studentsList: UserModel[] = [];
  get students(): FormArray {
    return this.studentForm.get('students') as FormArray;
  }
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      students: this.fb.array([]),
    });
    // this.studentService
    //   .getstudent(this.idSelectedPatient.toString())
    //   .subscribe((students) => {
    //     students.forEach((student) => {
    //       this.students.push(this.createFormstudent(student));
    //     });
    //   });
  }

  private createFormStudent(student: UserModel): FormGroup {
    return this.fb.group({
      id: student.id,
      name: student.name,
      email: student.email,
      phone: student.phone,
      role: student.role
    });
  }

  addStudent(): void {
    this.students.push(this.createForm());
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: null,
      name: '',
      email: '',
      phone: false,
      role: {
        id: 0,
        name: 'ESTUDIANTE'
      }
    });
  }

  deleteStudent(student: AbstractControl, index: number): void {
    // @ts-ignore
    if (student.get('id').value === null) {
      this.students.removeAt(index);
    } else {
      // this.spinnerService.show();
      // this.studentService
      //   .deletestudent(student.get('id').value)
      //   .subscribe(() => this.spinnerService.hide());
    }
  }

  saveStudent(): void {
    // this.spinnerService.show();
    for (const studentsKey of this.students.controls) {

      this.studentsList.push({
        // @ts-ignore
        id: studentsKey.get('id')?.value,
        // @ts-ignore
        name: studentsKey.get('name')?.value,
        // @ts-ignore
        email: studentsKey.get('email')?.value,
        // @ts-ignore
        phone: studentsKey.get('phone')?.value,
        // @ts-ignore
        role: studentsKey.get('role')?.value
      });
    }

    this.projectService.setStudents(this.studentsList);
    // this.studentService
    //   .saveStudent(this.studentsList, this.idSelectedPatient.toString())
    // .subscribe(() => this.spinnerService.hide());
  }
}
