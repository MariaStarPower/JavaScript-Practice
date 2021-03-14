// Exercise 1 - Consider this variable: var groceryList2 = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
var groceryList2 = ["chips", "dip", "cookies"]
groceryList2.push("soda")

console.log(groceryList2)

// Exercise 2 - Consider this variable: var numbers2 = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the original array.
var numbers2 = [2, 4, 6, 8, 10]
numbers2.unshift(0)

console.log(numbers2)

// Exercise 3 - Consider this variable: var groceryList1 = ["apples", "carrots", "oatmeal"]
// Write the code that will add "granola" to the end of array without altering the original array.
var groceryList1 = ["apples", "carrots", "oatmeal"]
groceryList1.push("granola")

console.log(groceryList1)

// Consider this variable: var numbers1 = [1, 2, 3, 4, 5]
// Write the code that will add the number 0 to the beginning of the array without altering the original array.
var numbers1 = [1, 2, 3, 4, 5]
numbers1.unshift(0)

console.log(numbers1)

// Consider this variable: var numbers3 = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
// Write the code that finds the index of the last appearance of the number 2.
var numbers3 = [2, 13, 6, 8, 4, 2]

console.log(numbers3.indexOf(2))
console.log(numbers3.lastIndexOf(2))

// Consider this variable: var chars = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the chars array together into a string.
// Write the code that reverses the order of the letters in the chars array and saves it into a variable 
// called charsReversed.
// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen
// between each letter.
// Write the code that brings all the letters in the charsReversed Array together into a string without separators.
var chars = ["y", "a", "r", "r", "a"]

console.log(chars.join(""))

var charsReversed = chars.reverse()
console.log(charsReversed)

console.log(charsReversed.join("-"))

console.log(charsReversed.join(""))

// Create an array with your siblings names, and an array with your parents names.
// Sort your siblings names in alphabetical order.
// Sort your parents names in reverse alphabetical order.
// Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.
// Sort all the names in reverse alphabetical order.
var siblings = ["Bill", "Charlie", "Percy", "Fred", "George", "Ron", "Ginny"]

var parents = ["Arthur", "Molly"]

console.log(siblings.sort())
console.log(parents.sort().reverse())

var combined = siblings.concat(parents)

console.log(combined.sort())
console.log(combined.reverse())