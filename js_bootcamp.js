// Arrays

// Declare a new array of fruits
let fruits = ['apple', 'banana', 'pineapple', 'grapefruit', 'orange'];

console.log(fruits);

// Gets the number of items in the array
let itemCount = fruits.length;
console.log(`This array has ${itemCount} items in it.`);

// Gets the first item in the array
console.log(fruits[0]);

// Returns the index at which this item is located
console.log(fruits.indexOf('banana'));

// Adds another item onto the end of the array
fruits.push('mango');
console.log(fruits);

// Removes an item from the end of the array
fruits.pop();
console.log(fruits);

// Removes an item from the beginning of the array
fruits.shift();
console.log(fruits);

// Adds an item to the beginning of the array
fruits.unshift('mango');
console.log(fruits);

// Returns true if the array includes a certain item and false otherwise
console.log(fruits.includes('tangerine'));
console.log(fruits.includes('pineapple'));

// Indiciates the starting and ending index of items to be removed from the array
fruits.slice(0,2);
console.log(fruits);

// Indiciates the starting index, how many items to be removed, and the items to be added to the array
fruits.splice(3, 0, 'lemon');
console.log(fruits);

// Old-fashioned way of looping through the items in an array
for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i]} is good for you!`);
}

// New method of looping through items in an array without changing the original array
fruits.forEach(fruit => console.log(`${fruit} is good for you!`));

// Declare a new array of numbers
let numbers = [33, 15, 1, 5, 0, 10, 100];
console.log(numbers);

// Gets the highest number from the array
let highest = Math.max(...numbers);
console.log(highest);

// Gets the lowest number from the array
let lowest = Math.min(...numbers);
console.log(lowest);

// Declare another array of numbers
let newNumbers = [16, 5, 13, 33, 99, 110, 8];
console.log(newNumbers);

// Combines the arrays of numbers
let combined = [...numbers, ...newNumbers];
console.log(combined);

// Removes any duplicate values from the combined array
let noRepeats = [...new Set(combined)];
console.log(noRepeats);

// Declare array of names
let letters = ['Hal', 'Lois', 'Francis', 'Reese', 'Malcolm', 'Dewey'];
console.log(letters);

// Sorts the names in alphabetical order ascending
console.log(letters.sort());

// Reverses the order of the items in the array
console.log(letters.reverse());

// Declare new array of decimal numbers
let decimals = [1.5, 2.0, 3.6, 25.2];

// Rounds each of the decimals to their nearest whole number using the array map method
let roundedDecimals = decimals.map(decimal => Math.round(decimal));
console.log(roundedDecimals);

// Takes in array of numbers and returns a new array with only the even numbers
console.log([1,2,3,4,5,6,7,8,9,10].filter(num => num % 2 === 0));

// Takes in array and returns true if every element satisfies a certain condition, false otherwise
console.log([1,3,5,13,15,18,21,27].every(num => num % 3 === 0));


// Strings

// Delcare a string
let name = 'Maria';
console.log(name);

// Returns the number of characters in the string
console.log(`${name} has ${name.length} letters in it.`);

// Converts name to uppercase
console.log(name.toUpperCase());

// Converts name to lowercase
console.log(name.toLowerCase());

// Returns the character value at the specified index
console.log(name.charAt(2));

// Returns the index of a value at its first position
console.log(name.indexOf('a'));

// Returns the index of a value at the last position
console.log(name.lastIndexOf('a'));

// Returns true if a string contains a certain character, false otherwise
console.log(name.includes('i'));
console.log(name.includes('e'));

// Declare two new strings
let basket = 'basket';
let ball = 'ball'

console.log(basket);
console.log(ball);

// Combines the strings into one new string
let basketball = basket.concat(ball);
console.log(basketball);

// Returns part of a string starting at a certain index and for how many characters
console.log(basketball.substr(0, 6));

// Returns part of a string starting and ending at a certain point
console.log(basketball.substring(6, 8));

// Returns part of a string - can start from a positive or negative index
console.log(basketball.slice(6));

// Returns the index at which an expression is found
console.log(basketball.search(/ball/));

let sentence = "Harry Potter is the greatest wizard ever.";
console.log(sentence);

// Returns the expression if it is found in the string
console.log(sentence.match(/wizard/g));

// Returns the case-insensitive expression if it is found in the string
console.log(sentence.match(/harry potter/gi));

// Replaces an expression in a string with another expression
console.log(sentence.replace("Harry Potter", "Albus Dumbledore"));


// Loops

// For loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While loop
let i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}

// Do-while loop
let num = 1;
do {
    console.log(num * 5);
    num++
} while (num <= 10);


// Objects

// Declare a new object with some attributes
let wizard = {
    name: 'Harry Potter',
    occupation: 'wizard',
    house: 'Gryffindor',
    interests: ['quidditch', 'magic']
}

// For...in loop - for looping through the properties of an object
for (let property in wizard) {
    console.log(`${property}: ${wizard[property]}`);
}

// Declare an array of wizard objects
let wizards = [
    {name: "Harry Potter", house: "Gryffindor"},
    {name: "Ron Weasley", house: "Gryffindor"},
    {name: "Hermione Granger", house: "Gryffindor"},
    {name: "Draco Malfoy", house: "Slytherin"}
]

console.log(wizards);

// Returns a new array with only the names of the wizards from the wizards array of objects
console.log(wizards.map(wizard => wizard.name));

// Returns a new array with only the wizards that are in the Gryffindor house
console.log(wizards.filter(wizard => wizard.house === "Gryffindor"));


// Functions

// Old-style function
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

// ES6 arrow function
let addNumbers = (a, b) => {
    return a + b;
}

console.log(addNumbers(4, 10));

let words = "one, two, three, four, five";

console.log(words);

// Function that takes a string of words and returns a new string with the words reversed
let reverseWords = (wordString) => {
    return wordString.split(", ").reverse().join(", ");
}

console.log(reverseWords(words));