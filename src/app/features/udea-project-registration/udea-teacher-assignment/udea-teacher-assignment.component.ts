import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
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
}
