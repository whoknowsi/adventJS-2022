const selectSleigh = require('./index.js')

describe('Challenge 12', () => {
    test("Test #01 - expect return type string if it's not null", () => {
        expect(typeof selectSleigh(1, [
            { name: 'pheralb', consumption: 0.3 },
            { name: 'TMChein', consumption: 0.5 }
        ])).toBe('string')
    })

    test("Test #02 - expect getCompleted(1, [{ name: 'pheralb', consumption: 0.3 }, { name: 'TMChein', consumption: 0.5 }]) to be 'TMChein')", () => {
        expect(selectSleigh(1, [
            { name: 'pheralb', consumption: 0.3 },
            { name: 'TMChein', consumption: 0.5 }
        ])).toBe('TMChein')
    })

    test("Test #03 - expect selectSleigh(10, [ { name: 'Pedrosillano', consumption: 1 },{ name: 'SamarJaffal', consumption: 5 }]) to be 'Pedrosillano')", () => {
        expect(selectSleigh(10, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 5 }
        ])).toBe('Pedrosillano')
    })

    test("Test #04 - expect selectSleigh(10, [{ name: 'Pedrosillano', consumption: 1 },{ name: 'SamarJaffal', consumption: 2 },{ name: 'marcospage', consumption: 3 }]) to be 'SamarJaffal')", () => {
        expect(selectSleigh(10, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
        ])).toBe('SamarJaffal')
    })

    test("Test #05 - selectSleigh(50, [{ name: 'Pedrosillano', consumption: 1 },{ name: 'SamarJaffal', consumption: 2 },{ name: 'marcospage', consumption: 3 }]) to be null)", () => {
        expect(selectSleigh(50, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
        ])).toBe(null)
    })
})