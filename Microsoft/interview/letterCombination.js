/**
 *
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

function letterCombinations (digits) {
  var map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  var res = []
  var prefix = []

  if (digits.length) {
    traverse(0)
  }
  return res

  function traverse (idx) {
    if (idx === digits.length) {
      return res.push(prefix.join(''))
    }

    var str = map[digits[idx] - '0']

    for (var i = 0; i < str.length; i++) {
      prefix.push(str[i])
      traverse(idx + 1)
      prefix.pop()
    }
  }
}
