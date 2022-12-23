const printTable = require('./index.js')

describe('Challenge 21', () => {
  test("Test #01 - expect return type string", () => {
    expect(typeof printTable([])).toBe('string')
  })

  test(`Test #02 - expected printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
  ]) to be
  "++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************"`, () => {
    expect(printTable([
      { name: 'PlayStation 5', quantity: 9234782374892 },
      { name: 'Book Learn Web Dev', quantity: 23531 }
    ])).toEqual("++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************")
  })

  test(`Test #03 - expected printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
  ])) to be
  "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************"`, () => {
    expect(printTable([
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 }
    ])).toEqual("+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************")
  })

  test(`Test #04 - expected printTable([
    { name: 'Game', quantity: 10000 }
  ])) to be
  "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************"`, () => {
    expect(printTable([
      { name: 'Game', quantity: 10000 }
    ])).toEqual("+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************")
  })

  test(`Test #05 - expected printTable([
    { name: 'Game', quantity: 1234567890 }
  ])) to be
  "+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************"`, () => {
    expect(printTable([
      { name: 'Game', quantity: 1234567890 }
    ])).toEqual("+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************")
  })

  test(`Test #06 - expected printTable([
    { name: 'Toy', quantity: 12 },
    { name: 'Mic', quantity: 123 }
  ])) to be
  "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************"`, () => {
    expect(printTable([
      { name: 'Toy', quantity: 12 },
      { name: 'Mic', quantity: 123 }
    ])).toEqual("+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************")
  })

})