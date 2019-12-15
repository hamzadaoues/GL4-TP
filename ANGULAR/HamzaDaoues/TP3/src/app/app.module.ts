import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CvComponentComponent} from './cv-component/cv-component.component';
import {ListeComponentComponent} from './liste-component/liste-component.component';
import {ItemComponentComponent} from './item-component/item-component.component';
import {DetailComponentComponent} from './detail-component/detail-component.component';
import {EmbaucheServiceService} from './embauche-service.service';
import {EmbaucheComponent} from './embauche/embauche.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CvComponentComponent,
    ListeComponentComponent,
    ItemComponentComponent,
    DetailComponentComponent,
    EmbaucheComponent,
    HeaderComponent,
    CvDetailComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmbaucheServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
