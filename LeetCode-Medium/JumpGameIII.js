/**
 * Graph
 * 1. Add the indices of all 0s in a queue
 * 2. BFS style => start from the index of the first element in the queue, check the right and left side of whole array to see who can reach this index
 * 3. Add indices of elements that can to the queue if we have not visited it
 * 4. Add the current index to visited after step 2 and 3
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const queue = []
  const N = arr.length
  for (let i = 0; i < N; i++) {
    if (arr[i] === 0) queue.push(i)
  }
  const visited = new Set()
  while (queue.length !== 0) {
    const curZeroIdx = queue.shift()
    if (curZeroIdx === start) return true
    let leftPoint = curZeroIdx - 1
    let rightPoint = curZeroIdx + 1

    while (leftPoint >= 0 || rightPoint < N) {
      if (leftPoint >= 0) {
        if (curZeroIdx - leftPoint === arr[leftPoint]) {
          if (leftPoint === start) return true
          if (!visited.has(leftPoint)) { queue.push(leftPoint) }
        }
        leftPoint--
      }
      if (rightPoint < N) {
        if (rightPoint - curZeroIdx === arr[rightPoint]) {
          if (rightPoint === start) return true
          if (!visited.has(rightPoint)) { queue.push(rightPoint) }
        }
        rightPoint++
      }
    }
    visited.add(curZeroIdx)
  }
  return false
}

console.log(canReach([5, 11, 18, 16, 21, 3, 19, 0, 16, 4, 9, 20, 2, 13, 0, 2, 23, 8, 19, 22, 16, 19, 19, 25, 25, 15, 7]
  , 18))
console.log(canReach([4, 2, 3, 0, 3, 1, 2]
  , 5))
