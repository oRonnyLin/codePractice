/**
 * @param {string[]} logs
 * @return {string[]}
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
  for (i = 0; i < logs.length; i++) {
    const logWord = logs[i].split(' ')
    if (typeof +logWord[1] === 'number' && (+logWord[1] % 1) === 0) {
      digitLogs.push(logs[i])
    } else {
      letterLogs.push({ id: logWord.shift(), words: logWord.join(' '), idx: i })
    }
  }
  // console.log('letterLogs: ',letterLogs)
  letterLogs.sort(function (a, b) {
    // let aID
    // let bID
    // console.log('a: ',a)
    // console.log('b: ',b)
    // const aID = a.shift()
    // let aWords = a.join(' ')
    // console.log(`1b: ${b}`)
    // console.log(`2b: ${b}, bWords: ${bWords}`)

    // const bID = b.shift()
    // let bWords = b.join(' ')
    // console.log(`aWords: ${aWords}, aID: ${aID}`)
    // console.log(`3b: ${b}, bWords: ${bWords}, bID: ${bID}`)
    // const aWords = a.replace(/[a-z]+[0-9]+/g, function(match, offset, string){
    //     aID=match
    //     return ''
    // })
    // const bWords = b.replace(/[a-z]+[0-9]+/g, function(match, offset, string){
    //     bID=match
    //     return ''
    // })
    const compare = a.words.localeCompare(b.words)
    if (compare === 0) {
      return compareAlphaNum(a.id, b.id)
    }
    return compare
  })
  // console.log(letterLogs)
  // let sortedLetterLog = letterLogs.map(({idx}) => {return logs[idx]})
  // console.log(sortedLetterLog)
  return [...letterLogs.map(({ idx }) => { return logs[idx] }), ...digitLogs]
}
