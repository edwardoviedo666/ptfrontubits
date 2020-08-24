import {Component, OnInit} from '@angular/core';
import {DescriptionHistoryDTO} from '../../domain/DescriptionHistoryDTO';
import {ModalService} from '../_modal';
import {MedicalServiceDTO} from '../../domain/MedicalServiceDTO';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  medicalServices = new Array<MedicalServiceDTO>();
  items = new Array<DescriptionHistoryDTO>();
  display: boolean;

  constructor(private modalService: ModalService) {
    this.medicalServices = [
      {
        id: '1',
        name: 'corte de pelo'
      },
      {
        id: '2',
        name: 'vacunación'
      },
      {
        id: '3',
        name: 'consulta'
      }
    ];
  }

  ngOnInit() {
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
}
