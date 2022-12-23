const checkStepNumbers = require('./index.js')

describe('Challenge 22', () => {
  test("Test #01 - expect return type string", () => {
    expect(typeof checkStepNumbers([], [])).toBe('boolean')
  })

  test(`Test #02 - expected checkStepNumbers(["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"], [1, 33, 10, 2, 44, 20]) to be true`, () => {
    expect(checkStepNumbers(["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"], [1, 33, 10, 2, 44, 20])).toBe(true)
  })

  test(`Test #03 - expected checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) to be false`, () => {
    expect(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])).toBe(false)
  })

  test(`Test #04 - expected checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10]) to be true`, () => {
    expect(checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10])).toBe(true)
  })

  test(`Test #05 - expected checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6]) to be false`, () => {
    expect(checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])).toBe(false)
  })
})