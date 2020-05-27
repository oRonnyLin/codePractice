/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * 1. For each digit, calculate the change it makes when removed
 * 2. Return k digits that have largest change
 */
var removeKdigits = function (num, k) {
  const numLength = num.length // accessing object property is slower than accessing local variable
  let stack = []
  for (let i = 0; i < numLength; i++) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num.charAt(i)) {
      stack.pop()
      k--
    }
    stack.push(num.charAt(i))
  }

  stack = k > 0 ? stack.slice(0, stack.length - k) : stack
  return stack.join('').replace(/^0+/, '') || '0'
}

const removeOneChar = function (string) {
  const stringLength = string.length
  const stack = []
  let k = 1
  for (let i = 0; i < stringLength; i++) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1].localeCompare(string.charAt(i)) > 0) {
      stack.pop()
      k--
    }
    stack.push(string.charAt(i))
  }
  if (k > 0) {
    stack.pop()
  }
  return stack.join('')
}

console.log(removeOneChar('abczd'))
