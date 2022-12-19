const dryNumber = require('./index.js')

describe('Challenge 18', () => {
    test("Test #01 - expect return type array", () => {
        expect(typeof dryNumber(0, 0)).toBe('object')
    })

    test(`Test #02 - expected dryNumber(1, 15) to be [1,10,11,12,13,14,15]`, () => {
        expect(dryNumber(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15])
    })

    test(`Test #03 - expected dryNumber(2, 20) to be [2,12,20]`, () => {
        expect(dryNumber(2, 20)).toEqual([2, 12, 20])
    })

    test(`Test #04 - expected dryNumber(3, 33) to be [3,13,23,30,31,32,33]`, () => {
        expect(dryNumber(3, 33)).toEqual([3, 13, 23, 30, 31, 32, 33])
    })

    test(`Test #05 - expected dryNumber(4, 45) to be [4,14,24,34,40,41,42,43,44,45]`, () => {
        expect(dryNumber(4, 45)).toEqual([4, 14, 24, 34, 40, 41, 42, 43, 44, 45])
    })

    test(`Test #06 - expected dryNumber(5, 55) to be [5,15,25,35,45,50,51,52,53,54,55]`, () => {
        expect(dryNumber(5, 55)).toEqual([5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55])
    })

    test(`Test #07 - expected dryNumber(9, 8) to be []`, () => {
        expect(dryNumber(9, 8)).toEqual([])
    })
})