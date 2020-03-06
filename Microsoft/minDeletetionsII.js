/**
 * 1. iterate through string
 * 2. if current char is B, then push to stack
 * 3. if current char is A, check if there is item in the stack,
 *    if there is, that means there exist B characters before this A
 *    so a delete must happen and we increment delete count
 * @param {string} string
 */
const solution = function (string) {
  let count = 0
  const stack = []
  for (const char of string) {
    if (char === 'A') {
      if (stack.length !== 0) {
        count++
        stack.pop()
      } else {
        continue
      }
    } else if (char === 'B') {
      stack.push(char)
    }
  }
  return count
}

console.log(solution('A'))
