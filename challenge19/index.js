function sortToys(toys, positions) {
    return positions.reduce((acc, curr, i) => {
        acc[curr] = toys[i]
        return acc
    }, []).slice(Math.min(...positions))
}

module.exports = sortToys