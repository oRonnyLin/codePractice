/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia:
“The lowest common ancestor is defined between
two nodes p and q as the lowest node in T that has both p and q as descendants
(where we allow a node to be a descendant of itself).”
 */

/**
  * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
  */

/**
   * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

   */

var lowestCommonAncestor = function (root, p, q) {
  // If the value of p is less than the root and q is less than the root, go to the left
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  // If the value of p is greater than the root and q is greater than the root, go to the right
  else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  // We found it!
  else {
    return root
  }
}

// Lowest Common Ancestor must sit between p and q
// p < Lowest Common Ancestor < q
var lowestCommonAncestor = (root, p, q) => {
  // Lowest Common Ancestor bigger than both p and q so we move left
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  // Lowest Common Ancestor small than both p and q so we move right
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
}
