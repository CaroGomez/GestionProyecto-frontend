import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdeaChartComponent } from './udea-chart.component';

describe('UdeaChartComponent', () => {
  let component: UdeaChartComponent;
  let fixture: ComponentFixture<UdeaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdeaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdeaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
