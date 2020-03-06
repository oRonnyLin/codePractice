function solution (A, B, n) {
/**
 * 1. Go through each edge, and calculate the number of connected cities for each city
 * 2. Go through each edge again and calculate the edge with the two most connected cities
 */

  const edgeNum = A.length
  const counts = {}
  const maxRank = { value: Number.MIN_VALUE, city: [] }
  for (let i = 0; i < edgeNum; i++) {
    counts[A[i]] = counts[A[i]] ? counts[A[i]] + 1 : 1
    counts[B[i]] = counts[B[i]] ? counts[B[i]] + 1 : 1
  }

  for (let i = 0; i < edgeNum; i++) {
    const sum = counts[A[i]] + counts[B[i]]
    if (sum > maxRank.value) {
      maxRank.value = sum
      maxRank.city = [A[i], B[i]]
    }
  }
  return maxRank.value
}

console.log(solution([1, 2, 3, 3], [2, 3, 1, 4], 4))
