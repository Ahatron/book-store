type InputLabels = 'Name' | 'Surname' | 'Birth date' |
  'Death date' | 'Author' | 'Publisher' | 'Publication Year' |
  'Last Circulation' | 'Price' | 'Weight' | 'Width' | 'Height' | 'Series' | 'ISBN'

export interface Input {
  label: InputLabels,
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

type SelectLabels = 'Age Restriction' | 'Format' |
  'Binding' | 'Genre' | 'Gender' | 'Languages'

export interface Select {
  inputType: 'select'
  label: SelectLabels,
  value: string,
  required?: boolean,
  rules?: Function[],
  selections: string[],
}

export interface MultipleSelect {
  inputType: 'select multiple',
  label: SelectLabels,
  values: string[],
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
  inputType: 'range',
}