# TFE Dashboard

# Einleitung
Projekt wurde im Rahmen meiner Masterarbeit erstellt.

## Wichtigsten verwendeten Module im Hintergrund
Dashboard: ngx-admin [ngx-admin starter-kit](https://github.com/akveo/ngx-admin/tree/starter-kit)

Charts zur Visualisierung: [ngx-charts](https://github.com/swimlane/ngx-charts)

Datentabelle: [ng2-smart-table](https://akveo.github.io/ng2-smart-table/#/)

CSV Parser: [ngx-papaparse](https://alberthaff.dk/projects/ngx-papaparse/docs/v4)
Weitere alternativer CSV Parser: [NgxCsvParser](https://github.com/tofiqquadri/ngx-csv-parser)


## Voraussetzung zur Installation und dem Aufsetzen einer Entwicklungsumgebung
Um die Applikation auf ihrem Rechner ausführen zu können, sind folgende Programme auf ihrem Rechner vorauszusetzen:
*JavaScript Laufzeit Umgebung Node.js (https://nodejs.org/de/)
*Paketmanager npm (https://www.npmjs.com/package/npm)
*Webserver
*Browser (z. B. Chrome)
*integrierte Entwicklungsumgebung (IDE) mit einem TypeScript-Compiler und einem Texteditor (z. B. Visual Studio Code)

1.	Laden Sie die aktuellen Dateien zur entwickelten Visualisierungslösung auf dieser GitHub-Seite herunter.
2.	Führen Sie die Anweisung „npm install“ in der Kommandozeile aus, um alle notwendigen Module für die Anwendung herunterzuladen.

Hinweis:
Alle notwendigen Module sind in den Dateien „package.json“ und „package-lock.json“ hinterlegt. Mit dem Ausführen des Befehls „npm install“ in der Kommandozeile werden die notwendigen Module zur Ausführung der Applikation installiert.

## Entwicklungsumgebung/ -server

Zum Aufruf des Entwicklungsservers und der Entwicklungsumgebung ist wie folgt vorzugehen:
1.	Geben Sie den Ausdruck „ng serve“ in die Kommandozeile an
2.  Aufruf der Applikation über folgenden Link im Browser möglich: http://localhost:4200/ 
3.  Hinweis: Werden Änderungen im Quellcode durchgeführt und gespeichert, aktualisiert sich die Applikation in ihrem      Browser automatisch. Falls nicht laden Sie den Browser erneut.

## Build

Folgende Anweisung erstellt ein "Build" des Projekts für die Produktivumgebung:
ng build --prod

1.	Ausführen eines Build zur Produktivsetzung der Applikation:
2.	Geben Sie den Ausdruck „ng build --prod“ in der Kommandozeile ein
3.	In Folge dessen erstellt das Angular CLI kompakte Bundles und legt sie im Ordner „dist/“ ab. Sind für die Ausführungen weitere Dateien erforderlich, werden diese ebenfalls hinzugefügt.


