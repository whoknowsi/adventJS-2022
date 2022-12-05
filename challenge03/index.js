const distributeGifts = (packOfGifts, reindeers) => {
    const limit = reindeers.join('').length * 2
    const giftWeight = packOfGifts.join('').length
    return Math.floor(limit / giftWeight)
}

module.exports = distributeGifts 