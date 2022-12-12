// 400 puntos pasando 3000 ops/s - One-liner solution 
function selectSleigh(distance, sleighs) { return [{ name: null }, ...sleighs.filter(x => (20 / x.consumption) >= distance)].at(-1).name }

// 400 puntos pasando 3000 ops/s
// function selectSleigh(distance, sleighs) {
//     sleighs = sleighs.filter((x) => x.consumption * distance <= 20)
//     sleighs.unshift({ name: null })
//     return sleighs[sleighs.length - 1].name
// }

// 360 puntos pasando 3000 ops/s
// function selectSleigh(distance, sleighs) {
//     const found = sleighs.reverse().find((x) => x.consumption * distance <= 20)
//     return found ? found.name : null
// }

module.exports = selectSleigh