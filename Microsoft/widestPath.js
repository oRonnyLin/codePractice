/**
 * 1. Sort x array
 * 2. Iterate through x array's gaps and keep track of the max width
 * @param {numbers[]} X
 * @param {numbers[]} Y
 */
const solution = function (X, Y) {
  const sortedXClone = [...X]
  sortedXClone.sort((a, b) => a - b)
  const N = X.length
  let maxWidth = 0
  for (let i = 0; i < N - 1; i++) {
    const width = sortedXClone[i + 1] - sortedXClone[i]
    maxWidth = width > maxWidth ? width : maxWidth
  }
  return maxWidth
}

console.log(solution([4, 1, 5, 4], [4, 5, 1, 3]))
