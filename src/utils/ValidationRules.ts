class ValidationRules {
  required(value: string) { return !!value || 'Field is required'; }
  nicknameMinLength(value: string) {
    if (value.length >= 3) return true
    return 'There must be at least three characters.'
  }
  requiredNicknameSymbols(value: string) {
    if (!value.match(/[a-z]/i)) return 'At least one letter must be present'
  }
  requiredPasswordSymbols(value: string) {
    if (!value.match(/[a-z]/i)) return 'At least one letter must be present'
    else if (!value.match(/\d/)) return 'At least one number must be present'
    else if (!value.match(/\[|\]|\^|\$|\.|\||\?|\*|\+|\(|\)|@|&|%|#|!|-/u))
      return 'At least one special symbol as "[ ] \\ ^ $ . | ! ? * + - ( ) @ & % #" must be present'
  }
  passwordMinLength(value: string) {
    if (value.length >= 8) return true
    return 'Password must be at least 8 characters.'
  }
}

export const rules = new ValidationRules()

