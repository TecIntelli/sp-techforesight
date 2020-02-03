import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import {BehaviorSubject, Observable} from "rxjs";
import { CSVModel } from '../../app/models/csvmodel.interface';




@Injectable({
  providedIn: 'root'
})
export class Usedata3Service {

/* -------------CSV Parser------------------------------
Dieser Service konvertiert die Daten aus dem CSV in ein Array.
*/
  constructor( private papa: Papa) {  }

private Data = new BehaviorSubject<any[]>([]);
Data$ = this.Data.asObservable();



// Frage: Ich weiß nicht wie ich diese Daten bearbeiten kann. Mit subscribe funktioniert es nicht.
//Ich sollte diese Daten nach dem Auslesen in eine bestimmte Form bringen
  // --> parseCSV(): Observable<CSVModel> { wollte hier das csv-model speichern --> geht nicht
    parseCSV(){
    let csvData = '../../../assets/data/Förderkatalog_2019.09.22.csv';
    let options = {
        complete: (results, file) => {
            console.log('Parsed: ', results, file);

            console.log(results.data);
            return this.Data.next(results.data);
        },
        // Add your options here
        download: true,
        delimiter: ';',
        header: true,
        skipEmptyLines: true,
    };
    console.log(this.papa.parse(csvData, options));

  }
}
