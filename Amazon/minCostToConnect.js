const ropes = [0, 3, 4, 5, 6, 7, 1, 23, 5, 5, 6, 1, 3, 2]
function minCostToConnectRopes (ropes) {
  if (ropes.length === 1) {
    return ropes[0]
  }
  const sortedRopes = ropes.sort((a, b) => a - b)
  while (sortedRopes.length !== 1) {
    console.log('sortedRopes.length: ', sortedRopes.length)
    const costToConnect = sortedRopes.shift() + sortedRopes.shift()
    console.log('sortedRopes after shifting: ', sortedRopes)
    if (sortedRopes.length === 0) {
      return costToConnect
    } else {
      for (let i = 0; i < sortedRopes.length; i++) {
        if (sortedRopes[i] >= costToConnect) {
          sortedRopes.splice(i, 0, costToConnect)
          console.log('sortedRopes after splicing: ', sortedRopes)
          break
        } else if (i === sortedRopes.length - 1) {
          sortedRopes.push(costToConnect)
          break
        }
      }
    }
  }
}
