/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists_compare_one_by_one = function (lists) {
  if (!lists || !lists.length) return null
  const findMinNode = (lists = lists) => {
    let index = -1
    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) continue
      if (lists[i].val <= min) {
        min = lists[i].val
        index = i
      }
    }

    let resNode = null
    if (index !== -1) {
      resNode = lists[index]
      lists[index] = lists[index].next
    }
    return resNode
  }

  const res = new ListNode(-1)
  let cur = res
  let temp = findMinNode(lists)
  while (temp) {
    cur.next = temp
    cur = cur.next
    temp = findMinNode(lists)
  }
  return res.next
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKListsRonny = function (lists) {
  const length = lists.length
  const what = [[]]
  if (length < 1) return lists
  const result = lists[0]
  for (let i = 1; i < length; i++) {
    console.log('what')
    let curListEle = lists[i]
    let curResultEle = result
    let prevResultEle = null
    while (curListEle) {
      if (curListEle.val < curResultEle.val) {
        if (prevResultEle) {
          const temp = curListEle.next
          prevResultEle.next = curListEle
          curListEle.next = curResultEle
          curListEle = temp
          prevResultEle = prevResultEle.next
        } else {
          const temp = curListEle.next
          curListEle.next = curResultEle
          curListEle = temp
        }
      } else {
        if (curResultEle.next === null) {
          const temp = curListEle.next
          curResultEle.next = curListEle
          curListEle = temp
        } else {
          prevResultEle = curResultEle
          curResultEle = curResultEle.next
        }
      }
    }
  }
  console.log(result)
  return result
}
