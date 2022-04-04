import {Injectable} from '@angular/core';
import {ProjectModel} from "../model/project.model";
import {urls} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = urls.url;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  saveProject(project: ProjectModel) {
    console.log(project);
    return this.http.post<any>(`${this.baseUrl}/save`, project, { headers: this.headers })
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      )
  }
}
