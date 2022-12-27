const canExit = require('./index.js')

describe('Challenge 24', () => {
  test("Test #01 - expect return type boolean", () => {
    expect(typeof canExit([[]])).toBe('boolean')
  })

  test(`Test #02 - expected canExit([[' ', ' ', 'W', ' ', 'S'],[' ', ' ', ' ', ' ', ' '],[' ', ' ', ' ', 'W', ' '],['W', 'W', ' ', 'W', 'W'],[' ', ' ', ' ', ' ', 'E']]) to be true`, () => {
    expect(canExit([[' ', ' ', 'W', ' ', 'S'], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', 'W', ' '], ['W', 'W', ' ', 'W', 'W'], [' ', ' ', ' ', ' ', 'E']])).toBe(true)
  })

  test(`Test #03 - canExit([[' ', ' ', 'W', 'W', 'S'],[' ', ' ', ' ', 'W', ' '],[' ', ' ', ' ', 'W', ' '],['W', 'W', ' ', 'W', 'W'],[' ', ' ', ' ', ' ', 'E']]) to be false`, () => {
    expect(canExit([[' ', ' ', 'W', 'W', 'S'], [' ', ' ', ' ', 'W', ' '], [' ', ' ', ' ', 'W', ' '], ['W', 'W', ' ', 'W', 'W'], [' ', ' ', ' ', ' ', 'E']])).toBe(false)
  })

  test(`Test #04 - canExit([[' ', ' ', 'W', 'W', 'S'],[' ', ' ', ' ', 'W', ' '],[' ', ' ', ' ', 'W', ' '],['W', 'W', ' ', ' ', 'W'],[' ', ' ', ' ', ' ', 'E']]) to be false`, () => {
    expect(canExit([[' ', ' ', 'W', 'W', 'S'], [' ', ' ', ' ', 'W', ' '], [' ', ' ', ' ', 'W', ' '], ['W', 'W', ' ', ' ', 'W'], [' ', ' ', ' ', ' ', 'E']])).toBe(false)
  })

  test(`Test #05 - canExit([['E', ' ', ' ', ' ', 'S']]) to be true`, () => {
    expect(canExit([['E', ' ', ' ', ' ', 'S']])).toBe(true)
  })

  test(`Test #06 - canExit([['E', ' ', 'W', ' ', 'S']]) to be false`, () => {
    expect(canExit([['E', ' ', 'W', ' ', 'S']])).toBe(false)
  })

  test(`Test #07 - canExit([['E', ' ', 'W', ' ', 'S']]) to be false`, () => {
    expect(canExit([['E', ' ', 'W', ' ', 'S']])).toBe(false)
  })

  test(`Test #08 - canExit([['E', ' ', 'W', ' ', 'S'],[' ', ' ', ' ', ' ', ' ']]) to be true`, () => {
    expect(canExit([['E', ' ', 'W', ' ', 'S'], [' ', ' ', ' ', ' ', ' ']])).toBe(true)
  })

  test(`Test #09 - canExit([['E', ' ', 'W', ' ', 'S'],[' ', ' ', ' ', ' ', ' '],['W', 'W', 'W', 'W', 'W']]) to be true`, () => {
    expect(canExit([['E', ' ', 'W', ' ', 'S'], [' ', ' ', ' ', ' ', ' '], ['W', 'W', 'W', 'W', 'W']])).toBe(true)
  })

  test(`Test #10 - canExit([['E', ' ', 'W', ' ', 'S'],[' ', ' ', 'W', ' ', ' '],['W', 'W', 'W', 'W', 'W']]) to be false`, () => {
    expect(canExit([['E', ' ', 'W', ' ', 'S'], [' ', ' ', 'W', ' ', ' '], ['W', 'W', 'W', 'W', 'W']])).toBe(false)
  })

  test(`Test #11 - canExit([['E', 'S', 'W', 'W', 'W'],['W', 'W', 'W', 'W', 'W'],['W', 'W', 'W', 'W', 'W']]) to be true`, () => {
    expect(canExit([['E', 'S', 'W', 'W', 'W'], ['W', 'W', 'W', 'W', 'W'], ['W', 'W', 'W', 'W', 'W']])).toBe(true)
  })
})