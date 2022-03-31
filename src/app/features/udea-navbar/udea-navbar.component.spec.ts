import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdeaNavbarComponent } from './udea-navbar.component';

describe('UdeaNavbarComponent', () => {
  let component: UdeaNavbarComponent;
  let fixture: ComponentFixture<UdeaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdeaNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdeaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
