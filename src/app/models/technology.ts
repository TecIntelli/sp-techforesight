export class RootObject {
  meta: Meta;
  elements: Element;
  constructor() {
    this.elements = new Element();
  }
}

export class Element {
  label: string;
  description: string;
  parameter_1: Parameter12;
  parameter_2: Parameter22;
  parameter_3: Parameter32;
  constructor() {
    this.parameter_1 = new Parameter12();
    this.parameter_2 = new Parameter22();
    this.parameter_3 = new Parameter32();
  }
}

export class Parameter32 {
  value: number;
}

export class Parameter12 {
  value: string;
  description: string;
}

export class Parameter22 {
  value: string;
  description: string;
}

interface Meta {
  project: Project;
  relation: Relation[];
}

interface Relation {
  parameter_1: Parameter1;
  parameter_2: Parameter1;
  parameter_3: Parameter3;
}

interface Parameter3 {
  label: string;
  levels: Level[];
}

interface Level {
  value: number;
  label: string;
}

interface Parameter1 {
  label: string;
}

interface Project {
  label: string;
  description: string;
  modified: string;
}

// Eine alternative Definition für das API-Objekt mit einem Array von Element
export interface ApiObject {
  meta: Meta;
  elements: Element[];
}
