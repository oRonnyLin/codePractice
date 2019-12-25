/**
 * 1. sort list from biggest to smallest
 * 2. set index to beginning of list (which is biggest ele) (no need this actually)
 * 3. set current max element
 * 4. while loop with condition of if every element is equal, set to true in beginning
 * 5. for loop to check if next element is equal to current max, if not, set last element value to current element value, set max element to new current element
 *    increment count by 1
 * 6. when the above condition is false, then set if every element is equal condition to false.
 * @param {array of numbers} numList
 */
function solution (numList) {
  const sorted = numList.sort((a, b) => b - a)
  const numLength = sorted.length
  let maxVal = sorted[0]
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
