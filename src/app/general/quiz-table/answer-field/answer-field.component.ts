import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnswerUpdate } from 'src/app/classes/anster-update';
import {AnswerState} from "src/app/classes/answer-state"
import { PointCountingService } from '../../point-counting.service';

@Component({
  selector: 'app-answer-field',
  templateUrl: './answer-field.component.html',
  styleUrls: ['./answer-field.component.css']
})
export class AnswerFieldComponent implements OnInit{
  private state = AnswerState.CORRECT;

  private static stateMap= new Map([
    [AnswerState.CORRECT, AnswerState.WRONG],
    [AnswerState.WRONG, AnswerState.EMPTY],
    [AnswerState.EMPTY, AnswerState.CORRECT]
  ]);
  
  @Input() pointMap = new Map([
    [AnswerState.CORRECT, 1],
    [AnswerState.WRONG, -1],
    [AnswerState.EMPTY, 0]
  ]);

  @Output() valueUpdate = new EventEmitter<AnswerUpdate>();

  ngOnInit(): void {
    this.valueUpdate.emit(new AnswerUpdate(0, this.pointMap.get(this.state)?? 0))
  }

  public onClick() {
    const oldPoints = this.pointMap.get(this.state)?? 0;
    this.state = AnswerFieldComponent.stateMap.get(this.state) ?? AnswerState.CORRECT;
    this.valueUpdate.emit(new AnswerUpdate(oldPoints, this.pointMap.get(this.state)?? 0));
  }

  public getCurrentStyle(): string {
    switch(this.state) {
      case AnswerState.CORRECT: return "correct";
      case AnswerState.WRONG: return "wrong";
      case AnswerState.EMPTY: return "empty";
    }
  }

  getState(): AnswerState {
    return this.state;
  }
}
