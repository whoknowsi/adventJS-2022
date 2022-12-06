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