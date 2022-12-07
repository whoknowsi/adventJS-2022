// Usando operador binario "<< 0" para ganar un puntito extra, aporte de xifre <3
// 165 puntos
function distributeGifts(packOfGifts, reindeers) {
    return (reindeers.join('').length * 2 / packOfGifts.join('').length) << 0
}

// // 164 puntos
// function distributeGifts(packOfGifts, reindeers) {
//     return Math.trunc(reindeers.join('').length * 2 / packOfGifts.join('').length)
// }

// 135 puntos
// const distributeGifts = (packOfGifts, reindeers) => {
//     const limit = reindeers.join('').length * 2
//     const giftWeight = packOfGifts.join('').length
//     return Math.floor(limit / giftWeight)
// }

module.exports = distributeGifts 