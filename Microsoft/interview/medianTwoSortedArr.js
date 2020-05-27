/**
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
  const x = nums1.length
  const y = nums2.length
  let low = 0; let high = x
  while (low <= high) {
    const partitionX = (high + low) >> 1
    const partitionY = ((x + y + 1) >> 1) - partitionX

    const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
    const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]

    const minX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
    const minY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY]

    if (maxX <= minY && maxY <= minX) {
      const lowMax = Math.max(maxX, maxY)
      if ((x + y) % 2 == 1) { return lowMax }
      return (lowMax + Math.min(minX, minY)) / 2
    } else if (maxX < minY) {
      low = partitionX + 1
    } else { high = partitionX - 1 }
  }
}
