export type Integration = {
  id: string;
  name: string;
  api: string;
  description: string;
  fields: any[];
  connected: boolean;
};

export type Field = {
  id: string;
  name: string;
  type: string;
  required: boolean;
  value: string;
};
