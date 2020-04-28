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



