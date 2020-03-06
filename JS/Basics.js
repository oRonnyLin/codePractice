/**
 * 
 * Sample Output : Today is : Tuesday.
   Current time is : 10 PM : 30 : 38
 */
const displayDateTime = () => {
    let d = new Date()
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return `Today is : ${week[d.getDay()]}.` + `\n` + `Current time is : ${d.getHours()%12} ${d.getHours() > 11 ? 'PM' : 'AM'} : ${d.getMinutes()} : ${d.getSeconds()}`
}

/**
 * Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */
const displayDate = () => {
    let d = new Date()
    const month = ['01', '02', '03','04','05','06','07','08','09','10','11','12']
    return `${month[d.getMonth()]}-${d.getUTCDate() < 10 ? '0'+d.getDate() : d.getDate()}-${d.getFullYear()}`
}

const triangleArea = (side1, side2, side3) => {
    
}
