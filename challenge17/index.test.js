const carryGifts = require('./index.js')

describe('Challenge 17', () => {
    test("Test #01 - expect return type array", () => {
        expect(typeof carryGifts([], 1)).toBe('object')
    })

    test(`Test #02 - expect carryGifts(['game', 'bike', 'book', 'toy'], 10) to be ["game bike","book toy"]`, () => {
        expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toEqual(["game bike", "book toy"])
    })

    test(`Test #03 - expect carryGifts(['game', 'bike', 'book', 'toy'], 7) to be ["game","bike","book toy"]`, () => {
        expect(carryGifts(['game', 'bike', 'book', 'toy'], 7)).toEqual(["game", "bike", "book toy"])
    })

    test(`Test #04 - expect carryGifts(['game', 'bike', 'book', 'toy'], 4) to be ["game","bike","book","toy"]`, () => {
        expect(carryGifts(['game', 'bike', 'book', 'toy'], 4)).toEqual(["game", "bike", "book", "toy"])
    })

    test(`Test #05 - expect carryGifts(['toy', 'gamme', 'toy', 'bike'], 6) to be ["toy","gamme","toy","bike"]`, () => {
        expect(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)).toEqual(["toy", "gamme", "toy", "bike"])
    })

    test(`Test #06 - expect carryGifts(['toy', 'toy', 'toy', 'toy'], 2) to be []`, () => {
        expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2)).toEqual([])
    })

    test(`Test #07 - expect carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7) to ["toy toy","disk","disk toy","toy"]`, () => {
        expect(carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)).toEqual(["toy toy", "disk", "disk toy", "toy"])
    })
})