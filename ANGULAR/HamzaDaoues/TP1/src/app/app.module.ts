import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { ListeComponentComponent } from './liste-component/liste-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponentComponent,
    ListeComponentComponent,
    ItemComponentComponent,
    DetailComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
