// Consider this variable: var person = { fName: "Arthur", lastName: "Dent" }
// Write the code that accesses the first name of the person object. Then write the code that accesses the 
// last name of the person object.
var person = { fName: "Arthur", lastName: "Dent" }

console.log(person.fName)
console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = 'Earth'

console.log(person.homePlanet)

// Update the person object with a method that logs 'Arthur Dent is from planet Earth.'.
person.description = function() {
    return person.fName + " " + person.lastName + " is from planet " + person.homePlanet
}

console.log(person.description())

// Consider this variable: var product = { name: "chair", price: 14.99 }
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. 
// It costs $14.99".
var product = { name: "chair", price: 14.99 }

function describeProduct(object) {
    return "The product is a " + object.name + ". It costs $" + object.price + "."
}

console.log(describeProduct(product))

// Consider this variable: var lunch = { name: "PB and Banana", type: "sandwich", 
// ingredients: ["bread", "peanut butter", "banana"] }
// Write the code that accesses the ingredients property.
var lunch = { name: "PB and Banana", type: "sandwich", ingredients: ["bread", "peanut butter", "banana"] }

console.log(lunch.ingredients)

// Write the code that access the 3rd ingredient of the lunch object.
console.log(lunch.ingredients[2])

// Write a function that takes an argument like the lunch object and returns "The ingredients for a PB and
// Banana sandwich are bread, peanut butter, and banana."
function sandwich(object) {
    return "The ingredients for a " + object.name + " " + object.type + " are: " + object.ingredients
}

console.log(sandwich(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, 
// peanut butter, and banana."

lunch.description = function() {
    return "The ingredients for a " + lunch.name + " " + lunch.type + " are: " + lunch.ingredients
}

console.log(lunch.description())

// Consider this class:
class Coffee {
    constructor(type, cream=0, sugar=0){
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile(){
        return this.type + " coffee: " + this.creams() + ", " + this.sugars()
    }

    creams() {
        if(this.cream > 1){
            return this.cream + " creams"
        }
        else {
            return this.cream + " cream"
        }
    }

    sugars() {
        if(this.sugar > 1) {
            return this.sugar + " sugars"
        }
        else {
            return this.sugar + " sugar"
        }
    }
  }
 //  Write the code that makes a black coffee.
 blackCoffee = new Coffee('Black')

 console.log(blackCoffee.coffeeProfile())

 // Write the code that makes a coffee with 1 cream and 2 sugars.
sugarCoffee = new Coffee('Sugar', 1, 2)

console.log(sugarCoffee.coffeeProfile())

// Write the code that makes a coffee with 2 creams and 1 sugar. Then write the code that outputs the 
// coffee's profile.
creamCoffee = new Coffee('Cream', 2, 1)

console.log(creamCoffee.coffeeProfile())

// Write a Latte class that receives a type, a milk type (default to 'milk') and a number of shots (default to 1).
// Write a method for your Latte class that outputs the latte's profile.
class Latte {
    constructor(type, milk = 'milk', shots = 1){
        this.type = type,
        this.milk = milk,
        this.shots = shots
    }

    latteProfile() {
        return this.type + " latte with " + this.milk + " and " + this.shot()
    }

    shot() {
        if(this.shots > 1) {
            return this.shots + " shots"
        }
        else {
            return this.shots + " shot"
        }
    }
}
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
myLatte = new Latte('regular')

console.log(myLatte.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
hazelnut = new Latte('hazelnut', 'almond milk', 2)

console.log(hazelnut.latteProfile())

// Write a class that accepts a product, and budget in its constructor. Add a function that determines if the 
// product is in budget, and displays the appropriate message:
// "This product is in budget."
// "This product is beyond budget."
var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00

class CheckBudget {
    constructor(product, budget){
        this.product = product,
        this.budget = budget
    }

    inBudget() {
        if(product.price <= budget){
            return "This product is in budget."
        }
        else {
            return "This product is beyond budget."
        }
    }
}

oledMonitor = new CheckBudget(product, budget)

console.log(oledMonitor.inBudget())

// Write a program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h, where r is the radius and h is the height of the cylinder.
class Cylinder {
    constructor(radius, height){
        this.radius = radius,
        this.height = height
    }

    getVolume(){
        var volume = Math.PI * (this.radius * this.radius) * this.height
        return "The volume of this cylinder is " + volume.toFixed(4)
    }
}

myCylinder = new Cylinder(3, 6)

console.log(myCylinder.getVolume())

// Write a program that calculates the total, tax, and weight of the items in a shopping cart.
var cartItems = [
    {
      name: "banana",
      price: 2.34,
      weight: 1.2
    },
    {
      name: 'Cereal',
      price: 5.67,
      weight: 2.2
    },
    {
      name: 'Gogurt',
      price: 3.99,
      weight: 3.1
    }
  ]

  function getTotalPrice(items) {
      var totalPrice = 0

      for(let i = 0; i < items.length; i++){
          totalPrice += items[i].price
      }
      return "The total price of these items is $" + totalPrice.toFixed(2)
  }

  function getTotalWeight(items) {
      var totalWeight = 0

      for(let i = 0; i < items.length; i++){
          totalWeight += items[i].weight
      }
      return "The total weight of these items is " + totalWeight
  }

  console.log(getTotalPrice(cartItems))
  console.log(getTotalWeight(cartItems))

  class Total {
      constructor(items){
          this.items = items
      }

      getTotals() {
          var totalPrice = 0
          var totalWeight = 0

          for(let i = 0; i < this.items.length; i++) {
              totalPrice += this.items[i].price
              totalWeight += this.items[i].weight
          }

          return "The total price of these items is $" + totalPrice.toFixed(2) + " and their total weight is " 
            + totalWeight 
      }
  }

  myItems = new Total(cartItems)

  console.log(myItems.getTotals())