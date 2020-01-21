export interface SeriesItem {
  name: string;
  value: number;
}

export interface MultiItem {
  name: string;
  series: SeriesItem[];
}
