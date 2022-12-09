const checkPart = require('./index.js')

describe('Challenge 08', () => {
    test('Test #01 - expect return type boolean', () => {
        expect(typeof checkPart('')).toBe('boolean')
    })

    test('Test #02 - expect checkPart("uwu") to be true)', () => {
        expect(checkPart('uwu')).toBe(true)
    })

    test('Test #03 - expect checkPart("midu") to be false)', () => {
        expect(checkPart('midu')).toBe(false)
    })

    test('Test #04 - expect checkPart("lolol") to be true)', () => {
        expect(checkPart('lolol')).toBe(true)
    })

    test('Test #05 - expect checkPart("yolooloy") to be true)', () => {
        expect(checkPart('yolooloy')).toBe(true)
    })

    test('Test #06 - expect checkPart("zzzoonzzz") to be true)', () => {
        expect(checkPart('zzzoonzzz')).toBe(true)
    })

})