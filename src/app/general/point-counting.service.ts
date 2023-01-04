import { Injectable } from '@angular/core';

@Injectable()
export class PointCountingService {
  private score = 0;

  public getScore() {
    return this.score;
  }

  public updateAnswerPoints(newValue: number, oldValue = 0) {
    this.score = this.score - oldValue + newValue;
  }
}
