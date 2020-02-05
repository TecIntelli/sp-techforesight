import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import {BehaviorSubject, Observable} from 'rxjs';
import { MultiItem, SeriesItem } from '../models/datamodel';




@Injectable({
  providedIn: 'root',
})
export class Usedata3Service {

/* -------------CSV Parser------------------------------
Dieser Service konvertiert die Daten aus dem CSV in ein Array.
*/
  constructor( private papa: Papa) {  }

// Daten zur Einlese für die Datenübersicht
private Data = new BehaviorSubject<any[]>([]);
Data$ = this.Data.asObservable();

// Daten zur Einlese für das Chart
private Data2 = new BehaviorSubject<any[]>([]);
Data2$ = this.Data2.asObservable();

    parseCSV(){
    const csvData = '../../../assets/data/Förderkatalog_2019.09.22.csv'; //Link to CSV File
    const options = {
      // Add your options here
      download: true,
      delimiter: ';',
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true, // Konvertiert die Daten automatisch, jedoch kommt es zu Probleme bei 'null' aus diesem Grund erfolgt weiter unter die gezwungene Konvertierung in ein String

      complete: (results, file) => {
          // console.log('Parsed: ', results, file);
          // console.log('CSV als Array Object ' + results.data);

          // Gesamter CSV-Datenübersicht
          this.Data.next(results.data);

          const series: Array <SeriesItem> = [];
          for (let i = 0; i < results.data.length; i++) {
              const seriesArr = {'name': results.data[i].Land, 'value': results.data[i].FoerdersummeInEUR};
              series.push(seriesArr);
          }

          // zur Kontrolle, ob Daten im gewünschter Anordnung augegeben werden
          // console.log(series);

          // Möglichkeit zur Konvertierung der einzelnen Spalten in gewünschtes Format
            const dataConvert = series.map(item => {
                                  item.name = String(item.name);
                                  item.value = Number(item.value);
                                  return item;
                                });
            console.log(dataConvert);

        // speichert die Daten als BehaviourSubject
          this.Data2.next(series);
        },


    };
    this.papa.parse(csvData, options);
  }
}
