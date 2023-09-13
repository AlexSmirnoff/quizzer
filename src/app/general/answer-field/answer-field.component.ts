import { Component, Input } from '@angular/core';
import {AnswerState} from "src/app/classes/answer-state"
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-answer-field',
  templateUrl: './answer-field.component.html',
  styleUrls: ['./answer-field.component.css']
})
export class AnswerFieldComponent {
  state = AnswerState.CORRECT;

  private static stateMap= new Map([
    [AnswerState.CORRECT, AnswerState.WRONG],
    [AnswerState.WRONG, AnswerState.EMPTY],
    [AnswerState.EMPTY, AnswerState.CORRECT]
  ]);
  
  @Input() multiplier = 1;

  public onClick() {
    this.state = AnswerFieldComponent.stateMap.get(this.state) ?? AnswerState.CORRECT;
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
  }
}
