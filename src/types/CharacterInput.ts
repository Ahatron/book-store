export interface CharacterInput {
  label: string,
  value: string,
  type: 'text' | 'date',
  required?: boolean,
  placeholder?: string,
}

export interface CharacterSelect {
  label: string,
  value: string,
  type: 'select',
  required?: boolean,
  selections: string[],
  placeholder?: string,
}