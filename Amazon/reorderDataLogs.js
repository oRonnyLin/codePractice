/**
 * @param {string[]} logs
 * @return {string[]}
 *
 * 1. Go through the logs, seperate the digitLogs from the alphaLogs
 * 2. For the alpha logs, sort them based on the words that follow the ID using localeCompare
 * 3. if they are the same, then compare their alphanumerical ID with regex match
 * 4. After sorting the alpha logs, concat them with the seperated digitLogs.
 */

const compareAlphaNum = function (a, b) {
  const alphaReg = /[a-z]+/
  const numReg = /[0-9]+/
  const aAlpha = a.match(alphaReg)
  const bAlpha = b.match(alphaReg)
  if (aAlpha === bAlpha) {
    const aNum = +a.match(numReg)[0]
    const bNum = +b.match(numReg)[0]
    return aNum === bNum ? 0 : aNum > bNum ? 1 : -1
  } else {
    return aAlpha[0].localeCompare(bAlpha[0])
  }
}
var reorderLogFiles = function (logs) {
  const digitLogs = []
  const letterLogs = []
  for (let i = 0; i < logs.length; i++) {
    const logWord = logs[i].split(' ')
    if (typeof +logWord[1] === 'number' && (+logWord[1] % 1) === 0) {
      digitLogs.push(logs[i])
    } else {
      letterLogs.push({ id: logWord.shift(), words: logWord.join(' '), idx: i })
    }
  }
  letterLogs.sort(function (a, b) {
    const compare = a.words.localeCompare(b.words)
    if (compare === 0) {
      return compareAlphaNum(a.id, b.id)
    }
    return compare
  })
  return [...letterLogs.map(({ idx }) => { return logs[idx] }), ...digitLogs]
}
