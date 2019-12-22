/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const counts = {}
  // let mostFreqEle = {}
  // let mostFreqEleQueue = []
  // let lowestMostFreqCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (!counts[nums[i]]) {
      counts[nums[i]] = 1
    } else {
      counts[nums[i]]++
    }
    // if (counts[nums[i]] > lowestMostFreqCount) {
    //     if(mostFreqEleQueue.length === k) {
    //         if(!mostFreqEle[nums[i]]){
    //             const eleToRm = mostFreqEleQueue.shift()
    //             delete mostFreqEle[eleToRm]
    //         } else {
    //             let index = mostFreqEleQueue.indexOf(nums[i])
    //             mostFreqEleQueue.splice(index,1)
    //         }
    //         mostFreqEleQueue.push(nums[i])
    //         mostFreqEle[nums[i]] = counts[nums[i]]
    //         lowestMostFreqCount = mostFreqEle[mostFreqEleQueue[0]]
    //     } else {
    //         if(!mostFreqEle[nums[i]]) {
    //             mostFreqEleQueue.unshift(nums[i])
    //         }
    //         mostFreqEle[nums[i]] = counts[nums[i]]
    //     }
    // }
  }
  const numArr = []
  for (const num in counts) {
    numArr.push([num, counts[num]])
  }
  numArr.sort((a, b) => b[1] - a[1])
  const topK = numArr.slice(0, k)
  // console.log(counts)
  return topK.map(item => item[0])
}
