const getOptimalPath = require('./index.js')

describe('Challenge 14', () => {
    test("Test #01 - expect return type array", () => {
        expect(typeof getOptimalPath([[0]])).toBe('number')
    })

    test("Test #02 - expect getOptimalPath([[0], [7, 4], [2, 4, 6]]) to be 8", () => {
        expect(getOptimalPath([[0], [7, 4], [2, 4, 6]])).toBe(8)
    })

    test("Test #03 - expect getOptimalPath([[0], [2, 3]]) to be 2", () => {
        expect(getOptimalPath([[0], [2, 3]])).toBe(2)
    })

    test("Test #04 - expect getOptimalPath([[0], [3, 4], [9, 8, 1]]) to be 5", () => {
        expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
    })

    test("Test #05 - expect getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) to be 8", () => {
        expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
    })

    test("Test #06 - expect getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]]) to be 7", () => {
        expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])).toBe(7)
    })

})