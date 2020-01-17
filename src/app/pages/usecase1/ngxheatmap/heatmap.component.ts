import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { multi } from '../../../../assets/data';

@Component({
  selector: 'ngx-d3heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss'],
})
export class D3HeatmapComponent {
  single: any[];
  multi: any[];

  view: any[] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true; // Legende ein-/ausblenden
  showXAxisLabel = true;
  xAxisLabel = 'Technologie';
  showYAxisLabel = true;
  yAxisLabel = 'Applikationsfelder/ Branchen';
  colorScheme = {
    domain: ['#66e4e8', '#66a9e8', '#077cdb', '#8509e3']
  };
  trimXAxisTicks = false;
  trimYAxisTicks = false;

  constructor() {
    Object.assign(this, {multi})
  }

  onSelect(event) {
    console.log(event);
  }

}
