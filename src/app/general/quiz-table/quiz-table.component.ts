import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnswerUpdate } from 'src/app/classes/anster-update';
import { AnswerState } from 'src/app/classes/answer-state';
import { PointCountingService } from '../point-counting.service';
import { AnswerFieldComponent } from './answer-field/answer-field.component';

@Component({
  selector: 'app-quiz-table',
  templateUrl: './quiz-table.component.html',
  styleUrls: ['./quiz-table.component.css'],
  providers: [PointCountingService]
})
export class QuizTableComponent implements OnInit{
  private total = 0;

  @Output() valueUpdate = new EventEmitter<AnswerUpdate>();

  ngOnInit(): void {
    this.valueUpdate.emit(new AnswerUpdate(0, this.total))
  }

  public getPointsForState(state: AnswerState, multiplier: number): number {
    return state * multiplier;
  }

  public getPointMap(mult: number): Map<AnswerState, number> {
    return new Map([
      [AnswerState.CORRECT, mult],
      [AnswerState.EMPTY, 0],
      [AnswerState.WRONG, -mult]
    ]);
  }

  public getTotal() {
    return this.total;
  }

  public onValueUpdate(update: AnswerUpdate) {
    const oldTotal = this.total;
    this.total = this.total - update.oldValue + update.newValue;
    this.valueUpdate.emit(new AnswerUpdate(oldTotal, this.total))
  }
}
