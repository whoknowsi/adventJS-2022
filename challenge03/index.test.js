const distributeGifts = require('./index.js')

describe('Challenge 03', () => {
    test('Test #01 - return type', () => {
        expect(Number.isNaN(distributeGifts(['a'], ['a']))).toBe(false)
    })

    test('Test #02 - distributeGifts(packOfGifts, reindeers))', () => {
        const packOfGifts = ["book", "doll", "ball"]
        const reindeers = ["dasher", "dancer"]

        expect(distributeGifts(packOfGifts, reindeers)).toBe(2)
    })

    test('Test #03 - distributeGifts(["a", "b", "c"], ["d", "e"]))', () => {
        const packOfGifts = ["a", "b", "c"]
        const reindeers = ["d", "e"]

        expect(distributeGifts(packOfGifts, reindeers)).toBe(1)
    })

    test("Test #04 - it should return 0 if reindeers can't carry any pack: distributeGifts(['videogames', 'console'], ['midu']))", () => {
        const packOfGifts = ['videogames', 'console']
        const reindeers = ['midu']

        expect(distributeGifts(packOfGifts, reindeers)).toBe(0)
    })

    test("Test #05 - distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
        const packOfGifts = ['game', 'videoconsole', 'computer']
        const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']

        expect(distributeGifts(packOfGifts, reindeers)).toBe(5)
    })

    test("Test #05 - distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))", () => {
        const packOfGifts = ['music']
        const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']

        expect(distributeGifts(packOfGifts, reindeers)).toBe(26)
    })
})