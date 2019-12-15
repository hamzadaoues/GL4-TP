import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { ColorInputDirective } from './color-input.directive';
import { Exercice3Component } from './exercice3/exercice3.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    Exercice2Component,
    ColorInputDirective,
    Exercice3Component
  ],
  imports: [
    BrowserModule , FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
