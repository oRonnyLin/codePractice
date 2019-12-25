/**
 * 1. get index of day in week
 * 2. compute k%7
 * 3. add result to index
 * 4. compute result%7
 * 5. return day of week at that index
 * @param {Day of week} day
 * @param {k days} k
 */
function solution (day, k) {
  const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  let index = week.indexOf(day)
  const daysToAdd = k % 7
  index = (index + daysToAdd) % 7
  return week[index]
}

console.log(solution('Sat', 23))
