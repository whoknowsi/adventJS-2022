const fixLetter = require('./index.js')

describe('Challenge 16', () => {
    test("Test #01 - expect return type string", () => {
        expect(typeof fixLetter('')).toBe('string')
    })

    test('Test #02 - expect fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `) to be "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye."', () => {
        expect(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)).toBe("Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.")
    })

    test(`Test #03 - expect fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?") to be "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"`, () => {
        expect(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")).toBe("Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?")
    })

    test(`Test #04 - expect fixLetter("  hi    santa    claus ") to be "Hi Santa Claus."`, () => {
        expect(fixLetter("  hi    santa    claus ")).toBe("Hi Santa Claus.")
    })

    test(`Test #05 - expect fixLetter("  hi    santa    claus . santa claus is the best  ") to be "Hi Santa Claus. Santa Claus is the best."`, () => {
        expect(fixLetter("  hi    santa    claus . santa claus is the best  ")).toBe("Hi Santa Claus. Santa Claus is the best.")
    })

    test(`Test #06 - expect fixLetter('  hi,santa claus. are you there ?   ') to be "Hi, Santa Claus. Are you there?"`, () => {
        expect(fixLetter('  hi,santa claus. are you there ?   ')).toBe("Hi, Santa Claus. Are you there?")
    })

    test(`Test #07 - expect fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ") to be "Hey Santa Claus. I want a bike. I want a videogame!"`, () => {
        expect(fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ")).toBe("Hey Santa Claus. I want a bike. I want a videogame!")
    })
})