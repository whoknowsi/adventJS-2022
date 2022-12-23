const executeCommands = require('./index.js')

describe('Challenge 23', () => {
  test("Test #01 - expect return type array", () => {
    expect(typeof executeCommands([])).toBe('object')
  })

  test(`Test #02 - expected executeCommands(['MOV 5,V00','MOV 10,V01','DEC V00','ADD V00,V01',]) to be [14,10,0,0,0,0,0,0]`, () => {
    expect(executeCommands(['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01',])).toEqual([14, 10, 0, 0, 0, 0, 0, 0])
  })

  test(`Test #03 - expected executeCommands(['MOV 255,V00','INC V00','DEC V01','DEC V01']) to be [0,254,0,0,0,0,0,0]`, () => {
    expect(executeCommands(['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01'])).toEqual([0, 254, 0, 0, 0, 0, 0, 0])
  })

  test(`Test #04 - expected executeCommands(['MOV 10,V00','DEC V00','INC V01','JMP 1','INC V06']) to be [0,10,0,0,0,0,1,0]`, () => {
    expect(executeCommands(['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06'])).toEqual([0, 10, 0, 0, 0, 0, 1, 0])
  })

  test(`Test #05 - expected executeCommands(['MOV 10,V00','MOV V00,V01','MOV V01,V02','MOV V02,V03','MOV V03,V04']) to be [10,10,10,10,10,0,0,0]`, () => {
    expect(executeCommands(['MOV 10,V00', 'MOV V00,V01', 'MOV V01,V02', 'MOV V02,V03', 'MOV V03,V04'])).toEqual([10, 10, 10, 10, 10, 0, 0, 0])
  })
})