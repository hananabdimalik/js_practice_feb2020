function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
  // if (firstName === undefined) throw new Error("firstName is required");
  //if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
}

function addVAT(originalPrice, vatRate) {
  let newVatRate = vatRate / 100;
  let price = ((originalPrice * newVatRate) + originalPrice);
  if (price % 2 === 0) {
    return Math.round(price);
  } else {
    //let changeToString = ->the method that changes it to a string passing it price
    let stringPrice = parseFloat(price);
    // let roundIt = -> the method that rounds it passing it changeToString
    let roundPrice = stringPrice.toFixed(2);
    //let changeBackToNumber = -> the method that changes it to a number passing it roundIt
    //return changeBackNumber
    let numberPrice = parseFloat(roundPrice)
    // console.log(stringPrice, roundPrice, numberPrice)
    return numberPrice;

  }
  //if (originalPrice === undefined) throw new Error("originalPrice is requied");
  //if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
}

function getSalePrice(originalPrice, reduction) {
  let newPrice = (originalPrice - (originalPrice * (reduction / 100)))
  return parseFloat(newPrice.toFixed(2))

}

// if (originalPrice === undefined) throw new Error("originalPrice is required");
//if (reduction === undefined) throw new Error("reduction is required");
// Add your code here!

function getMiddleCharacter(str) {
  let length = str.length;
  let middle = Math.floor(length / 2)
  if (length % 2 === 0) {
    // if even return the middle chara
    return str[middle - 1] + str[middle]
  } else {
    if (length % 2 === 1) {
      //if odd return the  2 midd chara
      return str[middle]
    }
  }
  //if odd 
  //if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {

  // creat var empty arr word
  let words = [];
  //assigning words to input which could be string into an array where each individual word an element in an array 
  words = word.split("\s+");
  // creat an empty string to add back each word from the array as we go through it and reverse it
  let result = "";
  for (let i = 0; i < words.length; i++) {
    return result += words[i].split('').reverse().join('');
    // += cancatentation of the words 

    //if (word === undefined) throw new Error("word is required");
    // Add your code here!
  }
}

function reverseAllWords(words) {
  // creat var for an empty array
  let result = [];
  // 
  for (let i = 0; i < words.length; i++) {
    result.push(words[i].split('').reverse().join(''));
    //if (words === undefined) throw new Error("words is required");
    // Add your code here!
  }
  return result;
}

function countLinuxUsers(users) {
  let count = 0;
  // let type = users.type
  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux")
      count++
  }
  return count;
}

// if (users === undefined) throw new Error("users is required");
// Add your code here!

function getMeanScore(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  } let avgScores = total / scores.length;
  return parseFloat(avgScores.toFixed(2));


  // if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz"
  } else if (n % 3 === 0) {
    return "fizz"
  } else if (n % 5 === 0) {
    return "buzz"
  } else if (n % 3 === 1 || n % 5 === 1) {
    return n;
  }
}



//if (n === undefined) throw new Error("n is required");
// Add your code here!


module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
