/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 1. Sort the array of numbers from smallest to largest
 * 2. Set two pointers, one at the beginning of the array and one at the end.
 * 3. calculate the sum of the numbers pointed to by the two pointers
 * 4. if the sum is too big, then move the second pointer backwards.
 * 5. if the sum is too small, then move the first pointer forwards.
 * 6. if the sum is equal to target, find the index of the two numbers and because if they are the same number
 */
var twoSum = function (nums, target) {
  const sortedNums = [...nums]

  sortedNums.sort((a, b) => a - b)
  let i = 0
  let j = sortedNums.length - 1
  // let max = Number.MIN_VALUE
  while (true) {
    const sum = sortedNums[i] + sortedNums[j]
    if (sum > target) {
      j--
    } else if (sum < target) {
      i++
    } else {
      break
    }
  }
  const firstIdx = nums.indexOf(sortedNums[i])
  const secondIdx = sortedNums[i] === sortedNums[j] ? nums.indexOf(sortedNums[j], firstIdx + 1) : nums.indexOf(sortedNums[j])

  return [firstIdx, secondIdx]
}
