
export interface CharacterInput {
  label: string,
  value: string,
  type: 'text' | 'date',
  required?: boolean,
  rules?: Function[]
  placeholder?: string,
}

export interface CharacterSelect {
  label: string,
  value: string,
  type: 'select',
  required?: boolean,
  rules?: Function[]
  selections: string[],
  placeholder?: string,
}