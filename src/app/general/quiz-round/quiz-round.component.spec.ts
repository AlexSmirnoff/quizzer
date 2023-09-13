import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRoundComponent } from './quiz-round.component';

describe('QuizRoundComponent', () => {
  let component: QuizRoundComponent;
  let fixture: ComponentFixture<QuizRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizRoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
