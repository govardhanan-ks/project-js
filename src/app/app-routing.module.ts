import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { LoginComponent }  from './login/login.component'
import  { VotingComponent }  from './voting/voting.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'toVote', component: VotingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
