import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DescriptionHistoryDTO} from '../../domain/DescriptionHistoryDTO';
import {MedicalServiceDTO} from '../../domain/MedicalServiceDTO';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-appointment',
  templateUrl: './request-appointment.component.html',
  styleUrls: ['./request-appointment.component.css']
})
export class RequestAppointmentComponent implements OnInit {

  @Input() id: string;
  @Input() medicalServices = new MedicalServiceDTO();
  @Output() sendIdDisplay = new EventEmitter<string>();
  currentDate: Date;
  item = new DescriptionHistoryDTO;
  serviceSelected = new DescriptionHistoryDTO;
  form: FormGroup;

  constructor(private _formBuilder: FormBuilder,
  ) {
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.form = this._formBuilder.group({
      description: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  selectService(id: string) {
    this.form.controls['description'].setValue(id);
    this.serviceSelected.description = id;
  }

  closeModal(id: string) {
    this.sendIdDisplay.emit(id);
  }

  requestAppointment() {
    this.item.description = 'jj';
  }
}
