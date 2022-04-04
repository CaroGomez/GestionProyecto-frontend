import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdeaStudentAssignmentComponent } from './udea-student-assignment.component';

describe('UdeaStudentAssignmentComponent', () => {
  let component: UdeaStudentAssignmentComponent;
  let fixture: ComponentFixture<UdeaStudentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdeaStudentAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdeaStudentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
