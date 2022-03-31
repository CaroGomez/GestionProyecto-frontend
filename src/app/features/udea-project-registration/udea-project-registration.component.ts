import { Component, OnInit } from '@angular/core';
import {ProjectModel} from "../../model/project.model";
import {ProjectService} from "../../service/project.service";

@Component({
  selector: 'app-udea-project-registration',
  templateUrl: './udea-project-registration.component.html',
  styleUrls: ['./udea-project-registration.component.scss']
})
export class UdeaProjectRegistrationComponent implements OnInit {
  project: ProjectModel = Object.assign({});
  isEdit: boolean = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.projectService.setBasicInfo(this.project.name, this.project.document);
    this.projectService.saveProject().subscribe();
  }



}
