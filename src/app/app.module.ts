import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyBPaYA_YdxsC_17QbDXRN9Y6UMyUh9s0XQ',
  authDomain: 'mychatapp-11697.firebaseapp.com',
  databaseURL: 'https://mychatapp-11697.firebaseio.com',
  projectId: 'mychatapp-11697',
  storageBucket: 'mychatapp-11697.appspot.com',
  messagingSenderId: '1093129649196'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
