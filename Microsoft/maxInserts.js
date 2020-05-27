/**
 * 1. Iterate through string from first letter
 * 2. Keep track of consecutive count of a, if above 3 then return -1
 * 3. If current letter is not a, add 2-count of a infront of the letter or increment result count by the same number
 * 4. After iteration finishes, add 2-count to result
 * @param {*} word
 */
function solution (word) {
  if (word === '') {
    return 2
  }
  const arr = word.split('')
  let count = 0
  const length = arr.length
  let maxInserts = 0
  for (let i = 0; i < length; i++) {
    if (arr[i] === 'a') {
      count++
      if (count > 2) return -1
    } else {
      maxInserts += 2 - count
      count = 0
    }
  }
  return maxInserts + 2 - count
}

console.log(solution('d'))
