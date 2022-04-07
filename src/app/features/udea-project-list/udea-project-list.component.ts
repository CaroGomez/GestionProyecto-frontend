import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../service/project.service";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'app-udea-project-list',
  templateUrl: './udea-project-list.component.html',
  styleUrls: ['./udea-project-list.component.scss']
})
export class UdeaProjectListComponent implements OnInit {

  isItemSelected = false;
  $Projects = this.projectService.getProjects();
  selectedProject = Object.assign({});
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  onSelectedProject(project: ProjectModel) {
    this.selectedProject = project;
    this.isItemSelected = true;
  }
}
