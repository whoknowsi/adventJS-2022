// Sí, 10 puntos nada más, complejidad 6 y ronda las 1000 ops/s, si a alguien se le ocurre cómo 
// bajarle a la complejidad me dice (Con while intenté y es lo mismo)
function howManyReindeers(reindeerTypes, gifts) {
    reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)

    const traverse = (reindeers, weight) => {
        reindeerTypes.forEach(({ weightCapacity }, i) => {
            if (weight - weightCapacity >= 0) {
                reindeers[i].num += 1
                weight -= weightCapacity
            }
        })
        return weight > 0
            ? traverse(reindeers, weight)
            : reindeers
    }

    return gifts.map(({ country, weight }) => {
        const result = traverse(reindeerTypes.map(({ type }) => {
            return {
                type: type,
                num: 0
            }
        }), weight)
        return {
            country: country,
            reindeers: result.reverse().filter(({ num }) => !!num)
        }
    })
}

module.exports = howManyReindeers