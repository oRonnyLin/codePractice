/**
 * Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

 */

var connect = function (root) {
  if (root === null) { return}
  var runner = root
  var first = null; var firstF = null
  while (runner !== null) {
    // find first two child and link it, if cannot find assign the first next to null
    if (runner.left !== null) {
      if (first !== null) {
        first.next = runner.left
        first = runner.left
      } else {
        if (first === null) { firstF = runner.left}
        first = runner.left
      }
    }
    if (runner.right !== null) {
      if (first !== null) {
        first.next = runner.right
        first = runner.right
      } else {
        if (first === null) { firstF = runner.right}
        first = runner.right
      }
    }

    runner = runner.next
  }
  connect(firstF)
}

var connect = function (root) {
  if (!root) return
  var pass = null
  if (root.next) pass = root.next
  if (root.right) {
    if (root.left) root.left.next = root.right
    if (pass) {
      while (!pass.left && !pass.right && pass.next) pass = pass.next
      if (pass.left) root.right.next = pass.left
      if (!pass.left && pass.right) root.right.next = pass.right
    }
  }
  if (root.left && !root.right) {
    if (pass) {
      while (!pass.left && !pass.right && pass.next) pass = pass.next
      if (pass.left) root.left.next = pass.left
      if (!pass.left && pass.right) root.left.next = pass.right
    }
  }
  connect(root.right)
  connect(root.left)
}
