import { Component, OnInit, Input } from '@angular/core';
import { UsedataService } from '../../services/usedata1.service';
import { NbSortDirection, NbSortRequest } from '@nebular/theme';

@Component({
  selector: 'ngx-usecase1',
  templateUrl: './usecase1.component.html',
  styleUrls: ['./usecase1.component.scss'],
})


/*
Komponente umfasst Datentabelle zur Datenübersicht
*/


export class UseCase1Component implements OnInit {


  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(public service: UsedataService) {
  }


  ngOnInit() {
    this.service.ngxSingleInputFormat();
    /*
      beim ersten Aufruf ist die Variable series1 noch leer, da der console Aufruf nicht wartet bis die Daten vom API-Aufruf zurück sind
      darum würde ich hier mit Observables arbeiten, die ein asynchrones Arbeiten ermöglichen (siehe usedate.service.ts)
      das erzeugte Observable kannst du dann einfach in dein HTML Template mit einer async-Pipe einbauen
      sobald die Daten über den Service geändert werden, werden sie auch in der Lautzeit im Template automatisch aktualisiert
    */

    // console.log(this.service.series1);
  }

/* <--------Datentabelle--------->
    Settings für die Datentabelle
    actions: die Opotion erlaubt das Ein-/Ausblenden einer Tabelle zur Zeilenbearbeitung
    columns: müssen mit dem Namenswerten aus dem Array übereinstimmen --> der Titel kann individuell vergeben werden, ist jedoch Hardcoded, d. h. nicht dynamisch
*/

  settings = {
    actions: false,
    columns: {
      area: {
        title: 'Technologie',
      },
      name: {
        title: 'Applikationsfelder / Branchen',
      },
      value: {
        title: 'Häufigkeit der Nennungen in Veröffentlichungen',
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


