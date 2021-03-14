// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
var arr1 = [3, 9, 15, 4, 10]

function multBy3(array) {
    var newArr = []

    for(let i = 0; i < array.length; i++) {
        newArr.push(array[i] * 3)
    }

    return newArr
}

console.log(multBy3(arr1))

// Write a function that takes in an array and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]

function oddArray(array) {
    var newArr = []

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 1){
            newArr.push(array[i])
        }
    }

    return newArr
}

console.log(oddArray(arr2))

// Write a function that takes in a string and returns a new string with every letter capitalized. 
// HINT: you do not need arrays or loops.
var sent = "Hello There"

function caps(string) {
    return string.toUpperCase()
}

console.log(caps(sent))

// Write a function that takes in an array of numbers and letters and returns a new array with only the letters. 
// HINT: use typeof method.
var combo_arr = [7, "n", "i", "c", 10, "e", "w", 3, "o", "r", "k"]

function onlyLetters(array) {
    var lettersArray = [] 

    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) === 'string'){
            lettersArray.push(array[i])
        }
    }
    return lettersArray
}

console.log(onlyLetters(combo_arr))

// Create a function that finds the highest number.
function highestNumber(array) {
   return Math.max.apply(null, array)
}

console.log(highestNumber([1,4,2]))

// Create a function that finds the lowest number.
function lowestNumber(array) {
    return Math.min.apply(null, array)
}

console.log(lowestNumber([1,4,2]))

// Create a function that calculate the sum.
function sumNumbers(array) {
    var sum = 0

    for(let i = 0; i < array.length; i++){
        sum += array[i] 
    }
    return sum
}

console.log(sumNumbers([1,2,3]))
console.log(sumNumbers([]))

// Create a function that calculate the mean value.
function meanValue(array) {
    var sum = 0
    var mean = 0

    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    mean = sum / array.length

    return mean
}

console.log(meanValue([1,2,3]))

// Create a function that finds the index of the highest number.
function highestNumIndex(array) {
    var max = Math.max.apply(null,array)

    return array.indexOf(max)

}

console.log(highestNumIndex([1,4,2]))

// Pre-fill
// Write a Javascript function called fillArray to create a specified number of elements with a pre-filled numeric values in an array.

// fillArray(6, 0) should return [0, 0, 0, 0, 0, 0] fillArray(4, 11) should return [11, 11, 11, 11]
function fillArray(num1, num2){
    let newArray = []

    for(let i = 0; i < num1; i++) {
        newArray.push(0)
    }
    return newArray.fill(num2)
}

console.log(fillArray(6, 0))
console.log(fillArray(4, 11))

// Write a Javascript function to filter false, null, 0 and blank values from an array.
function filterArrayValues(array) {
    var filtered = []

    for(let i = 0; i < array.length; i++){
        if(array[i] !== false && array[i] !== null && array[i] !== 0 && array[i] !== ''){
            filtered.push(array[i])
        }
    }
    return filtered
}

console.log(filterArrayValues([58, '', 'abcd', true, null, false, 0]))

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"

function noVowels(string) {
    return string.replace(/[aeiou]/g, '')
}

console.log(noVowels(str))

// Create a function that merges two arrays, takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]

function noRepeats(array1, array2) {
    var newArray = array1.concat(array2)

    var unique = [...new Set(newArray)]
    return unique
}

console.log(noRepeats(arr1, arr2))