import { Input } from "@/types/CharacterInput";

export function withoutSpaces(input: Input) {
  if (input.value.includes(' ')) {
    input.value = input.value.replace(/\s/g, ''); // Удалить пробелы
  }
}