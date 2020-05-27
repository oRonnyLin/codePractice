
/**
 * 1. Sort array from longest string to shortest string
 * 2. iterate over array
 * 3. for each substring, count its characters in a hashset
 * 4. if a substring has all unique characters, then start adding other substring's characters to the hashset
 * 5. Ignore the added substring if it contains character that is not unique to current hashset
 * 6. after all substrings have been verified by the hashset, set the length of the keys of hashset to max is it is larger than current max
 * @param {string[]} arr
 * @return {number}
 */
var countChar = function (count, string) {
  for (const char of string) {
    if (!count[char]) {
      count[char] = 1
    } else {
      return 0
    }
  }
  return count
}
var maxLength = function (arr) {
  let max = 0
  const length = arr.length
  arr.sort((a, b) => b.length - a.length)
  for (let i = 0; i < length; i++) {
    let charCount = countChar({}, arr[i])

    if (!charCount) continue

    for (let j = 0; j < length; j++) {
      const tempCount = countChar({ ...charCount }, arr[j])
      if (!tempCount) continue
      charCount = tempCount
    }

    const uniqLen = Object.keys(charCount).length
    max = uniqLen > max ? uniqLen : max
  }
  return max
}

console.log(maxLength(['un', 'iqq', 'ue']))
