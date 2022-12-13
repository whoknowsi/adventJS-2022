const getFilesToBackup = require('./index.js')

describe('Challenge 13', () => {
    test("Test #01 - expect return type array", () => {
        expect(typeof getFilesToBackup(0, [0, 0])).toBe('object')
    })

    test("Test #02 - expect getFilesToBackup(1546300800, [[ 1, 1546300800 ],[ 2, 1546300800 ],[ 1, 1546300900 ],[ 1, 1546301000 ],[ 3, 1546301100 ]]) type be [1,3]", () => {
        expect(getFilesToBackup(1546300800, [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100]
        ])).toEqual([
            1,
            3
        ])
    })

    test("Test #03 - expect getFilesToBackup(1546300600, [[ 1, 1546300800 ],[ 2, 1546300800 ],[ 1, 1546300900 ],[ 1, 1546301000 ],[ 3, 1546301100 ]]) type be [1,2,3]", () => {
        expect(getFilesToBackup(1546300600, [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100]
        ])).toEqual([
            1,
            2,
            3
        ])
    })

    test("Test #04 - expect getFilesToBackup(1556300600, [[ 1, 1546300800 ],[ 2, 1546300800 ],[ 1, 1546300900 ],[ 1, 1546301000 ],[ 3, 1546301100 ]]) type be []", () => {
        expect(getFilesToBackup(1556300600, [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100]
        ])).toEqual([])
    })

    test("Test #04 - expect getFilesToBackup(1556300600, []) type be []", () => {
        expect(getFilesToBackup(1556300600, [])).toEqual([])
    })
})