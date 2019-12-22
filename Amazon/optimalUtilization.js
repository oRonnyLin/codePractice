const a = [[1, 2], [2, 4], [3, 6]]
const b = [[1, 2]]
var target = 7
function isBelowTarget (value1, value2) {
  const sum = value1 + value2
  if (sum <= target) {
    return sum
  } else {
    console.log(sum)
    return false
  }
}
function optimalUtilization (a, b, target) {
  if (a === [] || b === []) {
    return []
  }
  let pair = []
  let max = Number.MIN_VALUE
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      const evalu = isBelowTarget(a[i][1], b[j][1])
      if (evalu || (evalu === 0)) {
        if (evalu > max) {
          pair = [[a[i][0], b[j][0]]]
          max = evalu
        } else if (evalu === max) {
          pair.push([a[i][0], b[j][0]])
        }
        // if (!pair[eval]) {
        //     pair[eval] = [[a[i][0],b[j][0]]]
        // } else {
        //     pair[eval].push([a[i][0],b[j][0]])
        // }
      }
    }
  }
  console.log(pair)
}
