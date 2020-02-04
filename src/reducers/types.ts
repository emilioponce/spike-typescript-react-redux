export interface Age {
  value: number;
}

export interface ExtraData {
  description: string;
  language: string;
  country: {
    id: number;
    name: string;
    region: {
      id: number;
      name: string;
    };
  };
  permissions: Array<string>;
}
