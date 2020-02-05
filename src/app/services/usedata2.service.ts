import { Injectable } from '@angular/core';
import { Api2Service } from './api2.service';
import { MultiItem, SeriesItem } from '../models/datamodel';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Usedata2Service {

/* Dieser Service liest die Daten aus der api2.service.ts aus und
wandelt sie in das für ngx benötigte Input Format um */

apiData: MultiItem[];
result: any;

constructor(private config: Api2Service) {
  this.apiData = [];
}

private series2Data = new BehaviorSubject<any[]>([]);
series2Data$ = this.series2Data.asObservable();

ngxInputFormat() {
  this.config.getData().subscribe(data => {
    data.elements.forEach((item, index) => {
        const series: Array <SeriesItem> = [];
        const seriesArr = {'name': item.parameter_2.value, 'value': item.parameter_3.value};
          series.push(seriesArr);
        const multi = new MultiItem(item.parameter_1.value, seriesArr);
        this.apiData.push(multi);
        });

        this.result = [... new Set(this.apiData.map(x => x.name))].map( x => ({ 'name': x, 'series': []}));
        this.apiData.forEach(x => this.result.find( y => y.name === x.name).series.push(x.series));

        // Console log nur zur Überprüfung der Konvertierung, ob die Daten im ngx Format vorliegen
        // Ergbnis liegt als Array mit Objects vor
        console.log(this.result);

        this.series2Data.next(this.result);
      });

      // Console log nur zur Überprüfung der Konvertierung, ob Teilergebnis korrekt vorliegt
      // Ergebins ist ein Array
      // console.log(this.apiData);

}

/*
// JSON-Data to SingleSeries Format konvertieren
single: any;
ngxSingleInputFormat() {
  this.config.getData().subscribe(data => {
    data.elements.forEach((item, index) => {
      if( item.parameter_1.value === 'Deep Learning') {
        const series: Array <SeriesItem> = [];
        const seriesArr = {"name": item.parameter_2.value,"value":item.parameter_3.value};
          series.push(seriesArr);

        const multi = new MultiItem(item.parameter_1.value, seriesArr);
        this.apiData.push(multi);}
        });
        this.single = this.apiData.map(x=>x.series);

        //Console log nur zur Überprüfung der Konvertierung, ob die Daten im ngx Format vorliegen
        //console.log(this.single);
      });
  }
*/


/* series: Array <SeriesItem> = [];
peopleObject: Array <SeriesItem> = [];

ngxSingleInputFormat() {
  this.config.getData().subscribe(data => {
    data.elements.forEach((item, index) => {
      if( item.parameter_1.value === 'Deep Learning') {
        const seriesArr = {"name": item.parameter_2.value,"value":item.parameter_3.value};
         this.series.push(seriesArr); }
        });

        const arrayToObject = (array, keyField) =>
            array.reduce((obj, item) => {
              obj[item[keyField]] = item
              return obj
            }, {})
          this.peopleObject = arrayToObject(this.series, 'name')

          this.result = [...new Set(this.series.map(x => 1))];
          this.result = [... new Set(this.series.map(x => x.name))].map( x => ({ "name": x, "series": this.series}));

          console.log(this.result);
          console.log(this.series);
      });

} */

series1: Array <SeriesItem> = [];
private series1Data = new BehaviorSubject<SeriesItem[]>([]);
series1Data$ = this.series1Data.asObservable();

ngxSingle1InputFormat() {
  this.series1 = [];
  this.config.getData().subscribe(data => {
    data.elements.forEach((item, index) => {
      const seriesArr = {'area': item.parameter_1.value, 'name': item.parameter_2.value, 'value': item.parameter_3.value};
      this.series1.push(seriesArr);
    });
    // console.log(this.series1);

    this.series1Data.next(this.series1);
    });
  }


}
