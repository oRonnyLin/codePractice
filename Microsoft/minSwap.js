function solution (string) {
  /**
     * 1. Go through the string from index 0
     * 2. if we see three consecutive occurences of the same letter, check the next letter
     * 3. if the next letter is a different letter, then we can swap middle
     * 4. if the next letter is the same letter, then we can swap last
     */
  let prevChar = string[0]
  let count = 0
  let result = 0
  for (const char of string) {
    if (char === prevChar) {
      count++
      continue
    } else {
      result += Math.floor(count / 3)
      prevChar = char
      count = 1
    }
  }
  result += Math.floor(count / 3)
  return result
}

console.log(solution('baaaaabbbaaabbbaaabbaaa'))
