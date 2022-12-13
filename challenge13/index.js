function getFilesToBackup(lastBackup, changes) {
    return [...new Set(changes.map(x => x[1] > lastBackup ? x[0] : ''))]
        .filter(x => x !== '')
        .sort((a, b) => a - b)
}

module.exports = getFilesToBackup