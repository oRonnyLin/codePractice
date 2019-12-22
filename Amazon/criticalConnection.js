/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const hasPath = function (begin, dest, connections, connectionToRemove, visited, paths) {
  for (const connection of connections) {
    if ((paths[begin][dest] === false) || (paths[dest][begin] === false)) {
      continue
    }
    if (connection.includes(begin)) {
      if (visited.includes(connection)) {
        continue
      }
      if (connection != connectionToRemove) {
        visited.push(connection)
        if (connection.includes(dest)) {
          return true
        } else {
          // visited.push(connection)
          if (!hasPath(connection[(connection.indexOf(begin) + 1) % 2],
            dest,
            connections,
            connectionToRemove,
            visited, paths)) {
            continue
          } else {
            return true
          }
        }
      }
    }
  }
  paths[begin][dest] = false
  paths[dest][begin] = false
}
const buildGraph = function (n, connections) {
  const graph = {}
  for (let i = 0; i < n; i++) {
    graph[i] = { val: i, children: [], rank: -Infinity, minRank: Infinity }
  }
  connections.forEach((connection) => {
    graph[connection[0]].children.push(connection[1])
    graph[connection[1]].children.push(connection[0])
  })
  return graph
}

var criticalConnections = function (n, connections) {
  // let paths = Array.from({length: n}, () => { return Array.from({length:n})})
  const graph = buildGraph(n, connections)
  const critCon = []
  let rank = 0
  const visited = new Set()
  // let sortedCon = connections.map(edge => {
  //     return edge[0] > edge[1] ? [edge[1],edge[0]] : [edge[0], edge[1]]
  // })
  // console.log('graph before: ',graph)
  function dfs (node, parent) {
    node.rank = rank
    node.minRank = rank

    rank++
    visited.add(node.val)
    node.children.forEach((child) => {
      if (graph[child].val === parent) {
        return
      }
      if (visited.has(child)) {
        node.minRank = Math.min(node.minRank, graph[child].minRank)
        return
      } else {
        node.minRank = Math.min(node.minRank, dfs(graph[child], node.val))
      }
      if (node.rank < graph[child].minRank) {
        critCon.push([child, node.val])
      }
    })
    return node.minRank
  }

  dfs(graph[0], graph[0].val)
  // console.log('graph after: ',graph)
  return critCon

  // for (let i=0; i<connections.length; i++) {
  //     const connectionToRemove = connections[i]
  //     let visited = []
  //     let paths = Array.from({length: n}, () => { return Array.from({length:n},() => true)})
  //     const result = hasPath(connectionToRemove[0], connectionToRemove[1], connections, connectionToRemove, visited, paths)
  //     if(result) {
  //         continue
  //     } else {
  //         critCon.push(connectionToRemove)
  //     }
  // }
  // return critCon
}
