import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from "../../model/project.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../service/project.service";
import {CommentModel} from "../../model/comment.model";
import {FormService} from "../../service/form.service";

@Component({
  selector: 'app-udea-project-detail',
  templateUrl: './udea-project-detail.component.html',
  styleUrls: ['./udea-project-detail.component.scss']
})
export class UdeaProjectDetailComponent implements OnInit {


  projectForm: FormGroup = this.fb.group({});
  project: ProjectModel = Object.assign({});
  chartData: number[] = [];
  totalKpis = 0;
  completedKpis = 0;
  @Input()
  set projectSelected(project: ProjectModel) {
    this.totalKpis = 0;
    this.completedKpis = 0;
    this.projectForm = this.fb.group({
      id: project.id,
      name: project.name,
      document: project.document,
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
    });
    project.comments.forEach(comment =>
      this.formService.comments(this.commentForm).push(this.formService.createFormComment(comment))
    );

    project.kpis.forEach(kpi => {
        this.formService.kpis(this.kpiForm).push(this.formService.createFormKpi(kpi));
        if (kpi.completed) {
          this.completedKpis++;
        }
        this.totalKpis++;
      }
    );

    this.chartData = [this.completedKpis, this.totalKpis-this.completedKpis];

    this.projectService.changeSelectedProject(this.chartData);
    project.students.forEach(student =>
      this.formService.students(this.studentForm).push(this.formService.createFormStudent(student))
    )

    project.teachers.forEach(teacher =>
      this.formService.teachers(this.teacherForm).push(this.formService.createFormTeacher(teacher))
    )

  };




  legend = [
    "test1", "test2"
  ]


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

  data;
  constructor(private fb: FormBuilder,
              private projectService: ProjectService,
              private formService: FormService) {
    this.data = [
      { Value: 25, Label: "Residential" },
      { Value: 12, Label: "Heating" },
      { Value: 11, Label: "Lighting" },
      { Value: 18, Label: "Other" },
      { Value: 37, Label: "Cooling" }
    ];

  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.project.name = this.projectForm.get('name')?.value;
    this.project.id = this.projectForm.get('id')?.value;
    this.project.document = this.projectForm.get('document')?.value;
    this.project.comments = this.commentForm.get('comments')?.value;
    this.project.kpis = this.kpiForm.get('kpis')?.value;
    this.project.students = this.studentForm.get('students')?.value;
    this.project.teachers = this.teacherForm.get('teachers')?.value;

    this.projectService.updateProject(this.project).subscribe(response => console.log(response));
  }
}
