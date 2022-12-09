function countTime(leds) {
    const arrayofZeros = leds.join('').split('1')
    arrayofZeros[0] += arrayofZeros.pop()
    return arrayofZeros.sort((a, b) => b.length - a.length)[0].length * 7
}

module.exports = countTime