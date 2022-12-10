function checkJump(heights) {
    const left = heights.splice(0, heights.indexOf(Math.max(...heights)))
    const goodForLeft = left
        .slice(1)
        .every((l, i) => l >= left[i])
    const goofForRight = heights
        .slice(1)
        .every((h, i) => h <= heights[i])

    return goodForLeft && goofForRight && !!left.length && heights.length > 1
}

module.exports = checkJump