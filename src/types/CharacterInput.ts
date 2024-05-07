type InputLabels = 'Name' | 'Surname' | 'Birth date' |
  'Death date' | 'Author' | 'Publisher' | 'Publication Year' |
  'Last Circulation' | 'Price' | 'Weight' | 'Width' |
  'Height' | 'Series' | 'ISBN' | 'Phone' | 'Email' | 'Password' | 'Retry password'

export interface Input {
  label: InputLabels,
  value: string,
  defaultValue?: string,
  inputType: 'input'
  type: 'text' | 'date' | 'number' | 'password',
  required?: boolean,
  rules?: Function[],
  min?: number,
  disabled?: boolean,
  restriction?: Function,
  placeholder?: string,
}

export interface Inputs {
  [key: string]: Input | Select | Range | MultipleSelect
}


type SelectLabels = 'Age Restriction' | 'Format' |
  'Binding' | 'Genre' | 'Gender' | 'Languages'

export interface Select {
  inputType: 'select'
  label: SelectLabels,
  value: string,
  defaultValue?: string,
  required?: boolean,
  rules?: Function[],
  selections: string[],
}

export interface MultipleSelect {
  inputType: 'select multiple',
  label: SelectLabels,
  value: string[],
  defaultValue?: string[],
  rules?: Function[],
  selections: string[],
  someSelected?: boolean,
  allSelected?: boolean,
}

export interface Range {
  label: string,
  min: number,
  max: number,
  step: number,
  value: (number | string)[],
  defaultValue?: (number | string)[],
  inputType: 'range',
}
