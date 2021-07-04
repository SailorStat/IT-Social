export function dateCreator(order) {
  const newDate = new Date()
  const date = [newDate.getMonth(), newDate.getDate(), newDate.getHours(), newDate.getMinutes()]
  const [month, day, hour, minute] = date.map(el => `${el}`.length > 1 ? el : "0" + el)

  const getDay = `${day}.${month}.${newDate.getFullYear()}`
  const getTime = `${hour}:${minute}`

  if (order === "d t") return getDay + " " + getTime
  return getTime + " " + getDay
}