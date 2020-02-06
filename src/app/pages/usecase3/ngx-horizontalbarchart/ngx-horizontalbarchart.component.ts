import { Component, OnInit } from '@angular/core';
import { Usedata3Service } from '../../../services/usedata3.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-barchartgrid',
  templateUrl: './ngx-horizontalbarchart.component.html',
  styleUrls: ['./ngx-horizontalbarchart.component.scss'],
  providers: [Usedata3Service],
})

export class NgxHorizontalBarChartComponent implements OnInit {

  constructor(public service: Usedata3Service, private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnInit() {
    this.service.parseCSV();
  }

  // Optionen zur Konfiguration des Horizontal Bar Charts
  view: any[] = [700, 600];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Bundesland';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Fördersumme';
  barPadding: number = 0;
  colorScheme: any;
  themeSubscription: any;
}
