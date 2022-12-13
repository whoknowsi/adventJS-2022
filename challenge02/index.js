// 121 puntos
function countHours(year, holidays) {
    return holidays
        .filter(diaMes => new Date(diaMes + "/" + year).getDay() % 6)
        .length * 2
}

// 91 puntos, antes daba más y se podía usar arrow functions
// const countHours = (year, holidays) => {
//     return holidays.reduce((acc, current) => {
//         const day = new Date(`${current}/${year}`).getDay()
//         return (day > 0 && day < 6) ? acc + 2 : acc
//     }, 0)
// }

module.exports = countHours