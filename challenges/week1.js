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
  let price = ((originalPrice * (vatRate / 100)) + originalPrice);
  return price;
  //if (originalPrice === undefined) throw new Error("originalPrice is requied");
  //if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
}

function getSalePrice(originalPrice, reduction) {
  let newPrice = (originalPrice - (originalPrice * (reduction / 100)))
  return newPrice

  // if (originalPrice === undefined) throw new Error("originalPrice is required");
  //if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
}

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
  var words = [];
  words = word.split("\s+");
  var result = "";
  for (var i = 0; i < words.length; i++) {
    return result += words[i].split('').reverse().join('');
    //return word.split(" ").reverse().join(" ");
    //if (word === undefined) throw new Error("word is required");
    // Add your code here!
  }
}

function reverseAllWords(words) {
  return words ? reverse(words.substr(1)) + words[0] : words
 
    //if (words === undefined) throw new Error("words is required");
    // Add your code here!
}

function countLinuxUsers(users) {
  if (users.type === '')
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  let meanScore = scores.reduce((previous, current) => current += previous)
  let avg = meanScore / scores.length
  return avg;
 // if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
let 
  if (n / 3 === )
  //if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

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
