import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { NbSortDirection, NbSortRequest } from '@nebular/theme';

/*
Komponente umfasst manuellen CSV-Upload
*/

@Component({
  selector: 'load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss'],
})
export class LoadDataComponent implements OnInit {

  // Optionen zum Parsen der CSV-Datei
  csvRecords: any[] = [];
  header = true;
  delimiter = '';

  constructor(private ngxCsvParser: NgxCsvParser) {
  }

  ngOnInit() {
  }

 /* -------------manueller CSV-Daten-Upload------------------------------
  Komponente dient dem manuellen Upload von CSV-Files und soll als Beispiel einer solchen Variante dienen
 */

 @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

 // Funktion zum Lesen der CSV-Datei mit Hilfe des 'change listeners'
 fileChangeListener($event: any): void {

   // Auswählen der Detai aus dem Event
   const files = $event.srcElement.files;

   // Prüfung ob eine Datei mit Ende .csv hochgeladen wurde, ansonsten wird eine Fehlermeldung ausgegeben
   if (files[0].name.endsWith('.csv')) {
   }else{
     alert('Bitte laden Sie eine gültige .csv-Datei hoch.');
     this.fileImportInput.nativeElement.value = '';
   }

   // Parsen der ausgewählten Datei mit den gewählten Optionen
   // Optionen können mittels Select oder Eingabe angepasst werden
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

/*
columns: müssen mit Spaltennamen im CSV übereinstimmen, ansonsten bleibt Spalte leer
title: kann individuell vergeben werden
*/

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
