/**
 * 1. determine if string is negative or positive
 * 2. For negative numbers, insert 5 infront of the first digit bigger than 5
 * 3. For positive numbers, insert 5 infront of the first digit smaller than 5
 * 4. in both cases, if no digit satisfies condition, insert 5 at the end.
 * @param {*} numberStr
 */
function solution (numberStr) {
  if (numberStr === '-0') return '50'
  const number = parseInt(numberStr, 10)
  const arr = numberStr.split('')
  const length = arr.length
  if (number > -1) {
    for (let i = 0; i < length; i++) {
      if (+arr[i] < 5) {
        arr.splice(i, 0, 5)
        return arr.join('')
      }
    }
  } else {
    for (let i = 1; i < length; i++) {
      if (+arr[i] > 5) {
        arr.splice(i, 0, 5)
        return arr.join('')
      }
    }
  }
  arr.push('5')
  return arr.join('')
}

console.log(solution('9999'))
