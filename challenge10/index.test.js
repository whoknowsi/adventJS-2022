const checkJump = require('./index.js')

describe('Challenge 10', () => {
    test('Test #01 - expect return type number', () => {
        expect(typeof checkJump([1])).toBe('boolean')
    })

    test('Test #02 - checkJump([1, 2, 1]) to be true)', () => {
        expect(checkJump([1, 2, 1])).toBe(true)
    })

    test('Test #03 - checkJump([1, 3, 8, 5, 2]) to be true)', () => {
        expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
    })

    test('Test #04 - checkJump([1, 7, 3, 5]) to be false)', () => {
        expect(checkJump([1, 7, 3, 5])).toBe(false)
    })

    test('Test #05 - checkJump([1, 2, 3, 2, 1]) to be true)', () => {
        expect(checkJump([1, 2, 3, 2, 1])).toBe(true)
    })

    test('Test #06 - checkJump([1, 2, 2, 2, 1]) to be true)', () => {
        expect(checkJump([1, 2, 2, 2, 1])).toBe(true)
    })

    test('Test #07 - checkJump([0, 1, 0]) to be true)', () => {
        expect(checkJump([0, 1, 0])).toBe(true)
    })

    test('Test #08 - checkJump([2, 2, 2, 2]) to be false)', () => {
        expect(checkJump([2, 2, 2, 2])).toBe(false)
    })

    test('Test #09 - checkJump([1, 2, 3]) to be false)', () => {
        expect(checkJump([1, 2, 3])).toBe(false)
    })

    test('Test #10 - checkJump([1, 2, 3, 2, 1, 2, 3]) to be false)', () => {
        expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
    })

    test('Test #11 - checkJump([1, 1000, 900, 800]) to be true)', () => {
        expect(checkJump([1, 1000, 900, 800])).toBe(true)
    })

    test('Test #12 - checkJump([1, 1000, 100, 800]) to be false)', () => {
        expect(checkJump([1, 1000, 100, 800])).toBe(false)
    })

    test('Test #13 - checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1]) to be true)', () => {
        expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true)
    })

    test('Test #14 - checkJump([1, 2, 3, 1, 3, 1]) to be false)', () => {
        expect(checkJump([1, 2, 3, 1, 3, 1])).toBe(false)
    })

    test('Test #15 - checkJump([1, 3, 2, 5, 4, 3, 2, 1]) to be false)', () => {
        expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toBe(false)
    })
})