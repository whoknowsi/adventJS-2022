function checkPart(part) {
    let counter = 0
    const reversedArray = part.split('').reverse()
    return part.split('').every((el, index, array) => {
        if (el === reversedArray[index]) return true
        else if (counter === 0) {
            array.splice(index, 1)
            reversedArray.splice(reversedArray.length - 1 - index, 1)
            reversedArray.splice(index, 1)
            array.splice(reversedArray.length - 1 - index, 1)
            counter++
            return true
        } else return false
    })
}

module.exports = checkPart