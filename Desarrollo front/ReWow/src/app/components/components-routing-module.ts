import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';
import {HistoryComponent} from './history/history.component';
import {PetDataComponent} from './pet-data/pet-data.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {RequestAppointmentComponent} from './request-appointment/request-appointment.component';

const componentsRoutes: Routes = [
  { path: 'mascota', component: PetDataComponent },
  { path: '', redirectTo: 'mascota', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'historia',
        component: HistoryComponent
      },
      {
        path: 'citas',
        component: AppointmentComponent
      },
      {
        path: 'solicitarCita',
        component: RequestAppointmentComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(componentsRoutes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}


