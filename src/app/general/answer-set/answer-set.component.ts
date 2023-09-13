import { AfterViewInit, Component, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnswerFieldComponent } from '../answer-field/answer-field.component';
import { AnswerState } from 'src/app/classes/answer-state';

@Component({
  selector: 'app-answer-set',
  templateUrl: './answer-set.component.html',
  styleUrls: ['./answer-set.component.css']
})
export class AnswerSetComponent {
  mults = [10,20,30,40,50]

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
