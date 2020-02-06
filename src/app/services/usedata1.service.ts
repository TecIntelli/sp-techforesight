import { Injectable } from '@angular/core';
import { ApiService } from './api1.service';
import { MultiItem, SeriesItem } from '../models/datamodel';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UsedataService {

/* Dieser Service liest die Daten aus der api.service.ts aus und
wandelt sie in das für ngx benötigte Input Format um */

  apiData: MultiItem[];
  result: any;

  constructor(private config: ApiService) {
    this.apiData = [];
  }

    // Funktion zur Speicherung der Daten im Multi series Format
    ngxInputFormat() {
      this.config.getData().subscribe(data => {
        data.elements.forEach((item, index) => {
            /*
            folgende Zeilen konvertieren die Daten aus der API in dieses Format
              [
              {"name":"Product 1","series":{"name":"Area 1","value":3}},
              {"name":"Product 2","series":{"name":"Area 2","value":3}},
              {"name":"Product 1","series":{"name":"Area 2","value":1}},
              ]
            */
            const series: Array <SeriesItem> = [];
            const seriesArr = {'name': item.parameter_2.value, 'value': item.parameter_3.value};
              series.push(seriesArr);
            const multi = new MultiItem(item.parameter_1.value, seriesArr);
            this.apiData.push(multi);
            });
            /*
            - wandelt die Daten in das MultiSeries Format um (series: key/value)
              [
              {"name":"Product 1","series":[{"name":"Area 1","value":3}, {"name":"Area 2","value":1}] },
              {"name":"Product 2","series":{"name":"Area 2","value":3}},
              ]

            - in 'result' wird Array mti eindeutigem Namen und leerem 'series Array' erstellt
            */
            this.result = [... new Set(this.apiData.map(x => x.name))].map( x => ({ 'name': x, 'series': []}));
            /*
            - jedes 'apiData' - Objekt wird in Series Array eingelesen
            - um richtige Serienobjekt der apiData in das richtige 'result' Series Array einzulesen,
            muss folgende Bedingung geprüft werden: y.name === x.name
            */
            this.apiData.forEach(x => this.result.find( y => y.name === x.name).series.push(x.series));

            // Console log nur zur Überprüfung der Konvertierung, ob die Daten im ngx Format vorliegen
            // console.log(this.result);
          });

          // Console log nur zur Überprüfung der Konvertierung, ob Teilergebnis korrekt vorliegt
          // console.log(this.apiData);

    }


  series1: Array <SeriesItem> = [];
  arr: any;

  // die Daten werden als Observable abgelegt, um später stets auf den aktuellen Inhalt zugreifen zu können (asynchron)
  private series1Data = new BehaviorSubject<SeriesItem[]>([]);
  series1Data$ = this.series1Data.asObservable();

  // Funktion zur Speicherung der Daten im Singles Series Format
  ngxSingleInputFormat() {
    /*
    Daten werden wie folgt ausgegeben:
      [
        {"name":"Product 1", "name":"Area 1","value":3},
        {"name":"Product 2", "name":"Area 2","value":3},
        {"name":"Product 1", "name":"Area 2","value":1},
      ]
    */
    /* die Array-Instanz muss zu beginn leer sein,
    sonst hängt er bei jedem Aufruf des Service (d.h. hier bei jedem Aufruf der Komponente), dass Daten angehangen werden
    */
    this.series1 = [];
    this.config.getData().subscribe(data => {
      data.elements.forEach((item, index) => {
        const seriesArr = {'area': item.parameter_1.value, 'name': item.parameter_2.value, 'value': item.parameter_3.value};
        this.series1.push(seriesArr);
        // this.series1.map(x=>this.series1);
      });
      // console.log('Usedata.Service: ' + this.series1);
      // nachdem alle Daten im Array gespeichert sind, wird diese Array-Instanz als neuer Wert für das Observable gesetzt
      this.series1Data.next(this.series1);
    });
  }

}
