import { Component, OnInit, Input } from '@angular/core';
import { UsedataService } from '../../services/usedata.service';
import { NbSortDirection, NbSortRequest } from '@nebular/theme';

@Component({
  selector: 'ngx-usecase1',
  templateUrl: './usecase1.component.html',
  styleUrls: ['./usecase1.component.scss'],
})

export class UseCase1Component implements OnInit {


  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(public service: UsedataService) {
  }



  ngOnInit() {
    this.service.ngxSingleInputFormat();
    console.log(this.service.series1);
  }

  data: any = this.service.series1;

  settings = {
    actions: false,
    columns: {
      area: {
        title: 'KI Technologie'
      },
      name: {
        title: 'Applikationsfelder / Branchen',
      },
      value: {
        title: 'Häufigkeit der Nennungen in Veröffentlichungen',
      },
  },
};


  //data: any = [{"area":"Deep Learning","name":"Cancer detection","value":3},{"area":"Deep Learning","name":"Technology Management","value":2},{"area":"Deep Learning","name":"HR","value":1},{"area":"Artificial Intelligence","name":"Cancer detection","value":2},{"area":"Artificial Intelligence","name":"Technology Management","value":3},{"area":"Artificial Intelligence","name":"HR","value":3}];


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


