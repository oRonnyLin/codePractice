/**
 *
 * @param {number} N
 */
const solution = function (N) {
  const result = []
  for (let i = 1; i <= Math.floor(N / 2); i++) {
    result.push(i)
    result.push(-i)
  }
  if (N % 2 !== 0) {
    result.push(0)
  }
  return result
}

console.log(solution(22))
