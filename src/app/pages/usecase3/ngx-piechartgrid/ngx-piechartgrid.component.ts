import { Component, OnInit } from '@angular/core';
import { Usedata3Service } from '../../../services/usedata3.service';

@Component({
  selector: 'ngx-piechartgrid',
  templateUrl: './ngx-piechartgrid.component.html',
  styleUrls: ['./ngx-piechartgrid.component.scss']
})
export class NgxPiechartgridComponent implements OnInit{

  constructor(public service: Usedata3Service) {
  }

  ngOnInit() {
    this.service.parseCSV();

  }



  single: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    }
  ];

  view: any[] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  onSelect(event) {
    console.log(event);
  }

}
