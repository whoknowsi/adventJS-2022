// 200 puntos con más de 1000 ops/s
function dryNumber(dry, numbers) {
    return [...Array(numbers + 1).keys()]
        .slice(1)
        .filter(x => (x + '').includes(dry))
}

// 160 puntos con más de 1000 ops/s
// function dryNumber(dry, numbers) {
//     const regex = new RegExp(`\\d*?${dry}\\d*?(?=,|$)`, 'g')
//     const result = [...Array(numbers + 1).keys()]
//         .slice(1)
//         .join(',')
//         .match(regex) || []
//     return result.map(x => Number(x))
// }

module.exports = dryNumber