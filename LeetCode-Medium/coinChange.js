/**
 * DP
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChangedfs = function (coins, amount) {
  const sum = coins.reduce((acu, cur) => acu + cur)
  if (sum === 0 && amount !== 0) return -1
  coins.sort((a, b) => b - a)
  const N = coins.length
  return dfs(N, coins, amount, 0, 0, 0)
}

/**
 *
 * @param {number} N
 * @param {number[]} coins
 * @param {number} amount
 * @param {number} curSum
 * @param {number} numCoin
 * @param {number} index
 */
var dfs = function (N, coins, amount, curSum, numCoin, index) {
  if (curSum === amount) return numCoin
  if (curSum > amount) return -1
  for (let i = index; i < N; i++) {
    const temp = dfs(N, coins, amount, curSum + coins[i], numCoin + 1, i)
    if (temp === -1) continue
    return temp
  }
  return -1
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
  const dp = { 0: 0 }
  for (let i = 1; i <= amount; i++) {
    let min = Number.MAX_VALUE
    for (const coin of coins) {
      if (i - coin >= 0 && dp[i - coin] !== -1) {
        if (dp[i - coin] < min) {
          min = dp[i - coin]
        }
      }
    }
    dp[i] = min === Number.MAX_VALUE ? -1 : min + 1
  }
  return dp[amount]
}

console.log(coinChange([1, 2, 5]
  , 11))
