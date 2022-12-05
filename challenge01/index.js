const wrapping = (gifts) => {
    return gifts.map((gift) => {
        const wrapping = "*".repeat(gift.length+2)
        return (`${wrapping}\n*${gift}*\n${wrapping}`)
    })
}

module.exports = wrapping