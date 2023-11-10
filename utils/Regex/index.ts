export const regexValidatePassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/

export const regexLowerCase = /^(?=.*[a-z])/
export const regexUpperCase = /^(?=.*[A-Z])/
export const regexSixCharacters = /^(?=.{6,})/
export const regexSpecialCharacter = /^(?=.*[!@#$%^&])/
export const regexOneNumber = /^(?=.*\d).{6,20}$/
