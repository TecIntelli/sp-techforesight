import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MultiItem, SeriesItem } from '../models/datamodel';

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

  /* getAllAPIData() {
    this.config.getData().subscribe(data => {console.log(data); } );
  }

  getAPIData() {
      // liest aus Array "elements" alle Objekte aus
      this.config.getData().subscribe(result => {
        this.technologydatas = result.elements;
        console.log(this.technologydatas);
      });
  } */

  /* transformToJSON() {
    this.config.getData()
      .subscribe(data => {
          data.elements.forEach((item, index) => {
            const mItem = this.apiData.find( param1 => param1.name === item.parameter_1.value);
            if (mItem) {
              const sItem = mItem.series.find(param2 => param2.name === item.parameter_2.value);
              if (!sItem) {
                mItem.series.push({
                  name: item.parameter_2.value,
                  value: item.parameter_3.value,
                });
              }
            } else {
              this.apiData.push({
                name: item.parameter_1.value,
                series: [{
                  name: item.parameter_2.value,
                  value: item.parameter_3.value,
                }],
              });
            }
          } );
          // Console log nur zur Überprüfung der Konvertierung
          // console.log(JSON.stringify(this.apiData));
      });

      //console.log(this.apiData);
    } */

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
            const seriesArr = {"name": item.parameter_2.value,"value":item.parameter_3.value};
              series.push(seriesArr);
            const multi = new MultiItem(item.parameter_1.value, seriesArr);
            this.apiData.push(multi);
            });
            /*
            - wandelt die Daten in das MultiSeries Format um (series: key/value)
              [
              {"name":"Product 1","series":{"name":"Area 1","value":3}},
              {"name":"Product 2","series":{"name":"Area 2","value":3}},
              {"name":"Product 1","series":{"name":"Area 2","value":1}},
              ]

            - in 'result' wird Array mti eindeutigem Namen und leerem 'series Array' erstellt
            */
            this.result = [... new Set(this.apiData.map(x => x.name))].map( x => ({ "name": x, "series": []}));
            /*
            - jedes 'apiData' - Objekt wird in Series Array eingelesen
            - um richtige Serienobjekt der apiData in das richtige 'result' Series Array einzulesen,
            muss folgende Bedingung geprüft werden: y.name === x.name
            */
            this.apiData.forEach(x => this.result.find( y => y.name === x.name).series.push(x.series));

            /* Console log nur zur Überprüfung der Konvertierung, ob die Daten im ngx Format vorliegen
            console.log(this.result); */
          });
          /*
          Console log nur zur Überprüfung der Konvertierung, ob Teilergebnis korrekt vorliegt
           console.log(this.apiData);
           */
    }
  }
