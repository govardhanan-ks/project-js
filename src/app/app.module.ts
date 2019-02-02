import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';

import { LoginComponent } from './login/login.component';
import { VotingComponent } from './voting/voting.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VotingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule,MatCardModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
