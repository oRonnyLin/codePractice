/**
 * File for phone screen questions
 */
function parseInt (string) {
  const length = string.length
  const arr = string.split('')
  let result = 0
  console.log(arr)
  for (let i = 0; i < length; i++) {
    let curDigit = +arr[i]
    console.log(curDigit)
    curDigit = Math.max(curDigit * 10 ** (length - i - 1), curDigit)
    result += curDigit
  }
  return result
}

console.log(parseInt('100'))
