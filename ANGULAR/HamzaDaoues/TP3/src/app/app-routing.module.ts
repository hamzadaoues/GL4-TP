import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CvComponentComponent} from './cv-component/cv-component.component';
import {EmbaucheComponent} from './embauche/embauche.component';
import {CvDetailComponent} from './cv-detail/cv-detail.component';

const routes: Routes = [
  {path: 'cv', component: CvComponentComponent},
  {path: 'embauche', component: EmbaucheComponent},
  {path: 'cvdetail/:id', component: CvDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
