import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {ComponentsModule} from './components/components.module';
import {LayoutsModule} from './components/layouts/layouts.module';

import {PageNotFoundComponent} from './components/layouts/page-not-found/page-not-found.component';
import {ModalModule} from './components/_modal';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule,
    ModalModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
