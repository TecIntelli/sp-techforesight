# TFE Dashboard

# Einleitung
Projekt wurde im Rahmen meiner Masterarbeit erstellt.

## Wichtigsten verwendeten Module im Hintergrund
Dashboard: ngx-admin [ngx-admin starter-kit](https://github.com/akveo/ngx-admin/tree/starter-kit)

Charts zur Visualisierung: [ngx-charts](https://github.com/swimlane/ngx-charts)

Datentabelle: [ng2-smart-table] (https://akveo.github.io/ng2-smart-table/#/)

CSV Parser: [ngx-papaparse] (https://alberthaff.dk/projects/ngx-papaparse/docs/v4)
Weitere alternativer CSV Parser: [NgxCsvParser] (https://github.com/tofiqquadri/ngx-csv-parser)

## Entwicklungsserver

Zum Aufruf des Entwicklungsservers ist wie folgt vorzugehen:
1.	Zur Ausführung der Applikation auf dem Entwicklungsserver sind folgende Schritte durchzuführen
2.	Geben Sie den Ausdruck „ng serve“ in die Kommandozeile an
3.  Aufruf der Applikation über folgenden Link im Browser möglich: http://localhost:4200/ 
4.  Hinweis: Werden Änderungen im Quellcode durchgeführt und gespeichert, aktualisiert sich die Applikation in ihrem      Browser automisch. Falls nicht laden Sie den Browser erneut.

## Build

Folgende Anweisung erstellt ein 'Build' des Projekts für die Produktivumgebung:
ng build --prod

1.	Ausführen eines Build zur Produktivsetzung der Applikation:
2.	Geben Sie den Ausdruck „ng build –prod“ in der Kommandozeile ein
3.	In Folge desse erstellt das Angular CLI kompakte Bundles und legt sie im Ord-ner „dist/“ ab. Sind für die Ausführungen weitere Dateien erforderlich, werden diese hinzugefügt.


