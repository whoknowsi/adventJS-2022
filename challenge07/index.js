// 400 puntos si se spamea submit muchas veces
function getGiftsToRefill(a1, a2, a3) {
    return [...new Set([...a1, ...a2, ...a3])].filter(e => a1.includes(e) + a2.includes(e) + a3.includes(e) === 1);
}

// Prefiero este
// 200 puntos
// function getGiftsToRefill(a1, a2, a3) {
//     return [...new Set(a1), ...new Set(a2), ...new Set(a3)].filter((item, index, array) => {
//         const removedItem = [...array]
//         removedItem.splice(index, 1)
//         return !removedItem.includes(item)
//     })
// }

module.exports = getGiftsToRefill