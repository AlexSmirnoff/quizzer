import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerFieldComponent } from './general/answer-field/answer-field.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AnswerSetComponent } from './general/answer-set/answer-set.component';
import { QuizRoundComponent } from './general/quiz-round/quiz-round.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { QuizRoundChainComponent } from './general/quiz-round-chain/quiz-round-chain.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerFieldComponent,
    AnswerSetComponent,
    QuizRoundComponent,
    NavbarComponent,
    QuizRoundChainComponent,
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
