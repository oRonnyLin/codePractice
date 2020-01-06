/**
 * 1. compute sum of arrays
 * 2. if they are not equal then there will be no solution
 * 3. compute half of the sum, since if there is a partition, it must equal half of the sum of the array
 * 4. iterate over both array at same time, calculating the accumulating sum, if
 *    it equals half sum, then there is a partition at this index.
 * @param {number[]} A
 * @param {number[]} B
 * @returns {boolean}
 */
const solution = (A, B) => {
  const sumA = A.reduce((acu, cur) => acu + cur)
  const sumB = B.reduce((acu, cur) => acu + cur)
  const length = A.length
  if (sumA !== sumB) return 0
  const equalVal = sumA / 2
  let curSumA = 0
  let curSumB = 0
  let count = 0
  for (let i = 0; i < length - 1; i++) {
    curSumA += A[i]
    curSumB += B[i]
    if (curSumA === curSumB && curSumA === equalVal) {
      count++
    }
  }
  return count
}

console.log(solution([0, 0, 1, 1], [0, 0, 1, 1]))
