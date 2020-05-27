/**
 * @param {number[]} nums
 * @return {boolean}
 * 1. Use BFS to traverse the array by queuing all jump options while keeping track of visited idices
 * 2. if jumping to the right equals or exceeds the last index then return true
 * Note: arr.shift() takes O(n) so LeetCode gives me Time exceeded in last test case
 */
var canJump = function (nums) {
  const visited = new Set()
  const queue = [0]
  const arrLen = nums.length
  while (queue.length !== 0) {
    const idx = queue.shift()
    if (visited.has(idx)) {
      continue
    } else {
      visited.add(idx)
    }
    const jumpLen = nums[idx]
    const rightJump = idx + jumpLen
    if (rightJump >= (arrLen - 1)) return true
    for (let i = 0; i <= jumpLen; i++) {
      if ((idx + i) < arrLen) queue.push(idx + i)
      if ((idx - i) > 0) queue.push(idx - 1)
    }
  }
  return false
}

/**
 * Note: this is a version using offset instead of arr.shift() to simulate queue, but this runs into OOM error
 * @param {number[]} nums
 */
var canJumpOffset = function (nums) {
  const visited = new Set()
  let offset = 0
  const queue = [offset]
  const arrLen = nums.length
  while (offset < queue.length) {
    const idx = queue[offset++]
    if (visited.has(idx)) {
      continue
    } else {
      visited.add(idx)
    }
    const jumpLen = nums[idx]
    const rightJump = idx + jumpLen
    if (rightJump >= (arrLen - 1)) return true
    for (let i = 0; i <= jumpLen; i++) {
      if ((idx + i) < arrLen) queue.push(idx + i)
      if ((idx - i) > 0) queue.push(idx - 1)
    }
  }
  return false
}

/**
 * 1. Iterate over array starting from first index
 * 2. Keep track of the furthest distance one can travel from each index of array,
 * 3. If the current index exceeds the maxDistance, then that index cannot be reached in any way so we return false
 * 4. Otherwise, we return true because the loop has finished.
 * @param {number[]} nums
 * @return {boolean}
 */
var canJumpBest = function (nums) {
  let maxLocation = 0
  const arrLength = nums.length
  for (let i = 0; i < arrLength; i++) {
    if (i > maxLocation) return false
    maxLocation = maxLocation > i + nums[i] ? maxLocation : i + nums[i]
  }
  return true
}
