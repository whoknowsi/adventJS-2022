const countTime = require('./index.js')

describe('Challenge 09', () => {
    test('Test #01 - expect return type number', () => {
        expect(typeof countTime([1])).toBe('number')
    })

    test('Test #02 - countTime([0, 1, 1, 0, 1]) to be 7)', () => {
        expect(countTime([0, 1, 1, 0, 1])).toBe(7)
    })

    test('Test #03 - countTime([0, 0, 0, 1]) to be 21)', () => {
        expect(countTime([0, 0, 0, 1])).toBe(21)
    })

    test('Test #04 - countTime([0, 0, 1, 0, 0]) to be 28)', () => {
        expect(countTime([0, 0, 1, 0, 0])).toBe(28)
    })

    test('Test #05 - countTime([1, 0, 0, 1, 0, 0]) to be 14)', () => {
        expect(countTime([1, 0, 0, 1, 0, 0])).toBe(14)
    })

    test('Test #06 - countTime([1, 1, 0, 0, 0, 0]) to be 28)', () => {
        expect(countTime([1, 1, 0, 0, 0, 0])).toBe(28)
    })

    test('Test #07 - countTime([1, 1, 1]) to be 0)', () => {
        expect(countTime([1, 1, 1])).toBe(0)
    })

})