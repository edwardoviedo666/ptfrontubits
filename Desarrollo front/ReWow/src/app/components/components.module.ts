import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {ComponentsRoutingModule} from './components-routing-module';
import {LayoutsModule} from './layouts/layouts.module';
import {ModalModule} from './_modal';


import {MainComponent} from './main/main.component';
import {HistoryComponent} from './history/history.component';
import {PetDataComponent} from './pet-data/pet-data.component';
import {AppointmentComponent} from './appointment/appointment.component';
import { ItemsHistoryComponent } from './items-history/items-history.component';
import {RequestAppointmentComponent} from './request-appointment/request-appointment.component';



@NgModule({
  declarations: [
    MainComponent,
    HistoryComponent,
    AppointmentComponent,
    PetDataComponent,
    ItemsHistoryComponent,
    RequestAppointmentComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LayoutsModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule
  ]
})
export class ComponentsModule {
}
