/**
export class Book implements BookRaw{
  constructor(
    public Technologie: string,
    public subtitle: string,
    public isbn: string,
    public description: string,
    public authorTeam: string,
    public rating: number,
  ) {}
}

export interface BookRaw {
  title: string;
  subtitle: string;
  isbn: string;
  description: string;
  rating: number;
  authors: string[];
}
*/

export class Technology implements TechnologyRaw{
  constructor(
    public Technologie: string,
  ) {}
}

export interface TechnologyRaw {
  Technologie: string;
}
