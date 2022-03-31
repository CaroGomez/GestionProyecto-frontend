import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdeaProjectRegistrationComponent } from './udea-project-registration.component';

describe('UdeaProjectRegistrationComponent', () => {
  let component: UdeaProjectRegistrationComponent;
  let fixture: ComponentFixture<UdeaProjectRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdeaProjectRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdeaProjectRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
