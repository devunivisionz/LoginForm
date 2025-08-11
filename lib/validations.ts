export function emailValidator(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function codeValidator(code: string): boolean {
  return /^\d{4}$/.test(code)
}



