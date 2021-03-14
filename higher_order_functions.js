// Write an anonymous function that takes in an array and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]

var multBy10 = (array) => {
    let newArray = array.map(value => value * 10)
    return newArray
}

console.log(multBy10(arr1))

// Write an anonymous function that takes in an array and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]

var oddArray = (array) => {
    return array.filter(i => i % 2 === 1)
}

console.log(oddArray(arr2))

// Write a function that takes in an array of numbers and letters and returns a new array with only the letters. 
// HINT: use typeof() method.
var combo_arr = [7, "n", "i", "c", 10, "e", "w", 3, "o", "r", "k"]

let onlyLetters = (array) => {
    return array.filter(value => typeof(value) === 'string')
}

console.log(onlyLetters(combo_arr))

// Consider this array of objects: 
var animals = [
    { name: "Waffles", type: "dog", age: 12 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 },
  ];

  // Create an anonymous function that takes in any array of objects and returns a new array with only those of type cat.
  let onlyCats = (array) => {
      return array.filter(value => value.type === 'cat')
  }

  console.log(onlyCats(animals))

  // Using the same array of objects above. Create an anonymous function that returns a new array with only the names 
  // of the animals.
  let onlyNames = (array) => {
      return array.map(value => value.name)
  }

  console.log(onlyNames(animals))

  // Create a function that takes in a string and returns a new string with all the vowels removed.
  var str = "javascript is awesome"

  let noVowels = (string) => {
      return string.replace(/[aeiou]/g,'')  
  }

  console.log(noVowels(str))

// Create a function that merges two arrays, takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]

let mergeArrays = (array1, array2) => {
    var giantArray = [...array1, ...array2]

    return giantArray.filter((v,i,a) => a.indexOf(v) === i)
}

console.log(mergeArrays(arr1, arr2))

// Write a Javascript function to filter false, null, 0 and blank values from an array.
let filterArrayValues = (array) => {

    return array.filter(i => i !== false && i !== null && i !== 0 && i !== '')
}

console.log(filterArrayValues([58, '', 'abcd', true, null, false, 0]))