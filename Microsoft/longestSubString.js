/**
 * 1. Go through each letter of string, keep track of start and end idx of substring,
 * 2. At each element, check if condition still valid, if so, increment string length and set new end idx to next char
 * 3. if condition invalid, check if length of current substring combo is greater than max substring, if so, replace max with current
 * 4. reset start index to be one before current, and length to be 2, and go to next char
 * 5. after iterating, check if the last substring is the longest substring
 * @param {string} string
 */
function solution (s) {
  let prevChar = s[0]
  let currentCount = 0
  const maxSubs = { length: Number.MIN_VALUE, idx: [0, 0] }
  const curSubs = { length: 0, idx: [0, 0] }
  for (let i = 0; i < s.length; i++) {
    if (prevChar === s[i]) {
      currentCount++
    } else {
      currentCount = 1
      prevChar = s[i]
    }
    if (currentCount === 3) {
      if (curSubs.length > maxSubs.length) {
        maxSubs.length = curSubs.length
        maxSubs.idx = [...curSubs.idx]
      }
      curSubs.idx[0] = i - 1
      curSubs.length = 2
      currentCount = 2
    } else {
      curSubs.length = curSubs.length + 1
      curSubs.idx[1] = i + 1
    }
  }
  if (curSubs.length > maxSubs.length) {
    maxSubs.length = curSubs.length
    maxSubs.idx = curSubs.idx
  }

  return s.slice(maxSubs.idx[0], maxSubs.idx[1])
}

// console.log(solution('abcabcbb'))
x = {'foo': 'bar'}
z = {'baz': x}
y = z['baz']['foo']
console.log(y)
