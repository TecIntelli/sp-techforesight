/*
  //Datamodel für transformJSON

export interface SeriesItem {
  name: string;
  value: number;
}

export interface MultiItem {
  name: string;
  series: SeriesItem[];
} */


  //Datamodel für ngxInputFormat

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
