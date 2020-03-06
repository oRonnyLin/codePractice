/**
 * DP
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const length = nums.length
  if (length < 1) return 0
  const dp = [1]
  let max = dp[0]
  for (let i = 1; i < length; i++) {
    let maxCount = Number.MIN_VALUE
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i] && dp[j] > maxCount) {
        maxCount = dp[j]
      }
    }
    maxCount = maxCount === Number.MIN_VALUE ? 1 : maxCount + 1
    max = maxCount > max ? maxCount : max
    dp.push(maxCount)
  }
  return max
}
