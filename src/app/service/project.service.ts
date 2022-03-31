import { Injectable } from '@angular/core';
import {ProjectModel} from "../model/project.model";
import {CommentModel} from "../model/comment.model";
import {KpiModel} from "../model/kpi.model";
import {UserModel} from "../model/user.model";
import {urls} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {RoleModel} from "../model/role.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = urls.url;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  // @ts-ignore
  private _project: ProjectModel;
  get project(): ProjectModel {
    if (this._project === undefined) {
      this._project = Object.assign({});
    }
    return this._project;
  }

  setBasicInfo(name: string, document: string) {
    this.project.name = name;
    this.project.document = document;
  }

  setComments(comments: CommentModel[]) {
    this.project.comments= comments;
  }

  setKpis(kpis: KpiModel[]) {
    this.project.kpis= kpis;
  }

  setStudents(students: UserModel[]) {
    this.project.students= students;
  }

  setTeachers(teachers: UserModel[]) {
    this.project.teachers= teachers;
  }

  constructor(private http: HttpClient) { }

  saveProject() {
    console.log(this._project);
    return this.http.post<any>(`${this.baseUrl}/save`, this._project, { headers: this.headers })
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      )
  }
}
