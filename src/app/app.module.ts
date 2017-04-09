import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDI8Z4OjcqCieD7GJp31_gV8zG92S9iV7g",
  authDomain: "hannah-2017e.firebaseapp.com",
  databaseURL: "https://hannah-2017e.firebaseio.com",
  projectId: "hannah-2017e",
  storageBucket: "hannah-2017e.appspot.com",
  messagingSenderId: "740973920753"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
