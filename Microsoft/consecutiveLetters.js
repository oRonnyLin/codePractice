/**
 *
 * @param {string} string
 * 1. Iterate over string, make count of consecutive characters
 * 2. if count < 3, push current char to stack
 */
function solution (string) {
  const result = []
  const length = string.length
  let count = 0
  let prevChar = string.charAt(0)
  for (let i = 0; i < length; i++) {
    if (prevChar === string.charAt(i)) {
      count++
    } else {
      count = 1
      prevChar = string.charAt(i)
    }
    if (count < 3) {
      result.push(string.charAt(i))
    }
  }
  return result.join('')
}

console.log(solution(''))
