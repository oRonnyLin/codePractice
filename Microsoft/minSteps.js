/**
 * 1. sort list from biggest to smallest
 * 2. set is every element equal to false
 * 3. set count to 0
 * 4. Start while loop with condition to execute if every element is not equal
 * 5. set biggest value to the first element of sorted list
 * 6. iterate over the sorted list starting from the beginning
 * 7. if current value is not equal to biggest value, set previous value of list to current value
 * 8. increment count
 * 9. set every element equal condition to false and set max value to current value
 * 10. after one iteration is over, reset every element equal condition to true and biggest value to be the first element of sorted array
 * @param {array of numbers} numList
 */
function solution (numList) {
  const sorted = numList.sort((a, b) => b - a)
  const numLength = sorted.length
  let maxVal
  let everyEleIsEqual = false
  let count = 0
  while (!everyEleIsEqual) {
    everyEleIsEqual = true
    maxVal = sorted[0]
    for (let i = 0; i < numLength; i++) {
      if (maxVal === sorted[i]) {
        continue
      } else {
        everyEleIsEqual = false
        count++
        maxVal = sorted[i]
        sorted[i - 1] = sorted[i]
      }
    }
  }
  return count
}
console.log(solution([1, 1, 1]))
