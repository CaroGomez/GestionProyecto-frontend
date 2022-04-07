import { Component, OnInit } from '@angular/core';
import {ProjectModel} from "../../model/project.model";
import {ProjectService} from "../../service/project.service";
import {FormArray, FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import {ERROR_NAME_PROJECT} from "../../../assets/i18n/es";

@Component({
  selector: 'app-udea-project-registration',
  templateUrl: './udea-project-registration.component.html',
  styleUrls: ['./udea-project-registration.component.scss']
})
export class UdeaProjectRegistrationComponent implements OnInit {
  project: ProjectModel = Object.assign({});
  isEdit: boolean = false;

  projectForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    document: '',
    commentForm: this.fb.group({
      comments: this.fb.array([])
    }),
    kpiForm: this.fb.group({
      kpis: this.fb.array([])
    }),
    studentForm: this.fb.group({
      students: this.fb.array([])
    }),
    teacherForm: this.fb.group({
      teachers: this.fb.array([])
    })
  })

  get commentForm(): FormGroup {
    return this.projectForm.get('commentForm') as FormGroup;
  }

  get kpiForm(): FormGroup {
    return this.projectForm.get('kpiForm') as FormGroup;
  }

  get teacherForm(): FormGroup {
    return this.projectForm.get('teacherForm') as FormGroup;
  }

  get studentForm(): FormGroup {
    return this.projectForm.get('studentForm') as FormGroup;
  }
  constructor(private projectService: ProjectService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.project.name = this.projectForm.get('name')?.value;
    this.project.document = this.projectForm.get('document')?.value;
    this.project.comments = this.commentForm.get('comments')?.value;
    this.project.kpis = this.kpiForm.get('kpis')?.value;
    this.project.students = this.studentForm.get('students')?.value;
    this.project.teachers = this.teacherForm.get('teachers')?.value;

    this.projectService.saveProject(this.project).subscribe(response => console.log(response));
  }



}
