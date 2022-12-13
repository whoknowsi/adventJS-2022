// 300 puntos
function getFilesToBackup(lastBackup, changes) {
    return [...new Set([...changes
        .filter(item => item[1] > lastBackup)
        .map(item => item[0])]
        .sort((a, b) => a - b))]
}

// 220 puntos
// function getFilesToBackup(lastBackup, changes) {
//     return [...new Set(changes
//         .map(x => x[1] > lastBackup ? x[0] : ''))]
//         .filter(x => x !== '')
//         .sort((a, b) => a - b)
// }

module.exports = getFilesToBackup