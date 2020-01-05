/**
 *  1. iterate through array, keeping track of conditions where particle is stable
 *  2. O(n)
 * @param {numbers[]} positions
 * @returns {number}
 */
const solution = function (positions) {
  const length = positions.length
  const LIMIT = 10 ^ 6
  let result = 0
  if (length < 3) return result
  let prevDiff = positions[1] - positions[0]
  let prevEle = positions[1]
  let consecutiveCount = 2
  for (let i = 2; i < length; i++) {
    const curDiff = positions[i] - prevEle
    if (prevDiff === curDiff) {
      consecutiveCount++
    } else {
      result = consecutiveCount <= 2 ? result : consecutiveCount > 3 ? result + consecutiveCount - 1 : result + 1
      consecutiveCount = 2
      prevDiff = curDiff
    }
    if (result > LIMIT) return -1
    prevEle = positions[i]
  }
  return consecutiveCount <= 2 ? result : consecutiveCount > 3 ? result + consecutiveCount - 1 : result + 1
}

console.log(solution([-1, 1, 3, 3, 3, 2, 3, 2, 1, 0]))
