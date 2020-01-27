// Eine alternative Definition für das API-Objekt mit einem Array von Element
export interface ApiObject {
  meta: {
    project: {
      label: string;
      description: string;
      modified: string;
    },
    relation: Relation[];
  };
  elements: Element[];
}

interface Relation {
    parameter_1: {
      label: string;
    };
    parameter_2: {
      label: string;
    };
    parameter_3: {
      label: string;
      levels: Level[];
    };
}

interface Level {
    value: number;
    label: string;
}

interface Element {
  label: string;
  description: string;
  parameter_1: {
    value: string;
    description: string;
  };
  parameter_2: {
    value: string;
    description: string;
    };
  parameter_3: {
    value: number;
    };
  }


