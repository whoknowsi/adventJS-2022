// 260 al pasar 2000 ops/s
function decorateTree(base) {
    const dictionary = {
        'PP': 'P',
        'BB': 'B',
        'RR': 'R',
        'BP': 'R',
        'PB': 'R',
        'RP': 'B',
        'PR': 'B',
        'BR': 'P',
        'RB': 'P'
    }

    const result = [base]
    let arrayOfBase = base.split(' ')
    const length = arrayOfBase.length
    for (let i = 0; i < length - 1; i++) {
        arrayOfBase = [...arrayOfBase].splice(1).map((x, i, a) => {
            const key = arrayOfBase[i] + x

            const result = dictionary[key]
            return result
        })
        result.unshift(arrayOfBase.join(' '))
    }
    return result
}

module.exports = decorateTree