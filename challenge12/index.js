function selectSleigh(distance, sleighs) {
    const found = sleighs.reverse().find((x) => x.consumption * distance <= 20)
    return found ? found.name : null
}

module.exports = selectSleigh