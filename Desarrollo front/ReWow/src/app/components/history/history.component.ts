import {Component, OnInit} from '@angular/core';
import {DescriptionHistoryDTO} from '../../domain/DescriptionHistoryDTO';
import {PetDTO} from '../../domain/PetDTO';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  items = new Array<DescriptionHistoryDTO>();
  pet: PetDTO;

  constructor() {
    this.items=[
      {
        description : 'vacunacion',
        date : new Date(),
      },
      {
        description : 'consulta',
        date : new Date(),
      },
      {
        description : 'corte de pelo',
        date : new Date(),
      },
    ]
  }

  ngOnInit() {
  }

}
