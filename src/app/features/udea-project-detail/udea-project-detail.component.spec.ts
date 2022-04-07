import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdeaProjectDetailComponent } from './project-detail.component';

describe('ProjectDetailComponent', () => {
  let component: UdeaProjectDetailComponent;
  let fixture: ComponentFixture<UdeaProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdeaProjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdeaProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
