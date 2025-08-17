import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AnswerState } from 'src/app/classes/answer-state';
import { AnswerFieldComponent } from '../answer-field/answer-field.component';

@Component({
  selector: 'app-quiz-round-alphabet',
  templateUrl: './quiz-round-alphabet.component.html',
  styleUrls: ['./quiz-round-alphabet.component.css']
})
export class QuizRoundAlphabetComponent implements OnInit {

  @ViewChildren(AnswerFieldComponent) rows = new QueryList<AnswerFieldComponent>();
  indices = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  selectedString = ''
  selectedIndices: Array<Number> = []

  stateMap = new Map([
      [AnswerState.CORRECT, AnswerState.EMPTY],
      [AnswerState.EMPTY, AnswerState.CORRECT]
    ]);

  ngOnInit(): void {
    var stored = localStorage.getItem('multipliedIndices')
    if (stored == null) {
      stored = "[]"
    }
    this.selectedIndices = JSON.parse(stored)
    var asJSON = JSON.stringify(this.selectedIndices)
    this.selectedString = asJSON.substring(1, asJSON.length - 1)
  }

  public getTotalPoints(): number {
    return this.rows.reduce((prev, curr, i) => prev + curr.getState() * this.getMultiplier(i + 1), 0);
  }

  public setSelectedIndices(indicesString: String) {
    var indices = this.parseSelectedString(indicesString)
    this.selectedIndices = indices;
    localStorage.setItem('multipliedIndices', JSON.stringify(indices))
  }

  public getMultiplier(index: Number) {
    if (this.isIndexSelected(index)) {
      return 2;
    } else {
      return 1;
    }
  }

  private parseSelectedString(selected: String): Array<Number> {
    if(selected.length == 0) {
      return []
    }
    return selected.split(',').map(num => Number(num)).filter(num => num != null && num != 0)
  }

  public isIndexSelected(index: Number) {
    return this.selectedIndices.some(i => i == index)
  }

  private setAnswersTo(newState: AnswerState) {
    this.rows.forEach(r => r.setState(newState))
  }

  public setAllCorrect() {
    this.setAnswersTo(AnswerState.CORRECT);
  }

  public setAllEmpty() {
    this.setAnswersTo(AnswerState.EMPTY);
  }
}
