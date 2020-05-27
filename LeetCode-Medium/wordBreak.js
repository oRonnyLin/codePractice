/**
 * DP
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = [true]
  const length = s.length
  for (let i = 1; i <= length; i++) {
    dp.push(false)
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[length]
}

console.log('eqqDXV4GaVfBqtAFHstRgPXn0oacCjKh'.length)

console.log(wordBreak('aaaaaaa',
  ['aaa', 'aaaa']))
