const countHours = (year, holidays) => {
    return holidays.reduce((acc, current) => {
        const day = new Date(`${current}/${year}`).getDay()
        return (day > 0 && day < 6) ? acc + 2 : acc
    }, 0)
}

module.exports = countHours