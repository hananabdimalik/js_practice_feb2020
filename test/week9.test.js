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
        const str = ['C', 'A', 'M', 'E', 'L', 'G', 'O', 'T']

        expect(isValidDNA(str)).toBe(true);
    });
    test("return false if it doesnt contain DNA characters", () => {
        const falsyString = ['M', 'I', 'L', 'K', 'B', 'R', 'E', 'D']
        expect(isValidDNA(falsyString)).toBe(false)

    })
});

describe("getComplementaryDNA", () => {
    test("it returns an error if string is undefined", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required")
    })

    test("it returns the complementary DNA base pair", () => {
        expect(getComplementaryDNA('ACTG')).toBe('TGAC');
    });
});

describe("isItPrime", () => {
    test("it returns error if number is undefined", () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required")
    });
    test("it returns true if number is prime", () => {
        const n = [3, 5, 7, 11, 13]
        expect(isItPrime(n)).toBe(true)
    });
    test ("it returns false if numbers are not prime", () => {
        const nums = [4, 6, 8, 10]
        expect(isItPrime(nums)).toBe(false)
    });
});

describe("it returns an array of n items", () => {
    test("with an item bag and given number(n) 5 should give repeats of word bag 5 times in a matrix", () =>{
        expect(createMatrix(5, "bag")).toEqual([ 
                                              ['bag', 'bag', 'bag', 'bag', 'bag'],
                                              ['bag', 'bag', 'bag', 'bag', 'bag'],
                                              ['bag', 'bag', 'bag', 'bag', 'bag'],
                                              ['bag', 'bag', 'bag', 'bag', 'bag'], 
                                              ['bag', 'bag', 'bag', 'bag', 'bag']])
    })
})

// describe ("areWeCovered", () => {
//     test("it returns false if there are no staff at all", () => {
//         expect( areWeCovered ([], "Sunday")) .toBe(false);
//         expect( areWeCovered ([], "Monday")) .toBe(false);
//         expect( areWeCovered ([], "Tuesday")) .toBe(false);
//         expect( areWeCovered ([], "Wednesday")) .toBe(false);
//         expect( areWeCovered ([], "Thursday")) .toBe(false);
//         expect( areWeCovered ([], "Friday")) .toBe(false);
//         expect( areWeCovered ([], "Saturday")) .toBe(false);
// })
// test("returns false if there are staff but < 3 that are not schedulded to work", () => {
// const staff = [
//     {name: 'gary', rota: ["Monday, 'Tuesday"]},
//     {name: 'Mary', rota: ["Monday, 'Tuesday"]},
//     {name: 'Sam', rota: ["Monday, 'Tuesday"]},
//     {name: 'Betty', rota: ["Monday, 'Tuesday"]},

// ];
// expect(areWeCovered(staff, "wednesday")).toBe(false);
// });
// });