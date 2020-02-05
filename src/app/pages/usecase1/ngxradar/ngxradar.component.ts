import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { UsedataService } from '../../../services/usedata1.service';




@Component({
  selector: 'ngx-radar',
  templateUrl: './ngxradar.component.html',
  styleUrls: [ './ngxradar.component.scss' ],
  providers: [UsedataService],
})

export class NGXRadarComponent implements OnDestroy, OnInit {

  constructor(public service: UsedataService, private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnInit() {
    // Methode aus Service muss eingelesen werden, ansonsten werden die Daten nicht geladen
    this.service.ngxInputFormat();
    }

// Optionen zur Konfiguration des Radar Charts
  showLegend = true;
  legendPosition = 'below';
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


  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  onSelect(event) {
    console.log(event);
  }

}
