import { Component, OnInit } from '@angular/core';
import { UsedataService } from '../../../services/usedata1.service';


@Component({
  selector: 'ngx-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss'],
  providers: [UsedataService],
})
export class NGXHeatmapComponent implements OnInit {
  //single: any[];
  //multi: any[];


  constructor( public service: UsedataService ) { }



 ngOnInit() {
  // Methode aus Service muss eingelesen werden, ansonsten werden die Daten nicht geladen
  this.service.ngxInputFormat();
  }


  view: any[] = [600, 400];

  // Optionen zur Konfiguration des Heatmap
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

}
