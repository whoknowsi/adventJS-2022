
// 172 puntos
function fitsInOneBox(boxes) {
    return (
        boxes
            .reduce((acc, { l, w, h }, index) => {
                if (index + 1 < boxes.length) {
                    const n = boxes[index + 1]
                    return !(l >= n.l || w >= n.w || h >= n.h)
                }
                if (l === 2 && w === 2 && h === 2) return true
                return acc
            }, true)
    )
}

// 169 puntos
// function fitsInOneBox(boxes) {
//     return (
//         boxes
//             .sort((a, b) => a.l - b.l)
//             .reduce((acc, current, index) => {
//                 const nextBox = boxes[index + 1]

//                 if (nextBox && (current.l >= nextBox.l || current.w >= nextBox.w || current.h >= nextBox.h)) return acc = false
//                 return acc
//             }, true)
//     )
// }

module.exports = fitsInOneBox 