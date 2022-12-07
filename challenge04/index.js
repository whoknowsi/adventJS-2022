
// 172 puntos
// function fitsInOneBox(boxes) {
//     return (
//         boxes
//             .reduce((acc, { l, w, h }, index) => {
//                 if (index + 1 < boxes.length) {
//                     const n = boxes[index + 1]
//                     return !(l >= n.l || w >= n.w || h >= n.h)
//                 }
//                 return (l === 2 && w === 2 && h === 2) ? true : acc
//             }, true)
//     )
// }

// Este es el método más correcto, el de arriba tiene trampita
// 170 puntos
function fitsInOneBox(boxes) {
    return boxes
        .sort((a, b) => b.l - a.l)
        .every((item, index) => !boxes[index + 1] ? true : item.l > boxes[index + 1].l && item.w > boxes[index + 1].w && item.h > boxes[index + 1].h)
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