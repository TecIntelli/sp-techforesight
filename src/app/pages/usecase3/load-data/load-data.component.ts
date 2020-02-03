import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { NbSortDirection, NbSortRequest } from '@nebular/theme';

@Component({
  selector: 'load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent implements OnInit {

  csvRecords: any[] = [];
  csvRecords1: any;
  header = true;
  delimiter = '';

  constructor(private ngxCsvParser: NgxCsvParser) {
  }

  ngOnInit() {
  }

 /* -------------manueller CSV-Daten-Upload------------------------------ */

 @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

 // Your applications input change listener for the CSV File
 // Funktion zum Lesen des Files
 fileChangeListener($event: any): void {

   // Select the files from the event
   const files = $event.srcElement.files;

   // Prüfung ob eine .csv Datei hochgeladen wurde
   if (files[0].name.endsWith('.csv')) {
   }else{
     alert('Please import valid .csv file.');
     this.fileImportInput.nativeElement.value = '';
   }

   // Parse the file you want to select for the operation along with the configuration
   this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: this.delimiter })
     .pipe().subscribe((result: Array<any>) => {

       console.log('Result', result);
       this.csvRecords = result;
     }, (error: NgxCSVParserError) => {
       console.log('Error', error);
     });

 }


/* -------------Datentabelle------------------------------ */



sortColumn: string;
sortDirection: NbSortDirection = NbSortDirection.NONE;

 settings = {
   actions: false,
   columns: {
     Ressort: {
       title: 'Ressort',
     },
     Zuwendungsempfaenger: {
       title: 'Zuwendungsempfänger',
     },
     Ort: {
       title: 'Ort',
     },
     Land: {
       title: 'Land',
     },
     Staat: {
       title: 'Staat',
     },
     AusfuehrendeStelle: {
       title: 'Ausführende Stelle',
     },
     Thema: {
       title: 'Thema',
     },
     KlartextLeistungsplansystematik: {
       title: 'Klartext Leistungsplansystematik',
     },
     LaufzeitVon: {
       title: 'Laufzeit Von',
     },
     LaufzeitBis: {
       title: 'Laufzeit bis',
     },
     FoerdersummeInEUR: {
       title: 'Fördersumme in EUR',
     },
     Foerderprofil: {
       title: 'Förderprofil',
     },
     Verbundprojekt: {
       title: 'Verbundprojekt',
     },
 },
};

 updateSort(sortRequest: NbSortRequest): void {
   this.sortColumn = sortRequest.column;
   this.sortDirection = sortRequest.direction;
 }

 getSortDirection(column: string): NbSortDirection {
   if (this.sortColumn === column) {
     return this.sortDirection;
   }
   return NbSortDirection.NONE;
 }



 getShowOn(index: number) {
   const minWithForMultipleColumns = 400;
   const nextColumnStep = 100;
   return minWithForMultipleColumns + (nextColumnStep * index);
 }


}
