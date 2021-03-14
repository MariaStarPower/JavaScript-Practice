// Write an arrow function called old_enough that takes in 1 number as an argument and returns whether or not the
// person is allowed to drink (over 21). (use ES6 string interpolation).
var old_enough = (age) => {
    if(age >= 21) {
        return `You are ${age} years old and allowed to drink.`
    }
    else {
        return `You are only ${age} years old and not allowed to drink.`
    }
}

console.log(old_enough(20))
console.log(old_enough(22))

// Write an arrow function named greaterNum that: takes 2 arguments, both numbers, uses ES6 string interpolation 
// that returns whichever number is the greater (higher) number, Test the function 2 times with different number pairs
var greaterNum = (num1, num2) => {
    if(num1 > num2){
        return `${num1} is greater than ${num2}`
    }
    else if(num1 < num2){
        return `${num2} is greater than ${num1}`
    }
    else {
        return `Both ${num1} and ${num2} are equal`
    }
}

console.log(greaterNum(2, 4))
console.log(greaterNum(15, -15))
console.log(greaterNum(10, 10))

// Consider this object:
var person = {
    name: "Alex Keaton",
    phone: 123456789,
    getData() { return this.name+"-"+this.phone }
  };

 // Use object destructuring to create two variables - a name variable and a phone variable.
 var {name, phone} = person

 console.log(name)
 console.log(phone)

 console.log(person.getData())

 // Write an arrow function that uses spread operators and takes in any number of letters and returns those letters 
 // as one word.
 var oneWord = (...letters) => {
     return letters.join("")
 }

 console.log(oneWord("h","i"," ","T","o","m"))
 console.log(oneWord("G","o","o","d","n","i","g","h","t"))