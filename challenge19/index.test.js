const sortToys = require('./index.js')

describe('Challenge 19', () => {
    test("Test #01 - expect return type array", () => {
        expect(typeof sortToys([], [])).toBe('object')
    })

    test(`Test #02 - expected sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]) to be ["puzzle","car","ball","doll"]`, () => {
        expect(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])).toEqual(["puzzle", "car", "ball", "doll"])
    })

    test(`Test #03 - expected sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4]) to be ["ps4","xbox","switch","pc","nintendo"]`, () => {
        expect(sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4])).toEqual(["ps4", "xbox", "switch", "pc", "nintendo"])
    })

    test(`Test #04 - expected sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9]) to be ["ps4","xbox","switch","pc","nintendo"]`, () => {
        expect(sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])).toEqual(["ps4", "xbox", "switch", "pc", "nintendo"])
    })

    test(`Test #05 - expected sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]) to be ["l","a","b","c","d","e","f","g","h","j","k"]`, () => {
        expect(sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111])).toEqual(["l", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k"])
    })


})