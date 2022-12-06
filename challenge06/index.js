
// puntos 160
function createCube(size) {
    let top = []
    let bottom = []
    for (let i = 0; i < size; i++) {
        top.push((' ').repeat(size - i - 1) + '/\\'.repeat(i + 1) + ('_\\').repeat(size))
        bottom.push((' ').repeat(i) + '\\/'.repeat(size - i) + ('_/').repeat(size))

    }
    return [top, bottom].flat().join('\n')
}

// puntos 100
// function createCube(size) {
//     let cube = ''
//     const H = size * 2
//     for (let i = 0; i < H; i++) {
//         if (i < size) {
//             cube += (' ').repeat(size - i - 1) + '/\\'.repeat(i + 1) + ('_\\').repeat(size) + '\n'
//         } else {
//             cube += (' ').repeat(i - size) + '\\/'.repeat(H - i) + ('_/').repeat(size) + (H === i + 1 ? '' : '\n')
//         }
//     }
//     return cube
// }

module.exports = createCube