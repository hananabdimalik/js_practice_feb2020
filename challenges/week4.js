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
    if (names[i].startsWith(char))
    {
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
  let word =[];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to "))  
    {
      word.push(words[i])
    }
  }
// jest --showConfig
  return word;
  // if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  let num =[];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === parseInt(nums)) 
   num.push(nums[i]);
    
  }
return num;
  //if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  // let arr = []
  for (let i = 0; i < users.length; i++) {
    return users[i].city
  }

  //if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  for (let i = 0; i < nums.length; i++) {
    return Math.sqrt(nums);
  }
  // if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
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
