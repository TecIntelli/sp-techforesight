import { Component, OnInit } from '@angular/core';
/* import { multi } from '../../../../assets/data'; */
import { UsedataService } from '../../../services/usedata.service';

@Component({
  selector: 'ngx-d3heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss'],
  providers: [UsedataService],
})
export class D3HeatmapComponent implements OnInit {
  //single: any[];
  //multi: any[];


  constructor( public service: UsedataService ) { }



 ngOnInit() {
  // Methode aus Service muss eingelesen werden, ansonsten werden die Daten nicht geladen
  this.service.ngxInputFormat();
  }


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

  /* constructor() {
    Object.assign(this, {multi})
  }

  onSelect(event) {
    console.log(event);
  }
 */
}
