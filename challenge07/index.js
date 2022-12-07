function getGiftsToRefill(a1, a2, a3) {
    return [...new Set(a1), ...new Set(a2), ...new Set(a3)].filter((item, index, array) => {
        const removedItem = [...array]
        removedItem.splice(index, 1)
        return !removedItem.includes(item)
    })
}

module.exports = getGiftsToRefill