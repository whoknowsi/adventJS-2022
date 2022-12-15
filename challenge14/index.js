function getOptimalPath(path) {
    return path
        .reverse()
        .reduce((acc, curr) => curr
            .map((num, i) => num + Math.min(acc[i], acc[i + 1])))[0]
}

module.exports = getOptimalPath