import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdeaHomeComponent } from './udea-home.component';

describe('HomeComponent', () => {
  let component: UdeaHomeComponent;
  let fixture: ComponentFixture<UdeaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdeaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdeaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
