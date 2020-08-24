import {Component, Input, OnInit} from '@angular/core';
import {DescriptionHistoryDTO} from '../../domain/DescriptionHistoryDTO';

@Component({
  selector: 'app-items-history',
  templateUrl: './items-history.component.html',
  styleUrls: ['./items-history.component.css']
})
export class ItemsHistoryComponent implements OnInit {

  @Input() items = new Array<DescriptionHistoryDTO>();

  constructor() {
  }

  ngOnInit() {
    this.changeItems();
  }

  changeItems() {
    for (let item of this.items) {
      switch (item.description) {
        case 'vacunacion':
          item.icon = ' icon-syringe color-purple font-30';
          break;
        case 'consulta':
          item.icon = 'icon-local_hospital color-blue icon-circle font-30';
          break;
        case 'corte de pelo':
          item.icon = ' icon-content_cut color-coral font-30';
          break;
      }
    }
  }
}
