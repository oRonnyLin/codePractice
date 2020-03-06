/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**

@constructor
*/
var LRUCache = function (capacity) {
  this._capacity = capacity
  this._usage = []
  this._cache = {}
}
/**

    @param {number} key
    @returns {number}
    */
LRUCache.prototype.get = function (key) {
  var val = this._cache[key]
  if (val === undefined) {
    return -1
  }
  var idx = this._usage.indexOf(key)
  this._usage.splice(idx, 1)
  this._usage.push(key)
  return val
}
/**

    @param {number} key
    @param {number} value
    @returns {void}
    */
LRUCache.prototype.set = function (key, value) {
  if (this._cache[key]) {
    this._cache[key] = value
    var idx = this._usage.indexOf(key)
    this._usage.splice(idx, 1)
    this._usage.push(key)
  } else {
    if (this._usage.length === this._capacity) {
      var tbd = this._usage.shift()
      delete this._cache[tbd]
    }
    this._usage.push(key)
    this._cache[key] = value
  }
}
