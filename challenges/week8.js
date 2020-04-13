const findNextNumber = (nums, n) => {

  for (let i = 0; i < nums.length - 1; i++) {

    if (nums[i] === n) {
      console.log(nums[i + 1])
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
      obj[1]+= 1

    } else if (str[i] === '0') {
      obj[0] +=1 
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



//create an a var that holds an empty obj
//convert string to array via split method 
//loop through the array
// if str === number, count ++
//push results back to an object


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


const arrShift = arr => {

  console.log(arr)
  let arrShift = arr.reverse()
  console.log(arrShift)
  return arrShift
};
// return arr.reverse(arr.slice(-1)[0], arr[0])

// let firstNumber = arr[0]
// let lastNumber = arr.slice(-1)[0]

//store index 1 in a var
//store the last value in another var
//assign temp with the last value
//then assign first value the last value 

// if (arr === undefined) throw new Error("arr is required");
// Your code here!



const findNeedle = (haystack, searchTerm) => {

  for (let key in haystack) {
   console.log(haystack[key].toLowerCase())
    // console.log(haystack[key]
    if (haystack[key].toLowerCase() === searchTerm) {

      return true
    } else {
      return false
    }
  }
};

// loop through an object via for in method
// using conditional statement, if condition is met, return true
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
