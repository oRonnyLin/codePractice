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

/*
1. Create an object that represents a graph. Each node of the graph is a property that is represented with another object.
   The node object has value, a list of nodes that it is connected to, rank property and minrank property.
2. Use DFS to traverse this graph from an arbituary first element. When arriving at a node, set its rank and minRank, increment rank by one and mark this node as visited.
   Rank is timestamp which tells DFS when it traversed the node.
3. Check the current node's connected nodes. If the connected node has been visited, see if it has a shorter route to the current node by checking its minRank. Set current node's minRank
   if it does.
4. Otherwise, use DFS on its connected nodes to check if there is a shorter route to the current node.
5. If the rank of current node is smaller than the minimum rank of its children, then there is no other passage from the current node to its children except for the edge that they share,
   so this edge must be a critical connection.
*/
var criticalConnections = function (n, connections) {
  const graph = buildGraph(n, connections)
  const critCon = []
  let rank = 0
  const visited = new Set()
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
}
