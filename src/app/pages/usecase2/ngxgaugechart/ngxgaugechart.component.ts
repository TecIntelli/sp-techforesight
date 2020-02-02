import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Usedata1Service } from '../../../services/usedata1.service';

@Component({
  selector: 'ngx-bubblechart',
  templateUrl: './ngxgaugechart.component.html',
  styleUrls: ['./ngxgaugechart.component.scss'],
})
export class NgxGaugeChartComponent implements OnInit {

  constructor(public service: Usedata1Service) { }

  ngOnInit() {
    // Methode aus Service muss eingelesen werden, ansonsten werden die Daten nicht geladen
    this.service.ngxSingleInputFormat();
  }


  view: any[] = [800, 400];
  legend: boolean = true;
  legendPosition: string = 'below';
  legendTitle: string = 'Kompetenzträger';


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };



  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
