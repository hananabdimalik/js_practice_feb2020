function getFillings(sandwich) {
  return sandwich.fillings
  //if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
}

function isFromManchester(person) {
  if (person.city === "Manchester") {
    return true
  } else {
    return false
  }
}

//if (person === undefined) throw new Error("person is required");
// Your code here!


function getBusNumbers(people) {

  return Math.ceil(people / 40);
}

//if (people === undefined) throw new Error("people is required");
// Your code here!


function countSheep(arr) {
  // go through the array 
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    // arr[i]  = "sheep";
    // count ++
    if (arr[i] === "sheep") {
      count++
    }
  }
  return count;
}
//if (arr === undefined) throw new Error("arr is required");
// Your code here!


function hasMPostCode(person) {
  if (person.address.postCode.startsWith("M") && person.address.city === "Manchester") {
    return true;
  }
  return false;
}
 //if (person === undefined) throw new Error("person is required");
// Your code here!


module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
