const countHours = require('./index.js')

describe('Challenge 02', () => {
    test('Test #01 - return type', () => {
        const year = 2022
        const holidays = []

        expect(Number.isNaN(countHours(year, holidays))).toBe(false)
    })

    test('Test #02 - countHours(2023, ["01/06", "04/01", "12/25"])', () => {
        const year = 2023
        const holidays = ["01/06", "04/01", "12/25"]

        expect(countHours(year, holidays)).toBe(4)
    })

    test('Test #03 - countHours(2022, ["01/06", "04/01", "12/25"])', () => {
        const year = 2022
        const holidays = ["01/06", "04/01", "12/25"]

        expect(countHours(year, holidays)).toBe(4)
    })

    test('Test #04 - countHours(1985, ["01/01", "01/06", "02/02", "02/17", "02/28", "06/03", "12/06", "12/25"])', () => {
        const year = 1985
        const holidays = ["01/01", "01/06", "02/02", "02/17", "02/28", "06/03", "12/06", "12/25"]

        expect(countHours(year, holidays)).toBe(10)
    })

    test('Test #05 - countHours(2000, ["01/01"])', () => {
        const year = 2000
        const holidays = ["01/01"]

        expect(countHours(year, holidays)).toBe(0)
    })
})