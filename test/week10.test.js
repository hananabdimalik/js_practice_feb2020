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

describe("getScreenTimeAlertList", () => {
    test("it throws an error if the user is undefined", () => {
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("users is required")
    })
    test("it throws an error if the date is undefined", () => {
        expect(() => {
            getScreentimeAlertList(" ");
        }).toThrow("date is required")
    })
    test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        expect(getScreentimeAlertList(
            [
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } }, // 96
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } }, //127
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } }, //46
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } }, //127
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },//10
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },//16
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },//31
                    ]
                },
            ], "2019-05-04")
        ).toEqual(["beth_1234"])
    });
});

describe("hexToRGB", () => {
    test("it throws an error if the hexStr is undefined", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required")
    })
    test("transform the hex code into an RGB code in the format", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)")
    });
});
describe("findWinner", () => {
    test("it throws an error if the board is undefined", () => {
        expect(() => {
            findWinner()
        }).toThrow("board is required")
    })
    test("returns 'X' if player X has won", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ])).toBe('X')
    });
    test("returns  '0' if the player 0 has won", () => {
        expect(findWinner([
            ["X", "X", "0"],
            ["X", "0", "0"],
            [null, "X", "0"]
        ])).toBe('0')
    });
    test("returns null if there is currently no winner", () => {
        expect(findWinner([
            ["X", "0", null],
            [null, null, "0"],
            ["X", null, "0"]
        ])).toBe(null)
    });
});