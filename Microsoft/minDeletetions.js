/**
 * 1. Iterate over string and make a count of all alphabets used
 * 2. Loop through each alphabets' count, compare it to all other counts, and if there is a same count, decrement the other count and increment min count
 */

function solution (string) {
  const counts = {}
  for (const char of string) {
    counts[char] = counts[char] ? counts[char] + 1 : 1
  }

  const alphabets = Object.keys(counts)
  let minDelete = 0
  for (const char in counts) {
    if (counts[char] === 0) {
      continue
    }
    for (const alphabet of alphabets) {
      if (char === alphabet) {
        continue
      }
      if (counts[char] === counts[alphabet]) {
        counts[alphabet] = counts[alphabet] - 1
        minDelete++
      }
    }
  }
  return minDelete
}

console.log(solution('aabbffddeaee'))
