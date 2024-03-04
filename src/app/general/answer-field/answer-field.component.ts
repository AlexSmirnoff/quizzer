import { Component, EventEmitter, Input, Output } from '@angular/core';
import {AnswerState} from "src/app/classes/answer-state"

@Component({
  selector: 'app-answer-field',
  templateUrl: './answer-field.component.html',
  styleUrls: ['./answer-field.component.css']
})
export class AnswerFieldComponent {
  private state = AnswerState.CORRECT;

  @Output() stateChanged = new EventEmitter<AnswerState>();

  @Input()
  stateMap = new Map([
    [AnswerState.CORRECT, AnswerState.WRONG],
    [AnswerState.WRONG, AnswerState.EMPTY],
    [AnswerState.EMPTY, AnswerState.CORRECT]
  ]);
  
  @Input() multiplier = 1;

  public onClick() {
    this.setState(this.stateMap.get(this.state) ?? AnswerState.CORRECT);
  }

  public getCurrentStyle(): string {
    switch(this.state) {
      case AnswerState.CORRECT: return "correct";
      case AnswerState.WRONG: return "wrong";
      case AnswerState.EMPTY: return "empty";
    }
  }

  public getPoints(): number {
    return this.state * this.multiplier;
  }

  public setState(newState: AnswerState): void {
    this.state = newState;
    this.stateChanged.emit(newState);
  }
}
