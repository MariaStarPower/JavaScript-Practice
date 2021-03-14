// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 90

if(item <= 100){
    console.log("in budget")
}
else {
    console.log("over budget")
}

// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry 
// and "keep coding" if you are not hungry.
var hungry = false

if(hungry === true){
    console.log("eat food")
}
else {
    console.log("keep coding")
}

// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, 
// "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "red"

if(trafficLight === "green"){
    console.log("go")
}
else if(trafficLight === "yellow"){
    console.log("slow down")
}
else if(trafficLight === "red"){
    console.log("stop")
}
else {
    console.log("invalid input")
}

// Write an if/else statement that takes two variables of numbers and outputs the larger number, 
// or logs equal if the numbers are the same.
var num1 = 13
var num2 = 20

if(num1 > num2){
    console.log(num1 + " is greater")
}
else if(num1 < num2){
    console.log(num2 + " is greater")
}
else {
    console.log(num1 + " and " + num2 + " are equal")
}

// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number = 13

if(number % 2 === 1){
    console.log(number + " is odd")
}
else if(number % 2 === 0){
    console.log(number + " is even")
}
else {
    console.log(number + " is zero")
}

// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that 
// percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available.
var grade = 95

if(grade === 100){
    console.log("perfect score!")
}
else if(grade >= 90 && grade < 100){
    console.log("A")
}
else if(grade >= 80 && grade < 90){
    console.log("B")
}
else if(grade >= 70 && grade < 80){
    console.log("C")
}
else if(grade >= 60 && grade < 70){
    console.log("D")
}
else if(grade >= 0 && grade < 60){
    console.log("F")
}
else {
    console.log("No grade available")
}

// Write an if/else statement that takes a variable of any data type and logs the data type 
// (hint: use the JS operator typeof).
var data = 6
var newData = "word"

console.log(typeof(data))
console.log(typeof(newData))