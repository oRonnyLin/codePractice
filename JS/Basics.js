/**
 *
 * Sample Output : Today is : Tuesday.
   Current time is : 10 PM : 30 : 38
 */

const displayDateTime = () => {
  const d = new Date()
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return `Today is : ${week[d.getDay()]}.` + '\n' + `Current time is : ${d.getHours() % 12} ${d.getHours() > 11 ? 'PM' : 'AM'} : ${d.getMinutes()} : ${d.getSeconds()}`
}
/**
 * Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */
const displayDate = () => {
  const d = new Date()
  const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  return `${month[d.getMonth()]}-${d.getUTCDate() < 10 ? '0' + d.getDate() : d.getDate()}-${d.getFullYear()}`
}

const triangleArea = (side1, side2, side3) => {
  if (side1 === undefined) {
    [side1, side2, side3] = [5, 6, 7]
  }
  const p = side1 * side2 * side3 / 2
  return Math.sqrt(p * (p - side1) * (p - side2) * (p - side3))
}

const rotateString = () => {
  let string = 'w3resource'
  let i = 0
  const len = string.length
  do {
    console.log(string)
    string = string[len - 1] + string.substring(0, len - 1)
    i++
  } while (i < len)
  return string
}

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
}

const findSun = () => {
  let year = 2014
  const result = []
  while (year <= 2050) {
    const d = new Date(year, 0)
    if (d.getDay() === 0) {
      result.push(year)
    }
    year++
  }
  return result
}

const randNum = () => {
  const readline = require('readline')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  const randNum = Math.floor(Math.random() * (11)) + 0
  const prompting = () => {
    rl.question('Enter a number', (answer) => {
      if (parseInt(answer, 10) === randNum) {
        console.log('Good Work!')
        rl.close()
      } else {
        console.log('Not Matched')
        prompting()
      }
      console.log(`Thank you for your valuable feedback: ${randNum}`)
    })
  }
  prompting()
}

const calculateXmas = () => {
  const d = new Date()
  const year = d.getFullYear()
  let Xmas = new Date(year, 11, 25)
  if (Xmas < d) {
    Xmas = new Date(year + 1, 11, 25)
  }
  const diff = Xmas.valueOf() - d.valueOf()
  console.log(Xmas.toDateString())
  console.log(d.toDateString())
  return Math.floor(diff / 1000 / 60 / 60 / 24)
}

const questions = {
  0: displayDateTime,
  1: displayDate,
  2: triangleArea,
  3: rotateString,
  4: isLeapYear,
  5: findSun,
  6: randNum,
  7: calculateXmas
}

console.log(questions[7]())
