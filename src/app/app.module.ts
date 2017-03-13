import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from "@angular/material";

import {AppComponent} from './app.component';

import 'hammerjs';
import {DiplomasComponent} from './diplomas/diplomas.component';
import {DiplomaItemComponent} from './diploma-item/diploma-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DiplomasComponent,
    DiplomaItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
