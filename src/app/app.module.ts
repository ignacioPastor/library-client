import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyLibraryModule } from 'my-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
