import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdeaKpiCreationComponent } from './udea-kpi-creation.component';

describe('UdeaKpiCreationComponent', () => {
  let component: UdeaKpiCreationComponent;
  let fixture: ComponentFixture<UdeaKpiCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdeaKpiCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdeaKpiCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
