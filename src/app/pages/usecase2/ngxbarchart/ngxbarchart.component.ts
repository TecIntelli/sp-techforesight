import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbThemeService } from '@nebular/theme';
import { Usedata2Service } from '../../../services/usedata2.service';

@Component({
  selector: 'ngxbarchart',
  templateUrl: './ngxbarchart.component.html',
  styleUrls: ['./ngxbarchart.component.scss'],
  providers: [Usedata2Service],
})

/*
Komponente umfasst Bar Chart
*/

export class NGXBarChartComponent implements OnInit {

  // constructor beinhaltet neben dem Service, auch Funktion um Farbenkombination aus NbThemeService auszulesen
  constructor(public service: Usedata2Service, private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

 ngOnInit() {
  // Methode aus Service muss eingelesen werden, ansonsten werden die Daten aus dem "/services/usedata2.service" nicht geladen
  this.service.ngxInputFormat();
  }

  // Optionen zur Konfiguration des Bar Charts
  view: any[] = [900, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Technologie';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Häufigkeit der Nennungen in Veröffentlichungen';
  legendTitle: string = 'Kompetenzträger / Organisation';
  legendPosition: string = 'below';
  colorScheme: any;
  themeSubscription: any;

/*
 onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
*/

}
