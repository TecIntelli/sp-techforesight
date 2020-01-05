import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { multi } from '../../../assets/data';




@Component({
  selector: 'ngx-radar',
  templateUrl: './ngxradar.component.html',
  styleUrls: [ './ngxradar.component.scss' ],
})

export class NGXRadarComponent implements OnDestroy {
  multi: any[];


  showLegend = true;
  legendPosition = 'below';
  showXAxis: boolean = true;
  showYAxis = true;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabel = '';
  yAxisLabel = '';
  colorScheme: any;
  themeSubscription: any;
  view: any[] = [600, 300];
  labelTrim: boolean = false;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
    Object.assign(this, { multi });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  onSelect(event) {
    console.log(event);
  }

}
