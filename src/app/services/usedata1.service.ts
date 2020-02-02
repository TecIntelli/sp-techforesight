import { Injectable } from '@angular/core';
import { Api1Service } from './api1.service';
import { MultiItem, SeriesItem } from '../models/datamodel';

@Injectable({
  providedIn: 'root',
})
export class Usedata1Service {

/* Dieser Service liest die Daten aus der api1.service.ts aus und
wandelt sie in das für ngx benötigte Input Format um */

apiData: MultiItem[];
result: any;

constructor(private config: Api1Service) {
  this.apiData = [];
}

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
        // console.log(this.result);
      });

      // Console log nur zur Überprüfung der Konvertierung, ob Teilergebnis korrekt vorliegt
      // console.log(this.apiData);
}

  // JSON-Data to SingleSeries Format konvertieren
  single: any;
  ngxSingleInputFormat() {
    this.config.getData().subscribe(data => {
      data.elements.forEach((item, index) => {
        if ( item.parameter_1.value === 'Deep Learning') {
          const series: Array <SeriesItem> = [];
          const seriesArr = {'name': item.parameter_2.value, 'value': item.parameter_3.value};
            series.push(seriesArr);

          const multi = new MultiItem(item.parameter_1.value, seriesArr);
          this.apiData.push(multi);
        }
        });
        this.single = this.apiData.map(x => x.series);

        // Console log nur zur Überprüfung der Konvertierung, ob die Daten im ngx Format vorliegen
        // console.log(this.single);
      });
  }


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


}
