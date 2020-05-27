function calculateDigitSum (num) {
  let sum = 0
  let currentNum = Math.abs(num)
  while (currentNum > 0) {
    sum += currentNum % 10
    currentNum = Math.floor(currentNum / 10)
  }
  return sum
}
function solution (arr) {
  let max = -1
  const digitSums = {}
  /**
   * 1. compute the digit sum
   * 2. check if there exist a number with this digit sum
   * 3. if there is, sum them and compare with max sum,
   * 4. if bigger than max sum, replace max sum
   * 5. check if number for the existing digit sum is bigger or the current number,
   *    replace the existing with current if current is larger
   */
  for (const number of arr) {
    const digitSum = calculateDigitSum(number)
    if (digitSums[digitSum] === null) {
      digitSums[digitSum] = number
    } else {
      const tmp = digitSums[digitSum] + number
      max = tmp > max ? tmp : max
      digitSums[digitSum] = digitSums[digitSum] > number ? digitSums[digitSum] : number
    }
  }
  return max
}

console.log(solution([-100, 100, -100]))
