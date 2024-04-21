export interface Input {
  label: string,
  value: string,
  inputType: 'input'
  type: 'text' | 'date' | 'number',
  required?: boolean,
  rules?: Function[],
  min?: number,
  disabled?: boolean,
  restriction?: Function,
  placeholder?: string,
}

export interface InputSelect {
  inputType: 'select'
  label: string,
  value: string,
  required?: boolean,
  rules?: Function[],
  selections: string[],
}

export interface MultipleSelect {
  inputType: 'select multiple',
  label: string,
  values: string[],
  rules?: Function[],
  selections: string[],
  someSelected?: () => boolean,
  allSelected?: () => boolean,
  toggle?: Function
}

export interface InputRange {
  label: string,
  min: number,
  max: number,
  step: number,
  value: (number | string)[],
  inputType: 'range',
}