const getGiftsToRefill = require('./index.js')

describe('Challenge 03', () => {
    test('Test #01 - expect return type array', () => {
        expect(Array.isArray(getGiftsToRefill([], [], []))).toBe(true);
    })

    test('Test #02 - expect getGiftsToRefill(a1, a2, a3) to be ["muñeca", "pc"])', () => {
        const a1 = ['bici', 'coche', 'bici', 'bici']
        const a2 = ['coche', 'bici', 'muñeca', 'coche']
        const a3 = ['bici', 'pc', 'pc']

        const expected = [
            "muñeca",
            "pc"
        ]

        expect(getGiftsToRefill(a1, a2, a3)).toEqual(expected)
    })

    test('Test #03 - expect getGiftsToRefill([], [], []) to be [])', () => {
        expect(getGiftsToRefill([], [], [])).toEqual([])
    })

    test("Test #04 - expect getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a']) to be [])", () => {
        expect(getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])).toEqual([])
    })

    test("Test #04 - expect getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']) to be ['a', 'b', 'c'])", () => {
        expect(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])).toEqual(['a', 'b', 'c'])
    })

    test("Test #05 - expect getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']) to be ['a', 'b', 'c', 'd', 'e', 'f'])", () => {
        expect(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
    })



})