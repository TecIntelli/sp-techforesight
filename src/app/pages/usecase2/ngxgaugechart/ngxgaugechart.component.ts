import { Component, NgModule,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Usedata2Service } from '../../../services/usedata2.service';
import { SeriesItem } from '../../../models/datamodel';
import { Api2Service } from '../../../services/api2.service';

@Component({
  selector: 'ngx-gaugechart',
  templateUrl: './ngxgaugechart.component.html',
  styleUrls: ['./ngxgaugechart.component.scss'],
})
export class NgxGaugeChartComponent implements OnInit {

  constructor(public service: Usedata2Service, public api: Api2Service) { }

  ngOnInit() {
    // Methode aus Service muss eingelesen werden, ansonsten werden die Daten nicht geladen
    this.service.ngxInputFormat();
  }

// Gauge Chart
series1: any;
selectedItem;

// Je nach Option in diesem Beispiel die Kompetenzträger, wird das Chart angepasst
changeData(event) {
  // console.log(this.selectedItem);
   this.selectedItem = event;
   const series: Array <SeriesItem> = [];
    this.api.getData().subscribe(data => {
      data.elements.forEach((item, index) => {
        if ( item.parameter_1.value === this.selectedItem) {
        const seriesArr = {'area': item.parameter_1.value, 'name': item.parameter_2.value, 'value': item.parameter_3.value};
        series.push(seriesArr);
        }
      });
      this.series1 = series;
      // console.log(series);
      });
}

// Gauge Chart Optionen
  view: any[] = [800, 400];
  legend: boolean = true;
  legendPosition: string = 'below';
  legendTitle: string = 'Kompetenzträger';
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  /* onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  } */

}
