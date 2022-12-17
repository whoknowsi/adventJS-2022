const decorateTree = require('./index.js')

describe('Challenge 15', () => {
    test("Test #01 - expect return type array", () => {
        expect(typeof decorateTree('')).toBe('object')
    })

    test('Test #02 - expect decorateTree("B P R P") to be ["R","P B", "R B B","B P R P"]', () => {
        expect(decorateTree("B P R P")).toEqual(["R", "P B", "R B B", "B P R P"])
    })

    test('Test #03 - expect decorateTree("B B") to be ["B", "B B"]', () => {
        expect(decorateTree('B B')).toEqual(["B", "B B"])
    })

    test('Test #04 - expect decorateTree("B B P R P R R") to be ["B","R P","B P P","P R B R","P P B B P","B R B B B R","B B P R P R R"]', () => {
        expect(decorateTree('B B P R P R R')).toEqual(["B", "R P", "B P P", "P R B R", "P P B B P", "B R B B B R", "B B P R P R R"])
    })

    test('Test #05 - expect decorateTree("R R P R R") to be ["R","R R","P B P","R B B R","R R P R R"]', () => {
        expect(decorateTree('R R P R R')).toEqual(["R", "R R", "P B P", "R B B R", "R R P R R"])
    })
})