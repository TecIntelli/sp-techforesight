import { Component, OnInit } from '@angular/core';
import { Usedata3Service } from '../../../services/usedata3.service';
import { SeriesItem } from '../../../models/datamodel';

@Component({
  selector: 'ngx-piechartgrid',
  templateUrl: './ngx-piechartgrid.component.html',
  styleUrls: ['./ngx-piechartgrid.component.scss']
})
export class NgxPiechartgridComponent implements OnInit{

  constructor(public service: Usedata3Service) {
  }

  ngOnInit() {
    // zum Test ob die Daten aus dem Observable auslesen kann, funktioniert aber nicht
    this.service.Data$.subscribe(data => console.log('New DATA: ' + data));

  }

series1: Array <SeriesItem> = [];


// hier mache ich irgendwas falsch
/* ngxSingleFormat() {
  this.series1 = [];
  this.service.Data$.subscribe(data => {
    data.forEach((item, index) => {
      //if( item.parameter_1.value === 'Deep Learning') {
      const seriesArr = {"name": data.FKZ, "value": data.value};
      this.series1.push(seriesArr);
      //}
    });
    //console.log(this.series1);

    });
  } */



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
