export interface InputInterface {
  id: string;
  name: string;
  error: Object;
  accept?: string;
  pattern?: Object;
  multiple?: boolean;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  register: (...props: any) => void;
}

export interface InputStyledInterface {
  error: boolean;
}
