function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const squaredNum = nums.map(function (n) {
    return n * n
  })
  return squaredNum;
}



//Your code here!

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newWords = words[0]
  for (let i = 1; i < words.length; i++) {
    newWords += words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return newWords;
}



//your code here

function getTotalSubjects(people) {
if (people === undefined) throw new Error("people is required");
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    count += people[i].subjects.length
  }
  return count;
}


// Your code here!


function checkIngredients(menu, ingredient) {
if (menu === undefined) throw new Error("menu is required");
if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      return true
    }
  }
  return false;
}

// Your code here!




function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
if (arr2 === undefined) throw new Error("arr2 is required");
let matches = [];

  for (let i = 0; i < arr1.length; i++) {
    let itemInArray1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      let itemInArray2 = arr2[j];
      // IF ITEM IS IN BOTH ARRAYS
      if (itemInArray1 === itemInArray2) {
        // IF ITEM DOES NOT ALREADY EXIST IN DUPLICATE NUMBERS!
        if (matches.includes(itemInArray1) !== true)
          matches.push(itemInArray1)
      }
    }
  }
  return matches.sort()
}

// Your code here!

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
