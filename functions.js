// Write a function called marco that returns "polo".
function marco(){
    return "polo"
}

console.log(marco())

// Write a function called greeting that takes a name as an argument and returns 'welcome <person's name here>''
function greeting(name){
    return "Welcome " + name
}

console.log(greeting("Maria"))

// Write a function called oddOrEven that takes a number as an argument and returns whether the number is 
// odd or even.
function oddOrEven(number) {
    if(number % 2 === 1) {
        return "Odd"
    }
    else {
        return "Even"
    }
}

console.log(oddOrEven(2))
console.log(oddOrEven(13))

// Write a function called triple that takes a number as an argument and returns the result of that 
// number multiplied by 3.
function triple(number) {
    return number * 3
}

console.log(triple(10))

// Write a function called multiply that takes two numbers as arguments and returns the result of one of the 
// numbers multiplied by the other.
function multiply(num1, num2){
    return num1 * num2
}

console.log(multiply(3, 6))

// Write a function called divisibleBy that takes two numbers as arguments and returns whether the first number 
// is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
function divisibleBy(num1, num2){
    if(num1 % num2 === 0){
        return num1 + " is evenly divisible by " + num2
    }
    else if(num2 === 0){
        return "second number cannot be 0"
    }
    else {
        return num1 + " is not evenly divisible by " + num2
    }
}

console.log(divisibleBy(10, 5))
console.log(divisibleBy(25, 13))
console.log(divisibleBy(15, 0))

// Write a function named greaterNum that: takes 2 arguments, both numbers, returns whichever number is the greater 
// (higher) number, Test the function 2 times with different number pairs
function greaterNum(num1, num2) {
   if(num1 > num2) {
       return num1 + " is greater"
   }
   else if(num1 < num2) {
        return num2 + " is greater"
   }
   else {
       return num1 + " and " + num2 + " are equal"
   }
}

console.log(greaterNum(20, 14))
console.log(greaterNum(3, 13))
console.log(greaterNum(0, -3))
console.log(greaterNum(4, 4))

// Write a function named helloWorld that: takes 1 argument, a language code (e.g. "es", "de", "en"),
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English,
// Test the function for each of the supported languages
function helloWorld(language){
    if (language === "es") {
        return "Hola mundo!"
    }
    else if (language === "fr") {
        return "Bonjour le monde!"
    }
    else if (language === "ge") {
        return "Hallo welt!"
    }
    else if(language === "it") {
        return "Ciao mondo!"
    }
    else {
        return "Hello world!"
    }
}

console.log(helloWorld("es"))
console.log(helloWorld("fr"))
console.log(helloWorld("ge"))
console.log(helloWorld("it"))
console.log(helloWorld(""))

// Write a function named assignGrade that: takes 1 argument, a number score, returns a grade for the score, 
// either "A", "B", "C", "D", or "F", Test the function for a few different scores.
function assignGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A"
    }
    else if (score >= 80 && score < 90) {
        return "B"
    }
    else if (score >= 70 && score < 80) {
        return "C"
    }
    else if (score >= 60 && score < 70) {
        return "D"
    }
    else if (score >= 0 && score < 60) {
        return "F"
    }
    else {
        return "Invalid score"
    }
}

console.log(assignGrade(97))
console.log(assignGrade(80))
console.log(assignGrade(73))
console.log(assignGrade(61))
console.log(assignGrade(59))
console.log(assignGrade(101))
console.log(assignGrade(-1))
console.log(assignGrade("f"))

// Write a function named pluralize that: takes 2 arguments, a noun and a number, returns the number and pluralized 
// form of the noun, if necessary

function pluralize(number, noun) {
    if(number === 1) {
        return number +  " " + noun
    }
    else if(noun === "sheep") {
        return number + " sheep"
    }
    else if(number > 1 && noun === "child") {
        return number + " children"
    }
    else if(number > 1 && noun === "person") {
        return number + " people"
    }
    else {
        return number + " " + noun + "s"
    }
}

console.log(pluralize(1, "dog"))
console.log(pluralize(5, "cat"))
console.log(pluralize(0, "chicken"))
console.log(pluralize(1, "sheep"))
console.log(pluralize(2, "sheep"))
console.log(pluralize(1, "child"))
console.log(pluralize(5, "child"))
console.log(pluralize(1, "person"))
console.log(pluralize(3, "person"))