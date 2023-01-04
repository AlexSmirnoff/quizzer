import { Component } from '@angular/core';
import { AnswerUpdate } from 'src/app/classes/anster-update';

@Component({
  selector: 'app-quiz-round',
  templateUrl: './quiz-round.component.html',
  styleUrls: ['./quiz-round.component.css']
})
export class QuizRoundComponent {
  public rowAmount = 2;
  public colAmount = 2;

  public rows = Array(this.rowAmount).fill(0);
  public cols = Array(this.colAmount).fill(0);

  private total = 0;

  public onValueUpdate(update: AnswerUpdate) {
    this.total = this.total - update.oldValue + update.newValue;
  }

  public getTotal() {
    return this.total;
  }
}
