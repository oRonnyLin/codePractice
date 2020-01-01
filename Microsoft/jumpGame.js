/**
 * @param {number[]} nums
 * @return {boolean}
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
