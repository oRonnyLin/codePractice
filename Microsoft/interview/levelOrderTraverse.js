/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 */
var levelOrder = function (root) {
  const result = []
  const currentLevelNodes = []
  if (root) { currentLevelNodes.push(root) }
  while (currentLevelNodes.length > 0) {
    const current = []
    const len = currentLevelNodes.length
    for (let i = 0; i < len; i++) {
      const node = currentLevelNodes.shift()
      current.push(node.val)
      if (node.left) {
        currentLevelNodes.push(node.left)
      }
      if (node.right) {
        currentLevelNodes.push(node.right)
      }
    }
    result.push(current)
  }
  return result
}
