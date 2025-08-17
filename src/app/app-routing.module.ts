import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizRoundComponent } from './general/quiz-round/quiz-round.component';
import { QuizRoundChainComponent } from './general/quiz-round-chain/quiz-round-chain.component';
import { QuizRoundAlphabetComponent } from './general/quiz-round-alphabet/quiz-round-alphabet.component';
import { QuizRoundFinalsComponent } from './general/quiz-round-finals/quiz-round-finals.component';

const routes: Routes = [
  {path: 'default', component: QuizRoundComponent},
  {path: 'chain', component: QuizRoundChainComponent},
  {path: 'alphabet', component: QuizRoundAlphabetComponent},
  {path: 'finals', component: QuizRoundFinalsComponent},
  {path: '', redirectTo: 'default', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
