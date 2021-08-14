export const required = value => {
  return value ? undefined : "Field is required"
}

export const maxLengthCreator = length => value => {
  return value.length <= length ? undefined : `Max length ${length} sumbols`
}

export const telephone = value => {
  const regexp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
  return regexp.test(value) ? undefined : `It is allowed to enter a phone number`
}

export const email = value => {
  const regexp = /.+@.+\..+/i
  return regexp.test(value) ? undefined : `It is allowed to enter a email`
}

export const english = value => {
  const regexp = /^[a-zA-Z0-9]*$/
  return regexp.test(value) ? undefined : `Has invalid characters`
}