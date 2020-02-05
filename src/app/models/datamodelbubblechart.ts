export class SeriesItem {
  name: string;
  x: string;
  y: string;
  r: number;

  constructor(name: string, x: string, y: string, r: number) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.r = r;
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
