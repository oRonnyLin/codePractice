/**
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
Example 4:

Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
Example 5:

Input:
s = "acdcb"
p = "a*c?b"
Output: false
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  const dp = [...new Array(s.length + 1)].map(() => new Array(p.length + 1).fill(false))
  dp[0][0] = true
  for (let j = 1; j <= p.length; j++) {
    dp[0][j] = p[j - 1] === '*' && dp[0][j - 1]
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      dp[i][j] = (() => {
        if (p[j - 1] === '*') {
          for (let k = 0; k <= i - 1; k++) {
            if (dp[k][j]) {
              return true
            }
          }
          return dp[i][j - 1]
        }
        return (s[i - 1] === p[j - 1] || p[j - 1] === '?') && dp[i - 1][j - 1]
      })()
    }
  }
  return dp[s.length][p.length]
}
//   Test Cases
//   s = 'adceb';
//   p = '*a*b';
//   Algorithm
//   dp[i][j]: Is match for string s.slice(0, i) and p.slice(0, j)
//   dp[i][j] = dp[k][j] means * represents n characters.
//   dp[i][j] = dp[i][j - 1] means * represents zero characters.
//   dp[i][j] = (() => {
//     if (p[j - 1] === '*') {
//       for (let k = 0; k <= i - 1; k++) {
//         if (dp[k][j]) {
//           return true;
//         }
//       }
//       return dp[i][j - 1];
//     }
//     return (s[i - 1] === p[j - 1] || p[j - 1] === '?') && dp[i - 1][j - 1];
//   })();
//   Boundary Conditions
//   dp[0][0] = true because empty string is matched with empty pattern.
//   dp[0][j] = p[j - 1] === '*' && dp[i][j - 1] because empty string is only matched with empty pattern.
