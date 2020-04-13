const findNextNumber = (nums, n) => {

  for (let i = 0; i < nums.length - 1; i++) {

    if (nums[i] === n) {
      // console.log(nums[i + 1])
      return nums[i + 1]
    }
  }
  return null
}

//loop through the array
//if the value of n is same as the value of nums[i], add one to the index to get the next one
//then return the next one in the list

// if (nums === undefined) throw new Error("nums is required");
// if (n === undefined) throw new Error("n is required");
// Your code here!

//  // console.log(char)
//   if (obj[char] === undefined) {
//     obj[char] = 1
//   } else {
//     obj[char] += 1
//   }


const count1sand0s = str => {
  const obj =
  {
    1: 0,
    0: 0
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      obj[1] += 1

    } else if (str[i] === '0') {
      obj[0] += 1
    }
  }
  return obj
}
// let tally = {
//   option1: 0,
//   option2:0
// }
// if(this==that){
//   tally.option1 +=1
// }



//create an a var that holds an obj of 1 and 0, where the property is starts from 0
//loop through the array
// if str === number 1, add 1 into the object of number 1 obj[1]
// if str === number 0, add 1 into the obj of number 0 obj[0]
//return object


// if (str === undefined) throw new Error("str is required");
// // Your code here!


const reverseNumber = n => {
  return parseFloat(n.toString().split('').reverse().join(''))

  //convert number to string to split, reverse, and join
  //use parseFloat to convert string to number
  // Your code here!
}

const sumArrays = arrs => {
  return arrs.toString().split(',').map(Number).reduce((a, b) => (a + b), 0)
};
//convert numbers to string and split
//use map method to give total of the numbers in the array 
//use reduce total of first array to the next, to the next, to the next
// use reduced method to add the numbers 


// if (arrs === undefined) throw new Error("arrs is required");
// Your code here! const reduced= (accumulator, currentValue) => accumulator + currentValue;


// const arr1 = [1, 2, [3, 4]];
// arr1.flat(); 
// [1, 2, 3, 4]

const arrShift = arr => {
  let reversedArr = []
  let firstNum = arr[0]
  let lastNum = arr.slice(-1)[0]


  if (arr.length > 2) {
    const midNums = arr.slice(1, arr.length - 1)
    reversedArr.push(lastNum, midNums, firstNum)
    return reversedArr.flat();
  }
  else {
    return arr.reverse()
  }
}

//shorter versions
// let days = ["M", "T", "W", "Th", "F"]
// let firstDay= days.shift()
// let lastDay= days.pop()
// // let days = [T,W,Th]
// days.unshift(lastDay)
// days.push(firstDay)
//  console.log(days)

//create a empty array in a var
//store first number into a var
//store the last value in another var
//using an if statement, if number of arrays is more than 2, push into the empty array the last, mid and first var
//create a const for mid number. use slice(-1, arr.length-1) method to get the mid numbers
//push into the new arr the swapped numbered using  the flat method to elimate the square barackets around the mid nums 
//else, if numbers in the array are less than 2, return reversed arr using arr.reversed method.



// if (arr === undefined) throw new Error("arr is required");
// Your code here!


const findNeedle = (haystack, searchTerm) => {
  for (let key in haystack) {
    if (typeof (haystack[key]) === 'string') {
      if (haystack[key].toLowerCase().includes(searchTerm.toLowerCase())) {
        return true
      }
    }
  }
  return false
}


// loop through an object via for in method
//lower the case of the property of the object
//only check the value of the string
// using conditional statement, if the obj contains a string 
//else return false

// if (haystack === undefined) throw new Error("haystack is required");
// if (searchTerm === undefined) throw new Error("searchTerm is required");
// Your code here!

const getWordFrequencies = str => {

  const frequencies = {};
  //console.log(str.split(' '))
  const char = str.toLowerCase().split(' ')
  //console.log(char)

  for (let i = 0; i < char.length; i++) {

    let newString = char[i].replace(/[^a-zA-Z0-9]/g, "")
    if (frequencies[newString] === undefined) {

      //console.log(newString)
      frequencies[newString] = 1
    } else {
      frequencies[newString] += 1
    }
  }
  console.log(frequencies)
  return frequencies
};
// if (str === undefined) throw new Error("str is required");
// // Your code here!



module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
