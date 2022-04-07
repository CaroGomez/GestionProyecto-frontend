import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdeaProjectListComponent } from './udea-project-list.component';

describe('ProyectListComponent', () => {
  let component: UdeaProjectListComponent;
  let fixture: ComponentFixture<UdeaProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdeaProjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdeaProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
