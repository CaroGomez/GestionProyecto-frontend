import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {KpiModel} from "../../../model/kpi.model";
import {UserModel} from "../../../model/user.model";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-udea-student-assignment',
  templateUrl: './udea-student-assignment.component.html',
  styleUrls: ['./udea-student-assignment.component.scss']
})
export class UdeaStudentAssignmentComponent implements OnInit {
  @Input()
  studentForm: FormGroup = this.fb.group({});
  studentsList: UserModel[] = [];
  get students(): FormArray {
    return this.studentForm.get('students') as FormArray;
  }
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
  }


  addStudent(): void {
    this.students.push(this.createForm());
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: null,
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      role: {
        id: null,
        name: 'ESTUDIANTE'
      }
    });
  }

  deleteStudent(student: AbstractControl, index: number): void {
    // @ts-ignore
    //if (student.get('id').value === null) {
      this.students.removeAt(index);
  }

}
