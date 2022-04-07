import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {KpiModel} from "../../../model/kpi.model";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-udea-kpi-creation',
  templateUrl: './udea-kpi-creation.component.html',
  styleUrls: ['./udea-kpi-creation.component.scss']
})
export class UdeaKpiCreationComponent implements OnInit {
  @Input()
  kpiForm: FormGroup = this.fb.group({});
  kpisList: KpiModel[] = [];
  get kpis(): FormArray {
    return this.kpiForm.get('kpis') as FormArray;
  }
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    // this.kpiService
    //   .getKpi(this.idSelectedPatient.toString())
    //   .subscribe((kpis) => {
    //     kpis.forEach((kpi) => {
    //       this.kpis.push(this.createFormKpi(kpi));
    //     });
    //   });
  }

  addKpi(): void {
    this.kpis.push(this.createForm());
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: null,
      name: ['', Validators.required],
      description: '',
      completed: false
    });
  }

  deleteKpi(kpi: AbstractControl, index: number): void {
    this.kpis.removeAt(index);
  }
}
