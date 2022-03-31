import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdeaTeacherAssignmentComponent } from './udea-teacher-assignment.component';

describe('UdeaTeacherAssignmentComponent', () => {
  let component: UdeaTeacherAssignmentComponent;
  let fixture: ComponentFixture<UdeaTeacherAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdeaTeacherAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdeaTeacherAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
