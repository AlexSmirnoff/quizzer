import { Component, QueryList, ViewChildren } from '@angular/core';
import { AnswerState } from 'src/app/classes/answer-state';
import { AnswerFieldComponent } from '../answer-field/answer-field.component';

@Component({
  selector: 'app-quiz-round-finals',
  templateUrl: './quiz-round-finals.component.html',
  styleUrls: ['./quiz-round-finals.component.css']
})
export class QuizRoundFinalsComponent {
    indices = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

      @ViewChildren(AnswerFieldComponent) rows = new QueryList<AnswerFieldComponent>();
    
      public getTotalPoints(): number {
        return this.rows.reduce((prev, curr, i) => prev + curr.getPoints(), 0);
      }
    
      private setAnswersTo(newState: AnswerState) {
        this.rows.forEach(r => r.setState(newState))
      }
    
      public setAllWrong() {
        this.setAnswersTo(AnswerState.WRONG);
      }
    
      public setAllCorrect() {
        this.setAnswersTo(AnswerState.CORRECT);
      }
    
      public setAllEmpty() {
        this.setAnswersTo(AnswerState.EMPTY);
      }
}
