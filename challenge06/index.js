function createCube(size) {
    let cube = ''
    const H = size * 2
    for (let i = 0; i < H; i++) {
        if (i < size) {
            cube += (' ').repeat(size - i - 1) + '/\\'.repeat(i + 1) + ('_\\').repeat(size) + '\n'
        } else {
            cube += (' ').repeat(i - size) + '\\/'.repeat(H - i) + ('_/').repeat(size) + (H === i + 1 ? '' : '\n')
        }
    }
    return cube
}

module.exports = createCube