import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdeaCommentCreationComponent } from './udea-comment-creation.component';

describe('UdeaCommentCreationComponent', () => {
  let component: UdeaCommentCreationComponent;
  let fixture: ComponentFixture<UdeaCommentCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdeaCommentCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdeaCommentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
