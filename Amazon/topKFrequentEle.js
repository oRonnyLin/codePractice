/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * 1. Go through the array and record the number of times each element occurs
 * 2. Put the counted numbers into an array and sort them based on the number of occurences
 * 3. slice to top k elements and return the number.
 */
var topKFrequent = function (nums, k) {
  const counts = {}
  for (let i = 0; i < nums.length; i++) {
    if (!counts[nums[i]]) {
      counts[nums[i]] = 1
    } else {
      counts[nums[i]]++
    }
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

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 *
 * 1. Iterate through array to record the number of occurences of each word in an object
 * 2. Sort the keys of the object based on the number of occurences and break ties by comparing alphabetically
 * 3. return the first k elements of the sorted keys
 */

var topKFrequentWord = function (words, k) {
  const array = [...words]
  const wordCounts = {}
  for (const word of array) {
    if (!wordCounts[word]) {
      wordCounts[word] = 1
    } else {
      wordCounts[word]++
    }
  }

  const sortedArr = Object.keys(wordCounts).sort((a, b) => {
    const compare = wordCounts[b] - wordCounts[a]
    if (compare === 0) {
      return a.localeCompare(b)
    }
    return compare
  })

  sortedArr.length = k
  return sortedArr
}
