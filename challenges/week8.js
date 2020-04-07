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


const count1sand0s = str => {
  let obj = {}
  let newStr = str.split('|')
  console.log(newStr)
  let count = 0
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '1') {
      count++
      console.log(count)

    // }
    // count2nd = 0
    // if (str[i] === 0) {
    //   count2nd++
    // }
  }
}

  //create an a var that holds an empty obj
  //convert string to array via split method 
  //loop through the array
  // if str === number, count ++
  //push results back to an object


  // if (str === undefined) throw new Error("str is required");
  // // Your code here!
};

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

  let firstNumber = arr[0]
  let lastNumber = arr.slice(-1)[0]
  let temp = 
 temp = lastNumber;
lastNumber = firstNumber 

  console.log(firstNumber)
  // let swapNumber = firstNumber
  // let swapNumberTwo = lastNumber
  // console.log(lastNumber)

  //store index 1 in a var
  //store the last value in another var
  //assign temp with the last value
  //then assign first value the last value 

  // if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {

  // for (searchTerm in haystack){
  for (searchTerm in haystack) {
    if (haystack.includes(searchTerm) === " ") {
      return true
    }

  }
  // loop through an object via for in method
  // using conditional statement, if condition is met, return true
  //else return false

  // if (haystack === undefined) throw new Error("haystack is required");
  // if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  let obj = {};

  // convert string to array then remove quoates
  // loop through the array
  //start count from 0
  // in an if statement, if word[i]=== word[i], count on 
  //push into object word, count
  console.log(arr)
  // let count = 0;

  // for (let i=0; i < str.length; i++){
  //   if ()
  // } else {
  //   let value = '${count}'${}
  // }

  // return str.split(' ').length


  // if (str === undefined) throw new Error("str is required");
  // // Your code here!

};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
