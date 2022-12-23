// 400 puntos pasando las 3000 ops/s
function checkStepNumbers(systemNames, stepNumbers) {
    const baseObject = Object.assign({},
        ...systemNames.map((name, i) => ({ [name]: [] }))
    )

    return Object.values(systemNames.reduce((acc, curr, i) => {
        acc[curr] = [...acc[curr], stepNumbers[i]]
        return acc
    }, baseObject))
        .every((c) => c.slice(1).every((next, i) => next >= c[i]))
}

module.exports = checkStepNumbers