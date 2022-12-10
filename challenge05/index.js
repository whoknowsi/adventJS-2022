// No siempre pasa los test aleatorios, tendría que revisar en qué casos falla con más detenimiento
// pero en los test que se ejecutan al hacer npm test pasa todos
// Da entre 120 - 140 puntos cuando se le canta kjj
function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let counter = 0
    let sum = 0

    return giftsCities.reduce((acc, curr, index) => {
        if (acc < curr && curr <= maxGifts) acc = curr
        sum = curr
        counter++
        giftsCities.forEach((secondCity, index2) => {
            if (index2 === index) return acc
            if (counter < maxCities && ((sum + secondCity) <= maxGifts)) {
                sum += secondCity
                counter++
                if (counter <= maxCities) {
                    if (acc < sum && sum <= maxGifts) {
                        acc = sum
                    }
                }
            }
        })
        counter = 0
        return acc
    }, 0)
}

module.exports = getMaxGifts 