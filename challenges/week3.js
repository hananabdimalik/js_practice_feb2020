function getSquares(nums) {
  const squaredNum = nums.map(function (n) {
    return n * n
  })
  return squaredNum;
}


//if (nums === undefined) throw new Error("nums is required");
// Your code here!

function camelCaseWords(words) {
  let newWords = words[0]
  for (let i = 1; i < words.length; i++) {
    newWords += words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }
  return newWords;
}

// return words.toString().replace(",", "").split().charAt(2).toUpperCase()
//if (words === undefined) throw new Error("words is required");


function getTotalSubjects(people) {
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    count += people[i].subjects.length
  }
  return count;
}

//if (people === undefined) throw new Error("people is required");
// Your code here!

function checkIngredients(menu, ingredient) {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      return true
    }
  }
  return false;
}
// if (menu === undefined) throw new Error("menu is required");
// if (!ingredient) throw new Error("ingredient is required");
// Your code here!



function duplicateNumbers(arr1, arr2) {
  let matches =[];
  for (let i=0; i < arr1.length; i++){
    for (let j=0; j< arr2.length; i++){
      if (arr1[i] === arr2[j]) matches.push(arr1[i])
    }
  }
  return matches
}

  // if (arr1 === undefined) throw new Error("arr1 is required");
  // if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
