const fitsInOneBox = (boxes) => {
    return (
        boxes
            .sort((a, b) => a.l - b.l)
            .reduce((acc, current, index) => {
                const nextBox = boxes[index + 1]

                if (nextBox && (current.l >= nextBox.l || current.w >= nextBox.w || current.h >= nextBox.h)) return acc = false
                return acc
            }, true)
    )
}

module.exports = fitsInOneBox 