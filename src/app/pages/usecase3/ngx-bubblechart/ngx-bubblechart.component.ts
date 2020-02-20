import { Component, OnInit } from '@angular/core';
import { Usedata3Service } from '../../../services/usedata3.service';
import { NbThemeService } from '@nebular/theme';

import { Papa } from 'ngx-papaparse';
import { MultiItem, SeriesItem } from '../../../models/datamodelbubblechart';


/*
Komponente umfasst Bubble Chart
*/

@Component({
  selector: 'ngx-bubblechart',
  templateUrl: './ngx-bubblechart.component.html',
  styleUrls: ['./ngx-bubblechart.component.scss'],
  providers: [Usedata3Service],
})

export class NgxBubbleChartComponent implements OnInit {

  // Farbkombination aus NbThemeService wird im constructor ausgelesen
  constructor(public service: Usedata3Service, private theme: NbThemeService, private papa: Papa) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

// Optionen zur Konfiguration des Bubble Charts
showXAxis: boolean = true;
showYAxis: boolean = true;
gradient: boolean = false;
showLegend: boolean = false;
showXAxisLabel: boolean = true;
yAxisLabel: string = 'Förderungsprofil';
showYAxisLabel: boolean = true;
xAxisLabel: string = 'Zuwendungsempfänger';
maxRadius: number = 60;
minRadius: number = 3;
yScaleMin: number = 0;
yScaleMax: number = 100;
xScaleMin: number = 0;
xScaleMax: number = 100;
colorScheme: any;
themeSubscription: any;
view: any[] = [1500, 600];

selectedItem;

  ngOnInit() {
    this.parseCSV(event);
    this.service.parseCSVforBubbleChart(); // Funktion liest Daten aus "/services/usedata3.service" aus
    this.selectedItem = undefined; // initialer Wert nötig, um gesamte Datenübersicht zu laden
  }

  result: any;

  parseCSV(event) {
    this.selectedItem = event;

    const csvData = '../../../../assets/data/Förderkatalog_2019.09.22.csv'; // Link to CSV File
    const options = {

      // Optionen zum Parsen der .csv-Datei
      download: true,
      delimiter: ';',
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (results, file) => {
         // Ausgabe des CSV im gewünschten Format für den Input im Chart, hier Bubble Chart
        const apiData: MultiItem[] = [];
        const series: Array <SeriesItem> = [];
        for (let i = 0; i < results.data.length; i++) {
          const seriesArr = {'name': results.data[i].Thema, 'x': results.data[i].Zuwendungsempfaenger, 'y': results.data[i].Foerderprofil, 'r': results.data[i].FoerdersummeInEUR };
          series.push(seriesArr);
          /* ist keine Eingabe gewählt oder die Option 'Auswahl löschen' des Selects werden Daten aller Länder angezeigt,
           da die Werte in diesen Fälle "null" oder "undefined" sind */
          if (this.selectedItem === undefined || this.selectedItem === null) {
              const multi = new MultiItem(results.data[i].Land, seriesArr);
              apiData.push(multi);
            } else
                  // bei false wird diese Option ausgegeben: die Wahl einer Option passt die Daten im Chart automatisch an
                  if (results.data[i].Land === this.selectedItem) {
                      const multi = new MultiItem(results.data[i].Land, seriesArr);
                      apiData.push(multi);
                    }
        }
        // Ausgabe der Daten im gewünschten Format Array vom Typ Object
        this.result = [... new Set(apiData.map(x => x.name))].map( x => ({ 'name': x, 'series': []}));
        apiData.forEach(x => this.result.find( y => y.name === x.name).series.push(x.series));

        /* Konvertiert die Daten des .csv in den gewünschten Datentyp,
           da es inbesondere bei leeren Datenzellen zu Problemen kommen kann.
           Mit dieser Funktion kann dies bewusst umgangen werden.
        */
        const dataConvert = this.result.map(item => {
          item.name = String(item.name);
          item.x = String(item.name);
          item.y = String(item.name);
          item.z = String(item.name);
          item.r = Number(item.value);
          return item;
        });

      },
    };
    // Ausgabe CSV-Daten in Kombination mit den gewünschten Optionen
    this.papa.parse(csvData, options);
  }
}
