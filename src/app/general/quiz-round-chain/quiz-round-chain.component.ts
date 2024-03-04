import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { AnswerState } from 'src/app/classes/answer-state';
import { AnswerFieldComponent } from '../answer-field/answer-field.component';
import { AnswerSetComponent } from '../answer-set/answer-set.component';

@Component({
  selector: 'app-quiz-round-chain',
  templateUrl: './quiz-round-chain.component.html',
  styleUrls: ['./quiz-round-chain.component.css']
})
export class QuizRoundChainComponent {
    private states = new Array<AnswerState>(15).fill(AnswerState.CORRECT);

    indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    points = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    @ViewChildren(AnswerFieldComponent) answers = new QueryList<AnswerFieldComponent>();

    stateMap = new Map([
      [AnswerState.CORRECT, AnswerState.EMPTY],
      [AnswerState.EMPTY, AnswerState.CORRECT]
    ]);

    stateChanged(position: number, state: AnswerState): void {
        this.states[position] = state;
        let previous = 0;
        for (let i = 0; i < this.points.length; i++) {
          if (this.states[i] === AnswerState.CORRECT) {
            previous++;
          } else {
            previous = 0;
          }
          this.points[i] = previous;
        }
    }

    getTotalPoints(): number {
      return this.points.reduce((a,b) => a + b, 0);
    }

    private setAnswersTo(newState: AnswerState) {
      this.answers.forEach(r => r.setState(newState))
      this.states.fill(newState);
    }
  
    public setAllCorrect() {
      this.setAnswersTo(AnswerState.CORRECT);
    }
  
    public setAllEmpty() {
      this.setAnswersTo(AnswerState.EMPTY);
    }
}
