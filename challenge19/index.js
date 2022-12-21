// 400 puntos pasando las 3000 ops/s
function sortToys(toys, positions) {
    return toys
        .sort((a, b) =>
            positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
        )
}

// 300 puntos pasando las 2000 ops/s
// function sortToys(toys, positions) {
//     return positions.reduce((acc, curr, i) => {
//         acc[curr] = toys[i]
//         return acc
//     }, []).slice(Math.min(...positions))
// }

module.exports = sortToys