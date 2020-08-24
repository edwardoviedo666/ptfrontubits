import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/layouts/page-not-found/page-not-found.component';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: './components/components.module#ComponentsModule'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
