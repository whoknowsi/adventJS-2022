function carryGifts(gifts, maxWeight) {
    const regex = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g')
    return gifts.join(' ').match(regex) || []
}

module.exports = carryGifts