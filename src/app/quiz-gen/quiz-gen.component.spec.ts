import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGenComponent } from './quiz-gen.component';

describe('QuizGenComponent', () => {
  let component: QuizGenComponent;
  let fixture: ComponentFixture<QuizGenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizGenComponent]
    });
    fixture = TestBed.createComponent(QuizGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
