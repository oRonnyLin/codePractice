function solution (arr) {
  const sortedArr = [...arr]
  sortedArr.sort((a, b) => b - a)
  const arrLength = arr.length
  for (let i = 0; i < arrLength; i++) {
    if (!(sortedArr[i] > 0)) return 0
    for (let j = arrLength - 1; j > i; j--) {
      const kNeg = Math.abs(sortedArr[j])
      if (sortedArr[i] === kNeg) return sortedArr[i]
      if (sortedArr[i] < kNeg) continue
      break
    }
  }
}
/**
 * 1. Sort array from largest to smallest
 * 2. maintain a pointer to first value and last value of array
 * 3. If the first value is the absolute of the second value, then return the first value
 * 4. if the first value is smaller than the second value, I decrement the second pointer
 * 5. If the first value is bigger than the second value, I increment the pointer
 * 6. repeat 3,4,5 until first value is equal to second value or until the pointers collide.
 * @param {array of integers} arr
 */
function solutionImproved (arr) {
  const sortedArr = [...arr]
  sortedArr.sort((a, b) => b - a)
  const arrLength = arr.length
  let i = 0
  let j = arrLength - 1
  while (i !== j) {
    if (sortedArr[i] < 0) break
    const kNeg = Math.abs(sortedArr[j])
    if (sortedArr[i] === kNeg) return sortedArr[i]
    if (sortedArr[i] < kNeg) {
      j--
    } else {
      i++
    }
  }
  return 0
}

function solutionImproved2 (arr) {
  const set = new Set()
  const arrLength = arr.length
  let max = 0
  for (let i = 0; i < arrLength; i++) {
    set.add(-arr[i])
    if (set.has(arr[i])) {
      max = Math.abs(arr[i]) > max ? Math.abs(arr[i]) : max
    }
  }
  return max
}

console.log(solutionImproved2([3, 2, -2, 5, -3]))
console.log(solutionImproved2([1, 2, 3, -4]))
