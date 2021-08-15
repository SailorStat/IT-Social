const stringTranslator = (string) => {
  if (!string.match(/<br \/>/)) return string
  const funcString = string
  const stringWithTrans = funcString.replace(/<br \/>/g,'\n')
  return stringWithTrans
}

export default stringTranslator

//* Если в строке не содержится <br />, то возвращается строка
// Если в строке есть <br /> , а через 0-много пробелов <br />, то оба <br /> заменяются на перенос строки
// Если перед или после <br /> находится > или < соответственно, то <br /> остаётся
//* В остальных случаях <br /> заменяется на перенос строки
