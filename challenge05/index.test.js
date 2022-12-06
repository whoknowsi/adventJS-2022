const getMaxGifts = require('./index.js')

describe('Challenge 05', () => {
    test('Test #01 - expected return type to be number', () => {
        expect(typeof getMaxGifts([], 0, 0)).toBe("number")
    })

    test("Test #02 - expected getMaxGifts([12, 3, 11, 5, 7], 20, 3) to be 20", () => {
        expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20)
    })

    test("Test #03 - expected getMaxGifts([50], 15, 1) to be 0", () => {
        expect(getMaxGifts([50], 15, 1)).toBe(0)
    })

    test("Test #04 - expected getMaxGifts([50], 100, 1) to be 50", () => {
        expect(getMaxGifts([50], 100, 1)).toBe(50)
    })

    test("Test #05 - expected getMaxGifts([50, 70], 100, 1) to be 70", () => {
        expect(getMaxGifts([50, 70], 100, 1)).toBe(70)
    })

    test("Test #06 - expected getMaxGifts([50, 70, 30], 100, 2) to be 100", () => {
        expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100)
    })

    test("Test #07 - expected getMaxGifts([50, 70, 30], 100, 3) to be 100", () => {
        expect(getMaxGifts([50, 70, 30], 100, 3)).toBe(100)
    })

    test("Test #08 - expected getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4) to be 100", () => {
        expect(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)).toBe(100)
    })

    test("Test #09 - expected getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000) to be 115", () => {
        expect(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)).toBe(115)
    })

})