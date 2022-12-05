const fitsInOneBox = require('./index.js')

describe('Challenge 04', () => {
    test('Test #01 - return type', () => {
        expect(typeof fitsInOneBox([])).toBe("boolean")
    })

    test("Test #02 - fitsInOneBox([{ l: 1, w: 1, h: 10 }, { l: 3, w: 3, h: 12 }, { l: 2, w: 2, h: 1 },]))", () => {
        const boxes = [
            { l: 1, w: 1, h: 10 },
            { l: 3, w: 3, h: 12 },
            { l: 2, w: 2, h: 1 },
        ]

        expect(fitsInOneBox(boxes)).toBe(false)
    })

    test("Test #03 - fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }])", () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 }
        ]

        expect(fitsInOneBox(boxes)).toBe(true)
    })

    test("Test #04 - fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 3, w: 1, h: 3 }])", () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 3, w: 1, h: 3 }
        ]

        expect(fitsInOneBox(boxes)).toBe(false)
    })

    test("Test #05 - fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }, { l: 2, w: 10, h: 2}])", () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 2, w: 10, h: 2 }
        ]

        expect(fitsInOneBox(boxes)).toBe(false)
    })

    test("Test #05 - fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 3, w: 3, h: 3 }, { l: 2, w: 2, h: 2 }])", () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 3, w: 3, h: 3 },
            { l: 2, w: 2, h: 2 }
        ]

        expect(fitsInOneBox(boxes)).toBe(true)
    })
})