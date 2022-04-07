import {Injectable} from '@angular/core';
import {ProjectModel} from "../model/project.model";
import {urls} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, EMPTY, Observable, Subject, tap, throwError} from "rxjs";
import Swal from "sweetalert2";
import {REGISTERED_ERROR, REGISTERED_SUCCESSFULLY, UPDATED_ERROR, UPDATED_SUCCESSFULLY} from "../../assets/i18n/es";
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = urls.url;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient,
              private spinnerService: NgxSpinnerService,
              private router: Router) { }

  updateProject(project: ProjectModel) {
    this.spinnerService.show()
    console.log(project);
    return this.http.put<any>(`${this.baseUrl}/project/update`, project, { headers: this.headers })
      .pipe(
        catchError((err) => {
          if (err.status == 200) {
            this.spinnerService.hide();
            Swal.fire(UPDATED_SUCCESSFULLY.title, UPDATED_SUCCESSFULLY.content, 'success');
            this.reloadComponent()
            return EMPTY
          }
          this.spinnerService.hide();
          Swal.fire(UPDATED_ERROR.title, UPDATED_ERROR.content, 'error');
          console.log(err);
          this.reloadComponent();
          return throwError(err);
        })
      )
  }

  saveProject(project: ProjectModel) {
    console.log(project);
    return this.http.post<any>(`${this.baseUrl}/save`, project, { headers: this.headers })
      .pipe(
        catchError((err) => {
          if (err.status == 200) {
            Swal.fire(REGISTERED_SUCCESSFULLY.title, REGISTERED_SUCCESSFULLY.content, 'success');
            return EMPTY
          }

          Swal.fire(REGISTERED_ERROR.title, REGISTERED_ERROR.content, 'error');
          console.log(err);
          return throwError(err);
        })
      )
  }

  getProjects() {
    this.spinnerService.show();
    return this.http.get<ProjectModel[]>(`${this.baseUrl}/projects`, {headers: this.headers})
    .pipe(
      catchError((err) => {
        Swal.fire(REGISTERED_ERROR.title, REGISTERED_ERROR.content, 'error');
        console.log(err);
        return throwError(err);
      }),
      tap(() => this.spinnerService.hide())
    )}

  private selectedChart$ = new Subject<number[]>();
  selectedChartChanges$ = this.selectedChart$.asObservable();

  changeSelectedProject(selectedProject: number[]) {
    this.selectedChart$.next(selectedProject);
  }

  reloadComponent(): void {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/project/list']);
  }

}
