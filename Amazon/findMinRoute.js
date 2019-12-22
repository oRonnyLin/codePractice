var treasureMap = [['O', 'O', 'O', 'O'],
  ['D', 'O', 'D', 'O'],
  ['O', 'O', 'O', 'O'],
  ['O', 'D', 'O', 'O'],
  ['O', 'D', 'O', 'O'],
  ['O', 'D', 'O', 'O'],
  ['O', 'D', 'O', 'X']]
function create2DArray (x, y) {
  const result = []
  for (let i = 0; i < x; i++) {
    result.push(Array.from({ length: y }, () => 0))
  }
  return result
}
/*
1. Starting at the start cell, use BFS to traverse the whole grid
2. After each BFS step, increment the step counter if we have not seen the treasure
*/
function findMinRoute (treasureMap) {
  const visited = create2DArray(treasureMap.length, treasureMap[0].length)
  const queue = [[0, 0]]
  let steps = 0
  while (queue.length !== 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const curCord = queue.shift()
      console.log(curCord)
      if (curCord[0] < 0 ||
               curCord[1] < 0 ||
               curCord[0] >= treasureMap.length ||
               curCord[1] >= treasureMap[0].length) {
        continue
      }
      const curLoc = treasureMap[curCord[0]][curCord[1]]
      if (curLoc === 'X') {
        return steps
      } else if (visited[curCord[0]][curCord[1]] || curLoc === 'D') {
        continue
      } else {
        visited[curCord[0]][curCord[1]] = 1
        queue.push([curCord[0] + 1, curCord[1]],
          [curCord[0], curCord[1] + 1],
          [curCord[0] - 1, curCord[1]],
          [curCord[0], curCord[1] - 1])
      }
    }
    steps++
  }
  console.log(visited)
  return 'No treasure found'
}
