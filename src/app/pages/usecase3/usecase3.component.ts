import { Component, OnInit, ViewChild } from '@angular/core';
import { NbSortDirection, NbSortRequest } from '@nebular/theme';
import { Usedata3Service } from '../../services/usedata3.service';


@Component({
  selector: 'usecase3',
  templateUrl: './usecase3.component.html',
  styleUrls: ['./usecase3.component.scss']
})
export class UseCase3Component implements OnInit{


  csvRecords: any[] = [];
  csvRecords1: any;
  header = true;
  delimiter = '';

  constructor(public service: Usedata3Service) {
  }

  ngOnInit() {
      this.service.parseCSV();
   }


// Settings Datentabelle

sortColumn: string;
sortDirection: NbSortDirection = NbSortDirection.NONE;

  settings = {
    actions: false,
    columns: {
      Ressort: {
        title: 'Ressort',
      },
      Zuwendungsempfaenger: {
        title: 'Zuwendungsempfänger',
      },
      Ort: {
        title: 'Ort',
      },
      Land: {
        title: 'Land',
      },
      Staat: {
        title: 'Staat',
      },
      AusfuehrendeStelle: {
        title: 'Ausführende Stelle',
      },
      Thema: {
        title: 'Thema',
      },
      KlartextLeistungsplansystematik: {
        title: 'Klartext Leistungsplansystematik',
      },
      LaufzeitVon: {
        title: 'Laufzeit Von',
      },
      LaufzeitBis: {
        title: 'Laufzeit bis',
      },
      FoerdersummeInEUR: {
        title: 'Fördersumme in EUR',
      },
      Foerderprofil: {
        title: 'Förderprofil',
      },
      Verbundprojekt: {
        title: 'Verbundprojekt',
      },
  },
};

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }



  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }


}
