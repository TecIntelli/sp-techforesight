import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { UsedataService } from '../../../services/usedata1.service';


/*
Komponente umfasst Radar Chart
*/


@Component({
  selector: 'ngx-radar',
  templateUrl: './ngxradar.component.html',
  styleUrls: [ './ngxradar.component.scss' ],
  providers: [UsedataService],
})

export class NGXRadarComponent implements OnDestroy, OnInit {

  // constructor beinhaltet neben dem Service, auch Funktion um Farbenkombination aus NbThemeService auszulesen
  constructor(public service: UsedataService, private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnInit() {
    // Methode aus Service muss eingelesen werden, ansonsten werden die Daten aus dem "/services/usedata1.service" nicht geladen
    this.service.ngxInputFormat();
    }

// Optionen zur Konfiguration des Radar Charts
  showLegend = true;
  legendPosition = 'below'; // Steuerung der Legenden Position
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabel = '';
  yAxisLabel = '';
  colorScheme: any;
  themeSubscription: any;
  view: any[] = [600, 300];
  labelTrim = false;


  // Funktionen ngOnDestroy() + onSelect(event) ermöglichen Interaktion im jeweiligen Chart --> in diesem Fall noch nicht ausprogrammiert
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  // Funktion würde bei Select auf Chart ein Event auslösen --> Event ist in diesem Fall ein console.log
  onSelect(event) {
    console.log(event);
  }

}
