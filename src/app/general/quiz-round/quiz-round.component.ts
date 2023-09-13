import { Component, QueryList, ViewChildren } from '@angular/core';
import { AnswerSetComponent } from '../answer-set/answer-set.component';

@Component({
  selector: 'app-quiz-round',
  templateUrl: './quiz-round.component.html',
  styleUrls: ['./quiz-round.component.css']
})
export class QuizRoundComponent {
  rows = [0,0];
  cols = [0,0];

  @ViewChildren(AnswerSetComponent) sets = new QueryList<AnswerSetComponent>();

  public getTotalPoints() {
    return this.sets.reduce((p,c,i) => p + c.getTotalPoints(), 0);
  }

  public reset() {
    this.sets.forEach(set => set.setAllCorrect())
  }
}
