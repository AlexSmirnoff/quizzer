import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizTableComponent } from './general/quiz-table/quiz-table.component';
import { AnswerFieldComponent } from './general/quiz-table/answer-field/answer-field.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { QuizRoundComponent } from './general/quiz-round/quiz-round.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizTableComponent,
    AnswerFieldComponent,
    QuizRoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
