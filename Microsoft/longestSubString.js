/**
 * 1. Go through each letter of string, keep track of start and end idx of substring,
 * 2. At each element, check if condition still valid, if so, increment string length and set new end idx to next char
 * 3. if condition invalid, check if length of current substring combo is greater than max substring, if so, replace max with current
 * 4. reset start index to be one before current, and length to be 2, and go to next char
 * 5. after iterating, check if the last substring is the longest substring
 * @param {string} string
 */
function solution (string) {
  let prevChar = string[0]
  let currentCount = 0
  const maxSubString = { length: Number.MIN_VALUE, idx: [0, 0] }
  const curSubString = { length: 0, idx: [0, 0] }
  for (let i = 0; i < string.length; i++) {
    if (prevChar === string[i]) {
      currentCount++
    } else {
      currentCount = 1
      prevChar = string[i]
    }
    if (currentCount === 3) {
      if (curSubString.length > maxSubString.length) {
        maxSubString.length = curSubString.length
        maxSubString.idx = [...curSubString.idx]
      }
      curSubString.idx[0] = i - 1
      curSubString.length = 2
      currentCount = 2
    } else {
      curSubString.length = curSubString.length + 1
      curSubString.idx[1] = i + 1
    }
  }
  if (curSubString.length > maxSubString.length) {
    maxSubString.length = curSubString.length
    maxSubString.idx = curSubString.idx
  }

  return string.slice(maxSubString.idx[0], maxSubString.idx[1])
}

console.log(solution('aabbaaabbaabbaa'))
