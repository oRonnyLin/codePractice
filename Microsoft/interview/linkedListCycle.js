/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let pOneStep = head
  let pTwoStep = head
  while (head) {
    if (pOneStep.next) {
      pOneStep = pOneStep.next
    } else {
      return false
    }
    if (pTwoStep.next) {
      pTwoStep = pTwoStep.next
      if (pTwoStep.next) {
        pTwoStep = pTwoStep.next
      } else {
        return false
      }
    } else {
      return false
    }
    if (pOneStep === pTwoStep) {
      return true
    }
  }
  return false
}
