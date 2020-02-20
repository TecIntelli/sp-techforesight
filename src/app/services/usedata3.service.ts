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

// Daten zur Einlese für das Horizontal Bar Chart
private DataForHorizontalBarChart = new BehaviorSubject<any[]>([]);
DataForHorizontalBarChart$ = this.DataForHorizontalBarChart.asObservable();

    parseCSV() {
    const csvData = '../../../assets/data/Förderkatalog_2019.09.22.csv'; // Link to CSV File
    const options = {
      // Add your options here
      download: true, // Download das CSV von einer URL möglich --> Streaming von lokalen und remote Files
      delimiter: ';', // individueller Delimiter setzen
      header: true, // erste Datenzeile wird als Header übernommen
      skipEmptyLines: true, // Leerzeilen werden übersprungen
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
            // console.log(dataConvert);

        // speichert die Daten als BehaviourSubject
          this.DataForHorizontalBarChart.next(series);
        },


    };
    this.papa.parse(csvData, options);
  }

  // Funktion zum Auslesen der CSV-Daten und konvertieren für das Bubble Chart

  private DataforBubbleChart = new BehaviorSubject<any[]>([]);
  DataforBubbleChart$ = this.DataforBubbleChart.asObservable();

  result: any;
  parseCSVforBubbleChart() {
    const csvData = '../../../assets/data/Förderkatalog_2019.09.22.csv';
    const options = {
      download: true,
      delimiter: ';',
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (results, file) => {
      const apiData: MultiItem[] = [];
      const series: Array <SeriesItem> = [];
        // alle Datensätze werden durchlaufen
        for (let i = 0; i < results.data.length; i++) {
          const seriesArr = {'name': results.data[i].Zuwendungsempfaenger, 'value': results.data[i].FoerdersummeInEUR};
          // Aufbau der Serie aus den Werte series in der "const seriesArr"
          series.push(seriesArr);
          // Erstellung MultiItem aus Wert und seriesArr; die Werte aus dem "seriesArr" werden jeweils dem "results.data[i].Land" zugeordnet
          const multi = new MultiItem(results.data[i].Land, seriesArr);
          apiData.push(multi);
          }
          this.result = [... new Set(apiData.map(x => x.name))].map( x => ({ 'name': x, 'series': []}));
          apiData.forEach(x => this.result.find( y => y.name === x.name).series.push(x.series));
          // Array an Observable übergeben
          this.DataforBubbleChart.next(this.result);
        },
    };
    this.papa.parse(csvData, options);
  }
}
