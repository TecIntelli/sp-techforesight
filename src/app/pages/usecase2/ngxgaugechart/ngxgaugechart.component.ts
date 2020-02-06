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
  providers: [Usedata2Service, Api2Service],
})

export class NgxGaugeChartComponent implements OnInit {

  constructor(public service: Usedata2Service, public api: Api2Service) { }

  ngOnInit() {
    // Methode aus Service muss eingelesen werden, ansonsten werden die Daten nicht geladen
    this.service.ngxInputFormat();
  }


series1: any;
selectedItem;

// Je nach Wahl einer Option aus dem Select im HTML (in diesem Beispiel die Kompetenzträger), werden die Daten im Gauge Chart angepasst
changeData(event) {
  // console.log(this.selectedItem);
   this.selectedItem = event;
   const series: Array <SeriesItem> = [];
    this.api.getData().subscribe(data => {
      data.elements.forEach((item, index) => {
        // reagiert auf die Auswahl über das Select in der Oberfläche
        if ( item.parameter_1.value === this.selectedItem) {
        // setzt die Daten im gewünschten Input Format zusammen
        const seriesArr = {'area': item.parameter_1.value, 'name': item.parameter_2.value, 'value': item.parameter_3.value};
        series.push(seriesArr);
        }
      });
      this.series1 = series;
      // console.log(series);
      });
}

// Optionen zur Konfiguration des Gauge Charts
  view: any[] = [900, 300];
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
