/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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
