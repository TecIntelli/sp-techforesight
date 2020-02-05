import { Component, OnInit, Input } from '@angular/core';
import { Usedata2Service } from '../../services/usedata2.service';
import { NbSortDirection, NbSortRequest } from '@nebular/theme';


@Component({
  selector: 'ngx-usecase2',
  templateUrl: './usecase2.component.html',
  styleUrls: ['./usecase2.component.scss'],
})
export class UseCase2Component implements OnInit {


  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(public service: Usedata2Service) {
  }

  ngOnInit() {
    this.service.ngxSingle1InputFormat();
  }

  // <-------------Datentabelle------------>
  settings = {
    actions: false,
    columns: {
      area: {
        title: 'Technologie',
      },
      name: {
        title: 'Kompetenzträger / Organisation',
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
