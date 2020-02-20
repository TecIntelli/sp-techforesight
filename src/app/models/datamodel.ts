  // mit Hilfe des Datenmodells können die abgerufenen Datensätze in das gewünschte Format gebracht werden
  // in diesem Fall das spezielle Format für ngx-charts

  export class SeriesItem {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}

export class MultiItem {
  name: string;
  series: SeriesItem;

constructor(name: string, series: SeriesItem) {
  this.name = name;
  this.series = series;
}

}
