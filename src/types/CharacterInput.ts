
export interface CharacterInput {
  label: string,
  value: string,
  type: 'text' | 'date' | 'number',
  required?: boolean,
  rules?: Function[],
  min?: number,
  disabled?: boolean,
  restriction?: Function,
  placeholder?: string,
}

export interface CharacterSelect {
  label: string,
  value: string,
  type: 'select',
  required?: boolean,
  disabled?: boolean,
  rules?: Function[],
  restriction?: Function
  selections: string[],
  placeholder?: string,
}

export interface CharacterRange {
  label: string,
  min: number,
  max: number,
  step: number,
  value: (number | string)[],
  type: 'range',
}