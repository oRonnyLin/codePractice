/**
 * @param {character[][]} grid
 * @return {number}
 */
const dfs = function (grid, curCord) {
  //
  if (curCord[0] >= 0 &&
        curCord[0] < grid.length &&
        curCord[1] >= 0 &&
        curCord[1] < grid[0].length) {
    if (grid[curCord[0]][curCord[1]] === '0') {
      return
    }

    if (grid[curCord[0]][curCord[1]] === 'x') {

    } else {
      grid[curCord[0]][curCord[1]] = 'x'
      dfs(grid, [curCord[0] + 1, curCord[1]])
      dfs(grid, [curCord[0], curCord[1] + 1])
      dfs(grid, [curCord[0] - 1, curCord[1]])
      dfs(grid, [curCord[0], curCord[1] - 1])
    }
  }
}

var numIslands = function (grid) {
  let numIslands = 0

  // Visit each cell in the grid and mark them as visited. If it is a land, then recursively visit all lands connected to this land right away. We skip the lands we have visited.

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === 'x') {
        continue
      }
      if (grid[row][column] === '1') {
        numIslands++
        dfs(grid, [row, column])
      }
    }
  }
  return numIslands
}
