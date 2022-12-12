// 260 puntos
function getCompleted(part, total) {
    const partToSeconds = part.split(':')
        .reduce((acc, curr, i) => acc + curr * 60 ** (2 - i), 0)
    const totalToSeconds = total.split(':')
        .reduce((acc, curr, i) => acc + curr * 60 ** (2 - i), 0)

    let a = partToSeconds
    let b = totalToSeconds

    while (b) {
        let t = b
        b = a % b
        a = t
    }

    return `${partToSeconds / a}/${totalToSeconds / a}`
}

// Esta es la opción que prefiero pero tiene menos puntos
// 180 puntos
// function getCompleted(part, total) {
//     const mcd = (a, b) => !b ? a : mcd(b, a % b)

//     const partToSeconds = part.split(':')
//         .reduce((acc, curr, i) => acc + curr * 60 ** (2 - i), 0)
//     const totalToSeconds = total.split(':')
//         .reduce((acc, curr, i) => acc + curr * 60 ** (2 - i), 0)

//     const gcd = mcd(partToSeconds, totalToSeconds)

//     return `${partToSeconds / gcd}/${totalToSeconds / gcd}`
// }

module.exports = getCompleted