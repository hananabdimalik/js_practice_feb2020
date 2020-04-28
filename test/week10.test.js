const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require('../challenges/week10');

describe("sumDigits", () => {

    test("it throws an error if a number is not passed", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required")
    })

    test("it throws an error if a number is not passed", () => {
        expect(() => {
            sumDigits("");
        }).toThrow("a number is required")
    })

    test("returns sum of a number", () => {
        expect(sumDigits(654)).toBe(15);
    });
});

describe("createRange", () => {

    test("it throws an error if the start number is not passed", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required")
    })
    test("it throws an error if the end number is not passed", () => {
        expect(() => {
            createRange('');
        }).toThrow("end is required")
    })
    test("returns an array of numbers", () => {
        expect(createRange(2, 10, 2)).toEqual([2, 4, 6, 8, 10])
    })
    test("returns an array of numbers", () => {
        expect(createRange(3, 21, 3)).toEqual([3, 6, 9, 12, 15, 18, 21])
    });
});

