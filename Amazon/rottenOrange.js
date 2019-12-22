const generateNeighborCoord = function (coordX, coordY) {
  return [[coordX + 1, coordY],
    [coordX - 1, coordY],
    [coordX, coordY + 1],
    [coordX, coordY - 1]]
}
const isNeighborOrange = function (coordX, coordY, maxX, maxY, grid) {
  const neighbors = generateNeighborCoord(coordX, coordY)
  for (const neighbor of neighbors) {
    if (neighbor[0] < 0 || neighbor[0] >= maxX || neighbor[1] < 0 || neighbor[1] >= maxY) {
      continue
    } else {
      if (grid[neighbor[0]][neighbor[1]] > 0) {
        return true
      }
    }
  }
  console.log(`neighbors: ${neighbors}`)
  return false
}
var orangesRotting = function (grid) {
  let numFreshOrange = 0
  let minutesElapsed = 0
  const rotOrangeLocs = []
  const lenX = grid.length
  const lenY = grid[0].length
  for (let i = 0; i < lenX; i++) {
    for (let j = 0; j < lenY; j++) {
      const curCell = grid[i][j]
      if (curCell === 0) {
        continue
      } else if (curCell === 1) {
        if (!isNeighborOrange(i, j, lenX, lenY, grid)) {
          return -1
        }
        numFreshOrange++
      } else if (curCell === 2) {
        rotOrangeLocs.push([i, j])
      }
    }
  }
  while (numFreshOrange > 0) {
    if (rotOrangeLocs.length === 0) {
      return -1
    }
    const size = rotOrangeLocs.length
    for (let i = 0; i < size; i++) {
      const rotOrange = rotOrangeLocs.shift()
      const neighbors = generateNeighborCoord(rotOrange[0], rotOrange[1])
      for (const neighbor of neighbors) {
        if (neighbor[0] < 0 || neighbor[0] >= lenX || neighbor[1] < 0 || neighbor[1] >= lenY) {
          continue
        } else {
          if (grid[neighbor[0]][neighbor[1]] === 1) {
            rotOrangeLocs.push([neighbor[0], neighbor[1]])
            grid[neighbor[0]][neighbor[1]] = 2
          }
        }
      }
    }
    numFreshOrange -= rotOrangeLocs.length
    minutesElapsed++
  }
  return minutesElapsed
}
