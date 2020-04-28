const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require('../challenges/week9');

describe("sumMultples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");


        expect(() => {
            sumMultiples('food');
        }).toThrow("an Array is required");


        expect(() => {
            sumMultiples(4);
        }).toThrow("an Array is required");

    });

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it works okay with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("return 0 if there are no multiple of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe("isValidDNA", () => {

    test("it returns an error if string is undefined", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required")
    });

    test("return true if string conatins DNA characters", () => {
        const str = "CTGA"

        expect(isValidDNA(str)).toBe(true);
    });
    test("return false if it doesnt contain DNA characters", () => {
        const falsyString = "CTRGAQ"
        expect(isValidDNA(falsyString)).toBe(false)

    });


    test("can handle a falsy string", () => {
        expect(() => {
            isValidDNA(null);
        }).toThrow("str is required")
    });
});



    describe("getComplementaryDNA", () => {
        test("it returns an error if string is undefined", () => {
            expect(() => {
                getComplementaryDNA();
            }).toThrow("str is required")
        });

        test("it returns the complementary DNA base pair", () => {
            expect(getComplementaryDNA('ACTG')).toBe('TGAC');
        });

        test("it returns the complementary DNA base pair", () => {
            expect(() => {
                getComplementaryDNA('ACKP');
            }).toThrow('valid DNA characters required');
            
        });
    });

    describe("isItPrime", () => {
        test("it returns error if number is undefined", () => {
            expect(() => {
                isItPrime();
            }).toThrow("n is required")
        });
        test("it returns false if numbers are not prime", () => {
            expect(isItPrime(4)).toBe(false)
        });
        test("it returns true if numbers are prime", () => {
            expect(isItPrime(7)).toBe(true)
        });
    });

    describe("createMatrix", () => {

        test("it returns an error message if n is undefined", () => {
            expect(() => {
                createMatrix();
            }).toThrow("n is required")

            expect(() => {
                createMatrix("");
            }).toThrow("fill is required")
        });

        test("with an item bag and given number(n) 5 should turn repeats of word bag 5 times in an array, in a matrix", () => {
            expect(createMatrix(5, "bag")).toEqual([
                ['bag', 'bag', 'bag', 'bag', 'bag'],
                ['bag', 'bag', 'bag', 'bag', 'bag'],
                ['bag', 'bag', 'bag', 'bag', 'bag'],
                ['bag', 'bag', 'bag', 'bag', 'bag'],
                ['bag', 'bag', 'bag', 'bag', 'bag']])
        });
        test("with the word speed and number 2 should return repeats of the word speed 2 times in an array, in a matrix", () => {
            expect(createMatrix(2, "speed")).toEqual([
                ["speed", "speed"],
                ["speed", "speed"]
            ]);
        });
    });
    describe("areWeCovered", () => {

        test("returns and error message if n is undefined", () => {
            expect(() => {
                areWeCovered();
            }).toThrow("staff is required")

            expect(() => {
                areWeCovered("sweets");
            }).toThrow("day is required")
        })

        test("it returns false if there are no staff at all", () => {
            expect(areWeCovered([], "Sunday")).toBe(false);
            expect(areWeCovered([], "Monday")).toBe(false);
            expect(areWeCovered([], "Tuesday")).toBe(false);
            expect(areWeCovered([], "Wednesday")).toBe(false);
            expect(areWeCovered([], "Thursday")).toBe(false);
            expect(areWeCovered([], "Friday")).toBe(false);
            expect(areWeCovered([], "Saturday")).toBe(false);
        })
        test("returns false if there are staff but < 3 that are not schedulded to work", () => {
            const staff = [
                { name: 'gary', rota: ["Monday", "Tuesday"] },
                { name: 'Mary', rota: ["Monday", "Tuesday"] },
                { name: 'Sam', rota: ["Monday", "Tuesday"] },
                { name: 'Betty', rota: ["Monday", "Tuesday"] },

            ];
            expect(areWeCovered(staff, "wednesday"))
            .toBe(false);
        });

        test("return true if there are 3 staff scheduled to work", () => {
            const staff = [
                { name: 'Ellen', rota: ["Wednesday", "Sunday", "Friday"] },
                { name: "Jed", rota: ["Friday" , "Saturday", "Sunday"] },
                { name: "Myran", rota: ["Sunday", "Monday", "Tuesday"]}
            ];
            expect(areWeCovered(staff, "Sunday")).toBe(true)
        })
    });
