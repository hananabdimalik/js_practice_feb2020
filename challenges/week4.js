function findSmallNums(nums) {
  const number = nums.filter(nums => nums < 1);
  return number;
}
// if (!nums) throw new Error("nums is required");
// Your code here

function findNamesBeginningWith(names, char) {
  let name = []
  //creat var to add +ve result from the if statement
  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(char)) {
      name.push(names[i]);
      //put results in the new array with catcen
    }
  }
  return name;
}
// if (!names) throw new Error("names is required");
// if (!char) throw new Error("char is required");
// Your code here


function findVerbs(words) {
  let word = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to ")) {
      word.push(words[i])
    }
  }
  return word;
  // if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  let newNum = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 1 === 0) {
      newNum.push(nums[i])
      //console.log(newNum)  
    }
  }
  return newNum
}
//return num;  
//if (!nums) throw new Error("nums is required");
// Your code here


function getCities(users) {
  let arr = []
  for (let i = 0; i < users.length; i++) {
    arr.push(users[i].data.city.displayName)
  }
  return arr;
}

//if (!users) throw new Error("users is required");
// Your code here


function getSquareRoots(nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    arr.push(parseFloat((Math.sqrt(nums[i])).toFixed(2)))
  }
  return arr
}

// if (!nums) throw new Error("nums is required");
// Your code here

function findSentencesContaining(sentences, str) {
return sentences.filter(sentence => sentence.toLowerCase().includes(str))
}

function getLongestSides(triangles) {
  let arr =[]
  for (let i=0; i < triangles.length; i++){
    arr.push(Math.max.apply(null, triangles[i]))
  }
return arr
  //if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
