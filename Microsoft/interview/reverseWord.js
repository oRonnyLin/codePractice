/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  const length = s.length
  for (let i = 0; i < Math.floor(length / 2); i++) {
    [s[i], s[length - 1 - i]] = [s[length - 1 - i], s[i]]
  }
  let startOfWord = 0
  let endOfWord = 0
  while (startOfWord < length) {
    if (s[endOfWord + 1] === ' ' || endOfWord === length - 1) {
      for (let i = 0; i < Math.floor((endOfWord - startOfWord + 1) / 2); i++) {
        [s[startOfWord + i], s[endOfWord - i]] = [s[endOfWord - i], s[startOfWord + i]]
      }
      startOfWord = endOfWord + 2
      endOfWord = startOfWord
    } else {
      endOfWord++
    }
  }
}
